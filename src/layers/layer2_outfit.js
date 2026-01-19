import { 
    costumeSetDatabase, bottomDatabase, shoeDatabase,
    topDatabase, outerDatabase, legwearDatabase, braDatabase, pantiesDatabase, accessoriesDatabase 
} from '../data/db_outfit.js';
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

    // ★★★ 初始化所有下拉選單 (Data-Driven) ★★★
    // 1. 複雜連動選單
    initSelect('charCostumeSetCategory', costumeSetDatabase, updateCostumeStyle);
    initSelect('charBottomCategory', bottomDatabase, updateBottomStyle);
    initSelect('charShoeCategory', shoeDatabase, updateShoeStyle);

    // 2. 簡單列表選單 (使用我們剛剛新增的 DB 資料)
    populateSimpleSelect('charTop', topDatabase);
    populateSimpleSelect('charOuter', outerDatabase);
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

// 用於初始化分類選單 (Category)
function initSelect(id, db, changeHandler) {
    const el = document.getElementById(id);
    if(!el) return;
    el.innerHTML = ''; // 清空 HTML 預設值
    Object.keys(db).forEach(k => el.add(new Option(k, k)));
    el.addEventListener('change', changeHandler);
}

// ★★★ 新增：用於填充簡單列表的輔助函式 ★★★
function populateSimpleSelect(id, list) {
    const el = document.getElementById(id);
    if(!el || !list) return;
    el.innerHTML = ''; // 清空 HTML 預設值
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
    // 若赤腳則禁用色盤
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
