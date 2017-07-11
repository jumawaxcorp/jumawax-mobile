Ext.define('Jumawax.view.auth.Login', {
    extend: 'Ext.form.Panel',
    xtype: 'loginPage',
    id: 'loginPage',

    requires: ['Ext.field.Toggle', 'Ext.Label', 'Ext.Img'],
    config: {
        title: 'Login',
        cls: 'vertical-align',
        items: [
            {
                xtype: 'image',
                src: Ext.Viewport.getOrientation() == 'portrait' ? '../../../resources/img/login-icon.png' : '../../../resources/img/login-small.png',
                style: Ext.Viewport.getOrientation() == 'portrait' ? 'width:80px;height:80px;margin:auto' : 'width:40px;height:40px;margin:auto'
            },
            {
                xtype: 'label',
                html: 'Login failed. Please enter the correct credentials.',
                itemId: 'signInFailedLabel',
                hidden: true,
                hideAnimation: 'fadeOut',
                showAnimation: 'fadeIn',
                style: 'color:#990000;margin:5px 0px;'
            },
            {
                xtype: 'fieldset',
                title: 'Login',
                cls: 'align-center',
                items: [
                    {
                        xtype: 'emailfield',
                        placeHolder: 'Isi R.Kenedy',
                        itemId: 'username',
                        value: 'R.Kennedy',
                        name: 'username',
                        required: true
                    },
                    {
                        xtype: 'passwordfield',
                        placeHolder: 'Password',
                        itemId: 'password',
                        name: 'password',
                        required: true
                    },
                    {
                        xtype: 'togglefield',
                        label: 'Remember username',
                        labelWidth: '60%',
                        name: 'keepUser'
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'logInButton',
                ui: 'action',
                padding: '10px',
                text: 'Log In'
            }
        ],
        listeners : [{
            delegate: '#logInButton',
            event: 'tap',
            fn: 'onLogInButtonTap'
        }]

    }
    // ,
    //     onLogInButtonTap: function () {
    //         console.log('asdasdas');
    //         var me = this;
    //         var usernameField = me.down('#username'),
    //             passwordField = me.down('#password'),
    //             label = me.down('#signInFailedLabel');
    //         label.hide();
    //         var username = usernameField.getValue(),
    //             password = passwordField.getValue();
    //         // Using a delayed task in order to give the hide animation above
    //         // time to finish before executing the next steps.
    //         var task = Ext.create('Ext.util.DelayedTask', function () {
    //             label.setHtml('');
    //             usernameField.setValue('');
    //             passwordField.setValue('');
    //         });
    //         task.delay(500);
    //     }
});