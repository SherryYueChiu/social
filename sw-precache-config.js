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
        handler: 'networkFirst'
    }],
    swFile: 'service-worker.js'
};