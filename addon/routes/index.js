import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    sid: { refreshModel: true }
  },

  // This was being called in v3.5.1.
  model(params) {

  },
  actions: {
    // This function is called onclick
    executeQuery() {
      // This transition should fire the model hook
      // as the initial value for sid is undefined.
      this.transitionTo({queryParams: { sid: 23 }});
    }
  }
});
