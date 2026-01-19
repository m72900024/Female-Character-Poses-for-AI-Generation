// 引入 PART 1: 外裝
import { 
    costumeSetDatabase, bottomDatabase, shoeDatabase,
    topDatabase, outerDatabase 
} from '../data/db_outfit.js';

// 引入 PART 2: 內著與配件 (注意這裡從新檔案引入)
import { 
    legwearDatabase, braDatabase, pantiesDatabase, accessoriesDatabase 
} from '../data/db_innerwear.js';

import { macaronColors, shoeColors, legwearColors } from '../data/db_meta.js';
import { formatItem, toggleSection } from '../utils.js';

let updateCallback = null;
let costumeMode = 'set';
const mixColors = { top:null, bottom:null, outer:null, shoes:null, legwear:null, bra:null, panties:null, set:null };

export function init(callback) {
    updateCallback = callback;

    // 模式切換
    document.getElementById('btnModeSet').onclick = () => switchMode('set');
    document.getElementById('btnModeMix').onclick = () => switchMode('mix');

    // ★★★ 初始化所有下拉選單 ★★★
    
    // 1. 外裝類 (來自 db_outfit.js)
    initSelect('charCostumeSetCategory', costumeSetDatabase, updateCostumeStyle);
    initSelect('charBottomCategory', bottomDatabase, updateBottomStyle);
    initSelect('charShoeCategory', shoeDatabase, updateShoeStyle);
    
    populateSimpleSelect('charTop', topDatabase);
    populateSimpleSelect('charOuter', outerDatabase);

    // 2. 內著類 (來自 db_innerwear.js)
    populateSimpleSelect('charLegwear', legwearDatabase);
    populateSimpleSelect('charBra', braDatabase);
    populateSimpleSelect('charPanties', pantiesDatabase);
    populateSimpleSelect('charAccessories', accessoriesDatabase);

    // 綁定事件監聽
    ['charTop', 'charOuter', 'charLegwear', 'charBra', 'charPanties', 'charAccessories'].forEach(id => {
        const el = document.getElementById(id);
        if(el) el.addEventListener('change', notify);
    });
    
    // 二級選單變更監聽
    ['charCostumeSetStyle', 'charBottomStyle', 'charShoeStyle'].forEach(id => {
        document.getElementById(id).addEventListener('change', notify);
    });

    // 綁定開關
    ['toggleCharCostume', 'toggleCharLegwear', 'toggleCharIntimate', 'toggleCharAccessories'].forEach(id => {
        document.getElementById(id).addEventListener('change', () => {
            toggleSection(id);
            notify();
        });
    });

    // 生成色盤
    createPalette('paletteCostumeSet', macaronColors, 'set');
    createPalette('paletteTop', macaronColors, 'top');
    createPalette('paletteBottom', macaronColors, 'bottom');
    createPalette('paletteOuter', macaronColors, 'outer');
    createPalette('paletteShoes', shoeColors, 'shoes');
    createPalette('paletteLegwear', legwearColors, 'legwear');
    createPalette('paletteBra', macaronColors, 'bra');
    createPalette('palettePanties', macaronColors, 'panties');

    // 初始執行
    updateCostumeStyle();
    updateBottomStyle();
    updateShoeStyle();
}

function switchMode(mode) {
    costumeMode = mode;
    const setDiv = document.getElementById('costumeModeSet');
    const mixDiv = document.getElementById('costumeModeMix');
    const btnSet = document.getElementById('btnModeSet');
    const btnMix = document.getElementById('btnModeMix');

    if (mode === 'set') {
        setDiv.classList.remove('hidden');
        mixDiv.classList.add('hidden');
        btnSet.className = "flex-1 text-xs py-1.5 rounded bg-white shadow text-blue-600 font-bold transition";
        btnMix.className = "flex-1 text-xs py-1.5 rounded text-slate-500 font-medium hover:bg-white/50 transition";
    } else {
        setDiv.classList.add('hidden');
        mixDiv.classList.remove('hidden');
        btnSet.className = "flex-1 text-xs py-1.5 rounded text-slate-500 font-medium hover:bg-white/50 transition";
        btnMix.className = "flex-1 text-xs py-1.5 rounded bg-white shadow text-blue-600 font-bold transition";
    }
    notify();
}

