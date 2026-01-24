import { 
    costumeSetDatabase, bottomDatabase, shoeDatabase,
    topDatabase, outerDatabase 
} from '../data/db_outfit.js';
import { 
    legwearDatabase, braDatabase, pantiesDatabase, accessoriesDatabase 
} from '../data/db_innerwear.js';
import { macaronColors, shoeColors, legwearColors } from '../data/db_meta.js';
import { formatItem, toggleSection } from '../utils.js';

let updateCallback = null;
let costumeMode = 'set';
const mixColors = { top:null, bottom:null, outer:null, shoes:null, legwear:null, bra:null, panties:null, set:null };

// ★★★ 分類翻譯對照表 ★★★
const categoryTranslations = {
    // 套裝分類 (按邏輯順序排列)
    casual: "日常休閒 (Casual)",
    influencer: "網美風格 (Influencer)",
    sweet_cute: "甜美可愛 (Sweet & Cute)",
    sexy_fashion: "性感時尚 (Sexy Fashion)",
    swimwear: "泳裝比基尼 (Swimwear)",
    uniform: "學生制服 (School Uniform)",
    professional: "職業裝 (Professional)",
    cosplay: "角色扮演 (Cosplay)",
    sportswear: "運動服飾 (Sportswear)",
    qipao: "旗袍 (Qipao)",
    hanfu: "漢服 (Hanfu)",
    kimono: "和服 (Kimono)",
    seasonal: "節慶限定 (Seasonal)",
    // 下裝
    pants: "長褲/短褲 (Pants)",
    mini_skirt: "迷你裙 (Mini Skirt)",
    short_skirt: "短裙 (Short Skirt)",
    midi_skirt: "中長裙 (Midi Skirt)",
    long_skirt: "長裙 (Long Skirt)",
    influencer: "📸 網美風格 (Influencer)",
    // 鞋子
    sneakers: "運動休閒 (Sneakers)",
    heels: "高跟鞋 (Heels)",
    boots: "靴子 (Boots)",
    flats: "平底鞋 (Flats)",
    barefoot: "赤腳 (Barefoot)",
    none: "不指定 (None)"
};

export function init(callback) {
    updateCallback = callback;

    const btnSet = document.getElementById('btnModeSet');
    const btnMix = document.getElementById('btnModeMix');
    if (btnSet) btnSet.onclick = () => switchMode('set');
    if (btnMix) btnMix.onclick = () => switchMode('mix');

    // 初始化選單 (使用翻譯表)
    initSelect('charCostumeSetCategory', costumeSetDatabase, updateCostumeStyle);
    initSelect('charBottomCategory', bottomDatabase, updateBottomStyle);
    initSelect('charShoeCategory', shoeDatabase, updateShoeStyle);
    
    populateSimpleSelect('charTop', topDatabase);
    populateSimpleSelect('charOuter', outerDatabase);
    populateSimpleSelect('charLegwear', legwearDatabase);
    populateSimpleSelect('charBra', braDatabase);
    populateSimpleSelect('charPanties', pantiesDatabase);
    populateSimpleSelect('charAccessories', accessoriesDatabase);

    // 事件監聽
    ['charTop', 'charOuter', 'charLegwear', 'charBra', 'charPanties', 'charAccessories'].forEach(id => {
        const el = document.getElementById(id);
        if(el) el.addEventListener('change', notify);
    });
    
    ['charCostumeSetStyle', 'charBottomStyle', 'charShoeStyle'].forEach(id => {
        const el = document.getElementById(id);
        if(el) el.addEventListener('change', notify);
    });

    ['toggleCharCostume', 'toggleCharLegwear', 'toggleCharIntimate', 'toggleCharAccessories'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('change', () => {
                toggleSection(id);
                notify();
            });
        }
    });

    createPalette('paletteCostumeSet', macaronColors, 'set');
    createPalette('paletteTop', macaronColors, 'top');
    createPalette('paletteBottom', macaronColors, 'bottom');
    createPalette('paletteOuter', macaronColors, 'outer');
    createPalette('paletteShoes', shoeColors, 'shoes');
    createPalette('paletteLegwear', legwearColors, 'legwear');
    createPalette('paletteBra', macaronColors, 'bra');
    createPalette('palettePanties', macaronColors, 'panties');

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

    if (!setDiv || !mixDiv) return;

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

