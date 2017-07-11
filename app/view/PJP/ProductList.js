Ext.define('Jumawax.view.PJP.ProductList', {
	extend: 'Ext.List',
	xtype: 'productList',

	config: {
		title: 'Catalogue',
		itemCls: 'catalogue',
    storeCode: null,

    itemTpl: [
    	'<div>',
    	'<h1>{catalogueName}</h1>',
    	'</div>'
    ].join('')
	}
});