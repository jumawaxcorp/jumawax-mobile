Ext.define('Jumawax.view.PJP.SKUList', {
	extend: 'Ext.List',
	xtype: 'SKUList',

	config: {
		title: 'SKU',
		itemCls: 'SKU',

	    itemTpl: [
	    	'<div>',
	    	'<h1>{title}</h1>',
	    	'</div>'
	    ].join('')
	}

});