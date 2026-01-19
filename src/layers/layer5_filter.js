import { filterDatabase } from '../data/db_meta.js';
import { toggleSection } from '../utils.js';

let updateCallback = null;
let currentFilter = 'pastel';

export function init(callback) {
    updateCallback = callback;
    
    document.querySelectorAll('.filter-card').forEach(card => {
        card.addEventListener('click', () => {
            currentFilter = card.dataset.filter;
            document.querySelectorAll('.filter-card').forEach(c => c.classList.remove('active'));
            card.classList.add('active');
            notify();
        });
    });

    // 預設選中第一個
    const first = document.querySelector('.filter-card');
    if(first) first.classList.add('active');

    document.getElementById('toggleLayerFilter').addEventListener('change', () => {
        toggleSection('toggleLayerFilter');
        notify();
    });
}

function notify() { if(updateCallback) updateCallback(); }

export function getData() {
    return filterDatabase[currentFilter];
}
