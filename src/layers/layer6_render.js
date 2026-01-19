import { mediumDatabase } from '../data/db_meta.js';

let updateCallback = null;

export function init(callback) {
    updateCallback = callback;

    const catSelect = document.getElementById('renderMediumCategory');
    catSelect.innerHTML = '';
    const cats = [
        { value: "photorealistic", label: "真實照片 (Photorealistic)" },
        { value: "anime", label: "動漫風格 (Anime)" },
        { value: "3d_render", label: "3D 渲染 (3D Render)" },
        { value: "semi_real", label: "半寫實動漫 (Semi-Realistic)" }
    ];
    cats.forEach(c => catSelect.add(new Option(c.label, c.value)));

    catSelect.addEventListener('change', updateStyles);
    document.getElementById('renderMediumStyle').addEventListener('change', notifyUpdate);
    document.getElementById('renderRatio').addEventListener('change', notifyUpdate);
    document.getElementById('toggleRenderRatio').addEventListener('change', notifyUpdate);
    document.getElementById('toggleRenderMedium').addEventListener('change', notifyUpdate);

    updateStyles();
}

function notifyUpdate() {
    if(updateCallback) updateCallback();
}

function updateStyles() {
    const cat = document.getElementById('renderMediumCategory').value;
    const select = document.getElementById('renderMediumStyle');
    select.innerHTML = '';
    (mediumDatabase[cat] || []).forEach(s => select.add(new Option(s.label, s.value)));
    notifyUpdate();
}

export function getData() {
    const data = {};

    if (document.getElementById('toggleRenderRatio').checked) {
        data.ratio = document.getElementById('renderRatio').value;
    }

    if (document.getElementById('toggleRenderMedium').checked) {
        const cat = document.getElementById('renderMediumCategory').value;
        data.medium = {
            style: document.getElementById('renderMediumStyle').value,
            category: cat
        };

        let neg = "";
        if (cat === 'photorealistic') neg = "(anime, manga, 3d), bad anatomy";
        else if (cat === 'anime') neg = "(photorealistic, real life), bad hands";
        else if (cat === '3d_render') neg = "(2d, sketch), low poly";
        
        data.negative_prompt = neg;
    }

    return data;
}
