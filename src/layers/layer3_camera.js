import { poseDatabase, handActionList } from '../data/db_pose.js';

let updateCallback = null;

export function init(callback) {
    updateCallback = callback;
    
    // 初始化 Pose Menu
    const catSelect = document.getElementById('camPoseCategory');
    catSelect.innerHTML = '';
    const cats = [
        { value: "prone", label: "趴姿 (Prone)" },
        { value: "front", label: "正面 (Front)" },
        { value: "back", label: "背面 (Back)" },
        { value: "sitting", label: "坐姿 (Sitting)" },
        { value: "lying", label: "臥姿 (Lying)" },
        { value: "squatting", label: "蹲姿 (Squatting)" },
        { value: "leg_focus", label: "腿部重點 (Legs)" }
    ];
    cats.forEach(c => catSelect.add(new Option(c.label, c.value)));

    // 初始化 Hand Action
    const handSelect = document.getElementById('camHandAction');
    handSelect.innerHTML = '';
    handActionList.forEach(h => handSelect.add(new Option(h.label, h.value)));

    // 綁定
    catSelect.addEventListener('change', updatePoseStyles);
    document.getElementById('camPoseStyle').addEventListener('change', notifyUpdate);
    document.getElementById('camFraming').addEventListener('change', notifyUpdate);
    document.getElementById('camAngle').addEventListener('change', notifyUpdate);
    document.getElementById('camHandAction').addEventListener('change', notifyUpdate);
    
    // 手部動作開關
    document.getElementById('toggleHandAction').addEventListener('change', (e) => {
        const box = document.getElementById('boxHandAction');
        e.target.checked ? box.classList.remove('collapsed') : box.classList.add('collapsed');
        notifyUpdate();
    });

    updatePoseStyles();
}

function notifyUpdate() {
    if(updateCallback) updateCallback();
}

function updatePoseStyles() {
    const cat = document.getElementById('camPoseCategory').value;
    const select = document.getElementById('camPoseStyle');
    select.innerHTML = '';
    (poseDatabase[cat] || []).forEach(p => select.add(new Option(p.label, p.value)));
    notifyUpdate();
}

export function getData() {
    const poseCatSelect = document.getElementById('camPoseCategory');
    const label = poseCatSelect.options[poseCatSelect.selectedIndex].text;
    
    const actionObj = {
        category: label,
        pose: document.getElementById('camPoseStyle').value
    };

    if (document.getElementById('toggleHandAction').checked) {
        const h = document.getElementById('camHandAction').value;
        if(h !== 'None') actionObj.hands = h;
    }

    return {
        shot_size: document.getElementById('camFraming').value,
        camera_angle: document.getElementById('camAngle').value,
        action: actionObj
    };
}
