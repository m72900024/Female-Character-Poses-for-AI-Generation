import { copyToClipboard, toggleSection } from './utils.js';
import * as L1 from './layers/layer1_character.js';
import * as L2 from './layers/layer2_outfit.js';
import * as L3 from './layers/layer3_camera.js';
import * as L4 from './layers/layer4_stage.js';
import * as L5 from './layers/layer5_filter.js';
import * as L6 from './layers/layer6_render.js';

// 輸出格式: 'json' 或 'sd'
let outputFormat = 'json';

// 將 JSON schema 轉換為 SD Prompt 格式
function schemaToSDPrompt(schema) {
    const prompts = [];

    // 遞迴提取所有值
    function extractValues(obj) {
        if (!obj || typeof obj !== 'object') return;

        for (const key of Object.keys(obj)) {
            const value = obj[key];

            if (typeof value === 'string' && value && value !== 'None') {
                // 清理中文括號內容，只保留英文提示詞
                let cleanValue = value;
                // 移除括號內的中文 (xxx)
                cleanValue = cleanValue.replace(/\s*\([^)]*[\u4e00-\u9fa5][^)]*\)/g, '');
                // 移除剩餘的中文字符
                cleanValue = cleanValue.replace(/[\u4e00-\u9fa5]/g, '');
                // 清理多餘空格和逗號
                cleanValue = cleanValue.replace(/\s+/g, ' ').replace(/,\s*,/g, ',').trim();
                cleanValue = cleanValue.replace(/^,\s*/, '').replace(/,\s*$/, '');

                if (cleanValue) {
                    prompts.push(cleanValue);
                }
            } else if (typeof value === 'object') {
                extractValues(value);
            }
        }
    }

    extractValues(schema);

    // 合併並清理
    let result = prompts.join(', ');
    // 清理重複逗號和空格
    result = result.replace(/,\s*,/g, ', ').replace(/\s+/g, ' ').trim();

    return result;
}

function updatePrompt() {
    const schema = {};

    // 取得開關狀態
    const enL1 = document.getElementById('toggleLayerCharCore')?.checked;
    const enL2 = document.getElementById('toggleLayerOutfit')?.checked;
    const enL3 = document.getElementById('toggleLayerCamera')?.checked;
    const enL4 = document.getElementById('toggleLayerStage')?.checked;
    const enL5 = document.getElementById('toggleLayerFilter')?.checked;
    const enL6 = document.getElementById('toggleLayerRender')?.checked;

    if (enL1 || enL2) schema.character = {};

    if (enL1) Object.assign(schema.character, L1.getData());
    if (enL2) Object.assign(schema.character, L2.getData());
    if (enL3) schema.camera_work = L3.getData();
    if (enL4) schema.stage = L4.getData();
    if (enL5) schema.filter_preset = L5.getData();
    if (enL6) schema.render_settings = L6.getData();

    const output = document.getElementById('jsonOutput');
    if (output) {
        if (outputFormat === 'json') {
            output.textContent = JSON.stringify(schema, null, 2);
            output.classList.add('text-green-400');
            output.classList.remove('text-amber-300', 'whitespace-pre-wrap');
        } else {
            output.textContent = schemaToSDPrompt(schema);
            output.classList.remove('text-green-400');
            output.classList.add('text-amber-300', 'whitespace-pre-wrap');
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 綁定複製按鈕
    const btnCopy = document.getElementById('btnCopyJson');
    if(btnCopy) {
        btnCopy.addEventListener('click', () => {
            copyToClipboard(document.getElementById('jsonOutput').textContent, outputFormat);
        });
    }

    // 格式切換按鈕
    const btnFormatJson = document.getElementById('btnFormatJson');
    const btnFormatSD = document.getElementById('btnFormatSD');
    const btnCopyText = document.getElementById('btnCopyText');
    const outputTitle = document.getElementById('outputTitle');

    console.log('Format buttons found:', !!btnFormatJson, !!btnFormatSD);

    if (btnFormatJson && btnFormatSD) {
        console.log('Attaching event listeners to format buttons');
        btnFormatJson.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('JSON button clicked');
            outputFormat = 'json';
            btnFormatJson.classList.add('bg-white', 'shadow', 'text-blue-600');
            btnFormatJson.classList.remove('text-slate-500');
            btnFormatSD.classList.remove('bg-white', 'shadow', 'text-blue-600');
            btnFormatSD.classList.add('text-slate-500');
            if (btnCopyText) btnCopyText.textContent = '複製 JSON';
            if (outputTitle) outputTitle.innerHTML = '<i class="fa-solid fa-code mr-2"></i>JSON Output';
            updatePrompt();
        });

        btnFormatSD.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('SD button clicked');
            outputFormat = 'sd';
            btnFormatSD.classList.add('bg-white', 'shadow', 'text-blue-600');
            btnFormatSD.classList.remove('text-slate-500');
            btnFormatJson.classList.remove('bg-white', 'shadow', 'text-blue-600');
            btnFormatJson.classList.add('text-slate-500');
            if (btnCopyText) btnCopyText.textContent = '複製 Prompt';
            if (outputTitle) outputTitle.innerHTML = '<i class="fa-solid fa-wand-magic-sparkles mr-2"></i>SD Prompt';
            updatePrompt();
        });
    }

    // 初始化各層
    L1.init(updatePrompt);
    L2.init(updatePrompt);
    L3.init(updatePrompt);
    L4.init(updatePrompt);
    L5.init(updatePrompt);
    L6.init(updatePrompt);

    // 主 Layer 開關的監聽事件
    const mainToggles = [
        'toggleLayerCharCore', 
        'toggleLayerOutfit', 
        'toggleLayerCamera', 
        'toggleLayerStage', 
        'toggleLayerFilter', 
        'toggleLayerRender'
    ];

    mainToggles.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('change', () => {
                toggleSection(id); // 呼叫 utils 裡的動畫函式
                updatePrompt();    // 更新 JSON
            });
        }
    });

    // ★★★ 設定預設開啟狀態 ★★★
    setDefaultState();

    // 初次執行
    updatePrompt();
});

