Ext.define('Jumawax.store.CatalogueStore', {
	extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.JsonP'],

    config: {
        // autoLoad: true,
        fields: [ 'catalogueName', 'catalogueId' ],

        proxy: {
            type: 'jsonp',
            url: 'http://localhost:7070/jumawax-web/product/list/jsonp/product/catalogue',
            callbackKey: 'callback'
        },
        listeners : {
            load : function(store) {
                console.log('CatalogueStore data= ' + store.getCount());
            }
        } 
    }
});