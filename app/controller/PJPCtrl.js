Ext.define('Jumawax.controller.PJPCtrl', {
	extend: 'Ext.app.Controller',

	config: {
		refs: {
			main: 'PJPContainer',
			PJPList: 'PJPList',
			// ShowPJP: 'PJP-show',
            storeList: 'storeList',
            SKUList: 'SKUList',
            catalogueList: 'productList',
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
            catalogueList: {
                itemtap: 'onCatalogueSelect'
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

    onPJPSelect: function(list, index, node, record) {

        if (!this.storeList) {
            this.storeList = Ext.create('Jumawax.view.PJP.StoreList');
        }

        var storeAnu = Ext.getStore('StoreStore');

        // storeAnu.getProxy().setUrl('http://jsonplaceholder.typicode.com/comments/'+ record.data.id); 

        var loadedStore = storeAnu.load({
            params: {
                planid: record.data.planId,
                latitude: -6.2610147,
                longitude: 107.0581644
            }
        });

        this.getStoreList().setStore(loadedStore);


        if(index===1) // 1 is the 2nd item in the list
        {
            console.log(Ext.getCmp('MyList').getAt(index));
            Ext.getCmp('MyList').getAt(index).setDisabled(true); //getting the list using id 'MyList', getting the item using index and then setting it as disabled.
        } else {
            this.getMain().push(this.getStoreList());            
        }


        // this.getMain().push(this.getStoreList());  
    },

    onStoreSelect: function(list, index, node, record) {
        if (!this.catalogueList) {
            this.catalogueList = Ext.create('Jumawax.view.PJP.ProductList');
        }

        var storeAnu = Ext.getStore('CatalogueStore');

        // storeAnu.getProxy().setUrl('http://jsonplaceholder.typicode.com/posts/'+ record.data.id); 
        // var loadedStore = storeAnu.load();

        var loadedStore = storeAnu.load();

        this.getCatalogueList().setStore(loadedStore);
        this.getCatalogueList().setStoreCode("yeah");

        this.getMain().push(this.getCatalogueList());
    },

    onCatalogueSelect: function(list, index, node, record, e, eOpts) {
        console.log("sssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss");
        console.log(this.getCatalogueList().getStoreCode());

        // if (!this.SKUList) {
        //     this.SKUList = Ext.create('Jumawax.view.PJP.SKUList');
        // }

        // var storeAnu = Ext.getStore('SKUStore');
        // console.log(storeAnu);

        // var loadedStore = storeAnu.load({
        //     params: {
        //         storeId: 'ALE14114',
        //         catalogueId: record.data.catalogueId
        //     }
        // });
        // this.getSKUList().setStore(loadedStore);

        // this.getMain().push(this.getSKUList());





        if (!this.PJPForm) {
            this.PJPForm = Ext.create('Jumawax.view.PJP.PJPForm');
        }
        // if (!this.testMap) {
        //     this.testMap = Ext.create('Jumawax.view.PJP.TestMap');
        // }

        // Bind the record onto the show contact view
        this.PJPForm.setRecord(record);

        // Push the show contact view into the navigation view
        this.getMain().push(this.PJPForm);

    },

    onProductSelect: function(list, index, node, record) {

        if (!this.PJPForm) {
            this.PJPForm = Ext.create('Jumawax.view.PJP.PJPForm');
        }
        // if (!this.testMap) {
        //     this.testMap = Ext.create('Jumawax.view.PJP.TestMap');
        // }

        // Bind the record onto the show contact view
        this.PJPForm.setRecord(record);

        // Push the show contact view into the navigation view
        this.getMain().push(this.PJPForm);
    },
    onProductSelect: function(list, index, node, record) {

        if (!this.PJPForm) {
            this.PJPForm = Ext.create('Jumawax.view.PJP.PJPForm');
        }
        // if (!this.testMap) {
        //     this.testMap = Ext.create('Jumawax.view.PJP.TestMap');
        // }

        // Bind the record onto the show contact view
        this.PJPForm.setRecord(record);

        // Push the show contact view into the navigation view
        this.getMain().push(this.PJPForm);
    },

    populateDashboardData: function() {

        if (!this.PJPList) {
            this.PJPList = Ext.create('Jumawax.view.PJP.PJPList');
        }

        var test = Ext.getStore('PJPStore');
        var nyoba = test.load({
            params:{
                id: 1
            }
        });

        this.getPJPList().setStore(nyoba);

        this.getMain().push(this.getPJPList());
    }
});
