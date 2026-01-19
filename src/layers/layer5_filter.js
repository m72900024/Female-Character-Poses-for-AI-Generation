import { filterDatabase } from '../data/db_meta.js';

let updateCallback = null;
let currentFilter = 'pastel';

export function init(callback) {
    updateCallback = callback;

    // 因為 HTML 裡的 div onclick 無法直接對應到模組，我們需要重新綁定
    // 假設 HTML 結構中這些卡片有 class 'filter-card'，且順序固定
    const cards = document.querySelectorAll('.filter-card');
    const filters = ['pastel', 'luxury', 'urban'];
    
    cards.forEach((card, index) => {
        card.onclick = () => selectFilter(filters[index], card);
    });
    
    // 初始化選中第一個
    if(cards.length > 0) selectFilter('pastel', cards[0]);
}

function selectFilter(key, cardEl) {
    currentFilter = key;
    document.querySelectorAll('.filter-card').forEach(c => c.classList.remove('active'));
    cardEl.classList.add('active');
    
    // 自動建議 Props (可選)
    autoSuggestProps(key);
    
    if(updateCallback) updateCallback();
}

function autoSuggestProps(key) {
    const propInput = document.getElementById('stageProps');
    if(!propInput) return;
    
    if (key === 'pastel') propInput.value = "Wooden school desks, white blinds";
    else if (key === 'luxury') propInput.value = "Marble counter, recessed lighting";
    else if (key === 'urban') propInput.value = "Cafe signs, paved sidewalk";
    
    // 注意：這裡修改了 UI，理論上應該觸發 L4 的更新，但 main.js 會重新讀取所有值
}

export function getData() {
    return filterDatabase[currentFilter];
}
