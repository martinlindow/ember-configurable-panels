ember-configurable-panels
==============================================================================

This addon can be used to define bootstrap 3 based panels that can be 
configured and contain dynamic items


Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-configurable-panels
```


Usage
------------------------------------------------------------------------------

{{grid-panel 
    title="Exception Status" 
    columns=3 
    items=items 
    item_component="test-component" 
    itemActions=itemActions 
    addItemAction=this.actions.addItem}}


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.
