// projectsData.js

// すべてのプロジェクトを配列で管理
const projectsData = [
  {
    id: "hairColorRing",
    title: "Hair Color Ring",
    date: "2025年3月",
    category: "アプリ / ウェブ",
    tags: [
      { icon: "fas fa-mobile-alt", text: "アプリ" },
      { icon: "fas fa-globe", text: "ウェブ" }
    ],
    banner: "./assets/image/haircolorring/title.png",
    overview: `ヘアカラーの履歴やお気に入りカラーを記録・管理できるWebアプリ。スタイリストとの情報共有も可能。`,
    usageTech: ["React", "Sinatra", "PostgreSQL", "Figma"],
    technology: `Reactでフロントエンドを構築し、SinatraでAPIを提供。PostgreSQLを用いたデータ管理とAWS上でのデプロイを行い、FigmaでUIをデザイン。`,
    features: `カラー履歴の記録・検索・比較、QRコードでのスタイリスト連携、Google Places APIを利用したサロン検索など。`,
    challenges: `ユーザーごとに異なるニーズをUIに反映することや、サロン側との連携機能実装においてAPIの安定性・認証フローを調整するのが難しかった。QR認証の導入によって手軽さと安全性を両立。`,
    learned: `ReactとSinatraの連携方法や、PostgreSQLのスキーマ設計、OAuth周りの実装についての知見が深まった。`,
    gallery: [
      { src: "./assets/image/haircolorring/title.png" },
      { src: "./assets/image/haircolorring/image1.png" },
      { src: "./assets/image/haircolorring/image2.png" },
      { src: "./assets/image/haircolorring/image3.png" },
      { src: "./assets/image/haircolorring/image4.png" },
      { src: "./assets/image/haircolorring/image5.png" },
      { src: "./assets/image/haircolorring/image6.png" },
      { src: "./assets/image/haircolorring/image7.png" }
    ],
    links: [
      { icon: "fas fa-globe", label: "公式サイト", url: "#" }
    ],
    relatedWorks: []
  },

  {
    id: "fakeHauntedDungeon",
    title: "Fake Haunted Dungeon",
    date: "2024年6月",
    category: "ゲーム",
    tags: [
      { icon: "fas fa-gamepad", text: "Unity" },
      { icon: "fas fa-paint-brush", text: "デザイン" },
      { icon: "fas fa-dice-d20", text: "シミュレーション" }
    ],
    banner: "./assets/image/fakehaunteddungeon/title.png",
    overview: `見栄っ張りなボスゴーストが勇者の侵攻を防ぐために罠と部下で構築するダンジョンゲーム。`,
    usageTech: ["C#", "Unity", "Adobe Illustrator"],
    technology: `UnityでC#によりゲームロジックを実装し、Illustratorを使ってアート・UIを作成。`,
    features: `罠・部下配置、資源再利用、リアルタイムで迫る勇者への対応シミュレーション。`,
    challenges: `短期間で複数ステージを制作するため、資源管理と難易度設計に苦労。プレイヤーのプレイログからバランス調整を繰り返した。`,
    learned: `UnityのUIアニメーションや敵AIの設計、難易度曲線の調整手法を実践的に学べた。`,
    gallery: [
      { src: "./assets/image/fakehaunteddungeon/title.png" },
      { src: "./assets/image/fakehaunteddungeon/image1.png" },
      { src: "./assets/image/fakehaunteddungeon/image2.png" },
      { src: "./assets/image/fakehaunteddungeon/image3.png" },
      { src: "./assets/image/fakehaunteddungeon/image4.png" },
      { src: "./assets/image/fakehaunteddungeon/image5.png" },
      { src: "./assets/image/fakehaunteddungeon/image6.png" }
    ],
    links: [
      { icon: "fas fa-gamepad", label: "プレイする", url: "https://unityroom.com/games/tech1week_fake_haunted_dungeon" }
    ],
    relatedWorks: []
  },

  {
    id: "architector",
    title: "Architector",
    date: "2023年5月",
    category: "ゲーム",
    tags: [
      { icon: "fas fa-cubes", text: "パズル" },
      { icon: "fas fa-gamepad", text: "アクション" }
    ],
    banner: "./assets/image/architector/title.png",
    overview: `ギミックを組み合わせてピタゴラ装置を作り、ビー玉をゴールへ導く。`,
    usageTech: ["Unity", "C#", "Blender", "Photoshop"],
    technology: `Unityで物理挙動を管理し、C#でスクリプト制御。3DモデルはBlenderで作成。`,
    features: `ユーザーによる自由構築、複数解法可能なパズル設計、ステージ編集機能も搭載。`,
    challenges: `ギミックの自由配置とシミュレーションが物理エンジンと競合しないように調整が難しかった。ユーザーの発想に柔軟に対応する設計へと改良。`,
    learned: `Unityの物理演算とBlenderでのモデリング連携、ステージビルダーの設計思想を理解。`,
    gallery: [
      { type: "youtube", id: "zO7q1xQmXws" },
      { src: "./assets/image/architector/title.png" },
      { src: "./assets/image/architector/image1.png" },
      { src: "./assets/image/architector/image2.png" },
      { src: "./assets/image/architector/image3.png" },
      { src: "./assets/image/architector/image4.png" }
    ],
    links: [
      { icon: "fab fa-youtube", label: "デモを見る", url: "https://www.youtube.com/watch?v=zO7q1xQmXws" }
    ],
    relatedWorks: [],
  },

  {
    id: "zodiacrace",
    title: "ZODIAC RACE",
    date: "2021年7月",
    category: "ゲーム",
    tags: [
      { icon: "fas fa-running", text: "ランゲーム" },
      { icon: "fas fa-network-wired", text: "オンライン" }
    ],
    banner: "./assets/image/zodiacrace/title.png",
    overview: `十二支の動物たちがスキルを活かして競争するオンラインランアクションゲーム。`,
    usageTech: ["Unity", "Photon Realtime", "C#"],
    technology: `Unity + Photonでオンラインマッチング、ユーザーデータ管理。`,
    features: `動物ごとのスキル、多人数同時プレイ、ランキング機能搭載。`,
    challenges: `リアルタイム通信環境下での同期ズレや通信遅延が課題となったが、Photonの機能を活用して大幅に改善。`,
    learned: `ユーザーランキングの保存・更新処理を学習。`,
    gallery: [
      { src: "./assets/image/zodiacrace/title.png" },
      { src: "./assets/image/zodiacrace/image1.png" },
      { src: "./assets/image/zodiacrace/image2.png" },
      { src: "./assets/image/zodiacrace/image3.png" }
    ],
    links: [
      { icon: "fab fa-apple", label: "App Store", url: "https://apps.apple.com/us/app/zodiac-race/id1575375425" }
    ],
    relatedWorks: [],
    imgStyle: "object-position: 0 20%;"
  },

  {
    id: "planisphere",
    title: "Planisphere",
    date: "2020年12月",
    category: "ゲーム",
    tags: [
      { icon: "fas fa-gamepad", text: "ゲーム" },
      { icon: "fas fa-puzzle-piece", text: "パズル" }
    ],
    banner: "./assets/image/planisphere/title.png",
    overview: `星座早見盤を回してビームで星を結び、プトレマイオス47星座を完成させるステージパズルゲーム。`,
    usageTech: ["Unity", "C#", "Photoshop"],
    technology: `UnityとC#でビーム制御を含むパズルロジックを実装。Photoshopで背景やUIを作成。`,
    features: `各星の特性による多彩なギミック、直感的なUI、47ステージに及ぶボリューム。`,
    gallery: [
      { src: "./assets/image/planisphere/title.png" },
      { src: "./assets/image/planisphere/image1.png" },
      { src: "./assets/image/planisphere/image2.png" },
      { src: "./assets/image/planisphere/image3.png" },
      { type: "youtube", id: "G0nDw66htRg" }
    ],
    links: [
      { icon: "fab fa-youtube", label: "デモを見る", url: "https://www.youtube.com/watch?v=G0nDw66htRg" }
    ],
    relatedWorks: ["flogtoflog"],
    imgStyle: "object-position: 0 5%;"
  },

  {
    id: "flogtoflog",
    title: "かえるはかえる",
    date: "2019年12月",
    category: "ゲーム",
    tags: [
      { icon: "fas fa-frog", text: "3Dアクション" },
      { icon: "fas fa-magic", text: "変身" }
    ],
    banner: "./assets/image/flogtoflog/title.png",
    overview: `魔女に人間の姿にされたカエルが、元の姿に戻るために魂を集める3Dアクションゲーム。`,
    usageTech: ["Unity", "C#", "Blender"],
    technology: `Blenderでモデリング、Unityでキャラ切替と物理処理を制御。`,
    features: `カエル/人間の切替、ステージ攻略ギミック、アニメーション演出。`,
    gallery: [
      { src: "./assets/image/flogtoflog/title.png" },
      { src: "./assets/image/flogtoflog/image1.png" },
      { src: "./assets/image/flogtoflog/image2.png" },
      { type: "youtube", id: "OHCYFaWdvGw" }
    ],
    links: [
      { icon: "fab fa-youtube", label: "デモを見る", url: "https://www.youtube.com/watch?v=OHCYFaWdvGw" }
    ],
    relatedWorks: ["planisphere"],
  },

  {
    id: "generativewaka",
    title: "生成流転",
    date: "2023年11月",
    category: "アート",
    tags: [
      { icon: "fas fa-feather-alt", text: "和歌" },
      { icon: "fas fa-brain", text: "AI" }
    ],
    banner: "./assets/image/generativewaka/title.png",
    overview: `AIと万葉集を融合し、時代を超えた和歌の生成とその情景の連鎖的創作を目指した生成アートプロジェクト。`,
    usageTech: ["Python", "HuggingFace Transformers", "Stable Diffusion", "Vue.js"],
    technology: `和歌生成に特化したGPTモデルを構築し、情景は画像生成AIでビジュアライズ。`,
    features: `和歌→画像→和歌のループ生成、データセット自作、UIでの可視化。`,
    gallery: [
      { src: "./assets/image/generativewaka/title.png" },
      { type: "youtube", id: "BJww-SQGIS0" }
    ],
    links: [
      { icon: "fab fa-youtube", label: "デモを見る", url: "https://www.youtube.com/watch?v=BJww-SQGIS0" },
      { icon: "fas fa-book-open", label: "記事を読む", url: "https://zenn.dev/cigarette/articles/advent_aiwaka" }
    ],
    relatedWorks: []
  },

  {
    id: "gpugaraxy",
    title: "GPU Garaxy",
    date: "2023年02月",
    category: "アート",
    tags: [
      { icon: "fas fa-paint-brush", text: "アート" },
      { icon: "fas fa-microchip", text: "GPU" }
    ],
    banner: "./assets/image/gpugaraxy/title.png",
    overview: `GPU Instancingで無数の星と重力の相互作用を表現したインタラクティブアート。`,
    usageTech: ["Unity", "C#", "ShaderLab", "HLSL"],
    technology: `Unityで大量描画を実現するGPU Instancingを利用し、カスタムシェーダで星の重力挙動を制御。`,
    features: `マウス入力によるインタラクション、銀河の回転や吸収、リアルタイムレンダリング。`,
    gallery: [
      { src: "./assets/image/gpugaraxy/title.png" },
      { type: "youtube", id: "JmPBxngdnLw" }
    ],
    links: [
      { icon: "fab fa-youtube", label: "デモを見る", url: "https://www.youtube.com/watch?v=JmPBxngdnLw" }
    ],
    relatedWorks: []
  },

  {
    id: "menhelain",
    title: "メンヘラAIン",
    date: "2023年04月",
    category: "アプリ",
    tags: [
      { icon: "fas fa-mobile-alt", text: "アプリ" },
      { icon: "fas fa-robot", text: "生成AI" }
    ],
    banner: "./assets/image/menhelain/title.png",
    overview: `メンヘラのLINE文面をAIが分析・返信を提案してくれる対話シミュレーションアプリ。`,
    usageTech: ["Next.js", "Python", "OpenAI API", "Tailwind CSS"],
    technology: `Next.jsでUI構築し、バックエンドはPython経由でAI分析を行う。OpenAI APIを用いた対話生成。`,
    features: `感情の4軸分類（明暗、長短など）、自動返信提案、チャットUIで即反応可能。`,
    gallery: [
      { type: "youtube", id: "79ezFki6jFQ" },
      { src: "./assets/image/menhelain/title.png", imgStyle: "object-position: 0 20%;" },
      { src: "./assets/image/menhelain/image1.png", imgStyle: "object-position: 0 20%;" },
      { src: "./assets/image/menhelain/image2.png", imgStyle: "object-position: 0 20%;" }
    ],
    links: [
      { icon: "fab fa-youtube", label: "デモを見る", url: "https://www.youtube.com/watch?v=79ezFki6jFQ" }
    ],
    relatedWorks: [],
    imgStyle: "object-position: 0 5%;"
  },

  {
    id: "beim",
    title: "BEIM",
    date: "2020年05月",
    category: "ゲーム",
    tags: [
      { icon: "fas fa-gamepad", text: "ゲーム" },
      { icon: "fas fa-bug", text: "シミュレーション" }
    ],
    banner: "./assets/image/beim/title.png",
    overview: `蜂の女王として群れを拡大し、巣を築いていく戦略シミュレーションゲーム。`,
    usageTech: ["Unity", "C#", "Aseprite"],
    technology: `2Dアニメーションや巣の成長ロジック、リソース管理システムをC#で構築。`,
    features: `育成・資源管理・戦闘の3要素が交差する戦略性、蜂の行動AI。`,
    gallery: [
      { src: "./assets/image/beim/title.png" },
      { src: "./assets/image/beim/image1.png" },
      { src: "./assets/image/beim/image2.png" },
      { src: "./assets/image/beim/image3.png" },
      { src: "./assets/image/beim/image4.png" },
      { src: "./assets/image/beim/image5.png" }
    ],
    links: [
      { icon: "fas fa-gamepad", label: "体験する", url: "https://unityroom.com/games/unity1week_mitsu_beim" }
    ],
    relatedWorks: []
  },

  {
    id: "reversaltoilet",
    title: "Reversal Toilet",
    date: "2020年05月",
    category: "ゲーム",
    tags: [
      { icon: "fas fa-venus-mars", text: "ジェンダー" },
      { icon: "fas fa-random", text: "アクション" }
    ],
    banner: "./assets/image/reversaltoilet/title.png",
    overview: `男女のトイレが入れ替わる世界で、混乱を避けるためEnterキーでトイレの位置を逆転させるアクションゲーム。`,
    usageTech: ["Unity", "C#", "Aseprite"],
    technology: `UnityとC#でキャラ移動と入力処理を実装し、Asepriteでドット絵素材を制作。`,
    features: `テンポ感のある1画面アクション、混乱を避ける戦略的トリガー入力、ハイスコア挑戦要素。`,
    gallery: [
      { src: "./assets/image/reversaltoilet/title.png" },
      { src: "./assets/image/reversaltoilet/image1.png" },
      { src: "./assets/image/reversaltoilet/image2.png" }
    ],
    links: [
      { icon: "fas fa-gamepad", label: "体験する", url: "https://unityroom.com/games/unity1week_reversal_toilet" }
    ],
    relatedWorks: []
  },

  {
    id: "rhythmdelove",
    title: "Rhythm de Love",
    date: "2019年02月",
    category: "ゲーム",
    tags: [
      { icon: "fas fa-music", text: "リズム" },
      { icon: "fas fa-heart", text: "恋愛" }
    ],
    banner: "./assets/image/rhythmdelove/title.png",
    overview: `音楽のリズムに合わせて矢印キーを押し、ターゲットとの距離を縮めてカップル成立を目指す恋愛リズムゲーム。`,
    usageTech: ["Unity", "C#", "GarageBand"],
    technology: `UnityのAudioSourceとタイミング判定でリズムゲームを構築、GarageBandでBGM制作。`,
    features: `簡単操作で恋愛体験、複数ターゲット、矢印と判定バーによるUI。`,
    gallery: [
      { src: "./assets/image/rhythmdelove/title.png" },
      { src: "./assets/image/rhythmdelove/image1.png" },
      { src: "./assets/image/rhythmdelove/image2.png" },
      { src: "./assets/image/rhythmdelove/image3.png" }
    ],
    links: [
      { icon: "fas fa-gamepad", label: "体験する", url: "https://unityroom.com/games/rhythm_de_love" }
    ],
    relatedWorks: []
  },

  {
    id: "parkour",
    title: "PARKOUR",
    date: "2021年03月",
    category: "ゲーム",
    tags: [
      { icon: "fas fa-building", text: "ビル" },
      { icon: "fas fa-stopwatch", text: "タイムアタック" }
    ],
    banner: "./assets/image/parkour/title.png",
    overview: `夜のビル街を駆け上がり、ゴールを目指すタイムアタック型のパルクールアクションゲーム。壁にぶつかるとリスタート。`,
    usageTech: ["Unity", "C#", "Photoshop"],
    technology: `Unityでプレイヤー挙動と当たり判定を構築。Photoshopで夜景背景とUIを制作。`,
    features: `タイムアタック形式、段階的な難易度、壁の当たり判定リセット、スピード感ある挙動。`,
    gallery: [
      { src: "./assets/image/parkour/title.png", imgStyle: "object-position: 0 80%;" },
      { src: "./assets/image/parkour/image1.png" },
      { src: "./assets/image/parkour/image2.png" }
    ],
    links: [
      { icon: "fas fa-gamepad", label: "体験する", url: "https://unityroom.com/games/sppringcamp_parkour" }
    ],
    relatedWorks: [],
    imgStyle: "object-position: 0 85%;"
  },

  {
    id: "akimentor",
    title: "アキメンター",
    date: "2023年12月",
    category: "ゲーム",
    tags: [
      { icon: "fas fa-chalkboard-teacher", text: "教育" },
      { icon: "fas fa-question-circle", text: "診断" }
    ],
    banner: "./assets/image/akimentor/title.png",
    overview: `想像しているメンターを、二択の質問を通してアキネイター風に当てるゲーム。すべての質問結果は一意の人物に収束するよう設計。`,
    usageTech: ["Unity", "C#", "Excel", "Zenn記事"],
    technology: `Excelによる質問ロジックの分岐設計、UnityでのUIと診断フロー構築。`,
    features: `選択肢に応じて即座に結果が変化、UIアニメーションあり、情報設計がカギ。`,
    gallery: [
      { src: "./assets/image/akimentor/title.png", imgStyle: "object-position: 0 5%;" },
      { src: "./assets/image/akimentor/image1.png" },
      { src: "./assets/image/akimentor/image2.png" }
    ],
    links: [
      { icon: "fas fa-gamepad", label: "体験する", url: "https://unityroom.com/games/akimator" },
      { icon: "fas fa-book", label: "記事を読む", url: "https://zenn.dev/cigarette/articles/advent_schoolx" }
    ],
    relatedWorks: [],
    imgStyle: "object-position: 0 5%;"
  },

  {
    id: "sagaso",
    title: "差が素",
    date: "2019年11月",
    category: "ゲーム",
    tags: [
      { icon: "fas fa-gamepad", text: "ゲーム" },
      { icon: "fas fa-puzzle-piece", text: "パズル" }
    ],
    banner: "./assets/image/sagaso/title.png",
    overview: `数字パネルの差が素数になるようにペアを選んで消していく計算系パズル。`,
    usageTech: ["Unity", "C#", "Photoshop"],
    technology: `Unityでペア選択ロジックと素数判定を組み込み、PhotoshopでUI設計。`,
    features: `レベル別難易度（Easy/Normal/Hard/Oni）、シンプルなUI、反射神経＋計算力。`,
    gallery: [
      { src: "./assets/image/sagaso/title.png", imgStyle: "object-position: 0 25%;" },
      { src: "./assets/image/sagaso/image1.png" },
      { src: "./assets/image/sagaso/image2.png" }
    ],
    links: [
      { icon: "fas fa-gamepad", label: "体験する", url: "https://unityroom.com/games/unity1week_sagasu_sagasu" }
    ],
    relatedWorks: [],
    imgStyle: "object-position: 0 25%;"
  },

  {
    id: "gravityride",
    title: "Gravity Ride",
    date: "2024年9月",
    category: "ゲーム",
    tags: [
      { icon: "fas fa-gamepad", text: "ゲーム" },
      { icon: "fas fa-rocket", text: "アクション" }
    ],
    banner: "./assets/image/gravityride/title.png",
    overview: `惑星の軌道に沿ってジャンプを繰り返し、燃料を集めながら宇宙を旅するアクションゲーム。`,
    usageTech: ["Unity", "C#", "Photoshop"],
    technology: `軌道ジャンプのための円運動ロジックをUnityの2D物理に組み込み、PhotoshopでUI作成。`,
    features: `燃料とスコアのバランス、軌道予測とタイミング調整が求められる操作性。`,
    gallery: [
      { src: "./assets/image/gravityride/title.png" },
      { src: "./assets/image/gravityride/image1.png" }
    ],
    links: [
      { icon: "fas fa-gamepad", label: "体験する", url: "https://unityroom.com/games/unity1week_gravityride" }
    ],
    relatedWorks: []
  },

  {
    id: "bugaboo",
    title: "Bugaboo",
    date: "2019年3月",
    category: "ゲーム",
    tags: [
      { icon: "fas fa-gamepad", text: "ゲーム" },
      { icon: "fas fa-bug", text: "RPG" }
    ],
    banner: "./assets/image/bugaboo/title.png",
    overview: `バグだらけになった世界を冒険し、ボスを倒すことで世界を修復していくストーリー仕立てのRPG。`,
    usageTech: ["Unity", "C#", "Pixel Art Studio"],
    technology: `ステージクリアごとにマップが変化し、イベント演出を含めたRPGロジックを構築。`,
    features: `各ボスに応じて修復されるギミック、バグ演出による不条理表現、進行による開放マップ。`,
    gallery: [
      { src: "./assets/image/bugaboo/title.png" },
      { src: "./assets/image/bugaboo/image1.png" },
      { src: "./assets/image/bugaboo/image2.png" }
    ],
    links: [
      { icon: "fas fa-gamepad", label: "体験する", url: "https://unityroom.com/games/bugaboo01_lifeistech_toko" }
    ],
    relatedWorks: []
  },

  {
    id: "santa2",
    title: "二度寝サンタ",
    date: "2018年12月",
    category: "ゲーム",
    tags: [
      { icon: "fas fa-sleigh", text: "サンタ" },
      { icon: "fas fa-puzzle-piece", text: "パズル" }
    ],
    banner: "./assets/image/santa2/title.png",
    overview: `寝坊したサンタが急いでプレゼントを集めに行く、クリスマスを舞台にしたパズルアクションゲーム。`,
    usageTech: ["Unity", "C#", "Photoshop"],
    technology: `プレゼント収集と時間制限を組み合わせたレベル設計、Photoshopで冬の背景とUI作成。`,
    features: `サンタのダッシュ、落下ギミック、制限時間つきのミッション。`,
    gallery: [
      { src: "./assets/image/santa2/title.png", imgStyle: "object-position: 0 45%;" },
      { src: "./assets/image/santa2/image1.png" },
      { src: "./assets/image/santa2/image2.png" }
    ],
    links: [
      { icon: "fas fa-gamepad", label: "体験する", url: "https://unityroom.com/games/santa_xmascamp_2018" }
    ],
    relatedWorks: []
  },

  {
    id: "atsumeru",
    title: "鳩めーーーーーーーーる",
    date: "2018年12月",
    category: "ゲーム",
    tags: [
      { icon: "fas fa-dove", text: "鳩" },
      { icon: "fas fa-bolt", text: "アクション" }
    ],
    banner: "./assets/image/atsumeru/title.png",
    overview: `豆を集めてスコアを競う、鳩たちによるドタバタアクションバトル。`,
    usageTech: ["Unity", "C#", "Aseprite"],
    technology: `当たり判定による豆の散乱演出や、ぶつかり合いの物理演算をC#で制御。`,
    features: `他の鳩とのぶつかり、吹っ飛び演出、スコアアタック。`,
    gallery: [
      { src: "./assets/image/atsumeru/title.png" },
      { src: "./assets/image/atsumeru/image1.png" }
    ],
    links: [
      { icon: "fas fa-gamepad", label: "体験する", url: "https://unityroom.com/games/unity1week_atumeru_hatopoppo" }
    ],
    relatedWorks: []
  },

  {
    id: "telephone",
    title: "つながる電話",
    date: "2019年03月",
    category: "ゲーム",
    tags: [
      { icon: "fas fa-phone", text: "電話" },
      { icon: "fas fa-lock", text: "謎解き" }
    ],
    banner: "./assets/image/telephone/title.png",
    overview: `電話をつないで次の部屋への正解番号を探し出す、密室脱出系の謎解きゲーム。`,
    usageTech: ["Unity", "C#", "Illustrator"],
    technology: `ランダム接続のグラフ構造を用いた電話ネットワークをロジックで再現。`,
    features: `テレフォンカード管理、ランダム生成マップ、脱出パズル要素。`,
    gallery: [
      { src: "./assets/image/telephone/title.png" },
      { src: "./assets/image/telephone/image1.png" }
    ],
    links: [
      { icon: "fas fa-gamepad", label: "体験する", url: "https://unityroom.com/games/telephone_unity1week" }
    ],
    relatedWorks: []
  }
];
