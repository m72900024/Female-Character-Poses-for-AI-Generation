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

// 複製功能
export function copyToClipboard(text) {
    if (!text) {
        text = document.getElementById('jsonOutput').textContent;
    }
    
    // 使用現代 Clipboard API
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('JSON 已成功複製！');
        }).catch(err => {
            console.error('複製失敗:', err);
            fallbackCopy(text);
        });
    } else {
        fallbackCopy(text);
    }
}

function fallbackCopy(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    try {
        document.execCommand('copy');
        showToast('JSON 已成功複製！');
    } catch (err) {
        showToast('複製失敗，請手動複製。');
    }
    document.body.removeChild(textarea);
}

// 輔助：格式化項目 (處理顏色與文字組合)
export function formatItem(item, colorObj) {
    if (!item || item === 'None') return null;
    if (colorObj && colorObj.hex) {
        return `${colorObj.name} (${colorObj.hex}) ${item}`;
    }
    return item;
}
