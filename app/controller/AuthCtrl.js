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
      var usernameField = this.getUsernameCt(),
          passwordField = this.getPasswordCt();
          label = this.getLabelCt();
      label.hide();
      var username = usernameField.getValue(),
          password = passwordField.getValue();

      console.log(username + password);
      // Using a delayed task in order to give the hide animation above
      // time to finish before executing the next steps.
      var task = Ext.create('Ext.util.DelayedTask', function () {
          label.setHtml('');
          // me.fireEvent('signInCommand', me, username, password);
          usernameField.setValue('');
          passwordField.setValue('');
      });
      task.delay(500);

      var test = Ext.create('Jumawax.store.LoginStore');
      var nah = test.load(
	      {
	      	params: {
	      		username: username
	      	},
	      	scope   : this,
			    callback: function(records, operation, success) {
			        //the operation object contains all of the details of the load operation
			        if(records[0].data.username == username){
					      Ext.Viewport.setActiveItem(this.getMain(), this.slideLeftTransition);
			        }
			    }
	      }
    	);
	}
});