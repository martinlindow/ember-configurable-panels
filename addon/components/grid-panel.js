import Component from '@ember/component';
import { computed } from '@ember/object';
import layout from '../templates/components/grid-panel';
import _array from 'lodash/array';

export default Component.extend({
  layout,
  showPanelSettings: true,
  column_class: computed('columns', function(){
    return 12 / this.get('columns');
  }),
  rows: computed('items', 'columns', function() {
    const items = this.get('items');
    const columns = this.get('columns');
    return _array.chunk(items, columns);
  }),
});
