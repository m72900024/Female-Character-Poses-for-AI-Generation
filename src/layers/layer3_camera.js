// 檔名：src/layers/layer3_camera.js
import { poseDatabase, handActionList } from '../data/db_pose.js';
import { framingDatabase, positionDatabase, verticalAngleDatabase, specialAngleDatabase } from '../data/db_camera.js';
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

    // 4. 初始化鏡頭位置 (Position) - 新增
    const positionSelect = document.getElementById('camPosition');
    if(positionSelect) {
        positionSelect.innerHTML = '';
        positionDatabase.forEach(p => positionSelect.add(new Option(p.label, p.value)));
        positionSelect.addEventListener('change', notify);
    }

    // 5. 初始化垂直角度 (Vertical Angle) - 新增
    const verticalSelect = document.getElementById('camVertical');
    if(verticalSelect) {
        verticalSelect.innerHTML = '';
        verticalAngleDatabase.forEach(v => verticalSelect.add(new Option(v.label, v.value)));
        verticalSelect.addEventListener('change', notify);
    }

    // 6. 初始化特殊效果 (Special) - 新增
    const specialSelect = document.getElementById('camSpecial');
    if(specialSelect) {
        specialSelect.innerHTML = '';
        specialAngleDatabase.forEach(s => specialSelect.add(new Option(s.label, s.value)));
        specialSelect.addEventListener('change', notify);
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
    const positionEl = document.getElementById('camPosition');
    const verticalEl = document.getElementById('camVertical');
    const specialEl = document.getElementById('camSpecial');
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

    // 組合鏡頭設定
    const cameraObj = {
        framing: frameEl ? frameEl.value : '',
        position: positionEl ? positionEl.value : '',
        vertical_angle: verticalEl ? verticalEl.value : ''
    };

    // 特殊效果 (如果有選擇)
    if(specialEl && specialEl.value) {
        cameraObj.special = specialEl.value;
    }

    return {
        camera: cameraObj,
        action: actionObj
    };
}
