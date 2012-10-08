define(['backbone','marionette','uploader','app/data','app/models/media','app/views/media/list','text!app/templates/media/index.htm'], 
function(Backbone, Marionette, Uploader, Data, Media, MediaListView, MediaIndexTemplate){
  var view = Backbone.Marionette.Layout.extend({
    className:'media',
    template: MediaIndexTemplate,

    regions: {
      media: '#media'
    },
    
    initialize:function(){
      this.collection = Data.Media;
      this.bindViewEvents();
    },

    bindViewEvents: function(){
      var view = this;      
      view.on('show', function(){
        view.media.show( new MediaListView() );
      });
    },

    onRender:function(){
      var view = this;

      new qq.FileUploaderBasic({
        action: '/media',
        element: this.$('#file-uploader')[0],
        button: this.$('.button')[0],
        onProgress: function(){},
		    onComplete: function(id, file, json){
          json.success && view.collection.add(new Media(json.image));
        }
      });      
    }
  });


  return view;

});