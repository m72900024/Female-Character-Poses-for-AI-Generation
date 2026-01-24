// ==========================================
//  PART 1: 外裝與套裝 (Outerwear & Sets)
// ==========================================

export const costumeSetDatabase = {
    // === 日常休閒 (Casual) ===
    casual: [
        // 居家慵懶風
        { value: "Oversized white boyfriend shirt, unbuttoned, white lace panties visible, bare legs, messy hair, barefoot indoors (寬鬆男友襯衫)", label: "寬鬆男友襯衫 (Boyfriend Shirt)" },
        { value: "Oversized pastel pink hoodie, no pants style, white thigh high socks, cute long sleeves covering hands, bare legs (下衣失蹤風)", label: "下衣失蹤風 (Oversized Hoodie)" },
        { value: "Grey cropped sweatshirt, matching grey sweatpants, messy bun, white fuzzy slippers, loungewear vibes (灰色運動套裝)", label: "灰色運動套裝 (Lounge Set)" },
        { value: "White oversized band tee, black bike shorts, hair clip, barefoot at home (寬鬆樂團T)", label: "寬鬆樂團T (Band Tee)" },
        { value: "Soft pink satin pajama set, button-up top, matching shorts, barefoot (粉色緞面睡衣)", label: "粉色緞面睡衣 (Satin PJs)" },
        // T恤短褲風
        { value: "Simple white T-shirt, blue denim shorts, casual and fresh look, white canvas sneakers (休閒T恤短褲)", label: "休閒T恤短褲 (Casual Tee)" },
        { value: "Vintage graphic tee, high-waisted denim shorts, white sneakers, casual cool (復古印花T恤)", label: "復古印花T恤 (Vintage Tee)" },
        { value: "Cropped white tank top, high-waisted black shorts, white chunky sneakers, sporty casual (白色背心短褲)", label: "白色背心短褲 (Tank & Shorts)" },
        { value: "Pastel tie-dye oversized tee, denim cutoff shorts, white platform sneakers (紮染寬T)", label: "紮染寬T (Tie-dye Tee)" },
        // 針織搭配風
        { value: "Beige knit cardigan, white camisole underneath, high-waisted blue jeans, cozy style, white sneakers (針織外套搭配)", label: "針織外套搭配 (Cozy Cardigan)" },
        { value: "Cream cable knit sweater, light wash mom jeans, white sneakers, cozy autumn (麻花針織毛衣)", label: "麻花針織毛衣 (Cable Knit)" },
        { value: "Sage green knit vest over white tee, khaki wide-leg pants, beige loafers (針織背心疊穿)", label: "針織背心疊穿 (Knit Vest Layer)" },
        // 裙裝休閒
        { value: "Blue and white striped long sleeve shirt, denim mini skirt, preppy casual style, white canvas shoes (條紋襯衫牛仔裙)", label: "條紋襯衫牛仔裙 (Preppy Casual)" },
        { value: "Floral print sundress, spaghetti straps, flowy A-line skirt, light and airy, brown leather sandals (碎花洋裝)", label: "碎花洋裝 (Floral Sundress)" },
        { value: "White cotton blouse, flowy midi skirt, straw tote bag, tan sandals, breezy summer (白襯衫中長裙)", label: "白襯衫中長裙 (Blouse & Midi)" },
        { value: "Denim jacket, white basic tee, pleated midi skirt, white sneakers (牛仔外套百褶裙)", label: "牛仔外套百褶裙 (Denim & Pleats)" },
        { value: "Striped crop top, high-waisted linen shorts, straw hat, espadrilles, vacation casual (條紋短版上衣)", label: "條紋短版上衣 (Striped Crop)" },
        // 運動休閒風
        { value: "White sports bra visible under loose tank, black leggings, white sneakers, gym to street (運動風疊穿)", label: "運動風疊穿 (Athleisure Layer)" },
        { value: "Pastel blue zip-up hoodie, matching joggers, white sneakers, sporty cute (粉藍運動套裝)", label: "粉藍運動套裝 (Sporty Set)" },
        { value: "Black cropped hoodie, grey yoga pants, white running shoes, casual athletic (短版帽T瑜伽褲)", label: "短版帽T瑜伽褲 (Crop Hoodie Yoga)" }
    ],

    // === 網美風格 (Influencer Style) ===
    influencer: [
        // 咖啡廳打卡風
        { value: "Cream colored knit crop top, high-waisted beige wide-leg pants, gold hoop earrings, beige tote bag, nude strappy heels, minimalist chic (奶茶色系穿搭)", label: "奶茶色系穿搭 (Milk Tea Tone)" },
        { value: "White off-shoulder ruffle top, light blue high-waisted jeans, straw hat, brown leather sandals, fresh and airy (清新露肩風)", label: "清新露肩風 (Fresh Off-shoulder)" },
        { value: "Pastel lavender matching set, cropped blazer, high-waisted shorts, white sneakers, soft girl aesthetic (薰衣草套裝)", label: "薰衣草套裝 (Lavender Set)" },
        // 街拍時尚風
        { value: "Oversized white blazer, black bralette underneath, black cycling shorts, chunky white sneakers, boss girl style (白西裝混搭)", label: "白西裝混搭 (White Blazer Mix)" },
        { value: "Cropped denim jacket, white tube top, high-waisted mom jeans, white chunky sneakers, effortless cool (牛仔外套街拍)", label: "牛仔外套街拍 (Denim Street)" },
        { value: "Black leather jacket, white graphic tee, plaid mini skirt, black combat boots, edgy instagram style (皮衣酷女孩)", label: "皮衣酷女孩 (Leather Edgy)" },
        // 度假風網美
        { value: "White linen wrap dress, V-neckline, tie waist, straw bag, tan leather sandals, resort style (白色亞麻裹身裙)", label: "白色亞麻裹身裙 (Linen Wrap)" },
        { value: "Bohemian floral maxi dress, off-shoulder, tiered ruffles, gold jewelry, brown gladiator sandals (波希米亞長裙)", label: "波希米亞長裙 (Boho Maxi)" },
        { value: "Tropical print two-piece set, bandeau top, flowy palazzo pants, gold anklet, white platform sandals (熱帶印花套裝)", label: "熱帶印花套裝 (Tropical Set)" },
        // 韓系網美
        { value: "Oversized striped shirt dress, belt cinched waist, white sneakers, minimal makeup, Korean minimalist (韓系襯衫裙)", label: "韓系襯衫裙 (K-Shirt Dress)" },
        { value: "Light pink slip dress, white cardigan draped over shoulders, pearl necklace, nude heels, soft feminine (粉色細肩帶裙)", label: "粉色細肩帶裙 (Pink Slip Dress)" },
        { value: "White cropped cardigan, matching pleated midi skirt, pearl earrings, white mary janes, elegant lady (白色針織套裝)", label: "白色針織套裝 (White Knit Set)" },
        // 運動休閒網美
        { value: "Matching sage green sports bra and high-waisted leggings, white sneakers, high ponytail, athleisure chic (莫蘭迪綠運動套)", label: "莫蘭迪綠運動套 (Sage Athleisure)" },
        { value: "Cropped white hoodie, grey bike shorts, chunky sneakers, messy bun, casual sporty (短版帽T單車褲)", label: "短版帽T單車褲 (Crop Hoodie Look)" },
        // 約會穿搭
        { value: "Soft pink satin midi dress, cowl neckline, thin straps, nude heels, romantic date night (粉緞面約會裙)", label: "粉緞面約會裙 (Satin Date Dress)" },
        { value: "Black off-shoulder bodycon dress, gold chain necklace, black strappy heels, sultry evening look (黑色一字領洋裝)", label: "黑色一字領洋裝 (Black Off-shoulder)" }
    ],

    // === 甜美可愛 (Sweet & Cute) ===
    sweet_cute: [
        // 經典甜美
        { value: "White fluffy off-shoulder sweater, sheer white lace bralette peeking out, pink pleated mini skirt, white knee socks, pink ballet flats (日系純欲毛衣)", label: "日系純欲毛衣 (Pure Lust Sweater)" },
        { value: "Pastel pink crop cardigan with pearl buttons, white pleated mini skirt, white knee high socks, pink platform mary janes (韓系甜辣高校風)", label: "韓系甜辣高校 (K-High Teen)" },
        { value: "White lace camisole with pink satin ribbons, pink silk mini skirt, sheer white stockings, pink strappy heels (純欲蕾絲風)", label: "純欲蕾絲風 (Coquette Lace)" },
        { value: "Denim corset top with front lacing, low-rise denim mini skirt, chunky platform sneakers, Y2K aesthetic (Y2K 甜酷辣妹)", label: "Y2K 甜酷辣妹 (Y2K Denim)" },
        { value: "Pink gingham check dress, puff sleeves, sweetheart neckline, A-line skirt, white ankle socks, pink mary jane shoes (粉色格紋洋裝)", label: "粉色格紋洋裝 (Gingham Dress)" },
        { value: "Black and white Lolita dress, lace trim, layered petticoat, bow headband, white knee socks, black platform mary janes (蘿莉塔洋裝)", label: "蘿莉塔洋裝 (Lolita Dress)" },
        // 迷你裙穿搭
        { value: "White lace crop top, pink tulle mini skirt, ribbon hair accessories, white ankle socks, pink ballet flats (粉色紗裙甜心)", label: "粉色紗裙甜心 (Tulle Mini)" },
        { value: "Pastel blue knit vest over white blouse, navy pleated mini skirt, white knee socks, brown loafers (學院風針織)", label: "學院風針織 (Preppy Knit)" },
        { value: "Pink ribbon bow top, white ruffled mini skirt, pearl accessories, white mary janes (緞帶蝴蝶結風)", label: "緞帶蝴蝶結風 (Ribbon Bow)" },
        { value: "Cream puff sleeve blouse, strawberry print mini skirt, white ankle socks, red mary janes (草莓印花裙)", label: "草莓印花裙 (Strawberry Print)" },
        { value: "White eyelet lace top, lavender tiered mini skirt, flower hair clip, white platform sandals (薰衣草蛋糕裙)", label: "薰衣草蛋糕裙 (Lavender Tiered)" },
        { value: "Baby pink cropped sweater, white tennis mini skirt, hair ribbons, white sneakers (粉嫩運動甜心)", label: "粉嫩運動甜心 (Sporty Sweet)" },
        { value: "Off-shoulder ruffle top, cherry print A-line mini skirt, red headband, white flats (櫻桃甜美風)", label: "櫻桃甜美風 (Cherry Sweet)" },
        // 短裙穿搭
        { value: "Peter pan collar blouse, plaid suspender skirt, white knee socks, black mary janes (格紋吊帶裙)", label: "格紋吊帶裙 (Plaid Suspender)" },
        { value: "Pastel yellow cardigan, white camisole, floral short skirt, straw hat, white sandals (小雛菊短裙)", label: "小雛菊短裙 (Daisy Skirt)" },
        { value: "Heart cutout pink top, denim short skirt with lace hem, heart shaped bag, pink sneakers (愛心甜妹風)", label: "愛心甜妹風 (Heart Cutout)" },
        { value: "Sailor collar top with bow, navy pleated short skirt, white thigh highs, brown loafers (水手領甜美)", label: "水手領甜美 (Sailor Sweet)" },
        { value: "Crochet crop top, high-waisted gingham short skirt, daisy earrings, white platform sandals (鉤針田園風)", label: "鉤針田園風 (Crochet Cottage)" },
        { value: "Puff sleeve smocked top, tiered ruffle short skirt, pearl necklace, white ballet flats (公主風荷葉裙)", label: "公主風荷葉裙 (Princess Ruffle)" }
    ],

    // === 性感時尚 (Sexy Fashion) ===
    sexy_fashion: [
        { value: "Black ribbed knit bodycon mini dress, sleeveless, tight fit accentuating curves, black stiletto heels (韓系緊身包臀裙)", label: "韓系緊身包臀裙 (K-Style Bodycon)" },
        { value: "Beige keyhole turtleneck sweater, open chest cutout, tight fit, black leather mini skirt, black ankle boots (日系開胸毛衣)", label: "日系開胸毛衣 (Keyhole Sweater)" },
        { value: "White sports bra, grey unzipped hoodie, blue denim shorts, white sneakers, healthy sexy athletic style (運動內衣混搭)", label: "運動內衣混搭 (Sporty Lingerie)" },
        { value: "Black backless halter dress, deep V neckline, high slit skirt, elegant sexy, black strappy heels (露背深V洋裝)", label: "露背深V洋裝 (Backless Halter)" },
        { value: "Black leather mini skirt, black lace crop top, edgy sexy style, black ankle boots with buckles (皮裙蕾絲上衣)", label: "皮裙蕾絲上衣 (Edgy Leather)" },
        { value: "Black sheer mesh top, black bralette visible underneath, high-waisted black pants, black stiletto heels, club style (透視網紗上衣)", label: "透視網紗上衣 (Sheer Mesh)" }
    ],

    // === 泳裝比基尼 (Swimwear) ===
    swimwear: [
        { value: "Classic triangle bikini, white color, halter neck top, tie-side bottom, beach style, barefoot (經典三角比基尼)", label: "經典三角比基尼 (Triangle Bikini)" },
        { value: "Navy blue high-cut one-piece school swimsuit, name tag on chest, high leg cut, glistening wet skin, barefoot (日系競泳水著)", label: "日系競泳水著 (School Swimsuit)" },
        { value: "Black one-piece swimsuit, high leg cut, plunging V neckline, sleek design, barefoot by pool (連身高衩泳衣)", label: "連身高衩泳衣 (One-piece)" },
        { value: "Pink bandeau bikini top, matching brazilian cut bottom, strapless, trendy style, barefoot on beach (平口比基尼)", label: "平口比基尼 (Bandeau Bikini)" },
        { value: "Red micro bikini, thin string ties, triangle top, minimal coverage bottom, barefoot (極小比基尼)", label: "極小比基尼 (Micro Bikini)" },
        { value: "Black sporty bikini, racerback top with zipper, boy shorts bottom, athletic look, barefoot (運動比基尼)", label: "運動比基尼 (Sporty Bikini)" },
        { value: "Pastel pink ruffle bikini, feminine ruffled edges on top and bottom, cute and flirty, barefoot (荷葉邊比基尼)", label: "荷葉邊比基尼 (Ruffle Bikini)" }
    ],

    // === 學生制服 (School Uniform) ===
    uniform: [
        { value: "Japanese sailor uniform, white short-sleeve top with navy collar, navy pleated skirt, red ribbon bow, white socks, brown loafers (日系水手服)", label: "日系水手服 (Sailor Uniform)" },
        { value: "Sexy sailor crop top with navy collar, navy blue pleated mini skirt, black garter belt with stockings, black heels, absolute territory (改良水手服)", label: "改良水手服 (Sexy Sailor)" },
        { value: "Korean school uniform, navy blazer, white shirt, plaid pleated skirt, navy knee socks, black loafers (韓系校服)", label: "韓系校服 (Korean Uniform)" },
        { value: "British school uniform, grey plaid skirt, white button-up shirt, striped tie, navy blazer, white knee socks, black oxford shoes (英倫校服)", label: "英倫校服 (British Uniform)" },
        { value: "Summer school uniform, white short sleeve blouse, navy pleated short skirt, white ankle socks, white sneakers (夏季制服)", label: "夏季制服 (Summer Uniform)" },
        { value: "Japanese gym uniform, white T-shirt with name tag, navy bloomers, white crew socks, white indoor shoes (體育服)", label: "體育服 (Gym Uniform)" }
    ],

    // === 職業裝 (Professional) ===
    professional: [
        { value: "White blouse, black fitted blazer, tight black mini skirt, glasses, sharp business look, sheer black stockings, black high heels (OL套裝)", label: "OL套裝 (Office Lady)" },
        { value: "Fitted navy flight attendant uniform, silk neck scarf, pencil skirt, pillbox hat, professional elegance, sheer nude stockings, black leather pumps (空服員)", label: "空服員 (Flight Attendant)" },
        { value: "Classic white nurse dress, nurse cap, stethoscope, clean and caring look, white stockings, white nursing shoes (護士服)", label: "護士服 (Nurse Uniform)" },
        { value: "Light blue police shirt with badges, navy tight skirt, black utility belt, police hat, authoritative look, black sheer stockings, black tactical boots (女警)", label: "女警 (Police Officer)" },
        { value: "White lab coat over light blue scrubs, stethoscope around neck, professional doctor look, comfortable white sneakers (醫生白袍)", label: "醫生白袍 (Doctor)" },
        { value: "Beige cardigan, white blouse, grey pencil skirt, glasses, holding pointer stick, nude stockings, black flat shoes (氣質女教師)", label: "氣質女教師 (Teacher)" },
        { value: "White silk blouse, black tight mini skirt, reading glasses, professional yet sexy, sheer black stockings, black high heels (性感秘書)", label: "性感秘書 (Secretary)" },
        { value: "Pink diner waitress uniform dress, white apron, name tag, retro style, white ankle socks, white sneakers (餐廳女服務生)", label: "餐廳女服務生 (Diner Waitress)" },
        { value: "Black tactical vest, navy blue police uniform, utility belt with equipment, cargo pants, black combat boots (特警戰術裝)", label: "特警戰術裝 (SWAT Tactical)" }
    ],

    // === 角色扮演 (Cosplay) ===
    cosplay: [
        { value: "Classic black and white french maid dress, white lace apron, lace headband, puffed short sleeves, white stockings, black mary jane shoes (女僕裝)", label: "女僕裝 (Maid Outfit)" },
        { value: "Black strapless bunny girl bodysuit, white fluffy cottontail, black bunny ears headband, white collar with bow tie, black fishnet stockings, black high heels (兔女郎)", label: "兔女郎 (Bunny Girl)" },
        { value: "Black fitted bodysuit, cat ear headband, long cat tail, paw print gloves, collar with golden bell, black thigh high stockings, black heels (貓女裝)", label: "貓女裝 (Cat Girl)" },
        { value: "Red and white cheerleader crop top, matching pleated mini skirt, holding pom poms, white ankle socks, white sneakers (啦啦隊服)", label: "啦啦隊服 (Cheerleader)" },
        { value: "Black bikini with white frilly maid apron, lace headband, white thigh high stockings with lace trim, black heels (女僕比基尼)", label: "女僕比基尼 (Maid Bikini)" },
        { value: "Purple succubus costume, black demon wings, pointed tail, revealing black bodysuit, thigh high boots, seductive pose (魅魔裝)", label: "魅魔裝 (Succubus)" },
        { value: "Black witch dress, pointed witch hat, purple cape, holding magic wand, black and purple striped stockings, black boots (魔女裝)", label: "魔女裝 (Witch)" }
    ],

    // === 運動服飾 (Sportswear) ===
    sportswear: [
        { value: "White polo shirt, white pleated tennis mini skirt, white visor cap, white ankle socks, white tennis shoes (網球選手)", label: "網球選手 (Tennis Player)" },
        { value: "Grey sports bra, high-waisted black leggings, athletic fit, hair in ponytail, barefoot on yoga mat (瑜伽服)", label: "瑜伽服 (Yoga Outfit)" },
        { value: "Pink tank top, black running shorts, armband phone holder, white running socks, pink running shoes (跑步服)", label: "跑步服 (Running Outfit)" },
        { value: "Pink polo shirt, white pleated golf skirt, white visor, white ankle socks, white golf shoes (高爾夫服)", label: "高爾夫服 (Golf Outfit)" },
        { value: "Pink ballet leotard, matching pink tutu skirt, pink ballet tights, pink satin pointe shoes, hair in bun (舞蹈服)", label: "舞蹈服 (Dance Leotard)" },
        { value: "White and blue striped swimsuit one-piece, swim cap, swimming goggles, athletic swimmer body, barefoot by pool (競泳選手)", label: "競泳選手 (Swimmer)" }
    ],

    // === 旗袍 (Qipao) ===
    qipao: [
        { value: "Traditional red silk qipao, golden dragon embroidery, high slit showing leg, mandarin collar, sleeveless, sheer nude stockings, red silk high heels (經典紅絲綢旗袍)", label: "經典紅絲綢旗袍 (Classic Red)" },
        { value: "Short white qipao with blue porcelain floral patterns, keyhole chest cutout, cap sleeves, white strappy heels (現代短款花旗袍)", label: "現代短款花旗袍 (Modern Floral)" },
        { value: "Elegant black velvet qipao, pearl buttons, gold trim piping, fitted silhouette, tea length, sheer black stockings, black velvet pumps (黑色絲絨旗袍)", label: "黑色絲絨旗袍 (Black Velvet)" },
        { value: "White satin qipao with intricate blue floral patterns, traditional cut, side slits, nude stockings, white satin heels (青花瓷旗袍)", label: "青花瓷旗袍 (Blue & White Porcelain)" },
        { value: "Pink lace overlay qipao, modern fusion style, sheer lace sleeves, romantic and soft aesthetic, nude stockings, nude high heels (蕾絲改良旗袍)", label: "蕾絲改良旗袍 (Lace Fusion)" },
        { value: "Sheer black lace qipao, nude lining visible, high slit, sexy elegant, sheer black stockings, black stiletto heels (黑色蕾絲透視旗袍)", label: "黑色蕾絲透視旗袍 (Sheer Black Lace)" },
        { value: "Sleeveless halter-neck qipao, red and black floral print, open back design, sheer stockings, black strappy sandal heels (掛脖露背旗袍)", label: "掛脖露背旗袍 (Halter Neck)" },
        { value: "Sapphire blue velvet qipao, gold phoenix embroidery, tea length, elegant, sheer nude stockings, gold strappy heels (藍絲絨鳳凰旗袍)", label: "藍絲絨鳳凰旗袍 (Blue Velvet Phoenix)" },
        { value: "Modern denim qipao, zipper front, mini length, fusion style, bare legs, white canvas sneakers (丹寧改良旗袍)", label: "丹寧改良旗袍 (Denim Fusion)" },
        { value: "Black leather qipao, tight fit, silver studs details, edgy punk style, fishnet stockings, black knee-high boots (皮質龐克旗袍)", label: "皮質龐克旗袍 (Leather Punk)" }
    ],

    // === 漢服 (Hanfu) ===
    hanfu: [
        { value: "Tang Dynasty style, sheer shawl (pibo), floral embroidered chest-high skirt, flowing wide sleeves, fairy-like, embroidered silk shoes (唐制齊胸襦裙)", label: "唐制齊胸襦裙 (Tang Dynasty)" },
        { value: "Song Dynasty style, long sheer outer coat (beizi), camisole (moziong), pleated skirt, scholarly, flat cloth shoes (宋制褙子)", label: "宋制褙子 (Song Dynasty)" },
        { value: "Ming Dynasty style, woven gold top (ao), mamian skirt (horse-face skirt), dignified and luxurious, platform embroidered shoes (明制襖裙)", label: "明制襖裙 (Ming Dynasty)" },
        { value: "Cross-collar narrow sleeve hanfu, leather wrist guards, waist sash, dynamic martial arts style, black combat boots (武俠女劍客)", label: "武俠女劍客 (Swordswoman)" },
        { value: "All white flowing hanfu, multiple layers of sheer silk, silver hair accessories, ethereal and mystical, white silk shoes (白蛇傳風格)", label: "白蛇傳風格 (White Snake Spirit)" },
        { value: "Dunhuang Flying Apsaras style, ribbons, exposed midriff, bare feet with anklets (敦煌飛天舞衣)", label: "敦煌飛天舞衣 (Dunhuang Apsaras)" }
    ],

    // === 和服 (Kimono) ===
    kimono: [
        { value: "Gorgeous long-sleeved furisode kimono with vibrant floral patterns, elaborate obi sash, formal traditional style, traditional zori sandals (振袖和服)", label: "振袖和服 (Formal Furisode)" },
        { value: "Lightweight cotton yukata, indigo blue with morning glory patterns, simple obi, holding a paper fan, wooden geta sandals (夏季浴衣)", label: "夏季浴衣 (Summer Yukata)" },
        { value: "Arrow feather pattern kimono top, maroon hakama pants, classic Taisho Roman retro student style, black leather lace-up boots (大正浪漫袴)", label: "大正浪漫袴 (Hakama Student)" },
        { value: "Modernized short kimono dress, off-shoulder, frilly skirt, obi corset, anime kunoichi style, red high heels (改良短和服)", label: "改良短和服 (Short Kimono Dress)" },
        { value: "Traditional white haori jacket, red hakama pants, sacred and pure atmosphere, traditional zori with red straps (巫女服)", label: "巫女服 (Shrine Maiden Miko)" },
        { value: "Ninja Kunoichi style, short kimono tunic, mesh armor, ninja tabi boots (女忍短和服)", label: "女忍短和服 (Ninja Kunoichi)" },
        { value: "Modern lace kimono, fusion style, pastel colors, ribbon obi, lace gloves, western heels (蕾絲改良和服)", label: "蕾絲改良和服 (Modern Lace Fusion)" }
    ],

    // === 日系韓系 (Japanese & Korean Style) ===
    jk_style: [
        // 日系純欲風 Japanese Pure Desire Style
        { value: "White fluffy mohair sweater, sheer lace bralette peeking, pink pleated mini skirt, white knee socks, pink mary janes (日系純欲毛衣裙)", label: "🇯🇵 日系純欲毛衣裙 (JP Pure Sweater)" },
        { value: "Cream knit cardigan unbuttoned, white camisole, grey pleated mini skirt, white thigh highs, beige loafers (奶油色針織開衫)", label: "🇯🇵 奶油色針織開衫 (Cream Cardigan)" },
        { value: "Oversized white shirt half tucked, beige knit vest, brown plaid mini skirt, cream knee socks, brown loafers (慵懶學院風)", label: "🇯🇵 慵懶學院風 (Lazy Academia)" },
        { value: "Baby blue sailor collar blouse, navy pleated mini skirt, white ankle socks, white sneakers (水手領短裙)", label: "🇯🇵 水手領短裙 (Sailor Mini)" },
        { value: "Pink cable knit sweater, white tennis mini skirt, white knee socks, pink platform sneakers (甜美運動風)", label: "🇯🇵 甜美運動風 (Sweet Sporty)" },
        { value: "Sheer white blouse with ribbon bow, suspender mini skirt, white thigh highs, mary jane shoes (透膚蝴蝶結襯衫)", label: "🇯🇵 透膚蝴蝶結襯衫 (Sheer Ribbon)" },
        // 韓系甜辣風 Korean Sweet Spicy Style
        { value: "Cropped blazer, white tube top, high-waisted pleated mini skirt, white sneakers, gold jewelry (韓系甜辣西裝)", label: "🇰🇷 韓系甜辣西裝 (K-Sweet Blazer)" },
        { value: "Off-shoulder knit top, high-waisted denim mini skirt, white ankle boots (露肩針織配牛仔裙)", label: "🇰🇷 露肩針織配牛仔裙 (Off-shoulder Denim)" },
        { value: "White cropped cardigan with pearl buttons, matching pleated short skirt, pearl earrings, white mary janes (珍珠扣套裝)", label: "🇰🇷 珍珠扣套裝 (Pearl Button Set)" },
        { value: "Pastel pink tweed jacket, matching mini skirt, pearl necklace, nude heels (粉色小香風套裝)", label: "🇰🇷 粉色小香風套裝 (Pink Tweed Set)" },
        { value: "Oversized striped shirt dress belted, white sneakers, minimal makeup (韓系襯衫裙)", label: "🇰🇷 韓系襯衫裙 (K-Shirt Dress)" },
        { value: "Black ribbed crop top, high-waisted cargo mini skirt, chunky sneakers (辣妹工裝風)", label: "🇰🇷 辣妹工裝風 (Spicy Cargo)" },
        // 日系JK制服變體 Japanese JK Uniform Variants
        { value: "White sailor top with navy trim, navy micro pleated skirt, loose socks, brown loafers (改良JK水手服)", label: "🇯🇵 改良JK水手服 (Modified JK Sailor)" },
        { value: "Cream vest over white blouse, red ribbon tie, grey check mini skirt, black knee socks, brown loafers (奶茶JK制服)", label: "🇯🇵 奶茶JK制服 (Milk Tea JK)" },
        { value: "Pink cardigan over sailor uniform, navy pleated skirt, white loose socks, white sneakers (粉紅針織JK)", label: "🇯🇵 粉紅針織JK (Pink Knit JK)" },
        { value: "Summer JK uniform, short sleeve white blouse, navy ribbon, grey mini skirt, white ankle socks, white loafers (夏季清涼JK)", label: "🇯🇵 夏季清涼JK (Summer JK)" },
        // 韓系學院風 Korean Academia Style
        { value: "Navy blazer, white shirt, red plaid pleated skirt, white knee socks, black loafers (韓式學院制服)", label: "🇰🇷 韓式學院制服 (K-Academy Uniform)" },
        { value: "Beige trench coat over white tee, tennis mini skirt, white sneakers (風衣網球裙)", label: "🇰🇷 風衣網球裙 (Trench Tennis)" },
        { value: "Cropped hoodie, plaid pleated mini skirt, white tube socks, platform sneakers (帽T格紋裙)", label: "🇰🇷 帽T格紋裙 (Hoodie Plaid)" },
        { value: "Oversized knit vest, white shirt collar peeking, grey shorts skirt, loafers (針織背心短裙)", label: "🇰🇷 針織背心短裙 (Knit Vest Short)" },
        // 日系森女田園風 Japanese Mori Girl / Cottage Style
        { value: "White cotton blouse with lace collar, floral print A-line skirt, straw hat, brown leather sandals (森系碎花裙)", label: "🇯🇵 森系碎花裙 (Mori Floral)" },
        { value: "Cream linen apron dress, white puff sleeve blouse, brown leather mary janes (亞麻圍裙裙)", label: "🇯🇵 亞麻圍裙裙 (Linen Apron)" },
        { value: "Gingham check dress, puff sleeves, peter pan collar, white ankle socks, brown oxford shoes (格紋洋裝)", label: "🇯🇵 格紋洋裝 (Gingham Dress)" },
        { value: "Embroidered peasant blouse, tiered ruffle midi skirt, woven basket bag, espadrilles (刺繡田園風)", label: "🇯🇵 刺繡田園風 (Embroidered Cottage)" },
        // 韓系約會穿搭 Korean Date Outfits
        { value: "Light pink slip dress, white cardigan draped shoulders, pearl accessories, nude heels (約會吊帶裙)", label: "🇰🇷 約會吊帶裙 (Date Slip Dress)" },
        { value: "White square neck puff sleeve top, lavender A-line mini skirt, white strappy heels (方領泡泡袖)", label: "🇰🇷 方領泡泡袖 (Square Neck Puff)" },
        { value: "Soft blue knit set, cropped top and mini skirt, pearl earrings, white mules (藍色針織套裝)", label: "🇰🇷 藍色針織套裝 (Blue Knit Set)" },
        { value: "Ruched bodycon mini dress, thin straps, nude heels, delicate jewelry (抓皺緊身裙)", label: "🇰🇷 抓皺緊身裙 (Ruched Bodycon)" },
        { value: "Floral wrap mini dress, V-neck, puff sleeves, nude block heels (碎花裹身短裙)", label: "🇰🇷 碎花裹身短裙 (Floral Wrap Mini)" },
        { value: "White eyelet lace mini dress, romantic feminine, nude sandals (蕾絲鏤空洋裝)", label: "🇰🇷 蕾絲鏤空洋裝 (Eyelet Lace Dress)" },
        { value: "Off-shoulder ribbed top, satin mini skirt, strappy heels, elegant date look (一字領緞面裙)", label: "🇰🇷 一字領緞面裙 (Off-shoulder Satin)" },
        { value: "Cropped cashmere sweater, high-waisted leather mini skirt, ankle boots (羊絨配皮裙)", label: "🇰🇷 羊絨配皮裙 (Cashmere Leather)" },
        { value: "White lace blouse, pink tulle mini skirt, pearl headband, white heels (蕾絲紗裙約會)", label: "🇰🇷 蕾絲紗裙約會 (Lace Tulle Date)" },
        { value: "Pastel mint knit top, white pleated tennis skirt, white sneakers, fresh date (薄荷綠約會風)", label: "🇰🇷 薄荷綠約會風 (Mint Fresh Date)" },
        { value: "Black velvet camisole, grey plaid mini skirt, black ankle boots, chic evening (絲絨格紋約會)", label: "🇰🇷 絲絨格紋約會 (Velvet Plaid Date)" },
        { value: "Cream silk blouse bow tie, camel A-line mini skirt, nude pumps, elegant lady (絲綢蝴蝶結約會)", label: "🇰🇷 絲綢蝴蝶結約會 (Silk Bow Date)" },
        // 日系約會穿搭 Japanese Date Outfits
        { value: "White lace camisole, baby pink flared mini skirt, pearl necklace, white mary janes (純欲約會風)", label: "🇯🇵 純欲約會風 (Pure Date Style)" },
        { value: "Soft pink angora sweater, white pleated mini skirt, white knee socks, pink ballet flats (粉嫩天使約會)", label: "🇯🇵 粉嫩天使約會 (Angel Pink Date)" },
        { value: "Cream chiffon blouse with ribbon, brown check mini skirt, beige loafers (奶茶系約會)", label: "🇯🇵 奶茶系約會 (Milk Tea Date)" },
        { value: "Off-white knit dress, mini length, delicate gold jewelry, nude heels (針織連身裙約會)", label: "🇯🇵 針織連身裙約會 (Knit Dress Date)" },
        { value: "Lavender satin camisole, white lace trim mini skirt, silver accessories, white mules (薰衣草約會)", label: "🇯🇵 薰衣草約會 (Lavender Date)" },
        { value: "Sheer white blouse, high-waisted denim mini skirt, brown leather belt, white sneakers (清純牛仔約會)", label: "🇯🇵 清純牛仔約會 (Pure Denim Date)" },
        { value: "Baby blue cardigan, white camisole, floral print mini skirt, white sandals (碎花清新約會)", label: "🇯🇵 碎花清新約會 (Floral Fresh Date)" },
        { value: "Striped crop top, high-waisted white mini skirt, straw bag, espadrilles (海邊約會風)", label: "🇯🇵 海邊約會風 (Beach Date Style)" },
        // 日系迷你裙特輯 Japanese Mini Skirt Special
        { value: "Oversized cream sweater, grey micro pleated skirt, white thigh highs, brown loafers (毛衣配超短裙)", label: "🇯🇵 毛衣配超短裙 (Sweater Micro)" },
        { value: "White crop tee with heart print, pink tennis mini skirt, white platform sneakers (愛心T配網球裙)", label: "🇯🇵 愛心T配網球裙 (Heart Tee Tennis)" },
        { value: "Pink hoodie cropped, grey pleated micro skirt, white crew socks, pink sneakers (帽T超短裙)", label: "🇯🇵 帽T超短裙 (Hoodie Micro)" },
        { value: "Sailor collar crop top, navy micro skirt, white loose socks, white sneakers (水手服迷你)", label: "🇯🇵 水手服迷你 (Sailor Micro)" },
        { value: "Pastel rainbow striped sweater, white denim mini skirt, colorful sneakers (彩虹條紋迷你)", label: "🇯🇵 彩虹條紋迷你 (Rainbow Mini)" },
        { value: "White off-shoulder knit, brown corduroy mini skirt, cream boots (露肩燈芯絨裙)", label: "🇯🇵 露肩燈芯絨裙 (Off-shoulder Cord)" },
        // 韓系迷你裙特輯 Korean Mini Skirt Special
        { value: "Black turtleneck crop top, red plaid mini skirt, black boots, edgy chic (高領格紋迷你)", label: "🇰🇷 高領格紋迷你 (Turtle Plaid Mini)" },
        { value: "White oversized blazer, black micro mini skirt, black heels, boss girl (西裝超短裙)", label: "🇰🇷 西裝超短裙 (Blazer Micro)" },
        { value: "Ribbed beige crop top, matching knit mini skirt, nude mules (米色針織套裝裙)", label: "🇰🇷 米色針織套裝裙 (Beige Knit Set)" },
        { value: "Denim bustier top, white mini skirt, white sneakers, summer casual (牛仔馬甲白短裙)", label: "🇰🇷 牛仔馬甲白短裙 (Denim Bustier)" },
        { value: "Cropped leather jacket, white tube top, black leather mini skirt, boots (皮衣皮裙辣妹)", label: "🇰🇷 皮衣皮裙辣妹 (Leather Spicy)" },
        { value: "Pastel yellow knit vest, white shirt, grey check mini skirt, loafers (黃色背心學院)", label: "🇰🇷 黃色背心學院 (Yellow Vest Academy)" },
        { value: "Square neck puff blouse, high-waisted black mini skirt, block heels (方領黑短裙)", label: "🇰🇷 方領黑短裙 (Square Neck Black)" },
        { value: "Striped crop cardigan, matching mini skirt set, white sneakers (條紋套裝迷你)", label: "🇰🇷 條紋套裝迷你 (Stripe Set Mini)" }
    ],

    // === ☕ 咖啡廳約會風 (Cafe Date Style) ===
    cafe_date: [
        // 奶茶色系 Milk Tea Tones
        { value: "Cream knit sweater, camel A-line mini skirt, beige ankle boots, tote bag (奶茶色針織套裝)", label: "☕ 奶茶色針織套裝 (Milk Tea Knit)" },
        { value: "Beige turtleneck, brown plaid mini skirt, cream knee socks, brown loafers (焦糖格紋裙)", label: "☕ 焦糖格紋裙 (Caramel Plaid)" },
        { value: "Off-white cardigan, latte brown camisole, beige pleated mini skirt, nude flats (拿鐵色層次)", label: "☕ 拿鐵色層次 (Latte Layer)" },
        { value: "Mocha brown knit vest, white blouse, cream tennis skirt, brown mary janes (摩卡背心裙)", label: "☕ 摩卡背心裙 (Mocha Vest)" },
        { value: "Oatmeal oversized sweater, brown corduroy mini skirt, cream boots (燕麥色毛衣)", label: "☕ 燕麥色毛衣 (Oatmeal Sweater)" },
        { value: "Taupe silk blouse, caramel wrap mini skirt, nude heels (太妃糖裹裙)", label: "☕ 太妃糖裹裙 (Toffee Wrap)" },
        // 溫柔甜美 Soft & Sweet
        { value: "Baby pink cardigan, white lace camisole, cream mini skirt, white mary janes (粉嫩溫柔風)", label: "☕ 粉嫩溫柔風 (Soft Pink)" },
        { value: "Lavender knit top, white pleated mini skirt, white sneakers (薰衣草清新)", label: "☕ 薰衣草清新 (Lavender Fresh)" },
        { value: "Mint green blouse, white A-line mini skirt, beige sandals (薄荷清爽)", label: "☕ 薄荷清爽 (Mint Fresh)" },
        { value: "Dusty rose sweater, grey check mini skirt, pink ballet flats (乾燥玫瑰)", label: "☕ 乾燥玫瑰 (Dusty Rose)" },
        { value: "Peach satin camisole, cream cardigan, white tennis skirt, nude mules (蜜桃甜心)", label: "☕ 蜜桃甜心 (Peach Sweet)" },
        { value: "Soft yellow knit top, white denim mini skirt, white sneakers (檸檬黃清新)", label: "☕ 檸檬黃清新 (Lemon Fresh)" },
        // 氣質優雅 Elegant
        { value: "Cream silk shirt, brown leather mini skirt, nude heels, gold jewelry (絲綢優雅)", label: "☕ 絲綢優雅 (Silk Elegant)" },
        { value: "Beige linen blazer, white camisole, camel shorts, nude sandals (亞麻知性)", label: "☕ 亞麻知性 (Linen Smart)" },
        { value: "White eyelet blouse, tan suede mini skirt, brown ankle boots (鏤空蕾絲)", label: "☕ 鏤空蕾絲 (Eyelet Lace)" },
        { value: "Camel cashmere sweater, cream pleated mini skirt, brown loafers (羊絨質感)", label: "☕ 羊絨質感 (Cashmere Touch)" }
    ],

    // === 🌊 夏日清涼風 (Summer Fresh Style) ===
    summer_fresh: [
        // 露肩清涼 Off-shoulder Cool
        { value: "White off-shoulder crop top, light blue denim mini skirt, white sandals (白色露肩清涼)", label: "🌊 白色露肩清涼 (White Off-shoulder)" },
        { value: "Yellow gingham off-shoulder top, white shorts, straw sandals (黃格紋露肩)", label: "🌊 黃格紋露肩 (Yellow Gingham)" },
        { value: "Pink ruffle off-shoulder blouse, white mini skirt, nude wedges (粉色荷葉邊露肩)", label: "🌊 粉色荷葉邊露肩 (Pink Ruffle)" },
        { value: "Blue striped off-shoulder top, white linen shorts, espadrilles (藍白條紋露肩)", label: "🌊 藍白條紋露肩 (Blue Stripe)" },
        { value: "Coral off-shoulder mini dress, straw bag, tan sandals (珊瑚色露肩裙)", label: "🌊 珊瑚色露肩裙 (Coral Dress)" },
        // 清爽配色 Fresh Colors
        { value: "White linen crop top, sky blue mini skirt, white sneakers (天空藍清爽)", label: "🌊 天空藍清爽 (Sky Blue Fresh)" },
        { value: "Mint green tank top, white denim mini skirt, mint sandals (薄荷綠涼夏)", label: "🌊 薄荷綠涼夏 (Mint Summer)" },
        { value: "Lemon yellow camisole, white pleated mini skirt, yellow flats (檸檬黃活力)", label: "🌊 檸檬黃活力 (Lemon Energy)" },
        { value: "Watermelon pink crop tee, white shorts, pink sandals (西瓜粉夏日)", label: "🌊 西瓜粉夏日 (Watermelon Pink)" },
        { value: "Ocean blue wrap top, white linen mini skirt, tan wedges (海洋藍清涼)", label: "🌊 海洋藍清涼 (Ocean Blue)" },
        { value: "Peach halter top, white A-line mini skirt, nude sandals (蜜桃色涼夏)", label: "🌊 蜜桃色涼夏 (Peach Summer)" },
        // 度假風情 Vacation Vibes
        { value: "White crochet crop top, high-waisted denim shorts, brown sandals (鉤針海邊風)", label: "🌊 鉤針海邊風 (Crochet Beach)" },
        { value: "Tropical print bandeau, white mini skirt, straw wedges (熱帶印花)", label: "🌊 熱帶印花 (Tropical Print)" },
        { value: "White eyelet mini dress, tan belt, brown gladiator sandals (鏤空白裙)", label: "🌊 鏤空白裙 (Eyelet White)" },
        { value: "Striped crop top, high-waisted white shorts, canvas sneakers (條紋海軍風)", label: "🌊 條紋海軍風 (Nautical Stripe)" },
        { value: "Floral print sundress, mini length, straw hat, tan sandals (碎花陽光裙)", label: "🌊 碎花陽光裙 (Floral Sundress)" }
    ],

    // === 🍂 秋冬溫暖風 (Autumn Winter Cozy) ===
    autumn_winter: [
        // 毛衣短裙 Sweater & Skirt
        { value: "Chunky cream cable knit sweater, brown plaid mini skirt, brown knee boots (麻花毛衣格紋裙)", label: "🍂 麻花毛衣格紋裙 (Cable Knit Plaid)" },
        { value: "Burgundy oversized sweater, black leather mini skirt, black boots (酒紅毛衣皮裙)", label: "🍂 酒紅毛衣皮裙 (Burgundy Leather)" },
        { value: "Mustard yellow knit, grey pleated mini skirt, brown ankle boots (芥末黃針織)", label: "🍂 芥末黃針織 (Mustard Knit)" },
        { value: "Forest green turtleneck, camel A-line mini skirt, brown loafers (森林綠高領)", label: "🍂 森林綠高領 (Forest Turtle)" },
        { value: "Rust orange sweater, dark denim mini skirt, tan boots (鏽橘色毛衣)", label: "🍂 鏽橘色毛衣 (Rust Sweater)" },
        { value: "Oatmeal mohair sweater, chocolate brown mini skirt, cream boots (燕麥馬海毛)", label: "🍂 燕麥馬海毛 (Oatmeal Mohair)" },
        // 層次穿搭 Layered Style
        { value: "Beige trench coat, white turtleneck, plaid mini skirt, brown boots (風衣層次)", label: "🍂 風衣層次 (Trench Layer)" },
        { value: "Camel coat, cream sweater, grey wool mini skirt, black boots (駝色大衣)", label: "🍂 駝色大衣 (Camel Coat)" },
        { value: "Black leather jacket, striped top, red plaid mini skirt, boots (皮衣格紋)", label: "🍂 皮衣格紋 (Leather Plaid)" },
        { value: "Olive green parka, white hoodie, black mini skirt, white sneakers (軍綠派克)", label: "🍂 軍綠派克 (Olive Parka)" },
        { value: "Cream teddy coat, beige knit dress, mini length, brown boots (泰迪熊外套)", label: "🍂 泰迪熊外套 (Teddy Coat)" },
        // 溫暖質感 Warm Textures
        { value: "Grey wool blazer, white shirt, tartan mini skirt, black loafers (羊毛西裝格紋)", label: "🍂 羊毛西裝格紋 (Wool Blazer)" },
        { value: "Bordeaux velvet top, black pleated mini skirt, black heels (波爾多絲絨)", label: "🍂 波爾多絲絨 (Bordeaux Velvet)" },
        { value: "Caramel suede jacket, cream knit, brown suede mini skirt, boots (麂皮套裝)", label: "🍂 麂皮套裝 (Suede Set)" },
        { value: "Navy peacoat, striped top, grey wool shorts, black tights, loafers (海軍藍雙排扣)", label: "🍂 海軍藍雙排扣 (Navy Peacoat)" }
    ],

    // === 💼 輕熟OL風 (Smart Casual Office) ===
    office_chic: [
        // 短裙西裝 Blazer & Mini Skirt
        { value: "White blazer, black camisole, high-waisted black mini skirt, nude heels (白西裝黑短裙)", label: "💼 白西裝黑短裙 (White Blazer Black)" },
        { value: "Beige blazer, white silk blouse, camel pencil mini skirt, nude pumps (米色西裝套)", label: "💼 米色西裝套 (Beige Blazer Set)" },
        { value: "Black cropped blazer, white top, grey plaid mini skirt, black heels (黑短版西裝格紋)", label: "💼 黑短版西裝格紋 (Black Crop Plaid)" },
        { value: "Dusty pink blazer, white camisole, matching pink mini skirt, nude heels (粉色套裝)", label: "💼 粉色套裝 (Pink Suit)" },
        { value: "Navy blazer, striped shirt, navy mini skirt, brown loafers (海軍藍知性)", label: "💼 海軍藍知性 (Navy Smart)" },
        { value: "Cream linen blazer, brown camisole, white mini skirt, tan sandals (亞麻夏日OL)", label: "💼 亞麻夏日OL (Linen Summer)" },
        // 優雅襯衫 Elegant Shirts
        { value: "White silk shirt, black leather mini skirt, black pumps (白絲綢配皮裙)", label: "💼 白絲綢配皮裙 (Silk Leather)" },
        { value: "Striped button-down, high-waisted navy mini skirt, nude heels (條紋襯衫海軍裙)", label: "💼 條紋襯衫海軍裙 (Stripe Navy)" },
        { value: "Pale blue blouse, white A-line mini skirt, nude flats (淺藍優雅)", label: "💼 淺藍優雅 (Pale Blue Elegant)" },
        { value: "Cream satin blouse, brown wrap mini skirt, tan heels (緞面裹身裙)", label: "💼 緞面裹身裙 (Satin Wrap)" },
        { value: "Bow-tie blouse, grey tweed mini skirt, black pumps (蝴蝶結小香風)", label: "💼 蝴蝶結小香風 (Bow Tweed)" },
        // 知性氣質 Intellectual Chic
        { value: "Camel turtleneck, black pencil mini skirt, black boots (高領窄裙)", label: "💼 高領窄裙 (Turtle Pencil)" },
        { value: "Grey knit vest, white shirt, plaid mini skirt, loafers (針織背心學院)", label: "💼 針織背心學院 (Knit Vest Academy)" },
        { value: "Black turtleneck, camel A-line mini skirt, brown boots (黑高領駝色裙)", label: "💼 黑高領駝色裙 (Black Camel)" },
        { value: "White knit top, high-waisted grey shorts, nude heels (針織西裝短褲)", label: "💼 針織西裝短褲 (Knit Dress Shorts)" }
    ],

    // === 🎵 派對演唱會風 (Party & Concert Style) ===
    party_concert: [
        // 閃亮派對 Sparkle Party
        { value: "Silver sequin crop top, black mini skirt, silver heels (銀色亮片派對)", label: "🎵 銀色亮片派對 (Silver Sequin)" },
        { value: "Gold metallic camisole, black leather mini skirt, gold heels (金色金屬感)", label: "🎵 金色金屬感 (Gold Metallic)" },
        { value: "Black sequin mini dress, thin straps, black strappy heels (黑亮片連身)", label: "🎵 黑亮片連身 (Black Sequin Dress)" },
        { value: "Holographic crop top, white mini skirt, clear heels (幻彩鐳射)", label: "🎵 幻彩鐳射 (Holographic)" },
        { value: "Pink glitter top, black pleated mini skirt, pink heels (粉紅閃粉)", label: "🎵 粉紅閃粉 (Pink Glitter)" },
        // 性感派對 Sexy Party
        { value: "Black lace crop top, red satin mini skirt, black heels (蕾絲緞面派對)", label: "🎵 蕾絲緞面派對 (Lace Satin)" },
        { value: "Red velvet mini dress, deep V-neck, red heels (紅絲絨性感)", label: "🎵 紅絲絨性感 (Red Velvet)" },
        { value: "Black mesh top over bralette, leather mini skirt, boots (網紗皮裙)", label: "🎵 網紗皮裙 (Mesh Leather)" },
        { value: "White corset top, black mini skirt, black ankle boots (馬甲派對)", label: "🎵 馬甲派對 (Corset Party)" },
        { value: "Black bodycon mini dress, cutout details, strappy heels (挖空緊身裙)", label: "🎵 挖空緊身裙 (Cutout Bodycon)" },
        // 演唱會風 Concert Vibes
        { value: "Band graphic tee cropped, denim mini skirt, chunky boots (樂團T牛仔裙)", label: "🎵 樂團T牛仔裙 (Band Tee Denim)" },
        { value: "Neon pink crop top, black mini skirt, white sneakers (螢光粉活力)", label: "🎵 螢光粉活力 (Neon Pink)" },
        { value: "Tie-dye crop top, black bike shorts, platform sneakers (紮染運動風)", label: "🎵 紮染運動風 (Tie-dye Sporty)" },
        { value: "Oversized band hoodie, no pants style, thigh high boots (樂團帽T過膝靴)", label: "🎵 樂團帽T過膝靴 (Band Hoodie Boots)" },
        { value: "Cropped leather jacket, white bralette, high-waisted shorts, boots (皮衣短褲)", label: "🎵 皮衣短褲 (Leather Shorts)" },
        { value: "Metallic silver mini dress, combat boots, chain accessories (金屬銀軍靴)", label: "🎵 金屬銀軍靴 (Metallic Combat)" }
    ],

    // === 節慶限定 (Seasonal) ===
    seasonal: [
        // 🎄 聖誕節 Christmas
        { value: "Red velvet mini dress with white faux fur trim, black belt cinched waist, red santa hat, festive and cute, red stockings, black fur-trimmed ankle boots (聖誕女郎洋裝)", label: "🎄 聖誕女郎洋裝 (Santa Girl)" },
        { value: "Brown hooded dress with plush reindeer antlers and ears, white fur cuffs, cute bell choker, brown knee socks, brown suede ankle boots (馴鹿造型)", label: "🎄 馴鹿造型 (Reindeer)" },
        { value: "Oversized red knit sweater with white snowflake patterns, white pleated mini skirt, white thigh high socks, white fur-lined winter boots (雪花毛衣)", label: "🎄 雪花毛衣 (Snowflake Sweater)" },
        { value: "Red velvet Santa bikini set with white fur trim, matching top and bottom, red santa hat, white fur leg warmers, barefoot (聖誕比基尼)", label: "🎄 聖誕比基尼 (Santa Bikini)" },
        { value: "Red and white candy cane striped bodysuit, festive bow on chest, red santa hat, white patent leather knee-high boots (糖果手杖連體衣)", label: "🎄 糖果手杖連體衣 (Candy Cane)" },
        { value: "Green tiered Christmas tree costume dress with ornament decorations, star headband, green stockings, red patent leather pumps (聖誕樹造型裙)", label: "🎄 聖誕樹造型裙 (Christmas Tree)" },
        { value: "White angora sweater, red plaid mini skirt, red knee socks, brown boots, cozy christmas (白毛衣紅格紋)", label: "🎄 白毛衣紅格紋 (Cozy Christmas)" },
        { value: "Green velvet crop top, red satin mini skirt, gold jewelry, red heels (綠絲絨紅緞面)", label: "🎄 綠絲絨紅緞面 (Green Velvet Red)" },
        { value: "Red off-shoulder sweater dress, mini length, white fur trim, red ankle boots (紅色露肩毛衣裙)", label: "🎄 紅色露肩毛衣裙 (Red Off-shoulder)" },
        { value: "White lace top, red velvet mini skirt, candy cane stockings, white boots (蕾絲紅絲絨裙)", label: "🎄 蕾絲紅絲絨裙 (Lace Velvet)" },
        // 🎃 萬聖節 Halloween
        { value: "Black witch costume dress, purple accents, pointed witch hat, holding broomstick, purple and black striped stockings, black pointed boots (萬聖女巫)", label: "🎃 萬聖女巫 (Halloween Witch)" },
        { value: "Orange pumpkin print crop top, black tulle mini skirt, black cat ears headband, black boots (南瓜甜心)", label: "🎃 南瓜甜心 (Pumpkin Sweet)" },
        { value: "Black cat costume bodysuit, cat ears, tail, black mini skirt, black boots (黑貓女郎)", label: "🎃 黑貓女郎 (Black Cat)" },
        { value: "Purple witch crop top, black lace mini skirt, witch hat, purple stockings, black heels (紫色小魔女)", label: "🎃 紫色小魔女 (Purple Witch)" },
        { value: "Orange and black striped top, black pleated mini skirt, spider web stockings, black boots (蜘蛛網萬聖)", label: "🎃 蜘蛛網萬聖 (Spider Web)" },
        { value: "White ghost costume mini dress, tattered hem, pale makeup, barefoot (可愛小鬼)", label: "🎃 可愛小鬼 (Cute Ghost)" },
        { value: "Red devil costume, horn headband, red mini dress, pitchfork, red heels (小惡魔)", label: "🎃 小惡魔 (Little Devil)" },
        { value: "Vampire costume, black cape, red corset, black mini skirt, fangs, black boots (吸血鬼女郎)", label: "🎃 吸血鬼女郎 (Vampire Girl)" },
        // 💝 情人節 Valentine's Day
        { value: "Pink satin lingerie set with heart patterns, lace trim bralette and panties, sheer pink robe, romantic Valentine style, barefoot (情人節內衣)", label: "💝 情人節內衣 (Valentine Lingerie)" },
        { value: "Red heart print mini dress, sweetheart neckline, red heels (紅色愛心裙)", label: "💝 紅色愛心裙 (Red Heart Dress)" },
        { value: "Pink lace crop top, white pleated mini skirt, heart accessories, pink heels (粉紅蕾絲愛心)", label: "💝 粉紅蕾絲愛心 (Pink Lace Heart)" },
        { value: "White blouse with red ribbon bow, red A-line mini skirt, white knee socks, red mary janes (紅白情人節)", label: "💝 紅白情人節 (Red White Valentine)" },
        { value: "Red velvet bodycon mini dress, gold heart necklace, red stilettos (紅絲絨約會)", label: "💝 紅絲絨約會 (Red Velvet Date)" },
        { value: "Pink tulle mini skirt, white knit top, heart hair clips, pink ballet flats (粉紅紗裙甜心)", label: "💝 粉紅紗裙甜心 (Pink Tulle Sweet)" },
        // 🎆 新年跨年 New Year
        { value: "Gold sequin mini dress, thin straps, gold heels, sparkle earrings (金色亮片跨年)", label: "🎆 金色亮片跨年 (Gold Sequin NYE)" },
        { value: "Black velvet crop top, silver sequin mini skirt, black heels (黑絲絨銀亮片)", label: "🎆 黑絲絨銀亮片 (Black Silver)" },
        { value: "Champagne colored satin mini dress, off-shoulder, nude heels (香檳色緞面)", label: "🎆 香檳色緞面 (Champagne Satin)" },
        { value: "Red satin camisole, black leather mini skirt, gold jewelry, black heels (紅緞面皮裙)", label: "🎆 紅緞面皮裙 (Red Satin Leather)" },
        { value: "White feather trim crop top, silver mini skirt, clear heels (羽毛銀裙)", label: "🎆 羽毛銀裙 (Feather Silver)" },
        { value: "Holographic mini dress, futuristic style, silver boots (幻彩未來感)", label: "🎆 幻彩未來感 (Holographic Future)" },
        // 🌸 春節 Chinese New Year
        { value: "Red cheongsam mini dress, gold embroidery, side slit, red heels (紅色迷你旗袍)", label: "🌸 紅色迷你旗袍 (Red Mini Qipao)" },
        { value: "Red knit sweater, gold pleated mini skirt, red ankle boots (紅金喜氣)", label: "🌸 紅金喜氣 (Red Gold Lucky)" },
        { value: "Burgundy velvet top, red plaid mini skirt, gold accessories, burgundy boots (酒紅新春)", label: "🌸 酒紅新春 (Burgundy New Year)" },
        { value: "Red and gold brocade crop top, red satin mini skirt, gold heels (織錦緞面)", label: "🌸 織錦緞面 (Brocade Satin)" },
        { value: "Pink hanfu style top, red embroidered mini skirt, traditional hair accessories (改良漢服短裙)", label: "🌸 改良漢服短裙 (Modern Hanfu Mini)" },
        // 🐰 復活節 Easter
        { value: "Pastel pink bunny ear headband, white fluffy sweater, pink pleated mini skirt, white mary janes (粉紅兔女郎)", label: "🐰 粉紅兔女郎 (Pink Bunny)" },
        { value: "Lavender knit top, pastel yellow mini skirt, bunny tail, white flats (薰衣草彩蛋)", label: "🐰 薰衣草彩蛋 (Lavender Easter)" },
        { value: "White lace dress, mini length, pastel flower crown, nude sandals (白蕾絲春日)", label: "🐰 白蕾絲春日 (White Lace Spring)" },
        { value: "Pastel rainbow striped top, white denim mini skirt, pastel sneakers (彩虹復活節)", label: "🐰 彩虹復活節 (Rainbow Easter)" },
        { value: "Mint green cardigan, white camisole, pastel pink mini skirt, white loafers (薄荷粉嫩)", label: "🐰 薄荷粉嫩 (Mint Pastel)" },
        // 🎓 畢業季 Graduation
        { value: "White blouse, navy pleated mini skirt, graduation cap, black heels (畢業典禮)", label: "🎓 畢業典禮 (Graduation Ceremony)" },
        { value: "Cream blazer, white top, beige mini skirt, nude pumps (知性畢業風)", label: "🎓 知性畢業風 (Smart Graduate)" },
        { value: "Light blue shirt dress, mini length, white sneakers, diploma (清新畢業裝)", label: "🎓 清新畢業裝 (Fresh Graduate)" },
        { value: "White lace mini dress, graduation sash, nude heels (白蕾絲畢業)", label: "🎓 白蕾絲畢業 (White Lace Grad)" },
        { value: "Navy sailor uniform modernized, short pleated skirt, graduation cap, white sneakers (水手服畢業)", label: "🎓 水手服畢業 (Sailor Grad)" }
    ]
};

