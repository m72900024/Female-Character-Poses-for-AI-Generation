// --- 色盤定義 (Colors) ---
export const macaronColors = [
    { hex: "#FFFFFF", name: "White (白)" },        
    { hex: "#0C0C0C", name: "Black (黑)" }, 
    { hex: "#FF0000", name: "Bright Red (紅)" },        
    { hex: "#FFD1DC", name: "Sakura (櫻花粉)" },        
    { hex: "#FFDAC1", name: "Peach (蜜桃)" },        
    { hex: "#FFFACD", name: "Lemon (檸檬黃)" },        
    { hex: "#D0F0C0", name: "Apple Green (蘋果綠)" }, 
    { hex: "#AEC6CF", name: "Sky (天空藍)" },           
    { hex: "#E6E6FA", name: "Lavender (薰衣草)"},       
    { hex: "#F4C2C2", name: "Rose (玫瑰)" },          
    { hex: "#C1E1C1", name: "Mint (薄荷)" },          
    { hex: "#AFEEEE", name: "Aqua (水藍)" },          
    { hex: "#F3E5AB", name: "Vanilla (香草)" }        
];

export const shoeColors = [
    { hex: "#FFFFFF", name: "White (白)" },
    { hex: "#0C0C0C", name: "Black (黑)" },
    { hex: "#3B2417", name: "Dark Brown (深棕)" },
    { hex: "#8D5524", name: "Camel (駝色)" },
    { hex: "#F5F5DC", name: "Beige (米色)" },
    { hex: "#808080", name: "Grey (灰)" },
    { hex: "#800020", name: "Burgundy (酒紅)" },
    { hex: "#000080", name: "Navy (海軍藍)" },
    { hex: "#FFD700", name: "Gold (金)" },
    { hex: "#C0C0C0", name: "Silver (銀)" }
];

export const legwearColors = [
    { hex: "#FFFFFF", name: "White (白)" },
    { hex: "#0C0C0C", name: "Black (黑)" },
    { hex: "#F8D9C6", name: "Skin (膚色)" },
    { hex: "#E0E0E0", name: "Sheer (透膚)", display: "linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee)" } 
];

