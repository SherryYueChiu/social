var curAVATAR = null;
var AVATARS = [
  'ZhongYanGingYuan.jpg',
  'Sketch.jpg',
  'FengLePark.jpg'
];
var curNICKNAME = null;
var NICKNAMES = [
  `玥餅`, `梓榳`, `SherryYue`
];
var curINTRO = null;
var INTROS = [
  `Pronoun: She/They
  Pre-Op Transgender
  Panromantic Asexual`,
  `前端工程師
  <a>#逆向工程玩家</a>`,
  `Same, same but different
  定居台中
  <a>#社會運動參與者</a> <a>#素食者</a> <a>#聲音控</a> <a>#極簡主義</a> <a>#INFP</a>`
];

var global = {
  postIdx: null,
  postPage: null
}

function setAvatar() {
  if (curAVATAR === null) curAVATAR = Math.floor(Math.random() * AVATARS.length);
  else curAVATAR = (curAVATAR + 1) % AVATARS.length;
  $('.main>.info>.avatar')[0].style.backgroundImage = `url(images/avatar/${AVATARS[curAVATAR]})`
}

function setName() {
  if (curNICKNAME === null) curNICKNAME = Math.floor(Math.random() * NICKNAMES.length);
  else curNICKNAME = (curNICKNAME + 1) % NICKNAMES.length;
  $('.main>.info>.nickname').html(NICKNAMES[curNICKNAME]);
}

function setIntro() {
  if (curINTRO === null) curINTRO = Math.floor(Math.random() * INTROS.length);
  else curINTRO = (curINTRO + 1) % INTROS.length;
  $('.main>.info>.intro').html(INTROS[curINTRO]);
}

function setRecommended() {

}

function setMedias() {
  MEDIAS.forEach((post, idx) => {
    let postElm = $(`<div class="post" idx="${idx}" onclick="viewMedia(${idx})"></div>`);
    let image = post.thumbnail;
    postElm.append(`
      <div class="image lazyload" data-bgset="./media/thumbnail/${image}"
      style="
      background-color: ${post.colorTone};
      ">
      </div>`);
    $('.main>.medias').append(postElm);
  });
}

function setPosts() {
  POSTS.forEach(post => {
    let link = post?.link;
    let title = post?.title;
    let time = post?.time;
    let content = post?.content;
    let postElm = $('<div class="post"></div>');
    if (link) {
      let linkElm = $(`<span class="linkIcon fa-solid fa-paperclip"></span>`);
      linkElm.attr('onclick', `window.open("${link}")`);
      postElm.append(linkElm);
    }
    if (title) {
      let headElm = $(`<div class="title">${title}</div>`);
      postElm.append(headElm);
    }
    if (content) postElm.append(`<div class="content">${content}</div>`);
    if (time) postElm.append(`<div class="time">${time}</div>`);
    $('.main>.posts').append(postElm);
  });
}

function setCalendar() {
  CALENDAR.forEach(post => {
    let link = post?.link;
    let title = post?.title;
    let time = post?.time;
    let description = post?.description;
    let postElm = $('<div class="event"></div>');
    if (link) {
      let linkElm = $(`<span class="linkIcon fa-solid fa-paperclip"></span>`);
      linkElm.attr('onclick', `window.open("${link}")`);
      postElm.append(linkElm);
    }
    if (time) postElm.append(`<div class="time">${time}</div>`);
    if (title) {
      let headElm = $(`<div class="title">${title}</div>`);
      postElm.append(headElm);
    }
    if (description) postElm.append(`<div class="description">${description}</div>`);
    $('.main>.calendar').append(postElm);
  })
}

function dismissPreview() {
  global.postIdx = null;
  global.postPage = null;
  $('.main').removeClass('blur');
  $('.previewBox').addClass('hide');
  document.querySelectorAll('.previewBox video').forEach(vid => vid.pause());
}

