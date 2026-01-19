import { stageDatabase } from '../data/db_stage.js';
import { toggleSection } from '../utils.js';

let updateCallback = null;

export function init(callback) {
    updateCallback = callback;
    
    const catSelect = document.getElementById('stageLocCategory');
    if(catSelect) {
        Object.keys(stageDatabase).forEach(k => catSelect.add(new Option(k, k)));
        catSelect.addEventListener('change', updateLoc);
    }
    document.getElementById('stageLocStyle').addEventListener('change', updateProps);
    document.getElementById('stageProps').addEventListener('input', notify);

    document.getElementById('toggleLayerStage').addEventListener('change', () => {
        toggleSection('toggleLayerStage');
        notify();
    });

    updateLoc();
}

function updateLoc() {
    const cat = document.getElementById('stageLocCategory').value;
    const select = document.getElementById('stageLocStyle');
    select.innerHTML = '';
    (stageDatabase[cat] || []).forEach(l => {
        const opt = new Option(l.label, l.value);
        opt.dataset.props = l.props;
        select.add(opt);
    });
    updateProps();
}

function updateProps() {
    const sel = document.getElementById('stageLocStyle');
    const opt = sel.options[sel.selectedIndex];
    if(opt && opt.dataset.props) document.getElementById('stageProps').value = opt.dataset.props;
    notify();
}

function notify() { if(updateCallback) updateCallback(); }

export function getData() {
    return {
        location: document.getElementById('stageLocStyle').value,
        props: document.getElementById('stageProps').value
    };
}
