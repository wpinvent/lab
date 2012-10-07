({
    baseUrl: "./js",
    paths: {
      backbone:   'lib/backbone',
      marionette: 'lib/backbone.marionette',
      syphon:     'lib/backbone.syphon',
      foundation: 'lib/foundation.min',
      jquery:     'lib/jquery',
      underscore: 'lib/underscore',
      moment:     'lib/moment',
      uploader:   'lib/fileuploader'
    },
    preserveLicenseComments: false,
    name: "../almond",
    include:"main",
    out: "main-built.js"
})