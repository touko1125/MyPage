// 経験・エピソードデータ (個人の成長・コンテストなど)
const experienceData = [
    {
        yearTitle: "2018年",
        title: "初めてのゲーム制作",
        textList: [
            "高校一年生で友人のSNS投稿から興味を抱き、プログラミングスクールに挑戦。半年間でオリジナルのRPGゲームを作成しリリースしました。",
            "<strong>成果：</strong>スクール内の同年代の仲間から刺激を受け、ゲーム開発の楽しさを体感しました。"
        ],
        tags: ["Unity", "Start"]
    },
    {
        yearTitle: "2019年",
        title: "初めての受賞",
        textList: [
            "かえると人間の姿を行き来する3Dアクションゲームを作成。デザインや動きの細部までこだわり、多言語対応も行いました。",
            "<strong>成果：</strong>Unityインターハイ2019にて決勝進出、ゴールドアワードを受賞しました。"
        ],
        tags: ["Unity", "Gold Award"]
    },
    {
        yearTitle: "2020年",
        title: "高校生活最後の挑戦",
        textList: [
            "星座盤をモチーフとしたパズルゲームを制作。受験勉強と並行しての制作でしたが、世界観表現とギミック実装に注力しました。",
            "<strong>成果：</strong>Unityインターハイ2020 審査員特別賞、アプリ甲子園2020 優勝・技術賞を受賞しました。"
        ],
        tags: ["Unity", "優勝", "技術賞"]
    },
    {
        yearTitle: "2024年",
        title: "FUTURE GATEWAY AWARD開催",
        textList: [
            "中高生であれば誰でも応募可能なオープン大会兼展示会としてFUTURE GATEWAYを開催しました。",
            "<strong>成果：</strong>合計55名、総計63作品の応募があり、渋谷のギャラリー大和田にて展示・審査会を実施しました。"
        ],
        tags: ["展示会主催", "運営"]
    }
];

// インターンシップ・就業経験データ (新規追加)
const internshipData = [
    {
        company: "株式会社Cygames",
        period: "2021年5月 - 2025年10月",
        role: "ゲーム開発エンジニア (長期インターン)",
        description: "ゲームエンジンを用いたゲーム制作における設計思想から、実際のエンジン開発、サーバサイド実装まで、ハードスキル・ソフトスキルの両面で指導を受けました。",
        contribution: "<strong>成果：短期間での複数プロダクト開発と技術探求</strong><br>期間中、個人・チーム制作含め計4本のゲームを開発。サーバ構築やゲームエンジンの自作など、多面的な技術探究にも取り組みました。",
        icon: "fas fa-dragon"
    },
    {
        company: "ライフイズテック株式会社",
        period: "2021年7月 - 現在",
        role: "メンター / カリキュラム開発 (長期インターン)",
        description: "中高生向けプログラミング指導、カリキュラム制作、大学生メンターの育成研修の設計と指導に従事。",
        contribution: "<strong>成果：200名以上の中高生・100名以上の大学生への継続的指導</strong><br>累計200名以上の中高生と100名以上の大学生に対し指導プログラムを企画・実践。教え子から未踏ジュニアスーパークリエイター認定者も輩出。",
        icon: "fas fa-chalkboard-teacher"
    },
    {
        company: "株式会社teamLab",
        period: "2023年2月 (1ヶ月)",
        role: "インタラクティブエンジニア (短期インターン)",
        description: "インタラクティブアートの企画から実装までを一貫して担当。",
        contribution: "<strong>成果：社内展示まで完遂した開発フロー</strong><br>社員メンターの指導のもと、期間内に作品を完成させ社内展示を実施。<br>プロダクト：<a href='https://www.youtube.com/watch?v=JmPBxngdnLw' target='_blank'>GPU Galaxy</a>",
        icon: "fas fa-lightbulb"
    },
    {
        company: "ソニー株式会社",
        period: "2025年9月 (1ヶ月)",
        role: "エンジニア (短期インターン)",
        description: "Unreal Engineとモーションデータを用いたエンタメ向けアプリ開発。物理シミュレーションによる流体表現を担当。",
        contribution: "<strong>成果：キャラクターとインタラクションする水表現の実現</strong><br>キャラクターと相互作用するリアルタイム水シミュレーションを実装し、計算負荷を踏まえた実現可能性の検証まで行いました。",
        icon: "fas fa-gamepad"
    }
];