NutriaFeed.HomeController = Ember.Controller.extend({

  pictures: [
    'babynutria',
    'bathtime',
    'deadrodents',
    'marsh',
    'poop',
    'sex'
    ],
  current: 0,
  storyImage: '/css/img/babynutria.jpg',
  actions: {
    showOldPic: function() {
      if (this.get('current') === 0){
        this.set('current', this.get('pictures').length - 1);
      } else {
        this.set('current', this.get('current') - 1);
      }
      this.set('storyImage', "/css/img/" + this.get('pictures')[this.get('current')] + ".jpg")
    },

    showNewPic: function() {
      if (this.get('current') === this.get('pictures').length - 1){
        this.set('current', 0);
      } else {
        this.set('current', this.get('current') + 1);
      }
      this.set('storyImage', "/css/img/" + this.get('pictures')[this.get('current')] + ".jpg")
    }
  }
});
