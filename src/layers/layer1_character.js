import { hairDatabase, expressionDatabase } from '../data/db_character.js';
import { macaronColors } from '../data/db_meta.js';
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
    // 預設顏色列表
    const colors = [
        {hex:'#0C0C0C', name:'Black'}, {hex:'#333', name:'Soft Black'},
        {hex:'#5D4037', name:'Brown'}, {hex:'#E6BE8A', name:'Blonde'},
        {hex:'#E0E0E0', name:'Silver'}
    ];
    
    // 清除舊的色塊（除了 label）
    while(container.children.length > 1) {
        container.removeChild(container.lastChild);
    }

    // 無色
    const noneDiv = document.createElement('div');
    noneDiv.className = 'color-swatch none active';
    noneDiv.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    noneDiv.onclick = (e) => selectColor(null, e.currentTarget);
    container.appendChild(noneDiv);

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
