Ext.define('Jumawax.store.TestStore', {
	extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.JsonP'],

    config: {
        autoLoad: true,
        // fields: [ 'role', 'agentname', 'token', 'username' ],
        fields: [ 'userId', 'id', 'title', 'body' ],

        proxy: {
            type: 'jsonp',
            url: 'http://jsonplaceholder.typicode.com/posts',
            callbackKey: 'callback'
        }
    }
});