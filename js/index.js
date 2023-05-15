$(function () {
  setAvatar();
  setName()
  setIntro();
  setRecommended();
  setMedias();
  setPosts();
  setCalendar();
  new ClipboardJS('.copy');

  parseUrlParam();
});

function parseUrlParam() {
  let url = new URL(location.href);
  let params = url.searchParams;
  let category = params.get('category');
  if (category === 'media') {
    let index = MEDIAS.length - (params.get('postidx') || 0) - 1;
    let page = params.get('page') || 0;
    showMedia();
    viewMedia(index, page);
  }
  else if (category === 'post') {
    showPost();
  }
  else if (category === 'calendar') {
    showCalendar();
  }
}

// register service worker
try {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js', { scope: "." })
      .then(function (registration) {
        console.log('ServiceWorker registered successfully', registration);
      })
      .catch(function (error) {
        console.error('ServiceWorker registration failed:', error);
      });
  }
} catch (err) {
  console.warn('serviceWorker register failed.', err);
}