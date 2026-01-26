import { stageDatabase } from '../data/db_stage.js';
import { toggleSection } from '../utils.js';

let updateCallback = null;

// ★★★ 場景分類翻譯 (配合中文化) ★★★
const stageTranslations = {
    private: "🏠 居家私密 (Private)",
    urban: "🏙️ 現代都市 (Urban)",
    nature: "🌿 自然戶外 (Nature)",
    entertainment: "🎉 娛樂場所 (Entertainment)",
    commercial: "🛍️ 商業空間 (Commercial)",
    fantasy: "🔮 奇幻場景 (Fantasy)"
};

export function init(callback) {
    updateCallback = callback;

    // 初始化地點分類選單
    const catSelect = document.getElementById('stageLocCategory');
    if (catSelect) {
        catSelect.innerHTML = '';
        Object.keys(stageDatabase).forEach(key => {
            // 使用翻譯表將 key (如 private) 轉為中文
            const label = stageTranslations[key] || key;
            catSelect.add(new Option(label, key));
        });
        catSelect.addEventListener('change', updateLocations);
    }

    // 地點樣式選單
    const locSelect = document.getElementById('stageLocStyle');
    if(locSelect) {
        locSelect.addEventListener('change', updateProps);
    }

    // 道具輸入框
    const propInput = document.getElementById('stageProps');
    if(propInput) propInput.addEventListener('input', notify);

    // Toggle 開關
    const toggle = document.getElementById('toggleLayerStage');
    if(toggle) {
        toggle.addEventListener('change', () => {
            toggleSection('toggleLayerStage');
            notify();
        });
    }

    // 初次執行
    updateLocations();
}

function updateLocations() {
    const cat = document.getElementById('stageLocCategory').value;
    const list = stageDatabase[cat];
    const select = document.getElementById('stageLocStyle');
    
    if (!select) return;

    select.innerHTML = '';
    if(list) {
        list.forEach(item => {
            const opt = new Option(item.label, item.value);
            // 將預設道具存入 data attribute，方便連動
            opt.dataset.props = item.props || ""; 
            select.add(opt);
        });
    }
    updateProps();
}

function updateProps() {
    const select = document.getElementById('stageLocStyle');
    const input = document.getElementById('stageProps');

    // 當切換地點時，自動帶入該地點的建議道具 (Props)
    if (select && select.selectedIndex >= 0 && input) {
        const props = select.options[select.selectedIndex].dataset.props || '';
        input.value = props;  // 無論是否有值都更新
    }
    notify();
}

function notify() { if(updateCallback) updateCallback(); }

// ★★★ 這是主程式 (main.js) 呼叫的接口，一定要 export ★★★
export function getData() {
    const locEl = document.getElementById('stageLocStyle');
    const propEl = document.getElementById('stageProps');

    return {
        location: locEl ? locEl.value : '',
        props: propEl ? propEl.value : ''
    };
}
