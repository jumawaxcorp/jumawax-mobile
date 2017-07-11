Ext.define('Jumawax.view.PJP.PJPList', {
	extend: 'Ext.List',
    xtype: 'PJPList',
    requires: [
        'Jumawax.store.PJPStore',
        'Ext.DataView', 
        'Ext.data.Store'
    ],
    itemId: 'MyList',

	config: {
		// fullscreen: true,
        itemTpl: [
            '<div>',
            '<h1>{submitDate}</h1>',
            '</div>'
        ].join('')
	}
});