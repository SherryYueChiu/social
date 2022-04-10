module.exports = {
    staticFileGlobs: [
        './',
        './images/**.*',
        './js/**.*',
        './css/**.*',
        './media/**.*',
        './index.html'
    ],
    runtimeCaching: [{
        urlPattern: /.*/,
        handler: 'networkFirst'
    }],
    swFile: 'service-worker.js'
};