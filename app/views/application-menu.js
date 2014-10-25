import Ember from "ember";

export default Ember.View.extend({
  templateName: "application-menu",
  classNames: ['application-menu'],
  classNameBindings: ['visibleWhen:visible'],

  actions: {
    hideMenu: function() {
      this.set('visibleWhen', false);
    }
  }
});