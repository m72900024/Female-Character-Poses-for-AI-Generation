// Toast 通知功能
export function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMsg');
    if (!toast || !toastMsg) return;

    toastMsg.textContent = message;
    toast.classList.remove('translate-y-24', 'opacity-0');
    setTimeout(() => {
        toast.classList.add('translate-y-24', 'opacity-0');
    }, 2000);
}

// 複製到剪貼簿功能
export function copyToClipboard(text) {
    if (!text) return;

    // 優先使用現代 API
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('JSON 已複製！');
        }).catch((err) => {
            console.error('Copy failed', err);
            fallbackCopy(text);
        });
    } else {
        fallbackCopy(text);
    }
}

// 舊版瀏覽器或非 HTTPS 環境的備用複製方案
function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        showToast('JSON 已複製！');
    } catch (err) {
        showToast('複製失敗');
    }
    document.body.removeChild(textarea);
}

// 格式化輸出項目 (文字 + 顏色)
export function formatItem(item, colorObj) {
    if (!item || item === 'None') return null;
    if (colorObj && colorObj.hex) {
        return `${colorObj.name} (${colorObj.hex}) ${item}`;
    }
    return item;
}

// ★★★ 關鍵修正：這就是您報錯缺失的函式 ★★★
// 用於處理 Layer 標題與內容區塊的摺疊動畫
export function toggleSection(checkboxId) {
    const checkbox = document.getElementById(checkboxId);
    if (!checkbox) return;

    // 根據命名規則尋找對應的容器 ID
    // 規則 1: toggleLayerXXX -> contentLayerXXX (大區塊)
    // 規則 2: toggleCharXXX -> boxCharXXX (子選項)
    const contentId = checkboxId.replace('toggle', 'content');
    const boxId = checkboxId.replace('toggle', 'box');
    
    // 嘗試取得 DOM 元素
    const target = document.getElementById(contentId) || document.getElementById(boxId);
    
    if (target) {
        if (checkbox.checked) {
            target.classList.remove('collapsed');
        } else {
            target.classList.add('collapsed');
        }
    }
}
