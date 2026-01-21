// ==========================================
//  PART 1: 外裝與套裝 (Outerwear & Sets)
// ==========================================

export const costumeSetDatabase = {
    // ★★★ 新增：日韓甜辣/純欲系列 (Sweet & Sexy) ★★★
    sweet_sexy: [
        { value: "White fluffy off-shoulder sweater, sheer lace lingerie peeking out, blushing, pure lust style (日系純欲毛衣)", label: "日系純欲毛衣 (Pure Lust Sweater)" },
        { value: "Pastel pink crop cardigan, white pleated mini skirt, white knee socks, K-pop high teen style (韓系甜辣高校風)", label: "韓系甜辣高校 (K-High Teen)" },
        { value: "Coquette aesthetic, white lace camisole with pink ribbons, silk mini skirt, soft lighting (法式純欲蕾絲)", label: "純欲蕾絲風 (Coquette Lace)" },
        { value: "Sailor collar crop top, navy blue pleated skirt, garter belt, absolute territory (改良水手服)", label: "改良水手服 (Sexy Sailor)" },
        { value: "Bunny girl costume, white bodysuit, fluffy tail, bunny ears headband, cute and sexy (甜美兔女郎)", label: "甜美兔女郎 (Cute Bunny)" },
        { value: "Denim corset top, low-rise mini skirt, Y2K aesthetic, NewJeans style (Y2K 甜酷辣妹)", label: "Y2K 甜酷辣妹 (Y2K Denim)" },
        { value: "Maid bikini, frilly apron, lace headband, white stockings (女僕比基尼)", label: "女僕比基尼 (Maid Bikini)" },
        { value: "Oversized pastel hoodie, no pants style, thigh high socks,萌袖 (下衣失蹤)", label: "下衣失蹤 (Oversized Hoodie)" }
    ],
    // --- 原有的性感時尚 (保留) ---
    sexy_fashion: [
        { value: "Ribbed knit bodycon mini dress, sleeveless, accentuating curves, K-pop style (韓系緊身包臀裙)", label: "韓系緊身包臀裙 (K-Style Bodycon)" },
        { value: "Keyhole turtleneck sweater, open chest, virgin killer sweater style, sideboob (日系開胸毛衣)", label: "日系開胸毛衣 (Keyhole Sweater)" },
        { value: "Oversized white boyfriend shirt, unbuttoned, no pants, collarbone exposed, messy hair (寬鬆男友襯衫)", label: "寬鬆男友襯衫 (Boyfriend Shirt)" },
        { value: "Sporty lingerie set, Calvin Klein style, denim shorts, unzipped hoodie, healthy sexy (運動內衣混搭)", label: "運動內衣混搭 (Sporty Lingerie)" },
        { value: "High-cut school swimsuit, navy blue, sideboob, glistening skin (日系側開衩死庫水)", label: "側開衩死庫水 (High-cut Swimsuit)" }
    ],
    qipao: [
        { value: "Traditional red silk qipao, golden dragon embroidery, high slit, mandarin collar, sleeveless, red silk high heels (經典紅絲綢旗袍)", label: "經典紅絲綢旗袍 (Classic Red)" },
        { value: "Modified short qipao, white base with blue porcelain floral patterns, keyhole chest design, cap sleeves, white strappy heels (現代短款花旗袍)", label: "現代短款花旗袍 (Modern Floral)" },
        { value: "Elegant black velvet qipao, pearl buttons, gold piping, fitted silhouette, tea length, black velvet pumps (黑色絲絨旗袍)", label: "黑色絲絨旗袍 (Black Velvet)" },
        { value: "White satin qipao with intricate blue floral patterns, traditional cut, side slits, white satin heels (青花瓷旗袍)", label: "青花瓷旗袍 (Blue & White Porcelain)" },
        { value: "Pink lace overlay qipao, modern fusion style, sheer sleeves, romantic and soft aesthetic, nude high heels (蕾絲改良旗袍)", label: "蕾絲改良旗袍 (Lace Fusion)" },
        { value: "Sapphire blue velvet qipao, gold phoenix embroidery, tea length, gold strappy heels (藍絲絨鳳凰旗袍)", label: "藍絲絨鳳凰旗袍 (Blue Velvet Phoenix)" },
        { value: "Modern fusion denim qipao, zipper front, mini length, white canvas sneakers (丹寧改良旗袍)", label: "丹寧改良旗袍 (Denim Fusion)" },
        { value: "Sheer black lace qipao, nude lining, high slit, black stiletto heels (黑色蕾絲透視旗袍)", label: "黑色蕾絲透視旗袍 (Sheer Black Lace)" },
        { value: "Sleeveless halter-neck qipao, red and black floral print, open back, black strappy sandals (掛脖露背旗袍)", label: "掛脖露背旗袍 (Halter Neck)" },
        { value: "High-fashion leather qipao, tight fit, studs details, black knee-high boots (皮質龐克旗袍)", label: "皮質龐克旗袍 (Leather Punk)" }
    ],
    xmas: [
        { value: "Red velvet mini dress with white faux fur trim, black belt, santa hat, festive and cute, black fur-trimmed boots (聖誕女郎洋裝)", label: "聖誕女郎洋裝 (Santa Girl)" },
        { value: "Brown hooded dress with reindeer antlers and ears, white fur cuffs, cute bell choker, brown suede boots (馴鹿造型)", label: "馴鹿造型 (Reindeer)" },
        { value: "Oversized red knit sweater with white snowflake patterns, white pleated skirt, white winter boots (雪花毛衣)", label: "雪花毛衣 (Snowflake Sweater)" },
        { value: "Sexy Santa bikini set, red velvet with white fur, santa hat, white fur leg warmers (聖誕比基尼)", label: "聖誕比基尼 (Santa Bikini)" },
        { value: "Candy cane striped bodysuit, red and white, festive bow, white patent leather boots (糖果手杖連體衣)", label: "糖果手杖連體衣 (Candy Cane Bodysuit)" },
        { value: "Christmas tree costume, tiered green dress with ornaments, star headband, red pumps (聖誕樹造型裙)", label: "聖誕樹造型裙 (Christmas Tree)" }
    ],
    hanfu: [
        { value: "Tang Dynasty style, sheer shawl (pibo), floral embroidered chest-high skirt, flowing wide sleeves, fairy-like, embroidered silk shoes (唐制齊胸襦裙)", label: "唐制齊胸襦裙 (Tang Dynasty)" },
        { value: "Song Dynasty style, long sheer outer coat (beizi), camisole (moziong), pleated skirt, scholarly, flat cloth shoes (宋制褙子)", label: "宋制褙子 (Song Dynasty)" },
        { value: "Ming Dynasty style, woven gold top (ao), mamian skirt (horse-face skirt), dignified and luxurious, platform embroidered shoes (明制襖裙)", label: "明制襖裙 (Ming Dynasty)" },
        { value: "Cross-collar narrow sleeve hanfu, leather wrist guards, waist sash, dynamic martial arts style, black combat boots (武俠女劍客)", label: "武俠女劍客 (Swordswoman)" },
        { value: "All white flowing hanfu, multiple layers of sheer silk, silver hair accessories, ethereal and mystical, white silk shoes (白蛇傳風格)", label: "白蛇傳風格 (White Snake Spirit)" },
        { value: "Dunhuang Flying Apsaras style, ribbons, exposed midriff, bare feet with anklets (敦煌飛天舞衣)", label: "敦煌飛天舞衣 (Dunhuang Apsaras)" }
    ],
    kimono: [
        { value: "Gorgeous long-sleeved furisode kimono with vibrant floral patterns, elaborate obi sash, formal traditional style, traditional zori sandals (振袖和服)", label: "振袖和服 (Formal Furisode)" },
        { value: "Lightweight cotton yukata, indigo blue with morning glory patterns, simple obi, holding a paper fan, wooden geta sandals (夏季浴衣)", label: "夏季浴衣 (Summer Yukata)" },
        { value: "Arrow feather pattern kimono top, maroon hakama pants, classic Taisho Roman retro student style, black leather lace-up boots (大正浪漫袴)", label: "大正浪漫袴 (Hakama Student)" },
        { value: "Modernized short kimono dress, off-shoulder, frilly skirt, obi corset, anime kunoichi style, red high heels (改良短和服)", label: "改良短和服 (Short Kimono Dress)" },
        { value: "Traditional white haori jacket, red hakama pants, sacred and pure atmosphere, traditional zori with red straps (巫女服)", label: "巫女服 (Shrine Maiden Miko)" },
        { value: "Ninja Kunoichi style, short kimono tunic, mesh armor, ninja tabi boots (女忍短和服)", label: "女忍短和服 (Ninja Kunoichi)" },
        { value: "Modern lace kimono, fusion style, pastel colors, ribbon obi, lace gloves, western heels (蕾絲改良和服)", label: "蕾絲改良和服 (Modern Lace Fusion)" }
    ],
    professional: [
        { value: "Fitted flight attendant uniform suit, silk neck scarf, pencil skirt, pillbox hat, professional elegance, black leather pumps (空服員)", label: "空服員 (Flight Attendant)" },
        { value: "Classic white nurse dress, nurse cap, stethoscope, clean and caring look, white nursing shoes (護士服)", label: "護士服 (Nurse Uniform)" },
        { value: "White blouse, black fitted blazer, tight mini skirt, glasses, sharp business look, black high heels (OL套裝)", label: "OL套裝 (Office Lady)" },
        { value: "Classic black and white french maid dress, white apron, lace headband, puffed sleeves, black mary jane shoes (女僕裝)", label: "女僕裝 (Maid Outfit)" },
        { value: "Blue police shirt, badges, tight skirt, utility belt, police hat, authoritative look, black tactical boots (女警)", label: "女警 (Police Officer)" },
        { value: "Doctor outfit, white lab coat, blue scrubs underneath, stethoscope, comfortable sneakers (醫生白袍)", label: "醫生白袍 (Doctor)" },
        { value: "Teacher look, cardigan, pencil skirt, glasses, pointer stick, flat shoes (氣質女教師)", label: "氣質女教師 (Teacher)" },
        { value: "Secretary look, silk blouse, tight mini skirt, high heels (性感秘書)", label: "性感秘書 (Secretary)" },
        { value: "Police tactical gear, bulletproof vest, utility belt, cargo pants, combat boots (特警戰術裝)", label: "特警戰術裝 (SWAT Tactical)" },
        { value: "Waitress uniform, diner style, apron, name tag, comfortable walking shoes (餐廳女服務生)", label: "餐廳女服務生 (Diner Waitress)" },
        { value: "Tennis player outfit, white polo shirt, pleated mini skirt, visor, tennis shoes (網球選手)", label: "網球選手 (Tennis Player)" }
    ]
};

