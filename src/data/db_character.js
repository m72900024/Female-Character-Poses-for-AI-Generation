// ★★★ 結構已改為陣列，直接在此定義分類名稱 ★★★

// === 人種/族裔資料庫 ===
export const ethnicityDatabase = [
    { value: "Asian woman, East Asian features, delicate facial features, fair skin", label: "🇯🇵 東亞人 (East Asian)" },
    { value: "Japanese woman, Japanese facial features, fair porcelain skin, delicate face", label: "🇯🇵 日本人 (Japanese)" },
    { value: "Korean woman, Korean facial features, glass skin, high cheekbones", label: "🇰🇷 韓國人 (Korean)" },
    { value: "Chinese woman, Chinese facial features, elegant appearance", label: "🇨🇳 中國人 (Chinese)" },
    { value: "Taiwanese woman, Taiwanese features, natural beauty, clear skin", label: "🇹🇼 台灣人 (Taiwanese)" },
    { value: "Southeast Asian woman, Southeast Asian features, tan skin, exotic beauty", label: "🌏 東南亞人 (Southeast Asian)" },
    { value: "Caucasian woman, Western features, European appearance", label: "🇺🇸 歐美白人 (Caucasian)" },
    { value: "Latina woman, Latin American features, warm skin tone, passionate beauty", label: "🌎 拉丁美洲人 (Latina)" },
    { value: "Mixed race woman, Eurasian features, exotic mixed beauty", label: "🌍 混血兒 (Mixed/Eurasian)" },
    { value: "Anime style girl, 2D anime features, large eyes, small nose", label: "🎨 動漫風格 (Anime Style)" }
];

export const hairDatabase = [
    {
        id: "ponytail",
        label: "馬尾 (Ponytail)",
        options: [
            { value: "High ponytail with ribbon (緞帶高馬尾)", label: "緞帶高馬尾 (Ribbon High)" },
            { value: "High ponytail with scrunchie (髮圈高馬尾)", label: "髮圈高馬尾 (Scrunchie High)" },
            { value: "Sleek high ponytail (俐落高馬尾)", label: "俐落高馬尾 (Sleek High)" },
            { value: "Fluffy high ponytail (蓬鬆高馬尾)", label: "蓬鬆高馬尾 (Fluffy High)" },
            { value: "Sport high ponytail (運動高馬尾)", label: "運動高馬尾 (Sport High)" },
            { value: "Curly high ponytail (捲髮高馬尾)", label: "捲髮高馬尾 (Curly High)" },
            { value: "Side ponytail (側馬尾)", label: "俏皮側馬尾 (Side Pony)" },
            { value: "Low ponytail (低馬尾)", label: "溫柔低馬尾 (Low Pony)" },
            { value: "Braided ponytail (編織馬尾)", label: "編織馬尾 (Braided Pony)" },
            { value: "Twin tails with ribbon (緞帶雙馬尾)", label: "緞帶雙馬尾 (Twin Tails)" }
        ]
    },
    {
        id: "long",
        label: "長髮 (Long)",
        options: [
            { value: "Long big wavy hair (大波浪長捲髮)", label: "大波浪捲髮 (Big Waves)" },
            { value: "Elegant loose waves (優雅大捲)", label: "優雅大捲 (Elegant Waves)" },
            { value: "Voluminous wavy hair (蓬鬆波浪長髮)", label: "蓬鬆波浪 (Voluminous Waves)" },
            { value: "Long straight hair (長直髮)", label: "長直髮 (Long Straight)" },
            { value: "Hime cut (姬髮式)", label: "姬髮式 (Hime Cut)" },
            { value: "Braided hair (編髮)", label: "氣質編髮 (Braided)" },
            { value: "Loose hair with bangs (長髮瀏海)", label: "長髮齊瀏海 (Bangs)" },
            { value: "Half-up half-down (公主頭)", label: "公主頭 (Half-up)" },
            { value: "Long dark hair with bangs, tied back, sleek professional style (黑長髮瀏海綁髮)", label: "黑長髮瀏海綁髮 (Dark Bangs Tied)" },
            { value: "Long black straight hair with see-through bangs (黑長直髮空氣瀏海)", label: "黑長直髮空氣瀏海 (Black See-through Bangs)" }
        ]
    },
    {
        id: "short",
        label: "短髮 (Short)",
        options: [
            { value: "Shoulder length straight hair (齊肩直髮)", label: "齊肩直髮 (Shoulder Straight)" },
            { value: "Shoulder length bob (齊肩鮑伯)", label: "齊肩鮑伯 (Shoulder Bob)" },
            { value: "Layered shoulder length hair (層次齊肩髮)", label: "層次齊肩 (Layered Shoulder)" },
            { value: "Short bob cut (短髮鮑伯頭)", label: "俐落鮑伯 (Bob Cut)" },
            { value: "Sleek lob haircut (俐落中長髮)", label: "俐落中長髮 (Sleek Lob)" },
            { value: "Wolf cut (狼尾剪)", label: "狼尾剪 (Wolf Cut)" },
            { value: "Pixie cut (精靈短髮)", label: "精靈短髮 (Pixie Cut)" }
        ]
    },
    {
        id: "updo",
        label: "盤髮 (Updo)",
        options: [
            { value: "High bun with ribbon (緞帶丸子頭)", label: "緞帶丸子頭 (Ribbon Bun)" },
            { value: "Messy high bun (隨性丸子頭)", label: "隨性丸子頭 (Messy Bun)" },
            { value: "Elegant chignon (優雅包頭)", label: "優雅包頭 (Chignon)" },
            { value: "Double buns (雙丸子頭)", label: "雙丸子頭 (Double Buns)" },
            { value: "Low bun (低盤髮)", label: "低盤髮 (Low Bun)" },
            { value: "French twist (法式盤髮)", label: "法式盤髮 (French Twist)" }
        ]
    }
];