function initSelect(id, db, changeHandler) {
    const el = document.getElementById(id);
    if(!el) return;
    el.innerHTML = ''; 
    Object.keys(db).forEach(k => el.add(new Option(k, k)));
    el.addEventListener('change', changeHandler);
}

function populateSimpleSelect(id, list) {
    const el = document.getElementById(id);
    if(!el || !list) return;
    el.innerHTML = ''; 
    list.forEach(item => {
        el.add(new Option(item.label, item.value));
    });
}

function updateCostumeStyle() {
    const cat = document.getElementById('charCostumeSetCategory').value;
    updateSubSelect('charCostumeSetStyle', costumeSetDatabase[cat]);
}
function updateBottomStyle() {
    const cat = document.getElementById('charBottomCategory').value;
    updateSubSelect('charBottomStyle', bottomDatabase[cat]);
}
function updateShoeStyle() {
    const cat = document.getElementById('charShoeCategory').value;
    updateSubSelect('charShoeStyle', shoeDatabase[cat]);
    const p = document.getElementById('paletteShoes');
    if(cat === 'barefoot' || cat === 'none') {
        p.classList.add('palette-disabled');
        const noneBtn = p.querySelector('.none');
        if(noneBtn) selectColor('shoes', null, noneBtn);
    } else {
        p.classList.remove('palette-disabled');
    }
}

function updateSubSelect(id, list) {
    const el = document.getElementById(id);
    el.innerHTML = '';
    (list || []).forEach(i => el.add(new Option(i.label, i.value)));
    notify();
}

function createPalette(containerId, colors, type) {
    const container = document.getElementById(containerId);
    if(!container) return;
    container.innerHTML = '';

    const none = document.createElement('div');
    none.className = 'color-swatch none active';
    none.title = '不指定顏色';
    none.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    none.onclick = (e) => selectColor(type, null, e.currentTarget);
    container.appendChild(none);

    colors.forEach(c => {
        const d = document.createElement('div');
        d.className = 'color-swatch';
        d.style.background = c.display || c.hex;
        d.title = c.name;
        d.onclick = (e) => selectColor(type, c, e.currentTarget);
        container.appendChild(d);
    });
}

function selectColor(type, colorObj, el) {
    mixColors[type] = colorObj;
    const parent = el.parentNode;
    Array.from(parent.children).forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    notify();
}

function notify() { if(updateCallback) updateCallback(); }

export function getData() {
    const data = {};
    if(document.getElementById('toggleCharCostume').checked) {
        if(costumeMode === 'set') {
            const desc = document.getElementById('charCostumeSetStyle').value;
            data.costume = { mode: "Set", description: formatItem(desc, mixColors.set) };
        } else {
            const parts = [];
            parts.push(formatItem(document.getElementById('charTop').value, mixColors.top));
            parts.push(formatItem(document.getElementById('charBottomStyle').value, mixColors.bottom));
            parts.push(formatItem(document.getElementById('charOuter').value, mixColors.outer));
            const shoeVal = document.getElementById('charShoeStyle').value;
            if(document.getElementById('charShoeCategory').value !== 'none') 
                parts.push(formatItem(shoeVal, mixColors.shoes));
            
            data.costume = { mode: "Mix", details: parts.filter(p=>p).join(', ') };
        }
    }
    if(document.getElementById('toggleCharLegwear').checked)
        data.legwear = formatItem(document.getElementById('charLegwear').value, mixColors.legwear);
    
    if(document.getElementById('toggleCharIntimate').checked) {
        const parts = [];
        parts.push(formatItem(document.getElementById('charBra').value, mixColors.bra));
        parts.push(formatItem(document.getElementById('charPanties').value, mixColors.panties));
        data.intimate = parts.filter(p=>p).join(', ');
    }
    
    if(document.getElementById('toggleCharAccessories').checked)
        data.accessories = document.getElementById('charAccessories').value;

    return data;
}
