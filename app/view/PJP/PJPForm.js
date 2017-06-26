Ext.define('Jumawax.view.PJP.PJPForm', {
    extend: 'Ext.Container',
    xtype: 'PJPForm',
    id: 'PJPForm',

	requires: ['Ext.form.FieldSet'],

    config: {
        title: 'Form',
        baseCls: 'x-show-contact',
        layout: 'vbox',

        items: [
	        {
	            xtype: 'fieldset',
	            title: 'Form',
	            instructions: '(email address is optional)',
	            height: 285,
	            id: 'PJPFieldset',
	            items: [
	                {
	                    xtype: 'textfield',
	                    id: 'username',
	                    name: 'username',
	                    label: 'Name'
	                },
	                {
	                    xtype: 'passwordfield',
	                    id: 'password',
	                    name: 'password',
	                    label: 'password'
	                },
	                {
	                    xtype: 'textareafield',
	                    id: 'message',
	                    name: 'message',
	                    label: 'Message'
	                }
	            ]
	        },
	        {
	            xtype: 'button',
	            text: 'Send',
	            ui: 'confirm',
	            handler: function() {
	                this.up('formpanel').submit();
	            }
	        }        
	    ],

        record: null
    },

    updateRecord: function(newRecord) {
        if (newRecord) {
        	var eta = newRecord.data;
    	console.log(eta.body);

			var coba = {
          username: eta.title,
          password: eta.id,
          message: eta.body
      }

			var form = this.down('#PJPForm');
			Ext.getCmp('username').setValue(coba.username);
			Ext.getCmp('password').setValue(coba.password);
			Ext.getCmp('message').setValue(coba.message);
        }
    }

});

