Ext.define('Jumawax.view.PJP.ProductList', {
	extend: 'Ext.List',
	xtype: 'productList',

	config: {
		title: 'Product',
		itemCls: 'Product',

	    itemTpl: [
	    	'<div>',
	    	'<h1>{title}</h1>',
	    	'</div>'
	    ].join('')
	}
});