function viewMedia(idx, page = 0) {
  global.postIdx = idx;
  global.postPage = page;

  $('.main').addClass('blur');
  $('.previewBox').removeClass('hide');

  $('.previewBox').attr('idx', idx);
  $('.previewBox').attr('page', page);

  let $info = $('.previewBox>.info');
  let post = MEDIAS[idx];
  if (post.media[page].type === 'image') {
    $info.find('.title').html(post?.title ?? '');
    $info.find('.description').html(post?.description ?? '');
    $info.find('.description')[0].scrollTop = 0;
    $info.find('.time').html(post?.time ?? '');
    $('.previewBox>.image')
      .css({
        opacity: 1,
        backgroundImage: `url(./media/${post.media[page].src})`
      });
    $('.previewBox>.video')
      .css({ opacity: 0 })
      .attr('src', '')
      .attr('poster', '');
  }
  else if (post.media[page].type === 'video') {
    $info.find('.title').html(post?.title ?? '');
    $info.find('.description').html(post?.description ?? '');
    $info.find('.description')[0].scrollTop = 0;
    $info.find('.time').html(post?.time ?? '');
    $('.previewBox>.video')
      .css({ opacity: 1 })
      .attr('src', `./media/${post.media[page].src}`)
      .attr('poster', `./media/thumbnail/${post.media[page].thumbnail}`);
    $('.previewBox>.image')
      .css({
        opacity: 0,
        backgroundImage: ''
      });
  }
  // 顯示換頁鈕
  if (page <= 0) {
    $('.previewBox>.prev').addClass('hide');
  } else {
    $('.previewBox>.prev').removeClass('hide');
  }
  if (page >= post.media.length - 1) {
    $('.previewBox>.next').addClass('hide');
  } else {
    $('.previewBox>.next').removeClass('hide');
  }
}

function previewPrevPage() {
  let postIdx = parseInt($('.previewBox').attr('idx'));
  let curPage = parseInt($('.previewBox').attr('page'));
  viewMedia(postIdx, curPage - 1);
}

function previewNextPage() {
  let postIdx = parseInt($('.previewBox').attr('idx'));
  let curPage = parseInt($('.previewBox').attr('page'));
  viewMedia(postIdx, curPage + 1);
}


function copiedAlert(msg) {
  Swal.fire(msg);
}

function showMedia() {
  $('.main>.paginator>.medias').removeClass('blur');
  $('.main>.paginator>.posts').addClass('blur');
  $('.main>.paginator>.calendar').addClass('blur');
  $('.main>.medias').removeClass('hide');
  $('.main>.posts').addClass('hide');
  $('.main>.calendar').addClass('hide');
}

function showPost() {
  $('.main>.paginator>.medias').addClass('blur');
  $('.main>.paginator>.posts').removeClass('blur');
  $('.main>.paginator>.calendar').addClass('blur');
  $('.main>.medias').addClass('hide');
  $('.main>.posts').removeClass('hide');
  $('.main>.calendar').addClass('hide');
}

function showCalendar() {
  $('.main>.paginator>.medias').addClass('blur');
  $('.main>.paginator>.posts').addClass('blur');
  $('.main>.paginator>.calendar').removeClass('blur');
  $('.main>.medias').addClass('hide');
  $('.main>.posts').addClass('hide');
  $('.main>.calendar').removeClass('hide');
}

function showContactOptions() {
  $('.contactOptionsContainer').removeClass('hide');
}

function dismissContactOptions() {
  $('.contactOptionsContainer').addClass('hide');
}

function shareMedia() {
  let postIdx = MEDIAS.length - global.postIdx - 1;
  let postPage = global.postPage;

  const copyContent = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      Swal.fire('已經複製到剪貼簿', text);
    } catch (err) {
      Swal.fire('剪貼簿複製失敗', text);
    }
  }
  copyContent(`https://sherryyuechiu.github.io/social?category=media&postidx=${postIdx}&page=${postPage}`);
}