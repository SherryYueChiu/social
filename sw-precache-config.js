module.exports = {
    staticFileGlobs: [
        './',
        './images/**.*',
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