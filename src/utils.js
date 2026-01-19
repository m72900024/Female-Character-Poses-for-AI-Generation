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

export function copyToClipboard(text) {
    if (!navigator.clipboard) {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'absolute';
        textarea.style.left = '-9999px';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            showToast('已複製！');
        } catch (err) {
            showToast('複製失敗');
        }
        document.body.removeChild(textarea);
        return;
    }
    navigator.clipboard.writeText(text).then(() => {
        showToast('JSON 已複製！');
    }).catch(() => {
        showToast('複製失敗');
    });
}

export function formatItem(item, colorObj) {
    if (!item || item === 'None') return null;
    if (colorObj && colorObj.hex) {
        return `${colorObj.name} (${colorObj.hex}) ${item}`;
    }
    return item;
}

// 處理摺疊動畫的輔助函式
export function toggleSection(checkboxId) {
    const checkbox = document.getElementById(checkboxId);
    const contentId = checkboxId.replace('toggle', 'content');
    const boxId = checkboxId.replace('toggle', 'box');
    
    // 嘗試找 content 或 box
    const target = document.getElementById(contentId) || document.getElementById(boxId);
    
    if (target) {
        if (checkbox.checked) target.classList.remove('collapsed');
        else target.classList.add('collapsed');
    }
}
