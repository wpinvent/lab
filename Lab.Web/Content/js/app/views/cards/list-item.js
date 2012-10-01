
define(['backbone','marionette','text!app/templates/cards/list-item.htm','text!app/templates/cards/list-item-edit.htm'], 
function(Backbone, Marionette, DisplayTemplate, EditTemplate){
  
  var editClass = "edit-card";

  var view = Backbone.Marionette.ItemView.extend({
    tagName: 'li',
    template: DisplayTemplate,

    templateHelpers: function(){
      var model = this.model;
      return {
        getContent: model.get('content') || "No content",
        fileUrl:function(filename){
          return ["//", location.host, "/uploads/", filename].join('');
        }
      }
    },

    events:{ 
      'click .cancel-button' : 'cancel',
      'click .delete-button' : 'destroy',
      'click .edit-button' : 'edit',
      'click .save-button' : 'save'
    },

    showEditView: function(){
      this.options.template = EditTemplate;
      this.$el.addClass(editClass);
      this.render();
    },

    showDisplayView: function(){
      this.options.template = DisplayTemplate;
      this.$el.removeClass(editClass);
      this.render();
    },

    edit: function(){
      this.showEditView();
    },

    cancel: function(){
      this.showDisplayView();
    },

    save: function(){

    },

    destroy: function(){
      this.model.destroy();
    }
  });

  return view;
});