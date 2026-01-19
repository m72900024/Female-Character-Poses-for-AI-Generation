project_root/
│
├── index.html            (需清理 HTML 中的 onclick)
│
└── src/
    ├── main.js           (核心控制器)
    ├── utils.js          (工具函式)
    │
    ├── data/             (靜態資料庫)
    │   ├── db_character.js
    │   ├── db_outfit.js
    │   ├── db_pose.js
    │   ├── db_stage.js
    │   └── db_meta.js
    │
    └── layers/           (邏輯模組)
        ├── layer1_character.js
        ├── layer2_outfit.js
        ├── layer3_camera.js
        ├── layer4_stage.js
        ├── layer5_filter.js
        └── layer6_render.js

依照此結構
