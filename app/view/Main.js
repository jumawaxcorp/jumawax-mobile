Ext.define('Jumawax.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',

    config: {
        tabBarPosition: 'bottom',

        items: [
            { xclass: 'Jumawax.view.PJP.Card' }
            // { xclass: 'MyApp.view.babi.Card' },
            // { xclass: 'MyApp.view.chat.Card' },
            // { xclass: 'MyApp.view.report.Report' }
        ]
    }
});
