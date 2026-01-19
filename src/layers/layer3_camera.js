import { poseDatabase, handActionList } from '../data/db_pose.js';
import { toggleSection } from '../utils.js';

let updateCallback = null;

export function init(callback) {
    updateCallback = callback;
    
    // ★★★ 初始化動作類別選單 (改為讀取 Array 結構) ★★★
    const catSelect = document.getElementById('camPoseCategory');
    if(catSelect) {
        catSelect.innerHTML = '';
        poseDatabase.forEach(group => {
            catSelect.add(new Option(group.label, group.id));
        });
        catSelect.addEventListener('change', updatePose);
    }
    
    document.getElementById('camPoseStyle').addEventListener('change', notify);
    document.getElementById('camFraming').addEventListener('change', notify);
    document.getElementById('camAngle').addEventListener('change', notify);

    // 手部動作
    const handSelect = document.getElementById('camHandAction');
    if(handSelect) {
        handSelect.innerHTML = '';
        handActionList.forEach(h => handSelect.add(new Option(h.label, h.value)));
        handSelect.addEventListener('change', notify);
    }

    // Toggle 事件
    ['toggleLayerCamera', 'toggleHandAction'].forEach(id => {
        document.getElementById(id).addEventListener('change', () => {
            toggleSection(id);
            notify();
        });
    });

    updatePose();
}

// ★★★ 更新動作子選單 (邏輯更新) ★★★
function updatePose() {
    const catId = document.getElementById('camPoseCategory').value;
    const select = document.getElementById('camPoseStyle');
    select.innerHTML = '';
    
    // 從陣列中找到對應 id 的群組
    const group = poseDatabase.find(g => g.id === catId);
    
    if (group && group.options) {
        group.options.forEach(p => select.add(new Option(p.label, p.value)));
    }
    notify();
}

function notify() { if(updateCallback) updateCallback(); }

export function getData() {
    // 獲取目前選中的分類 ID，並轉換回中文標籤名稱 (為了 Prompt 顯示好看)
    const catId = document.getElementById('camPoseCategory').value;
    const group = poseDatabase.find(g => g.id === catId);
    const categoryLabel = group ? group.label.split(' ')[0] : catId; // 只取中文部分或 ID

    const actionObj = {
        category: categoryLabel,
        pose: document.getElementById('camPoseStyle').value
    };
    
    if(document.getElementById('toggleHandAction').checked) {
        const h = document.getElementById('camHandAction').value;
        if(h !== 'None') actionObj.hands = h;
    }
    
    return {
        shot: document.getElementById('camFraming').value,
        angle: document.getElementById('camAngle').value,
        action: actionObj
    };
}