// ★★★ 預設開啟狀態設定函式 ★★★
function setDefaultState() {
    // 1. 角色設定 - 開啟 Layer + 基礎描述 + 髮型 + 表情
    setToggle('toggleLayerCharCore', true);
    setToggle('toggleCharBase', true);
    setToggle('toggleCharHair', true);
    setToggle('toggleCharExpression', true);

    // 2. 服裝設定 - 開啟 Layer + 服裝，設定旗袍分類 + 現代短款花旗袍
    setToggle('toggleLayerOutfit', true);
    setToggle('toggleCharCostume', true);
    // 設定套裝分類為旗袍 (qipao)
    const costumeCategory = document.getElementById('charCostumeSetCategory');
    if (costumeCategory) {
        costumeCategory.value = 'qipao';
        costumeCategory.dispatchEvent(new Event('change'));
    }
    // 設定為「現代短款花旗袍」
    setTimeout(() => {
        const costumeStyle = document.getElementById('charCostumeSetStyle');
        if (costumeStyle) {
            for (let i = 0; i < costumeStyle.options.length; i++) {
                if (costumeStyle.options[i].text.includes('現代短款花旗袍')) {
                    costumeStyle.selectedIndex = i;
                    break;
                }
            }
        }
    }, 50);

    // 3. 鏡頭設定 - 開啟 Layer，設定全身 + 正面 + 平視 + 動作：雙手叉腰
    setToggle('toggleLayerCamera', true);
    const camFraming = document.getElementById('camFraming');
    const camPosition = document.getElementById('camPosition');
    const camVertical = document.getElementById('camVertical');
    const camPoseCategory = document.getElementById('camPoseCategory');
    const camPoseStyle = document.getElementById('camPoseStyle');

    if (camFraming) {
        for (let i = 0; i < camFraming.options.length; i++) {
            if (camFraming.options[i].text.includes('全身')) {
                camFraming.selectedIndex = i;
                break;
            }
        }
    }
    if (camPosition) camPosition.selectedIndex = 0; // 正面
    if (camVertical) camVertical.selectedIndex = 0; // 平視

    // 設定動作姿態：正面 > 雙手叉腰
    if (camPoseCategory) {
        camPoseCategory.value = 'front';
        camPoseCategory.dispatchEvent(new Event('change'));
    }
    setTimeout(() => {
        const poseStyle = document.getElementById('camPoseStyle');
        if (poseStyle) {
            for (let i = 0; i < poseStyle.options.length; i++) {
                if (poseStyle.options[i].text.includes('雙手叉腰')) {
                    poseStyle.selectedIndex = i;
                    break;
                }
            }
        }
    }, 50);

    // 4. 物理環境 - 開啟 Layer，設定私密 + 臥室
    setToggle('toggleLayerStage', true);
    const stageCategory = document.getElementById('stageLocCategory');
    if (stageCategory) {
        stageCategory.value = 'private';
        stageCategory.dispatchEvent(new Event('change'));
    }

    // 5. 風格濾鏡 - 開啟 Layer，設定日系夢幻 (pastel)
    setToggle('toggleLayerFilter', true);
    setTimeout(() => {
        const pastelFilter = document.querySelector('[data-filter="pastel"]');
        if (pastelFilter) pastelFilter.click();
    }, 50);

    // 6. 渲染設定 - 開啟 Layer + 畫幅比例 + 媒材風格
    setToggle('toggleLayerRender', true);
    setToggle('toggleRenderRatio', true);
    setToggle('toggleRenderMedium', true);
}

function setToggle(id, checked) {
    const el = document.getElementById(id);
    if (el) {
        el.checked = checked;
        toggleSection(id);
    }
}
