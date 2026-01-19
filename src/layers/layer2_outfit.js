import { costumeSetDatabase, bottomDatabase, shoeDatabase } from '../data/db_outfit.js';
import { macaronColors, shoeColors, legwearColors } from '../data/db_meta.js';
import { formatItem } from '../utils.js';

let updateCallback = null;
let costumeMode = 'set';
const mixColors = {
    top: null, bottom: null, outer: null, shoes: null,
    bra: null, panties: null, legwear: null, costumeSet: null
};

export function init(callback) {
    updateCallback = callback;

    // 綁定模式切換
    document.getElementById('btnModeSet').onclick = () => toggleCostumeMode('set');
    document.getElementById('btnModeMix').onclick = () => toggleCostumeMode('mix');

    // 綁定選單變更
    const bind = (id, handler) => {
        const el = document.getElementById(id);
        if(el) el.addEventListener('change', handler || notifyUpdate);
    };

    bind('charCostumeSetCategory', updateCostumeSets);
    bind('charCostumeSetStyle');
    
    bind('charTop');
    bind('charOuter');
    
    bind('charBottomCategory', updateBottomStyles);
    bind('charBottomStyle');
    
    bind('charShoeCategory', updateShoeStyles);
    bind('charShoeStyle');
    
    bind('charLegwear');
    bind('charBra');
    bind('charPanties');
    bind('charAccessories');

    // 開關摺疊
    const toggles = ['toggleCharCostume', 'toggleCharLegwear', 'toggleCharIntimate', 'toggleCharAccessories'];
    toggles.forEach(id => {
        document.getElementById(id).addEventListener('change', (e) => {
            const box = document.getElementById(id.replace('toggle', 'box'));
            if(e.target.checked) box.classList.remove('collapsed');
            else box.classList.add('collapsed');
            notifyUpdate();
        });
    });

    // 初始化內容
    updateCostumeSets();
    updateBottomStyles();
    updateShoeStyles();

    // 渲染色盤
    renderPalettes();
}

function notifyUpdate() {
    if (updateCallback) updateCallback();
}

function toggleCostumeMode(mode) {
    costumeMode = mode;
    const setDiv = document.getElementById('costumeModeSet');
    const mixDiv = document.getElementById('costumeModeMix');
    const btnSet = document.getElementById('btnModeSet');
    const btnMix = document.getElementById('btnModeMix');

    if (mode === 'set') {
        setDiv.classList.remove('hidden');
        mixDiv.classList.add('hidden');
        btnSet.className = 'flex-1 text-xs py-1.5 rounded bg-white shadow text-blue-600 font-bold transition';
        btnMix.className = 'flex-1 text-xs py-1.5 rounded text-slate-500 font-medium hover:bg-white/50 transition';
    } else {
        setDiv.classList.add('hidden');
        mixDiv.classList.remove('hidden');
        btnSet.className = 'flex-1 text-xs py-1.5 rounded text-slate-500 font-medium hover:bg-white/50 transition';
        btnMix.className = 'flex-1 text-xs py-1.5 rounded bg-white shadow text-blue-600 font-bold transition';
    }
    notifyUpdate();
}

function updateCostumeSets() {
    const cat = document.getElementById('charCostumeSetCategory').value;
    const select = document.getElementById('charCostumeSetStyle');
    select.innerHTML = '';
    (costumeSetDatabase[cat] || []).forEach(item => {
        select.add(new Option(item.label, item.value));
    });
    notifyUpdate();
}

function updateBottomStyles() {
    const cat = document.getElementById('charBottomCategory').value;
    const select = document.getElementById('charBottomStyle');
    select.innerHTML = '';
    (bottomDatabase[cat] || []).forEach(item => {
        select.add(new Option(item.label, item.value));
    });
    notifyUpdate();
}