// --- ★★★ 上衣 (Tops) - 增加甜美性感款 ★★★ ---
export const topDatabase = [
    { value: "Tube top (平口小可愛)", label: "平口小可愛 (Tube top)" },
    { value: "Camisole (細肩帶背心)", label: "細肩帶背心 (Camisole)" },
    { value: "Off-shoulder blouse (露肩襯衫)", label: "露肩襯衫 (Off-shoulder)" },
    { value: "Crop top (露肚短上衣)", label: "短版上衣 (Crop top)" },
    { value: "T-shirt (T恤)", label: "T恤 (T-shirt)" },
    { value: "Floral lace camisole (碎花蕾絲小可愛)", label: "碎花蕾絲小可愛 (Floral Lace)" },
    { value: "Candy colored crop T-shirt (糖果色短T恤)", label: "糖果色短T恤 (Candy Crop Tee)" },
    { value: "Ruffled chiffon camisole (荷葉邊雪紡吊帶)", label: "荷葉邊雪紡吊帶 (Ruffled Chiffon)" },
    { value: "Tube top bandeau (平口抹胸小可愛)", label: "平口抹胸小可愛 (Bandeau)" },
    { value: "Backless halter top (露背繞頸背心)", label: "露背繞頸背心 (Halter Top)" },
    { value: "Bikini top (比基尼式上衣)", label: "比基尼式上衣 (Bikini Top)" },
    { value: "Oversized sweater (寬鬆毛衣)", label: "寬鬆毛衣 (Oversized Sweater)" },
    { value: "Tight turtleneck (緊身套頭衫)", label: "緊身套頭衫 (Tight Turtleneck)" },
    { value: "Keyhole sweater (開胸毛衣)", label: "開胸毛衣 (Keyhole Sweater)" },
    { value: "Oversized boyfriend shirt (男友襯衫)", label: "男友襯衫 (Boyfriend Shirt)" },
    // ★ 新增
    { value: "Heart cutout knit top (愛心挖空上衣)", label: "愛心挖空上衣 (Heart Cutout)" },
    { value: "Sheer ribbon blouse (透視緞帶襯衫)", label: "透視緞帶襯衫 (Sheer Ribbon)" },
    { value: "Corset top (馬甲上衣)", label: "馬甲上衣 (Corset Top)" }
];

