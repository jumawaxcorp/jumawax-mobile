Ext.define('Jumawax.view.PJP.Card', {
    extend: 'Ext.navigation.View',
    xtype: 'PJPContainer',

    requires: [
        'Jumawax.view.PJP.PJPList'
        // 'MyApp.view.PJP.Detail',
        // 'MyApp.view.PJP.DetailForm',
        // 'MyApp.view.PJP.OtherList',
        // 'MyApp.view.PJP.Store'
    ],

    config: {
        title: 'PJP',
        iconCls: 'home',
        cls: 'home',
        autoDestroy: false,

        navigationBar: {
            items: [
                { 
                    xtype: 'label', 
                    text: 'dasda', 
                    align: 'right',
                    hidden: false
                },
                {
                    xtype: 'button',
                    id: 'saveButton',
                    text: 'Save',
                    ui: 'sencha',
                    align: 'right',
                    hidden: true,
                    hideAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeOut',
                        duration: 200
                    },
                    showAnimation: Ext.os.is.Android ? false : {
                        type: 'fadeIn',
                        duration: 200
                    }
                }
            ]
        },

        items: [
            {
                title: 'PJP',
                xtype: 'PJPList'
            }
        ],

        listeners : {
            initialize : function(){
                // this.fireEvent('onPopulate', this)
            }           
        }
    }
});

