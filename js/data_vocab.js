const vocabData = [
    {
        category: "1. 一般商務與辦公室 (General Business & Office)",
        words: [
            { word: "announce", phonetic: "[əˈnaʊns] (v.)", translation: "宣布、發布", synonyms: "declare, proclaim, notify", example: "announce a retirement (宣布退休)" },
            { word: "orientation", phonetic: "[ˌɔːriənˈteɪʃn] (n.)", translation: "職前訓練、培訓；方向", synonyms: "training, induction", example: "identification badges received at orientation (職前訓練時收到的識別證)" },
            { word: "policy", phonetic: "[ˈpɑːləsi] (n.)", translation: "政策、規定", synonyms: "rule, regulation, guideline", example: "company policies (公司政策)" },
            { word: "extension", phonetic: "[ɪkˈstenʃn] (n.)", translation: "分機；延期", synonyms: "branch number; postponement", example: "reach at extension 8645 (撥打分機 8645 聯繫)" },
            { word: "headquarters", phonetic: "[ˈhedkwɔːrtərz] (n.)", translation: "總部", synonyms: "main office, HQ", example: "(相關文章常考)" },
            { word: "reception", phonetic: "[rɪˈsepʃn] (n.)", translation: "接待會；接待處；(產品)反應", synonyms: "gathering; front desk; response", example: "stay for a reception (留下來參加招待會); warm reception (熱烈迴響)" },
            { word: "designate", phonetic: "[ˈdezɪɡneɪt] (v.)", translation: "指派、指定", synonyms: "assign, appoint, nominate", example: "repair assigned to... (維修指派給...)" },
            { word: "colleague", phonetic: "[ˈkɑːliːɡ] (n.)", translation: "同事", synonyms: "coworker, associate", example: "(相關文章常考)" }
        ]
    },
    {
        category: "2. 行銷與銷售 (Marketing & Sales)",
        words: [
            { word: "launch", phonetic: "[lɔːntʃ] (v./n.)", translation: "(產品)上市、發表；發射", synonyms: "introduce, release, roll out", example: "launch a new flavor (推出新口味)" },
            { word: "campaign", phonetic: "[kæmˈpeɪn] (n.)", translation: "(行銷、商業)活動", synonyms: "drive, operation, strategy", example: "marketing campaign (行銷活動)" },
            { word: "distribute", phonetic: "[dɪˈstrɪbjuːt] (v.)", translation: "分銷、配送；分發", synonyms: "circulate, dispense, deliver", example: "distributed internationally (國際分銷)" },
            { word: "feature", phonetic: "[ˈfiːtʃər] (v./n.)", translation: "以...為特色；專題報導；特色", synonyms: "highlight, spotlight; characteristic", example: "be featured in an article (在文章中被專題報導)" },
            { word: "high profile", phonetic: "[haɪ ˈproʊfaɪl] (adj./n.)", translation: "高知名度、備受矚目的", synonyms: "prominent, famous, renowned", example: "high profile in the business community (在商界享有高知名度)" },
            { word: "draw interest", phonetic: "(phr.)", translation: "吸引興趣", synonyms: "attract attention", example: "draw much interest (吸引許多興趣)" },
            { word: "target market", phonetic: "(n.)", translation: "目標市場", synonyms: "", example: "reception in its target markets (在目標市場的反應)" }
        ]
    },
    {
        category: "3. 財務與成本 (Finance & Cost)",
        words: [
            { word: "outlay", phonetic: "[ˈaʊtleɪ] (n.)", translation: "支出、經費、開銷", synonyms: "expenditure, cost, expense", example: "estimated outlay (預估支出)" },
            { word: "overhead", phonetic: "[ˈoʊvərhed] (n.)", translation: "經常性開支、營運成本 (水電租金等)", synonyms: "operating expense", example: "total indirect overhead (總間接費用)" },
            { word: "breakdown", phonetic: "[ˈbreɪkdaʊn] (n.)", translation: "細目分類；故障", synonyms: "analysis, itemization; malfunction", example: "requested breakdown (要求的細目分類)" },
            { word: "earnings", phonetic: "[ˈɜːrnɪŋz] (n.)", translation: "收益、獲利", synonyms: "profit, income, revenue", example: "first-quarter earnings (第一季收益)" },
            { word: "royalty", phonetic: "[ˈrɔɪəlti] (n.)", translation: "版稅；專利權利金", synonyms: "usage fee", example: "royalty fees (版稅費用)" },
            { word: "estimate", phonetic: "[ˈestɪmət] (n./v.)", translation: "估價、預估", synonyms: "quote, projection", example: "estimated cost (預估成本)" },
            { word: "reduction", phonetic: "[rɪˈdʌkʃn] (n.)", translation: "減少、折扣", synonyms: "discount, cut, decrease", example: "price reduction (降價)" }
        ]
    },
    {
        category: "4. 合約與法律 (Contracts & Law)",
        words: [
            { word: "agreement", phonetic: "[əˈɡriːmənt] (n.)", translation: "協議、合約；同意", synonyms: "contract, deal, settlement", example: "updated agreement (更新後的協議)" },
            { word: "provision", phonetic: "[prəˈvɪʒn] (n.)", translation: "條款、規定；供應", synonyms: "clause, stipulation, term", example: "provisions of the contract (合約條款)" },
            { word: "amend", phonetic: "[əˈmend] (v.)", translation: "修改、修訂 (文件、法案)", synonyms: "modify, revise, alter", example: "amend your previous contract (修改您先前的合約)" },
            { word: "terminate", phonetic: "[ˈtɜːrmɪneɪt] (v.)", translation: "終止、結束", synonyms: "end, conclude, cease", example: "lease termination (租約終止)" },
            { word: "renew", phonetic: "[rɪˈnuː] (v.)", translation: "續約；更新", synonyms: "extend, resume", example: "automatically renews (自動續約)" },
            { word: "enclose", phonetic: "[ɪnˈkloʊz] (v.)", translation: "隨信附上", synonyms: "attach, include", example: "The updated agreement is enclosed. (更新的協議書已隨信附上)" },
            { word: "initial", phonetic: "[ɪˈnɪʃl] (v./n./adj.)", translation: "簽署姓名的首字母；最初的", synonyms: "sign (initials); beginning", example: "Please initial the marked paragraphs. (請在標記的段落簽署縮寫)" }
        ]
    },
    {
        category: "5. 生產、物流與操作 (Production, Operations & Logistics)",
        words: [
            { word: "feasibility", phonetic: "[ˌfiːzəˈbɪləti] (n.)", translation: "可行性", synonyms: "practicability, viability", example: "project's feasibility (專案可行性)" },
            { word: "inventory", phonetic: "[ˈɪnvəntɔːri] (n.)", translation: "庫存、存貨", synonyms: "stock, supply", example: "in stock (有庫存)" },
            { word: "defect", phonetic: "[ˈdiːfekt] (n.)", translation: "瑕疵、缺陷", synonyms: "fault, flaw, imperfection", example: "defective product (瑕疵產品)" },
            { word: "fragile", phonetic: "[ˈfrædʒl] (adj.)", translation: "易碎的、脆弱的", synonyms: "breakable, delicate", example: "fragile samples (易碎樣品)" },
            { word: "durable", phonetic: "[ˈdʊrəbl] (adj.)", translation: "耐用的", synonyms: "long-lasting, sturdy", example: "lightweight and durable (輕便且耐用)" },
            { word: "obstruction", phonetic: "[əbˈstrʌkʃn] (n.)", translation: "障礙物、阻礙", synonyms: "obstacle, blockage", example: "clear of any obstructions (清除任何障礙物)" },
            { word: "dispatch/shipment", phonetic: "(n.)", translation: "運送、貨物", synonyms: "delivery, consignment", example: "(相關文章常考)" }
        ]
    },
    {
        category: "6. 客戶服務與溝通 (Customer Service & Communication)",
        words: [
            { word: "inquire", phonetic: "[ɪnˈkwaɪər] (v.)", translation: "詢問、調查", synonyms: "ask, query, investigate", example: "inquire about an itinerary (詢問行程表)" },
            { word: "reservation", phonetic: "[ˌrezərˈveɪʃn] (n.)", translation: "疑慮、保留態度；預約", synonyms: "doubt, concern; booking", example: "have some reservations about (對...有些疑慮); make a reservation (預約)" },
            { word: "feedback", phonetic: "[ˈfiːdbæk] (n.)", translation: "回饋意見", synonyms: "comment, response, evaluation", example: "As a result of feedback (由於回饋意見)" },
            { word: "accommodate", phonetic: "[əˈkɑːmədeɪt] (v.)", translation: "滿足(需求)；容納", synonyms: "meet (needs); hold", example: "meet the needs (滿足需求 - 雖然文中使用 meet, accommodate 也是常考替換字)" },
            { word: "verify", phonetic: "[ˈverɪfaɪ] (v.)", translation: "證實、核對", synonyms: "confirm, substantiate, check", example: "verify that you posted the review (證實您發布了評論)" },
            { word: "complimentary", phonetic: "[ˌkɑːmplɪˈmentri] (adj.)", translation: "贈送的、免費的；讚美的", synonyms: "free, gratis; praising", example: "(相關文章常考，如 complimentary breakfast)" }
        ]
    },
    {
        category: "7. 其他高頻片語 (High-Frequency Phrases)",
        words: [
            { word: "in the long run", phonetic: "", translation: "從長遠來看 (ultimately, over a long period)", synonyms: "", example: "" },
            { word: "rest assured", phonetic: "", translation: "請放心 (be certain, have confidence)", synonyms: "", example: "" },
            { word: "account for", phonetic: "", translation: "考慮到；說明；佔(比例) (consider; explain)", synonyms: "", example: "" },
            { word: "attend to", phonetic: "", translation: "處理；照料 (deal with, take care of)", synonyms: "", example: "" },
            { word: "coming soon", phonetic: "", translation: "即將推出 (available shortly)", synonyms: "", example: "" },
            { word: "make it", phonetic: "", translation: "趕上；成功；到達 (succeed; arrive)", synonyms: "", example: "" }
        ]
    }
];
