import Controller from '@ember/controller';

const ITEMS = [
    'Panel 1',
    'Panel 2',
    'Panel 3'
]

export default Controller.extend({
    items: ITEMS,
    actions: {
        addItem(){
            // eslint-disable-next-line no-console
            console.log('ADD_ITEM');
        },
        deleteItem(item){
            // eslint-disable-next-line no-console
            console.log('DELETE', item);
        },
    }
});
