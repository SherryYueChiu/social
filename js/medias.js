/** @type MediaPost[] */
var MEDIAS = [
  {
    title: '卡丁車',
    description: `又來挑戰麗寶的卡丁賽車了
這次有進步，時間內跑了8圈，上次只有6圈
不過仍然是第六名，前面的像怪物一樣🤣
#三刷麗寶卡丁賽車
    <tag>麗寶卡丁賽車</tag>`,
    thumbnail: 'LiPaoKart221022.png',
    colorTone: '#545354',
    time: '2022/10/22',
    media: [{
      type: 'video',
      src: 'LiPaoKart221022.mp4',
      thumbnail: 'LiPaoKart221022.png',
    }]
  },
  {
    title: '美美的忘憂谷',
    description: `<tag>外埔忘憂谷</tag>`,
    thumbnail: 'TaichungWanYouGu221022.png',
    colorTone: '#aebdc4',
    time: '2022/10/22',
    media: [{
      type: 'video',
      src: 'TaichungWanYouGu221022.mp4',
      thumbnail: 'TaichungWanYouGu221022.png',
    }]
  },
  {
    title: '來咖啡廳chill一下',
    description: `來咖啡廳chill一下
    全世界都在忙，就我在這邊悠哉
    店名太可愛了所以來這
    <tag>Two兔夜景咖啡廳</tag>`,
    thumbnail: 'twocafe221009.png',
    colorTone: '#5d584b',
    time: '2022/10/09',
    media: [{
      type: 'video',
      src: 'twocafe221009.mp4',
      thumbnail: 'twocafe221009.png',
    }]
  },
  {
    title: '你們的311小記者已經上線',
    description: `<tag>麗寶樂園馬拉灣</tag>`,
    thumbnail: 'lipaoMala221009.png',
    colorTone: '#d0c7c3',
    time: '2022/10/09',
    media: [{
      type: 'video',
      src: 'lipaoMala221009.mp4',
      thumbnail: 'lipaoMala221009.png',
    }]
  },
  {
    title: '全世界都是泡泡～',
    description: ``,
    thumbnail: 'bubbles221007.png',
    colorTone: '#71705e',
    time: '2022/10/07',
    media: [{
      type: 'video',
      src: 'bubbles221007.mp4',
      thumbnail: 'bubbles221007.png',
    }]
  },
  {
    title: '日光溫泉',
    description: `傷眼了抱歉蛤🤣🦥
    這間日光溫泉真的漂釀，而且也有無障礙空間
    但我還是更愛清新啦～清新離家超近的，而且色調很暖
    下次要去的話或許可以先爬大坑步道，就在旁邊而已
    <tag>日光溫泉會館</tag><tag>有無障礙空間</tag>`,
    thumbnail: 'theSunHotSpring221001.png',
    colorTone: '#c3b59f',
    time: '2022/10/02',
    media: [{
      type: 'video',
      src: 'theSunHotSpring221001.mp4',
      thumbnail: 'theSunHotSpring221001.png',
    }]
  },
  {
    title: '公園裡有很高的溜滑梯',
    description: `還要爬步道樓梯或是梯子上去呢
    溜滑梯賽高～謝謝郁晴帶我來這
    <tag>水之丘主題公園</tag><tag>溜滑梯</tag>`,
    thumbnail: 'slide220929.png',
    colorTone: '#cfe2f3',
    time: '2022/09/29',
    media: [{
      type: 'video',
      src: 'slide220929.mp4',
      thumbnail: 'slide220929.png',
    }]
  },
  {
    title: '遠距合唱系列',
    description: `李芷婷-你聽聽就好`,
    thumbnail: 'sing220918.png',
    colorTone: '#313540',
    time: '2022/09/18',
    media: [{
      type: 'video',
      src: 'sing220918.mp4',
      thumbnail: 'sing220918.png',
    }]
  },
  {
    title: '刀療體驗',
    description: `逛市集的時候發現他們提供公益體驗，然後我就來初體驗了～`,
    thumbnail: 'knifeHealing220918.png',
    colorTone: '#6c6157',
    time: '2022/09/18',
    media: [{
      type: 'video',
      src: 'knifeHealing220918.mp4',
      thumbnail: 'knifeHealing220918.png',
    }]
  },
  {
    title: '清新溫泉',
    description: `我又跑來泡溫泉了～這邊的水質很棒，泡起來也很舒服，還嘗試了一下冷一下熱的泡。
    住宿就沒有了，五星級飯店太貴🤣
    <tag>清新溫泉</tag><tag>有無障礙空間</tag>`,
    thumbnail: 'QingXinHotSpring220913.png',
    colorTone: '#cbc3af',
    time: '2022/09/13',
    media: [{
      type: 'video',
      src: 'QingXinHotSpring220913.mp4',
      thumbnail: 'QingXinHotSpring220913.png',
    }]
  },
  {
    title: '韓式證件照',
    description: `拍完自己都覺得陌生🤣
    <tag>韓式證件照</tag><tag>Holo+Face</tag>`,
    thumbnail: 'HoloFace220911.png',
    colorTone: '#cbc3af',
    time: '2022/09/11',
    media: [{
      type: 'video',
      src: 'HoloFace220911.mp4',
      thumbnail: 'HoloFace220911.png',
    }]
  },
  {
    title: '泳渡日月潭',
    description: `還在泳池游25公尺氣喘吁吁的時候真的沒想過能游超過一公里耶。
    也很感謝小夥伴們的+1，在颱風天參與這種壯舉
    <tag>泳渡日月潭</tag><tag>台灣人必做三件事</tag>`,
    thumbnail: 'SunMoonLakeSwimming220904.png',
    colorTone: '#c3d8ed',
    time: '2022/09/04',
    media: [{
      type: 'video',
      src: 'SunMoonLakeSwimming220904.mp4',
      thumbnail: 'SunMoonLakeSwimming220904.png',
    }]
  },
  {
    title: '數字聊心體驗',
    description: `今天在市集體驗了Miranda心輪療癒的數字聊心，感到很舒適而且聊了很多～
    其實之前在火車站前就有想瞭解，不過到今天才鼓起勇氣在攤前坐下
    <tag>基好市集 彩虹市集</tag><tag>北屯新村</tag>`,
    thumbnail: 'JiHaoShiJi220820.png',
    colorTone: '#3f4c31',
    time: '2022/08/20',
    media: [{
      type: 'video',
      src: 'JiHaoShiJi220820.mp4',
      thumbnail: 'JiHaoShiJi220820.png',
    }]
  },
  {
    title: 'APP修改示範',
    description: `安卓App破解隨手錄🐦`,
    thumbnail: 'APK_mod220814.png',
    colorTone: '#2a2a2a',
    time: '2022/08/14',
    media: [{
      type: 'video',
      src: 'APK_mod220814.mp4',
      thumbnail: 'APK_mod220814.png',
    }]
  },
  {
    title: '逛逛彩虹市集',
    description: `<tag>基好事吉 彩虹市集</tag><tag>台中火車站廣場</tag>`,
    thumbnail: 'JiHaoShiJi220807.png',
    colorTone: '#1d6385',
    time: '2022/08/07',
    media: [{
      type: 'video',
      src: 'JiHaoShiJi220807.mp4',
      thumbnail: 'JiHaoShiJi220807.png',
    }]
  },
  {
    title: '水肺潛水OW海習',
    description: `海洋實習完了～第一次跑到海裡面，看到了很多海鮮🤣而且<ruby style="ruby-position:under;"><rb><del>人肉</del></rb>
    <rp>(</rp><rt>海水</rt><rp>)</rp></ruby>真的很鹹。
    還交到新朋友！或許之後也會繼續潛，甚至繼續往進階的考。
    <tag>墾丁後壁湖</tag>`,
    thumbnail: 'KengDingOW.png',
    colorTone: '#2d7fca',
    time: '2022/07/17',
    media: [{
      type: 'image',
      src: 'KengDingOW.png',
    }]
  },
  {
    title: '玥餅+溜冰=溜餅',
    description: `還在練習
<tag>Roller186溜冰場</tag>`,
    thumbnail: 'rollerSkating.png',
    colorTone: '#71411a',
    time: '2022/06/18',
    media: [{
      type: 'video',
      src: 'rollerSkating.mp4',
      thumbnail: 'rollerSkating.png',
    }]
  },
  {
    title: '水肺潛水OW訓練',
    description: `室內課和紙本測驗結束了，再去海洋實習就可以拿到證照和人揪去海邊潛水了～
    <tag>潛立方潛水旅館</tag>`,
    thumbnail: 'DiveCubeOW.png',
    colorTone: '#2d7fca',
    time: '2022/06/12',
    media: [{
      type: 'image',
      src: 'DiveCubeOW.png',
    }]
  }, {
    title: '挑戰走完台灣大道',
    description: `25公里我們走了7個小時，鞋子沒有挑好，後面起水泡之後走得很辛苦。
這挑戰能完成一次就夠了～`,
    thumbnail: 'taiwanBlvdChallenge220605.png',
    colorTone: '#5c81ab',
    time: '2022/06/05',
    media: [{
      type: 'image',
      src: 'taiwanBlvdChallenge220605.png',
    }]
  },
  {
    title: '飛行傘體驗',
    description: `<tag>虎嘯山莊</tag>`,
    thumbnail: 'paragliding220604.png',
    colorTone: '#8b9db1',
    time: '2022/06/04',
    media: [{
      type: 'video',
      src: 'paragliding220604.mp4',
      thumbnail: 'paragliding220604.png',
    }]
  },
  {
    title: '開始練習游泳',
    description: `最近去游泳池都穿這套泳裝
    <tag>台中市北區國民運動中心</tag>`,
    thumbnail: 'swimming220528.png',
    colorTone: '#858b8d',
    time: '2022/05/28',
    media: [{
      type: 'image',
      src: 'swimming220528.png',
    }]
  },
  {
    title: '滔月夜景咖啡廳',
    description: `這裡隨便拍都滿好看的，東西也好吃
    <tag>滔月景觀咖啡廳</tag>`,
    thumbnail: 'taoYueCoffee220515.png',
    colorTone: '#264ae6',
    time: '2022/05/15',
    media: [{
      type: 'image',
      src: 'taoYueCoffee220515.png',
    }]
  },
  {
    title: '采耳體驗',
    description: `生日前夕跑來體驗采耳，采耳師很好聊，讓我突然又有了動力想到處跑
    <tag>東海藝術街</tag>`,
    thumbnail: 'caier220427.png',
    colorTone: '#60544f',
    time: '2022/04/27',
    media: [{
      type: 'video',
      src: 'caier220427.png',
      thumbnail: 'caier220427.png',
    }]
  },
  {
    title: '室內跳傘體驗',
    description: `原本是想水陸+卡丁車+風洞（室內跳傘）用兩天全部攻略，不過水樂園還沒開放，只好等暑假了。
室內跳傘以後有機會成為奧運項目呦！
<tag>麗寶樂園</tag>`,
    thumbnail: 'bodyflight220423.png',
    colorTone: '#0067b9',
    time: '2022/04/23',
    media: [{
      type: 'video',
      src: 'bodyflight220423.mp4',
      thumbnail: 'bodyflight220423.png',
    }]
  },
  {
    title: 'Openmic',
    description: `第一次來聽Openmic，離家很近呢，意外的還有黃亦豪，全場就他的段子最完整
    <tag>62巷青年旅館</tag>`,
    thumbnail: 'openmic.png',
    colorTone: '#514034',
    time: '2022/03/31',
    media: [{
      type: 'image',
      src: 'openmic.png',
    }]
  },
  {
    title: '指針式數字鐘',
    description: `最近的一個Side project，很適合在專注的時候作為手機待機畫面。
    它是一個PWA，可以從瀏覽器安裝到手機，點工具列的安裝或新增到桌面就可以了。

    <a href="https://sherryyuechiu.github.io/PointerDigitalClock">https://sherryyuechiu.github.io/PointerDigitalClock</a>`,
    thumbnail: 'pointerDigitalClock.png',
    colorTone: '#FFFFFF',
    time: '2022/03/26',
    media: [{
      type: 'image',
      src: 'pointerDigitalClock.png',
    }]
  },
  {
    title: '執事咖啡廳',
    description: `除了用語很撩，還會跪下來幫你點餐？！！
    <tag>台北地下街</tag>`,
    thumbnail: 'chittyMood220226.png',
    colorTone: '#cca5ab',
    time: '2022/02/26',
    media: [{
      type: 'image',
      src: 'chittyMood220226.png',
    }]
  },
  {
    title: '中部粽',
    description: `那些我覺得很讚的人，從端午節開始，我陸陸續續送出去一顆顆的中部粽`,
    thumbnail: 'dumplingGift.png',
    colorTone: '#b6998f',
    time: '2022/01/22',
    media: [{
      type: 'video',
      src: 'dumplingGift.mp4',
      thumbnail: 'dumplingGift.png',
    }]
  }
]

/**
 * 單個媒體
 * @typedef {{ 
 *  type:string, 
 *  src:string, 
 *  thumbnail?:string, 
 * }} Media
 */

/**
 * 媒體
 * @typedef {{ 
 *  title:string, 
 *  description:string, 
 *  thumbnail:string, 
 *  colorTone:string, 
 *  time:string, 
 *  media:Media[]
 * }} MediaPost
 */