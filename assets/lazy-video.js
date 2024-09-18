document.addEventListener('DOMContentLoaded', () => {
  const lazyVideos = document.querySelectorAll('video.lazyload');

  if ('IntersectionObserver' in window) {
    let lazyVideoObserver = new IntersectionObserver((entries, _observer) => {
      entries.forEach((video) => {
        if (video.isIntersecting) {
          let sources = video.target.querySelectorAll('source');
          sources.forEach((source) => {
            source.src = source.dataset.src;
          });
          video.target.load();
          video.target.classList.add('lazyloaded');
          lazyVideoObserver.unobserve(video.target);
        }
      });
    });

    lazyVideos.forEach((lazyVideo) => {
      lazyVideoObserver.observe(lazyVideo);
    });
  }
});