// --- ★★★ 風格濾鏡資料庫 (Filter Presets) ★★★ ---
export const filterDatabase = {
    // === 🇯🇵 日系風格 Japanese Styles ===
    pastel: {
        label: "🌸 日系夢幻",
        value: "pastel",
        lighting: "Soft high-key lighting, diffuse studio lighting, no harsh shadows, bright and airy",
        color_palette: ["Pastel Pink", "Cream White", "Beige", "Light Brown"],
        aesthetic: "J-pop idol style, youthful, innocent, dreamy, soft focus, kawaii"
    },
    pure_desire: {
        label: "💫 純欲風",
        value: "pure_desire",
        lighting: "Soft natural window light, gentle highlights, ethereal glow, slight overexposure",
        color_palette: ["White", "Cream", "Pale Pink", "Soft Lavender"],
        aesthetic: "Japanese pure desire style, innocent yet alluring, soft skin texture, dreamy atmosphere"
    },
    // === 🇰🇷 韓系風格 Korean Styles ===
    korean_fresh: {
        label: "🇰🇷 韓系清新",
        value: "korean_fresh",
        lighting: "Bright even lighting, minimal shadows, clean and polished, studio quality",
        color_palette: ["Milk Tea Beige", "Soft White", "Light Grey", "Muted Pastels"],
        aesthetic: "Korean beauty style, glass skin, clean makeup, Instagram aesthetic, milky tone"
    },
    korean_moody: {
        label: "☕ 韓系情緒",
        value: "korean_moody",
        lighting: "Soft side lighting, gentle shadows, warm undertones, intimate atmosphere",
        color_palette: ["Warm Beige", "Soft Brown", "Muted Orange", "Cream"],
        aesthetic: "Korean drama style, emotional, cinematic, warm and cozy, cafe mood"
    },
    // === 💎 質感風格 Premium Styles ===
    luxury: {
        label: "💎 高級質感",
        value: "luxury",
        lighting: "Soft artificial indoor lighting, well-lit subject, slight chiaroscuro",
        color_palette: ["Pure White", "Dark Wood Brown", "Jet Black", "Fair Skin Tone"],
        aesthetic: "Gravure idol style, polished, high-fashion cosplay, glossy texture"
    },
    cinematic: {
        label: "🎬 電影感",
        value: "cinematic",
        lighting: "Dramatic lighting, film grain, color graded, anamorphic lens flare",
        color_palette: ["Teal", "Orange", "Deep Shadows", "Warm Highlights"],
        aesthetic: "Movie still quality, cinematic color grading, shallow depth of field, professional"
    },
    // === ☀️ 時段光線 Time-based Lighting ===
    golden_hour: {
        label: "🌅 黃金時刻",
        value: "golden_hour",
        lighting: "Golden hour sunlight, warm orange glow, long shadows, backlit silhouette",
        color_palette: ["Golden Yellow", "Warm Orange", "Soft Pink", "Deep Amber"],
        aesthetic: "Magic hour photography, romantic sunset, warm skin tones, dreamy lens flare"
    },
    blue_hour: {
        label: "🌙 藍調時刻",
        value: "blue_hour",
        lighting: "Cool blue twilight, soft ambient light, city lights beginning, moody atmosphere",
        color_palette: ["Deep Blue", "Purple Haze", "Cool Grey", "Soft Cyan"],
        aesthetic: "Twilight mood, melancholic beauty, cool tones, urban evening"
    },
    // === 🏙️ 都市風格 Urban Styles ===
    urban: {
        label: "📷 自然街拍",
        value: "urban",
        lighting: "Soft diffuse daylight, even illumination, low contrast, no harsh shadows",
        color_palette: ["Black", "Grey", "Beige"],
        aesthetic: "Japanese street fashion, Ryousangata style, feminine, realistic photography"
    },
    neon_cyberpunk: {
        label: "🌃 霓虹夜景",
        value: "neon_cyberpunk",
        lighting: "Neon lights, pink and blue glow, reflections on wet streets, high contrast",
        color_palette: ["Hot Pink", "Electric Blue", "Purple", "Black"],
        aesthetic: "Cyberpunk aesthetic, rain reflections, city nightlife, futuristic mood"
    },
    // === 📼 復古風格 Vintage Styles ===
    film_analog: {
        label: "📼 底片復古",
        value: "film_analog",
        lighting: "Natural light, slight underexposure, film grain texture, warm color cast",
        color_palette: ["Faded Warm Tones", "Vintage Green", "Soft Yellow", "Muted Colors"],
        aesthetic: "Analog film photography, nostalgic, 35mm grain, Kodak Portra style"
    },
    polaroid: {
        label: "📸 拍立得",
        value: "polaroid",
        lighting: "Flash photography, slight overexposure, instant film colors, casual snapshot",
        color_palette: ["Faded White", "Warm Yellow", "Soft Blue", "Vintage Pink"],
        aesthetic: "Polaroid instant photo, white border, casual candid, retro charm"
    },
    // === 🎨 藝術風格 Artistic Styles ===
    noir: {
        label: "🖤 黑白經典",
        value: "noir",
        lighting: "High contrast black and white, dramatic shadows, film noir style",
        color_palette: ["Pure Black", "Pure White", "Silver Grey"],
        aesthetic: "Monochrome elegance, timeless classic, dramatic contrast, artistic photography"
    },
    soft_glamour: {
        label: "✨ 柔焦魅力",
        value: "soft_glamour",
        lighting: "Soft diffused lighting, slight glow effect, flattering skin, minimal shadows",
        color_palette: ["Soft Pink", "Champagne", "Pearl White", "Blush"],
        aesthetic: "Beauty photography, soft focus, glamorous, magazine editorial, flawless skin"
    },
    // === 🔥 特殊氛圍 Special Moods ===
    sexy_boudoir: {
        label: "🔥 性感暗調",
        value: "sexy_boudoir",
        lighting: "Low key lighting, warm shadows, intimate mood, single light source",
        color_palette: ["Deep Red", "Black", "Gold", "Warm Skin"],
        aesthetic: "Boudoir photography, sensual, mysterious, intimate atmosphere, elegant"
    },
    dreamy_bokeh: {
        label: "💭 夢幻虛化",
        value: "dreamy_bokeh",
        lighting: "Backlit with bokeh, fairy lights, soft glow, ethereal atmosphere",
        color_palette: ["Soft Gold", "Warm White", "Pastel Colors", "Light Leaks"],
        aesthetic: "Dreamy photography, beautiful bokeh, light leaks, magical atmosphere"
    }
};

// --- 渲染媒材 (Medium) ---
export const mediumDatabase = {
    photorealistic: [
        { value: "Raw Photo, DSLR, 8k, Hyperrealistic, Realistic skin texture, Soft focus, High quality", label: "真實照片 (Raw Photo)" },
        { value: "Cinematic movie still, Film grain, Movie scene, 8k, Detailed, Color graded", label: "電影質感 (Cinematic)" },
        { value: "Analog film, Polaroid style, vintage filter, grainy, nostalgic", label: "底片膠捲 (Analog Film)" }
    ],
    anime: [
        { value: "Anime style, official art, key visual, high quality, highly detailed", label: "動畫主視覺 (Key Visual)" },
        { value: "Japanese manga style, monochrome, screen tones, ink lines, high contrast", label: "日本漫畫 (Manga B&W)" },
        { value: "Cel shading, vibrant colors, flat coloring, anime screencap style", label: "賽璐珞上色 (Cel Shading)" }
    ],
    "3d_render": [
        { value: "3D Render, Unreal Engine 5, Ray tracing, 8k, Global Illumination", label: "UE5 渲染 (Unreal Engine)" },
        { value: "Octane render, CGSociety, highly detailed, photorealistic 3d, volumetric lighting", label: "Octane 渲染 (Octane)" },
        { value: "Blind box style, clay texture, cute 3d, soft lighting, chibi", label: "盲盒公仔 (Blind Box)" }
    ],
    semi_real: [
        { value: "Semi-realistic, 2.5D, digital painting, smooth lighting, detailed eyes", label: "2.5D 半寫實 (2.5D)" },
        { value: "Game CG, high detail, splash art style, intricate clothes, dynamic lighting", label: "遊戲 CG (Game Art)" },
        { value: "Semi-realistic cel shading, sharp shadows, anime anatomy with realistic textures", label: "半寫實賽璐珞 (Semi-Cel)" }
    ]
};
