// 檔名：src/data/db_camera.js

// ====== 取景 Framing (拍多少身體) ======
export const framingDatabase = [
    { value: "Extreme long shot, wide angle, vast environment (極遠景/大廣角)", label: "🏔️ 極遠景-帶環境" },
    { value: "Long shot, full body with scenery (遠景)", label: "🌳 遠景-人+背景" },
    { value: "Full body shot, head to toe (全身照)", label: "🧍 全身照-頭到腳" },
    { value: "Medium full shot, knees up (膝上七分)", label: "📐 膝上七分" },
    { value: "Cowboy shot, thighs up (大腿七分)", label: "🤠 大腿七分" },
    { value: "Medium shot, waist up (半身腰上)", label: "👤 半身-腰以上" },
    { value: "Medium close-up, chest up (胸上特寫)", label: "💁 胸上特寫" },
    { value: "Close up portrait, focus on face (臉部特寫)", label: "😊 臉部特寫" },
    { value: "Extreme close up, detailed eyes and lips (局部特寫)", label: "👁️ 局部特寫-眼唇" },
    { value: "Macro shot, high detail texture (微距攝影)", label: "🔬 微距-超細節" }
];

// ====== 鏡頭位置 Position (鏡頭在哪裡) ======
export const positionDatabase = [
    { value: "front view, facing camera (正面)", label: "⬆️ 正面-面對鏡頭" },
    { value: "back view, from behind (背面)", label: "⬇️ 背面-背對鏡頭" },
    { value: "side view, profile (側面)", label: "➡️ 側面-側臉輪廓" },
    { value: "three-quarter view, 45 degree angle (斜側面)", label: "↗️ 斜側面-45度最美" },
    { value: "over the shoulder shot (過肩)", label: "🔄 過肩-窺視感" },
    { value: "POV, first person view (第一人稱)", label: "👀 第一人稱-你的視角" },
    { value: "selfie angle, holding camera (自拍)", label: "🤳 自拍-手持相機" }
];

// ====== 垂直角度 Vertical Angle (鏡頭高低) ======
export const verticalAngleDatabase = [
    { value: "eye level, straight on (平視)", label: "➖ 平視-自然視角" },
    { value: "low angle, looking up, legs look longer (低角度仰拍)", label: "⬆️ 仰拍-腿長顯高" },
    { value: "slightly low angle, subtle upward (微仰拍)", label: "↗️ 微仰拍-自然增高" },
    { value: "high angle, looking down, cute and vulnerable (高角度俯拍)", label: "⬇️ 俯拍-顯臉小可愛" },
    { value: "slightly high angle, subtle downward (微俯拍)", label: "↘️ 微俯拍-自然小臉" },
    { value: "bird's eye view, top down, directly above (鳥瞰)", label: "🦅 鳥瞰-正上方往下" },
    { value: "worm's eye view, ground level, looking up (蟲視角)", label: "🐛 蟲視角-地面仰望超長腿" }
];

// ====== 特殊效果 Special (可選) ======
export const specialAngleDatabase = [
    { value: "", label: "❌ 無特效" },
    { value: "Dutch angle, tilted frame, dynamic tension (荷蘭式傾斜)", label: "📐 傾斜-不安感張力" },
    { value: "dynamic angle, motion blur, action shot (動態視角)", label: "💨 動態-速度感模糊" },
    { value: "fish eye lens, distorted wide angle (魚眼鏡頭)", label: "🐟 魚眼-誇張變形" },
    { value: "bokeh background, shallow depth of field (背景虛化)", label: "✨ 背景虛化-突出主體" },
    { value: "reflection shot, mirror or water (鏡面反射)", label: "🪞 鏡面反射-藝術感" }
];

// ====== 保留舊的 angleDatabase 以維持向後相容 ======
export const angleDatabase = [
    { value: "Eye level shot, straight on (平視)", label: "➖ 平視-自然視角" },
    { value: "Low angle shot, looking up, imposing (低角度仰拍)", label: "⬆️ 仰拍-腿長顯高" },
    { value: "High angle shot, looking down, vulnerable (高角度俯拍)", label: "⬇️ 俯拍-顯臉小可愛" },
    { value: "Bird's eye view, top down shot (鳥瞰/上帝視角)", label: "🦅 鳥瞰-正上方往下" },
    { value: "Worm's eye view, ground level shot (蟲視角)", label: "🐛 蟲視角-地面仰望超長腿" },
    { value: "Dutch angle, tilted frame, dynamic (荷蘭式傾斜)", label: "📐 傾斜-不安感張力" },
    { value: "POV, first person view, looking at hands (第一人稱)", label: "👀 第一人稱-你的視角" },
    { value: "Selfie angle, holding camera, slightly high (自拍視角)", label: "🤳 自拍-手持微俯" },
    { value: "Profile view, side face (側面視角)", label: "➡️ 側面-側臉輪廓" },
    { value: "Over the shoulder shot (過肩視角)", label: "🔄 過肩-窺視感" },
    { value: "Back view, from behind (背後視角)", label: "⬇️ 背面-背對鏡頭" },
    { value: "Dynamic angle, motion blur (動態視角)", label: "💨 動態-速度感模糊" }
];
