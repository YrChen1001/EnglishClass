// Question Sets Data for TOEIC/GEPT Part 7 (Q151-200)
const questionSets = [
    {
        id: 1,
        range: "Q151-152",
        title: "鞋店維修單 (Repair Order)",
        document: {
            type: "表單",
            title: "Browning's Shoe Repair",
            title_zh: "Browning 鞋類維修",
            content: `<p><span class="label">Order number:</span> VG12983<br>
<span class="label">Customer:</span> Janice Goldblatt<br>
<span class="label">Drop-off date:</span> November 5<br>
<span class="label">Contact number:</span> (873) 555-0143</p>
<p><span class="label">Shoe description:</span><br>
Style: Lady's dress shoe<br>
Size: 7<br>
Color: Black</p>
<p><span class="label">Requested repair:</span> Fix broken heel<br>
<span class="label">Repair assigned to:</span> Jack Burris<br>
<span class="label">Ready by:</span> November 14</p>
<p><span class="label">Notes:</span><br>
Apply 10% frequent customer price reduction. Order will be picked up by Harry Silver.</p>`,
            translation: `<p><span class="label">訂單編號：</span>VG12983<br>
<span class="label">顧客：</span>Janice Goldblatt<br>
<span class="label">送件日期：</span>11月5日<br>
<span class="label">聯絡電話：</span>(873) 555-0143</p>
<p><span class="label">鞋況描述：</span><br>
款式：女士正裝鞋<br>
尺寸：7號<br>
顏色：黑色</p>
<p><span class="label">要求維修項目：</span>修理斷裂的鞋跟<br>
<span class="label">維修指派給：</span>Jack Burris<br>
<span class="label">預計取件日：</span>11月14日</p>
<p><span class="label">備註：</span><br>
適用 10% 熟客折扣。訂單將由 Harry Silver 取件。</p>`
        },
        questions: [
            {
                number: 151,
                text: "Who most likely is Mr. Burris?",
                translation: "Mr. Burris 最可能是誰？",
                options: [
                    { letter: "A", text: "Ms. Goldblatt's assistant", translation: "Ms. Goldblatt 的助理" },
                    { letter: "B", text: "A department store salesperson", translation: "百貨公司的銷售員" },
                    { letter: "C", text: "An employee at Browning's", translation: "Browning 店內的員工" },
                    { letter: "D", text: "A delivery person", translation: "送貨員" }
                ],
                answer: "C",
                explanation: "表格中顯示 \"Repair assigned to: Jack Burris\"（維修工作指派給 Jack Burris），因此他是負責修鞋的員工。"
            },
            {
                number: 152,
                text: "What does the document indicate about Ms. Goldblatt?",
                translation: "關於 Ms. Goldblatt，文件指出了什麼？",
                options: [
                    { letter: "A", text: "She is ordering a new black dress.", translation: "她正在訂購一件新的黑色洋裝。" },
                    { letter: "B", text: "She will receive a discount.", translation: "她將獲得折扣。" },
                    { letter: "C", text: "She will visit Browning's on November 14.", translation: "她將在 11月14日 造訪 Browning 店面。" },
                    { letter: "D", text: "She is attending a special event on November 5.", translation: "她將在 11月5日 參加一場特別活動。" }
                ],
                answer: "B",
                explanation: "備註欄寫著 \"Apply 10% frequent customer price reduction\"（適用10%熟客降價），對應選項 (B) 的 discount。選項 (C) 錯誤，因為備註說是由 Harry Silver 來取件。"
            }
        ]
    },
    {
        id: 2,
        range: "Q153-154",
        title: "生產成本電子郵件 (Email)",
        document: {
            type: "電子郵件",
            title: "Production Cost Outline",
            title_zh: "生產成本大綱",
            content: `<p><span class="label">From:</span> Anton Bremen, Production Manager<br>
<span class="label">To:</span> Andrea Lang, Director<br>
<span class="label">Re:</span> Production cost outline<br>
<span class="label">Date:</span> November 3</p>
<p>Dear Ms. Lang:</p>
<p>Please see the requested breakdown below. The proposed electronic truck line will be made of parts produced by our own factories unless otherwise noted. They will be appropriate for children over the age of five and controlled by small handsets. Though this is not my area of expertise, I personally envision this product selling well through department stores. Once you consider the estimated outlay, I hope we can organize a meeting to decide on the project's feasibility and next steps.</p>
<div class="table-wrapper">
<table>
<tr><th colspan="2">Gravitate Play, Inc. - Toy Truck Planned Production Cost</th></tr>
<tr><td>Plastic Casing</td><td>$1.50/unit</td></tr>
<tr><td>Rubber Wheels</td><td>$2.00/unit</td></tr>
<tr><td>Electronics</td><td>$5.00/unit</td></tr>
<tr><td>Cardboard Packaging (by supplier Promo Art)</td><td>$0.20/unit</td></tr>
<tr><td>In-house labor (0.25 hours/unit)</td><td>$3.80/unit</td></tr>
<tr><td><strong>Total Direct Cost/Unit</strong></td><td>$12.50 × 3,000 = $37,500</td></tr>
<tr><td>Total Indirect Overhead</td><td>$12,500</td></tr>
<tr><td><strong>Total Production Costs</strong></td><td>$50,000</td></tr>
</table>
</div>
<p>Best Regards,<br>Anton Bremen</p>`,
            translation: `<p><span class="label">寄件者：</span>Anton Bremen，生產經理<br>
<span class="label">收件者：</span>Andrea Lang，總監<br>
<span class="label">主旨：</span>生產成本大綱<br>
<span class="label">日期：</span>11月3日</p>
<p>Lang 女士您好：</p>
<p>請參閱下方您所要求的細項說明。除非另有標註，否則擬議中的電子卡車系列將由我們自己的工廠生產零件。這些產品適合五歲以上的兒童，並由小型手持控制器操控。雖然這不是我的專業領域，但我個人預期這款產品在百貨公司會賣得很好。一旦您考量了預估支出，希望能安排會議決定專案的可行性及後續步驟。</p>
<div class="table-wrapper">
<table>
<tr><th colspan="2">Gravitate Play, Inc. - 玩具卡車預計生產成本</th></tr>
<tr><td>塑膠外殼</td><td>$1.50/單位</td></tr>
<tr><td>橡膠輪胎</td><td>$2.00/單位</td></tr>
<tr><td>電子零件</td><td>$5.00/單位</td></tr>
<tr><td>紙板包裝（供應商 Promo Art）</td><td>$0.20/單位</td></tr>
<tr><td>內部人工 (0.25 小時/單位)</td><td>$3.80/單位</td></tr>
<tr><td><strong>總直接成本/單位</strong></td><td>$12.50 × 3,000 = $37,500</td></tr>
<tr><td>總間接費用</td><td>$12,500</td></tr>
<tr><td><strong>總生產成本</strong></td><td>$50,000</td></tr>
</table>
</div>
<p>此致，<br>Anton Bremen</p>`
        },
        questions: [
            {
                number: 153,
                text: "Why is Mr. Bremen writing the e-mail?",
                translation: "Mr. Bremen 為何寫這封郵件？",
                options: [
                    { letter: "A", text: "To ask for a review of proposed costs", translation: "請求審查預估成本" },
                    { letter: "B", text: "To report a problem with product pricing", translation: "報告產品定價的問題" },
                    { letter: "C", text: "To argue for increasing an existing budget", translation: "爭取增加現有預算" },
                    { letter: "D", text: "To support a bid from a product manufacturer", translation: "支持某家產品製造商的投標" }
                ],
                answer: "A",
                explanation: "信件開頭說 \"Please see the requested breakdown below\"（請見下方的成本細目），結尾說 \"Once you consider the estimated outlay...\"（一旦您考量了預估支出...），目的是提供成本估算供主管審查。"
            },
            {
                number: 154,
                text: "What is indicated about the product packaging?",
                translation: "關於產品包裝，文中指出了什麼？",
                options: [
                    { letter: "A", text: "It is decorated with colors appropriate for children.", translation: "它裝飾著適合兒童的顏色。" },
                    { letter: "B", text: "It is made from recycled department store packaging.", translation: "它是用回收的百貨公司包裝製成。" },
                    { letter: "C", text: "It is designed and produced by an outside vendor.", translation: "它是外部供應商設計製造的。" },
                    { letter: "D", text: "It is an important component of the end product.", translation: "它是最終產品的重要組成部分。" }
                ],
                answer: "C",
                explanation: "成本列表中的 \"Cardboard Packaging\" 後方括號註明 \"(Devised and fabricated by supplier Promo Art)\"，Supplier 即為外部供應商 (Vendor)。"
            }
        ]
    },
    {
        id: 3,
        range: "Q155-157",
        title: "新產品新聞報導 (Article)",
        document: {
            type: "新聞報導",
            title: "New Tasteemix Flavor a Big Hit",
            title_zh: "Tasteemix 新口味大受歡迎",
            content: `<p><em>By Deepanjali Jaddoo</em></p>
<p><strong>PORT LOUIS (2 February)</strong> — Three weeks ago, Helvetia Food Industries (HFI) announced the introduction of a new flavor of its popular Tasteemix breakfast cereal—coconut cream. HFI also announced that the product would be available for a limited time only, sending Tasteemix enthusiasts from Argentina to Zambia into a buying frenzy.</p>
<p>All six major grocery distributors here in Mauritius confirmed that they had received a large supply of coconut cream Tasteemix shortly after the new product was introduced on 8 January. Both wholesalers expected it to be gone by the end of the day.</p>
<p>"HFI's current campaign is reminiscent of the one it waged four years ago when it introduced its strawberry-cinnamon cereal," said Bina Perida, a professor of marketing at Port Louis Business College. "Then, as now, HFI announced a product as being offered for a limited time only, resulting in that item's rapid disappearance from shelves in grocery stores across the globe."</p>
<p>On 5 April, HFI's accountants will review the company's first-quarter earnings. Based on the initial sales, market watchers are confident that HFI's expectations will be met.</p>`,
            translation: `<p><em>記者 Deepanjali Jaddoo</em></p>
<p><strong>路易港（2月2日）</strong>—— 三週前，Helvetia 食品工業（HFI）宣布推出其廣受歡迎的 Tasteemix 早餐麥片新口味——椰子奶油。HFI 同時宣布該產品僅限時供應，這使得從阿根廷到尚比亞的 Tasteemix 愛好者陷入搶購熱潮。</p>
<p>毛里求斯當地的六大食品經銷商皆證實，在 1月8日 新產品推出後不久，他們就收到了大量的椰子奶油口味 Tasteemix。這兩家批發商都預計當天結束前就會賣光。</p>
<p>「HFI 目前的行銷活動讓人想起四年前推出草莓肉桂麥片時的操作，」路易港商學院的行銷教授 Bina Perida 表示。「當時也像現在一樣，HFI 宣布產品限時供應，導致該商品在全球雜貨店貨架上迅速消失。」</p>
<p>4月5日，HFI 的會計師將審查公司第一季的收益。基於初期銷售狀況，市場觀察家有信心 HFI 將達成預期目標。</p>`
        },
        questions: [
            {
                number: 155,
                text: "What is indicated about Tasteemix cereals?",
                translation: "關於 Tasteemix 麥片，文中指出了什麼？",
                options: [
                    { letter: "A", text: "They are distributed internationally.", translation: "它們行銷全球。" },
                    { letter: "B", text: "They are made in a factory in Mauritius.", translation: "它們是在毛里求斯的工廠製造的。" },
                    { letter: "C", text: "They are HFI's main source of revenue.", translation: "它們是 HFI 的主要營收來源。" },
                    { letter: "D", text: "They were first marketed four years ago.", translation: "它們在四年前首次上市。" }
                ],
                answer: "A",
                explanation: "文中提到 \"enthusiasts from Argentina to Zambia\"（從阿根廷到尚比亞的愛好者）以及 \"grocery stores across the globe\"（全球雜貨店），證明是國際販售。"
            },
            {
                number: 156,
                text: "What is reported about HFI?",
                translation: "關於 HFI 的報導內容為何？",
                options: [
                    { letter: "A", text: "It has no more Tasteemix cereal in stock.", translation: "它已經沒有 Tasteemix 麥片的庫存了。" },
                    { letter: "B", text: "It hired a consulting firm to do its accounting.", translation: "它雇用了一家顧問公司來做會計。" },
                    { letter: "C", text: "It expects this year's earnings to be better than last year's.", translation: "它預期今年的收益會比去年好。" },
                    { letter: "D", text: "It previously offered a product for a limited time only.", translation: "它以前曾提供過限時供應的產品。" }
                ],
                answer: "D",
                explanation: "第三段提到 \"reminiscent of the one it waged four years ago... announced a product as being offered for a limited time only\"（讓人想起四年前... 宣布產品限時供應）。"
            },
            {
                number: 157,
                text: "In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? \"Yet as of yesterday morning, only Vendibles and Foodiverse reported that they had any of the item left in stock.\"",
                translation: "「然而截至昨天早上，只有 Vendibles 和 Foodiverse 這兩家回報還有庫存。」這句最適合放在哪個位置？",
                options: [
                    { letter: "A", text: "[1]", translation: "[1]" },
                    { letter: "B", text: "[2]", translation: "[2]" },
                    { letter: "C", text: "[3]", translation: "[3]" },
                    { letter: "D", text: "[4]", translation: "[4]" }
                ],
                answer: "B",
                explanation: "插入句提到 \"only Vendibles and Foodiverse\"（只有這兩家），緊接著後面的句子說 \"Both wholesalers expected it to be gone...\"（這兩家批發商都預計...），\"Both\" 正好指代插入句中的那兩家公司。"
            }
        ]
    }
];
