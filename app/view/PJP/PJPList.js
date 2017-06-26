Ext.define('Jumawax.view.PJP.PJPList', {
	extend: 'Ext.dataview.DataView',
	xtype: 'PJPList',

	config: {
		fullscreen: true,
        store: 'PJPStore',

		useComponents: true,
		defaultType: 'PJPListItem',

        listeners: [
            {
                element: 'element',
                delegate: 'div.x-name',
                event: 'tap',
                fn: 'onTap'     
            }
        ]
	},
    onTap: function(){
        var me = this;            
        this.fireEvent('onItemTap', me);
        console.log("onSignInNowTap fired");
    }     
});

Ext.define('Jumawax.view.PJP.PJPListItem', {
    extend: 'Ext.dataview.component.DataItem',
    xtype : 'PJPListItem',

    requires: [
        'Ext.Img',
        'Ext.Button',
        'Ext.slider.Slider',
        'Ext.Map',
        'Jumawax.view.PJP.TestMap'
    ],

    config: {
		dataMap: {
            //this will call: this.getImage()
            getImage: {
                //and then this will call: this.getImage().setSrc() with the
                //'image' field value form the record
                setSrc: 'image'
            },
            getTitle: {
                setHtml: 'title'
            },
            getPlanId: {
                setHtml: 'planId'
            },
            getSubmitDate: {
                setHtml: 'submitDate'
            }
            // getSlider: {
            //     setValue: 'cuteness'
            // },
            // getNameButton: {
            //     setText: 'id'
            // }
        },
        image: true,
        title: {
            cls: 'x-name',
            flex: 10
        },
        planId: {
            cls: 'x-name',
        },
        submitDate: {
            cls: 'x-name',
        },
        // slider: {
        //     flex: 2
        // },
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
    /**
     * Called when you set the {@link #image} configuration.
     *
     * Uses Ext.factory to return a proper instance using the configuration passed, the
     * default component, and the existing instance (if it exists).
     *
     * This should *never* be called manually. It will be called when you call {@link #setImage}.
     */
    applyImage: function(config) {
        return Ext.factory(config, Ext.Img, this.getImage());
    },

    /**
     * Called when you set the {@link #image} configuration, and is passed both the new value
     * (from applyImage) and the old value.
     *
     * This should *never* be called manually. It will be called when you call {@link #setImage}.
     * @private
     */
    updateImage: function(newImage, oldImage) {
        if (newImage) {
            this.add(newImage);
        }

        if (oldImage) {
            this.remove(oldImage);
        }
    },

    /**
     * Called when you set the {@link #name} configuration.
     *
     * Uses Ext.factory to return a proper instance using the configuration passed, the
     * default component, and the existing instance (if it exists).
     *
     * This should *never* be called manually. It will be called when you call {@link #setName}.
     * @private
     */
    applyTitle: function(config) {
        return Ext.factory(config, Ext.Component, this.getTitle());
    },

    /**
     * Called when you set the {@link #name} configuration, and is passed both the new value
     * (from applyName) and the old value.
     *
     * This should *never* be called manually. It will be called when you call {@link #setName}.
     * @private
     */
    updateTitle: function(newTitle, oldTitle) {
        if (newTitle) {
            this.add(newTitle);
        }

        if (oldTitle) {
            this.remove(oldTitle);
        }
    },

    applyPlanId: function(config) {
        return Ext.factory(config, Ext.Component, this.getPlanId());
    },

    /**
     * Called when you set the {@link #name} configuration, and is passed both the new value
     * (from applyName) and the old value.
     *
     * This should *never* be called manually. It will be called when you call {@link #setName}.
     * @private
     */
    updatePlanId: function(newPlanId,oldPlanId) {
        
        if (newPlanId) {
            this.add(newPlanId);
        }

        if (oldPlanId) {
            this.remove(oldPlanId);
        }
    },

    applySubmitDate: function(config) {
        return Ext.factory(config, Ext.Component, this.getSubmitDate());
    },

    /**
     * Called when you set the {@link #name} configuration, and is passed both the new value
     * (from applyName) and the old value.
     *
     * This should *never* be called manually. It will be called when you call {@link #setName}.
     * @private
     */

    updateSubmitDate: function(newSubmitDate, oldSubmitDate) {
        if (newSubmitDate) {
            this.add(newSubmitDate);
        }

        if (oldSubmitDate) {
            this.remove(oldSumbitDate);
        }
    },
    /**
     * Called when you set the {@link #slider} configuration.
     *
     * Uses Ext.factory to return a proper instance using the configuration passed, the
     * default component, and the existing instance (if it exists).
     *
     * This should *never* be called manually. It will be called when you call {@link #setSlider}.
     * @private
     */
    applySlider: function(config) {
        return Ext.factory(config, Ext.slider.Slider, this.getSlider());
    },

    /**
     * Called when you set the {@link #slider} configuration, and is passed both the new value
     * (from applySlider) and the old value.
     *
     * This should *never* be called manually. It will be called when you call {@link #setSlider}.
     * @private
     */
    updateSlider: function(newSlider, oldSlider) {
        if (newSlider) {
            this.add(newSlider);
        }

        if (oldSlider) {
            this.remove(oldSlider);
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

                // styleHtmlContent: true,
                // html: '<p>asdkjasd askdjbasd asd ansb dansd ansdb </p>',

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