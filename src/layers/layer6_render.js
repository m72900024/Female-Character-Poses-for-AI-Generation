import { mediumDatabase } from '../data/db_meta.js';
import { toggleSection } from '../utils.js';

let updateCallback = null;

// ★★★ 媒材分類翻譯 ★★★
const mediumTranslations = {
    photorealistic: "真實照片 (Photorealistic)",
    anime: "動漫二次元 (Anime)",
    "3d_render": "3D 渲染 (3D Render)",
    semi_real: "2.5D 半寫實 (Semi-Real)"
};

export function init(callback) {
    updateCallback = callback;

    const catSelect = document.getElementById('renderMediumCategory');
    if(catSelect) {
        catSelect.innerHTML = '';
        Object.keys(mediumDatabase).forEach(key => {
            const label = mediumTranslations[key] || key;
            catSelect.add(new Option(label, key));
        });
        catSelect.addEventListener('change', updateMediumStyle);
    }

    const styleSelect = document.getElementById('renderMediumStyle');
    if(styleSelect) styleSelect.addEventListener('change', notify);

    const ratioSelect = document.getElementById('renderRatio');
    if(ratioSelect) ratioSelect.addEventListener('change', notify);

    ['toggleLayerRender', 'toggleRenderRatio', 'toggleRenderMedium'].forEach(id => {
        const el = document.getElementById(id);
        if(el) {
            el.addEventListener('change', () => {
                if(id === 'toggleLayerRender') toggleSection(id);
                notify();
            });
        }
    });

    updateMediumStyle();
}

function updateMediumStyle() {
    const cat = document.getElementById('renderMediumCategory').value;
    const list = mediumDatabase[cat];
    const select = document.getElementById('renderMediumStyle');
    
    select.innerHTML = '';
    if(list) {
        list.forEach(item => select.add(new Option(item.label, item.value)));
    }
    notify();
}

function notify() { if(updateCallback) updateCallback(); }

export function getData() {
    const data = {};
    
    if(document.getElementById('toggleRenderRatio').checked) {
        data.ratio = document.getElementById('renderRatio').value;
    }

    if(document.getElementById('toggleRenderMedium').checked) {
        const cat = document.getElementById('renderMediumCategory').value;
        const style = document.getElementById('renderMediumStyle').value;
        
        data.medium = { category: cat, style: style };

        // 自動添加負面提示詞
        let neg = "";
        // 基礎視角排除 (避免生成側面/斜角)
        const angleNeg = "(side view:1.2), (3/4 view:1.2), (profile:1.1), (angled shot:1.1), (from side:1.1)";

        if (cat === 'photorealistic') neg = `(anime, manga, 2d, sketch), bad anatomy, ${angleNeg}`;
        else if (cat === 'anime') neg = `(photorealistic, real life), 3d, bad hands, ${angleNeg}`;
        else if (cat === '3d_render') neg = `(2d, sketch), low poly, ${angleNeg}`;
        else neg = angleNeg; // 其他分類也加入視角排除

        data.negative_prompt = neg;
    }

    return data;
}
