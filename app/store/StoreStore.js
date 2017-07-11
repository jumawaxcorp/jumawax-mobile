Ext.define('Jumawax.store.StoreStore', {
    extend: 'Ext.data.Store',
    requires: ['Jumawax.model.PJPModel', 'Ext.data.proxy.JsonP'],
    config: {
        // autoLoad: true,
        // model: 'Jumawax.model.PJPModel',
        fields: [ 'planId', 'storeCode', 'storeName', 'address', 'name', 'phonenumber', 'email', 'latitude', 'longitude', 'isReached' ],
        // fields: [ 'postId', 'id', 'name', 'email', 'body' ],

        proxy: {
            type: 'jsonp',
            url: 'http://localhost:7070/jumawax-web/journeyplan/list/jsonp/plan/store',
            // url: 'http://jsonplaceholder.typicode.com/comments/',
            callbackKey: 'callback'
        },
        listeners : {
            beforeload: function(store, eOpts){
              myMask.show();
            },
            load : function(store, eOpts) {
              myMask.hide();
              console.log('StoreStore data= ' + store.getCount());
            }
        }
    }
});

var myMask = new Ext.LoadMask(Ext.getBody(), {msg:"Please wait..."});
