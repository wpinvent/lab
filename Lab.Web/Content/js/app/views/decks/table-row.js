define(['backbone','marionette','moment','text!app/templates/decks/table-row.htm'], 
function(Backbone, Marionette, Moment, Template){
  var view = Backbone.Marionette.ItemView.extend({
    tagName: 'tr',    
    template: Template,
    templateHelpers: {
      setChecked: function(){
        return this.enabled ? 'checked="checked"' : "";
      },

      localizedDate: function(isoString){
        var date = new Date(isoString);
        return new Moment(date).format('L ZZ');
      }
    }
  });

  return view;
});