Ext.define('Jumawax.model.PJPModel', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            { name: 'planId', type: 'auto' },
            { name: 'submitDate', type: 'auto' },
            { name: 'agent', type: 'auto' },
            { name: 'owner', type: 'auto' },
            { name: 'status', type: 'auto' }
        ]
    }
});
