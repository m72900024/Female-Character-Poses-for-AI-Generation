import { copyToClipboard, toggleSection, showToast } from './utils.js';
import * as L1 from './layers/layer1_character.js';
import * as L2 from './layers/layer2_outfit.js';
import * as L3 from './layers/layer3_camera.js';
import * as L4 from './layers/layer4_stage.js';
import * as L5 from './layers/layer5_filter.js';
import * as L6 from './layers/layer6_render.js';

// 用來暫存歷史資料的陣列
let historyData = [];

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

// 新增：處理歷史紀錄
function addToHistory() {
    const jsonText = document.getElementById('jsonOutput').textContent;
    if (!jsonText || jsonText === '{}') return;

    const timestamp = new Date().toLocaleTimeString();
    
    // 簡單解析一下 JSON 為了顯示標題 (例如顯示 Character Base 或 Costume)
    let summary = "Custom Prompt";
    try {
        const data = JSON.parse(jsonText);
        if (data.character?.base) summary = data.character.base.split('(')[0];
        else if (data.costume?.mode) summary = `Costume: ${data.costume.mode}`;
        else if (data.stage?.location) summary = `Loc: ${data.stage.location}`;
    } catch(e) {}

    // 加到陣列開頭
    historyData.unshift({ time: timestamp, json: jsonText, summary: summary });
    
    // 限制只留最近 10 筆
    if (historyData.length > 10) historyData.pop();

    renderHistory();
    showToast("已新增至歷史紀錄！");
}

function clearHistory() {
    historyData = [];
    renderHistory();
}

function renderHistory() {
    const container = document.getElementById('historyList');
    if (!container) return;

    container.innerHTML = '';

    if (historyData.length === 0) {
        container.innerHTML = '<div class="text-center text-slate-600 text-xs py-4">尚無紀錄，點擊上方「記錄快照」保存。</div>';
        return;
    }

    historyData.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = "bg-slate-800 p-2 rounded border border-slate-700 hover:border-blue-500 cursor-pointer transition group relative";
        card.onclick = () => copyToClipboard(item.json);

        card.innerHTML = `
            <div class="flex justify-between items-center">
                <span class="text-xs text-blue-300 font-bold truncate w-2/3">${item.summary}</span>
                <span class="text-[10px] text-slate-500">${item.time}</span>
            </div>
            <div class="text-[10px] text-slate-400 truncate mt-1 opacity-60 font-mono">
                ${item.json.replace(/\n/g, '').substring(0, 50)}...
            </div>
            <div class="absolute right-2 bottom-2 opacity-0 group-hover:opacity-100 transition text-xs text-blue-400 bg-slate-900 px-1 rounded">
                <i class="fa-regular fa-copy"></i> 點擊複製
            </div>
        `;
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // 綁定主複製按鈕
    const btnCopy = document.getElementById('btnCopyJson');
    if(btnCopy) {
        btnCopy.addEventListener('click', () => {
            copyToClipboard(document.getElementById('jsonOutput').textContent);
        });
    }

    // 綁定快照按鈕
    const btnSnapshot = document.getElementById('btnSnapshot');
    if(btnSnapshot) {
        btnSnapshot.addEventListener('click', addToHistory);
    }

    // 綁定清空按鈕
    const btnClear = document.getElementById('btnClearHistory');
    if(btnClear) {
        btnClear.addEventListener('click', clearHistory);
    }

    // 初始化各層
    L1.init(updatePrompt);
    L2.init(updatePrompt);
    L3.init(updatePrompt);
    L4.init(updatePrompt);
    L5.init(updatePrompt);
    L6.init(updatePrompt);

    // 主開關監聽
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
                toggleSection(id); 
                updatePrompt();    
            });
        }
    });

    // 初次執行
    updatePrompt();
});
