import { stageDatabase } from '../data/db_stage.js';
import { toggleSection } from '../utils.js';

let updateCallback = null;

export function init(callback) {
    updateCallback = callback;

    // 初始化地點分類選單
    const catSelect = document.getElementById('stageLocCategory');
    if (catSelect) {
        catSelect.innerHTML = '';
        // 這裡我們直接使用 db_stage.js 的 key 當作分類
        // 如果您有做翻譯表，可以在這裡加入，目前先直接讀取 key
        Object.keys(stageDatabase).forEach(key => {
            // 簡單的英文轉中文對照 (可選)
            let label = key;
            if(key === 'private') label = "居家私密 (Private)";
            if(key === 'urban') label = "現代都市 (Urban)";
            if(key === 'nature') label = "自然戶外 (Nature)";
            
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
        const props = select.options[select.selectedIndex].dataset.props;
        if(props) input.value = props;
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
