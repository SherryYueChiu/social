$(function () {
  setAvatar();
  setName()
  setIntro();
  setRecommended();
  setMedias();
  setPosts();
  setCalendar();
  new ClipboardJS('.copy');
});

// register service worker
// navigator.serviceWorker.register('service-worker.js', { scope: "." });