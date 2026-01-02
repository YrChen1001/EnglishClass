// Add more question sets to the existing array
questionSets.push(
    {
        id: 4,
        range: "Q158-160",
        title: "退休公告備忘錄 (Memo)",
        document: {
            type: "備忘錄",
            title: "Retirement Announcement",
            title_zh: "退休公告",
            content: `<p><span class="label">Date:</span> May 15</p>
<p>We would like to announce the upcoming retirement of Ken Esser.</p>
<p>Mr. Esser began his 30-year career here at The Terra Fund as a wildlife ranger in the California Wildlife Park. He has held seven different positions, eventually becoming the general director of conservation for all West Coast Wildlife Parks. He has been in this position for the past 15 years, leading with vision and commitment. Now at the age of 65, he is leaving us for a well-deserved retirement.</p>
<p>The board of directors has voted to give him a Lifetime Achievement Award and will present him with a commemorative plaque at the staff meeting next Friday. Following the staff meeting, we invite all employees to stay for a reception to honor Mr. Esser and his great contributions. If you would like to write a farewell note to Mr. Esser, please stop by Andrew Braun's office to sign a book that will be presented at the reception.</p>`,
            translation: `<p><span class="label">日期：</span>5月15日</p>
<p>我們謹此宣布 Ken Esser 即將退休的消息。</p>
<p>Esser 先生在 The Terra Fund 展開其 30 年的職涯，起初是加州野生動物園的野生動物巡護員。他曾擔任過七個不同的職位，最終成為西岸所有野生動物園的保育總監。他在這個職位上已任職 15 年，以遠見和承諾領導著大家。現在他 65 歲了，即將離開我們，享受應得的退休生活。</p>
<p>董事會已投票決定頒發「終身成就獎」給他，並將在下週五的員工會議上頒贈紀念牌匾。員工會議結束後，我們邀請所有員工留下來參加招待會，以表彰 Mr. Esser 及其卓越貢獻。如果您想寫給 Esser 先生道別的話，請到 Andrew Braun 的辦公室簽署一本將在招待會上致贈的紀念冊。</p>`
        },
        questions: [
            {
                number: 158, text: "In what field does Mr. Esser work?", translation: "Mr. Esser 在哪個領域工作？",
                options: [
                    { letter: "A", text: "Youth education", translation: "青年教育" },
                    { letter: "B", text: "Historical archiving", translation: "歷史檔案管理" },
                    { letter: "C", text: "Nature conservation", translation: "自然保育" },
                    { letter: "D", text: "Urban development", translation: "都市發展" }
                ],
                answer: "C", explanation: "職稱包含 \"wildlife ranger\"（野生動物巡護員）和 \"director of conservation\"（保育總監），故選自然保育。"
            },
            {
                number: 159, text: "For how many years has Mr. Esser worked at The Terra Fund?", translation: "Mr. Esser 在 The Terra Fund 工作了幾年？",
                options: [
                    { letter: "A", text: "7", translation: "7" },
                    { letter: "B", text: "15", translation: "15" },
                    { letter: "C", text: "30", translation: "30" },
                    { letter: "D", text: "65", translation: "65" }
                ],
                answer: "C", explanation: "第一段提及 \"began his 30-year career here\"（在此展開 30 年職涯）。15年是擔任總監的時間，65是他的年齡。"
            },
            {
                number: 160, text: "What will NOT be given to honor Mr. Esser?", translation: "哪一項不會被用來表彰 Mr. Esser？",
                options: [
                    { letter: "A", text: "A reception", translation: "招待會" },
                    { letter: "B", text: "An award", translation: "獎項" },
                    { letter: "C", text: "A book", translation: "書（紀念冊）" },
                    { letter: "D", text: "A photo album", translation: "相簿" }
                ],
                answer: "D", explanation: "文中提到 reception（招待會）、Lifetime Achievement Award（獎項）、plaque（牌匾）、book（簽名冊），未提到 photo album（相簿）。"
            }
        ]
    },
    {
        id: 5,
        range: "Q161-164",
        title: "通訊軟體討論 (Online Chat)",
        document: {
            type: "線上對話",
            title: "Mondvale Road Job Discussion",
            title_zh: "Mondvale Road 案件討論",
            content: `<p><strong>Kato, Yuri [9:21 A.M.]:</strong> Hello. I'd like an update on the Mondvale Road job. Are we still on schedule to begin on Monday?</p>
<p><strong>Vega, Camila [9:22 A.M.]:</strong> No, I'm afraid that there has been some delay in getting the fabric for the drapes and bed linens. It looks like we may be held up until Wednesday.</p>
<p><strong>Kato, Yuri [9:22 A.M.]:</strong> Have you communicated this to the client?</p>
<p><strong>Vega, Camila [9:23 A.M.]:</strong> Not yet. Richard is waiting to hear from the distributor first so that we can give the client a firm date. Have you heard from them yet, Richard?</p>
<p><strong>Bremen, Richard [9:34 A.M.]:</strong> I just got off the phone with them. It looks like everything will arrive on Monday afternoon, so we could actually begin the job on Tuesday.</p>
<p><strong>Vega, Camila [9:35 A.M.]:</strong> That's good news. I'll call the client this morning and let them know.</p>
<p><strong>Bremen, Richard [9:35 A.M.]:</strong> You should also remind them that we will begin working on the guest rooms first and work our way toward the lobby and first-floor public areas last. We'll send a large crew so the work can be finished quickly.</p>
<p><strong>Kato, Yuri [9:36 A.M.]:</strong> How long do you think it will take to complete the job?</p>
<p><strong>Bremen, Richard [9:37 A.M.]:</strong> We can probably be finished by Friday, as we originally planned.</p>
<p><strong>Kato, Yuri [9:38 A.M.]:</strong> Excellent. They're a new client with several locations and a high profile in the business community, so I want things to go smoothly. I'm sure there will be more work with them in the long run if all goes well.</p>`,
            translation: `<p><strong>Kato, Yuri [9:21]:</strong> 哈囉。我想了解 Mondvale Road 案子的最新進度。我們還能按計畫在週一開工嗎？</p>
<p><strong>Vega, Camila [9:22]:</strong> 不，恐怕窗簾和床單的布料取得有些延誤。看起來我們可能會被耽擱到週三。</p>
<p><strong>Kato, Yuri [9:22]:</strong> 妳跟客戶溝通這件事了嗎？</p>
<p><strong>Vega, Camila [9:23]:</strong> 還沒。Richard 在等經銷商的回覆，這樣我們才能給客戶一個確定的日期。Richard，你有他們的消息了嗎？</p>
<p><strong>Bremen, Richard [9:34]:</strong> 我剛跟他們通完電話。看起來所有東西週一下午會到，所以我們可以在週二開工。</p>
<p><strong>Vega, Camila [9:35]:</strong> 那真是好消息。我今早會打電話給客戶告知他們。</p>
<p><strong>Bremen, Richard [9:35]:</strong> 妳也應該提醒他們，我們會先從客房開始施工，最後才做大廳和一樓公共區域。我們會派一個大工班去，這樣工作能很快完成。</p>
<p><strong>Kato, Yuri [9:36]:</strong> 你覺得完成這個案子需要多久？</p>
<p><strong>Bremen, Richard [9:37]:</strong> 應該可以照原訂計畫在週五前完工。</p>
<p><strong>Kato, Yuri [9:38]:</strong> 太棒了。他們是個在商業圈高知名度且擁有多個據點的新客戶，所以我希望一切順利。如果一切順利，我確信長遠來看會有更多合作機會。</p>`
        },
        questions: [
            {
                number: 161, text: "What kind of business does the client most likely own?", translation: "客戶最可能擁有哪種企業？",
                options: [
                    { letter: "A", text: "A shipping company", translation: "航運公司" },
                    { letter: "B", text: "A fabric manufacturing factory", translation: "布料製造廠" },
                    { letter: "C", text: "A hotel chain", translation: "連鎖飯店" },
                    { letter: "D", text: "A design firm", translation: "設計公司" }
                ],
                answer: "C", explanation: "對話中提到施工區域包含 \"guest rooms\"（客房）、\"lobby\"（大廳）以及需要 \"bed linens\"（床單），這都是飯店的特徵。"
            },
            {
                number: 162, text: "When will the crew begin work?", translation: "工班何時開始工作？",
                options: [
                    { letter: "A", text: "On Monday", translation: "週一" },
                    { letter: "B", text: "On Tuesday", translation: "週二" },
                    { letter: "C", text: "On Wednesday", translation: "週三" },
                    { letter: "D", text: "On Friday", translation: "週五" }
                ],
                answer: "B", explanation: "Richard 說材料週一下午到，\"so we could actually begin the job on Tuesday\"（所以我們可以週二開工）。"
            },
            {
                number: 163, text: "What will Ms. Vega most likely do next?", translation: "Ms. Vega 接下來最可能做什麼？",
                options: [
                    { letter: "A", text: "Deliver a shipment of drapes", translation: "運送窗簾" },
                    { letter: "B", text: "Organize a large work crew", translation: "組織大型工班" },
                    { letter: "C", text: "Call the fabric distributor", translation: "打電話給布料經銷商" },
                    { letter: "D", text: "Contact the client", translation: "聯繫客戶" }
                ],
                answer: "D", explanation: "Vega 說 \"I'll call the client this morning and let them know.\"（我今早會打給客戶讓他們知道）。"
            },
            {
                number: 164, text: "At 9:38 A.M., what does Ms. Kato mean when she writes, \"in the long run\"?", translation: "在 9:38，Ms. Kato 寫 \"in the long run\" 是什麼意思？",
                options: [
                    { letter: "A", text: "She is pleased that the client is located nearby.", translation: "她很高興客戶就在附近。" },
                    { letter: "B", text: "She is proud of her company's history of high-quality performance.", translation: "她對公司高品質表現的歷史感到自豪。" },
                    { letter: "C", text: "She believes that the work will be more expensive than expected.", translation: "她認為工作費用會比預期高。" },
                    { letter: "D", text: "She thinks that there could be additional work with the client in the future.", translation: "她認為未來可能會跟該客戶有額外的合作機會。" }
                ],
                answer: "D", explanation: "她說 \"I'm sure there will be more work with them in the long run\"（確信長遠來看會有更多工作），對應選項 (D)。"
            }
        ]
    },
    {
        id: 6,
        range: "Q165-167",
        title: "辦公家具安裝說明 (Instructions)",
        document: {
            type: "說明書",
            title: "Perrybridge Office Furniture - Installation Manual",
            title_zh: "Perrybridge 辦公家具 - 安裝手冊",
            content: `<p><strong>General Notes</strong></p>
<ul>
<li>Always use the tools specified in the instructions when installing.</li>
<li>Use eye protection when working with tools.</li>
<li>Ensure that your work area is clean and clear of any potential obstructions to the installation.</li>
<li>Wash hands before beginning the installation process.</li>
<li>Parts weighing more than 15 kilograms are marked Heavy. Use two or more people when lifting or moving these items.</li>
<li>Elements marked DS have one or more delicate surfaces. Handle these carefully to avoid scratching.</li>
<li>If you have any questions, please see our Help section on perrybridgeoffice.com before contacting us through our online form. To receive the installation instructions in a language not available in this manual, please contact us at 497-555-0101.</li>
</ul>`,
            translation: `<p><strong>一般注意事項</strong></p>
<ul>
<li>安裝時請務必使用說明書中指定的工具。</li>
<li>使用工具時請佩戴眼部護具。</li>
<li>確保您的工作區域乾淨且清除了任何可能阻礙安裝的障礙物。</li>
<li>開始安裝程序前請洗手。</li>
<li>重量超過 15 公斤的零件標有 Heavy。搬運這些物品時請使用兩人或兩人以上。</li>
<li>標有 DS 的元件具有易損表面。請小心搬運以免刮傷。</li>
<li>如有任何疑問，請先查看 perrybridgeoffice.com 的「幫助」區塊。若需本手冊未提供的語言版本的安裝說明，請致電 497-555-0101。</li>
</ul>`
        },
        questions: [
            {
                number: 165, text: "What is described in the general notes?", translation: "一般注意事項中描述了什麼？",
                options: [
                    { letter: "A", text: "How to connect cubicle walls", translation: "如何連接隔間牆" },
                    { letter: "B", text: "How to measure the office space", translation: "如何測量辦公空間" },
                    { letter: "C", text: "How to operate the required tools", translation: "如何操作所需工具" },
                    { letter: "D", text: "How to prepare an area for installation", translation: "如何準備安裝區域" }
                ],
                answer: "D", explanation: "注意事項提到 \"Ensure that your work area is clean and clear of any potential obstructions\"（確保工作區域乾淨無障礙），屬於場地準備工作。"
            },
            {
                number: 166, text: "According to the instructions, what should people do before beginning to work?", translation: "根據說明，人們在開始工作前應該做什麼？",
                options: [
                    { letter: "A", text: "Wash their hands", translation: "洗手" },
                    { letter: "B", text: "Make sure no parts are scratched", translation: "確保零件沒被刮傷" },
                    { letter: "C", text: "Record the weight of each part", translation: "記錄每個零件的重量" },
                    { letter: "D", text: "Clean their tools", translation: "清潔工具" }
                ],
                answer: "A", explanation: "文中明確寫道 \"Wash hands before beginning the installation process.\"。"
            },
            {
                number: 167, text: "Why are people advised to call the listed number?", translation: "為什麼建議人們撥打所列的電話號碼？",
                options: [
                    { letter: "A", text: "To order additional parts", translation: "訂購額外零件" },
                    { letter: "B", text: "To schedule a product installation", translation: "安排產品安裝" },
                    { letter: "C", text: "To report a defective product", translation: "報告瑕疵產品" },
                    { letter: "D", text: "To acquire a different version of the manual", translation: "取得不同版本的說明書" }
                ],
                answer: "D", explanation: "最後一句提到 \"To receive the installation instructions in a language not available... please contact us at 497-555-0101\"（若需本手冊未提供的語言版本...請致電）。"
            }
        ]
    }
);
