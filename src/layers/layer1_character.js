import { hairDatabase, expressionDatabase, ethnicityDatabase } from '../data/db_character.js';
import { toggleSection } from '../utils.js';

let updateCallback = null;
let currentHairColor = null;

export function init(callback) {
    updateCallback = callback;

    // 0. 初始化人種/族裔選單
    const ethSelect = document.getElementById('charEthnicity');
    if (ethSelect) {
        ethSelect.innerHTML = '';
        ethnicityDatabase.forEach(item => {
            ethSelect.add(new Option(item.label, item.value));
        });
        ethSelect.addEventListener('change', notify);
    }

    // 1. 初始化表情選單
    const expCat = document.getElementById('charExpressionCategory');
    if (expCat) {
        expCat.innerHTML = '';
        expressionDatabase.forEach((group, idx) => expCat.add(new Option(group.label, idx)));
        expCat.addEventListener('change', updateExpressionStyles);
    }
    document.getElementById('charExpressionStyle').addEventListener('change', notify);

    // 2. 初始化髮型分類選單 (現在改為讀取陣列，支援直接讀取 DB 中的 label)
    const hairCat = document.getElementById('charHairCategory');
    if (hairCat) {
        hairCat.innerHTML = '';
        hairDatabase.forEach((group, idx) => {
            // 使用 group.id 作為值，group.label 作為顯示文字
            hairCat.add(new Option(group.label, group.id));
        });
        hairCat.addEventListener('change', updateHairStyles);
    }
    document.getElementById('charHairStyle').addEventListener('change', notify);

    // 3. 基礎
    document.getElementById('charBase').addEventListener('change', notify);

    // 4. 顏色生成
    renderHairColors();

    // 5. 綁定開關
    ['toggleCharEthnicity', 'toggleCharBase', 'toggleCharHair', 'toggleCharExpression'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('change', () => {
                toggleSection(id);
                notify();
            });
        }
    });

    // 初次執行
    updateHairStyles();
    updateExpressionStyles();
}

function renderHairColors() {
    const container = document.getElementById('hairColorContainer');
    if (!container) return;

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

// ★★★ 更新髮型子選單 (邏輯已更新以配合新的 DB 結構) ★★★
function updateHairStyles() {
    const selectedId = document.getElementById('charHairCategory').value;
    const select = document.getElementById('charHairStyle');
    select.innerHTML = '';
    
    // 在陣列中尋找 id 符合的群組
    const group = hairDatabase.find(g => g.id === selectedId);
    
    if (group && group.options) {
        group.options.forEach(item => {
            select.add(new Option(item.label, item.value));
        });
    }
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

    // 人種/族裔 (如果有開啟)
    if(document.getElementById('toggleCharEthnicity')?.checked) {
        const ethEl = document.getElementById('charEthnicity');
        if (ethEl) data.ethnicity = ethEl.value;
    }

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
