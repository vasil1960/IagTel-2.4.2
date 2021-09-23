Ext.define('VT.model.BaseModel', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        // fields: [{
        //     name: 'text',
        //     type: 'string'
        // }]
        fields: ['text', 'gsm', 'egn', 'email', 'dlagnost', 'directsia','picture', 'glav_pod','dgs']
    }
});