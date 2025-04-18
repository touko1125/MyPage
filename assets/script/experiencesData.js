// 経験・エピソードデータ
const experienceData = [
    {
        yearTitle: "2018年 初めてのゲーム制作",
        textList: [
            "高校一年生で友人のSNS投稿から興味を抱き、それまで経験したことのなかったプログラミングスクールに挑戦。半年間でオリジナルのRPGゲームを作成しリリースしました。",
            "<strong>成果：</strong>スクール内の同年代の仲間から刺激を受け、初めてのゲーム開発でありながらのめり込んで制作を進め、ゲーム開発の楽しさを体感しました。"
        ],
        tags: ["Unity", "ゲーム制作"]
    },
    {
        yearTitle: "2019年 初めての受賞",
        textList: [
            "翌年は新規企画として、かえると人間の姿を行き来しながら本来の姿に戻るために奮闘する3Dアクションゲームを作成。デザインや動きの細部までこだわり、多言語対応も行いました。",
            "<strong>成果：</strong>Unityインターハイ2019にて決勝まで進出し、UDX秋葉原にてプレゼンテーションを実施。結果ゴールドアワードを頂くことが出来ました。"
        ],
        tags: ["Unity", "ゲーム制作", "大会"]
    },
    {
        yearTitle: "2019-2020年 ゲームジャムへの挑戦",
        textList: [
            "上記の作品に並行して、1週間でゲームを完成させるunity1weekに7度参加。7度の参加を通して、自身の作りたい形と多くの人に遊んで貰えるものとの間を埋めるためのPDCAサイクルを回していくことが出来ました。",
            "<strong>成果：</strong>初参加時には合計22人がプレイ・評価。評価は6項目平均で「3.1点/5点」を獲得しました。最後に参加した際には、合計71人がプレイ・評価。評価は6項目平均で「4点/5点」を獲得することができました(ゲームジャム参加者が遊んだ作品に関して「楽しさ」「絵作り」「サウンド」「操作性」「雰囲気」「斬新さ」の6項目で1-5の段階評価をつけ、評価は平均3点以上が高いとされています)"
        ],
        tags: ["Unity", "短期開発", "ゲームジャム"]
    },
    {
        yearTitle: "2020年 高校生活最後の大会挑戦",
        textList: [
            "前年度作成した作品の反省点などを踏まえ、自身の強みである世界観を最大限表現し、星座盤をモチーフとしたパズルゲームを制作。受験勉強と並行しての制作となり、時間の捻出が非常に課題となりましたが、勉強と開発のスイッチを上手く切りかえていく事が出来ました。",
            "<strong>成果：</strong>作品の世界観やプトレマイオスの47星座全てをステージに落とし込んだボリューム、複雑なロジックのギミックを制作したことなどを評価して頂き、Unityインターハイ2020では審査員特別賞、アプリ甲子園2020では優勝と技術賞を頂くことが出来ました。"
        ],
        tags: ["Unity", "ゲーム制作", "パズルゲーム"]
    },
    {
        yearTitle: "2021年~ Life is Tech!での長期インターン",
        textList: [
            "2021年7月から2024年10月現在に至るまでLifeisTech!社にて中高生の可能性を1人でも多く最大限伸ばす、というミッションの元様々な事業に関わっています。短いものとしては1-4日のキャンプ形式、長いものとしては通年通学型のスクール形式のサービスを通してUnityを使用したゲーム開発や、AI技術の活用術を指導していきました。",
            "<strong>成果：</strong>様々な中高生に関わっていく中で、様々な背景事情や技術土壌がある全ての中高生に対し、何か一つでも成長を届けようと創意工夫を行い、結果として当初は消極的に参加していたメンバーに対しても開発に積極的に向き合い、成果を出せるようになるという成長を届けることが出来ました。実際に4年間で担当したメンバーは50〜100人ほどに上り、その中には未踏ジュニアプロジェクトでスーパークリエイターの称号を得たメンバーや、アプリ甲子園一次予選を通過したメンバーも含まれています。また、その他の大会でも多くのメンバーが受賞を果たし、様々な場面で成果を上げることができました。"
        ],
        tags: ["長期インターン", "教育", "中高生", "大学生"]
    },
    {
        yearTitle: "2023年 日本ゲーム大賞への挑戦",
        textList: [
            "エンジニア2名、デザイナー1名、プランナー1名の4人チームで2ヶ月間にわたり、チーム開発に挑戦。リードエンジニアとしてシステム設計から制作の大半を担当",
            "<strong>成果：</strong>チームメンバーがみなチーム開発に慣れない中で、2ヶ月という非常に短期の開発となりました。途中想定通り時間が取れず、なかなか制作が進まないということもありましたが、最終的に作品を作り上げることが出来、日本ゲーム大賞アマチュア部門で1次審査突破をすることが出来ました。"
        ],
        tags: ["チーム開発", "ゲーム制作", "大会"]
    },
    {
        yearTitle: "2024年 FUTURE GATEWAY AWARD開催",
        textList: [
            "2022,2023年と2年間、作品ジャンル不問のFUTURE GATEWAYという展示会を開催していきました。2025年はこれまでのクローズな展示会から形を進化させ、中高生であれば誰でも応募可能なオープン大会兼展示会として2025年3月に展示会を開催しました。",
            "<strong>成果：</strong>合計55名、総計63作品の応募をいただき、応募いただいた作品を全て渋谷のギャラリー大和田にて展示を行い、複数のエンジニアやクリエイターの方をお呼びして審査会を行いました。審査会や展示会を通して、多くの中高生に、作品を体験してもらい、FBをもらう機会を設けるkとおができました。"
        ],
        tags: ["展示会", "大会主催"]
    }
  ];