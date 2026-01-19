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

// --- 歷史紀錄邏輯 (含 Local Storage) ---

function loadHistory() {
    const saved = localStorage.getItem('prompt_history');
    if (saved) {
        try {
            historyData = JSON.parse(saved);
            renderHistory();
        } catch (e) {
            console.error("讀取歷史失敗", e);
        }
    }
}

function saveHistory() {
    localStorage.setItem('prompt_history', JSON.stringify(historyData));
    renderHistory();
}

function addToHistory() {
    const jsonText = document.getElementById('jsonOutput').textContent;
    if (!jsonText || jsonText === '{}') return;

    const timestamp = new Date().toLocaleString('zh-TW', { hour12: false });
    
    // 解析 JSON 以產生摘要標題
    let summary = "自訂 Prompt";
    try {
        const data = JSON.parse(jsonText);
        // 嘗試抓取比較有識別度的欄位當標題
        if (data.character?.base) {
            summary = data.character.base.split('(')[0];
            if (data.character.costume?.description) {
                summary += ` + ${data.character.costume.description.split('(')[0].split(',')[0]}`;
            }
        } else if (data.stage?.location) {
            summary = `場景: ${data.stage.location}`;
        }
    } catch(e) {}

    // 加到陣列開頭
    historyData.unshift({ time: timestamp, json: jsonText, summary: summary });
    
    // 限制只留最近 20 筆
    if (historyData.length > 20) historyData.pop();

    saveHistory(); // 儲存到瀏覽器
    showToast("已儲存快照！");
}

function clearHistory() {
    if(confirm('確定要清空所有歷史紀錄嗎？')) {
        historyData = [];
        saveHistory(); // 清空瀏覽器儲存
        showToast("歷史紀錄已清空");
    }
}

// 刪除單筆紀錄
function deleteHistoryItem(index) {
    historyData.splice(index, 1);
    saveHistory();
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
        card.className = "bg-slate-800 p-2 rounded border border-slate-700 hover:border-blue-500 cursor-pointer transition group relative mb-2";
        
        // 點擊卡片本體複製
        card.onclick = (e) => {
            // 如果點到刪除按鈕，不觸發複製
            if(e.target.closest('.delete-btn')) return;
            copyToClipboard(item.json);
        };

        card.innerHTML = `
            <div class="flex justify-between items-start">
                <div class="w-full">
                    <div class="flex justify-between items-center">
                        <span class="text-xs text-blue-300 font-bold truncate pr-2">${item.summary}</span>
                        <span class="text-[10px] text-slate-500 shrink-0">${item.time}</span>
                    </div>
                    <div class="text-[10px] text-slate-400 truncate mt-1 opacity-60 font-mono">
                        ${item.json.replace(/\n/g, '').substring(0, 60)}...
                    </div>
                </div>
            </div>
            
            <div class="absolute right-2 bottom-2 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                <button class="delete-btn text-xs text-red-400 bg-slate-900 px-2 py-1 rounded hover:bg-red-900" onclick="event.stopPropagation();">
                    <i class="fa-solid fa-trash"></i>
                </button>
                <div class="text-xs text-emerald-400 bg-slate-900 px-2 py-1 rounded pointer-events-none">
                    <i class="fa-regular fa-copy"></i> 點擊複製
                </div>
            </div>
        `;

        // 綁定刪除按鈕事件 (因為用 innerHTML，需額外綁定)
        const delBtn = card.querySelector('.delete-btn');
        if(delBtn) {
            delBtn.addEventListener('click', (e) => {
                e.stopPropagation(); // 防止觸發複製
                deleteHistoryItem(index);
            });
        }

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

    // 讀取歷史紀錄
    loadHistory();

    // 初次執行
    updatePrompt();
});
