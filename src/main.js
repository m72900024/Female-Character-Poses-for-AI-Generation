import { showToast, copyToClipboard } from './utils.js';

// 引入各層邏輯
import * as L1 from './layers/layer1_character.js';
import * as L2 from './layers/layer2_outfit.js';
import * as L3 from './layers/layer3_camera.js';
import * as L4 from './layers/layer4_stage.js';
import * as L5 from './layers/layer5_filter.js';
import * as L6 from './layers/layer6_render.js';

// 定義核心更新函式 (Aggregation Logic)
function updatePrompt() {
    const promptSchema = {};

    // 檢查各層開關狀態
    const layerCharCoreEnabled = document.getElementById('toggleLayerCharCore')?.checked;
    const layerOutfitEnabled = document.getElementById('toggleLayerOutfit')?.checked;
    const layerCameraEnabled = document.getElementById('toggleLayerCamera')?.checked;
    const layerStageEnabled = document.getElementById('toggleLayerStage')?.checked;
    const layerFilterEnabled = document.getElementById('toggleLayerFilter')?.checked;
    const layerRenderEnabled = document.getElementById('toggleLayerRender')?.checked;

    // 初始化 character 物件 (如果 L1 或 L2 開啟)
    if (layerCharCoreEnabled || layerOutfitEnabled) {
        promptSchema.character = {};
    }

    // 收集 Layer 1 資料
    if (layerCharCoreEnabled) {
        const l1Data = L1.getData();
        Object.assign(promptSchema.character, l1Data);
    }

    // 收集 Layer 2 資料 (合併到 character)
    if (layerOutfitEnabled) {
        const l2Data = L2.getData();
        // L2 返回的可能是 { costume: ..., legwear: ... }
        Object.assign(promptSchema.character, l2Data);
    }

    // 收集 Layer 3 資料
    if (layerCameraEnabled) {
        promptSchema.camera_work = L3.getData();
    }

    // 收集 Layer 4 資料
    if (layerStageEnabled) {
        promptSchema.stage = L4.getData();
    }

    // 收集 Layer 5 資料
    if (layerFilterEnabled) {
        promptSchema.filter_preset = L5.getData();
    }

    // 收集 Layer 6 資料
    if (layerRenderEnabled) {
        promptSchema.render_settings = L6.getData();
    }

    // 渲染到畫面
    const jsonStr = JSON.stringify(promptSchema, null, 2);
    document.getElementById('jsonOutput').textContent = jsonStr;
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // 綁定複製按鈕
    const copyBtn = document.querySelector('header button');
    if(copyBtn) copyBtn.onclick = () => copyToClipboard();

    // 初始化各層，並傳入 updatePrompt 作為回調，當 UI 變更時觸發更新
    L1.init(updatePrompt);
    L2.init(updatePrompt);
    L3.init(updatePrompt);
    L4.init(updatePrompt);
    L5.init(updatePrompt);
    L6.init(updatePrompt);

    // 綁定 Layer 開關的 checkbox 事件
    const toggles = [
        'toggleLayerCharCore', 'toggleLayerOutfit', 'toggleLayerCamera', 
        'toggleLayerStage', 'toggleLayerFilter', 'toggleLayerRender'
    ];
    
    toggles.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('change', (e) => {
                // 處理視覺上的摺疊 (這裡簡單實作，也可以移到 utils)
                const contentId = id.replace('toggle', 'content');
                const content = document.getElementById(contentId);
                if (content) {
                    if (e.target.checked) content.classList.remove('collapsed');
                    else content.classList.add('collapsed');
                }
                updatePrompt();
            });
        }
    });

    // 初次執行
    updatePrompt();
});
