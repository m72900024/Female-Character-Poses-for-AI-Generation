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
// ★ 加強版提示詞 - 確保視角準確
export const positionDatabase = [
    { value: "front view, facing camera, looking at viewer, perfectly centered composition, mirror symmetry, subject directly facing camera, straight on frontal shot, no angle (正面)", label: "⬆️ 正面-面對鏡頭" },
    { value: "back view, from behind, rear view, showing back, facing away from camera (背面)", label: "⬇️ 背面-背對鏡頭" },
    { value: "side view, profile shot, 90 degree angle, side profile, lateral view (側面)", label: "➡️ 側面-側臉輪廓" },
    { value: "three-quarter view, 45 degree angle, semi-profile, angled view (斜側面)", label: "↗️ 斜側面-45度最美" },
    { value: "over the shoulder shot, looking back, from behind shoulder (過肩)", label: "🔄 過肩-窺視感" },
    { value: "POV shot, first person view, point of view, subjective camera, viewer perspective (第一人稱)", label: "👀 第一人稱-你的視角" },
    { value: "selfie angle, holding camera, arm extended, smartphone perspective, self portrait (自拍)", label: "🤳 自拍-手持相機" }
];

// ====== 垂直角度 Vertical Angle (鏡頭高低) ======
// ★ 提示詞加強版 - 更明確的視角描述
export const verticalAngleDatabase = [
    { value: "eye level shot, camera at eye height, straight on, natural perspective (平視)", label: "➖ 平視-自然視角" },
    { value: "low angle shot, camera below eye level, looking up at subject, legs appear longer, powerful stance, dramatic upward perspective (低角度仰拍)", label: "⬆️ 仰拍-腿長顯高" },
    { value: "slightly low angle, camera slightly below eye level, subtle upward tilt, flattering angle (微仰拍)", label: "↗️ 微仰拍-自然增高" },
    { value: "high angle shot, camera above subject, looking down, face appears smaller, cute and vulnerable, submissive angle (高角度俯拍)", label: "⬇️ 俯拍-顯臉小可愛" },
    { value: "slightly high angle, camera slightly above eye level, gentle downward tilt, slimming effect (微俯拍)", label: "↘️ 微俯拍-自然小臉" },
    { value: "bird's eye view, extreme high angle, camera directly above looking straight down, top-down perspective, aerial view (鳥瞰)", label: "🦅 鳥瞰-正上方往下" },
    { value: "from below, shot from ground, looking up at subject, worm's eye view, camera at feet level shooting upward, view from floor, legs look extremely long, low angle from ground (蟲視角)", label: "🐛 蟲視角-地面仰望超長腿" }
];

// ====== 特殊效果 Special (可選) ======
export const specialAngleDatabase = [
    { value: "", label: "❌ 無特效" },
    { value: "Dutch angle, tilted frame 15-30 degrees, diagonal composition, dynamic tension, unsettling mood (荷蘭式傾斜)", label: "📐 傾斜-不安感張力" },
    { value: "dynamic angle, motion blur effect, action shot, sense of movement, speed lines (動態視角)", label: "💨 動態-速度感模糊" },
    { value: "fish eye lens, extreme wide angle distortion, barrel distortion, exaggerated perspective, 180 degree view (魚眼鏡頭)", label: "🐟 魚眼-誇張變形" },
    { value: "bokeh background, shallow depth of field, blurred background, subject in sharp focus, creamy bokeh balls (背景虛化)", label: "✨ 背景虛化-突出主體" },
    { value: "reflection shot, mirror reflection, water reflection, symmetrical composition, artistic double image (鏡面反射)", label: "🪞 鏡面反射-藝術感" }
];

// ====== 保留舊的 angleDatabase 以維持向後相容 ======
export const angleDatabase = [
    { value: "eye level shot, camera at eye height, straight on, natural perspective (平視)", label: "➖ 平視-自然視角" },
    { value: "low angle shot, camera below eye level, looking up at subject, legs appear longer, powerful stance (低角度仰拍)", label: "⬆️ 仰拍-腿長顯高" },
    { value: "high angle shot, camera above subject, looking down, face appears smaller, cute and vulnerable (高角度俯拍)", label: "⬇️ 俯拍-顯臉小可愛" },
    { value: "bird's eye view, extreme high angle, camera directly above, top-down perspective, aerial view (鳥瞰)", label: "🦅 鳥瞰-正上方往下" },
    { value: "from below, shot from ground, looking up at subject, worm's eye view, camera at feet level shooting upward, view from floor, legs look extremely long, low angle from ground (蟲視角)", label: "🐛 蟲視角-地面仰望超長腿" },
    { value: "Dutch angle, tilted frame 15-30 degrees, diagonal composition, dynamic tension (荷蘭式傾斜)", label: "📐 傾斜-不安感張力" },
    { value: "POV shot, first person view, subjective camera, viewer's perspective, looking at subject (第一人稱)", label: "👀 第一人稱-你的視角" },
    { value: "selfie angle, arm extended holding camera, slightly high angle, close to face, smartphone perspective (自拍視角)", label: "🤳 自拍-手持微俯" },
    { value: "profile view, side angle, silhouette visible, face in profile, 90 degree side shot (側面視角)", label: "➡️ 側面-側臉輪廓" },
    { value: "over the shoulder shot, camera behind subject, looking past shoulder, voyeuristic feel (過肩視角)", label: "🔄 過肩-窺視感" },
    { value: "back view, camera behind subject, rear perspective, showing back of body (背後視角)", label: "⬇️ 背面-背對鏡頭" },
    { value: "dynamic angle, motion blur effect, action shot, sense of movement (動態視角)", label: "💨 動態-速度感模糊" }
];
