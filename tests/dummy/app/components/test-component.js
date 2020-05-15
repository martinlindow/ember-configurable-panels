import Component from '@ember/component';
import { computed } from '@ember/object';
import _number from 'lodash/number';

export default Component.extend({
  number: computed('', function()  {
    return _number.random(0, 400, false);
  }),
});