function updateShoeStyles() {
    const cat = document.getElementById('charShoeCategory').value;
    const select = document.getElementById('charShoeStyle');
    select.innerHTML = '';
    (shoeDatabase[cat] || []).forEach(item => {
        select.add(new Option(item.label, item.value));
    });
    
    // 處理光腳時禁用色盤
    const palette = document.getElementById('paletteShoes');
    if (cat === 'barefoot' || cat === 'none') {
        palette.classList.add('palette-disabled');
        // 自動選無
        const noneBtn = palette.querySelector('.none');
        if(noneBtn) noneBtn.click();
    } else {
        palette.classList.remove('palette-disabled');
    }
    notifyUpdate();
}

function renderPalettes() {
    const configs = [
        { id: 'paletteTop', type: 'top', list: macaronColors },
        { id: 'paletteBottom', type: 'bottom', list: macaronColors },
        { id: 'paletteOuter', type: 'outer', list: macaronColors },
        { id: 'paletteShoes', type: 'shoes', list: shoeColors },
        { id: 'paletteBra', type: 'bra', list: macaronColors },
        { id: 'palettePanties', type: 'panties', list: macaronColors },
        { id: 'paletteLegwear', type: 'legwear', list: legwearColors },
        { id: 'paletteCostumeSet', type: 'costumeSet', list: macaronColors }
    ];

    configs.forEach(cfg => {
        const container = document.getElementById(cfg.id);
        if (!container) return;
        container.innerHTML = '';

        // None button
        const noneEl = document.createElement('div');
        noneEl.className = 'color-swatch none active';
        noneEl.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        noneEl.onclick = () => selectColor(cfg.type, null, noneEl);
        container.appendChild(noneEl);

        // Color buttons
        cfg.list.forEach(color => {
            const el = document.createElement('div');
            el.className = 'color-swatch';
            el.style.backgroundColor = color.hex;
            if (color.display) el.style.background = color.display;
            el.title = color.name;
            el.onclick = () => selectColor(cfg.type, color, el);
            container.appendChild(el);
        });
    });
}

function selectColor(type, colorObj, el) {
    mixColors[type] = colorObj ? { hex: colorObj.hex, name: colorObj.name } : null;
    const parent = el.parentNode;
    Array.from(parent.children).forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    notifyUpdate();
}

export function getData() {
    const data = {};

    // Costume
    if (document.getElementById('toggleCharCostume').checked) {
        if (costumeMode === 'set') {
            const setDesc = document.getElementById('charCostumeSetStyle').value;
            const colorObj = mixColors.costumeSet;
            const finalDesc = colorObj ? `${colorObj.name} (${colorObj.hex}) ${setDesc}` : setDesc;
            data.costume = { mode: "Set", description: finalDesc };
        } else {
            const parts = [];
            parts.push(formatItem(document.getElementById('charTop').value, mixColors.top));
            parts.push(formatItem(document.getElementById('charBottomStyle').value, mixColors.bottom));
            parts.push(formatItem(document.getElementById('charOuter').value, mixColors.outer));
            
            const shoeCat = document.getElementById('charShoeCategory').value;
            const shoeVal = document.getElementById('charShoeStyle').value;
            if (shoeCat !== 'barefoot' && shoeCat !== 'none') {
                parts.push(formatItem(shoeVal, mixColors.shoes));
            } else if (shoeVal !== 'None') {
                parts.push(shoeVal);
            }

            data.costume = { 
                mode: "Mix & Match", 
                details: parts.filter(p => p).join(", ") 
            };
        }
    }

    // Legwear
    if (document.getElementById('toggleCharLegwear').checked) {
        let leg = document.getElementById('charLegwear').value;
        let desc = formatItem(leg, mixColors.legwear);
        if (leg && leg.includes("15D") && desc) {
            desc += ", fully covering buttocks...";
        }
        if(desc) data.legwear = desc;
    }

    // Intimate
    if (document.getElementById('toggleCharIntimate').checked) {
        const parts = [];
        parts.push(formatItem(document.getElementById('charBra').value, mixColors.bra));
        parts.push(formatItem(document.getElementById('charPanties').value, mixColors.panties));
        const final = parts.filter(p => p).join(", ");
        if(final) data.intimate_apparel = final;
    }

    // Accessories
    if (document.getElementById('toggleCharAccessories').checked) {
        const acc = document.getElementById('charAccessories').value;
        if(acc !== 'None') data.accessories = acc;
    }

    return data;
}