// --- ★★★ 上衣 (Tops) - 增加甜美性感款 + 網美風格 ★★★ ---
export const topDatabase = [
    // === 基礎款 ===
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
    { value: "Heart cutout knit top (愛心挖空上衣)", label: "愛心挖空上衣 (Heart Cutout)" },
    { value: "Sheer ribbon blouse (透視緞帶襯衫)", label: "透視緞帶襯衫 (Sheer Ribbon)" },
    { value: "Corset top (馬甲上衣)", label: "馬甲上衣 (Corset Top)" },
    // === 網美風格 Influencer Style ===
    { value: "Cream knit crop top, minimalist chic (奶茶色針織短版)", label: "📸 奶茶色針織短版 (Milk Tea Knit)" },
    { value: "White ruffle off-shoulder top, romantic style (白色荷葉邊露肩)", label: "📸 白色荷葉邊露肩 (Ruffle Off-shoulder)" },
    { value: "Pastel lavender cropped blazer, soft girl aesthetic (薰衣草短版西裝)", label: "📸 薰衣草短版西裝 (Lavender Blazer)" },
    { value: "Oversized white blazer, boss girl style (白色寬鬆西裝)", label: "📸 白色寬鬆西裝 (White Blazer)" },
    { value: "Cropped denim jacket, effortless cool (短版牛仔外套)", label: "📸 短版牛仔外套 (Crop Denim)" },
    { value: "White linen wrap top, resort style (白色亞麻裹身上衣)", label: "📸 白色亞麻裹身上衣 (Linen Wrap)" },
    { value: "Tropical print bandeau top, vacation vibes (熱帶印花平口)", label: "📸 熱帶印花平口 (Tropical Bandeau)" },
    { value: "Light pink satin camisole, soft feminine (粉色緞面細肩帶)", label: "📸 粉色緞面細肩帶 (Pink Satin Cami)" },
    { value: "White cropped cardigan with pearl buttons, elegant (珍珠扣短版針織)", label: "📸 珍珠扣短版針織 (Pearl Cardigan)" },
    { value: "Sage green sports bra, athleisure chic (莫蘭迪綠運動上衣)", label: "📸 莫蘭迪綠運動上衣 (Sage Sports Top)" },
    { value: "Cropped white hoodie, casual sporty (白色短版帽T)", label: "📸 白色短版帽T (Crop Hoodie)" },
    { value: "Cowl neck satin top, date night ready (垂領緞面上衣)", label: "📸 垂領緞面上衣 (Cowl Satin)" }
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
    ],
    // === 網美風格 Influencer Style ===
    influencer: [
        // 褲裝
        { value: "High-waisted beige wide-leg pants, minimalist chic (奶茶色高腰寬褲)", label: "📸 奶茶色高腰寬褲 (Beige Wide-leg)" },
        { value: "Light blue high-waisted jeans, fresh and clean (淺藍高腰牛仔褲)", label: "📸 淺藍高腰牛仔褲 (Light Blue Jeans)" },
        { value: "High-waisted mom jeans, effortless cool (高腰老媽褲)", label: "📸 高腰老媽褲 (Mom Jeans)" },
        { value: "Black cycling shorts, athleisure style (黑色單車褲)", label: "📸 黑色單車褲 (Cycling Shorts)" },
        { value: "Pastel lavender high-waisted shorts, soft girl (薰衣草高腰短褲)", label: "📸 薰衣草高腰短褲 (Lavender Shorts)" },
        // 迷你裙 Mini Skirts
        { value: "White pleated tennis mini skirt, sporty chic (白色百褶網球裙)", label: "📸 白色百褶網球裙 (Tennis Mini)" },
        { value: "Plaid mini skirt, edgy instagram (格紋迷你裙)", label: "📸 格紋迷你裙 (Plaid Mini)" },
        { value: "Black bodycon mini skirt, sultry evening (黑色緊身短裙)", label: "📸 黑色緊身短裙 (Bodycon Mini)" },
        { value: "Denim mini skirt with raw hem, casual cute (毛邊牛仔迷你裙)", label: "📸 毛邊牛仔迷你裙 (Raw Denim Mini)" },
        { value: "White ruffled mini skirt, feminine sweet (白色荷葉邊迷你裙)", label: "📸 白色荷葉邊迷你裙 (Ruffle Mini)" },
        { value: "Pink satin mini skirt, date night glam (粉色緞面迷你裙)", label: "📸 粉色緞面迷你裙 (Pink Satin Mini)" },
        { value: "Beige knit mini skirt, cozy aesthetic (奶茶色針織迷你裙)", label: "📸 奶茶色針織迷你裙 (Knit Mini)" },
        { value: "Leopard print mini skirt, bold statement (豹紋迷你裙)", label: "📸 豹紋迷你裙 (Leopard Mini)" },
        { value: "High-waisted A-line mini skirt, classic cute (高腰A字迷你裙)", label: "📸 高腰A字迷你裙 (A-line Mini)" },
        { value: "Floral print mini skirt, spring vibes (碎花迷你裙)", label: "📸 碎花迷你裙 (Floral Mini)" },
        // 短裙 Short Skirts
        { value: "White linen wrap skirt, resort style (白色亞麻裹裙)", label: "📸 白色亞麻裹裙 (Linen Wrap)" },
        { value: "Button-front denim skirt, retro casual (排扣牛仔短裙)", label: "📸 排扣牛仔短裙 (Button Denim)" },
        { value: "Tiered ruffle short skirt, playful feminine (層次荷葉短裙)", label: "📸 層次荷葉短裙 (Tiered Ruffle)" },
        { value: "Asymmetric wrap skirt, chic modern (不對稱裹身短裙)", label: "📸 不對稱裹身短裙 (Asymmetric Wrap)" },
        { value: "Tweed short skirt, elegant lady (小香風短裙)", label: "📸 小香風短裙 (Tweed Short)" },
        { value: "Cargo mini skirt with pockets, street style (口袋工裝短裙)", label: "📸 口袋工裝短裙 (Cargo Short)" },
        // 中長裙
        { value: "Pleated midi skirt, korean elegant (百褶中長裙)", label: "📸 百褶中長裙 (Pleated Midi)" },
        { value: "Pink satin midi skirt, date night (粉色緞面中長裙)", label: "📸 粉色緞面中長裙 (Pink Satin Midi)" },
        { value: "Flowy palazzo pants, bohemian vibes (波希米亞寬褲)", label: "📸 波希米亞寬褲 (Palazzo Pants)" }
    ]
};
