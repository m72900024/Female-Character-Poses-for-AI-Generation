// 檔名：src/layers/layer3_camera.js
import { poseDatabase, handActionList } from '../data/db_pose.js';
import { framingDatabase, angleDatabase } from '../data/db_camera.js'; // ★ 這裡一定要引入成功
import { toggleSection } from '../utils.js';

let updateCallback = null;

// ★★★ 必須有 export function init ★★★
export function init(callback) {
    updateCallback = callback;
    
    // 1. 初始化動作類別
    const catSelect = document.getElementById('camPoseCategory');
    if(catSelect) {
        catSelect.innerHTML = '';
        poseDatabase.forEach(group => {
            catSelect.add(new Option(group.label, group.id));
        });
        catSelect.addEventListener('change', updatePose);
    }
    
    const poseStyle = document.getElementById('camPoseStyle');
    if(poseStyle) poseStyle.addEventListener('change', notify);

    // 2. 初始化手部動作
    const handSelect = document.getElementById('camHandAction');
    if(handSelect) {
        handSelect.innerHTML = '';
        handActionList.forEach(h => handSelect.add(new Option(h.label, h.value)));
        handSelect.addEventListener('change', notify);
    }

    // 3. 初始化取景 (Framing)
    const frameSelect = document.getElementById('camFraming');
    if(frameSelect) {
        frameSelect.innerHTML = '';
        framingDatabase.forEach(f => frameSelect.add(new Option(f.label, f.value)));
        frameSelect.addEventListener('change', notify);
    }

    // 4. 初始化視角 (Angle)
    const angleSelect = document.getElementById('camAngle');
    if(angleSelect) {
        angleSelect.innerHTML = '';
        angleDatabase.forEach(a => angleSelect.add(new Option(a.label, a.value)));
        angleSelect.addEventListener('change', notify);
    }

    // Toggle 事件
    ['toggleLayerCamera', 'toggleHandAction'].forEach(id => {
        const el = document.getElementById(id);
        if(el) {
            el.addEventListener('change', () => {
                toggleSection(id);
                notify();
            });
        }
    });

    updatePose();
}

function updatePose() {
    const catId = document.getElementById('camPoseCategory').value;
    const select = document.getElementById('camPoseStyle');
    if(!select) return;
    
    select.innerHTML = '';
    const group = poseDatabase.find(g => g.id === catId);
    
    if (group && group.options) {
        group.options.forEach(p => select.add(new Option(p.label, p.value)));
    }
    notify();
}

function notify() { if(updateCallback) updateCallback(); }

export function getData() {
    const catEl = document.getElementById('camPoseCategory');
    const styleEl = document.getElementById('camPoseStyle');
    const frameEl = document.getElementById('camFraming');
    const angleEl = document.getElementById('camAngle');
    const handEl = document.getElementById('camHandAction');
    const handToggle = document.getElementById('toggleHandAction');

    // 安全檢查：如果 DOM 元素還沒準備好，回傳空物件
    if (!catEl || !styleEl) return {};

    const catId = catEl.value;
    const group = poseDatabase.find(g => g.id === catId);
    const categoryLabel = group ? group.label.split(' ')[0] : catId;

    const actionObj = {
        category: categoryLabel,
        pose: styleEl.value
    };
    
    if(handToggle && handToggle.checked && handEl) {
        if(handEl.value !== 'None') actionObj.hands = handEl.value;
    }
    
    return {
        shot: frameEl ? frameEl.value : '',
        angle: angleEl ? angleEl.value : '',
        action: actionObj
    };
}
