export const poseDatabase = [
    {
        id: "prone",
        label: "趴姿 (Prone)",
        options: [
            { value: "Cat pose, arching back on bed, crawling forward, looking at viewer (貓式伸展)", label: "貓式伸展 (Cat Pose)" }, // ★
            { value: "Lying on stomach, propping chin with hands, legs kicking up (趴著托腮翹腳)", label: "趴著托腮翹腳 (Prop Chin)" },
            { value: "Crawling forward on knees, alluring look (膝蓋爬行)", label: "膝蓋爬行 (Crawling)" },
            { value: "Lying on stomach, reading a book on the floor (趴著看書)", label: "趴著看書 (Reading)" },
            { value: "Lying on stomach, stretching arms forward on bed (趴床伸懶腰)", label: "趴床伸懶腰 (Stretching)" },
            { value: "Lying prone, head resting on crossed arms (趴著休息)", label: "趴著休息 (Resting)" },
            { value: "Lying on stomach, looking back over shoulder (趴姿回眸)", label: "趴姿回眸 (Looking Back)" },
            { value: "Lying prone on beach towel, sunbathing (趴著日光浴)", label: "趴著日光浴 (Sunbathing)" },
            { value: "Lying on stomach, using a laptop (趴著用電腦)", label: "趴著用電腦 (Using Laptop)" },
            { value: "Lying prone, playing with a pet (趴著逗寵物)", label: "趴著逗寵物 (Playing with Pet)" },
            { value: "Lying on stomach, hips raised high (高腰趴姿)", label: "高腰趴姿 (Hips Raised)" },
            { value: "Prone, one hand reaching out to camera (趴姿伸手)", label: "趴姿伸手 (Reaching Out)" },
            { value: "Lying on stomach, legs in W shape (趴姿W腿)", label: "趴姿W腿 (W-Legs)" },
            { value: "Prone, looking back biting lip (咬唇回眸)", label: "咬唇回眸 (Biting Lip)" },
            { value: "Lying prone, burying face in pillow (埋頭趴姿)", label: "埋頭趴姿 (Burying Face)" },
            { value: "Lying on stomach, feet up crossed at ankles, chin on hands, innocent smile (甜美趴姿翹腳)", label: "甜美趴姿翹腳 (Sweet Prone)" },
            { value: "Prone on bed, hugging pillow, looking at camera with soft eyes (抱枕趴姿)", label: "抱枕趴姿 (Hugging Pillow)" },
            { value: "Lying prone, kicking feet playfully in air, cheerful expression (俏皮踢腿趴姿)", label: "俏皮踢腿趴姿 (Playful Kicking)" },
            { value: "Prone position, body slightly twisted, one shoulder raised, flirty look (扭身趴姿)", label: "扭身趴姿 (Twisted Prone)" }
        ]
    },
    {
        id: "front",
        label: "正面 (Front)",
        options: [
            // 基本站姿 Basic Standing (手部動作請用 handActionList 疊加)
            { value: "Standing straight, hands behind back, shy smile (正面站立藏手)", label: "正面站立藏手 (Shy Standing)" },
            { value: "Standing, leaning forward slightly, welcoming (身體前傾)", label: "身體前傾 (Leaning Forward)" },
            { value: "Standing, twisting torso, showing curves (扭腰展曲線)", label: "扭腰展曲線 (Twisting Torso)" },
            { value: "Standing, contrapposto, weight on one leg (S型站姿/重心偏移)", label: "S型站姿 (Contrapposto)" },
            { value: "Standing, bent over at waist (彎腰翹臀)", label: "彎腰翹臀 (Bent Over)" },
            { value: "Standing, arched back, chest forward (拱背挺胸)", label: "拱背挺胸 (Arched Back)" },
            { value: "Standing, one leg lifted up (站立抬腿)", label: "站立抬腿 (One Leg Up)" },
            { value: "Standing, leaning forward, looking up (前傾仰視)", label: "前傾仰視 (Lean Forward Up)" },
            // 特殊正面姿勢 Special Front Poses
            { value: "Holding phone, mirror selfie, hip popped out (對鏡自拍)", label: "對鏡自拍 (Mirror Selfie)" },
            { value: "Standing, hands clasped in front, head tilted, sweet smile (雙手交握甜笑)", label: "雙手交握甜笑 (Sweet Clasped)" },
            { value: "Standing, hands on wall, body arched (靠牆拱身)", label: "靠牆拱身 (Wall Arch)" },
            { value: "Standing, one hand behind head, stretching (單手撐頭伸展)", label: "單手撐頭伸展 (Casual Stretch)" },
            { value: "Standing, adjusting stockings, one leg raised (調整絲襪抬腿)", label: "調整絲襪抬腿 (Adjust Stockings)" },
            { value: "Standing with legs crossed, feminine pose (交叉腿站姿)", label: "交叉腿站姿 (Crossed Legs Stand)" },
            { value: "Standing, weight on heels, body leaning back slightly (後仰站姿)", label: "後仰站姿 (Leaning Back)" },
            // 動態姿勢 Dynamic Poses
            { value: "Riding bicycle, natural movement (騎腳踏車)", label: "騎腳踏車 (Riding Bicycle)" },
            { value: "Walking with books in arms, student pose (抱書走路)", label: "抱書走路 (Walking with Books)" },
            { value: "Running playfully, hair flowing, looking back (俏皮奔跑)", label: "俏皮奔跑 (Playful Running)" },
            { value: "Dancing with arms raised, joyful movement (跳舞舉手)", label: "跳舞舉手 (Dancing Arms Up)" },
            { value: "Standing on one leg, playful kick forward (單腳站立踢腿)", label: "單腳站立踢腿 (Playful Kick)" },
            { value: "Jumping in air, arms up, joyful expression (跳躍歡呼)", label: "跳躍歡呼 (Jumping Joy)" },
            { value: "Spinning around, skirt flaring out (旋轉裙擺飛揚)", label: "旋轉裙擺 (Spinning Skirt)" },
            { value: "Walking towards camera, confident stride (自信走來)", label: "自信走來 (Confident Walk)" }
        ]
    },
    {
        id: "back",
        label: "背面 (Back)",
        options: [
            { value: "Back view, holding hair up with both hands, exposing nape, elbows up (背影撩髮露頸)", label: "背影撩髮 (Exposing Nape)" }, // ★
            { value: "Back view, looking back over shoulder, smiling (背影回眸)", label: "背影回眸 (Looking Back)" },
            { value: "Back view, holding hands behind back (背手站立)", label: "背手站立 (Hands Behind Back)" },
            { value: "Walking away from camera, waving goodbye (背影揮手)", label: "背影揮手 (Walking Away)" },
            { value: "Back view, standing leg lift (背影抬腿)", label: "背影抬腿 (Leg Lift)" },
            { value: "Back view, looking at scenery (背影賞景)", label: "背影賞景 (Looking Scenery)" },
            { value: "Back view, looking back over shoulder, skirt lifted (背影掀裙)", label: "背影掀裙 (Skirt Lifted)" },
            { value: "Back view, bending over, looking through legs (彎腰胯下視角)", label: "彎腰胯下視角 (Through Legs)" },
            { value: "Back view, pulling up stockings, hips tilted (提拉絲襪/扭胯)", label: "背影提襪 (Pulling Stockings)" },
            { value: "Back view, hands on buttocks, looking back (回眸扶臀)", label: "回眸扶臀 (Hands on Buttocks)" },
            { value: "Back view, twisting waist to show side profile (背影扭腰)", label: "背影扭腰 (Twisting Waist)" },
            { value: "Back view, zip down back of dress (背影拉鍊)", label: "背影拉鍊 (Unzipping)" },
            { value: "Back view, leaning forward, hips back (前傾翹臀)", label: "前傾翹臀 (Leaning Forward)" },
            { value: "Back view, looking back over shoulder, finger on lips (回眸噓聲)", label: "回眸噓聲 (Shushing)" },
            { value: "Back view, walking away, swaying hips (搖曳生姿)", label: "搖曳生姿 (Swaying Hips)" },
            { value: "Back view, arms stretched up, morning stretch, showing curves (背影伸懶腰)", label: "背影伸懶腰 (Back Stretch)" },
            { value: "Back view, peeking over shoulder with shy smile (害羞回眸)", label: "害羞回眸 (Shy Peek)" },
            { value: "Back view, hands touching own shoulders, elegant pose (雙手撫肩)", label: "雙手撫肩 (Touching Shoulders)" },
            { value: "Back view, adjusting hair in ponytail, nape exposed (整理馬尾)", label: "整理馬尾 (Adjusting Ponytail)" },
            { value: "Back view, glancing back with finger on lips, secretive (神秘回眸)", label: "神秘回眸 (Mysterious Glance)" },
            { value: "Back view, looking back over shoulder, holding bag, 3/4 rear view, JK style (背影回眸持包)", label: "背影回眸持包 (Back Holding Bag)" }
        ]
    },
    // ====== 新增：側面站姿 (Side Standing) ======
    {
        id: "side",
        label: "➡️ 側面站姿 (Side)",
        options: [
            // 基本側面 Basic Side
            { value: "Side view standing, elegant profile, chin slightly up (側面站立優雅)", label: "側面站立優雅 (Elegant Profile)" },
            { value: "Side view, looking over shoulder at camera, mysterious (側身回眸)", label: "側身回眸 (Side Glance)" },
            { value: "Side standing, one hand on hip, confident pose (側身單手叉腰)", label: "側身單手叉腰 (Side Hip)" },
            { value: "Side view, arching back, showing curves (側身拱背曲線)", label: "側身拱背曲線 (Side Arch)" },
            { value: "Side standing, arms behind back, chest out (側身背手挺胸)", label: "側身背手挺胸 (Side Chest Out)" },
            // 動態側面 Dynamic Side
            { value: "Side view walking, mid-stride, hair flowing (側面走路中)", label: "側面走路 (Side Walking)" },
            { value: "Side view, turning head to camera, hair flip (側身甩髮)", label: "側身甩髮 (Side Hair Flip)" },
            { value: "Side standing, stretching arms up, showing silhouette (側身伸展)", label: "側身伸展 (Side Stretch)" },
            { value: "Side view, leaning forward slightly, elegant pose (側身微前傾)", label: "側身微前傾 (Side Lean)" },
            { value: "Side standing on tiptoes, elongated silhouette (側身墊腳)", label: "側身墊腳 (Side Tiptoe)" },
            // 特殊側面 Special Side
            { value: "Three-quarter view, body angled 45 degrees, flattering angle (斜側身45度)", label: "斜側身45度 (3/4 View)" },
            { value: "Side view, one leg lifted back, ballet pose (側身後抬腿)", label: "側身後抬腿 (Side Leg Back)" },
            { value: "Side view, touching own face, dreamy expression (側身撫臉)", label: "側身撫臉 (Side Touch Face)" },
            { value: "Side standing, looking down, contemplative (側身低頭沉思)", label: "側身低頭沉思 (Side Contemplative)" },
            { value: "Side view, hands clasped behind, innocent pose (側身背手純真)", label: "側身背手純真 (Side Hands Back)" },
            { value: "Side profile silhouette, dramatic lighting, elegant contour (側臉剪影輪廓)", label: "側臉剪影輪廓 (Silhouette Profile)" },
            { value: "Side view, adjusting earring, feminine gesture (側身整理耳環)", label: "側身整理耳環 (Side Earring)" },
            { value: "Side standing, wind blowing hair and clothes (側身迎風)", label: "側身迎風 (Side Wind)" }
        ]
    },
    {
        id: "sitting",
        label: "🪑 坐姿 (Sitting)",
        options: [
            // ===== 地板坐 Floor Sitting =====
            { value: "Wariza, w-sitting, knees touching ground, feet apart, cute and submissive (日系鴨子坐)", label: "🟫 日系鴨子坐 (W-Sitting)" },
            { value: "sitting cross-legged on floor (盤腿坐)", label: "🟫 盤腿坐 (Cross-legged)" },
            { value: "yokozuwari, legs to one side on floor (側坐)", label: "🟫 側坐 (Yokozuwari)" },
            { value: "Sitting on floor, leaning back on hands, legs extended (後仰撐地)", label: "🟫 後仰撐地 (Leaning Back)" },
            { value: "Sitting on floor, knees up, arms wrapped around legs (抱膝望向鏡頭)", label: "🟫 抱膝望向鏡頭 (Knees Up)" },
            { value: "jack-o-lantern pose, hugging knees tightly (抱膝蜷縮)", label: "🟫 抱膝蜷縮 (Jack-o-lantern)" },
            { value: "sitting hugging one knee on floor (單腿抱膝)", label: "🟫 單腿抱膝 (Hugging One Knee)" },
            { value: "Sitting with legs to side, hands on lap, elegant (淑女側坐)", label: "🟫 淑女側坐 (Elegant Side)" },
            { value: "sitting on floor with legs in M-shape, relaxed (M字腿坐姿)", label: "🟫 M字腿坐姿 (M-shape Sit)" },
            { value: "Sitting on floor, legs stretched out, relaxed (伸腿地板坐)", label: "🟫 伸腿地板坐 (Legs Stretched)" },
            // ===== 椅子坐 Chair Sitting =====
            { value: "Sitting on chair, thighs together, calves spread inverted V (內八夾腿倒V)", label: "🪑 內八夾腿倒V (Inverted V)" },
            { value: "straddling a chair backwards, arms on backrest (反坐椅子)", label: "🪑 反坐椅子 (Straddling Chair)" },
            { value: "sitting on invisible chair, knock-kneed, cute pose (羞澀內八坐)", label: "🪑 羞澀內八坐 (Shy Knock-kneed)" },
            { value: "Sitting on chair, legs crossed elegantly (椅子翹腳)", label: "🪑 椅子翹腳 (Chair Cross-leg)" },
            { value: "Sitting on chair, leaning forward, elbows on knees (椅子前傾)", label: "🪑 椅子前傾 (Chair Lean Forward)" },
            { value: "Sitting on chair, one leg up on seat, casual (椅子單腳踩)", label: "🪑 椅子單腳踩 (One Foot on Chair)" },
            { value: "Sitting sideways on chair, legs dangling (側坐椅子)", label: "🪑 側坐椅子 (Side Chair Sit)" },
            // ===== 床上坐 Bed Sitting =====
            { value: "Sitting on bed, hugging pillow to chest, cute (床上抱枕)", label: "🛏️ 床上抱枕 (Bed Hugging Pillow)" },
            { value: "Sitting on edge of bed, feet swinging playfully (床邊甜美坐姿)", label: "🛏️ 床邊甜美坐 (Sweet Bed Edge)" },
            { value: "Reclining on bed, legs crossed and extended (床上斜躺交腳)", label: "🛏️ 床上斜躺交腳 (Bed Recline)" },
            { value: "Sitting on bed, legs tucked to side, relaxed (床上側坐)", label: "🛏️ 床上側坐 (Bed Side Sit)" },
            { value: "Sitting on bed, knees up, looking at camera (床上抱膝)", label: "🛏️ 床上抱膝 (Bed Knees Up)" },
            { value: "Sitting on bed cross-legged, casual and cozy (床上盤腿)", label: "🛏️ 床上盤腿 (Bed Cross-leg)" },
            // ===== 沙發坐 Sofa Sitting =====
            { value: "Sitting on sofa, legs tucked to side, arm on armrest (沙發優雅側坐)", label: "🛋️ 沙發優雅側坐 (Sofa Elegant)" },
            { value: "Sitting on sofa, legs extended, hand on face (沙發手摸臉)", label: "🛋️ 沙發手摸臉 (Sofa Hand Face)" },
            { value: "Sinking into sofa, relaxed and cozy pose (沙發慵懶)", label: "🛋️ 沙發慵懶 (Sofa Lazy)" },
            { value: "Sitting on sofa arm, legs crossed (沙發扶手坐)", label: "🛋️ 沙發扶手坐 (Sofa Arm Sit)" },
            { value: "Lying on sofa, legs up on backrest (沙發躺抬腿)", label: "🛋️ 沙發躺抬腿 (Sofa Legs Up)" },
            // ===== 跪姿 Kneeling =====
            { value: "kneeling, sitting on heels, formal (正跪坐)", label: "🧎 正跪坐 (Seiza)" },
            { value: "kneeling upright, thighs vertical (高跪姿)", label: "🧎 高跪姿 (High Kneel)" },
            { value: "kneeling with knees apart, confident pose (跪姿寬膝)", label: "🧎 跪姿寬膝 (Wide Kneeling)" },
            { value: "kneeling, leaning forward, submissive (跪姿前傾)", label: "🧎 跪姿前傾 (Kneel Forward)" },
            { value: "kneeling, looking up at camera, innocent (跪姿仰望)", label: "🧎 跪姿仰望 (Kneel Look Up)" },
            { value: "kneeling on one knee, proposal pose (單膝跪)", label: "🧎 單膝跪 (One Knee)" },
            // ===== 特殊坐姿 Special Sitting =====
            { value: "sitting facing camera, intimate POV angle (騎乘視角)", label: "⭐ 騎乘視角 (Intimate POV)" },
            { value: "sitting with legs dangling off edge (坐姿晃腿)", label: "⭐ 坐姿晃腿 (Legs Dangling)" },
            { value: "Sitting on stairs, legs to side (階梯側坐)", label: "⭐ 階梯側坐 (Stairs Side Sit)" },
            { value: "Sitting on windowsill, leg raised (窗台抬腿)", label: "⭐ 窗台抬腿 (Windowsill Sit)" },
            { value: "Sitting on desk, legs crossed (坐課桌翹腳)", label: "⭐ 坐課桌翹腳 (Desk Sit)" },
            { value: "Sitting on edge of bathtub (浴缸邊坐姿)", label: "⭐ 浴缸邊坐 (Bathtub Edge)" },
            { value: "Sitting on counter, legs swinging (櫃台坐姿)", label: "⭐ 櫃台坐姿 (Counter Sit)" },
            { value: "Sitting on swing, playful (鞦韆坐姿)", label: "⭐ 鞦韆坐姿 (Swing Sit)" }
        ]
    },
    {
        id: "lying",
        label: "🛏️ 臥姿 (Lying)",
        options: [
            // ===== 仰躺 Back Lying =====
            { value: "Lying on back, looking up, arms spread (大字型仰躺)", label: "⬆️ 大字型仰躺 (Arms Spread)" },
            { value: "Lying on back, one hand shielding eyes (仰躺遮陽)", label: "⬆️ 仰躺遮陽 (Shielding Eyes)" },
            { value: "Lying on back, head on pillow, POV (枕頭視角)", label: "⬆️ 枕頭視角 (Pillow POV)" },
            { value: "Lying on back, upside down face to camera (倒頭視角)", label: "⬆️ 倒頭視角 (Upside Down)" },
            { value: "Lying on back, legs up against wall (抬腿仰躺)", label: "⬆️ 抬腿仰躺 (Legs Up)" },
            { value: "Lying on back, holding a book (仰躺看書)", label: "⬆️ 仰躺看書 (Reading)" },
            { value: "Lying on back, legs in V-shape position, relaxed (仰臥V字腿)", label: "⬆️ 仰臥V字腿 (V-shape Lying)" },
            { value: "Lying on back, pulling knees to chest (仰臥抱腿)", label: "⬆️ 仰臥抱腿 (Knees to Chest)" },
            { value: "Lying on back, looking down at camera (仰視鏡頭)", label: "⬆️ 仰視鏡頭 (Looking Down)" },
            { value: "Lying on back, arching chest (仰臥挺胸)", label: "⬆️ 仰臥挺胸 (Arching Chest)" },
            { value: "Lying on back, biting shirt hem (仰臥咬衣角)", label: "⬆️ 仰臥咬衣角 (Biting Shirt)" },
            { value: "Lying on back, hands bound above head (仰臥被縛感)", label: "⬆️ 仰臥被縛感 (Hands Bound)" },
            { value: "Lying on back, arms above head, peaceful sleeping (仰躺舉手酣睡)", label: "⬆️ 仰躺舉手酣睡 (Peaceful Sleep)" },
            { value: "Lying on back, playing with hair, gazing at camera (仰躺玩髮)", label: "⬆️ 仰躺玩髮 (Playing Hair)" },
            { value: "Lying on back, one knee up, relaxed (單膝彎曲仰躺)", label: "⬆️ 單膝彎曲仰躺 (One Knee Up)" },
            { value: "Lying on back, both knees up, feet flat (雙膝彎曲仰躺)", label: "⬆️ 雙膝彎曲仰躺 (Both Knees Up)" },
            { value: "Lying on back, stretching arms and legs (仰躺伸懶腰)", label: "⬆️ 仰躺伸懶腰 (Back Stretch)" },
            // ===== 側躺 Side Lying =====
            { value: "Lying on side, curled up in fetal position (側臥蜷縮)", label: "➡️ 側臥蜷縮 (Fetal Position)" },
            { value: "Lying sideways, propping head with hand (側臥托頭)", label: "➡️ 側臥托頭 (Propping Head)" },
            { value: "Lying on side, top leg raised (側臥抬腿)", label: "➡️ 側臥抬腿 (Side Leg Lift)" },
            { value: "Lying on side, hand running through hair (側臥撩髮)", label: "➡️ 側臥撩髮 (Hand in Hair)" },
            { value: "Lying on side, elegant S-curve pose (性感側臥)", label: "➡️ 性感側臥 (Elegant Side)" },
            { value: "Lying on side, hugging pillow, dreamy (側臥抱枕)", label: "➡️ 側臥抱枕 (Hugging Pillow)" },
            { value: "Lying on side, back to camera, looking over shoulder (側臥回眸)", label: "➡️ 側臥回眸 (Side Glance)" },
            { value: "Lying on side, legs crossed elegantly (側臥交腿)", label: "➡️ 側臥交腿 (Crossed Legs)" },
            { value: "Lying on side, one arm extended, relaxed (側臥伸手)", label: "➡️ 側臥伸手 (Arm Extended)" },
            { value: "Lying on side, knees pulled up, cozy (側臥縮膝)", label: "➡️ 側臥縮膝 (Knees Pulled)" },
            // ===== 床上特殊 Bed Special =====
            { value: "Lying on bed, messy hair, waking up (慵懶賴床)", label: "🛏️ 慵懶賴床 (Waking Up)" },
            { value: "Lying on bed, tangled in sheets, sexy (纏繞床單)", label: "🛏️ 纏繞床單 (Tangled Sheets)" },
            { value: "Lying on bed, reaching for camera (床上伸手)", label: "🛏️ 床上伸手 (Reaching)" },
            { value: "Lying across bed diagonally, playful (斜躺床上)", label: "🛏️ 斜躺床上 (Diagonal)" },
            { value: "Lying on stomach on bed, feet up (趴床滑手機)", label: "🛏️ 趴床翹腳 (Prone Feet Up)" },
            // ===== 特殊場景臥姿 Special Scene =====
            { value: "Lying in bathtub, relaxed, bubbles (浴缸躺姿)", label: "🛁 浴缸躺姿 (Bathtub)" },
            { value: "Floating in pool, looking up (泳池漂浮)", label: "🏊 泳池漂浮 (Pool Float)" },
            { value: "Lying on grass, looking at sky (草地仰望)", label: "🌿 草地仰望 (Grass Gaze)" },
            { value: "Lying on beach towel, sunbathing (沙灘日光浴)", label: "🏖️ 沙灘日光浴 (Beach Sunbath)" },
            { value: "Lying on sofa, legs over armrest (沙發躺臥)", label: "🛋️ 沙發躺臥 (Sofa Lying)" },
            { value: "Lying on floor, artistic pose (地板藝術躺)", label: "🎨 地板藝術躺 (Floor Art)" }
        ]
    },
    {
        id: "squatting",
        label: "蹲姿 (Squatting)",
        options: [
            { value: "Squatting down, knees together, cute pose, front view, facing camera, looking at viewer, perfectly centered composition, mirror symmetry, subject directly facing camera, straight on frontal shot, no angle (雙膝併攏蹲姿)", label: "雙膝併攏蹲姿 (Knees Together)" },
            { value: "Asian squat, heels flat on ground, relaxed casual, front view, facing camera, looking at viewer, perfectly centered composition, mirror symmetry, subject directly facing camera, straight on frontal shot, no angle (亞洲蹲)", label: "亞洲蹲 (Asian Squat)" },
            { value: "Squatting, one knee touching ground, kneeling squat, front view, facing camera, looking at viewer, perfectly centered composition, mirror symmetry, subject directly facing camera, straight on frontal shot, no angle (單膝跪蹲)", label: "單膝跪蹲 (One Knee Down)" },
            { value: "Squatting, looking up at camera, innocent eyes, front view, facing camera, looking at viewer, perfectly centered composition, mirror symmetry, subject directly facing camera, straight on frontal shot, no angle (蹲姿仰視)", label: "蹲姿仰視 (Looking Up)" },
            { value: "Squatting, hugging knees to chest, front view, facing camera, looking at viewer, perfectly centered composition, mirror symmetry, subject directly facing camera, straight on frontal shot, no angle (蹲姿抱膝)", label: "蹲姿抱膝 (Hugging Knees)" },
            { value: "Squatting, drawing on ground with finger, front view, facing camera, looking at viewer, perfectly centered composition, mirror symmetry, subject directly facing camera, straight on frontal shot, no angle (蹲著畫畫)", label: "蹲著畫畫 (Drawing)" },
            { value: "Squatting, petting a cat gently, front view, facing camera, looking at viewer, perfectly centered composition, mirror symmetry, subject directly facing camera, straight on frontal shot, no angle (蹲著摸貓)", label: "蹲著摸貓 (Petting Cat)" },
            { value: "Deep squat, legs wide apart, M-shape, front view, facing camera, looking at viewer, perfectly centered composition, mirror symmetry, subject directly facing camera, straight on frontal shot, no angle (M字深蹲)", label: "M字深蹲 (Deep Squat M)" },
            { value: "Squatting, balancing on toes, heels up, front view, facing camera, looking at viewer, perfectly centered composition, mirror symmetry, subject directly facing camera, straight on frontal shot, no angle (踮腳蹲姿)", label: "踮腳蹲姿 (On Toes)" },
            { value: "Squatting, holding phone taking photo, front view, facing camera, looking at viewer, perfectly centered composition, mirror symmetry, subject directly facing camera, straight on frontal shot, no angle (蹲著拍照)", label: "蹲著拍照 (Taking Photo)" },
            { value: "Squatting, hands pulling skirt down modestly, front view, facing camera, looking at viewer, perfectly centered composition, mirror symmetry, subject directly facing camera, straight on frontal shot, no angle (蹲姿拉裙)", label: "蹲姿拉裙 (Pulling Skirt)" },
            { value: "Squatting, one leg extended to side, front view, facing camera, looking at viewer, perfectly centered composition, mirror symmetry, subject directly facing camera, straight on frontal shot, no angle (伸腿蹲姿)", label: "伸腿蹲姿 (Leg Extended)" },
            { value: "Squatting, looking over shoulder, glancing back (回眸蹲姿)", label: "回眸蹲姿 (Looking Back)" },
            { value: "Squatting, chin resting on knees, front view, facing camera, looking at viewer, perfectly centered composition, mirror symmetry, subject directly facing camera, straight on frontal shot, no angle (下巴靠膝)", label: "下巴靠膝 (Chin on Knees)" },
            { value: "Squatting, hands holding ankles, front view, facing camera, looking at viewer, perfectly centered composition, mirror symmetry, subject directly facing camera, straight on frontal shot, no angle (手抓腳踝)", label: "手抓腳踝 (Holding Ankles)" },
            { value: "Squatting, leaning forward, elbows on knees, front view, facing camera, looking at viewer, perfectly centered composition, mirror symmetry, subject directly facing camera, straight on frontal shot, no angle (蹲姿前傾)", label: "蹲姿前傾 (Leaning Forward)" },
            { value: "Squatting, hands on cheeks, looking up innocently, front view, facing camera, looking at viewer, perfectly centered composition, mirror symmetry, subject directly facing camera, straight on frontal shot, no angle (蹲姿捧臉仰望)", label: "蹲姿捧臉仰望 (Cute Looking Up)" },
            { value: "Squatting, picking flowers, gentle smile, front view, facing camera, looking at viewer, perfectly centered composition, mirror symmetry, subject directly facing camera, straight on frontal shot, no angle (蹲姿採花)", label: "蹲姿採花 (Picking Flowers)" },
            { value: "Squatting, arms wrapped around knees, shy pose, front view, facing camera, looking at viewer, perfectly centered composition, mirror symmetry, subject directly facing camera, straight on frontal shot, no angle (害羞蹲姿)", label: "害羞蹲姿 (Shy Squat)" },
            { value: "Squatting low, head tilted, playful expression, front view, facing camera, looking at viewer, perfectly centered composition, mirror symmetry, subject directly facing camera, straight on frontal shot, no angle (歪頭俏皮蹲)", label: "歪頭俏皮蹲 (Playful Tilt)" }
        ]
    },
    {
        id: "leg_focus",
        label: "腿部重點 (Legs)",
        options: [
            { value: "crossed legs (翹腳/二郎腿)", label: "翹腳 (Crossed Legs)" },
            { value: "leg lift (抬腿)", label: "抬腿 (Leg Lift)" },
            { value: "legs apart (張腿)", label: "張腿 (Legs Apart)" },
            { value: "m-shaped legs (M字腿)", label: "M字腿 (M-shaped Legs)" },
            { value: "fetal position (蜷曲/胎兒姿)", label: "蜷曲 (Fetal Position)" },
            { value: "adjusting thighhighs (調整大腿襪)", label: "調整大腿襪 (Adjusting Highs)" },
            { value: "pulling pantyhose (拉扯絲襪)", label: "拉扯絲襪 (Pulling Pantyhose)" },
            { value: "feet soles facing camera (腳底特寫)", label: "腳底特寫 (Soles)" },
            { value: "toes curled (腳趾蜷縮)", label: "腳趾蜷縮 (Curled Toes)" },
            { value: "one leg resting on other knee (單腿架膝)", label: "單腿架膝 (Leg Resting)" },
            { value: "knees together feet apart (內八跪姿)", label: "內八跪姿 (Knees Together)" },
            { value: "standing on tiptoes (墊腳尖)", label: "墊腳尖 (Tiptoes)" },
            { value: "legs up wall (抬腿靠牆)", label: "抬腿靠牆 (Legs Up Wall)" },
            { value: "figure 4 leg lock (4字腿)", label: "4字腿 (Figure 4)" },
            { value: "scissors legs (剪刀腿)", label: "剪刀腿 (Scissors Legs)" },
            { value: "rubbing legs together (雙腿磨蹭)", label: "雙腿磨蹭 (Rubbing Legs)" },
            { value: "ankle crossed (腳踝交叉)", label: "腳踝交叉 (Ankle Crossed)" },
            { value: "knees pulled to chest (抱膝特寫)", label: "抱膝特寫 (Knees to Chest)" },
            { value: "sitting on calves (壓腿坐)", label: "壓腿坐 (Sitting on Calves)" },
            { value: "legs dangling off edge (懸空晃腿)", label: "懸空晃腿 (Legs Dangling)" },
            { value: "legs pressed together, knees slightly bent, feminine pose (雙腿併攏微彎)", label: "雙腿併攏微彎 (Legs Together Bent)" },
            { value: "one leg bent, one straight, lying relaxed (一曲一直躺姿)", label: "一曲一直躺姿 (One Bent One Straight)" },
            { value: "legs in butterfly stretch position, sitting (蝴蝶坐姿)", label: "蝴蝶坐姿 (Butterfly Sit)" },
            { value: "standing, one foot touching other ankle, shy pose (單腳靠腳踝)", label: "單腳靠腳踝 (Foot on Ankle)" },
            { value: "kneeling with thighs together, elegant and pure (併腿跪姿)", label: "併腿跪姿 (Thighs Together Kneel)" }
        ]
    },
    // ====== 新增：互動姿勢 (Interactive Poses) ======
    {
        id: "interactive",
        label: "🤝 互動姿勢 (Interactive)",
        options: [
            // 靠牆系列 Wall Series
            { value: "Leaning back against wall, one foot on wall, casual cool pose (背靠牆單腳踩牆)", label: "背靠牆踩牆 (Wall Lean Foot)" },
            { value: "Hands pressed against wall, back arched, looking back (雙手撐牆回眸)", label: "雙手撐牆回眸 (Wall Push Back)" },
            { value: "Side leaning on wall, arms crossed, confident (側身靠牆抱胸)", label: "側身靠牆抱胸 (Side Wall Lean)" },
            { value: "Back against wall, sliding down, knees up (背靠牆滑坐)", label: "背靠牆滑坐 (Wall Slide Sit)" },
            { value: "Facing wall, hands on wall above head, vulnerable pose (面牆舉手)", label: "面牆舉手 (Facing Wall Arms Up)" },
            // 欄杆系列 Railing Series
            { value: "Leaning on railing, looking at view, hair blowing (倚欄遠眺)", label: "倚欄遠眺 (Railing Gaze)" },
            { value: "Sitting on railing, legs dangling, playful (坐欄杆晃腿)", label: "坐欄杆晃腿 (Railing Sit)" },
            { value: "Hands on railing, leaning forward, wind in hair (扶欄前傾)", label: "扶欄前傾 (Railing Lean)" },
            { value: "Back against railing, elbows resting, relaxed (背靠欄杆)", label: "背靠欄杆 (Back on Railing)" },
            // 門框/窗邊 Door & Window
            { value: "Leaning on doorframe, one hand up, flirty pose (倚門框撩人)", label: "倚門框撩人 (Doorframe Lean)" },
            { value: "Peeking from behind door, shy expression (門後探頭)", label: "門後探頭 (Peek Behind Door)" },
            { value: "Sitting on windowsill, looking outside, dreamy (坐窗台望外)", label: "坐窗台望外 (Windowsill Dream)" },
            { value: "Standing by window, curtain draped, silhouette (窗邊剪影)", label: "窗邊剪影 (Window Silhouette)" },
            // 傢俱互動 Furniture
            { value: "Lying on sofa armrest, legs up, playful (趴沙發扶手)", label: "趴沙發扶手 (Sofa Armrest)" },
            { value: "Sitting backwards on chair, arms on backrest, chin resting (反坐椅托腮)", label: "反坐椅托腮 (Reverse Chair)" },
            { value: "Leaning on table, elbows down, looking up (趴桌仰望)", label: "趴桌仰望 (Table Lean Up)" },
            { value: "Standing behind chair, hands on backrest (站椅子後扶椅背)", label: "站椅後扶背 (Behind Chair)" },
            { value: "Sitting on desk edge, legs crossed elegantly (坐桌邊翹腳)", label: "坐桌邊翹腳 (Desk Edge Sit)" },
            // 鏡子互動 Mirror
            { value: "Looking at mirror, adjusting hair (照鏡整理頭髮)", label: "照鏡整髮 (Mirror Hair)" },
            { value: "Mirror selfie, peace sign, cute expression (鏡子自拍比耶)", label: "鏡子自拍比耶 (Mirror Selfie V)" },
            { value: "Touching mirror, looking at reflection (觸摸鏡面)", label: "觸摸鏡面 (Touch Mirror)" },
            // 電線桿/路燈 Pole
            { value: "Holding onto pole, swinging around playfully (抱電線桿轉圈)", label: "抱桿轉圈 (Pole Swing)" },
            { value: "Leaning on lamppost, waiting pose (靠路燈等待)", label: "靠路燈等待 (Lamppost Wait)" }
        ]
    },
    // ====== 新增：季節場景姿勢 (Seasonal Poses) ======
    {
        id: "seasonal",
        label: "🌸 季節場景 (Seasonal)",
        options: [
            // 春天 Spring
            { value: "Holding cherry blossom branch, smelling flowers, spring (賞櫻聞花)", label: "🌸 賞櫻聞花 (Cherry Blossom)" },
            { value: "Sitting under cherry tree, petals falling, peaceful (櫻花樹下坐)", label: "🌸 櫻花樹下坐 (Under Sakura)" },
            { value: "Twirling in flower field, arms spread, joyful (花田轉圈)", label: "🌷 花田轉圈 (Flower Twirl)" },
            { value: "Picking flowers in garden, bending down, gentle (花園採花)", label: "🌷 花園採花 (Picking Flowers)" },
            { value: "Blowing dandelion, making wish, dreamy (吹蒲公英許願)", label: "🌼 吹蒲公英 (Dandelion Wish)" },
            // 夏天 Summer
            { value: "Holding watermelon slice, summer beach, refreshing (吃西瓜消暑)", label: "🍉 吃西瓜消暑 (Watermelon)" },
            { value: "Splashing in water, bikini, playful summer (戲水潑水)", label: "💦 戲水潑水 (Water Splash)" },
            { value: "Holding sparkler at night, summer festival, yukata (拿仙女棒)", label: "✨ 拿仙女棒 (Sparkler)" },
            { value: "Fanning self with hand fan, hot summer day (搧扇子納涼)", label: "🪭 搧扇子納涼 (Hand Fan)" },
            { value: "Eating shaved ice, summer treat, happy expression (吃刨冰)", label: "🍧 吃刨冰 (Shaved Ice)" },
            { value: "Under beach umbrella, lying on towel, sunbathing (陽傘下日光浴)", label: "⛱️ 陽傘下日光浴 (Beach Umbrella)" },
            // 秋天 Autumn
            { value: "Holding autumn leaves, looking at them, nostalgic (手持楓葉)", label: "🍁 手持楓葉 (Maple Leaf)" },
            { value: "Walking through fallen leaves, kicking leaves playfully (踩落葉漫步)", label: "🍂 踩落葉漫步 (Leaf Walk)" },
            { value: "Throwing leaves in air, happy autumn mood (拋落葉)", label: "🍂 拋落葉 (Throw Leaves)" },
            { value: "Sitting on park bench, autumn scenery, scarf (秋日公園長椅)", label: "🍁 秋日長椅 (Autumn Bench)" },
            { value: "Holding hot drink, both hands, warming up (雙手捧熱飲)", label: "☕ 雙手捧熱飲 (Hot Drink)" },
            // 冬天 Winter
            { value: "Holding umbrella in snow, looking up at falling snow (撐傘賞雪)", label: "❄️ 撐傘賞雪 (Snow Umbrella)" },
            { value: "Making snowball, playful winter, mittens (堆雪球)", label: "⛄ 堆雪球 (Snowball)" },
            { value: "Catching snowflakes with tongue, childlike joy (伸舌接雪)", label: "❄️ 伸舌接雪 (Catch Snow)" },
            { value: "Blowing warm breath into cold hands, winter (哈氣暖手)", label: "🧤 哈氣暖手 (Warm Breath)" },
            { value: "Wrapping scarf tightly, cold weather, cozy (圍圍巾取暖)", label: "🧣 圍巾取暖 (Wrap Scarf)" },
            { value: "Ice skating pose, graceful glide, winter rink (溜冰姿勢)", label: "⛸️ 溜冰姿勢 (Ice Skating)" },
            // 雨天 Rainy
            { value: "Holding umbrella, rainy day, looking up at sky (撐傘望天)", label: "☔ 撐傘望天 (Umbrella Sky)" },
            { value: "Running in rain without umbrella, hair wet, free (雨中奔跑)", label: "🌧️ 雨中奔跑 (Rain Run)" },
            { value: "Splashing in puddle, childlike joy, rain boots (踩水坑)", label: "💧 踩水坑 (Puddle Splash)" },
            { value: "Standing under awning, waiting for rain to stop (屋簷下躲雨)", label: "🏠 屋簷下躲雨 (Shelter Rain)" }
        ]
    },
    // ====== 新增：特殊角度姿勢 (Special Angle Poses) ======
    {
        id: "special_angle",
        label: "📐 特殊角度 (Special Angle)",
        options: [
            // 蟲視角專用 For Worm's Eye View
            { value: "Standing tall, looking down at camera, powerful pose, shot from below (俯視鏡頭女王姿)", label: "🐛 俯視鏡頭女王姿 (Queen Look Down)" },
            { value: "Standing with legs apart, hands on hips, towering over camera, from below (叉腰俯視)", label: "🐛 叉腰俯視 (Hands Hip Tower)" },
            { value: "One foot stepping forward toward camera, from ground level (踩向鏡頭)", label: "🐛 踩向鏡頭 (Step to Camera)" },
            { value: "Standing on tiptoes, looking down, elongated legs, from below (墊腳俯視超長腿)", label: "🐛 墊腳俯視 (Tiptoe Look Down)" },
            { value: "Walking over camera, stepping across, from below view (跨越鏡頭)", label: "🐛 跨越鏡頭 (Step Over)" },
            { value: "Standing with crossed arms, chin up, arrogant pose from below (高傲抱胸)", label: "🐛 高傲抱胸 (Arrogant Arms Cross)" },
            { value: "Leaning forward looking down at camera, bending at waist, from below (彎腰俯看)", label: "🐛 彎腰俯看 (Bend Look Down)" },
            // 鳥瞰專用 For Bird's Eye View
            { value: "Lying on back, looking up at camera, arms spread (仰躺望向上方)", label: "🦅 仰躺望上 (Lying Look Up)" },
            { value: "Lying on floor, curled up cute pose, from above (地板蜷縮俯拍)", label: "🦅 地板蜷縮 (Floor Curl)" },
            { value: "Sitting and looking up at camera, head tilted, from above (坐姿仰望)", label: "🦅 坐姿仰望 (Sit Look Up)" },
            { value: "Lying in bathtub, looking up, from directly above (浴缸仰望)", label: "🦅 浴缸仰望 (Bath Look Up)" },
            { value: "Lying on bed, arms above head, from bird's eye view (床上舉手俯拍)", label: "🦅 床上舉手俯拍 (Bed Arms Up)" },
            { value: "Floating in pool, looking up, from above (泳池漂浮仰望)", label: "🦅 泳池漂浮 (Pool Float)" },
            // 俯拍專用 For High Angle
            { value: "Looking up at camera with puppy eyes, cute pleading (無辜仰望)", label: "⬇️ 無辜仰望 (Puppy Eyes)" },
            { value: "Sitting on floor, hugging knees, looking up, vulnerable (抱膝仰望)", label: "⬇️ 抱膝仰望 (Hug Knees Up)" },
            { value: "Kneeling, looking up at camera, submissive angle (跪地仰望)", label: "⬇️ 跪地仰望 (Kneel Look Up)" },
            { value: "Squatting, chin on hands, looking up cutely (蹲姿托腮仰望)", label: "⬇️ 蹲姿托腮仰望 (Squat Chin Up)" },
            // 仰拍專用 For Low Angle
            { value: "Standing confidently, chin slightly down, looking at camera (自信低頭視)", label: "⬆️ 自信低頭視 (Confident Down)" },
            { value: "Hands behind head, elbows out, looking down at camera (抱頭俯視)", label: "⬆️ 抱頭俯視 (Arms Head Down)" },
            { value: "Standing with wind blowing skirt, from below (裙擺飄揚仰拍)", label: "⬆️ 裙擺飄揚 (Skirt Wind)" },
            // 側面專用 For Profile/Side
            { value: "Side profile, chin up, elegant silhouette (側臉仰頭剪影)", label: "➡️ 側臉仰頭 (Profile Chin Up)" },
            { value: "Side view walking, mid-stride, dynamic (側面行走中)", label: "➡️ 側面行走 (Side Walk)" },
            { value: "Side sitting, legs extended, elegant curves (側坐伸腿曲線)", label: "➡️ 側坐曲線 (Side Sit Curves)" }
        ]
    }
];

