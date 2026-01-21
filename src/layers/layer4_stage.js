import { stageDatabase } from '../data/db_stage.js';
import { toggleSection } from '../utils.js';

let updateCallback = null;

// ★★★ 場景分類翻譯 ★★★
const stageTranslations = {
    private: "居家私密 (Private)",
    urban: "現代都市 (Urban)",
    nature: "自然戶外 (Nature)"
};

export function init(callback) {
    updateCallback = callback;

    const catSelect = document.getElementById('stageLocCategory');
    if (catSelect) {
        catSelect.innerHTML = '';
        Object.keys(stageDatabase).forEach(key => {
            const label = stageTranslations[key] || key;
            catSelect.add(new Option(label, key));
        });
        catSelect.addEventListener('change', updateLocations);
    }

    const locSelect = document.getElementById('stageLocStyle');
    if(locSelect) {
        locSelect.addEventListener('change', updateProps);
    }

    const propInput = document.getElementById('stageProps');
    if(propInput) propInput.addEventListener('input', notify);

    const toggle = document.getElementById('toggleLayerStage');
    if(toggle) {
        toggle.addEventListener('change', () => {
            toggleSection('toggleLayerStage');
            notify();
        });
    }

    updateLocations();
}

function updateLocations() {
    const cat = document.getElementById('stageLocCategory').value;
    const list = stageDatabase[cat];
    const select = document.getElementById('stageLocStyle');
    
    select.innerHTML = '';
    if(list) {
        list.forEach(item => {
            const opt = new Option(item.label, item.value);
            // 將預設道具存入 data attribute
            opt.dataset.props = item.props || ""; 
            select.add(opt);
        });
    }
    updateProps();
}

function updateProps() {
    const select = document.getElementById('stageLocStyle');
    const input = document.getElementById('stageProps');
    if (select.selectedIndex >= 0) {
        const props = select.options[select.selectedIndex].dataset.props;
        input.value = props;
    }
    notify();
}

function notify() { if(updateCallback) updateCallback(); }

export function getData() {
    return {
        location: document.getElementById('stageLocStyle').value,
        props: document.getElementById('stageProps').value
    };
}
