// Filter 與 Medium 資料保持不變，重點是下方的顏色陣列

export const filterDatabase = {
    pastel: { lighting: "Soft lighting", color: "Pastel colors" },
    luxury: { lighting: "Contrast lighting", color: "Gold and Black" },
    urban: { lighting: "Natural lighting", color: "Realistic" }
};

export const mediumDatabase = {
    photorealistic: [
        { value: "Raw Photo, 8k", label: "真實照片" },
        { value: "Cinematic", label: "電影質感" }
    ],
    anime: [
        { value: "Anime style, key visual", label: "動畫主視覺" },
        { value: "Cel shading", label: "賽璐珞" }
    ],
    "3d_render": [
        { value: "Unreal Engine 5", label: "UE5 渲染" }
    ],
    semi_real: [
        { value: "2.5D, semi-realistic", label: "2.5D 半寫實" }
    ]
};

// ★★★ 這裡恢復完整的顏色列表 ★★★

// 通用馬卡龍色盤 (用於衣服、內衣等)
export const macaronColors = [
    { hex: "#FFFFFF", name: "White (純白)" },
    { hex: "#0C0C0C", name: "Black (純黑)" },
    { hex: "#FF0000", name: "Bright Red (亮紅)" },
    { hex: "#FFD1DC", name: "Sakura Pink (櫻花粉)" },
    { hex: "#FFDAC1", name: "Peach (蜜桃色)" },
    { hex: "#FFFACD", name: "Lemon Chiffon (檸檬黃)" },
    { hex: "#D0F0C0", name: "Apple Green (蘋果綠)" },
    { hex: "#AEC6CF", name: "Sky Blue (天空藍)" },
    { hex: "#E6E6FA", name: "Lavender (薰衣草紫)" },
    { hex: "#F4C2C2", name: "Baby Pink (寶寶粉)" },
    { hex: "#C1E1C1", name: "Mint Green (薄荷綠)" },
    { hex: "#AFEEEE", name: "Pale Turquoise (寶石綠)" },
    { hex: "#F3E5AB", name: "Vanilla (香草色)" },
    { hex: "#FFB7C5", name: "Cherry Blossom (櫻花)" },
    { hex: "#B0E0E6", name: "Powder Blue (粉藍)" },
    { hex: "#D8BFD8", name: "Thistle (薊色)" }
];

// 鞋子專用色盤
export const shoeColors = [
    { hex: "#FFFFFF", name: "White (白)" },
    { hex: "#0C0C0C", name: "Black (黑)" },
    { hex: "#3B2417", name: "Dark Brown Leather (深棕皮)" },
    { hex: "#8D5524", name: "Camel/Tan (駝色)" },
    { hex: "#F5F5DC", name: "Beige (米色)" },
    { hex: "#808080", name: "Grey (灰)" },
    { hex: "#800020", name: "Burgundy (酒紅)" },
    { hex: "#000080", name: "Navy Blue (海軍藍)" },
    { hex: "#FFD700", name: "Gold (金)" },
    { hex: "#C0C0C0", name: "Silver (銀)" },
    { hex: "#FF0000", name: "Red (紅)" }
];

// 絲襪與膚色專用色盤
export const legwearColors = [
    { hex: "#0C0C0C", name: "Black (黑)" },
    { hex: "#FFFFFF", name: "White (白)" },
    { hex: "#F8D9C6", name: "Skin Tone (膚色)" },
    { hex: "#D2B48C", name: "Tan (小麥色)" },
    // 使用 display 屬性來顯示漸層效果，模擬透膚感
    { hex: "#333333", name: "Sheer Black (透膚黑)", display: "linear-gradient(45deg, #333 25%, transparent 25%, transparent 75%, #333 75%, #333)" },
    { hex: "#E0E0E0", name: "Sheer White (透膚白)", display: "linear-gradient(45deg, #eee 25%, transparent 25%, transparent 75%, #eee 75%, #eee)" }
];
