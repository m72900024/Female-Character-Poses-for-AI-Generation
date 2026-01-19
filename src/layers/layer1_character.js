import { hairDatabase, expressionDatabase } from '../data/db_character.js';
// import { macaronColors } from '../data/db_meta.js'; // 這裡不需要引入通用色盤
import { toggleSection } from '../utils.js';

let updateCallback = null;
let currentHairColor = null;

export function init(callback) {
    updateCallback = callback;
    
    // 初始化表情選單
    const expCat = document.getElementById('charExpressionCategory');
    if (expCat) {
        expressionDatabase.forEach((group, idx) => expCat.add(new Option(group.label, idx)));
        expCat.addEventListener('change', updateExpressionStyles);
    }
    document.getElementById('charExpressionStyle').addEventListener('change', notify);

    // 髮型
    const hairCat = document.getElementById('charHairCategory');
    if (hairCat) {
        Object.keys(hairDatabase).forEach(key => hairCat.add(new Option(key, key)));
        hairCat.addEventListener('change', updateHairStyles);
    }
    document.getElementById('charHairStyle').addEventListener('change', notify);

    // 基礎
    document.getElementById('charBase').addEventListener('change', notify);

    // 顏色生成
    renderHairColors();

    // 綁定開關
    ['toggleCharBase', 'toggleCharHair', 'toggleCharExpression'].forEach(id => {
        document.getElementById(id).addEventListener('change', () => {
            toggleSection(id);
            notify();
        });
    });

    // 初次執行
    updateHairStyles();
    updateExpressionStyles();
}

function renderHairColors() {
    const container = document.getElementById('hairColorContainer');
    if (!container) return;

    // ★★★ 這裡恢復完整的髮色列表 ★★★
    const colors = [
        { hex: "#0C0C0C", name: "Jet Black (漆黑)" },
        { hex: "#333333", name: "Soft Black (柔黑)" },
        { hex: "#3B2417", name: "Dark Brown (深棕)" },
        { hex: "#5D4037", name: "Chestnut Brown (栗棕)" },
        { hex: "#8D5524", name: "Light Brown (淺棕)" },
        { hex: "#E6BE8A", name: "Blonde (金髮)" },
        { hex: "#C0C0C0", name: "Silver/Grey (銀灰)" },
        { hex: "#FFFFFF", name: "Platinum White (白金)" },
        { hex: "#FF0000", name: "Redhead (紅髮)" },
        { hex: "#800020", name: "Burgundy (酒紅)" },
        { hex: "#FF69B4", name: "Pink (粉髮)" },
        { hex: "#8A2BE2", name: "BlueViolet (紫髮)" }
    ];
    
    // 安全地清除舊內容，保留標籤文字
    const labelSpan = container.querySelector('span.text-slate-500');
    container.innerHTML = ''; 
    if (labelSpan) container.appendChild(labelSpan);

    // 無色按鈕
    const noneDiv = document.createElement('div');
    noneDiv.className = 'color-swatch none active';
    noneDiv.title = "不指定顏色";
    noneDiv.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    noneDiv.onclick = (e) => selectColor(null, e.currentTarget);
    container.appendChild(noneDiv);

    // 生成所有色塊
    colors.forEach(c => {
        const div = document.createElement('div');
        div.className = 'color-swatch';
        div.style.backgroundColor = c.hex;
        div.title = c.name;
        div.onclick = (e) => selectColor(c, e.currentTarget);
        container.appendChild(div);
    });
}

function selectColor(colorObj, el) {
    currentHairColor = colorObj;
    const parent = el.parentNode;
    Array.from(parent.children).forEach(c => c.classList.remove('active'));
    el.classList.add('active');
    notify();
}

function updateHairStyles() {
    const cat = document.getElementById('charHairCategory').value;
    const select = document.getElementById('charHairStyle');
    select.innerHTML = '';
    (hairDatabase[cat] || []).forEach(item => select.add(new Option(item.label, item.value)));
    notify();
}

function updateExpressionStyles() {
    const idx = document.getElementById('charExpressionCategory').value;
    const select = document.getElementById('charExpressionStyle');
    select.innerHTML = '';
    (expressionDatabase[idx]?.options || []).forEach(item => select.add(new Option(item.label, item.value)));
    notify();
}

function notify() { if(updateCallback) updateCallback(); }

export function getData() {
    const data = {};
    if(document.getElementById('toggleCharBase').checked) 
        data.base = document.getElementById('charBase').value;
    
    if(document.getElementById('toggleCharHair').checked) {
        data.hair_style = document.getElementById('charHairStyle').value;
        if(currentHairColor) data.hair_color = `${currentHairColor.name} (${currentHairColor.hex})`;
    }

    if(document.getElementById('toggleCharExpression').checked)
        data.expression = document.getElementById('charExpressionStyle').value;

    return data;
}
