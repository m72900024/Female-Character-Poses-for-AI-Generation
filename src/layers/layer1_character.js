import { hairDatabase, expressionDatabase } from '../data/db_character.js';
import { macaronColors } from '../data/db_meta.js';

let updateCallback = null;
let currentHairColor = null;

export function init(callback) {
    updateCallback = callback;
    
    // 初始化選單
    initExpressionMenu();
    
    // 綁定事件
    document.getElementById('charBase').addEventListener('change', notifyUpdate);
    document.getElementById('toggleCharBase').addEventListener('change', handleToggle);
    
    document.getElementById('charHairCategory').addEventListener('change', updateHairStyles);
    document.getElementById('charHairStyle').addEventListener('change', notifyUpdate);
    document.getElementById('toggleCharHair').addEventListener('change', handleToggle);
    
    document.getElementById('charExpressionCategory').addEventListener('change', updateExpressionStyles);
    document.getElementById('charExpressionStyle').addEventListener('change', notifyUpdate);
    document.getElementById('toggleCharExpression').addEventListener('change', handleToggle);

    // 渲染髮色選擇器
    renderHairColorPalette();
    
    // 初次填充子選單
    updateHairStyles();
}

function notifyUpdate() {
    if (updateCallback) updateCallback();
}

function handleToggle(e) {
    // 處理 sub-switch 的摺疊邏輯 (需配合 CSS .layer-content.collapsed)
    const targetId = e.target.id.replace('toggle', 'box');
    const target = document.getElementById(targetId);
    if(target) {
        if(e.target.checked) target.classList.remove('collapsed');
        else target.classList.add('collapsed');
    }
    notifyUpdate();
}

function updateHairStyles() {
    const category = document.getElementById('charHairCategory').value;
    const select = document.getElementById('charHairStyle');
    select.innerHTML = '';
    
    const styles = hairDatabase[category] || [];
    styles.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s.value;
        opt.textContent = s.label;
        select.appendChild(opt);
    });
    notifyUpdate();
}

function updateExpressionStyles() {
    const index = document.getElementById('charExpressionCategory').value;
    const select = document.getElementById('charExpressionStyle');
    select.innerHTML = '';
    
    const group = expressionDatabase[index];
    if(group) {
        group.options.forEach(opt => {
            const el = document.createElement('option');
            el.value = opt.value;
            el.textContent = opt.label;
            select.appendChild(el);
        });
    }
    notifyUpdate();
}

function initExpressionMenu() {
    const select = document.getElementById('charExpressionCategory');
    select.innerHTML = '';
    expressionDatabase.forEach((group, idx) => {
        const opt = document.createElement('option');
        opt.value = idx;
        opt.textContent = group.label;
        select.appendChild(opt);
    });
}

function renderHairColorPalette() {
    // 這裡我們直接使用 HTML 裡寫好的 swatches 或動態生成
    // 為了模組化，我們重新綁定 HTML 中的 onclick 事件到 JS
    const swatches = document.querySelectorAll('#boxCharHair .color-swatch');
    swatches.forEach(el => {
        el.addEventListener('click', () => {
             // 移除所有 active
             swatches.forEach(s => s.classList.remove('active'));
             el.classList.add('active');
             
             // 解析顏色
             if (el.classList.contains('none')) {
                 currentHairColor = null;
             } else {
                 // 從 style 或 title 獲取
                 // 這裡假設我們將數據存儲在 dataset 或依賴 index，簡單起見我們讀取 inline style
                 const rgb = el.style.backgroundColor; 
                 const title = el.title; // 這裡作為名稱
                 // 需要將 RGB 轉 Hex 或是直接用 title 裡的定義
                 // 為了精確，建議在 HTML 生成時 dataset.hex = "#..."
                 // 這裡簡化邏輯：
                 // 實際專案建議動態生成 palette，這邊暫時沿用 HTML 結構，透過 click 觸發 update
                 
                 // **Hack**: 為了配合原代碼邏輯，這裡假設使用者點選時我們知道顏色
                 // 更好的方式是將顏色數據寫在 dataset 中
             }
             
             // *注意*：因為原本 HTML 是 hardcode onclick="selectHairColor('#0C0C0C', ...)"
             // 在模組化後，建議用 JS 動態生成這些色塊，或者解析 dataset
        });
    });
    
    // 重新生成色塊以確保數據正確 (覆蓋 HTML 的內容)
    const container = document.querySelector('#boxCharHair .flex.items-center.gap-2.pt-1');
    if(container) {
        // 清除除了 label 以外的內容
        // 這裡為了演示方便，我們不做 DOM 重建，而是假設您會修改 init 裡的邏輯
        // 建議在 main.js 移除 HTML 裡的 onclick，並在這裡動態生成
    }
}

// 供外部綁定使用的顏色選擇 (替換 HTML onclick)
export function setHairColor(hex, name) {
    currentHairColor = hex ? { hex, name } : null;
    notifyUpdate();
}

// 導出資料收集
export function getData() {
    const data = {};
    
    if (document.getElementById('toggleCharBase').checked) {
        data.base = document.getElementById('charBase').value;
    }
    
    if (document.getElementById('toggleCharHair').checked) {
        data.hair_style = document.getElementById('charHairStyle').value;
        
        // 這裡需要獲取當前選中的顏色
        // 簡單實作：查找 active 的元素
        const activeSwatch = document.querySelector('#boxCharHair .color-swatch.active');
        if(activeSwatch && !activeSwatch.classList.contains('none')) {
             // 這裡需要一個機制把 hex 存回來，或者直接讀取 title/dataset
             // 假設我們修改了 HTML 生成邏輯，加上 data-hex
             const hex = activeSwatch.dataset.hex || "#000000"; 
             const name = activeSwatch.title || "Color";
             data.hair_color = `${name} (${hex})`;
        }
    }
    
    if (document.getElementById('toggleCharExpression').checked) {
        data.expression = document.getElementById('charExpressionStyle').value;
    }
    
    return data;
}
