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
        // 日系風格
        pastel: '<i class="fa-solid fa-wand-magic-sparkles"></i>',
        pure_desire: '<i class="fa-solid fa-sparkles"></i>',
        // 韓系風格
        korean_fresh: '<i class="fa-solid fa-droplet"></i>',
        korean_moody: '<i class="fa-solid fa-masks-theater"></i>',
        // 質感風格
        luxury: '<i class="fa-solid fa-gem"></i>',
        cinematic: '<i class="fa-solid fa-film"></i>',
        // 時段光線
        golden_hour: '<i class="fa-solid fa-sun"></i>',
        blue_hour: '<i class="fa-solid fa-moon"></i>',
        // 都市風格
        urban: '<i class="fa-solid fa-camera"></i>',
        neon_cyberpunk: '<i class="fa-solid fa-bolt"></i>',
        // 復古風格
        film_analog: '<i class="fa-solid fa-compact-disc"></i>',
        polaroid: '<i class="fa-solid fa-image"></i>',
        // 藝術風格
        noir: '<i class="fa-solid fa-circle-half-stroke"></i>',
        soft_glamour: '<i class="fa-solid fa-star"></i>',
        // 特殊氛圍
        sexy_boudoir: '<i class="fa-solid fa-fire"></i>',
        dreamy_bokeh: '<i class="fa-solid fa-cloud"></i>'
    };

    const iconColors = {
        // 日系風格
        pastel: 'bg-pink-100 text-pink-500',
        pure_desire: 'bg-purple-100 text-purple-500',
        // 韓系風格
        korean_fresh: 'bg-sky-100 text-sky-500',
        korean_moody: 'bg-amber-100 text-amber-600',
        // 質感風格
        luxury: 'bg-slate-800 text-amber-400',
        cinematic: 'bg-teal-100 text-teal-600',
        // 時段光線
        golden_hour: 'bg-orange-100 text-orange-500',
        blue_hour: 'bg-indigo-100 text-indigo-500',
        // 都市風格
        urban: 'bg-green-100 text-green-600',
        neon_cyberpunk: 'bg-fuchsia-100 text-fuchsia-500',
        // 復古風格
        film_analog: 'bg-yellow-100 text-yellow-600',
        polaroid: 'bg-rose-100 text-rose-500',
        // 藝術風格
        noir: 'bg-gray-800 text-white',
        soft_glamour: 'bg-pink-50 text-pink-400',
        // 特殊氛圍
        sexy_boudoir: 'bg-red-100 text-red-500',
        dreamy_bokeh: 'bg-violet-100 text-violet-400'
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
        const propSuggestions = {
            pastel: "Wooden school desks and chairs, white vertical blinds/curtains",
            pure_desire: "Sheer white curtains, soft bedding, morning sunlight",
            korean_fresh: "Minimalist furniture, white walls, green plants",
            korean_moody: "Warm cafe interior, wooden furniture, ambient lighting",
            luxury: "Wooden paneling, marble counter, mirror reflection",
            cinematic: "Film set lighting, dramatic shadows, professional equipment",
            golden_hour: "Outdoor setting, warm sunlight, golden reflections",
            blue_hour: "City skyline, twilight sky, street lights",
            urban: "Cafe menu signboards, potted green plants, paved sidewalk",
            neon_cyberpunk: "Neon signs, wet streets, city nightscape",
            film_analog: "Vintage furniture, retro decor, natural window light",
            polaroid: "Casual indoor setting, everyday objects, snapshot feel",
            noir: "Dramatic shadows, venetian blinds, single light source",
            soft_glamour: "Beauty ring light, clean backdrop, reflectors",
            sexy_boudoir: "Bedroom setting, candles, silk fabrics, warm lamp",
            dreamy_bokeh: "Fairy lights, bokeh background, soft fabrics"
        };
        if (propSuggestions[key]) propInput.value = propSuggestions[key];
    }

    notify();
}

function notify() { if(updateCallback) updateCallback(); }

export function getData() {
    return filterDatabase[currentFilter];
}
