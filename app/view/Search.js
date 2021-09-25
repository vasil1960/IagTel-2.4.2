Ext.define('VT.view.Search', {
    extend: 'Ext.Panel',
    alias: 'widget.search',

    require: [
        // 'Ext.Title'
    ],

    config: {
        // title:'hello'
        layout: 'vbox',
        padding: 20, 

        items: [
            {
                xtype : 'toolbar',
                docked: 'top',
                title: 'Тълсене в цялата база с данни',
                items: [
                    {
                        xtype: 'button',
                        text: 'Начало',
                        docked: 'right',
                        id: 'btnBackToHome',
                    },
                ],
                // flex: 1
            },
            {
                items: [
                    {
                        xtype: 'fieldset',
                        title: '[Име, презиме, име и презиме]',
                        items: [
                            {
                                xtype: 'searchfield',
                                padding: 5,
                                name: 'query'
                            },
                        ]
                    }
                ],
                // flex: 1
            },
            {
                xtype: 'button',
                text: 'Търси',
                ui: 'action',
                margin: 10,
                padding: 10,
                id: 'btnSearchByName'
                // flex: 1
            }
        ]
    }
})