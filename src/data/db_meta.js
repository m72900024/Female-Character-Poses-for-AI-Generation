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
