// 檔名：src/data/db_camera.js

// ====== 取景 Framing (拍多少身體) ======
export const framingDatabase = [
    { value: "Extreme long shot, wide angle, vast environment (極遠景/大廣角)", label: "極遠景 (Extreme Long)" },
    { value: "Long shot, full body with scenery (遠景)", label: "遠景 (Long Shot)" },
    { value: "Full body shot, head to toe (全身照)", label: "全身照 (Full Body)" },
    { value: "Medium full shot, knees up (膝上七分)", label: "膝上七分 (Knee Up)" },
    { value: "Cowboy shot, thighs up (大腿七分)", label: "大腿七分 (Cowboy Shot)" },
    { value: "Medium shot, waist up (半身腰上)", label: "半身腰上 (Medium Shot)" },
    { value: "Medium close-up, chest up (胸上特寫)", label: "胸上特寫 (Chest Up)" },
    { value: "Close up portrait, focus on face (臉部特寫)", label: "臉部特寫 (Close Up)" },
    { value: "Extreme close up, detailed eyes and lips (局部特寫)", label: "局部特寫 (Extreme CU)" },
    { value: "Macro shot, high detail texture (微距攝影)", label: "微距 (Macro)" }
];

// ====== 鏡頭位置 Position (鏡頭在哪裡) ======
export const positionDatabase = [
    { value: "front view, facing camera (正面)", label: "正面 (Front)" },
    { value: "back view, from behind (背面)", label: "背面 (Back)" },
    { value: "side view, profile (側面)", label: "側面 (Side)" },
    { value: "three-quarter view, 45 degree angle (斜側面)", label: "斜側面 (3/4 View)" },
    { value: "over the shoulder shot (過肩)", label: "過肩 (Over Shoulder)" },
    { value: "POV, first person view (第一人稱)", label: "第一人稱 (POV)" },
    { value: "selfie angle, holding camera (自拍)", label: "自拍 (Selfie)" }
];

// ====== 垂直角度 Vertical Angle (鏡頭高低) ======
export const verticalAngleDatabase = [
    { value: "eye level, straight on (平視)", label: "平視 (Eye Level)" },
    { value: "low angle, looking up, legs look longer (低角度仰拍)", label: "低角度仰拍 (Low Angle)" },
    { value: "slightly low angle, subtle upward (微仰拍)", label: "微仰拍 (Slight Low)" },
    { value: "high angle, looking down, cute and vulnerable (高角度俯拍)", label: "高角度俯拍 (High Angle)" },
    { value: "slightly high angle, subtle downward (微俯拍)", label: "微俯拍 (Slight High)" },
    { value: "bird's eye view, top down, directly above (鳥瞰)", label: "鳥瞰 (Bird's Eye)" },
    { value: "worm's eye view, ground level, looking up (蟲視角)", label: "蟲視角 (Worm's Eye)" }
];

// ====== 特殊效果 Special (可選) ======
export const specialAngleDatabase = [
    { value: "", label: "無 (None)" },
    { value: "Dutch angle, tilted frame, dynamic tension (荷蘭式傾斜)", label: "傾斜 (Dutch Angle)" },
    { value: "dynamic angle, motion blur, action shot (動態視角)", label: "動態 (Dynamic)" },
    { value: "fish eye lens, distorted wide angle (魚眼鏡頭)", label: "魚眼 (Fish Eye)" },
    { value: "bokeh background, shallow depth of field (背景虛化)", label: "背景虛化 (Bokeh)" },
    { value: "reflection shot, mirror or water (鏡面反射)", label: "鏡面反射 (Reflection)" }
];

// ====== 保留舊的 angleDatabase 以維持向後相容 ======
export const angleDatabase = [
    { value: "Eye level shot, straight on (平視)", label: "平視 (Eye Level)" },
    { value: "Low angle shot, looking up, imposing (低角度仰拍)", label: "低角度 (Low Angle)" },
    { value: "High angle shot, looking down, vulnerable (高角度俯拍)", label: "高角度 (High Angle)" },
    { value: "Bird's eye view, top down shot (鳥瞰/上帝視角)", label: "鳥瞰 (Bird's Eye)" },
    { value: "Worm's eye view, ground level shot (蟲視角)", label: "蟲視角 (Worm's Eye)" },
    { value: "Dutch angle, tilted frame, dynamic (荷蘭式傾斜)", label: "傾斜 (Dutch Angle)" },
    { value: "POV, first person view, looking at hands (第一人稱)", label: "第一人稱 (POV)" },
    { value: "Selfie angle, holding camera, slightly high (自拍視角)", label: "自拍 (Selfie)" },
    { value: "Profile view, side face (側面視角)", label: "側面 (Profile)" },
    { value: "Over the shoulder shot (過肩視角)", label: "過肩 (Over Shoulder)" },
    { value: "Back view, from behind (背後視角)", label: "背後 (From Behind)" },
    { value: "Dynamic angle, motion blur (動態視角)", label: "動態 (Dynamic)" }
];
