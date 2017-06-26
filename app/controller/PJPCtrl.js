Ext.define('Jumawax.controller.PJPCtrl', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			main: 'PJPContainer',
			PJPList: 'PJPList',
			// ShowPJP: 'PJP-show',
            storeList: 'storeList',
            SKUList: 'SKUList',
            productList: 'productList',
            PJPForm: 'PJPForm',
            testMap: 'testMap'
		},
		control: { 
			main: {
                push: 'onMainPush',
                onPopulate: 'populateDashboardData'
            },
            PJPList: {
                itemtap: 'onPJPSelect'
                // onItemTap: 'onPJPSelect'
            },
            SKUList: {
                itemtap: 'onSKUSelect'
            },
            storeList: {
                itemtap: 'onStoreSelect'
            },
            productList: {
                itemtap: 'onProductSelect'
            }
		}
	},

    onMainPush: function(view, item) {
        if (item.xtype == "PJP-show") {
            this.getPJPList().deselectAll();

        }
        if (item.xtype == "SKUList") {
            this.getPJPList().deselectAll();

        }
        if (item.xtype == "storeList") {
            this.getPJPList().deselectAll();

        }
        if (item.xtype == "productList") {
            this.getPJPList().deselectAll();

        }
        if (item.xtype == "PJPForm") {
            this.getPJPList().deselectAll();

        }
    },    

    
    // onPJPSelect: function(list, index, node, record) {

    //     if (!this.showPJP) {
    //         this.showPJP = Ext.create('MyApp.view.PJP.Detail');
    //     }

    //     // Bind the record onto the show contact view
    //     this.showPJP.setRecord(record);
    //             console.log(record.get('name'));

    //     // Push the show contact view into the navigation view
    //     this.getMain().push(this.showPJP);
    // },

    onPJPSelect: function(list, index, node, record) {
        if (!this.storeList) {
            this.storeList = Ext.create('Jumawax.view.PJP.StoreList');
        }

        var tot = Ext.getStore('TestStore');

        tot.getProxy().setUrl('http://jsonplaceholder.typicode.com/posts/'+ record.data.id); 

        var jing = tot.load();
        this.getStoreList().setStore(jing);

        // Push the show contact view into the navigation view
        this.getMain().push(this.getStoreList());
    },

    onStoreSelect: function(list, index, node, record) {

        if (!this.SKUList) {
            this.SKUList = Ext.create('Jumawax.view.PJP.SKUList');
        }

        var tot = Ext.getStore('PJPStore');

        tot.getProxy().setUrl('http://jsonplaceholder.typicode.com/posts/'+ record.data.id); 

        var jing = tot.load();
        this.getSKUList().setStore(jing);

        // Push the show contact view into the navigation view
        this.getMain().push(this.getSKUList());
    },

    onSKUSelect: function(list, index, node, record) {

        if (!this.ProductList) {
            this.ProductList = Ext.create('Jumawax.view.PJP.ProductList');
        }

        var tot = Ext.getStore('TestStore');

        tot.getProxy().setUrl('http://jsonplaceholder.typicode.com/posts/'+ record.data.id); 

        var jing = tot.load();
        this.getProductList().setStore(jing);

        // Push the show contact view into the navigation view
        this.getMain().push(this.getProductList());
    },

    onProductSelect: function(list, index, node, record) {

        // if (!this.PJPForm) {
        //     this.PJPForm = Ext.create('Jumawax.view.PJP.PJPForm');
        // }
        if (!this.testMap) {
            this.testMap = Ext.create('Jumawax.view.PJP.TestMap');
        }

        // Bind the record onto the show contact view
        this.testMap.setRecord(record);

        // Push the show contact view into the navigation view
        this.getMain().push(this.testMap);
    },

    populateDashboardData: function() {
        console.log("sdabdjhd");
        // var test = Ext.create('Jumawax.store.PJPStore');
        // var nyoba = test.load();
        // Ext.util.JSONP.request({
        //     // url: 'http://jsonplaceholder.typicode.com/posts',
        //     url: 'http://192.168.0.106:8080/jumawx-web/journeyplan/list/plan',
        //     params: {
        //         username: 'R.Kennedy'
        //     },
        //     callback: function (success, result) {
                
        //     }
        // });                            
    }
});
