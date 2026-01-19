import { mediumDatabase } from '../data/db_meta.js';
import { toggleSection } from '../utils.js';

let updateCallback = null;

export function init(callback) {
    updateCallback = callback;
    
    const catSelect = document.getElementById('renderMediumCategory');
    if(catSelect) {
        Object.keys(mediumDatabase).forEach(k => catSelect.add(new Option(k, k)));
        catSelect.addEventListener('change', updateStyle);
    }
    document.getElementById('renderMediumStyle').addEventListener('change', notify);
    document.getElementById('renderRatio').addEventListener('change', notify);

    ['toggleLayerRender', 'toggleRenderRatio', 'toggleRenderMedium'].forEach(id => {
        document.getElementById(id).addEventListener('change', (e) => {
            if(id === 'toggleLayerRender') toggleSection(id);
            notify();
        });
    });

    updateStyle();
}

function updateStyle() {
    const cat = document.getElementById('renderMediumCategory').value;
    const select = document.getElementById('renderMediumStyle');
    select.innerHTML = '';
    (mediumDatabase[cat] || []).forEach(s => select.add(new Option(s.label, s.value)));
    notify();
}

function notify() { if(updateCallback) updateCallback(); }

export function getData() {
    const data = {};
    if(document.getElementById('toggleRenderRatio').checked)
        data.ratio = document.getElementById('renderRatio').value;
    
    if(document.getElementById('toggleRenderMedium').checked) {
        data.medium = {
            category: document.getElementById('renderMediumCategory').value,
            style: document.getElementById('renderMediumStyle').value
        };
    }
    return data;
}
