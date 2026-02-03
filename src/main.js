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

    // ★ 正面視角時自動加入角度排除負面提示詞
    if (schema.camera_work?.camera?.position?.includes('front view') && schema.render_settings?.negative_prompt !== undefined) {
        const angleNeg = "(side view:1.2), (3/4 view:1.2), (profile:1.1), (angled shot:1.1), (from side:1.1)";
        schema.render_settings.negative_prompt = schema.render_settings.negative_prompt
            ? `${schema.render_settings.negative_prompt}, ${angleNeg}`
            : angleNeg;
    }

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
// 預設只開啟 Layer 2 (服裝) 和 Layer 3 (鏡頭)
function setDefaultState() {
    // 1. 角色設定 - 關閉 (可透過 AI 指令開啟)
    setToggle('toggleLayerCharCore', false);

    // 2. 服裝設定 - 開啟 Layer + 服裝
    setToggle('toggleLayerOutfit', true);
    setToggle('toggleCharCostume', true);

    // 3. 鏡頭設定 - 開啟 Layer
    setToggle('toggleLayerCamera', true);

    // 4. 物理環境 - 關閉 (可透過 AI 指令開啟)
    setToggle('toggleLayerStage', false);

    // 5. 風格濾鏡 - 關閉 (可透過 AI 指令開啟)
    setToggle('toggleLayerFilter', false);

    // 6. 渲染設定 - 關閉 (可透過 AI 指令開啟)
    setToggle('toggleLayerRender', false);
}

function setToggle(id, checked) {
    const el = document.getElementById(id);
    if (el) {
        el.checked = checked;
        toggleSection(id);
    }
}
