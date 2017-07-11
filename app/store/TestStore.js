Ext.define('Jumawax.store.TestStore', {
	extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.JsonP'],

    config: {
        // autoLoad: true,
        // fields: [ 'role', 'agentname', 'token', 'username' ],
        fields: [ 'postId', 'id', 'name', 'email', 'body' ],

        proxy: {
            type: 'jsonp',
            url: 'http://jsonplaceholder.typicode.com/comments',
            callbackKey: 'callback'
        },
        listeners : {
            beforeload: function(store, eOpts){
              myMask.show();
            },
            load : function(store) {
              myMask.hide();
              console.log('TestStore data= ' + store.getCount());
            }
        }
    }
});