export const handActionList = [
     { value: "None", label: "無 (None)" },
     // ===== 可愛系 Cute =====
     { value: "peace sign near eye, cute wink (眼邊比耶)", label: "✌️ 眼邊比耶 (Peace Eye)" },
     { value: "heart hands, making heart shape (愛心手勢)", label: "💕 愛心手勢 (Heart Hands)" },
     { value: "blowing kiss to camera, playful wink (飛吻)", label: "💋 飛吻 (Blowing Kiss)" },
     { value: "finger gun, playful pointing (手槍手勢)", label: "👉 手槍手勢 (Finger Gun)" },
     { value: "holding own face with both hands, surprised cute (雙手捧臉)", label: "🥺 雙手捧臉 (Holding Face)" },
     { value: "one hand on cheek, thinking pose (單手托腮)", label: "🤔 單手托腮 (Hand on Cheek)" },
     { value: "twirling hair with finger, shy expression (撥弄髮絲)", label: "💇 撥弄髮絲 (Twirling Hair)" },
     { value: "shushing gesture, finger on lips (噓聲手勢)", label: "🤫 噓聲手勢 (Shushing)" },
     { value: "waving hand, friendly greeting (揮手打招呼)", label: "👋 揮手打招呼 (Waving)" },
     // ===== 性感系 Sexy =====
     { value: "lifting skirt hem slightly, showing a bit of thigh, teasing peek (微掀裙角)", label: "👗 微掀裙-若隱若現 (Slight Lift)" },
     { value: "lifting skirt to mid-thigh level, showing thighs clearly (掀裙露大腿)", label: "👗 掀裙-露大腿 (Medium Lift)" },
     { value: "lifting skirt high, showing upper thighs, bold pose (高掀裙)", label: "👗 高掀裙-大膽展露 (High Lift)" },
     { value: "pulling down collar, showing cleavage (拉開領口)", label: "👚 拉開領口 (Pulling Collar)" },
     { value: "shirt lift, showing stomach (掀上衣 - 露腹部用)", label: "👕 掀上衣 (Shirt Lift)" },
     { value: "biting finger, seductive look (咬手指)", label: "😏 咬手指 (Biting Finger)" },
     { value: "finger in mouth, teasing (手指含口)", label: "👄 手指含口 (Finger in Mouth)" },
     { value: "arms behind head, armpits exposed (雙手抱頭露腋)", label: "🙆 雙手抱頭 (Arms Behind Head)" },
     { value: "arms crossed under breasts (雙手抱胸托胸)", label: "💪 雙手抱胸 (Arms Crossed)" },
     { value: "squeezing breasts with arms (雙臂擠胸)", label: "👙 雙臂擠胸 (Squeezing Breasts)" },
     { value: "hands lifting breasts (雙手托胸)", label: "🙌 雙手托胸 (Lifting Breasts)" },
     { value: "hand touching neck sensually (撫摸頸部)", label: "✋ 撫摸頸部 (Touching Neck)" },
     // ===== 性感系加強 Sexy Enhanced =====
     { value: "licking lips sensually, tongue out slightly (舔唇)", label: "👅 舔唇 (Licking Lips)" },
     { value: "biting lower lip, seductive expression (咬下唇)", label: "💋 咬下唇 (Biting Lip)" },
     { value: "hand sliding down thigh, teasing (手滑大腿)", label: "🦵 手滑大腿 (Sliding Thigh)" },
     { value: "hand on inner thigh, suggestive pose (手放大腿內側)", label: "🦵 手放大腿內側 (Inner Thigh)" },
     { value: "hand caressing waist, showing curves (撫摸腰部)", label: "💃 撫摸腰部 (Caressing Waist)" },
     { value: "hand on buttocks, looking back (手放臀部回眸)", label: "🍑 手放臀部 (Hand on Butt)" },
     { value: "pulling down shoulder strap, revealing shoulder (拉下肩帶露肩)", label: "👙 拉下肩帶 (Pulling Strap Down)" },
     { value: "unzipping dress from back (背後拉拉鍊)", label: "👗 背後拉拉鍊 (Unzipping Back)" },
     { value: "unbuttoning shirt, revealing cleavage (解開鈕扣)", label: "👚 解開鈕扣 (Unbuttoning)" },
     { value: "hand inside shirt, teasing (手伸入衣內)", label: "👕 手伸入衣內 (Hand Inside Shirt)" },
     { value: "pulling waistband, showing hip bone (拉褲頭露胯骨)", label: "🩲 拉褲頭露胯 (Pulling Waistband Hip)" },
     { value: "hand touching collarbone sensually (撫摸鎖骨)", label: "✨ 撫摸鎖骨 (Touching Collarbone)" },
     { value: "hands running down body curves (雙手沿曲線滑下)", label: "💃 沿曲線滑下 (Hands Down Curves)" },
     { value: "wet hair being pushed back (撥濕髮)", label: "💦 撥濕髮 (Wet Hair Push)" },
     // ===== 調整服裝 Adjusting Clothes =====
     { value: "adjusting thighhighs (調整大腿襪)", label: "🧦 調整大腿襪 (Adjusting Stockings)" },
     { value: "pulling straps on shoulder (拉肩帶)", label: "👙 拉肩帶 (Pulling Straps)" },
     { value: "finger hooking bra strap (手指勾肩帶)", label: "👙 手指勾肩帶 (Hooking Bra Strap)" },
     { value: "pulling panty waistband (拉扯內褲頭)", label: "🩲 拉內褲頭 (Pulling Panties)" },
     { value: "stretching clothes (拉扯衣服)", label: "👔 拉扯衣服 (Stretching Clothes)" },
     // ===== 身體部位 Body Touch =====
     { value: "hands on hips, confident pose (插腰)", label: "💃 插腰 (Hands on Hips)" },
     { value: "hand on face, gentle touch (摸臉)", label: "🤚 摸臉 (Hand on Face)" },
     { value: "hands on knees, bending forward (雙手扶膝)", label: "🦵 雙手扶膝 (Hands on Knees)" },
     { value: "hands between legs, shy pose (手放腿間)", label: "🙈 手放腿間 (Hands Between Legs)" },
     { value: "covering breasts with hands (雙手遮胸)", label: "🙊 雙手遮胸 (Covering Breasts)" },
     { value: "hands covering crotch (雙手遮擋私處)", label: "🙈 遮擋私處 (Covering Crotch)" },
     // ===== 頭髮相關 Hair =====
     { value: "hair pull / grabbing hair (抓頭髮)", label: "💇 抓頭髮 (Grabbing Hair)" },
     { value: "hands holding ponytail (雙手抓馬尾)", label: "💇 雙手抓馬尾 (Holding Ponytail)" },
     { value: "running fingers through hair (手指穿過髮間)", label: "💇 手穿髮間 (Fingers Through Hair)" },
     { value: "tucking hair behind ear (撥髮耳後)", label: "💇 撥髮耳後 (Tuck Behind Ear)" },
     // ===== 特殊動作 Special =====
     { value: "reaching out to camera, inviting (伸手求抱)", label: "🤗 伸手求抱 (Reaching Out)" },
     { value: "hands tied up, arms above head (雙手高舉被縛)", label: "🙆 雙手被縛 (Hands Bound)" },
     { value: "salute pose, hand to forehead (敬禮)", label: "🫡 敬禮 (Salute)" },
     { value: "cat paw pose, cute gesture (貓爪手勢)", label: "🐱 貓爪手勢 (Cat Paw)" },
     { value: "praying hands, innocent look (雙手合十)", label: "🙏 雙手合十 (Praying)" }
];
