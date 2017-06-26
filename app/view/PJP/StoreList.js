Ext.define('Jumawax.view.PJP.StoreList', {
	extend: 'Ext.List',
	xtype: 'storeList',

	config: {
		title: 'Store',
		itemCls: 'Store',

	    itemTpl: [
	    	'<div>',
	    	'<h1>{title}</h1>',
	    	'</div>'
	    ].join('')
	}

});