export const expressionDatabase = [
    {
        label: "喜 (Joy - 開心)",
        options: [
            { value: "Sweet smile, eyes curved, showing teeth (甜美治癒笑)", label: "甜美治癒 (Sweet Smile)" },
            { value: "Laughing out loud, squinting eyes (開懷大笑)", label: "開懷大笑 (Big Laugh)" },
            { value: "Gentle smile, soft eyes (溫柔淺笑)", label: "溫柔淺笑 (Gentle Smile)" },
            { value: "Excited, shining eyes, mouth 'O' shape (驚喜雀躍)", label: "驚喜雀躍 (Excited)" },
            { value: "Confident smile, determined eyes (自信笑容)", label: "自信笑容 (Confident)" },
            { value: "Shy smile, blushing (羞澀微笑)", label: "羞澀微笑 (Shy Smile)" },
            { value: "Blissful expression, closed eyes smile (幸福洋溢)", label: "幸福洋溢 (Blissful)" },
            { value: "Teasing face, sticking tongue out (俏皮吐舌)", label: "俏皮吐舌 (Teasing)" },
            { value: "Energetic smile, wide eyes (元氣滿滿)", label: "元氣滿滿 (Energetic)" }
        ]
    },
    {
        label: "怒 (Anger - 生氣)",
        options: [
            { value: "Cold scorn, looking down, sharp gaze (清冷蔑視)", label: "清冷蔑視 (Cold Scorn)" },
            { value: "Suppressed anger, cold eyes (壓抑憤怒)", label: "壓抑憤怒 (Suppressed)" },
            { value: "Manic expression, dilated pupils, crazy smile (崩潰狂氣)", label: "崩潰狂氣 (Manic)" },
            { value: "Disgusted face, frowning, curled lip (厭惡嫌棄)", label: "厭惡嫌棄 (Disgust)" },
            { value: "Provocative expression, chin up, mocking (高傲挑釁)", label: "高傲挑釁 (Provocative)" },
            { value: "Screaming in anger, mouth wide open (憤怒怒吼)", label: "憤怒怒吼 (Screaming)" },
            { value: "Glaring, fierce eyes (不爽瞪視)", label: "不爽瞪視 (Glaring)" },
            { value: "Pouty face, puffed cheeks (傲嬌嘟嘴)", label: "傲嬌嘟嘴 (Pouty)" },
            { value: "Murderous look, dark aura (陰沉殺氣)", label: "陰沉殺氣 (Murderous)" },
            { value: "Serious expression, focused eyes, looking directly at camera (認真專注)", label: "認真專注 (Serious Focus)" },
            { value: "Stern professional look, neutral expression, confident gaze (嚴肅專業)", label: "嚴肅專業 (Stern Pro)" }
        ]
    },
    {
        label: "哀 (Sorrow - 悲傷)",
        options: [
            { value: "Melancholy, unfocused gaze (憂鬱哀愁)", label: "憂鬱哀愁 (Melancholy)" },
            { value: "Crying, red eyes, tears rolling down (梨花帶雨)", label: "梨花帶雨 (Crying)" },
            { value: "Ethereal blank stare, no focus (空靈呆滯)", label: "空靈呆滯 (Ethereal)" },
            { value: "Despair, wide hollow eyes (絕望無助)", label: "絕望無助 (Despair)" },
            { value: "Grievance, pursed lips, tearing up (委屈巴巴)", label: "委屈巴巴 (Grievance)" },
            { value: "Heartbroken, painful expression (心碎痛苦)", label: "心碎痛苦 (Heartbroken)" },
            { value: "Exhausted, dark circles, dull eyes (疲憊憔悴)", label: "疲憊憔悴 (Exhausted)" },
            { value: "Lonely, looking down (落寞孤單)", label: "落寞孤單 (Lonely)" },
            { value: "Fearful, trembling pupils (恐懼害怕)", label: "恐懼害怕 (Fearful)" }
        ]
    },
    {
        label: "樂 (Pleasure/Seduction - 愉悅)",
        options: [
            { value: "Seductive face, half-closed eyes, moist lips (微醺誘惑)", label: "微醺誘惑 (Seductive)" },
            { value: "Playful wink, one eye closed (俏皮眨眼)", label: "俏皮眨眼 (Wink)" },
            { value: "Drowsy, heavy eyelids (慵懶睏倦)", label: "慵懶睏倦 (Drowsy)" },
            { value: "Enjoying food, closed eyes, licking lips (享受美味)", label: "享受美味 (Yummy)" },
            { value: "Mysterious smile, smirking (神祕微笑)", label: "神祕微笑 (Mysterious)" },
            { value: "Smug face, chin up (得意洋洋)", label: "得意洋洋 (Smug)" },
            { value: "Ecstatic face, blushing, panting (陶醉迷離)", label: "陶醉迷離 (Ecstatic)" },
            { value: "Curious face, wide eyes (好奇探究)", label: "好奇探究 (Curious)" },
            { value: "Prankster smile, mischievous (惡作劇壞笑)", label: "惡作劇壞笑 (Prankster)" }
        ]
    }
];