// ★★★ 修改：支援中文翻譯的初始化函式 ★★★
function initSelect(id, db, changeHandler) {
    const el = document.getElementById(id);
    if(!el || !db) return;
    el.innerHTML = ''; 
    Object.keys(db).forEach(k => {
        // 嘗試從翻譯表找中文，找不到就用原 Key
        const label = categoryTranslations[k] || k;
        el.add(new Option(label, k));
    });
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
    const catEl = document.getElementById('charCostumeSetCategory');
    if (!catEl) return;
    const cat = catEl.value;
    updateSubSelect('charCostumeSetStyle', costumeSetDatabase[cat]);
}

function updateBottomStyle() {
    const catEl = document.getElementById('charBottomCategory');
    if (!catEl) return;
    const cat = catEl.value;
    updateSubSelect('charBottomStyle', bottomDatabase[cat]);
}

function updateShoeStyle() {
    const catEl = document.getElementById('charShoeCategory');
    if (!catEl) return;
    const cat = catEl.value;
    updateSubSelect('charShoeStyle', shoeDatabase[cat]);
    const p = document.getElementById('paletteShoes');
    if (p) {
        if(cat === 'barefoot' || cat === 'none') {
            p.classList.add('palette-disabled');
            const noneBtn = p.querySelector('.none');
            if(noneBtn) selectColor('shoes', null, noneBtn);
        } else {
            p.classList.remove('palette-disabled');
        }
    }
}

function updateSubSelect(id, list) {
    const el = document.getElementById(id);
    if (!el) return;
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
    if (parent) {
        Array.from(parent.children).forEach(c => c.classList.remove('active'));
    }
    el.classList.add('active');
    notify();
}

function notify() { if(updateCallback) updateCallback(); }

export function getData() {
    const data = {};
    const toggleCostume = document.getElementById('toggleCharCostume');
    if(toggleCostume && toggleCostume.checked) {
        if(costumeMode === 'set') {
            const descEl = document.getElementById('charCostumeSetStyle');
            if (descEl) {
                data.costume = { mode: "Set", description: formatItem(descEl.value, mixColors.set) };
            }
        } else {
            const parts = [];
            const topEl = document.getElementById('charTop');
            const botEl = document.getElementById('charBottomStyle');
            const outEl = document.getElementById('charOuter');
            const shoeEl = document.getElementById('charShoeStyle');
            const shoeCat = document.getElementById('charShoeCategory');

            if(topEl) parts.push(formatItem(topEl.value, mixColors.top));
            if(botEl) parts.push(formatItem(botEl.value, mixColors.bottom));
            if(outEl) parts.push(formatItem(outEl.value, mixColors.outer));
            
            if(shoeEl && shoeCat && shoeCat.value !== 'none') {
                parts.push(formatItem(shoeEl.value, mixColors.shoes));
            }
            
            data.costume = { mode: "Mix", details: parts.filter(p=>p).join(', ') };
        }
    }
    
    const legToggle = document.getElementById('toggleCharLegwear');
    if(legToggle && legToggle.checked) {
        const legEl = document.getElementById('charLegwear');
        if(legEl) data.legwear = formatItem(legEl.value, mixColors.legwear);
    }
    
    const intToggle = document.getElementById('toggleCharIntimate');
    if(intToggle && intToggle.checked) {
        const parts = [];
        const braEl = document.getElementById('charBra');
        const panEl = document.getElementById('charPanties');
        if(braEl) parts.push(formatItem(braEl.value, mixColors.bra));
        if(panEl) parts.push(formatItem(panEl.value, mixColors.panties));
        data.intimate = parts.filter(p=>p).join(', ');
    }
    
    const accToggle = document.getElementById('toggleCharAccessories');
    if(accToggle && accToggle.checked) {
        const accEl = document.getElementById('charAccessories');
        if(accEl) data.accessories = accEl.value;
    }

    return data;
}
