Ext.define('Jumawax.view.PJP.StoreList', {
	extend: 'Ext.dataview.List',
	xtype: 'storeList',

	config: {
		title: 'Store',
		itemCls: 'Store',
		useComponents: true,
		defaultType: 'storeListItem',
	}
});

Ext.define('Jumawax.view.StoreListItem', {
    extend: 'Ext.dataview.component.ListItem',
    xtype : 'storeListItem',
    requires: [
        'Ext.Button',
        'Ext.Map',
        'Jumawax.view.PJP.TestMap'
    ],

    config: {
        dataMap: {
            getStoreName: {
                setHtml: 'storeName'
            },
            getName: {
                setHtml: 'name'
            }
        },        
        StoreName: {
            cls: 'name',
            flex: 8
        },
        name: {
            cls: 'name',
            flex: 8
        },
        nameButton: {
        		// text: 'Button'
            flex: 2,
            iconCls: 'info',
            iconMask: true
        },
        layout: {
            type: 'hbox',
            align: 'center'
        }
    },

    applyName: function(config) {
        return Ext.factory(config, Ext.Component, this.getName());
    },

    updateName: function(newName,oldName) {
        if (newName) {
            this.add(newName);
        }

        if (oldName) {
            this.remove(oldName);
        }
    },

    applyStoreName: function(config) {
        return Ext.factory(config, Ext.Component, this.getStoreName());
    },

    updateStoreName: function(newStoreName,oldStoreName) {
        if (newStoreName) {
            this.add(newStoreName);
        }

        if (oldStoreName) {
            this.remove(oldStoreName);
        }
    },

    applyNameButton: function(config) {
        return Ext.factory(config, Ext.Button, this.getNameButton());
    },

    updateNameButton: function(newNameButton, oldNameButton) {
        if (oldNameButton) {
            this.remove(oldNameButton);
        }

        if (newNameButton) {
	        	newNameButton.on('tap', this.onNameButtonTap, this);

            this.add(newNameButton);
        }
    },

    onNameButtonTap: function(button, e) {
        e.stopEvent();

        var record = this.getRecord();

        // Ext.Msg.alert(
        //     record.get('title'), // the title of the alert
        //     "The age of this person is: " + record.get('title') // the message of the alert
        // );

        if(!this.overlay){
            this.overlay = Ext.Viewport.add({
                xtype: 'panel',
                modal: true,
                scrollable: true,
                centered: true,
                // floating: true,
                hideOnMaskTap: true,
                layout: 'vbox',

                showAnimation: {
                    type: 'popIn',
                    duration: 250,
                    easing: 'ease-out'
                },
                hideAnimation: {
                    type: 'popOut',
                    duration: 250,
                    easing: 'ease-out'                    
                },

                width: Ext.filterPlatform('ie10') ? '100%' : (Ext.os.deviceType == 'Phone') ? 300 : 400,
                height: Ext.filterPlatform('ie10') ? '30%' : (Ext.os.deviceType == 'Phone') ? 450 : 400,

                items: [
                  {
                    xtype: 'toolbar',
                    docked: 'top',
                    title: 'overlay'
                  },
                  {
                    xtype: 'testMap',
                    flex: 1
                  },
                  {
                    xtype: 'panel',
                    flex: 1,
                    styleHtmlContent: true,
                    html: [
                        '<div>',
                        '<p>asdkjasd askdjbasd asd ansb dansd ansdb </p>',
                        '<p>asdkjasd askdjbasd asd ansb dansd ansdb </p>',
                        '</div>'
                    ].join('')
                  }
                  // {
                  //   xtype: 'map',
                  //   flex: 1,
                  //   mapOptions: {
                  //       mapTypeId: google.maps.MapTypeId.ROADMAP,
                  //       zoom: 10
                  //   },
                  //   useCurrentLocation: true
                  // }
                ]
            });
        };

        this.overlay.show();
    }
});