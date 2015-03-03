NutriaFeed.ApplicationController = Ember.Controller.extend({
  mascotShowing: false,
  actions: {
     showPopover: function() {
      this.set("mascotShowing", true);
     }
   }

});
