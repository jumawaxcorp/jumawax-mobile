Ext.define('Jumawax.store.LoginStore', {
    extend: 'Ext.data.Store',
    requires: ['Ext.data.proxy.JsonP'],
    config: {
        autoLoad: true,
        fields: [ 'id', 'name', 'username', 'email', 'address', 'phone', 'website', 'company' ],

        proxy: {
            type: 'jsonp',
            url: 'http://jsonplaceholder.typicode.com/users/',
            callbackKey: 'callback',
            reader:{
                type:'json',
                rootProperty:'data',
            },
            listeners: {
                load: function(store, records, successful){
                
                    console.log("dfsdfdgsdgf");
                
                }
            }
        }
    }
});