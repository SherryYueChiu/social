var AVATARS = [
  'Sketch.png',
  'FengLePark.jpg'
];

var NICKNAMES = [
  `玥餅`, `梓榳`, `Sherry`
];
var INTROS = [
  `Pre-Op TS, HRT 2Y+, GID*1
  Pronoun: She/They
  #社會運動參與者 #素食者 #聲音控 #極簡主義`,
  `前端工程師
  #逆向工程玩家`,
  `Same, same but different
  定居台中`
];

function setAvatar() {
  $('.main>.info>.avatar')[0].style.backgroundImage = `url(images/avatar/${AVATARS[Math.floor(Math.random() * AVATARS.length)]})`
}

function setName() {
  $('.main>.info>.nickname').html(NICKNAMES[Math.floor(Math.random() * NICKNAMES.length)]);
}

function setIntro() {
  $('.main>.info>.intro').html(INTROS[Math.floor(Math.random() * INTROS.length)]);
}

function setRecommended(){

}

function setPosts(){
  
}

function showContactOptions(){
  $('.contactOptionsContainer').removeClass('hide');
}

function dismissContactOptions(){
  $('.contactOptionsContainer').addClass('hide');
}