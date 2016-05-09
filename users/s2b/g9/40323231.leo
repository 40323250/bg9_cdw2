<?xml version="1.0" encoding="utf-8"?>
<!-- Created by Leo: http://leoeditor.com/leo_toc.html -->
<?xml-stylesheet ekr_test ?>
<leo_file xmlns:leo="http://leoeditor.com/namespaces/leo-python-editor/1.1" >
<leo_header file_format="2" tnodes="0" max_tnode_index="0" clone_windows="0"/>
<globals body_outline_ratio="0.5" body_secondary_ratio="0.5">
	<global_window_position top="50" left="50" height="500" width="700"/>
	<global_log_window_position top="0" left="0" height="0" width="0"/>
</globals>
<preferences/>
<find_panel_settings/>
<vnodes>
<v t="amd.20160329124554.2" a="E"><vh>@path ./../../../</vh>
<v t="amd.20160329164739.1" a="E"><vh>假如要送到 gh-pages 分支, 使用下列按鈕</vh>
<v t="amd.20160329164739.2"><vh>@button gh-pages pelican</vh></v>
</v>
<v t="amd.20160329163719.1" a="E"><vh>假如要在近端檢視, 使用下列按鈕</vh>
<v t="amd.20160329163719.2"><vh>@button local pelican</vh></v>
</v>
<v t="amd.20160329124849.1"><vh>進入 content 目錄</vh></v>
<v t="amd.20160329124903.1" a="E"><vh>@path content</vh>
<v t="leo.20160414134149.2" a="E"><vh>@path bg9</vh>
<v t="leo.20160414134149.1"><vh>@edit 40323231.md</vh></v>
</v>
</v>
</v>
</vnodes>
<tnodes>
<t tx="amd.20160329124554.2"></t>
<t tx="amd.20160329124849.1"></t>
<t tx="amd.20160329124903.1"></t>
<t tx="amd.20160329163719.1"></t>
<t tx="amd.20160329163719.2">@language python
import os
#os.system("pelican content -o output -s local_publishconf.py -t theme/pelican-bootstrap3")
os.system("pelican content -o post -s local_publishconf.py")
g.es("admin pelican 近端執行完畢")


</t>
<t tx="amd.20160329164739.1">@language md
Title: 40323231 - 期中報告
Category: bg9
Tags: scrum4, task4, 40323231
Author: 40323231


40323231 - 期中報告

&lt;!-- PELICAN_END_SUMMARY --&gt;

組別繪圖 : &lt;a href="http://2016spring-40323250.rhcloud.com/bg9/task2_homework"&gt;bg9畫布&lt;/a&gt; 
&lt;/br&gt;
個人繪圖 : &lt;a href="http://2016spring-40323230.rhcloud.com/bg9/scrum4_31_2"&gt;scrum4_31_2&lt;/a&gt; 
&lt;hr&gt;
&lt;/br&gt;
&lt;h4&gt;組別圖檔 :&lt;/h4&gt; 
&lt;img src="./../files/bg9/bg9.png"&gt;
&lt;/br&gt;
&lt;/br&gt;
&lt;h4&gt;個人圖檔 : &lt;/h4&gt;
&lt;img src="./../files/bg9/31_1.png"&gt;
&lt;/br&gt;
&lt;img src="./../files/bg9/31_2.png"&gt;
&lt;/br&gt;
&lt;/br&gt;
&lt;/br&gt;
&lt;h3&gt;心得 :&lt;/h3&gt;
&lt;h4&gt;這次的繪圖軟體有solvespace和Onshape。最一開始用solvespace繪製自己想要的圖，之後轉檔變成文字，文字中有移動、線、圓弧、起始點、順時針或逆時針圓弧...等等。&lt;/h4&gt;
&lt;/br&gt;
&lt;h4&gt;轉檔完後的文字放到.lio上，之後設定畫布和名稱和位置等等的設定後，再開啟python wsgi.py，之後就可以在近端看到自己所想要的圖形。&lt;/h4&gt;
&lt;/br&gt;
&lt;h4&gt;這次課程也有教到利用FORK建立子道館，而子道館內可以做自己所想要的事情，而這也讓我有辦法嘗試其他之前不敢嘗試的東西，因為之前總是會提心吊膽的怕把共同倉儲的東西推壞掉，現在有了子道館也就不怕了，而且子道館在回傳自己最新的資料會幫你查看是否有衝突，這樣讓我大大的提升信心和膽量。&lt;/h4&gt;
&lt;/br&gt;
&lt;/br&gt;
&lt;h4&gt;這次的課程讓我知道，很多人一起繪製出來的東西，可以利用協統方式匯入大家所畫的東西，而不再像之前一樣，自己埋頭苦幹的完成，或者全組只能一個一個按照順序的畫，導致很多時間不必要的浪費。&lt;/h4&gt;
&lt;/br&gt;
&lt;/br&gt;
&lt;h4&gt;這幾個禮拜下來，雖然有時候沒辦法像其他同學一樣一聽就懂，常常都是嘗試了很久或者參考其他同學做的，可是最後完成後總會很開心，很有成就感。&lt;/h4&gt;

</t>
<t tx="amd.20160329164739.2">@language python
import os
os.system("pelican content -o post -s publishconf.py")
g.es("admin pelican 執行完畢")

</t>
<t tx="leo.20160414134149.2"></t>
</tnodes>
</leo_file>
