// Add more question sets (Q168-185)
questionSets.push(
    {
        id: 7,
        range: "Q168-171",
        title: "新進員工須知 (Email)",
        document: {
            type: "電子郵件",
            title: "Welcome - Lowmaster Toronto",
            title_zh: "歡迎 - Lowmaster 多倫多",
            content: `<p><span class="label">From:</span> DDrabik@lowmaster.co.ca<br>
<span class="label">To:</span> &lt;New Employees List&gt;<br>
<span class="label">Subject:</span> Welcome<br>
<span class="label">Date:</span> May 28</p>
<p>The Lowmaster Toronto office is pleased to have such a promising group of new employees become part of our consulting team. Please review the company policies listed below and familiarize yourself with some important locations on our campus.</p>
<p>Personal computers may not be used to complete company work. If you need to work outside your offices in Dempsey Hall, visit the Information Technology Department to request a security-enabled laptop. Their office is located in the Russ Building in R-135.</p>
<p>The identification badges you received at orientation must be worn at all times; they provide access to the buildings on campus. If your identification badge is misplaced, contact the Security Desk at Hadley Building H-290 (extension 8645).</p>
<p>The cafeteria is located on the first floor in the Russ Building (open until 2:30 P.M.). The lounge in D-108 in Dempsey Hall offers coffee, tea, juice, and light snacks until 6:00 P.M. daily.</p>
<p>Brandt Library is located behind the Russ Building and can be accessed via the raised walkway connecting the two.</p>
<p>For packages or important mail, notify the Shipping and Receiving Office at extension 8300 or stop by room R-004 in the basement of the Russ Building.</p>
<p>Sincerely,<br>Donald Drabik</p>`,
            translation: `<p><span class="label">寄件者：</span>DDrabik@lowmaster.co.ca<br>
<span class="label">收件者：</span>&lt;新進員工名單&gt;<br>
<span class="label">主旨：</span>歡迎<br>
<span class="label">日期：</span>5月28日</p>
<p>Lowmaster 多倫多辦公室很高興有這一群前途無量的新員工加入我們的顧問團隊。請詳閱下方的公司政策，並熟悉園區內的一些重要地點。</p>
<p>個人電腦不得用於完成公司工作。如需在 Dempsey Hall 辦公室以外工作，請前往資訊科技部門申請具備資安功能的筆電。他們的辦公室位於 Russ 大樓 R-135 室。</p>
<p>您在職前訓練時收到的識別證必須隨時佩戴；它們提供進出園區大樓的權限。如遺失識別證，請聯繫 Hadley 大樓 H-290 室的保全櫃台（分機 8645）。</p>
<p>自助餐廳位於 Russ 大樓一樓（營業至下午 2:30）。Dempsey Hall D-108 休息室每天供應咖啡、茶、果汁和輕食直到下午 6:00。</p>
<p>Brandt 圖書館位於 Russ 大樓後方，可透過連接兩棟建築的架高走道前往。</p>
<p>如有包裹或重要郵件，請通知收發室（分機 8300）或前往 Russ 大樓地下室的 R-004 室。</p>
<p>誠摯地，<br>Donald Drabik</p>`
        },
        questions: [
            {
                number: 168, text: "What is the purpose of the e-mail?", translation: "這封郵件的目的是什麼？",
                options: [
                    { letter: "A", text: "To assign work spaces to employees", translation: "分配工作空間給員工" },
                    { letter: "B", text: "To explain employee compensation policies", translation: "解釋員工薪酬政策" },
                    { letter: "C", text: "To arrange a company meeting", translation: "安排公司會議" },
                    { letter: "D", text: "To provide details to recently hired workers", translation: "提供詳細資訊給新聘員工" }
                ],
                answer: "D", explanation: "收件人是 New Employees，標題是 Welcome，內容介紹設施與規定，故選 (D)。"
            },
            {
                number: 169, text: "The word \"promising\" in paragraph 1, line 1, is closest in meaning to", translation: "第一段第一行的單字 \"promising\" 最接近的意思是？",
                options: [
                    { letter: "A", text: "pledging", translation: "發誓" },
                    { letter: "B", text: "likely to succeed", translation: "很可能成功（有前途的）" },
                    { letter: "C", text: "suggesting", translation: "建議" },
                    { letter: "D", text: "recently hired", translation: "最近受雇" }
                ],
                answer: "B", explanation: "Promising 意為「大有可為的、前途看好的」，與 likely to succeed 同義。"
            },
            {
                number: 170, text: "Where is the Information Technology Department located?", translation: "資訊科技部門位於何處？",
                options: [
                    { letter: "A", text: "In the Russ Building", translation: "在 Russ 大樓" },
                    { letter: "B", text: "In the Hadley Building", translation: "在 Hadley 大樓" },
                    { letter: "C", text: "In Dempsey Hall", translation: "在 Dempsey Hall" },
                    { letter: "D", text: "In Brandt Library", translation: "在 Brandt 圖書館" }
                ],
                answer: "A", explanation: "第二段提到 \"Their office is located in the Russ Building in R-135.\"。"
            },
            {
                number: 171, text: "According to the e-mail, what is provided to all employees?", translation: "根據郵件，提供給所有員工的是什麼？",
                options: [
                    { letter: "A", text: "A mailbox", translation: "信箱" },
                    { letter: "B", text: "An approved laptop", translation: "核准的筆電" },
                    { letter: "C", text: "An identification badge", translation: "識別證" },
                    { letter: "D", text: "A library card", translation: "借書證" }
                ],
                answer: "C", explanation: "第三段開頭說 \"The identification badges you received at orientation...\"（你們收到的識別證...）。"
            }
        ]
    },
    {
        id: 8,
        range: "Q172-175",
        title: "出版社信函 (Letter)",
        document: {
            type: "信函",
            title: "Orangedale Press - Contract Update",
            title_zh: "Orangedale 出版社 - 合約更新",
            content: `<p><span class="label">Orangedale Press</span><br>54 Thompson Street, Sausalito, CA 94965<br>September 19</p>
<p>Mr. Richard Tomase<br>89 Moreland Drive, Portland, OR 97205</p>
<p>Dear Mr. Tomase:</p>
<p>We at Orangedale Press are delighted that you have agreed to work with us again on an update of your book <em>Global Traveling: A Consumer's Guide</em>. Rest assured that we understand the ongoing paradigm shift in our field and are pleased that we can amend your previous contract with us to account for these changes.</p>
<p>Since the original <em>Global Traveling</em> received such a warm reception in its target markets, we want to ensure that the updated version faithfully meets the needs and expectations of both new and returning readers. This new version will include electronic editions of your book in order for it to be more easily distributed and bring in the widest possible audience.</p>
<p>All other provisions of the previous contract will remain unchanged, except for the adjustment to your royalty fees as we discussed.</p>
<p>The updated agreement is enclosed. Please initial the marked paragraphs if you approve, and then sign and date it. I would appreciate it if you could return it to me by October 1. Also, if you have not yet returned the author information form that my assistant mailed to you, you can send that in at the same time.</p>
<p>Thank you for attending to this matter in a timely manner and for your great contributions to the field of travel publishing.</p>
<p>With very best regards,<br>Kathryn Lloyd<br>Director, Orangedale Press<br><em>Enclosure</em></p>`,
            translation: `<p><span class="label">Orangedale 出版社</span><br>54 Thompson Street, Sausalito, CA 94965<br>9月19日</p>
<p>Richard Tomase 先生<br>89 Moreland Drive, Portland, OR 97205</p>
<p>親愛的 Tomase 先生：</p>
<p>我們 Orangedale 出版社很高興您同意再次與我們合作，更新您的著作《全球旅遊：消費者指南》。請放心，我們了解本領域正在進行的典範轉移，也很高興能修改您先前的合約以納入這些變更。</p>
<p>由於原版《全球旅遊》在目標市場獲得熱烈迴響，我們要確保更新版能忠實滿足新舊讀者的需求與期待。這個新版本將包含電子版，以便更容易發行並觸及最廣泛的受眾。</p>
<p>除了我們討論過的版稅調整外，先前合約的所有其他條款將維持不變。</p>
<p>隨信附上更新後的協議書。如您同意，請在標記的段落簽名縮寫，然後簽署全名並押日期。如能在 10月1日前寄回給我，將不勝感激。此外，如尚未寄回我助理寄給您的作者資料表，可一併寄回。</p>
<p>感謝您及時處理此事，以及對旅遊出版領域的偉大貢獻。</p>
<p>誠摯地，<br>Kathryn Lloyd<br>總監，Orangedale 出版社<br><em>附件</em></p>`
        },
        questions: [
            {
                number: 172, text: "Why did Ms. Lloyd send the letter to Mr. Tomase?", translation: "Ms. Lloyd 為何寄這封信給 Mr. Tomase？",
                options: [
                    { letter: "A", text: "To request that he review a book", translation: "要求他評論一本書" },
                    { letter: "B", text: "To inquire about an itinerary", translation: "詢問行程表" },
                    { letter: "C", text: "To determine if he will sign some books", translation: "確定他是否會簽幾本書" },
                    { letter: "D", text: "To explain a modification to an agreement", translation: "解釋協議的修改" }
                ],
                answer: "D", explanation: "信中說 \"amend your previous contract\"（修改先前合約），且整封信都在談合約更新與簽署。"
            },
            {
                number: 173, text: "What did Ms. Lloyd send with the letter?", translation: "Ms. Lloyd 隨信附寄了什麼？",
                options: [
                    { letter: "A", text: "A revised contract", translation: "修訂後的合約" },
                    { letter: "B", text: "An author information form", translation: "作者資料表" },
                    { letter: "C", text: "An advance copy of a book", translation: "書的樣書" },
                    { letter: "D", text: "A collection of book reviews", translation: "書評合輯" }
                ],
                answer: "A", explanation: "文中提到 \"The updated agreement is enclosed.\"（更新的協議書已隨信附上）。"
            },
            {
                number: 174, text: "The phrase \"attending to\" in paragraph 3, line 1, is closest in meaning to", translation: "第三段第一行的 \"attending to\" 最接近的意思是？",
                options: [
                    { letter: "A", text: "planning to go to", translation: "計畫去" },
                    { letter: "B", text: "discovering of", translation: "發現" },
                    { letter: "C", text: "taking care of", translation: "處理/照料" },
                    { letter: "D", text: "being present at", translation: "出席" }
                ],
                answer: "C", explanation: "Attend to 在商務書信常指「處理」事務 (take care of / deal with)。"
            },
            {
                number: 175, text: "In which position does this sentence best belong? \"A new chapter on travel in East Asia is also sure to draw much interest.\"", translation: "「關於東亞旅遊的新章節也肯定會吸引許多興趣。」這句最適合放在哪個位置？",
                options: [
                    { letter: "A", text: "[1]", translation: "[1]" },
                    { letter: "B", text: "[2]", translation: "[2]" },
                    { letter: "C", text: "[3]", translation: "[3]" },
                    { letter: "D", text: "[4]", translation: "[4]" }
                ],
                answer: "B", explanation: "前一句提到新版會有電子書，這句話補充新內容，後一句則總結其他條款不變。放在 [2] 符合邏輯流暢度。"
            }
        ]
    },
    {
        id: 9,
        range: "Q176-180",
        title: "租賃詢問信與列表 (Email & List)",
        document: {
            type: "電子郵件與列表",
            title: "Car Lease Inquiry - Lanti Auto",
            title_zh: "車輛租賃詢問 - Lanti Auto",
            content: `<p><span class="label">From:</span> Kana Saito<br><span class="label">To:</span> Customer Service, Lanti Auto<br><span class="label">Subject:</span> Request for information<br><span class="label">Date:</span> September 16</p>
<p>To Whom It May Concern:</p>
<p>I currently lease a car from your company. However, I recently accepted a job in Memphis City, and I am going to start taking the bus. My lease agreement is number LA508. It is a month-to-month lease that automatically renews on the same day each month.</p>
<p>My new job starts on Tuesday, September 28, so ideally I would return the car to you on Monday, September 27. However, if the renewal date is earlier than that Monday, I would rather return the car at the end of the current month's contract and make other transportation arrangements until my new job starts.</p>
<p>Please let me know on what exact day of the month my lease ends and when I need to return the car.</p>
<p>Thank you,<br>Kana Saito</p>
<div class="table-wrapper">
<table>
<tr><th colspan="4">Lanti Auto - Month-to-Month Lease Agreements</th></tr>
<tr><th>Agreement #</th><th>Final Date/Month</th><th>Car Model</th><th>Cost/Month</th></tr>
<tr><td>LA502</td><td>7</td><td>Cartif</td><td>$199</td></tr>
<tr><td>LA508</td><td>28</td><td>Sylvon</td><td>$211</td></tr>
<tr><td>LA513</td><td>25</td><td>Thundee</td><td>$159</td></tr>
<tr><td>LA519</td><td>14</td><td>Grayley</td><td>$249</td></tr>
</table>
</div>
<p><em>Note: Cars must be returned by 4 P.M. on the final contract date. Otherwise, the lease will automatically be extended for one additional month.</em></p>`,
            translation: `<p><span class="label">寄件者：</span>Kana Saito<br><span class="label">收件者：</span>客戶服務部，Lanti Auto<br><span class="label">主旨：</span>資訊詢問<br><span class="label">日期：</span>9月16日</p>
<p>敬啟者：</p>
<p>我目前租用貴公司的一輛車。然而，我最近在曼非斯市找到一份工作，打算開始搭公車。我的租約號碼是 LA508，屬於每月自動在同一天續約的按月租約。</p>
<p>我的新工作將於 9月28日週二開始，所以理想情況下我想在 9月27日週一還車。但是，如果續約日早於那個週一，我寧願在本月合約結束時還車，並另行安排交通方式直到新工作開始。</p>
<p>請告知我每月的合約終止日確切是哪一天，以及我何時需要還車。</p>
<p>謝謝，<br>Kana Saito</p>
<div class="table-wrapper">
<table>
<tr><th colspan="4">Lanti Auto - 按月租賃協議</th></tr>
<tr><th>協議編號</th><th>終止日/月</th><th>車型</th><th>月費</th></tr>
<tr><td>LA502</td><td>7日</td><td>Cartif</td><td>$199</td></tr>
<tr><td>LA508</td><td>28日</td><td>Sylvon</td><td>$211</td></tr>
<tr><td>LA513</td><td>25日</td><td>Thundee</td><td>$159</td></tr>
<tr><td>LA519</td><td>14日</td><td>Grayley</td><td>$249</td></tr>
</table>
</div>
<p><em>備註：車輛必須在合約終止日下午 4 點前歸還。否則，租約將自動延長一個月。</em></p>`
        },
        questions: [
            {
                number: 176, text: "Why did Ms. Saito send the e-mail?", translation: "Ms. Saito 為何寄這封郵件？",
                options: [
                    { letter: "A", text: "To request a car rental", translation: "請求租車" },
                    { letter: "B", text: "To resign from a position", translation: "辭職" },
                    { letter: "C", text: "To get information about a lease", translation: "獲取關於租約的資訊" },
                    { letter: "D", text: "To inquire about available parking", translation: "詢問停車位" }
                ],
                answer: "C", explanation: "主旨是 Request for information，內容詢問還車日期與合約終止日。"
            },
            {
                number: 177, text: "What is suggested about Ms. Saito?", translation: "關於 Ms. Saito，文中暗示了什麼？",
                options: [
                    { letter: "A", text: "She wants to sell her car.", translation: "她想賣掉她的車。" },
                    { letter: "B", text: "She lives near a train station.", translation: "她住在火車站附近。" },
                    { letter: "C", text: "She has recently moved to a new city.", translation: "她最近搬到了新城市。" },
                    { letter: "D", text: "She currently drives to work.", translation: "她目前開車上班。" }
                ],
                answer: "D", explanation: "她說 \"I am going to start taking the bus\"（我將要開始搭公車），暗示她目前是開租來的車。"
            },
            {
                number: 178, text: "What type of car does Ms. Saito drive?", translation: "Ms. Saito 開哪種車？",
                options: [
                    { letter: "A", text: "A Cartif", translation: "Cartif" },
                    { letter: "B", text: "A Sylvon", translation: "Sylvon" },
                    { letter: "C", text: "A Thundee", translation: "Thundee" },
                    { letter: "D", text: "A Grayley", translation: "Grayley" }
                ],
                answer: "B", explanation: "郵件中提到合約號碼是 LA508，對照表格，車型為 Sylvon。"
            },
            {
                number: 179, text: "When should Ms. Saito go to Lanti Auto?", translation: "Ms. Saito 應該何時去 Lanti Auto？",
                options: [
                    { letter: "A", text: "On September 7", translation: "9月7日" },
                    { letter: "B", text: "On September 14", translation: "9月14日" },
                    { letter: "C", text: "On September 25", translation: "9月25日" },
                    { letter: "D", text: "On September 28", translation: "9月28日" }
                ],
                answer: "D", explanation: "表格顯示 LA508 的終止日是每月 28 日。她可以在當天還車（by 4 PM）。"
            },
            {
                number: 180, text: "What is indicated about month-to-month agreements?", translation: "關於按月租賃協議，文中指出了什麼？",
                options: [
                    { letter: "A", text: "They may expire at 4 P.M. on the final contract date.", translation: "它們可能在合約終止日下午 4 點到期。" },
                    { letter: "B", text: "They are available for one year at most.", translation: "它們最長為期一年。" },
                    { letter: "C", text: "They all cost $199 per month.", translation: "它們月費都是 $199。" },
                    { letter: "D", text: "They include the cost of maintenance.", translation: "它們包含維修費用。" }
                ],
                answer: "A", explanation: "備註寫 \"cars must be returned by 4 P.M. on the final contract date\"（必須在下午4點前還車），意味著合約在該時間點到期。"
            }
        ]
    }
);
