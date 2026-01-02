// Add more question sets (Q181-200)
questionSets.push(
    {
        id: 10,
        range: "Q181-185",
        title: "音樂收藏店網頁與詢問信 (Web Page & Email)",
        document: {
            type: "網頁與信件",
            title: "Hardewicke's - Musical Treasures",
            title_zh: "Hardewicke's - 音樂珍寶",
            content: `<p><strong>Hardewicke's - The finest musical treasures in London!</strong></p>
<p>Explore and take home some of London's rich history. The artifacts are a window into the creative minds that make up London's musical spirit.</p>
<p>Our collection spans musical genres from rock and roll to opera, highlighting England's great artistic contributors. The store features artists from the 1800s to rising stars seen on television today.</p>
<p>Click on the links below to view some of our current products. Electronic checkout is available.</p>
<ul>
<li>Records, CDs, Tapes: £10 and up</li>
<li>Songbooks, signed first-edition books: £15 and up</li>
<li>Apparel: £30 and up</li>
<li>Original artwork: £50 and up</li>
<li>Instruments: £100 and up</li>
</ul>
<p>We have even more in our shop, and the best pieces are often bought before they make it to the Web site! Please visit us.</p>
<hr>
<p><span class="label">From:</span> Sophie Calvert<br><span class="label">To:</span> Hardewickes@londonloc.co.uk<br><span class="label">Re:</span> Mark Peckham Item<br><span class="label">Date:</span> February 1</p>
<p>To Whom It May Concern:</p>
<p>I have a guitar that was previously owned by Mark Peckham. I found your Web site and thought that Hardewicke's might be interested in purchasing it for resale.</p>
<p>The guitar was custom-made for Mr. Peckham by his close friend Elizabeth Dangerfield to celebrate the successful release of his first album. He took it on tour with him around the country as well as abroad. The guitar was purchased by my father at a charity auction hosted by Mr. Peckham 20 years ago.</p>
<p>Please let me know what your purchasing procedures are and whether you buy items up front or take a percentage of the transaction when you resell the item.</p>
<p>Thank you,<br>Sophie Calvert</p>`,
            translation: `<p><strong>Hardewicke's - 倫敦最精緻的音樂珍寶！</strong></p>
<p>探索並帶回一些倫敦豐富的歷史。這些文物是通往構成倫敦音樂精神的創意心靈之窗。</p>
<p>我們的收藏橫跨從搖滾樂到歌劇的各種音樂流派，凸顯英國偉大的藝術貢獻者。本店特色涵蓋從 19 世紀的藝術家到今日電視上的新星。</p>
<p>點擊下方連結查看我們目前的一些產品。提供電子結帳服務。</p>
<ul>
<li>唱片、CD、錄音帶：£10 起</li>
<li>歌本、簽名初版書：£15 起</li>
<li>服飾：£30 起</li>
<li>原創藝術品：£50 起</li>
<li>樂器：£100 起</li>
</ul>
<p>我們店裡還有更多商品，最好的物件通常在放上網站前就被買走了！請親臨參觀。</p>
<hr>
<p><span class="label">寄件者：</span>Sophie Calvert<br><span class="label">收件者：</span>Hardewickes@londonloc.co.uk<br><span class="label">主旨：</span>Mark Peckham 的物品<br><span class="label">日期：</span>2月1日</p>
<p>敬啟者：</p>
<p>我有一把之前由 Mark Peckham 擁有的吉他。我發現了你們的網站，想說 Hardewicke's 可能會有興趣收購並轉售。</p>
<p>這把吉他是 Mr. Peckham 的好友 Elizabeth Dangerfield 為他特製的，以慶祝他首張專輯成功發行。他曾帶著它在國內外巡迴演出。這把吉他是 20 年前我父親在 Mr. Peckham 主辦的慈善拍賣會上買下的。</p>
<p>請告知你們的收購程序，以及你們是直接買斷還是轉售時抽成。</p>
<p>謝謝，<br>Sophie Calvert</p>`
        },
        questions: [
            {
                number: 181, text: "What is NOT suggested about Hardewicke's?", translation: "關於 Hardewicke's，下列哪項未被提及？",
                options: [
                    { letter: "A", text: "It has items from many different years.", translation: "它擁有許多不同年代的物品。" },
                    { letter: "B", text: "Its products represent numerous types of music.", translation: "其產品代表多種音樂類型。" },
                    { letter: "C", text: "It guarantees the lowest prices on records and songbooks.", translation: "它保證唱片和歌本的最低價格。" },
                    { letter: "D", text: "It features products from English musicians.", translation: "它主打英國音樂家的產品。" }
                ],
                answer: "C", explanation: "文中提到不同年代（1800s to rising stars）、多種類型（rock to opera）、英國音樂家，唯獨沒提到最低價保證。"
            },
            {
                number: 182, text: "What is indicated about Hardewicke's?", translation: "關於 Hardewicke's，文中指出了什麼？",
                options: [
                    { letter: "A", text: "It was started by a musician.", translation: "它是由音樂家創辦的。" },
                    { letter: "B", text: "It plans to host a performance by Mr. Peckham.", translation: "它計畫主辦 Mr. Peckham 的演出。" },
                    { letter: "C", text: "It advertises at concerts.", translation: "它在演唱會上打廣告。" },
                    { letter: "D", text: "It sells items directly from its Web site.", translation: "它直接從網站上銷售物品。" }
                ],
                answer: "D", explanation: "文中提到 \"Electronic checkout is available\"（提供電子結帳），即線上銷售。"
            },
            {
                number: 183, text: "What is the lowest price Ms. Calvert's item would most likely sell for at Hardewicke's?", translation: "Ms. Calvert 的物品在 Hardewicke's 最低可能賣多少錢？",
                options: [
                    { letter: "A", text: "£10", translation: "£10" },
                    { letter: "B", text: "£30", translation: "£30" },
                    { letter: "C", text: "£50", translation: "£50" },
                    { letter: "D", text: "£100", translation: "£100" }
                ],
                answer: "D", explanation: "她要賣的是吉他（Guitar），屬於樂器（Instruments），網頁標價為 \"£100 and up\"。"
            },
            {
                number: 184, text: "What is suggested about Ms. Calvert?", translation: "關於 Ms. Calvert，文中暗示了什麼？",
                options: [
                    { letter: "A", text: "She saw Mr. Peckham perform in England.", translation: "她曾在英國看過 Mr. Peckham 表演。" },
                    { letter: "B", text: "She owns an item made by Ms. Dangerfield.", translation: "她擁有一件由 Ms. Dangerfield 製作的物品。" },
                    { letter: "C", text: "She has previously worked with Hardewicke's.", translation: "她之前曾與 Hardewicke's 合作過。" },
                    { letter: "D", text: "She would like to make a donation to her father's charity.", translation: "她想捐款給她父親的慈善機構。" }
                ],
                answer: "B", explanation: "信中提到吉他是 \"custom-made for Mr. Peckham by his close friend Elizabeth Dangerfield\"，而目前吉他在 Ms. Calvert 手上。"
            },
            {
                number: 185, text: "What does Ms. Calvert ask about?", translation: "Ms. Calvert 詢問什麼？",
                options: [
                    { letter: "A", text: "The price of an instrument she saw at the store", translation: "她在店裡看到的一樣樂器的價格" },
                    { letter: "B", text: "The procedure for renting a concert space", translation: "租用音樂會場地的程序" },
                    { letter: "C", text: "The process for selling items to Hardewicke's", translation: "賣東西給 Hardewicke's 的流程" },
                    { letter: "D", text: "The history of an item she wants to purchase", translation: "她想購買的一件物品的歷史" }
                ],
                answer: "C", explanation: "最後一段問 \"Please let me know what your purchasing procedures are\"（請告知收購程序）。"
            }
        ]
    },
    {
        id: 11,
        range: "Q186-190",
        title: "書單、廣播節目表 (List & Schedule)",
        document: {
            type: "書單與節目表",
            title: "James Trozelli's Books & BTW Radio Schedule",
            title_zh: "James Trozelli 的著作 & BTW 廣播節目表",
            content: `<p><strong>Books by James Trozelli</strong></p>
<p><em>The History of Jeans:</em> Where did it all begin? Trozelli visually chronicles the evolution of jeans through the centuries, from working wear to high fashion.</p>
<p><em>Look Past the Runway:</em> Trozelli captures the creative process of some of the top designers from New York City to Paris. Spanning almost twenty years, the book is filled with Trozelli's photographs and shows what goes on in fashion houses before designs are ready for the runway.</p>
<p><em>Growing Into Clothes: My Story:</em> An amusing memoir about growing up in the fashion world. Trozelli writes about his unconventional upbringing in New York City with parents who began as fashion models before launching their own design label.</p>
<p><em>Yards of Talent: A Decade of Style:</em> A collection of Trozelli's images spanning a decade of fashion and revealing what was in style, what was out of style, and then what was back in style again.</p>
<hr>
<p><strong>BTW Radio - On-Air Schedule (Evening Programming, September 23)</strong></p>
<p><strong>6:00 - On the Table:</strong> Host Amanda Fry talks about the latest super foods; what they are, what they offer, and how best to prepare them. Featured recipes will be available on our Web site after tonight's show.</p>
<p><strong>7:00 - Candid Now:</strong> Host Britta Jung interviews photographer and author James Trozelli about what prompted him to write his latest book about his childhood. He shares stories about what it was like to grow up in the world of fashion.</p>
<p><strong>8:00 - Tech Talk:</strong> Host Lewis Pierce focuses on the latest electronics. He discusses products that are really innovative and useful and identifies those that are not.</p>
<hr>
<p><span class="label">To:</span> listenercomments@btwradio.com<br>
<span class="label">From:</span> cogilvie@sunmail.net<br>
<span class="label">Date:</span> September 24<br>
<span class="label">Subject:</span> Radio Interview</p>
<p>I discovered BTW Radio over 20 years ago and have been a regular listener of your evening programming for at least a decade. I just want to say how much I enjoy your newest offering. I've been interested by many of the authors that have been featured on the show so far, but last evening's guest was especially interesting. I remember James from when he was a little boy. I worked with his parents when they lived in New York, and I recall seeing James in his parents' studio most days after he got out of school. I was surprised to learn that he has written about his childhood, and I look forward to reading his new book.</p>
<p>Thank you for the excellent program.</p>
<p>Calista Ogilvie</p>`,
            translation: `<p><strong>James Trozelli 的著作</strong></p>
<p><em>《牛仔褲的歷史》：</em>一切從何開始？Trozelli 以視覺方式記錄了牛仔褲數百年來的演變，從工作服到高級時尚。</p>
<p><em>《越過伸展台》：</em>Trozelli 捕捉了從紐約到巴黎一些頂尖設計師的創作過程。這本書跨越近二十年，充滿了 Trozelli 的攝影作品，展示了設計準備好上伸展台之前，時尚屋裡發生了什麼事。</p>
<p><em>《穿著衣服長大：我的故事》：</em>關於在時尚界成長的有趣回憶錄。Trozelli 寫下他在紐約市非傳統的成長經歷，父母最初是時裝模特兒，後來創立了自己的設計品牌。</p>
<p><em>《才華洋溢：時尚十年》：</em>Trozelli 跨越十年時尚的影像合輯，揭示了什麼流行過、什麼退流行、然後什麼又再次流行回來。</p>
<hr>
<p><strong>BTW 廣播電台 - 9月23日晚間節目表</strong></p>
<p><strong>6:00 - 餐桌上：</strong>主持人 Amanda Fry 談論最新的超級食物；它們是什麼、有什麼好處，以及如何烹調。精選食譜將在今晚節目結束後於官網提供。</p>
<p><strong>7:00 - 此刻坦白：</strong>主持人 Britta Jung 訪問攝影師兼作家 James Trozelli，談論是什麼促使他寫下關於童年的最新著作。他分享了關於在時尚界成長的故事。</p>
<p><strong>8:00 - 科技漫談：</strong>主持人 Lewis Pierce 專注於最新的電子產品。他討論真正創新且有用的產品，並指出那些不實用的。</p>
<hr>
<p><span class="label">收件者：</span>listenercomments@btwradio.com<br>
<span class="label">寄件者：</span>cogilvie@sunmail.net<br>
<span class="label">日期：</span>9月24日<br>
<span class="label">主旨：</span>廣播訪談</p>
<p>我在 20 多年前發現了 BTW 電台，並且至少有十年一直是你們晚間節目的忠實聽眾。我只想說我非常喜歡你們最新的節目。到目前為止，我對節目中介紹過的許多作家都很感興趣，但昨晚的來賓特別有趣。我記得 James 小時候的樣子。當他的父母住在紐約時，我曾與他們共事，我記得大多數日子 James 放學後都會出現在他父母的工作室裡。我很驚訝得知他寫了關於他童年的書，我很期待閱讀他的新書。</p>
<p>感謝你們製播這麼棒的節目。</p>
<p>Calista Ogilvie</p>`
        },
        questions: [
            {
                number: 186, text: "What is a common feature in all of Mr. Trozelli's books?", translation: "Trozelli 先生的所有書籍有什麼共同特徵？",
                options: [
                    { letter: "A", text: "They contain fashion photographs.", translation: "它們包含時尚照片。" },
                    { letter: "B", text: "They focus on famous models.", translation: "它們聚焦於著名模特兒。" },
                    { letter: "C", text: "They are set in New York City.", translation: "它們背景設定在紐約市。" },
                    { letter: "D", text: "They follow over multiple years.", translation: "它們跨越多個年份。" }
                ],
                answer: "D", explanation: "《牛仔褲的歷史》：through the centuries (數百年)、《越過伸展台》：Spanning almost twenty years (跨越近20年)、《穿著衣服長大》：about growing up (關於成長/從小到大)、《才華洋溢》：spanning a decade (跨越十年)。所有書籍都涉及時間的跨度。"
            },
            {
                number: 187, text: "What book did Mr. Trozelli discuss on BTW Radio?", translation: "Trozelli 先生在 BTW 廣播電台討論了哪本書？",
                options: [
                    { letter: "A", text: "The History of Jeans", translation: "《牛仔褲的歷史》" },
                    { letter: "B", text: "Look Past the Runway", translation: "《越過伸展台》" },
                    { letter: "C", text: "Growing Into Clothes: My Story", translation: "《穿著衣服長大：我的故事》" },
                    { letter: "D", text: "Yards of Talent: A Decade of Style", translation: "《才華洋溢：時尚十年》" }
                ],
                answer: "C", explanation: "廣播節目表提到訪談內容是關於 \"his latest book about his childhood\" (他關於童年的最新著作)，對應書單中的第三本 《Growing Into Clothes: My Story》 (關於在時尚界成長的回憶錄)。"
            },
            {
                number: 188, text: "What is indicated about Candid Now?", translation: "關於《此刻坦白》(Candid Now) 節目，文中指出了什麼？",
                options: [
                    { letter: "A", text: "It is broadcast every morning at 7:00.", translation: "它每天早上 7:00 播出。" },
                    { letter: "B", text: "It was recently added to BTW Radio.", translation: "它是最近加入 BTW 廣播電台的。" },
                    { letter: "C", text: "It is hosted by Amanda Fry.", translation: "它由 Amanda Fry 主持。" },
                    { letter: "D", text: "It was moved to a new time.", translation: "它被移到了新時段。" }
                ],
                answer: "B", explanation: "郵件中聽眾提到 \"I just want to say how much I enjoy your newest offering.\" (我非常喜歡你們最新的節目)，接著提到昨晚的來賓 (Trozelli) 特別有趣，而 Trozelli 上的正是《Candid Now》，故推斷該節目是新推出的。"
            },
            {
                number: 189, text: "In the e-mail, the word \"regular\" in paragraph 1, line 1, is closest in meaning to", translation: "在電子郵件第一段第一行中，\"regular\" 這個字最接近的意思是？",
                options: [
                    { letter: "A", text: "orderly", translation: "有秩序的" },
                    { letter: "B", text: "typical", translation: "典型的" },
                    { letter: "C", text: "frequent", translation: "頻繁的/經常的" },
                    { letter: "D", text: "complete", translation: "完整的" }
                ],
                answer: "C", explanation: "\"Regular listener\" 意指經常收聽的忠實聽眾，故與 frequent 意義最接近。"
            },
            {
                number: 190, text: "What is probably true about Ms. Ogilvie?", translation: "關於 Ogilvie 女士，下列何者可能為真？",
                options: [
                    { letter: "A", text: "She has worked in the fashion industry.", translation: "她曾在時尚產業工作。" },
                    { letter: "B", text: "She has interviewed Mr. Trozelli.", translation: "她採訪過 Trozelli 先生。" },
                    { letter: "C", text: "She was featured on Tech Talk.", translation: "她曾在《科技漫談》節目中出現。" },
                    { letter: "D", text: "She hosts a radio program.", translation: "她主持一個廣播節目。" }
                ],
                answer: "A", explanation: "郵件中她提到 \"I worked with his parents when they lived in New York\" (當他父母住在紐約時我曾與他們共事)，且提到常見到 James 在父母的工作室。由於 James 的父母是時尚模特兒並創立設計品牌 (design label)，與他們共事意味著她很可能也在時尚產業工作。"
            }
        ]
    },
    {
        id: 12,
        range: "Q191-195",
        title: "行李箱客訴 (Product Information, Online Review & Response)",
        document: {
            type: "產品資訊、線上評論與回覆",
            title: "Harris & Ludlow Customer Service",
            title_zh: "Harris & Ludlow 客戶服務",
            content: `<p><span class="label">URL:</span> harrisludlow.com/wayfarer200</p>
<p><strong>Harris Ludlow</strong><br>
Home | Place Order | Products | Customer Service | Contact Us</p>
<p><strong>Size / Price</strong><br>
50cm (carry-on) / $145<br>
60cm / $179<br>
70cm / $225<br>
Complete set / $515</p>
<p><strong>Colors:</strong> Classic Black (coming soon-Ocean Blue)</p>
<p><strong>Details:</strong><br>
Designed for hard use, the Wayfarer 200 luggage set features three pieces that are both lightweight and durable.</p>
<ul>
<li>Expandable central pockets</li>
<li>Four rotating wheels</li>
<li>Easy-opening, tight-sealing clasps</li>
</ul>
<hr>
<p><span class="label">URL:</span> harrisludlow.com/wayfarer200/reviews<br>
<span class="label">Date:</span> April 18</p>
<p>I frequently travel for business, often carrying fragile samples with me on the plane. Most carry-ons these days are soft-sided, so it was a relief to find something that offers adequate protection. I've been mostly happy with the carry-on, but the larger bags have caused some problems. My black cases look so similar to everyone else's that other travelers have almost taken them by mistake! More variety would be nice.</p>
<p>I also have some reservations about the mechanical elements of this set. In particular, the retraction mechanism of the wheels appears so delicately constructed as to be in danger of collapse.</p>
<p>Asina Amorapanth</p>
<hr>
<p><span class="label">URL:</span> harrisludlow.com/wayfarer200/messages<br>
<span class="label">Date:</span> April 20</p>
<p>Dear Ms. Amorapanth,</p>
<p>We're sorry to hear about your trouble with our product. As a result of feedback like yours, we've introduced a new color option. If you contact us at customersupport@hlluggage.com, we'll send you, in our attractive new color, a duplicate of the large suitcase to complement your Wayfarer 200 set. Note that this gift will be sent to you after you verify that you posted the April 18 review.</p>
<p>We also hear your concerns about our luggage components. Rest assured that our lightweight mechanism has been proven to withstand years' worth of rough treatment, retracting and extending smoothly over 10,000 times under stressful conditions in our laboratories.</p>
<p>Damien Cosme, Harris & Ludlow customer service</p>`,
            translation: `<p><span class="label">網址：</span>harrisludlow.com/wayfarer200</p>
<p><strong>Harris Ludlow</strong><br>
首頁 | 下訂單 | 產品 | 顧客服務 | 聯絡我們</p>
<p><strong>尺寸 / 價格</strong><br>
50公分 (登機箱) / $145<br>
60公分 / $179<br>
70公分 / $225<br>
整套 / $515</p>
<p><strong>顏色：</strong> 經典黑 (海洋藍即將推出)</p>
<p><strong>詳細資訊：</strong><br>
專為頻繁使用設計，Wayfarer 200 行李箱套組包含三件既輕便又耐用的產品。</p>
<ul>
<li>可擴充的中央口袋</li>
<li>四個旋轉輪</li>
<li>易開、密封緊密的扣環</li>
</ul>
<hr>
<p><span class="label">網址：</span>harrisludlow.com/wayfarer200/reviews<br>
<span class="label">日期：</span>4月18日</p>
<p>我經常因公出差，常隨身攜帶易碎的樣品上飛機。現在大多數的登機箱都是軟殼的，所以能找到提供足夠保護的產品讓我鬆了一口氣。我對登機箱大致上很滿意，但較大的箱子造成了一些問題。我的黑色箱子看起來跟其他人的太像了，以至於差點被其他旅客誤拿！如果能有更多樣式選擇會更好。</p>
<p>我也對這套組的機械元件有些疑慮。特別是輪子的伸縮機制看起來構造太脆弱，好像快要解體了。</p>
<p>Asina Amorapanth</p>
<hr>
<p><span class="label">網址：</span>harrisludlow.com/wayfarer200/messages<br>
<span class="label">日期：</span>4月20日</p>
<p>親愛的 Amorapanth 女士：</p>
<p>很遺憾聽到您對我們產品遇到的麻煩。由於像您這樣的反饋，我們推出了一個新的顏色選項。如果您聯繫我們 (customersupport@hlluggage.com)，我們將寄送一個我們迷人新色的大型行李箱複製品給您，以補足您的 Wayfarer 200 套組。請注意，這份禮物將在您證實您發布了 4月18日 的評論後寄出。</p>
<p>我們也聽到了您對我們行李箱組件的擔憂。請放心，我們的輕量化機制已證明能經受多年的粗暴使用，在我們實驗室的壓力測試條件下，伸縮順暢超過 10,000 次。</p>
<p>Damien Cosme，Harris & Ludlow 客戶服務部</p>`
        },
        questions: [
            {
                number: 191, text: "What does Ms. Amorapanth write about her luggage?", translation: "Ms. Amorapanth 對她的行李箱寫了什麼？",
                options: [
                    { letter: "A", text: "She likes the color.", translation: "她喜歡這顏色。" },
                    { letter: "B", text: "The cases are too large.", translation: "箱子太大了。" },
                    { letter: "C", text: "She purchased the bags recently.", translation: "她最近買了這些包。" },
                    { letter: "D", text: "The carry-on protects her samples.", translation: "登機箱保護了她的樣品。" }
                ],
                answer: "D", explanation: "她在評論中提到 \"it was a relief to find something that offers adequate protection\" (找到能提供足夠保護的東西讓我鬆了一口氣)，指的就是登機箱保護了她的易碎樣品 (fragile samples)。"
            },
            {
                number: 192, text: "In the review, the word \"reservations\" in paragraph 2, line 1, is closest in meaning to", translation: "在評論中，第二段第一行的 \"reservations\" 最接近的意思是？",
                options: [
                    { letter: "A", text: "arrangements", translation: "安排" },
                    { letter: "B", text: "concerns", translation: "疑慮 / 擔憂" },
                    { letter: "C", text: "experiences", translation: "經驗" },
                    { letter: "D", text: "features", translation: "特色" }
                ],
                answer: "B", explanation: "Reservations 在此意為「保留態度、疑慮」，與 Concerns 同義。回信中也提到 \"We also hear your concerns...\"。"
            },
            {
                number: 193, text: "What does Mr. Cosme offer to Ms. Amorapanth?", translation: "Mr. Cosme 提供什麼給 Ms. Amorapanth？",
                options: [
                    { letter: "A", text: "A full set of blue luggage", translation: "一整套藍色行李箱" },
                    { letter: "B", text: "A full set of black luggage", translation: "一整套黑色行李箱" },
                    { letter: "C", text: "A large blue suitcase", translation: "一個大型藍色行李箱" },
                    { letter: "D", text: "A small black suitcase", translation: "一個小型黑色行李箱" }
                ],
                answer: "C", explanation: "回信中提到要送 \"a duplicate of the large suitcase\" (一個大型行李箱的複製品)。顏色是 \"our attractive new color\" (我們迷人的新色)。根據網頁資訊，新色是 \"coming soon-Ocean Blue\" (即將推出的海洋藍)。結合起來，贈品是「藍色的大型行李箱」，故選 (C)。"
            },
            {
                number: 194, text: "What must Ms. Amorapanth do in order to receive a gift from Harris Ludlow?", translation: "Ms. Amorapanth 必須做什麼才能收到禮物？",
                options: [
                    { letter: "A", text: "Prove that she is the author of a product review", translation: "證明她是產品評論的作者" },
                    { letter: "B", text: "Complete a survey about new products", translation: "完成新產品問卷" },
                    { letter: "C", text: "Retract negative feedback given on a Web site", translation: "撤回網站上的負評" },
                    { letter: "D", text: "Send a package containing a defective suitcase", translation: "寄回包含瑕疵行李箱的包裹" }
                ],
                answer: "A", explanation: "文中說 \"after you verify that you posted the April 18 review\" (在您證實您發布了 4月18日 的評論之後)。"
            },
            {
                number: 195, text: "What does Mr. Cosme indicate about the wheels of the suitcases?", translation: "Mr. Cosme 指出關於行李箱輪子的什麼事？",
                options: [
                    { letter: "A", text: "They have been thoroughly tested.", translation: "它們經過徹底測試。" },
                    { letter: "B", text: "They have been redesigned to roll more easily.", translation: "它們經過重新設計更好推。" },
                    { letter: "C", text: "They are as small as possible for the size of the suitcase.", translation: "它們尺寸盡可能小。" },
                    { letter: "D", text: "They are less noisy than those of previous models.", translation: "它們比舊款安靜。" }
                ],
                answer: "A", explanation: "評論中顧客抱怨 \"retraction mechanism of the wheels\" (輪子的伸縮機制)。回覆中針對此點表示 \"proven to withstand years' worth of rough treatment... in our laboratories\" (在實驗室證明可經受多年粗暴使用)，這意味著經過了徹底的測試 (Thoroughly tested)。"
            }
        ]
    }
);
