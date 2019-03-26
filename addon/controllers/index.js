import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: [
    'sid'
  ],

  actions: {
    controllerExecuteQuery() {
      this.send('executeQuery');
    }
  }
});