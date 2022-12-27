module.exports = {
    staticFileGlobs: [
        './',
        './images/avatar/**.*',
        './media/thumbnail/**.*',
        './js/**.*',
        './css/**.*',
        './index.html'
    ],
    runtimeCaching: [{
        urlPattern: /.*/,
        handler: 'fastest'
    }],
    swFile: 'service-worker.js'
};