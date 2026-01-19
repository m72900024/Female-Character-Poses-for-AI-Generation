import { stageDatabase } from '../data/db_stage.js';

let updateCallback = null;

export function init(callback) {
    updateCallback = callback;

    const catSelect = document.getElementById('stageLocCategory');
    catSelect.innerHTML = '';
    const cats = [
        { value: "private", label: "私密居住 (Private)" },
        { value: "urban", label: "都市現代 (Urban)" },
        { value: "nature", label: "自然戶外 (Nature)" }
    ];
    cats.forEach(c => catSelect.add(new Option(c.label, c.value)));

    catSelect.addEventListener('change', updateLocations);
    document.getElementById('stageLocStyle').addEventListener('change', updateProps);
    document.getElementById('stageProps').addEventListener('input', notifyUpdate);

    updateLocations();
}

function notifyUpdate() {
    if(updateCallback) updateCallback();
}

function updateLocations() {
    const cat = document.getElementById('stageLocCategory').value;
    const select = document.getElementById('stageLocStyle');
    select.innerHTML = '';
    
    (stageDatabase[cat] || []).forEach(loc => {
        const opt = new Option(loc.label, loc.value);
        opt.dataset.props = loc.props;
        select.add(opt);
    });
    updateProps();
}

function updateProps() {
    const select = document.getElementById('stageLocStyle');
    const selected = select.options[select.selectedIndex];
    if(selected && selected.dataset.props) {
        document.getElementById('stageProps').value = selected.dataset.props;
    }
    notifyUpdate();
}

export function getData() {
    return {
        location: document.getElementById('stageLocStyle').value,
        props: document.getElementById('stageProps').value
    };
}
