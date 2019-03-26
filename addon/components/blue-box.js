import Component from '@ember/component';
import layout from '../templates/components/blue-box';

export default Component.extend({
  layout,
  executeQuery: () => {},
  actions: {
    execute() {
      this.get('executeQuery')();
    }
  }
});