export const outerDatabase = [
    { value: "None", label: "無 (None)" },
    { value: "Sheer cardigan (薄紗外套)", label: "薄紗外套 (Sheer Cardigan)" },
    { value: "Denim jacket (牛仔外套)", label: "牛仔外套 (Denim Jacket)" },
    { value: "Oversized hoodie (寬鬆帽T)", label: "寬鬆帽T (Hoodie)" },
    { value: "Blazer (西裝外套)", label: "西裝外套 (Blazer)" },
    { value: "Leather jacket (皮夾克)", label: "皮夾克 (Leather Jacket)" },
    { value: "Trench coat (風衣)", label: "風衣 (Trench Coat)" }
];

// --- ★★★ 鞋子 (Shoes) - 增加甜美厚底款 ★★★ ---
export const shoeDatabase = {
    sneakers: [
        { value: "Sneakers (運動鞋)", label: "基本款 (Basic)" },
        { value: "High-top sneakers (高筒運動鞋)", label: "高筒 (High-tops)" },
        { value: "Chunky sneakers (老爹鞋)", label: "老爹鞋 (Chunky)" },
        { value: "Canvas shoes (帆布鞋)", label: "帆布鞋 (Canvas)" },
        { value: "Retro running shoes (復古跑鞋)", label: "復古跑鞋 (Retro)" }, 
        { value: "Slip-on sneakers (懶人鞋)", label: "懶人鞋 (Slip-on)" } 
    ],
    heels: [
        { value: "High heels (高跟鞋)", label: "基本高跟 (Basic Heels)" },
        { value: "Stilettos (細跟高跟鞋)", label: "細跟 (Stilettos)" },
        { value: "Ankle strap heels (踝帶高跟鞋)", label: "踝帶 (Ankle Strap)" },
        { value: "Platform heels (厚底高跟鞋)", label: "厚底 (Platform)" },
        { value: "Clear strap heels (透明跟鞋)", label: "透明跟鞋 (Clear Strap)" }, 
        { value: "Kitten heels (低跟鞋)", label: "低跟鞋 (Kitten Heels)" }, 
        { value: "Lace-up gladiator heels (綁帶羅馬跟鞋)", label: "綁帶羅馬鞋 (Gladiator)" } 
    ],
    barefoot: [
        { value: "Barefoot (赤腳)", label: "赤腳 (Barefoot)" }
    ],
    boots: [
        { value: "Ankle boots (踝靴)", label: "踝靴 (Ankle Boots)" },
        { value: "Knee-high boots (膝下靴)", label: "膝下靴 (Knee-high)" },
        { value: "Thigh-high boots (過膝靴)", label: "過膝靴 (Thigh-high)" },
        { value: "Combat boots (軍靴)", label: "軍靴/馬汀 (Combat)" }, 
        { value: "Platform boots (厚底靴)", label: "厚底靴 (Platform)" }, 
        { value: "Sock boots (襪靴)", label: "貼腿襪靴 (Sock Boots)" } 
    ],
    flats: [
        { value: "Loafers (樂福鞋)", label: "樂福鞋 (Loafers)" },
        { value: "Mary Jane shoes (瑪莉珍鞋)", label: "瑪莉珍 (Mary Jane)" },
        { value: "Sandals (涼鞋)", label: "涼鞋 (Sandals)" },
        { value: "Ballet flats (芭蕾平底鞋)", label: "平底鞋 (Flats)" },
        { value: "Platform loafers (厚底樂福鞋)", label: "厚底樂福 (Platform Loafers)" },
        // ★ 新增
        { value: "Platform Mary Janes (厚底瑪莉珍)", label: "厚底瑪莉珍 (Platform MJ)" } 
    ],
    none: [
        { value: "None", label: "無 (None)" }
    ]
};

