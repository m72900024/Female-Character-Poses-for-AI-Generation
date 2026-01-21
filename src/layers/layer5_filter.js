import { filterDatabase } from '../data/db_meta.js';
import { toggleSection } from '../utils.js';

let updateCallback = null;
let currentFilter = 'pastel';

export function init(callback) {
    updateCallback = callback;

    const container = document.getElementById('contentLayerFilter');
    if (container) {
        renderFilterCards(container);
    }

    const toggle = document.getElementById('toggleLayerFilter');
    if (toggle) {
        toggle.addEventListener('change', () => {
            toggleSection('toggleLayerFilter');
            notify();
        });
    }
}

function renderFilterCards(container) {
    // 清空舊內容
    // 注意：這裡我們動態生成卡片，這樣才能顯示資料庫裡的中文標籤
    container.innerHTML = '<div class="grid grid-cols-1 gap-3" id="filterGrid"></div>';
    const grid = document.getElementById('filterGrid');

    // 定義圖示對照
    const icons = {
        pastel: '<i class="fa-solid fa-wand-magic-sparkles"></i>',
        luxury: '<i class="fa-solid fa-gem"></i>',
        urban: '<i class="fa-solid fa-camera"></i>'
    };

    const iconColors = {
        pastel: 'bg-pink-100 text-pink-500',
        luxury: 'bg-slate-800 text-amber-400',
        urban: 'bg-green-100 text-green-600'
    };

    Object.keys(filterDatabase).forEach(key => {
        const item = filterDatabase[key];
        const card = document.createElement('div');
        
        // 預設選中 pastel
        const isActive = key === currentFilter ? 'active' : '';
        
        card.className = `filter-card border rounded-lg p-3 cursor-pointer hover:border-blue-400 transition ${isActive}`;
        card.dataset.filter = key;
        card.onclick = () => selectFilter(key);

        card.innerHTML = `
            <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded ${iconColors[key] || 'bg-gray-100'} flex items-center justify-center">
                    ${icons[key] || '<i class="fa-solid fa-filter"></i>'}
                </div>
                <div>
                    <h3 class="font-bold text-sm">${item.label}</h3>
                    <p class="text-xs text-slate-500 mt-1 truncate w-48">${item.lighting.split(',')[0]}</p>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function selectFilter(key) {
    currentFilter = key;
    
    // 更新 UI 樣式
    document.querySelectorAll('.filter-card').forEach(c => {
        if(c.dataset.filter === key) c.classList.add('active');
        else c.classList.remove('active');
    });

    // 自動帶入場景道具 (可選)
    const propInput = document.getElementById('stageProps');
    if(propInput) {
        if (key === 'pastel') propInput.value = "Wooden school desks and chairs, white vertical blinds/curtains";
        else if (key === 'luxury') propInput.value = "Wooden paneling, marble counter, mirror reflection";
        else if (key === 'urban') propInput.value = "Cafe menu signboards, potted green plants, paved sidewalk";
    }

    notify();
}

function notify() { if(updateCallback) updateCallback(); }

export function getData() {
    return filterDatabase[currentFilter];
}
