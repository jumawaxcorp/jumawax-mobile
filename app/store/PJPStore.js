Ext.define('Jumawax.store.PJPStore', {
    extend: 'Ext.data.Store',
    requires: ['Jumawax.model.PJPModel', 'Ext.data.proxy.JsonP'],
    config: {
        // autoLoad: true,
        model: 'Jumawax.model.PJPModel',
        // fields: [ 'role', 'agentname', 'token', 'username' ],
        // fields: [ 'userId', 'id', 'title', 'body' ],

        proxy: {
            type: 'jsonp',
            // url: 'http://localhost:7070/jumawax-web/journeyplan/list/jsonp/plan',
            url: 'http://localhost:7070/jumawax-web/journeyplan/list/jsonp/plan?username=R.Kennedy',

            // url: 'http://jsonplaceholder.typicode.com/posts/',
            callbackKey: 'callback'
        },
        listeners : {
            beforeload: function(store, eOpts){

            },
            load: function(store, eOpts) {
                console.log('PJPStore data= ' + store.getCount());
            }
        }
    }
});