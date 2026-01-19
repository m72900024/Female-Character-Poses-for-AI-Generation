import { copyToClipboard, toggleSection } from './utils.js';
import * as L1 from './layers/layer1_character.js';
import * as L2 from './layers/layer2_outfit.js';
import * as L3 from './layers/layer3_camera.js';
import * as L4 from './layers/layer4_stage.js';
import * as L5 from './layers/layer5_filter.js';
import * as L6 from './layers/layer6_render.js';

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
    if(output) output.textContent = JSON.stringify(schema, null, 2);
}

document.addEventListener('DOMContentLoaded', () => {
    // 綁定複製按鈕
    const btnCopy = document.getElementById('btnCopyJson');
    if(btnCopy) {
        btnCopy.addEventListener('click', () => {
            copyToClipboard(document.getElementById('jsonOutput').textContent);
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

    // 初次執行
    updatePrompt();
});
