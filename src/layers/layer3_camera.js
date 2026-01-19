import { poseDatabase, handActionList } from '../data/db_pose.js';
import { framingDatabase, angleDatabase } from '../data/db_camera.js'; // ★ 新增引入
import { toggleSection } from '../utils.js';

let updateCallback = null;

export function init(callback) {
    updateCallback = callback;
    
    // 1. 初始化動作類別 (Pose Category)
    const catSelect = document.getElementById('camPoseCategory');
    if(catSelect) {
        catSelect.innerHTML = '';
        poseDatabase.forEach(group => {
            catSelect.add(new Option(group.label, group.id));
        });
        catSelect.addEventListener('change', updatePose);
    }
    document.getElementById('camPoseStyle').addEventListener('change', notify);

    // 2. 初始化手部動作 (Hand Action)
    const handSelect = document.getElementById('camHandAction');
    if(handSelect) {
        handSelect.innerHTML = '';
        handActionList.forEach(h => handSelect.add(new Option(h.label, h.value)));
        handSelect.addEventListener('change', notify);
    }

    // 3. ★★★ 初始化取景 (Framing) - 改為讀取 DB ★★★
    const frameSelect = document.getElementById('camFraming');
    if(frameSelect) {
        frameSelect.innerHTML = ''; // 清空 HTML 預設值
        framingDatabase.forEach(f => frameSelect.add(new Option(f.label, f.value)));
        frameSelect.addEventListener('change', notify);
    }

    // 4. ★★★ 初始化視角 (Angle) - 改為讀取 DB ★★★
    const angleSelect = document.getElementById('camAngle');
    if(angleSelect) {
        angleSelect.innerHTML = ''; // 清空 HTML 預設值
        angleDatabase.forEach(a => angleSelect.add(new Option(a.label, a.value)));
        angleSelect.addEventListener('change', notify);
    }

    // Toggle 事件綁定
    ['toggleLayerCamera', 'toggleHandAction'].forEach(id => {
        document.getElementById(id).addEventListener('change', () => {
            toggleSection(id);
            notify();
        });
    });

    // 初次執行
    updatePose();
}

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
    // 獲取目前選中的動作分類 ID，並轉換回中文標籤名稱 (為了 Prompt 顯示好看)
    const catId = document.getElementById('camPoseCategory').value;
    const group = poseDatabase.find(g => g.id === catId);
    const categoryLabel = group ? group.label.split(' ')[0] : catId;

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