// --- ★★★ 下裝 (Bottoms) - 增加甜美短裙 ★★★ ---
export const bottomDatabase = {
    pants: [
        { value: "Denim shorts (牛仔短褲)", label: "牛仔短褲 (Denim Shorts)" },
        { value: "Hot pants (熱褲)", label: "熱褲 (Hot Pants)" },
        { value: "Skinny jeans (緊身牛仔褲)", label: "緊身牛仔褲 (Skinny Jeans)" },
        { value: "Wide-leg pants (寬褲)", label: "寬褲 (Wide-leg Pants)" },
        { value: "Leather pants (皮褲)", label: "皮褲 (Leather Pants)" },
        { value: "Leggings (內搭褲)", label: "內搭褲 (Leggings)" }, 
        { value: "Cargo pants (工裝褲)", label: "工裝褲 (Cargo Pants)" }
    ],
    mini_skirt: [
        { value: "Micro mini skirt (超短迷你裙)", label: "超短迷你裙 (Micro Mini)" },
        { value: "Pleated mini skirt (百褶迷你裙)", label: "百褶迷你裙 (Pleated Mini)" },
        { value: "Denim mini skirt (牛仔迷你裙)", label: "牛仔迷你裙 (Denim Mini)" },
        { value: "Leather mini skirt (皮質迷你裙)", label: "皮質迷你裙 (Leather Mini)" },
        { value: "Ruffled mini skirt (荷葉邊迷你裙)", label: "荷葉邊迷你裙 (Ruffled Mini)" },
        { value: "Denim mini skirt (丹寧短裙)", label: "丹寧短裙 (Denim Mini)" },
        { value: "Lace tiered skirt (蕾絲蛋糕裙)", label: "蕾絲蛋糕裙 (Lace Tiered)" },
        { value: "Black velvet mini skirt (黑色絲絨短裙)", label: "黑色絲絨短裙 (Black Velvet)" },
        { value: "Low-rise denim mini skirt (低腰牛仔裙)", label: "低腰牛仔裙 (Low-rise Y2K)" },
        { value: "Checkered pleated skirt (格紋百褶裙)", label: "格紋百褶裙 (Schoolgirl Check)" },
        { value: "Slit mini skirt (開衩迷你裙)", label: "開衩迷你裙 (Slit Mini)" },
        { value: "Satin slip skirt (緞面短裙)", label: "緞面短裙 (Satin Slip)" },
        { value: "Wrap mini skirt (一片式圍裹裙)", label: "一片式短裙 (Wrap Mini)" },
        { value: "Metallic mini skirt (金屬光澤裙)", label: "金屬光澤裙 (Metallic)" },
        // ★ 新增
        { value: "Skirt with garter straps (吊襪帶短裙)", label: "吊襪帶短裙 (Garter Skirt)" },
        { value: "Heart buckle mini skirt (愛心扣環裙)", label: "愛心扣環裙 (Heart Buckle)" }
    ],
    short_skirt: [
        { value: "A-line skirt (A字裙)", label: "A字裙 (A-line Skirt)" },
        { value: "High-waisted skirt (高腰短裙)", label: "高腰短裙 (High-waisted)" },
        { value: "Tennis skirt (網球裙)", label: "網球裙 (Tennis Skirt)" },
        { value: "Button-front skirt (排扣裙)", label: "排扣裙 (Button-front)" },
        { value: "Cargo skirt (工裝短裙)", label: "工裝短裙 (Cargo Skirt)" },
        { value: "Tweed skirt (粗花呢裙)", label: "小香風短裙 (Tweed)" },
        { value: "Skater skirt (傘裙)", label: "傘裙 (Skater Skirt)" },
        { value: "Asymmetrical hem skirt (不對稱裙)", label: "不對稱裙 (Asymmetrical)" },
        // ★ 新增
        { value: "Ruffled bloomers skirt (花苞南瓜褲)", label: "花苞南瓜褲 (Ruffled Bloomers)" }
    ],
    midi_skirt: [
        { value: "Tight pencil skirt (窄裙)", label: "窄裙 (Pencil Skirt)" },
        { value: "Midi pleated skirt (百褶過膝裙)", label: "百褶過膝裙 (Midi Pleated)" },
        { value: "Office skirt (職場套裝裙)", label: "職場裙 (Office Skirt)" }
    ],
    long_skirt: [
        { value: "Maxi skirt (落地長裙)", label: "落地長裙 (Maxi Skirt)" },
        { value: "High-slit long skirt (高開衩長裙)", label: "高開衩長裙 (High-slit)" },
        { value: "Sheer tulle skirt (透視紗裙)", label: "透視紗裙 (Tulle Skirt)" },
        { value: "Mermaid skirt (魚尾長裙)", label: "魚尾長裙 (Mermaid Skirt)" }
    ]
};
