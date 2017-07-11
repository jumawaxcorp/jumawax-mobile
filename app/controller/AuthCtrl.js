Ext.define('Jumawax.controller.AuthCtrl', {
  extend: 'Ext.app.Controller',
  requires : ['Ext.form.FieldSet', 'Ext.field.Email', 'Ext.field.Password'],

  config: {
  	refs: {
  		usernameCt: 'loginPage [itemId=username]',
  		passwordCt: 'loginPage [itemId=password]',
      labelCt: 'loginPage [itemId=signInFailedLabel]',
      keepUserCt: 'loginPage [itemId=keepUser]',
      loginPage: 'loginPage',
      PJPList: 'PJPList',
      PJPContainer: 'PJPContainer',
      PJPCardList: {
        autoCreate: 'true',
        selector: '#PJPs',
        xtype: 'PJPContainer'
      },
      main: 'main'		
  	},
  	control: {
  		'loginPage button': {
  			tap: 'onLoginButtonTap'
  		}
  	}
  },

  slideLeftTransition: { type: 'slide', direction: 'left' },

	onLoginButtonTap: function(){
      var myMask = new Ext.LoadMask(Ext.getBody(), {msg:"Please wait..."});
      myMask.show();

      var usernameField = this.getUsernameCt(),
          passwordField = this.getPasswordCt();
          label = this.getLabelCt();
      label.hide();
      var username = usernameField.getValue(),
          password = passwordField.getValue();

      var task = Ext.create('Ext.util.DelayedTask', function () {
          label.setHtml('');
          // me.fireEvent('signInCommand', me, username, password);
          usernameField.setValue('');
          passwordField.setValue('');
      });
      task.delay(500);


      var test = Ext.create('Jumawax.store.PJPStore');
      var nah = test.load({
	      	params: {
	      		username: username
	      	},
	      	scope   : this,
			    callback: function(records, operation, success) {
			        if(records[0].data.agent == username){
                var PJPStore = Ext.create('Jumawax.store.PJPStore');
                var nyoba = PJPStore.load({
                  scope: this,
                  params: {
                    username: records[0].data.agent
                  },
                  callback: function(hasil, operation, success) {                    
                    this.getPJPList().setStore(nyoba);
                    myMask.hide();
                  }
                });

                Ext.Viewport.setActiveItem(this.getMain(), this.slideLeftTransition);
			        }
			    }
	    });
	}
});