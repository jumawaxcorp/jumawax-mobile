Ext.define('Jumawax.view.PJP.PJPForm', {
    extend: 'Ext.Container',
    xtype: 'PJPForm',
    id: 'PJPForm',

	requires: [
		'Ext.form.FieldSet',
		'Ext.field.Select'
	],

    config: {
        title: 'Form',
        baseCls: 'x-show-contact',
        layout: 'vbox',

        items: [
	        {
	            xtype: 'fieldset',
	            title: 'Data PJP',
	            // instructions: '(email address is optional)',
	            // height: 285,
	            id: 'PJPFieldset',
							defaults: {
	              labelAlign: 'top'
	            },	            
            	items: [
	            		{
	            			xtype: 'selectfield',
	            			name: 'rank',
	            			label: 'Apakah item tersedia?',
	            			options: [
	            				{
	            					text: 'Ya',
	            					value: 1
	            				},
	            				{
	            					text: 'Tidak',
	            					value: 0
	            				}
	            			]
	            		},
	        //     		{
									//   xtype: 'spacer',
									//   height: 20
									// },
	            		{
	            			xtype: 'selectfield',
	            			name: 'rank',
	            			label: 'Apakah item memiliki promo?',
	            			options: [
	            				{
	            					text: 'Ya',
	            					value: 1
	            				},
	            				{
	            					text: 'Tidak',
	            					value: 0
	            				}
	            			]
	            		},
	            		{
	            			xtype: 'selectfield',
	            			name: 'rank',
	            			label: 'Apakah item tersedia di rak lain?',
	            			options: [
	            				{
	            					text: 'Ya',
	            					value: 1
	            				},
	            				{
	            					text: 'Tidak',
	            					value: 0
	            				}
	            			]
	            		}
	                // {
	                //     xtype: 'textfield',
	                //     id: 'username',
	                //     name: 'username',
	                //     label: 'Name'
	                // },
	                // {
	                //     xtype: 'passwordfield',
	                //     id: 'password',
	                //     name: 'password',
	                //     label: 'password'
	                // },
	                // {
	                //     xtype: 'textareafield',
	                //     id: 'message',
	                //     name: 'message',
	                //     label: 'Message'
	                // }
	            ]
	        },
	        {
	            xtype: 'button',
	            text: 'Send',
	            ui: 'confirm',
	            handler: function() {
	                this.up('formpanel').submit();
	            }
	        },
					{
            xtype: 'toolbar',
            docked: 'bottom',
            items: [{
                xtype: "button",
                text: "Photo Library",
                handler: function(btn) {
                    var panel = btn.up('panel');

                    panel.getPhoto(navigator.camera.PictureSourceType.PHOTOLIBRARY);
                }
	          }, {
                xtype: "button",
                text: "Take Photo",
                handler: function(btn) {
                    var panel = btn.up('panel');

                    panel.getPhoto(navigator.camera.PictureSourceType.CAMERA);
                }
	          }]
	        }
	    ],

        record: null
    },

   //  updateRecord: function(newRecord) {
   //    if (newRecord) {
   //    	var eta = newRecord.data;
	  //   	console.log(eta.body);
	  // 	}

			// var coba = {
   //        username: eta.title,
   //        password: eta.id,
   //        message: eta.body
   //    }

			// var form = this.down('#PJPForm');
			// Ext.getCmp('username').setValue(coba.username);
			// Ext.getCmp('password').setValue(coba.password);
			// Ext.getCmp('message').setValue(coba.message);
   //  },

    getPhoto: function(source) {
        var me = this;

        navigator.camera.getPicture(me.success, me.failure, {
            quality: 50,
            destinationType: navigator.camera.DestinationType.FILE_URI,
            sourceType: source 
        });

    },

    success: function(image_uri) {
        var img = Ext.ComponentQuery.query("image")[0];
        img.setSrc(image_uri);
    },

    failure: function(message) {
        alert("Failed" + message);
    }
});

