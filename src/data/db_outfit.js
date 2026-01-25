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
        { value: "Red fluffy knit sweater, loose fit, white shorts, white sheer stockings, soft cozy style (紅色蓬鬆毛衣)", label: "紅色蓬鬆毛衣 (Red Fluffy Knit)" },
        // 裙裝休閒
        { value: "Blue and white striped long sleeve shirt, denim mini skirt, preppy casual style, white canvas shoes (條紋襯衫牛仔裙)", label: "條紋襯衫牛仔裙 (Preppy Casual)" },
        { value: "Floral print sundress, spaghetti straps, flowy A-line skirt, light and airy, brown leather sandals (碎花洋裝)", label: "碎花洋裝 (Floral Sundress)" },
        { value: "White cotton blouse, flowy midi skirt, straw tote bag, tan sandals, breezy summer (白襯衫中長裙)", label: "白襯衫中長裙 (Blouse & Midi)" },
        { value: "Denim jacket, white basic tee, pleated midi skirt, white sneakers (牛仔外套百褶裙)", label: "牛仔外套百褶裙 (Denim & Pleats)" },
        { value: "Striped crop top, high-waisted linen shorts, straw hat, espadrilles, vacation casual (條紋短版上衣)", label: "條紋短版上衣 (Striped Crop)" },
        // 運動休閒風
        { value: "White sports bra visible under loose tank, black leggings, white sneakers, gym to street (運動風疊穿)", label: "運動風疊穿 (Athleisure Layer)" },
        { value: "Pastel blue zip-up hoodie, matching joggers, white sneakers, sporty cute (粉藍運動套裝)", label: "粉藍運動套裝 (Sporty Set)" },
        { value: "Black cropped hoodie, grey yoga pants, white running shoes, casual athletic (短版帽T瑜伽褲)", label: "短版帽T瑜伽褲 (Crop Hoodie Yoga)" },
        // 優雅居家 Elegant Home
        { value: "White flowing long dress, soft natural daylight, elegant posture, barefoot, window light (白色長裙居家)", label: "白色長裙居家 (White Long Dress)" },
        { value: "Cream silk maxi dress, V-neck, flowy fabric, minimalist elegant, barefoot (奶油色絲質長裙)", label: "奶油色絲質長裙 (Cream Silk Maxi)" }
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
        { value: "Puff sleeve smocked top, tiered ruffle short skirt, pearl necklace, white ballet flats (公主風荷葉裙)", label: "公主風荷葉裙 (Princess Ruffle)" },
        // 格紋洋裝系列
        { value: "Red and white gingham check mini dress, square neckline, fitted waist, small red ribbon bows on straps, flared skirt, nude pink strappy heels, delicate chain necklace (紅白格紋甜美洋裝)", label: "紅白格紋甜美洋裝 (Red Gingham Dress)" },
        // Y2K 風格
        { value: "Pink floral print mini dress, sweetheart neckline, ruffle bust detail, tie shoulder straps, gold chain belt with seashell charms, silver digital camera, Y2K flash photography aesthetic (Y2K粉色花卉洋裝)", label: "Y2K粉色花卉洋裝 (Y2K Floral Dress)" },
        // 學院甜美風
        { value: "Black off-shoulder long sleeve top, wide white collar accent, dark plaid pleated mini skirt, black sheer stockings, black pointed low heels, sweet academy style (一字領學院甜美)", label: "一字領學院甜美 (Off-shoulder Academy)" },
        { value: "Yellow cropped short sleeve shirt with collar, dark grey plaid pleated mini skirt, black sheer stockings, black chunky loafers, JK style (黃色短版襯衫JK)", label: "黃色短版襯衫JK (Yellow Crop JK)" }
    ],

    // === 若隱若現 (Subtle Sheer) ===
    // ★ 設計理念：含蓄的性感，透過薄透材質在特定光線下產生微妙透視效果
    // ★ 透視程度：微透 (faintly visible / subtle hint) — 非完全透視
    // ★ 適用場合：日常穿搭、約會、輕正式場合
    subtle_sheer: [
        // ────────────────────────────────────────
        // 微透上衣 Subtle Sheer Tops
        // 材質：薄針織、絲綢、亞麻、棉紗
        // 效果：內衣輪廓隱約可見、膚色若隱若現
        // ────────────────────────────────────────
        { value: "White thin knit sweater, delicate loose weave fabric, bra faintly visible through material, subtle sheer effect, paired with high-waisted blue jeans, nude heels, elegant casual daytime look, soft natural lighting (微透白色針織衫)", label: "微透白色針織衫 (Subtle White Knit)" },
        { value: "Cream sheer knit top, fine gauge knit with skin tone barely visible underneath, delicate feminine texture, paired with beige midi skirt, nude pumps, soft focus romantic lighting (奶油色薄針織)", label: "奶油色薄針織 (Cream Sheer Knit)" },
        { value: "Light pink semi-sheer chiffon blouse, soft white bra outline hint beneath fabric, romantic golden hour lighting, paired with white pleated skirt, pink heels, sweet date style (淡粉微透襯衫)", label: "淡粉微透襯衫 (Pink Semi-sheer)" },
        { value: "White linen button-up shirt, slightly translucent when sunlight passes through, bra shadow subtly visible, natural casual summer vibe, paired with denim shorts, white sandals, outdoor setting (陽光透白麻襯衫)", label: "陽光透白麻襯衫 (Sunlit Linen)" },
        { value: "Ivory silk camisole top, lustrous fabric with subtle skin glow underneath, delicate spaghetti straps, paired with high-waisted tailored pants, strappy heels, refined understated sexy (象牙絲質小可愛)", label: "象牙絲質小可愛 (Ivory Silk Cami)" },
        { value: "Beige sheer ribbed knit top, vertical rib texture with skin peeking through gaps, layered gold necklaces, paired with black mini skirt, ankle boots, trendy chic street style (米色微透羅紋上衣)", label: "米色微透羅紋上衣 (Beige Sheer Rib)" },
        { value: "White cotton voile blouse, lightweight airy semi-transparent fabric, bra shadow visible when backlit by window light, flowy romantic silhouette, paired with cream skirt, nude flats (棉紗透光襯衫)", label: "棉紗透光襯衫 (Voile Blouse)" },
        { value: "Lavender semi-sheer mohair knit sweater, fuzzy texture with subtle body outline visible, dreamy soft focus aesthetic, paired with white wide-leg pants, lavender heels, gentle feminine mood (薰衣草微透針織)", label: "薰衣草微透針織 (Lavender Semi-sheer)" },
        // ────────────────────────────────────────
        // 微透下裝 Subtle Sheer Bottoms
        // 材質：雪紡、歐根紗、薄紗、網紗拼接
        // 效果：腿部輪廓若隱若現、內襯隱約可見
        // ────────────────────────────────────────
        { value: "White layered tulle midi skirt, multiple sheer layers creating semi-opaque dreamy effect, leg silhouette hint only, paired with fitted crop top, ballet flats, romantic fairy-like aesthetic (多層次白紗裙)", label: "多層次白紗裙 (Layered Tulle)" },
        { value: "Cream chiffon midi skirt, flowing lightweight fabric with leg silhouette faintly visible when walking, elegant movement, paired with silk blouse, nude pointed heels, sophisticated feminine (奶油雪紡中長裙)", label: "奶油雪紡中長裙 (Cream Chiffon Midi)" },
        { value: "White linen A-line skirt, natural fabric slightly translucent in bright sunlight, underwear hint only visible in strong backlight, paired with simple tank top, sandals, casual summer elegant (白麻微透A字裙)", label: "白麻微透A字裙 (Linen A-line)" },
        { value: "Pale pink organza overlay skirt, sheer outer layer over solid nude slip underneath, romantic layered translucent effect, paired with white feminine blouse, pink heels, dreamy princess style (粉色歐根紗疊層裙)", label: "粉色歐根紗疊層裙 (Pink Organza Layer)" },
        { value: "Ivory pleated sheer chiffon skirt with nude slip lining, legs subtly visible through delicate pleats, sophisticated elegant drape, paired with cream silk blouse, gold heels, evening cocktail appropriate (象牙百褶微透裙)", label: "象牙百褶微透裙 (Ivory Pleated Sheer)" },
        { value: "White pencil skirt with mesh panel inserts, strategic sheer sections on sides, teasing glimpse of skin, modern minimalist design, paired with black crop top, black heels, contemporary chic (白色網紗拼接裙)", label: "白色網紗拼接裙 (Mesh Panel Skirt)" },
        { value: "Light grey sheer chiffon wrap skirt, inner lining visible through outer layer, elegant asymmetric drape, office appropriate subtle sexy, paired with white blouse, grey pumps, professional feminine (淺灰微透圍裹裙)", label: "淺灰微透圍裹裙 (Grey Sheer Wrap)" },
        { value: "Champagne satin-lined chiffon maxi skirt, subtle golden shimmer visible through sheer layers, evening elegant movement, paired with matching silk camisole top, gold strappy heels, formal event ready (香檳雪紡內襯裙)", label: "香檳雪紡內襯裙 (Champagne Chiffon)" }
    ],

    // === 性感時尚 (Sexy Fashion) ===
    sexy_fashion: [
        // ★ 緊身連身裙 Bodycon Dresses ★
        { value: "Black ribbed knit bodycon mini dress, sleeveless, tight fit accentuating curves, black stiletto heels (韓系緊身包臀裙)", label: "韓系緊身包臀裙 (K-Style Bodycon)" },
        { value: "Red satin bodycon mini dress, spaghetti straps, cowl neckline, red heels (紅色緞面緊身裙)", label: "紅色緞面緊身裙 (Red Satin Bodycon)" },
        { value: "White ribbed bodycon dress, halter neck, backless, nude heels (白色繞頸緊身裙)", label: "白色繞頸緊身裙 (White Halter Bodycon)" },
        { value: "Nude mesh bodycon dress, strategic coverage, barely there illusion, clear heels (裸色透視緊身裙)", label: "裸色透視緊身裙 (Nude Mesh Bodycon)" },
        // ★ 開衩露背 Cutout & Backless ★
        { value: "Black backless halter dress, deep V neckline, high slit skirt, elegant sexy, black strappy heels (露背深V洋裝)", label: "露背深V洋裝 (Backless Halter)" },
        { value: "White cutout mini dress, side cutouts exposing waist, strappy heels (側腰挖空洋裝)", label: "側腰挖空洋裝 (Side Cutout Dress)" },
        { value: "Black asymmetric one-shoulder dress, thigh-high slit, black heels (斜肩開衩洋裝)", label: "斜肩開衩洋裝 (One-shoulder Slit)" },
        { value: "Red backless mini dress, criss-cross straps, red stilettos (交叉綁帶露背裙)", label: "交叉綁帶露背裙 (Criss-cross Back)" },
        // ★ 性感毛衣風 Sexy Sweater Style ★
        { value: "Beige keyhole turtleneck sweater, open chest cutout, tight fit, black leather mini skirt, black ankle boots (日系開胸毛衣)", label: "日系開胸毛衣 (Keyhole Sweater)" },
        { value: "Virgin killer sweater, white backless knit, bare back, mini length, barefoot (純欲殺手毛衣)", label: "純欲殺手毛衣 (Virgin Killer)" },
        { value: "Off-shoulder oversized sweater, no bra, sweater dress style, thigh high boots (寬鬆露肩毛衣裙)", label: "寬鬆露肩毛衣裙 (Off-shoulder Sweater)" },
        { value: "Cream cropped cable knit, underboob visible, high-waisted mini skirt, boots (短版露下乳毛衣)", label: "短版露下乳毛衣 (Underboob Knit)" },
        // ★ 透視蕾絲風 Sheer & Lace ★
        { value: "Black sheer mesh top, black bralette visible underneath, high-waisted black pants, black stiletto heels, club style (透視網紗上衣)", label: "透視網紗上衣 (Sheer Mesh)" },
        { value: "White sheer lace blouse, visible white bra, high-waisted mini skirt, nude heels (透視蕾絲襯衫)", label: "透視蕾絲襯衫 (Sheer Lace Blouse)" },
        { value: "Black lace bodysuit, sheer all over, high-waisted leather shorts, boots (蕾絲透膚連身衣)", label: "蕾絲透膚連身衣 (Lace Bodysuit)" },
        { value: "Sheer black mini dress, strategic lace coverage, black heels (透視黑蕾絲裙)", label: "透視黑蕾絲裙 (Sheer Black Dress)" },
        { value: "White strapless corset top with black halter straps and buttons, black pinstripe mini skirt, black sheer thigh-high stockings with lace tops, black patent leather stilettos (白色馬甲綁帶上衣)", label: "白色馬甲綁帶上衣 (White Corset Halter)" },
        { value: "Black sheer mesh long sleeve top, black velvet layered mini skirt, white platform ankle strap sandals (黑色透視絲絨裙)", label: "黑色透視絲絨裙 (Sheer Mesh Velvet)" },
        // ★ 透明感白衣 Sheer White Clothing ★
        { value: "Thin white cotton shirt, slightly transparent, white bra visible underneath, backlit, natural light, white mini skirt, barefoot (純欲透白襯衫)", label: "純欲透白襯衫 (Sheer White Shirt)" },
        { value: "White wet T-shirt, clinging to body, bra outline visible, damp fabric texture, denim shorts, barefoot (濕身白T恤)", label: "濕身白T恤 (Wet White Tee)" },
        { value: "Sheer white chiffon blouse, delicate see-through fabric, lace bralette visible, flowy, white shorts, nude heels (透膚雪紡襯衫)", label: "透膚雪紡襯衫 (Sheer Chiffon)" },
        { value: "White linen dress, backlit silhouette visible, thin fabric, body outline, barefoot on beach (逆光白麻洋裝)", label: "逆光白麻洋裝 (Backlit Linen)" },
        { value: "White oversized boyfriend shirt, thin fabric, underwear faintly visible, unbuttoned, morning light, barefoot (透光男友襯衫)", label: "透光男友襯衫 (Sheer Boyfriend Shirt)" },
        { value: "White ribbed tank top, no bra, nipple outline visible, high-waisted jeans, casual sexy (無內衣白背心)", label: "無內衣白背心 (Braless White Tank)" },
        // ★ 透明薄紗裙 Sheer Skirts ★
        { value: "White sheer tulle mini skirt, layered transparent fabric, white panties visible underneath, white crop top, barefoot (白色透明薄紗短裙)", label: "白色透明薄紗短裙 (White Tulle Mini)" },
        { value: "Black sheer organza midi skirt, see-through flowing fabric, black thong visible, black bralette top, heels (黑色透視歐根紗裙)", label: "黑色透視歐根紗裙 (Black Organza Midi)" },
        { value: "Sheer chiffon maxi skirt, white flowy transparent layers, silhouette visible, bikini underneath, beach style, barefoot (透明雪紡長裙)", label: "透明雪紡長裙 (Sheer Chiffon Maxi)" },
        { value: "Pink tulle ballerina skirt, multiple sheer layers, panties peeking through, white bodysuit, ballet flats (粉色芭蕾薄紗裙)", label: "粉色芭蕾薄紗裙 (Pink Tulle Ballerina)" },
        { value: "Black mesh overlay mini skirt, completely see-through, lace panties visible, corset top, heels (網紗透視迷你裙)", label: "網紗透視迷你裙 (Mesh Overlay Mini)" },
        { value: "White sheer wrap skirt, side slit, bikini bottom visible, resort style, barefoot on beach (透明圍裹裙)", label: "透明圍裹裙 (Sheer Wrap Skirt)" },
        { value: "Layered tulle high-low skirt, front short back long, sheer white, underwear visible, crop top, heels (前短後長薄紗裙)", label: "前短後長薄紗裙 (Tulle Hi-Lo Skirt)" },
        { value: "Sheer pleated midi skirt, delicate transparent pleats, backlit silhouette, elegant sexy, blouse, heels (透視百褶中長裙)", label: "透視百褶中長裙 (Sheer Pleated Midi)" },
        // ★ 皮革辣妹風 Leather Edgy ★
        { value: "Black leather mini skirt, black lace crop top, edgy sexy style, black ankle boots with buckles (皮裙蕾絲上衣)", label: "皮裙蕾絲上衣 (Edgy Leather)" },
        { value: "Red leather mini dress, front zipper, fitted, red boots (紅色皮革連身裙)", label: "紅色皮革連身裙 (Red Leather Dress)" },
        { value: "Black PVC mini skirt, black corset top, fishnet stockings, platform boots (PVC辣妹風)", label: "PVC辣妹風 (PVC Spicy)" },
        { value: "Leather harness over white tee, black mini skirt, combat boots (皮革綁帶造型)", label: "皮革綁帶造型 (Leather Harness)" },
        // ★ 運動性感風 Sporty Sexy (健康性感) ★
        { value: "White sports bra, grey unzipped hoodie, blue denim shorts, white sneakers, healthy sexy athletic style (運動內衣混搭)", label: "🏃 運動內衣混搭 (Sporty Lingerie)" },
        { value: "Black sports bra, high-waisted bike shorts, mesh overlay jacket, white sneakers (健身辣妹)", label: "🏃 健身辣妹 (Gym Hottie)" },
        { value: "Cropped athletic top, low-rise track pants, abs showing, sneakers (露腹運動風)", label: "🏃 露腹運動風 (Athletic Abs)" },
        { value: "Neon pink sports bra, black leggings with mesh panels, ponytail, sneakers (螢光運動風)", label: "🏃 螢光運動風 (Neon Athletic)" },
        { value: "White tennis dress, pleated mini skirt attached, low-cut back, white sneakers (網球性感裙)", label: "🏃 網球性感裙 (Sexy Tennis)" },
        { value: "Yoga outfit, fitted sports bra, high-waisted leggings, body curves visible, barefoot (瑜伽辣妹)", label: "🏃 瑜伽辣妹 (Yoga Babe)" },
        { value: "Cheerleader crop top, mini pleated skirt, exposed midriff, white sneakers (啦啦隊風)", label: "🏃 啦啦隊風 (Cheerleader)" },
        { value: "Boxing style sports bra, satin boxing shorts, boxing gloves, sneakers (拳擊女郎)", label: "🏃 拳擊女郎 (Boxing Girl)" },
        { value: "Racing swimsuit style bodysuit, high-cut legs, sporty zipper front, barefoot (競速泳衣風)", label: "🏃 競速泳衣風 (Racing Suit)" },
        { value: "Jogger crop hoodie, ultra short running shorts, toned legs, sneakers (慢跑辣妹)", label: "🏃 慢跑辣妹 (Jogging Hottie)" },
        { value: "Dance leotard, sheer tights, ballet leg warmers, dance sneakers (舞者性感)", label: "🏃 舞者性感 (Dancer Sexy)" },
        { value: "Golf mini skirt, fitted polo shirt unbuttoned, visor, golf shoes (高爾夫甜心)", label: "🏃 高爾夫甜心 (Golf Sweetie)" },
        // ★ 夜店風格 Club Style ★
        { value: "Sequin bralette top, black mini skirt, strappy heels, club queen (亮片胸衣夜店風)", label: "💃 亮片胸衣夜店風 (Sequin Club)" },
        { value: "Black velvet mini dress, plunging neckline, gold chain belt, black heels (絲絨深V夜店裙)", label: "💃 絲絨深V夜店裙 (Velvet Club Dress)" },
        { value: "Metallic gold crop top, black leather mini skirt, gold heels (金屬感夜店)", label: "💃 金屬感夜店 (Metallic Club)" },
        { value: "Holographic mini dress, iridescent fabric, futuristic club style, platform boots (幻彩夜店裙)", label: "💃 幻彩夜店裙 (Holographic Club)" },
        { value: "Black fishnet dress over bralette and shorts, edgy club style, combat boots (漁網夜店風)", label: "💃 漁網夜店風 (Fishnet Club)" },
        { value: "Neon tube dress, ultra tight fit, glow under UV light, clear heels (螢光緊身夜店)", label: "💃 螢光緊身夜店 (Neon Tube Dress)" }
    ],

    // === 泳裝比基尼 (Swimwear) ===
    swimwear: [
        // 經典比基尼 Classic Bikinis
        { value: "Classic triangle bikini, white color, halter neck top, tie-side bottom, beach style, barefoot (經典三角比基尼)", label: "經典三角比基尼 (Triangle Bikini)" },
        { value: "Black triangle bikini, gold ring details, tie sides, chic beach style, barefoot (黑金環扣比基尼)", label: "黑金環扣比基尼 (Black Gold Ring)" },
        { value: "Red string bikini, minimal coverage, classic sexy, barefoot on beach (紅色細帶比基尼)", label: "紅色細帶比基尼 (Red String)" },
        { value: "Navy blue classic bikini, sporty stripes, halter top, barefoot (海軍藍條紋比基尼)", label: "海軍藍條紋比基尼 (Navy Stripe)" },
        // 平口繞頸款 Bandeau & Halter
        { value: "Pink bandeau bikini top, matching brazilian cut bottom, strapless, trendy style, barefoot on beach (平口比基尼)", label: "平口比基尼 (Bandeau Bikini)" },
        { value: "White bandeau bikini, twisted front detail, high-waisted bottom, barefoot (扭結平口比基尼)", label: "扭結平口比基尼 (Twist Bandeau)" },
        { value: "Neon green halter bikini, push-up top, brazilian bottom, barefoot (螢光綠繞頸比基尼)", label: "螢光綠繞頸比基尼 (Neon Green Halter)" },
        { value: "Coral halter bikini, underwire support, moderate coverage, barefoot (珊瑚色繞頸托高)", label: "珊瑚色繞頸托高 (Coral Halter)" },
        // 甜美可愛款 Cute & Sweet
        { value: "Pastel pink ruffle bikini, feminine ruffled edges on top and bottom, cute and flirty, barefoot (荷葉邊比基尼)", label: "荷葉邊比基尼 (Ruffle Bikini)" },
        { value: "Gingham check bikini, red and white, vintage sweet, barefoot (格紋復古比基尼)", label: "格紋復古比基尼 (Gingham Check)" },
        { value: "Floral print bikini, tropical flowers, high-waisted bottom, barefoot (碎花比基尼)", label: "碎花比基尼 (Floral Print)" },
        { value: "Polka dot bikini, retro style, high-waisted, barefoot (波點復古比基尼)", label: "波點復古比基尼 (Polka Dot Retro)" },
        { value: "Pastel rainbow bikini, tie-dye style, festival vibes, barefoot (彩虹紮染比基尼)", label: "彩虹紮染比基尼 (Rainbow Tie-dye)" },
        // 性感款 Sexy Styles
        { value: "Red micro bikini, thin string ties, triangle top, minimal coverage bottom, barefoot (極小比基尼)", label: "極小比基尼 (Micro Bikini)" },
        { value: "Black thong bikini, high-cut legs, minimal back coverage, barefoot (丁字褲比基尼)", label: "丁字褲比基尼 (Thong Bikini)" },
        { value: "White mesh bikini, see-through when wet, daring style, barefoot (透視網紗比基尼)", label: "透視網紗比基尼 (Mesh See-through)" },
        { value: "Metallic gold bikini, chain details, glamorous beach, barefoot (金色金屬感比基尼)", label: "金色金屬感比基尼 (Gold Metallic)" },
        { value: "Black cut-out bikini, strategic cutouts, edgy sexy, barefoot (挖空設計比基尼)", label: "挖空設計比基尼 (Cutout Bikini)" },
        // 連身泳衣 One-Piece Swimsuits
        { value: "Navy blue high-cut one-piece school swimsuit, name tag on chest, high leg cut, glistening wet skin, barefoot (日系競泳水著)", label: "日系競泳水著 (School Swimsuit)" },
        { value: "Black one-piece swimsuit, high leg cut, plunging V neckline, sleek design, barefoot by pool (連身高衩泳衣)", label: "連身高衩泳衣 (One-piece)" },
        { value: "White one-piece, plunging neckline, belted waist, elegant, barefoot (白色V領連身泳衣)", label: "白色V領連身泳衣 (White V-neck One-piece)" },
        { value: "Red baywatch style one-piece, high-cut legs, lifeguard aesthetic, barefoot (紅色救生員泳衣)", label: "紅色救生員泳衣 (Baywatch Red)" },
        { value: "Black backless one-piece, criss-cross straps, sophisticated, barefoot (露背交叉帶泳衣)", label: "露背交叉帶泳衣 (Backless Cross-strap)" },
        { value: "Floral one-piece, tropical print, sweetheart neckline, barefoot (碎花連身泳衣)", label: "碎花連身泳衣 (Floral One-piece)" },
        // 運動泳裝 Sporty Swimwear
        { value: "Black sporty bikini, racerback top with zipper, boy shorts bottom, athletic look, barefoot (運動比基尼)", label: "運動比基尼 (Sporty Bikini)" },
        { value: "Blue athletic swimsuit, racing style, streamlined, barefoot (競技泳衣)", label: "競技泳衣 (Athletic Racer)" },
        { value: "Triathlon suit, sporty two-piece, zipper front, barefoot (鐵人三項泳裝)", label: "鐵人三項泳裝 (Triathlon Suit)" },
        // 罩衫搭配 Cover-ups
        { value: "White crochet bikini with matching cover-up, bohemian beach, barefoot (鉤針比基尼配罩衫)", label: "鉤針比基尼配罩衫 (Crochet with Cover-up)" },
        { value: "Black bikini with sheer sarong wrap, beach elegant, barefoot (比基尼配紗籠)", label: "比基尼配紗籠 (Bikini with Sarong)" }
    ],

    // === 學生制服 (School Uniform) ===
    uniform: [
        // 日系水手服 Japanese Sailor Uniforms
        { value: "Japanese sailor uniform, white short-sleeve top with navy collar, navy pleated skirt, red ribbon bow, white socks, brown loafers (日系水手服)", label: "日系水手服 (Sailor Uniform)" },
        { value: "Sexy sailor crop top with navy collar, navy blue pleated mini skirt, black garter belt with stockings, black heels, absolute territory (改良水手服)", label: "改良水手服 (Sexy Sailor)" },
        { value: "Classic navy sailor uniform, white scarf, navy pleated midi skirt, white knee socks, brown loafers (經典藍色水手服)", label: "經典藍色水手服 (Classic Navy Sailor)" },
        { value: "White sailor uniform, light blue collar and skirt, summer fresh, white ankle socks, white sneakers (白色夏季水手服)", label: "白色夏季水手服 (White Summer Sailor)" },
        { value: "Green sailor uniform, emerald collar, grey pleated skirt, white socks, brown loafers (綠色水手服)", label: "綠色水手服 (Green Sailor)" },
        // 韓系校服 Korean School Uniforms
        { value: "Korean school uniform, navy blazer, white shirt, plaid pleated skirt, navy knee socks, black loafers (韓系校服)", label: "韓系校服 (Korean Uniform)" },
        { value: "Korean winter uniform, grey cardigan over white shirt, navy tie, plaid mini skirt, black tights, loafers (韓系冬季校服)", label: "韓系冬季校服 (Korean Winter)" },
        { value: "Korean summer uniform, short sleeve white blouse, checkered mini skirt, white ankle socks, white sneakers (韓系夏季校服)", label: "韓系夏季校服 (Korean Summer)" },
        { value: "Korean elite school uniform, beige blazer, white shirt, brown plaid skirt, knee socks, brown loafers (韓系名校制服)", label: "韓系名校制服 (Korean Elite)" },
        // 英倫學院風 British Style
        { value: "British school uniform, grey plaid skirt, white button-up shirt, striped tie, navy blazer, white knee socks, black oxford shoes (英倫校服)", label: "英倫校服 (British Uniform)" },
        { value: "British prep school, burgundy blazer, grey pleated skirt, house tie, white knee socks, black mary janes (英倫名校制服)", label: "英倫名校制服 (British Prep)" },
        { value: "Scottish academy, tartan plaid skirt, white blouse, green cardigan, knee socks, oxford shoes (蘇格蘭學院)", label: "蘇格蘭學院 (Scottish Academy)" },
        // 夏季制服 Summer Uniforms
        { value: "Summer school uniform, white short sleeve blouse, navy pleated short skirt, white ankle socks, white sneakers (夏季制服)", label: "夏季制服 (Summer Uniform)" },
        { value: "Summer sailor dress, one-piece navy collar dress, white with blue trim, white socks, brown loafers (夏季水手連身裙)", label: "夏季水手連身裙 (Summer Sailor Dress)" },
        { value: "Tropical summer uniform, light blue polo shirt, white pleated mini skirt, white sneakers (熱帶夏季制服)", label: "熱帶夏季制服 (Tropical Summer)" },
        // 體育服 Gym Uniforms
        { value: "Japanese gym uniform, white T-shirt with name tag, navy bloomers, white crew socks, white indoor shoes (體育服)", label: "體育服 (Gym Uniform)" },
        { value: "Modern gym uniform, white polo shirt, navy shorts, white athletic socks, white sneakers (現代體育服)", label: "現代體育服 (Modern Gym)" },
        { value: "Track and field uniform, cropped athletic top, tight shorts, running shoes (田徑服)", label: "田徑服 (Track Uniform)" },
        { value: "Swimming class, navy one-piece school swimsuit, swim cap, barefoot (游泳課泳裝)", label: "游泳課泳裝 (Swim Class)" },
        // 改良制服 Modified Uniforms
        { value: "JK uniform loose socks style, shortened skirt, oversized cardigan, brown loafers (寬鬆襪JK風)", label: "寬鬆襪JK風 (Loose Socks JK)" },
        { value: "Sexy school uniform, cropped white shirt tied at waist, micro mini plaid skirt, thigh highs, heels (性感改良制服)", label: "性感改良制服 (Sexy Modified)" },
        { value: "Gyaru school uniform, bleached cardigan, shortened plaid skirt, loose socks, platform loafers (辣妹制服)", label: "辣妹制服 (Gyaru Uniform)" },
        { value: "Cute school uniform, pink cardigan, white blouse with bow, grey pleated skirt, knee socks, mary janes (可愛粉紅制服)", label: "可愛粉紅制服 (Cute Pink Uniform)" }
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
        { value: "Black tactical vest, navy blue police uniform, utility belt with equipment, cargo pants, black combat boots (特警戰術裝)", label: "特警戰術裝 (SWAT Tactical)" },
        // 商務OL系列 Business OL Series
        { value: "Fitted white long-sleeve dress shirt, black pencil skirt knee-length, black opaque pantyhose, black stiletto heels, professional office look (商務OL白襯衫黑窄裙)", label: "商務OL白襯衫黑窄裙 (Business OL Classic)" },
        { value: "Light blue V-neck blouse with lace details and sheer sleeves, white ruched mini skirt high-waisted, nude pointed heels, elegant office style (蕾絲V領上衣白皺褶裙)", label: "蕾絲V領上衣白皺褶裙 (Lace V-neck Office)" },
        { value: "Cream silk blouse, high-waisted black wide-leg trousers, nude heels, minimalist chic (奶油色絲質上衣闊腿褲)", label: "奶油色絲質上衣闊腿褲 (Silk Blouse Wide Leg)" },
        { value: "Grey fitted blazer dress, V-neckline, belt waist, sheer black stockings, black pumps (灰色西裝連身裙)", label: "灰色西裝連身裙 (Blazer Dress)" },
        { value: "Black turtleneck sweater, camel pencil skirt, brown leather belt, nude stockings, brown heels (黑高領毛衣駝色窄裙)", label: "黑高領毛衣駝色窄裙 (Turtleneck Pencil)" },
        { value: "White button-down shirt, dark camisole visible underneath, black mini skirt, sheer black pantyhose, black heels, professional sexy OL (白襯衫透出深色吊帶)", label: "白襯衫透出深色吊帶 (White Shirt Dark Cami)" }
    ],

    // === 角色扮演 (Cosplay) ===
    cosplay: [
        // 女僕系列 Maid Series
        { value: "Classic black and white french maid dress, white lace apron, lace headband, puffed short sleeves, white stockings, black mary jane shoes (女僕裝)", label: "女僕裝 (Maid Outfit)" },
        { value: "Black bikini with white frilly maid apron, lace headband, white thigh high stockings with lace trim, black heels (女僕比基尼)", label: "女僕比基尼 (Maid Bikini)" },
        { value: "Pink maid dress, white apron with heart pocket, pink headband, white knee socks, pink mary janes (粉紅女僕)", label: "粉紅女僕 (Pink Maid)" },
        { value: "Gothic lolita maid, black and red dress, black lace details, black platform boots (哥德女僕)", label: "哥德女僕 (Gothic Maid)" },
        // 動物擬人 Animal Girls
        { value: "Black strapless bunny girl bodysuit, white fluffy cottontail, black bunny ears headband, white collar with bow tie, black fishnet stockings, black high heels (兔女郎)", label: "兔女郎 (Bunny Girl)" },
        { value: "Pink bunny girl costume, plush rabbit ears, fluffy tail, pink fishnet stockings, pink heels (粉紅兔女郎)", label: "粉紅兔女郎 (Pink Bunny)" },
        { value: "Black fitted bodysuit, cat ear headband, long cat tail, paw print gloves, collar with golden bell, black thigh high stockings, black heels (貓女裝)", label: "貓女裝 (Cat Girl)" },
        { value: "White cat girl outfit, fluffy white cat ears, white tail, white stockings, white heels (白色貓娘)", label: "白色貓娘 (White Cat Girl)" },
        { value: "Fox girl costume, orange fluffy ears, big fluffy tail, orange kimono style dress, barefoot (狐狸娘)", label: "狐狸娘 (Fox Girl)" },
        { value: "Wolf girl costume, grey wolf ears, fluffy grey tail, grey fur trim outfit, boots (狼女)", label: "狼女 (Wolf Girl)" },
        // 奇幻角色 Fantasy Characters
        { value: "Purple succubus costume, black demon wings, pointed tail, revealing black bodysuit, thigh high boots, seductive pose (魅魔裝)", label: "魅魔裝 (Succubus)" },
        { value: "Black witch dress, pointed witch hat, purple cape, holding magic wand, black and purple striped stockings, black boots (魔女裝)", label: "魔女裝 (Witch)" },
        { value: "White angel costume, fluffy white wings, golden halo, white flowing dress, barefoot (天使裝)", label: "天使裝 (Angel)" },
        { value: "Dark angel costume, black feathered wings, black corset dress, black boots (墮天使)", label: "墮天使 (Dark Angel)" },
        { value: "Elf costume, pointed ears, green fantasy dress, flower crown, barefoot (精靈裝)", label: "精靈裝 (Elf)" },
        { value: "Fairy costume, iridescent wings, pastel mini dress, flower accessories, barefoot (仙子裝)", label: "仙子裝 (Fairy)" },
        { value: "Vampire countess, gothic black gown, red cape, fangs, pale makeup, black heels (吸血鬼女伯爵)", label: "吸血鬼女伯爵 (Vampire Countess)" },
        // 遊戲動漫風 Game & Anime Style
        { value: "Red and white cheerleader crop top, matching pleated mini skirt, holding pom poms, white ankle socks, white sneakers (啦啦隊服)", label: "啦啦隊服 (Cheerleader)" },
        { value: "School idol costume, frilly dress, microphone, thigh high boots, idol stage outfit (偶像服)", label: "偶像服 (Idol Costume)" },
        { value: "Magical girl costume, frilly skirt, ribbon details, magic wand, knee high boots (魔法少女)", label: "魔法少女 (Magical Girl)" },
        { value: "RPG warrior princess, armor bikini, sword, fantasy boots (RPG戰士公主)", label: "RPG戰士公主 (Warrior Princess)" },
        { value: "Racing queen outfit, tight bodysuit, sponsor logos, high heels (賽車女郎)", label: "賽車女郎 (Racing Queen)" },
        // ACG 角色 Cosplay - ACG Character Cosplay
        { value: "Tifa Lockhart cosplay, white cropped tank top, black leather mini skirt, black suspenders, red fingerless gloves, black knee-high stockings, brown boots, long dark hair (蒂法·洛克哈特)", label: "蒂法 Tifa (FF7)" },
        { value: "2B cosplay, black gothic mini dress with high slit, white wig bob cut, black blindfold visor, black thigh-high boots, katana (2B 尼爾)", label: "2B (NieR)" },
        { value: "Hatsune Miku cosplay, black and grey sleeveless top with teal accents, black mini skirt, teal detached sleeves, thigh-high black boots, turquoise twin tails (初音未來)", label: "初音未來 (Miku)" },
        { value: "Zero Two cosplay, red military uniform dress, white accents, black stockings, red horns headband, long pink hair (02 零二)", label: "零二 (02 DITF)" },
        { value: "Rem cosplay, blue and white maid dress, white headdress, short blue hair, black Mary Jane shoes (雷姆)", label: "雷姆 Rem (Re:Zero)" },
        { value: "Ram cosplay, pink and white maid dress, white headdress, short pink hair, black Mary Jane shoes (拉姆)", label: "拉姆 Ram (Re:Zero)" },
        { value: "Asuka cosplay, red and orange plugsuit bodysuit, neural connectors, red hair with interface headset (明日香)", label: "明日香 Asuka (EVA)" },
        { value: "Rei cosplay, white plugsuit bodysuit, blue hair short bob, red eyes, neural connectors (綾波零)", label: "綾波零 Rei (EVA)" },
        { value: "Sailor Moon cosplay, white leotard, blue pleated mini skirt, red bow, blonde twin tails with odango buns, red boots (美少女戰士)", label: "美少女戰士 (Sailor Moon)" },
        { value: "Chun-Li cosplay, blue qipao dress with gold trim, white combat boots, hair buns with silk covers, spiked bracelets (春麗)", label: "春麗 (Street Fighter)" },
        { value: "Mai Shiranui cosplay, red kunoichi outfit, white trim, ponytail with red ribbon, Japanese fan (不知火舞)", label: "不知火舞 (KOF)" },
        { value: "Makima cosplay, white long sleeve shirt, black tie, black pants, ringed eyes, braided red hair (瑪奇瑪)", label: "瑪奇瑪 Makima (CSM)" },
        { value: "Power cosplay, white shirt partially unbuttoned, black pants, red horns, blonde messy hair with bangs (乙女帕瓦)", label: "乙女帕瓦 Power (CSM)" },
        { value: "Yor Forger cosplay, black form-fitting dress with rose patterns, red earrings, black hair with headband, assassin style (乙女約爾)", label: "約爾 Yor (SPY×FAMILY)" },
        { value: "Marin Kitagawa cosplay, school uniform with loose tie, blonde hair, gyaru makeup, energetic expression (喜多川海夢)", label: "喜多川海夢 (My Dress-Up)" },
        // 原神 Genshin Impact
        { value: "Keqing cosplay, purple qipao-style dress with gold trim, twin tails with hair ornaments, purple eyes, electro vision (刻晴)", label: "刻晴 Keqing (原神)" },
        { value: "Ganyu cosplay, black bodysuit with white and blue accents, qilin horns, long blue gradient hair, cryo vision (甘雨)", label: "甘雨 Ganyu (原神)" },
        { value: "Hu Tao cosplay, red and black traditional Chinese outfit, twin tails with flower ornaments, hat, pyro vision (胡桃)", label: "胡桃 Hu Tao (原神)" },
        { value: "Raiden Shogun cosplay, purple kimono-style dress with electro motifs, long purple braid, resolute expression (雷電將軍)", label: "雷電將軍 Raiden (原神)" },
        { value: "Eula cosplay, blue and white noble outfit with cape, silver-blue hair in high ponytail, cryo vision (優菈)", label: "優菈 Eula (原神)" },
        { value: "Yae Miko cosplay, pink and white shrine maiden outfit, fox ears, long pink hair, electro vision (八重神子)", label: "八重神子 Yae (原神)" },
        { value: "Nahida cosplay, white and green dress with leaf motifs, long white hair with green tips, dendro archon (納西妲)", label: "納西妲 Nahida (原神)" },
        { value: "Furina cosplay, blue and white noble dress with hat, heterochromia eyes, twin tails, hydro archon (芙寧娜)", label: "芙寧娜 Furina (原神)" },
        { value: "Yelan cosplay, blue cheongsam with high slit, black shorts underneath, short blue hair, dice earring (夜蘭)", label: "夜蘭 Yelan (原神)" },
        { value: "Shenhe cosplay, white traditional Chinese outfit with red accents, long white hair, red rope binding, cryo (申鶴)", label: "申鶴 Shenhe (原神)" },
        // 崩壞系列 Honkai Series
        { value: "Kiana Kaslana cosplay, white battlesuit with blue accents, long white twin tails, Herrscher form (琪亞娜)", label: "琪亞娜 Kiana (崩壞3rd)" },
        { value: "Raiden Mei cosplay, purple battlesuit, long purple hair, katana, Herrscher of Thunder (雷電芽衣)", label: "雷電芽衣 Mei (崩壞3rd)" },
        { value: "Bronya Zaychik cosplay, grey military-style outfit, grey hair with hairpin, Project Bunny (布洛妮婭)", label: "布洛妮婭 Bronya (崩壞3rd)" },
        { value: "Seele Vollerei cosplay, purple and black gothic dress, twin tails with butterfly hairpins (希兒)", label: "希兒 Seele (崩壞3rd)" },
        { value: "Elysia cosplay, pink and white elegant outfit, long pink hair, elf ears, bow and arrow (愛莉希雅)", label: "愛莉希雅 Elysia (崩壞3rd)" },
        { value: "Kafka cosplay, purple business suit with black shirt, short purple hair, sunglasses, elegant (卡芙卡)", label: "卡芙卡 Kafka (星穹鐵道)" },
        { value: "Silver Wolf cosplay, grey hoodie with game motifs, purple hair, headphones, hacker style (銀狼)", label: "銀狼 Silver Wolf (星穹鐵道)" },
        { value: "Firefly cosplay, brown jacket, orange inner wear, short brown hair, Sam mecha pilot (流螢)", label: "流螢 Firefly (星穹鐵道)" },
        { value: "Black Swan cosplay, elegant black dress with feather motifs, long white hair, mysterious aura (黑天鵝)", label: "黑天鵝 Black Swan (星穹鐵道)" },
        { value: "Sparkle cosplay, colorful circus performer outfit, mask, playful twin tails (花火)", label: "花火 Sparkle (星穹鐵道)" },
        // 藍色檔案 Blue Archive
        { value: "Asuna Ichinose cosplay, blue blazer school uniform, long orange hair, halo above head, cheerful (飛鳥馬時)", label: "飛鳥馬時 Asuna (蔚藍檔案)" },
        { value: "Hoshino cosplay, grey hoodie, lazy expression, short pink hair, halo, sleepy eyes (星野)", label: "星野 Hoshino (蔚藍檔案)" },
        { value: "Shiroko cosplay, white and blue outfit, wolf ears, long white hair, halo, rifle (白子)", label: "白子 Shiroko (蔚藍檔案)" },
        { value: "Aru cosplay, red blazer uniform, long blonde hair with red ribbon, halo, self-proclaimed villain (阿露)", label: "阿露 Aru (蔚藍檔案)" },
        { value: "Iori cosplay, school uniform with long black hair, halo, serious expression, strategic mind (伊織)", label: "伊織 Iori (蔚藍檔案)" },
        { value: "Yuuka cosplay, calculator club uniform, green hair with glasses, halo, studious (優香)", label: "優香 Yuuka (蔚藍檔案)" },
        // 公主連結 Princess Connect
        { value: "Pecorine cosplay, white and orange princess dress with armor accents, long orange hair, tiara, sword (貪吃佩可)", label: "佩可莉姆 Pecorine (公主連結)" },
        { value: "Kokkoro cosplay, green and white elf outfit, long silver hair, elf ears, staff, gentle expression (可可蘿)", label: "可可蘿 Kokkoro (公主連結)" },
        { value: "Kyaru cosplay, black gothic dress, cat ears, long purple-black hair, tsundere expression (凱留)", label: "凱留 Kyaru (公主連結)" },
        { value: "Suzume cosplay, pink idol outfit, twin tails with ribbons, cheerful expression (鈴莓)", label: "鈴莓 Suzume (公主連結)" },
        { value: "Christina cosplay, red and black knight armor dress, long blonde hair, confident expression (克莉絲提娜)", label: "克莉絲提娜 Christina (公主連結)" },
        // 碧藍航線 Azur Lane
        { value: "Atago cosplay, black and red kimono-style dress, fluffy dog ears, long black hair, mature elegant (愛宕)", label: "愛宕 Atago (碧藍航線)" },
        { value: "Takao cosplay, blue and white military uniform, dog ears, long black ponytail, serious expression (高雄)", label: "高雄 Takao (碧藍航線)" },
        { value: "Enterprise cosplay, white and grey military coat, eagle motif, silver hair, confident pose (企業)", label: "企業 Enterprise (碧藍航線)" },
        { value: "Belfast cosplay, classic maid uniform with blue accents, silver hair, elegant demeanor (貝爾法斯特)", label: "貝爾法斯特 Belfast (碧藍航線)" },
        { value: "Illustrious cosplay, white dress with blue ribbons, large hat, white hair, gentle smile (光輝)", label: "光輝 Illustrious (碧藍航線)" },
        { value: "Sirius cosplay, revealing maid outfit, large ribbon, silver-blue hair, shy expression (天狼星)", label: "天狼星 Sirius (碧藍航線)" },
        { value: "Formidable cosplay, black gothic lolita dress, twin tails with black ribbons, tsundere (可畏)", label: "可畏 Formidable (碧藍航線)" },
        { value: "Shinano cosplay, white and red shrine maiden outfit, fox ears and tail, long white hair, sleepy eyes (信濃)", label: "信濃 Shinano (碧藍航線)" },
        // 明日方舟 Arknights
        { value: "Amiya cosplay, grey hoodie with blue accents, rabbit ears, brown hair, determined eyes (阿米婭)", label: "阿米婭 Amiya (明日方舟)" },
        { value: "Texas cosplay, black suit with red tie, wolf ears and tail, grey hair, cool expression (德克薩斯)", label: "德克薩斯 Texas (明日方舟)" },
        { value: "Exusiai cosplay, white and red outfit with halo, angel wings, orange hair, energetic smile (能天使)", label: "能天使 Exusiai (明日方舟)" },
        { value: "Surtr cosplay, black bodysuit with red accents, demon horns, long red-black hair, intense gaze (史爾特爾)", label: "史爾特爾 Surtr (明日方舟)" },
        { value: "Ch'en cosplay, blue qipao-style uniform, dragon horns, long blue hair, stern expression (陳)", label: "陳 Ch'en (明日方舟)" },
        { value: "Blaze cosplay, orange and black combat outfit, cat ears, orange hair, fierce expression (煌)", label: "煌 Blaze (明日方舟)" },
        { value: "Skadi cosplay, black and purple outfit, orca tail, white hair, melancholic expression (斯卡蒂)", label: "斯卡蒂 Skadi (明日方舟)" },
        { value: "Kal'tsit cosplay, white doctor coat, cat ears, long green hair, cold expression (凱爾希)", label: "凱爾希 Kal'tsit (明日方舟)" },
        // 少女前線 Girls' Frontline
        { value: "UMP45 cosplay, grey tactical outfit, short grey hair with side ponytail, eyepatch, smug smile (UMP45)", label: "UMP45 (少女前線)" },
        { value: "UMP9 cosplay, grey tactical outfit, twin tails, cheerful expression, energetic (UMP9)", label: "UMP9 (少女前線)" },
        { value: "M4A1 cosplay, black tactical vest, brown hair with green ribbon, serious expression (M4A1)", label: "M4A1 (少女前線)" },
        { value: "416 cosplay, black tactical outfit, long silver hair, tsundere expression (HK416)", label: "HK416 (少女前線)" },
        { value: "WA2000 cosplay, red and black outfit, twin tails with red ribbons, tsundere (WA2000)", label: "WA2000 (少女前線)" },
        { value: "Springfield cosplay, elegant maid-style dress, long brown hair, gentle smile (春田)", label: "春田 Springfield (少女前線)" },
        // FGO Fate/Grand Order
        { value: "Mash Kyrielight cosplay, purple bodysuit with armor, pink short hair, shield, determined (瑪修)", label: "瑪修 Mash (FGO)" },
        { value: "Artoria Pendragon cosplay, blue and white dress with armor, blonde hair in bun, regal (阿爾托莉雅)", label: "阿爾托莉雅 Saber (FGO)" },
        { value: "Jeanne d'Arc cosplay, silver armor with blue cape, long blonde braid, holy aura (貞德)", label: "貞德 Jeanne (FGO)" },
        { value: "Scathach cosplay, purple bodysuit, long purple hair, red eyes, warrior pose (斯卡哈)", label: "斯卡哈 Scathach (FGO)" },
        { value: "Ishtar cosplay, red and black two-piece outfit, black twin tails with red ribbons, goddess (伊絲塔)", label: "伊絲塔 Ishtar (FGO)" },
        { value: "Ereshkigal cosplay, black dress with gold accents, blonde twin tails, underworld goddess (艾蕾)", label: "艾蕾 Ereshkigal (FGO)" },
        { value: "Tamamo no Mae cosplay, blue and white kimono, fox ears and tail, pink hair, playful (玉藻前)", label: "玉藻前 Tamamo (FGO)" },
        { value: "BB cosplay, red jacket over black dress, purple hair, mischievous smile, AI kouhai (BB)", label: "BB (FGO)" },
        // 勝利女神 NIKKE
        { value: "Rapi cosplay, black military uniform with red accents, short black hair, serious expression (拉毗)", label: "拉毗 Rapi (NIKKE)" },
        { value: "Anis cosplay, orange and white outfit, long orange hair, cheerful energetic (阿妮絲)", label: "阿妮絲 Anis (NIKKE)" },
        { value: "Neon cosplay, blue and white idol outfit, blue hair with highlights, idol pose (霓虹)", label: "霓虹 Neon (NIKKE)" },
        { value: "Modernia cosplay, black tactical suit, long white hair, red eyes, mysterious (摩登妮雅)", label: "摩登妮雅 Modernia (NIKKE)" },
        { value: "2B NIKKE cosplay, black gothic dress, white wig bob cut, blindfold, collaboration (2B NIKKE)", label: "2B (NIKKE聯動)" },
        { value: "Red Hood cosplay, red cloak and dress, long silver hair, rifle, fairy tale style (紅帽)", label: "紅帽 Red Hood (NIKKE)" },
        { value: "Snow White cosplay, white and blue elegant dress, long white hair, princess style (白雪)", label: "白雪 Snow White (NIKKE)" },
        { value: "Scarlet cosplay, red and black sexy outfit, long red hair, confident seductive pose (斯佳蕾)", label: "斯佳蕾 Scarlet (NIKKE)" },
        // 特殊角色 Special Characters
        { value: "Princess costume, pink ball gown, tiara, long gloves, glass slippers (公主裝)", label: "公主裝 (Princess)" },
        { value: "Pirate wench costume, corset top, ragged skirt, bandana, boots (海盜女郎)", label: "海盜女郎 (Pirate Wench)" },
        { value: "Cowgirl costume, plaid shirt tied at waist, denim shorts, cowboy hat, boots (牛仔女郎)", label: "牛仔女郎 (Cowgirl)" },
        { value: "Schoolgirl zombie costume, torn uniform, fake blood, disheveled look (殭屍女學生)", label: "殭屍女學生 (Zombie Schoolgirl)" }
    ],

    // === 運動服飾 (Sportswear) ===
    sportswear: [
        // 網球高爾夫 Tennis & Golf
        { value: "White polo shirt, white pleated tennis mini skirt, white visor cap, white ankle socks, white tennis shoes (網球選手)", label: "網球選手 (Tennis Player)" },
        { value: "Pink tennis dress, built-in shorts, white visor, white sneakers (粉紅網球裙)", label: "粉紅網球裙 (Pink Tennis Dress)" },
        { value: "Navy blue tennis outfit, pleated skort, matching top, white shoes (海軍藍網球裝)", label: "海軍藍網球裝 (Navy Tennis)" },
        { value: "Pink polo shirt, white pleated golf skirt, white visor, white ankle socks, white golf shoes (高爾夫服)", label: "高爾夫服 (Golf Outfit)" },
        { value: "White golf dress, A-line silhouette, sporty elegant, white golf shoes (高爾夫連身裙)", label: "高爾夫連身裙 (Golf Dress)" },
        // 瑜伽健身 Yoga & Fitness
        { value: "Grey sports bra, high-waisted black leggings, athletic fit, hair in ponytail, barefoot on yoga mat (瑜伽服)", label: "瑜伽服 (Yoga Outfit)" },
        { value: "Pastel purple sports bra, matching lavender leggings, zen style, barefoot (薰衣草瑜伽套)", label: "薰衣草瑜伽套 (Lavender Yoga)" },
        { value: "Black seamless sports set, long sleeve crop top, high-waisted shorts, minimal (黑色無縫運動套)", label: "黑色無縫運動套 (Black Seamless)" },
        { value: "Sage green workout set, cropped tank, bike shorts, white sneakers (莫蘭迪綠健身套)", label: "莫蘭迪綠健身套 (Sage Green Workout)" },
        { value: "Hot pink sports bra, black high-waisted leggings, energetic gym look, white trainers (桃紅健身風)", label: "桃紅健身風 (Hot Pink Gym)" },
        // 跑步田徑 Running & Track
        { value: "Pink tank top, black running shorts, armband phone holder, white running socks, pink running shoes (跑步服)", label: "跑步服 (Running Outfit)" },
        { value: "Neon yellow running top, black compression shorts, reflective details, running shoes (螢光跑步裝)", label: "螢光跑步裝 (Neon Running)" },
        { value: "Light blue running dress, built-in shorts, breathable fabric, white running shoes (跑步連身裙)", label: "跑步連身裙 (Running Dress)" },
        { value: "Track and field uniform, crop top and briefs, racing number, track spikes (田徑比賽服)", label: "田徑比賽服 (Track Racing)" },
        // 舞蹈體操 Dance & Gymnastics
        { value: "Pink ballet leotard, matching pink tutu skirt, pink ballet tights, pink satin pointe shoes, hair in bun (舞蹈服)", label: "舞蹈服 (Dance Leotard)" },
        { value: "Black leotard, sheer mesh skirt overlay, ballet slippers, elegant practice (黑色芭蕾練習服)", label: "黑色芭蕾練習服 (Black Ballet)" },
        { value: "Sparkly gymnastics leotard, competition style, barefoot (亮片體操服)", label: "亮片體操服 (Sparkly Gymnastics)" },
        { value: "Rhythmic gymnastics unitard, flowing ribbon accessory, barefoot (藝術體操服)", label: "藝術體操服 (Rhythmic Gymnastics)" },
        { value: "Jazz dance outfit, black crop top, high-waisted jazz pants, dance heels (爵士舞服)", label: "爵士舞服 (Jazz Dance)" },
        // 水上運動 Water Sports
        { value: "White and blue striped swimsuit one-piece, swim cap, swimming goggles, athletic swimmer body, barefoot by pool (競泳選手)", label: "競泳選手 (Swimmer)" },
        { value: "Surfing rash guard, long sleeve top, bikini bottom, barefoot on beach (衝浪防磨衣)", label: "衝浪防磨衣 (Surf Rash Guard)" },
        { value: "Diving suit, wetsuit style, zipper front, barefoot (潛水服)", label: "潛水服 (Diving Suit)" },
        // 啦啦隊 Cheerleading
        { value: "Red and white cheerleader uniform, crop top, pleated mini skirt, pom poms, white sneakers (啦啦隊制服紅白)", label: "啦啦隊制服紅白 (Cheer Red White)" },
        { value: "Blue and gold cheerleader outfit, matching bow, white cheer shoes (藍金啦啦隊)", label: "藍金啦啦隊 (Cheer Blue Gold)" },
        // 其他運動 Other Sports
        { value: "Volleyball uniform, tight jersey top, spandex shorts, knee pads, athletic shoes (排球服)", label: "排球服 (Volleyball)" },
        { value: "Boxing outfit, sports bra, boxing shorts, hand wraps, bare feet (拳擊服)", label: "拳擊服 (Boxing Outfit)" }
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
        { value: "Beige sweater vest, white long-sleeved shirt, red tie, plaid mini skirt, sheer pantyhose, white low-heel slingback shoes, J-pop idol style (米色針織背心學院風)", label: "🇯🇵 米色針織背心學院風 (Beige Vest JK)" },
        { value: "Black sailor uniform with red trim, black tights, chunky loafers, classic seifuku style (黑色紅邊水手服)", label: "🇯🇵 黑色紅邊水手服 (Black Sailor Red Trim)" },
        { value: "Brown Japanese school blazer, light brown cardigan, white shirt, plaid mini skirt, black mid-calf socks, black loafers (棕色西裝外套學院風)", label: "🇯🇵 棕色西裝外套學院風 (Brown Blazer JK)" },
        { value: "Grey skirt, black thigh-high socks, white blouse, school uniform style (灰裙黑膝上襪制服)", label: "🇯🇵 灰裙黑膝上襪制服 (Grey Skirt Thigh Highs)" },
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
        // 維多利亞優雅風 Victorian Elegant Style
        { value: "Black lace camisole, light grey ruffled bolero cardigan, black and white striped tiered mini skirt, black sheer pantyhose, black ribbon hair clip, gold necklace, black handbag (維多利亞蕾絲條紋裙)", label: "🇪🇺 維多利亞蕾絲條紋裙 (Victorian Lace Stripe)" },
        { value: "Cream lace blouse with high collar, black velvet ribbon choker, blush pink layered tulle skirt, nude heels (維多利亞蕾絲高領)", label: "🇪🇺 維多利亞蕾絲高領 (Victorian High Collar)" },
        { value: "White ruffle front blouse with puff sleeves, black corset waist belt, black A-line midi skirt, black ankle boots (維多利亞荷葉邊襯衫)", label: "🇪🇺 維多利亞荷葉邊襯衫 (Victorian Ruffle Blouse)" },
        // 韓系約會穿搭 Korean Date Outfits
        { value: "Light pink slip dress, white cardigan draped shoulders, pearl accessories, nude heels (約會吊帶裙)", label: "🇰🇷 約會吊帶裙 (Date Slip Dress)" },
        { value: "White square neck puff sleeve top, lavender A-line mini skirt, white strappy heels (方領泡泡袖)", label: "🇰🇷 方領泡泡袖 (Square Neck Puff)" },
        { value: "Soft blue knit set, cropped top and mini skirt, pearl earrings, white mules (藍色針織套裝)", label: "🇰🇷 藍色針織套裝 (Blue Knit Set)" },
        { value: "Ruched bodycon mini dress, thin straps, nude heels, delicate jewelry (抓皺緊身裙)", label: "🇰🇷 抓皺緊身裙 (Ruched Bodycon)" },
        { value: "Floral wrap mini dress, V-neck, puff sleeves, nude block heels (碎花裹身短裙)", label: "🇰🇷 碎花裹身短裙 (Floral Wrap Mini)" },
        { value: "White eyelet lace mini dress, romantic feminine, nude sandals (蕾絲鏤空洋裝)", label: "🇰🇷 蕾絲鏤空洋裝 (Eyelet Lace Dress)" },
        { value: "Off-shoulder ribbed top, satin mini skirt, strappy heels, elegant date look (一字領緞面裙)", label: "🇰🇷 一字領緞面裙 (Off-shoulder Satin)" },
        // 精緻小香風 Elegant Chanel Style
        { value: "Cream white tweed jacket with black trim and gold buttons, black pleated mini skirt, barefoot, elegant fashion lookbook style (奶油白粗花呢外套黑裙)", label: "🇰🇷 奶油白粗花呢外套黑裙 (Cream Tweed Jacket)" },
        { value: "Black tweed jacket with gold buttons, matching black tweed mini skirt, pearl necklace, black heels (黑色小香風套裝)", label: "🇰🇷 黑色小香風套裝 (Black Tweed Set)" },
        { value: "White tweed cropped jacket, high-waisted A-line skirt, pearl earrings, nude pumps (白色粗花呢短外套)", label: "🇰🇷 白色粗花呢短外套 (White Cropped Tweed)" },
        // OL性感風 Sexy Office Style
        { value: "Black satin blouse with pussy bow tie, bright red high-waisted mini skirt, sheer black pantyhose, black patent leather stilettos, modern office style (黑緞面蝴蝶結領紅裙)", label: "🇰🇷 黑緞面蝴蝶結領紅裙 (Satin Bow Red Skirt)" },
        { value: "White satin blouse, black pencil skirt with side slit, sheer stockings, black heels (白緞面襯衫開衩裙)", label: "🇰🇷 白緞面襯衫開衩裙 (Satin Blouse Slit Skirt)" },
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
    { value: "Cowl neck satin top, date night ready (垂領緞面上衣)", label: "📸 垂領緞面上衣 (Cowl Satin)" },
    // === 🌸 微透上衣 Subtle Sheer Tops ===
    { value: "White thin knit sweater, bra faintly visible through fabric, subtle sheer effect (微透白色針織衫)", label: "🌸 微透白色針織衫 (Subtle White Knit)" },
    { value: "Cream sheer knit top, skin tone barely visible, delicate texture (奶油色薄針織)", label: "🌸 奶油色薄針織 (Cream Sheer Knit)" },
    { value: "Light pink chiffon blouse, bra silhouette hint, soft romantic (粉色薄雪紡)", label: "🌸 粉色薄雪紡 (Pink Chiffon)" },
    { value: "Off-white lace-trim camisole, subtle peek-a-boo lace edges (蕾絲邊細肩帶)", label: "🌸 蕾絲邊細肩帶 (Lace Trim Cami)" },
    { value: "Lavender gauze blouse, dreamy translucent, modest yet alluring (薰衣草薄紗上衣)", label: "🌸 薰衣草薄紗上衣 (Lavender Gauze)" },
    { value: "White ribbed tank, thin fabric showing bra outline, casual chic (薄款羅紋背心)", label: "🌸 薄款羅紋背心 (Thin Ribbed Tank)" },
    { value: "Beige mesh-panel top, strategic sheer inserts, elegant (網紗拼接上衣)", label: "🌸 網紗拼接上衣 (Mesh Panel Top)" },
    { value: "Ivory silk blouse, light filtering through fabric, refined subtle (象牙絲質襯衫)", label: "🌸 象牙絲質襯衫 (Ivory Silk Blouse)" }
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
    // ═══════════════════════════════════════
    // 🏮 旗袍鞋款 Qipao Style Heels
    // 專為旗袍、漢服、和服等東方風格設計
    // ═══════════════════════════════════════
    qipao_heels: [
        { value: "Red silk high heels, elegant pointed toe (紅色絲質高跟鞋)", label: "紅色絲質高跟鞋 (Red Silk Heels)" },
        { value: "White strappy heels, delicate ankle straps (白色綁帶高跟鞋)", label: "白色綁帶高跟鞋 (White Strappy)" },
        { value: "Black velvet pumps, classic elegant (黑色絲絨高跟鞋)", label: "黑色絲絨高跟鞋 (Black Velvet Pumps)" },
        { value: "White satin heels, lustrous finish (白色緞面高跟鞋)", label: "白色緞面高跟鞋 (White Satin)" },
        { value: "Nude high heels, skin tone elegant (裸色高跟鞋)", label: "裸色高跟鞋 (Nude Heels)" },
        { value: "Black stiletto heels, sleek pointed (黑色細跟高跟鞋)", label: "黑色細跟高跟鞋 (Black Stilettos)" },
        { value: "Black strappy sandal heels, sexy elegant (黑色綁帶涼鞋高跟)", label: "黑色綁帶涼鞋高跟 (Black Strappy Sandals)" },
        { value: "Gold strappy heels, luxurious glamour (金色綁帶高跟鞋)", label: "金色綁帶高跟鞋 (Gold Strappy)" },
        { value: "Red pointed toe pumps, classic cheongsam style (紅色尖頭高跟鞋)", label: "紅色尖頭高跟鞋 (Red Pointed Pumps)" },
        { value: "Champagne satin heels, subtle shimmer (香檳色緞面高跟鞋)", label: "香檳色緞面高跟鞋 (Champagne Satin)" },
        { value: "Pearl embellished heels, oriental elegance (珍珠裝飾高跟鞋)", label: "珍珠裝飾高跟鞋 (Pearl Embellished)" },
        { value: "Embroidered silk heels, traditional craft (刺繡絲質高跟鞋)", label: "刺繡絲質高跟鞋 (Embroidered Silk)" }
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
        // 基本款 Basic Styles
        { value: "Micro mini skirt (超短迷你裙)", label: "超短迷你裙 (Micro Mini)" },
        { value: "Pleated mini skirt (百褶迷你裙)", label: "百褶迷你裙 (Pleated Mini)" },
        { value: "A-line mini skirt (A字迷你裙)", label: "A字迷你裙 (A-line Mini)" },
        { value: "Bodycon mini skirt (緊身迷你裙)", label: "緊身迷你裙 (Bodycon Mini)" },
        // 牛仔系列 Denim Series
        { value: "Denim mini skirt (牛仔迷你裙)", label: "牛仔迷你裙 (Denim Mini)" },
        { value: "Low-rise denim mini skirt (低腰牛仔裙)", label: "低腰牛仔裙 (Low-rise Y2K)" },
        { value: "Distressed denim mini skirt (破損牛仔迷你裙)", label: "破損牛仔迷你裙 (Distressed Denim)" },
        { value: "White denim mini skirt (白色牛仔迷你裙)", label: "白色牛仔迷你裙 (White Denim Mini)" },
        // 材質特色 Special Materials
        { value: "Leather mini skirt (皮質迷你裙)", label: "皮質迷你裙 (Leather Mini)" },
        { value: "PU leather mini skirt (PU皮迷你裙)", label: "PU皮迷你裙 (PU Leather Mini)" },
        { value: "Black velvet mini skirt (黑色絲絨短裙)", label: "黑色絲絨短裙 (Black Velvet)" },
        { value: "Satin slip skirt (緞面短裙)", label: "緞面短裙 (Satin Slip)" },
        { value: "Metallic mini skirt (金屬光澤裙)", label: "金屬光澤裙 (Metallic)" },
        { value: "Sequin mini skirt (亮片迷你裙)", label: "亮片迷你裙 (Sequin Mini)" },
        { value: "Mesh overlay mini skirt (網紗迷你裙)", label: "網紗迷你裙 (Mesh Mini)" },
        // 設計款 Design Features
        { value: "Ruffled mini skirt (荷葉邊迷你裙)", label: "荷葉邊迷你裙 (Ruffled Mini)" },
        { value: "Lace tiered skirt (蕾絲蛋糕裙)", label: "蕾絲蛋糕裙 (Lace Tiered)" },
        { value: "Checkered pleated skirt (格紋百褶裙)", label: "格紋百褶裙 (Schoolgirl Check)" },
        { value: "Tartan plaid mini skirt (蘇格蘭格紋裙)", label: "蘇格蘭格紋裙 (Tartan Plaid)" },
        { value: "Slit mini skirt (開衩迷你裙)", label: "開衩迷你裙 (Slit Mini)" },
        { value: "Wrap mini skirt (一片式圍裹裙)", label: "一片式短裙 (Wrap Mini)" },
        { value: "Button-front mini skirt (排扣迷你裙)", label: "排扣迷你裙 (Button-front Mini)" },
        { value: "Zipper detail mini skirt (拉鍊裝飾迷你裙)", label: "拉鍊裝飾迷你裙 (Zipper Detail)" },
        // 甜美可愛 Sweet & Cute
        { value: "Tulle mini skirt (紗裙迷你)", label: "紗裙迷你 (Tulle Mini)" },
        { value: "Bow detail mini skirt (蝴蝶結迷你裙)", label: "蝴蝶結迷你裙 (Bow Detail Mini)" },
        { value: "Heart buckle mini skirt (愛心扣環裙)", label: "愛心扣環裙 (Heart Buckle)" },
        { value: "Suspender mini skirt (吊帶迷你裙)", label: "吊帶迷你裙 (Suspender Mini)" },
        { value: "Floral print mini skirt (碎花迷你裙)", label: "碎花迷你裙 (Floral Mini)" },
        // 性感款 Sexy Styles
        { value: "Skirt with garter straps (吊襪帶短裙)", label: "吊襪帶短裙 (Garter Skirt)" },
        { value: "Lace-up mini skirt (綁帶迷你裙)", label: "綁帶迷你裙 (Lace-up Mini)" },
        { value: "Cut-out mini skirt (挖空迷你裙)", label: "挖空迷你裙 (Cut-out Mini)" },
        { value: "Chain detail mini skirt (鏈條裝飾迷你裙)", label: "鏈條裝飾迷你裙 (Chain Detail)" }
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
    ],
    // === 🌸 微透下裝 Subtle Sheer Bottoms ===
    subtle_sheer: [
        { value: "White layered tulle skirt, semi-opaque multiple layers, silhouette hint only (多層次白紗裙)", label: "🌸 多層次白紗裙 (Layered Tulle)" },
        { value: "Light pink chiffon midi skirt, flowing, subtle skin glow underneath (粉色雪紡中長裙)", label: "🌸 粉色雪紡中長裙 (Pink Chiffon Midi)" },
        { value: "Ivory lace A-line skirt, lining visible through delicate pattern (象牙蕾絲A字裙)", label: "🌸 象牙蕾絲A字裙 (Ivory Lace A-line)" },
        { value: "White eyelet mini skirt, subtle peek through embroidered holes (繡花鏤空短裙)", label: "🌸 繡花鏤空短裙 (Eyelet Mini)" },
        { value: "Cream organza wrap skirt, dreamy layered, modest sheer (奶油歐根紗裹裙)", label: "🌸 奶油歐根紗裹裙 (Cream Organza Wrap)" },
        { value: "Lavender pleated chiffon skirt, light filtering through folds (薰衣草雪紡百褶)", label: "🌸 薰衣草雪紡百褶 (Lavender Chiffon Pleated)" },
        { value: "White mesh overlay mini, solid lining with sheer top layer (網紗疊層短裙)", label: "🌸 網紗疊層短裙 (Mesh Overlay Mini)" },
        { value: "Pale blue gauze maxi skirt, ethereal, gentle transparency (淺藍薄紗長裙)", label: "🌸 淺藍薄紗長裙 (Pale Blue Gauze Maxi)" }
    ]
};
