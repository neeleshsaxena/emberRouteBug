/* eslint-disable no-console */
import Route from '@ember/routing/route';

export default Route.extend({
    queryParams: {
        sid: { refreshModel: true }
      },

      nextQueryParams: null,

      setupController(controller, model) {
        this._super(controller, model);

      },
      model(params) {
        console.log('in model hook params', params);
        // Need to modify nextQueryParams and some more stuff
        // this is not called again after transitionTo
        // Probably because of "RangeError: Maximum call stack size exceeded" error?
    },
    actions: {
        executeQuery() {
            console.log('inside executeQuery Fn');
            this.transitionTo({queryParams: { sid: 23 }});
        }
    }
});
