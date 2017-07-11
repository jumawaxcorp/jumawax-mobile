Ext.define('Jumawax.store.SKUStore', {
    extend: 'Ext.data.Store',

    requires: ['Jumawax.model.PJPModel', 'Ext.data.proxy.JsonP'],
    config: {
        // model: 'Jumawax.model.PJPModel',
        fields: [ 'role', 'agentname', 'token', 'username' ],

        proxy: {
            type: 'jsonp',
            url: 'http://localhost:7070/jumawax-web/product/list/jsonp/product/sku',
            callbackKey: 'callback'
        },
        listeners : {
            beforeload: function(store, eOpts){

            },
            load: function(store, eOpts) {
                console.log('SKUStore data= ' + store.getCount());
            }
        }
    }
});