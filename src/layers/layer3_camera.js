import { poseDatabase, handActionList } from '../data/db_pose.js';
import { toggleSection } from '../utils.js';

let updateCallback = null;

export function init(callback) {
    updateCallback = callback;
    
    const catSelect = document.getElementById('camPoseCategory');
    if(catSelect) {
        Object.keys(poseDatabase).forEach(k => catSelect.add(new Option(k, k)));
        catSelect.addEventListener('change', updatePose);
    }
    document.getElementById('camPoseStyle').addEventListener('change', notify);
    document.getElementById('camFraming').addEventListener('change', notify);
    document.getElementById('camAngle').addEventListener('change', notify);

    const handSelect = document.getElementById('camHandAction');
    if(handSelect) {
        handActionList.forEach(h => handSelect.add(new Option(h.label, h.value)));
        handSelect.addEventListener('change', notify);
    }

    // Toggle
    ['toggleLayerCamera', 'toggleHandAction'].forEach(id => {
        document.getElementById(id).addEventListener('change', () => {
            toggleSection(id);
            notify();
        });
    });

    updatePose();
}

function updatePose() {
    const cat = document.getElementById('camPoseCategory').value;
    const select = document.getElementById('camPoseStyle');
    select.innerHTML = '';
    (poseDatabase[cat] || []).forEach(p => select.add(new Option(p.label, p.value)));
    notify();
}

function notify() { if(updateCallback) updateCallback(); }

export function getData() {
    const actionObj = {
        category: document.getElementById('camPoseCategory').value,
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
