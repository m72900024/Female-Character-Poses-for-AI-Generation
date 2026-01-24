export const stageDatabase = {
    // === 私密空間 (Private Spaces) ===
    private: [
        // 臥室系列 Bedroom Series
        { value: "Cozy bedroom with unmade bed, morning light (溫馨臥室)", label: "溫馨臥室 (Bedroom)", props: "unmade bed, soft pillows, warm lamp, plush rug, alarm clock" },
        { value: "Minimalist white bedroom, clean aesthetic, natural light (極簡白色臥室)", label: "極簡白色臥室 (Minimalist Bedroom)", props: "white bedding, simple nightstand, sheer curtains, potted plant" },
        { value: "Romantic pink bedroom, fairy lights, soft textures (粉紅浪漫臥室)", label: "粉紅浪漫臥室 (Pink Romantic)", props: "pink bedding, fairy lights, plush toys, vanity mirror" },
        { value: "Luxury master bedroom, king bed, chandelier (豪華主臥)", label: "豪華主臥 (Luxury Master)", props: "king bed, chandelier, velvet curtains, elegant furniture" },
        { value: "Japanese style bedroom, futon on tatami, shoji screens (日式寢室)", label: "日式寢室 (Japanese Bedroom)", props: "futon, tatami mats, shoji screens, paper lantern" },
        // 浴室系列 Bathroom Series
        { value: "Modern bathroom with glass shower, steam (現代浴室)", label: "現代浴室 (Bathroom)", props: "glass shower, fluffy towels, mirror, steam, bath products" },
        { value: "Luxury spa bathroom, freestanding tub, candles (Spa浴室)", label: "Spa浴室 (Spa Bathroom)", props: "freestanding bathtub, candles, rose petals, bath salts" },
        { value: "Vintage clawfoot tub bathroom, tiles (復古浴室)", label: "復古浴室 (Vintage Bath)", props: "clawfoot tub, hexagon tiles, vintage faucet, towel rack" },
        // 飯店系列 Hotel Series
        { value: "Luxury hotel suite, floor-to-ceiling windows, city view (豪華飯店套房)", label: "豪華飯店套房 (Hotel Suite)", props: "king size bed, champagne bucket, city view window, luggage" },
        { value: "Boutique hotel room, designer furniture, mood lighting (精品旅館)", label: "精品旅館 (Boutique Hotel)", props: "designer chair, unique decor, ambient lighting" },
        { value: "Love hotel room, neon mood lighting, mirrors (愛情旅館)", label: "愛情旅館 (Love Hotel)", props: "round bed, mirrors, neon lights, karaoke machine" },
        { value: "Traditional ryokan room, tatami, garden view (日式旅館)", label: "日式旅館 (Ryokan)", props: "tatami, low table, garden view, green tea set" },
        // 居家空間 Home Spaces
        { value: "Messy artist loft, easel, paint supplies (藝術家閣樓)", label: "藝術家閣樓 (Artist Loft)", props: "easel, canvas, paint tubes, brushes, messy apron" },
        { value: "Japanese tatami room, sliding doors, tea set (日式榻榻米房)", label: "日式榻榻米 (Tatami Room)", props: "low tea table, floor cushions (zabuton), hanging scroll, sliding doors" },
        { value: "Walk-in closet with mirrors and clothes (更衣間)", label: "更衣間 (Walk-in Closet)", props: "full-length mirror, hanging clothes, shoe rack, jewelry box" },
        { value: "Sunlit balcony with plants, railing (陽台)", label: "陽台 (Balcony)", props: "potted plants, railing, patio chair, sunlight" },
        { value: "Kitchen with marble island, cooking utensils (現代廚房)", label: "現代廚房 (Kitchen)", props: "marble island, knife set, cutting board, fresh fruit" },
        { value: "Cozy living room, sofa, fireplace, warm light (溫馨客廳)", label: "溫馨客廳 (Living Room)", props: "sofa, fireplace, coffee table, blanket, cushions" },
        { value: "Home office, desk, bookshelf, laptop (居家辦公室)", label: "居家辦公室 (Home Office)", props: "desk, bookshelf, laptop, desk lamp, coffee mug" },
        // 泳池系列 Pool Series
        { value: "Indoor swimming pool, blue tiles (室內泳池)", label: "室內泳池 (Indoor Pool)", props: "blue water, pool ladder, lounge chair, towel" },
        { value: "Rooftop infinity pool, city skyline (頂樓無邊際泳池)", label: "頂樓無邊際泳池 (Infinity Pool)", props: "infinity edge, city skyline, lounge beds, cocktails" },
        { value: "Private villa pool, tropical garden (私人別墅泳池)", label: "私人別墅泳池 (Villa Pool)", props: "palm trees, pool float, tropical plants, cabana" }
    ],

    // === 都市場景 (Urban Spaces) ===
    urban: [
        // 街頭系列 Street Series
        { value: "Busy Tokyo street crossing, neon signs, rain (東京街頭)", label: "東京街頭 (Tokyo Street)", props: "neon signs, traffic lights, crosswalk, umbrella" },
        { value: "Seoul Hongdae street, K-pop posters, trendy shops (首爾弘大)", label: "首爾弘大 (Seoul Hongdae)", props: "K-pop posters, trendy stores, street food, colorful signs" },
        { value: "Taipei night market street, food stalls, crowds (台北夜市)", label: "台北夜市 (Night Market)", props: "food stalls, lanterns, crowds, steam from cooking" },
        { value: "European cobblestone street, old buildings, cafe (歐洲石板街)", label: "歐洲石板街 (European Street)", props: "cobblestones, old buildings, outdoor cafe, flower boxes" },
        { value: "Neon lit cyberpunk alleyway, rain puddles (霓虹巷弄)", label: "霓虹巷弄 (Neon Alley)", props: "trash can, posters, puddles, neon glow" },
        { value: "Graffiti covered urban alley, street art (塗鴉巷弄)", label: "塗鴉巷弄 (Graffiti Alley)", props: "graffiti walls, trash bins, fire escape, street art" },
        // 交通系列 Transportation
        { value: "Subway station platform, tiles, commuters (地鐵站)", label: "地鐵站 (Subway Station)", props: "subway tiles, handle straps, bench, vending machine" },
        { value: "Train interior, window seat, passing scenery (電車內)", label: "電車內 (Train Interior)", props: "window seat, handle straps, passing scenery, other passengers" },
        { value: "Airport terminal, large windows, departure board (機場航廈)", label: "機場航廈 (Airport)", props: "large windows, departure board, luggage, airplanes" },
        // 商業空間 Commercial Spaces
        { value: "Rooftop bar at night, city skyline bokeh (頂樓酒吧)", label: "頂樓酒吧 (Rooftop Bar)", props: "cocktail glass, bar stool, city lights, glass railing" },
        { value: "Convenience store interior, colorful shelves (便利商店)", label: "便利商店 (Convenience Store)", props: "shelves with snacks, refrigerator, magazine rack" },
        { value: "Trendy cafe, latte art, window seat (咖啡廳)", label: "咖啡廳 (Cafe)", props: "coffee cup, laptop, wooden table, window view" },
        { value: "Upscale restaurant, dim lighting, wine glasses (高級餐廳)", label: "高級餐廳 (Fine Dining)", props: "wine glasses, white tablecloth, candles, elegant decor" },
        { value: "Ramen shop counter, steam, lanterns (拉麵店)", label: "拉麵店 (Ramen Shop)", props: "ramen bowl, chopsticks, paper lanterns, counter seats" },
        // 學校辦公 School & Office
        { value: "Classroom with chalkboard, desks (教室)", label: "教室 (Classroom)", props: "chalkboard, wooden desks, chairs, textbook" },
        { value: "University campus, cherry blossoms, buildings (大學校園)", label: "大學校園 (Campus)", props: "cherry blossoms, buildings, benches, students" },
        { value: "School rooftop, fence, blue sky (學校天台)", label: "學校天台 (School Rooftop)", props: "chain fence, blue sky, ventilation units, bench" },
        { value: "Modern office, glass walls, computers (現代辦公室)", label: "現代辦公室 (Modern Office)", props: "glass walls, computers, office chairs, plants" },
        { value: "Office copy room, large copier machine, bright fluorescent lighting, office furniture, window natural light (辦公室影印室)", label: "辦公室影印室 (Office Copy Room)", props: "copy machine, paper trays, filing cabinets, bright office lighting" },
        { value: "Industrial style corridor, concrete ceiling, exposed pipes red and grey, large window openings, modern urban feel (工業風走廊)", label: "工業風走廊 (Industrial Corridor)", props: "concrete walls, exposed pipes, large windows, metal railings, urban lighting" },
        { value: "Library interior, tall bookshelves, reading tables, quiet atmosphere (圖書館)", label: "圖書館 (Library)", props: "tall bookshelves, reading tables, desk lamps, old books, wooden ladders" },
        { value: "White seamless cyclorama studio, clean backdrop, professional lighting (白色攝影棚)", label: "白色攝影棚 (White Studio)", props: "seamless white backdrop, studio lights, yellow aesthetic chair" },
        { value: "Snowy train platform, falling snow, railway tracks, winter romance (雪地月台)", label: "雪地月台 (Snowy Platform)", props: "snow, railway tracks, platform shelter, winter scenery, train" },
        // 運動健身 Sports & Fitness
        { value: "Gym with workout equipment, mirrors (健身房)", label: "健身房 (Gym)", props: "dumbbell, treadmill, yoga mat, mirror wall" },
        { value: "Dance studio, wooden floor, mirrors (舞蹈教室)", label: "舞蹈教室 (Dance Studio)", props: "ballet barre, mirrors, wooden floor, speaker" },
        { value: "Indoor basketball court, scoreboard (室內籃球場)", label: "室內籃球場 (Basketball Court)", props: "basketball hoop, scoreboard, bench, water bottles" }
    ],

    // === 自然場景 (Nature Spaces) ===
    nature: [
        // 海灘系列 Beach Series
        { value: "Sunny beach, white sand, turquoise ocean (陽光沙灘)", label: "陽光沙灘 (Beach)", props: "palm tree, sea shells, beach towel, parasol" },
        { value: "Sunset beach, golden light, waves (夕陽沙灘)", label: "夕陽沙灘 (Sunset Beach)", props: "golden light, waves, silhouette, romantic mood" },
        { value: "Tropical beach resort, palm trees, clear water (熱帶海灘度假村)", label: "熱帶海灘度假村 (Tropical Resort)", props: "palm trees, hammock, clear water, beach bar" },
        { value: "Rocky beach, tide pools, dramatic sky (岩石海岸)", label: "岩石海岸 (Rocky Beach)", props: "rocks, tide pools, dramatic sky, seaweed" },
        // 森林山區 Forest & Mountain
        { value: "Deep forest path, sunlight through trees (森林小徑)", label: "森林小徑 (Forest)", props: "tall trees, ferns, fallen leaves, sunlight beams" },
        { value: "Bamboo grove, green light, stone path (竹林)", label: "竹林 (Bamboo Grove)", props: "bamboo stalks, stone lantern, fallen leaves" },
        { value: "Cherry blossom park, pink petals falling (櫻花公園)", label: "櫻花公園 (Sakura Park)", props: "cherry trees, pink petals, bench, picnic blanket" },
        { value: "Autumn maple forest, red and orange leaves (楓葉林)", label: "楓葉林 (Maple Forest)", props: "red maple leaves, fallen leaves, wooden bridge" },
        { value: "Snowy mountain landscape, pine trees (雪山)", label: "雪山 (Snowy Mountain)", props: "pine trees, snow, ski tracks" },
        { value: "Mountain hot spring, steam, autumn leaves (山中溫泉)", label: "山中溫泉 (Mountain Hot Spring)", props: "steam, rocks, autumn leaves, wooden fence" },
        // 田園花海 Fields & Flowers
        { value: "Field of sunflowers, blue sky (向日葵花田)", label: "向日葵花田 (Flower Field)", props: "sunflowers, blue sky, straw hat" },
        { value: "Lavender field, purple rows, bees (薰衣草田)", label: "薰衣草田 (Lavender Field)", props: "purple lavender rows, bees, basket, summer sky" },
        { value: "Rice paddy, green terraces, mountains (稻田梯田)", label: "稻田梯田 (Rice Terrace)", props: "green rice, water reflection, mountains, farmer hat" },
        { value: "Tulip garden, colorful rows, windmill (鬱金香花園)", label: "鬱金香花園 (Tulip Garden)", props: "colorful tulips, windmill, blue sky" },
        // 水邊場景 Waterside
        { value: "Japanese onsen, steam, rocks, bamboo (露天溫泉)", label: "露天溫泉 (Onsen)", props: "steam, rocks, wooden bucket, sake bottle" },
        { value: "Riverside at sunset, grass, reflections (河畔夕陽)", label: "河畔夕陽 (Riverside)", props: "grass, flowing water, pebbles, sunset reflection" },
        { value: "Waterfall oasis, misty spray, lush plants (瀑布秘境)", label: "瀑布秘境 (Waterfall)", props: "waterfall, mist, tropical plants, rocks" },
        { value: "Lake dock, wooden pier, calm water (湖邊碼頭)", label: "湖邊碼頭 (Lake Dock)", props: "wooden pier, calm water, boat, fishing rod" },
        // 特殊場景 Special
        { value: "Abandoned ruins, overgrown vines, stone walls (廢墟)", label: "廢墟 (Ruins)", props: "vines, broken stone walls, rubble, moss" },
        { value: "Starry night field, milky way, grass (星空草原)", label: "星空草原 (Starry Field)", props: "stars, milky way, grass, blanket, lantern" },
        // 花園步道 Garden Paths
        { value: "Stone path garden, lush greenery, natural sunlight, peaceful walkway (石板步道花園)", label: "石板步道花園 (Stone Garden Path)", props: "stone pavers, green bushes, trees, dappled sunlight, garden" },
        { value: "Outdoor stone stairs with greenery, natural setting, soft daylight, bokeh background (戶外綠意階梯)", label: "戶外綠意階梯 (Outdoor Green Stairs)", props: "stone steps, green plants, natural light, bokeh" }
    ],

    // === 娛樂場所 (Entertainment Venues) ===
    entertainment: [
        // 夜店酒吧 Clubs & Bars
        { value: "Nightclub dance floor, neon lights, DJ booth (夜店舞池)", label: "夜店舞池 (Nightclub)", props: "neon lights, DJ booth, speakers, dancing crowd" },
        { value: "Jazz bar, dim lighting, stage (爵士酒吧)", label: "爵士酒吧 (Jazz Bar)", props: "piano, dim lights, cocktails, microphone" },
        { value: "Karaoke room, colorful lights, sofa (KTV包廂)", label: "KTV包廂 (Karaoke Room)", props: "microphone, TV screen, disco ball, sofa, snacks" },
        { value: "Sports bar, TV screens, beer (運動酒吧)", label: "運動酒吧 (Sports Bar)", props: "multiple TVs, beer taps, sports memorabilia" },
        // 演出場地 Performance Venues
        { value: "Concert stage, spotlight, crowd (演唱會舞台)", label: "演唱會舞台 (Concert Stage)", props: "spotlight, microphone stand, speakers, crowd silhouette" },
        { value: "Theater backstage, costumes, mirrors (劇場後台)", label: "劇場後台 (Backstage)", props: "makeup mirrors, costumes, props, lighting equipment" },
        { value: "Idol concert, light sticks, cheering fans (偶像演唱會)", label: "偶像演唱會 (Idol Concert)", props: "light sticks, stage lights, fan banners, confetti" },
        // 遊樂設施 Amusement
        { value: "Ferris wheel at night, city lights (摩天輪夜景)", label: "摩天輪夜景 (Ferris Wheel)", props: "ferris wheel cabin, city lights, night sky" },
        { value: "Arcade game center, neon machines (電玩城)", label: "電玩城 (Arcade)", props: "arcade machines, neon lights, crane games, tickets" },
        { value: "Bowling alley, lanes, neon signs (保齡球館)", label: "保齡球館 (Bowling Alley)", props: "bowling pins, lanes, neon signs, seats" },
        { value: "Theme park, castle, fireworks (主題樂園)", label: "主題樂園 (Theme Park)", props: "castle, fireworks, rides, balloons" },
        // 攝影棚 Studios
        { value: "Photo studio, white backdrop, lights (攝影棚白背景)", label: "攝影棚白背景 (White Studio)", props: "white backdrop, softbox lights, camera" },
        { value: "Photo studio, pink backdrop, props (攝影棚粉背景)", label: "攝影棚粉背景 (Pink Studio)", props: "pink backdrop, props, ring light" },
        { value: "Glamour studio, elegant backdrop, furniture (時尚攝影棚)", label: "時尚攝影棚 (Glamour Studio)", props: "elegant backdrop, chaise lounge, professional lighting" }
    ],

    // === 商業空間 (Commercial Spaces) ===
    commercial: [
        // 購物場所 Shopping
        { value: "Luxury boutique, designer displays (精品店)", label: "精品店 (Boutique)", props: "designer bags, jewelry display, elegant decor, mirrors" },
        { value: "Department store, escalators, bright lights (百貨公司)", label: "百貨公司 (Department Store)", props: "escalators, display counters, bright lights, shopping bags" },
        { value: "Lingerie store, mannequins, pink decor (內衣店)", label: "內衣店 (Lingerie Store)", props: "mannequins, lace displays, pink decor, mirrors" },
        { value: "Shoe store, wall of heels, seating (鞋店)", label: "鞋店 (Shoe Store)", props: "wall of shoes, seating, mirrors, shoe boxes" },
        { value: "Vintage clothing store, racks, retro decor (古著店)", label: "古著店 (Vintage Store)", props: "clothing racks, vintage items, retro posters, old furniture" },
        // 美容美髮 Beauty
        { value: "Hair salon, mirrors, styling chairs (髮廊)", label: "髮廊 (Hair Salon)", props: "styling chairs, mirrors, hair products, scissors" },
        { value: "Nail salon, manicure table, polish display (美甲店)", label: "美甲店 (Nail Salon)", props: "manicure table, nail polish display, UV lamp" },
        { value: "Spa treatment room, massage table, candles (Spa療程室)", label: "Spa療程室 (Spa Room)", props: "massage table, candles, essential oils, zen decor" },
        // 餐飲場所 Dining
        { value: "Sushi bar counter, fresh fish display (壽司吧檯)", label: "壽司吧檯 (Sushi Bar)", props: "sushi counter, fresh fish, chef, sake" },
        { value: "French bakery, pastry display, cafe tables (法式烘焙坊)", label: "法式烘焙坊 (French Bakery)", props: "pastry display, croissants, cafe tables, coffee" },
        { value: "Ice cream shop, colorful flavors, cones (冰淇淋店)", label: "冰淇淋店 (Ice Cream Shop)", props: "ice cream display, waffle cones, colorful decor" },
        { value: "Wine cellar, barrels, bottles, dim light (酒窖)", label: "酒窖 (Wine Cellar)", props: "wine barrels, bottle racks, dim lighting, tasting table" },
        // 其他商業 Other Commercial
        { value: "Flower shop, colorful bouquets, greenery (花店)", label: "花店 (Flower Shop)", props: "flower buckets, bouquets, ribbons, greenery" },
        { value: "Bookstore cafe, shelves, reading nook (書店咖啡)", label: "書店咖啡 (Book Cafe)", props: "bookshelves, reading chairs, coffee cups, warm lighting" },
        { value: "Art gallery, white walls, paintings (藝廊)", label: "藝廊 (Art Gallery)", props: "white walls, framed art, spotlight, minimal decor" },
        // 歐式優雅 European Elegant
        { value: "European Victorian tea room, beige Rococo style sofa with gold trim, wooden floor, large grid-pane windows, tea set on round table, vases with pink and white roses, afternoon tea ambiance (歐式維多利亞茶室)", label: "歐式維多利亞茶室 (Victorian Tea Room)", props: "Victorian sofa, gold trim furniture, tea set, rose vases, grid-pane windows, wooden floor" },
        { value: "Parisian salon, ornate mirrors, velvet chairs, chandelier, elegant European decor (巴黎沙龍)", label: "巴黎沙龍 (Parisian Salon)", props: "ornate mirrors, velvet chairs, chandelier, gilded frames, marble fireplace" },
        { value: "English manor library, leather armchairs, bookshelves, fireplace (英式莊園書房)", label: "英式莊園書房 (English Library)", props: "leather armchairs, tall bookshelves, fireplace, globe, reading lamp" }
    ]
};
