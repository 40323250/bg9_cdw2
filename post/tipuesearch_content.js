var tipuesearch = {"pages":[{"text":"CDW2 gh-pages 網頁 CDW2 倉儲: https://github.com/2015fallhw/cdw2 線上分組程式: http://simpleflask-2014openshift.rhcloud.com/option","tags":"misc","url":"http://40323250.github.io/bg9_cdw2/post/pages/about/","title":"About"},{"text":"40323218 - 期中報告 組別繪圖 : bg9畫布 個人繪圖 : scrum2_18_2 組別圖檔 : 個人圖檔 : 個人 Onshape 組合 : 心得 :","tags":"bg9","url":"http://40323250.github.io/bg9_cdw2/post/40323218-qi-zhong-bao-gao.html","title":"40323218 - 期中報告"},{"text":"40323250 - 期中報告 協同繪圖 bg9藍圖 個人繪圖 scrum1_50_ABCD Gh-pages : 在 gh-pages 裡的user/組別 目錄下 新增個人leo檔案，並將.md檔路徑放在content，至於紅色框框為檔案名稱，很多人都使用日期導致檔案一直覆寫。 和上學期個人md檔相同作法，編輯個人學期心得，並顯示於 cdw2首頁 Master : 用於儲存繪圖程式檔案，並將檔案傳上openshift，能夠在遠端直接顯示圖檔，並能夠導入組員零件，已達成協同要求。 近端要在cdw2目錄下，使用python wsgi.py指令，才能夠在localhost5000顯示個人圖檔。 繪圖須註冊藍圖，包括組別與個人，註冊位置在cdw2目錄下之simpleflask.leo 繪圖 : 此部分依照你的需求，若是使用你的藍圖為主畫布，則使用此串原始碼 若為被導入之零件則刪除(尾端/script也要記得刪) 個人檔案 可以使用多個畫布，但導入圖檔畫布要相同 會依照導入順序顯示圖形 若傳上openshift後，幾天沒有開啟會導致頁面暫時關閉，只需按下重啟即可 協同繪圖(可能)使用Allow-Contorl-Allow-Origin功能 OnshapeABCD組立stl檔案 A與B的連接部分會有三層，所以有長短軸之分，且一開始就要決定哪一部分為最外層，否則最後接點會重疊 04/26 02:10 更新 協同需要另外設定允許權限 完成之協同組合圖","tags":"bg9","url":"http://40323250.github.io/bg9_cdw2/post/40323250-qi-zhong-bao-gao.html","title":"40323250 - 期中報告"},{"text":"網站類別分為 ag1~ag10, bg1~bg10, 與 MISC, 各組員必須透過 Leo Editor, Pelican, 與 Github pull requests 完成. CDW2 網頁: http://2015fallhw.github.io/cdw2/ 二甲文章類別: ag1~ag10 二乙文章類別: bg1~bg10 本網頁將 Pelican 設定分為本地端與 gh-pages 端的原因在於 disqus 設定, 本地端無需 disqus 討論功能, 而 gh-pages 端則需要網址全稱才能正確與 disqus 設定連結, 因此所有使用者在近端檢視時, 必須採用近端的按鈕, 而要送到遠端前則必須要用遠端按鈕產生所需要的 post 目錄下的所有資料後, 再提交推送. 以下為圖片引用方法, 建議放到 files 目錄下, 並且用相對目錄引用各自放在以用戶名稱命名的子目錄中, 以避免多用戶因採相同檔名而覆寫: 得到結果如下: 以下資料則從原先的 cdw2 gh-pages 分支中的 index.html 取出: cdw2 所在倉儲: https://github.com/2015fallhw/cdw2 以下繪圖由 s2a 的 g100 組所完成, 其中包括 s2b 的 g99 協同繪圖 (藍色零件). http://cdw2-ladisai.rhcloud.com/ag100/task2 以下則為4個零件中的第一個弧參數設定比較: 0(表示 x 軸轉角為0), 1(第一個選擇長度較大的弧), 0(且以右手向內畫弧) 0(表示 x 軸轉角為0), 0(第一個選擇長度較小的弧), 0(且以右手向內畫弧) 0(表示 x 軸轉角為0), 1(第一個選擇長度較大的弧), 1(且以右手向外畫弧) 0(表示 x 軸轉角為0), 0(第一個選擇長度較小的弧), 1(且以右手向外畫弧) http://cdw2-ladisai.rhcloud.com/bg99/fourchain Task1 相關: https://cmsimply-cadlab.rhcloud.com/get_page?heading=2016springCD 鍊條零件製造流程: 組立流程: 如何協同編輯 CDW2 gh-pages 網頁: 首先必須要認清的是 gh-pages 網頁位於 https://github.com/2015fallhw/cdw2 倉儲中的 gh-pages 分支, 與 master 分支中的資料不可弄混. CDW2 倉儲中的 master 分支中的資料為 Python3 wsgi 應用程式, 各組必須協同完成任務之後, 將 master 分支中的程式以 git remote add 的方式推送到各組的 OpenShift Python3 應用程式, 然後再將各組的應用程式連結與任務操作過程資料回報到 gh-pages 網頁. gh-pages 分支中各組分別使用 users 目錄下的 .md 檔, 以本地端按鈕產生本地端檢查用的網頁資料, 若沒有錯誤, 再提交推送到遠端, 若倉儲回應需要 pull 回資料, 一定要使用 git pull origin gh-pages 的方式, 明確取回 gh-pages 的分支合併, 若 content 目錄中的檔案能夠自動合併, 即可再用近端 Pelican 按鈕建立網頁資料, 檢查無誤後, 記得要再用遠端 Pelican 專用按鈕建立網頁後提交推送. 另外建議各組員在 content 目錄下建立文章標題時, 可以在標題最前方加上學號, 因為目前的設定會使用各 .md 檔案中的標題, 以拼音的方式建立對應的 html 網頁檔案, 假如有兩份 .md 檔案擁有相同的 Title, 則 Pelican 將會報錯, 一直到使用者修正後才能再正確進行 .md -> .html 檔案轉換的工作. 採用 pull requests 尋求 gh-pages 合併時, 因為網頁中的許多檔案都將產生衝突, 因此通常無法直接在 Github 中直接合併, 各組組長必須要根據系統的提示, 將資料拉到本地端後, 再視實際狀況處理 .md 的衝突 (千萬不要以手動處理 .html 檔案的衝突), 然後再用本地端按鈕建立網頁, 檢視無誤後再用遠端按鈕建立網頁資料後, 執行提交推送流程, 假如各組組長在處理衝突過程, 已經有其他組對遠端的倉儲版本進行更版, 則前述拉回處理衝突與合併的動作, 就必須再重複一遍. 祝大家協同愉快!!!","tags":"ag1","url":"http://40323250.github.io/bg9_cdw2/post/user1-ce-shi-content-mu-lu-xia-de-md-dang-an-zhuan-huan.html","title":"user1-測試 content 目錄下的 md 檔案轉換"},{"text":"40323230 - 期中報告 組別繪圖 : bg9畫布 個人繪圖 : scrum5_30_2 組別圖檔 : 個人圖檔 : 心得 : 這次作業依靠Github和Onshape的協同功能，完成在雲端下指令繪製2D和3D圖形的任務。 剛開始雖然有些不清楚，但是在研究和比較彼此系統的差異後能夠快速了解自己該做些甚麼、如何分擔自己組內的工作，較大家各別工作時更有效率，而非一頭霧水，拖累其他人的進度。 而這次在多重確認機制下，修改檔案犯的錯也能先在自己的倉儲察覺到，預先提防覆蓋其他人的成品，雖然這個機制現階段仍有些不周，但是對於組員之間的配合以及防範嚴重的錯誤上還是有不錯的成效。 做作業時，由於對指令不太熟悉，只能去研究各個參數的作用，或是觀察其他人修改時造成的效果。由於自己不太習慣用筆記，所以親身嘗試、模仿和自行找一些資料學習效果較顯著，只要不要在公共倉儲造成失誤，引來其他組員的麻煩就好。","tags":"bg9","url":"http://40323250.github.io/bg9_cdw2/post/40323230-qi-zhong-bao-gao.html","title":"40323230 - 期中報告"},{"text":"40323233 - 期中報告 組別畫布 : bg9畫布 個人畫布 : scrum6_33_2 組別圖檔 : 個人圖檔 : 這次的作業比較複雜，需要與組員一同去完成繪製鍊條，老師這次出的作業是為了讓我們理解如何更容易和別人協同，也可以透過這次機會，學會該如何在團隊裡分配任務，並和組員溝通與表達 Master主要是用於儲存繪圖程式檔案， 將檔案傳上openshift，就可以在遠端顯示圖檔，並能夠導入組員的零件。 近端必須要在cdw2目錄下，使用python wsgi.py指令，才能夠在localhost5000顯示。","tags":"bg9","url":"http://40323250.github.io/bg9_cdw2/post/40323233-qi-zhong-bao-gao.html","title":"40323233 - 期中報告"},{"text":"取得檔案： 先打開班級倉儲，若為非協同者點及Fork按鈕 之後會跳到複製的cdw2版本，如下圖 : 之後打開cmd，輸入git clone https網址，載下自己的倉儲，然後打開資料夾，找到自己相對應的組別就可以開始繪圖。 繪圖介紹： 1.先定義自己的檔案內容，url _prefix 為前綴、scrum1_task40323250為藍圖，make_response則是該組員零件需要被導到別的圖時需要的東西。(scrum1為老師設定的範例，當初不知道，所以都拿過來用了，發現的時候已經來不及了) 2.要開啟在cdw2目錄下的myfalskapp.py檔，導入(import)自己的檔案，並註冊(register)藍圖。(檔案為.py檔名稱，註冊名稱同上圖之藍圖名稱) 3.若上方藍圖設定為scrum1_task40323250，那紫色框框內也要相同，scrum1_50_ABCD所影響的是網址，之後會舉例。 紅色框框則決定這個圖是否被導入別人的圖。 如果紅色框線內的內容存在，就能透過wsgi.py讓圖形顯示在 localhost:5000/bg9(前綴)/scrum1_50_ABCD 如果沒有，在網頁上則顯示成文字。 Example 1 : Example 2 : 繪圖方式： 1.下圖為主要圖形，決定顯示的形狀，透過solvespace輸出2d-section存成.svg檔之結果。 2. translate為平移圖形、rotate為旋轉。 cmbr.translate(0, 20)是直接對主要圖形進行平移，之後的基準也會以此為主 basic1 = cmbr.dup()和cmbr.appendPath(basic1)為一組，複製主要圖形，並能對此進行移動放置，其基準會以主要圖形為出發點。 旋轉： 因為旋轉是以(0, 0)為旋轉中心，所以如果主要圖形不是在(0, 0)，就會整個跑掉，處理方式是將複製的零件先平移回(0, 0)後，進行旋轉再移到所需要的位置進行放置。 輸出與導入： 學會繪圖之後，再來就是將自己的檔案導入組別的畫布裡了。 如果要把自己的圖導入組別的畫布，除了要把圖形變成純文字以及make_response之外，還要在尾端加上幾行語法，如下圖，框框中的網址要放上導入者的openshift網址(主要的圖檔在他openshift上) 那導入者要如何導入組員圖形呢? 因為使用了make_response功能，所以要將導入者的程式切成三份，利用拼拼圖的方式完成導入。 這是導入者的第一段程式(用於導入畫布等功能) 這是導入者的第二段程式(用於尾端，關閉功能) 這是被導入者的程式 這是導入者的組合程式，把上面三者結合，而組合圖網址就會是這個 將檔案上傳Openshift 既然圖形都畫完了，再來就是將檔案上傳至openshift囉~ 首先，先註冊openshift帳號(這個網站的帳號也有大小寫之分)，登入之後到Applications建立一個Python3.3的程式 利用puttygen.exe產生一把金鑰並命名為id_rsa，存放在home底下的.ssh資料夾中，openshift也要填入鑰匙(.ssh資料夾須以cmd建立，mkdir .ssh) 之後即可clone網頁檔案，在近端修改資料後上傳自己本身的檔案後，推回openshift，就可以直接透過網頁顯示圖形，用法同wsgi.py。 檔案每個組員都要推，每個人的openshift才能產生各個要導入的圖檔。 Pull Request 檔案都編輯完之後，一樣要推回自己Fork的倉儲，並透過Pull Request，經過協同者認可之後檔案就可以到老師的倉儲上了 如果檔案沒問題，就選擇相對應之倉儲傳送(master到master) 沒有衝突的話，commit之後，等待認可就可以了。 Gh-Pages的報告網頁 既然圖都畫好了，就可以來做期中報告了。 先將資料夾切換至gh-pages，找到自己組別的資料夾後新建leo檔。 檔案標頭如下(隨個人需要做修改) 再往下就是內文，就是個人的報告囉，要如何呈現就看自己吸收多少吧! 完成之後，點選左端local pelican節點，按上方local-pelican按鈕，轉出近端html檔案，即可在post內檢查，沒問題再指向gh-pages pelican並按下gh-pages-pelican後，透過Pull Request就可以推回去囉。 註記 1.轉檔時，如果Tittle有重複，在post內的檔案會錯誤，導致轉檔失敗。 2.如果檔案名稱有變更，也要利用cmd刪除，否則也會導致錯誤。 3.如果將post檔案全數刪除(檔案錯誤)，再利用其中一個md檔進行轉檔，post的檔案會全部重建。 4.wsgi.py 啟動之後，要利用(ctrl) + (pause break)才能關閉，myflaskapp.py內容錯誤也會導致關閉。 以上花了我3個小時，請細心參閱 心得 : 協同，顧名思義就是大家一起做，那如果遇到不會的同學，就盡量幫助他們學習，所以我就打了這些，網址我貼在FB了，想不想學就是看個人了。 自己的分數自己救，60分的要求應該也沒有很高才對 自評分數 : 95","tags":"bg9","url":"http://40323250.github.io/bg9_cdw2/post/40323250-zhong-bian-bao-gao.html","title":"40323250 - 重編報告"},{"text":"40323214 - 期中報告 組別繪圖 : bg9畫布 個人繪圖 : scrum3_14_2 組別圖檔 : 個人圖檔 : 心得 : 對於這次學習的內容，有很多複雜的地方需要瞭解。而第一件事就是，需要先瞭解如何在leo編輯中，更改我們零件的位置，並從近端中打開python wsgi.py測試。 經過測試之後，還必須要與組員配合，共同完成一樣東西，本次目的就是完成字母，也就是說架構上必須先與組員說好，在座配合時才不會有尺寸上的問題。 最後透過openshift網站，可以將自己的零件放到遠端，並與組員在遠端中配合，利用google的額外工具，可以拉到其他組員所放上去的零件位置，就可以做出配合後的樣子。 而還可以利用onshape與組員一起組裝立體的英文字母。 此次報告給自己75分","tags":"bg9","url":"http://40323250.github.io/bg9_cdw2/post/40323214-qi-zhong-bao-gao.html","title":"40323214 - 期中報告"}]};