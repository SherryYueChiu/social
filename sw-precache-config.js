module.exports = {
    staticFileGlobs: [
        './',
        './images/**.*',
        './js/**.*',
        './css/**.*',
        './index.html',
        './*.ttf'
    ],
    runtimeCaching: [{
        urlPattern: /.*/,
        handler: 'networkFirst'
    }],
    swFile: 'service-worker.js'
};