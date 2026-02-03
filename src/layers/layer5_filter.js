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
    // ★ 一行兩個的緊湊卡片佈局
    container.innerHTML = '<div class="grid grid-cols-2 gap-2" id="filterGrid"></div>';
    const grid = document.getElementById('filterGrid');

    // 色塊漸層預覽 - 代表各風格的色調
    const colorPreview = {
        // 日系風格
        pastel: 'linear-gradient(135deg, #FFD1DC 0%, #FFFACD 50%, #E6E6FA 100%)',
        pure_desire: 'linear-gradient(135deg, #FFFFFF 0%, #FFF0F5 50%, #E6E6FA 100%)',
        // 韓系風格
        korean_fresh: 'linear-gradient(135deg, #F5F5DC 0%, #FFFFFF 50%, #E0E0E0 100%)',
        korean_moody: 'linear-gradient(135deg, #D2B48C 0%, #DEB887 50%, #F5DEB3 100%)',
        // 質感風格
        luxury: 'linear-gradient(135deg, #1a1a1a 0%, #4a3728 50%, #2d2d2d 100%)',
        cinematic: 'linear-gradient(135deg, #008080 0%, #FFA500 100%)',
        // 時段光線
        golden_hour: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF6347 100%)',
        blue_hour: 'linear-gradient(135deg, #191970 0%, #483D8B 50%, #6A5ACD 100%)',
        // 都市風格
        urban: 'linear-gradient(135deg, #808080 0%, #A9A9A9 50%, #D3D3D3 100%)',
        neon_cyberpunk: 'linear-gradient(135deg, #FF1493 0%, #9400D3 50%, #00CED1 100%)',
        // 復古風格
        film_analog: 'linear-gradient(135deg, #DEB887 0%, #BDB76B 50%, #8FBC8F 100%)',
        polaroid: 'linear-gradient(135deg, #FFFAF0 0%, #FFF8DC 50%, #FFE4E1 100%)',
        // 藝術風格
        noir: 'linear-gradient(135deg, #000000 0%, #696969 50%, #FFFFFF 100%)',
        soft_glamour: 'linear-gradient(135deg, #FFC0CB 0%, #FFE4E1 50%, #FFF0F5 100%)',
        // 特殊氛圍
        sexy_boudoir: 'linear-gradient(135deg, #8B0000 0%, #000000 50%, #FFD700 100%)',
        dreamy_bokeh: 'linear-gradient(135deg, #FFD700 0%, #FFFAF0 50%, #E6E6FA 100%)',
        // 動漫風格
        anime_cel: 'linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 50%, #FFE66D 100%)',
        anime_soft: 'linear-gradient(135deg, #FFB6C1 0%, #E6E6FA 50%, #FFFAF0 100%)',
        anime_ghibli: 'linear-gradient(135deg, #87CEEB 0%, #90EE90 50%, #F5DEB3 100%)',
        anime_makoto: 'linear-gradient(135deg, #1E3A5F 0%, #FFD700 50%, #FF6B35 100%)',
        manga_bw: 'linear-gradient(135deg, #000000 0%, #808080 50%, #FFFFFF 100%)',
        // 繪畫風格
        watercolor: 'linear-gradient(135deg, #87CEEB 0%, #FFFACD 50%, #E6E6FA 100%)',
        oil_painting: 'linear-gradient(135deg, #8B4513 0%, #DAA520 50%, #2F1810 100%)',
        gouache: 'linear-gradient(135deg, #DDA0DD 0%, #98FB98 50%, #FFE4B5 100%)',
        digital_painting: 'linear-gradient(135deg, #6A0DAD 0%, #00CED1 50%, #FF4500 100%)',
        sketch: 'linear-gradient(135deg, #2F2F2F 0%, #A9A9A9 50%, #F5F5F5 100%)',
        // 特殊藝術風格
        pixel_art: 'linear-gradient(135deg, #FF0000 0%, #00FF00 50%, #0000FF 100%)',
        art_nouveau: 'linear-gradient(135deg, #DAA520 0%, #8FBC8F 50%, #DEB887 100%)',
        ukiyo_e: 'linear-gradient(135deg, #1E3A5F 0%, #DC143C 50%, #FFFAF0 100%)',
        pop_art: 'linear-gradient(135deg, #FF1493 0%, #FFFF00 50%, #00FFFF 100%)',
        vaporwave: 'linear-gradient(135deg, #FF69B4 0%, #00CED1 50%, #9370DB 100%)'
    };

    Object.keys(filterDatabase).forEach(key => {
        const item = filterDatabase[key];
        const card = document.createElement('div');

        const isActive = key === currentFilter ? 'active' : '';

        card.className = `filter-card border rounded-lg p-2 cursor-pointer hover:border-blue-400 hover:shadow-md transition ${isActive}`;
        card.dataset.filter = key;
        card.onclick = () => selectFilter(key);

        card.innerHTML = `
            <div class="flex items-center gap-2">
                <div class="w-8 h-8 rounded-md flex-shrink-0" style="background: ${colorPreview[key] || '#ccc'}"></div>
                <span class="text-xs font-medium truncate">${item.label}</span>
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
            dreamy_bokeh: "Fairy lights, bokeh background, soft fabrics",
            // 動漫風格
            anime_cel: "Clean anime background, vibrant colors, flat shading",
            anime_soft: "Soft pastel background, sparkles, dreamy atmosphere",
            anime_ghibli: "Hand-painted clouds, green meadow, warm sunlight",
            anime_makoto: "Detailed sky, dramatic clouds, lens flare, sparkles",
            manga_bw: "Screen tone effects, speed lines, panel borders",
            // 繪畫風格
            watercolor: "Paper texture, soft washes, organic bleeding edges",
            oil_painting: "Canvas texture, rich brushstrokes, classical setting",
            gouache: "Matte finish, flat colors, illustration style",
            digital_painting: "Detailed rendering, dramatic lighting, fantasy elements",
            sketch: "Paper texture, pencil strokes, sketchbook feel",
            // 特殊藝術風格
            pixel_art: "Retro game background, 16-bit style, pixel elements",
            art_nouveau: "Decorative borders, organic patterns, flowing lines",
            ukiyo_e: "Traditional Japanese elements, wave patterns, Mt. Fuji",
            pop_art: "Bold graphics, halftone dots, comic style",
            vaporwave: "Greek statues, palm trees, retro grid, sunset gradient"
        };
        if (propSuggestions[key]) propInput.value = propSuggestions[key];
    }

    notify();
}

function notify() { if(updateCallback) updateCallback(); }

export function getData() {
    return filterDatabase[currentFilter];
}
