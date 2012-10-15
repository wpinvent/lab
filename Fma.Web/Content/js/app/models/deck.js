define(['backbone','moment'],
function(Backbone, Moment){
  return Backbone.Model.extend({
    url:function(){
      var out = '/decks';
      if (this.id) out += ('/' + this.id)       
      return out;
    },
    defaults: {
      starts_on: null,
      ends_on: null
    },
    validation: {
      Title: {
        required:true,
        msg: "Enter a title for this deck."
      },
      StartsOn:[
        { required:true, msg: "A start date is required." },
        { pattern:'date', msg: "Start date format is invalid" },
        { fn: 'validateStartDate' }
      ],
      EndsOn:[
        {required:true, msg: "An end date is required."},
        { pattern:'date', msg: "End date format is invalid" },
        { fn: 'validateEndDate' }
      ]
    },

    validateStartDate: function(value, attr, computedState){
      if (value.length){
        var startDay = moment(value).startOf('day'),
            currentDay = moment(new Date()).startOf('day');

        if (startDay.diff(currentDay) < 0)
          return "Start date must occur today or in the future"
      }
    },

    validateEndDate: function(value, attr, computedState){
      var start = this.get('StartsOn');
      if (value.length && start){
        var endDay = moment(value).startOf('day'),
            startDay = moment(start).startOf('day');
        if (startDay.diff(endDay) >= 0)
          return "Date to end must occur after the start date."
      }
    }
  });
});