project_root/
│
├── index.html              # [視圖] 網頁入口，負責 UI 佈局 (Tailwind CSS)
│
└── src/
    ├── main.js             # [核心] 主控制器 (負責組合 JSON、管理歷史紀錄、全域事件)
    ├── utils.js            # [工具] 通用函式 (複製到剪貼簿、Toast 通知、選單摺疊動畫)
    │
    ├── data/               # [資料] 靜態資料庫 (純 JSON/Array 格式，易於維護)
    │   ├── db_character.js   # 髮型分類、表情列表
    │   ├── db_outfit.js      # 外裝資料 (套裝, 上衣, 下裝, 外套, 鞋子)
    │   ├── db_innerwear.js   # 內著資料 (內衣, 內褲, 絲襪, 飾品)
    │   ├── db_pose.js        # 動作姿勢, 手部動作
    │   ├── db_camera.js      # 鏡頭取景, 拍攝視角
    │   ├── db_stage.js       # 場景地點, 環境道具
    │   └── db_meta.js        # 色盤定義, 風格濾鏡, 渲染媒材
    │
    └── layers/             # [邏輯] 各層級的業務邏輯 (讀取 DB -> 渲染 UI -> 回傳 Data)
        ├── layer1_character.js # Layer 1: 角色核心 (讀取 db_character)
        ├── layer2_outfit.js    # Layer 2: 服裝穿搭 (整合 db_outfit + db_innerwear)
        ├── layer3_camera.js    # Layer 3: 鏡頭動作 (整合 db_pose + db_camera)
        ├── layer4_stage.js     # Layer 4: 物理環境 (讀取 db_stage)
        ├── layer5_filter.js    # Layer 5: 風格濾鏡 (讀取 db_meta)
        └── layer6_render.js    # Layer 6: 渲染設定 (讀取 db_meta)
