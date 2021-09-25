Ext.define('VT.view.BaseList', {
    extend: 'Ext.NestedList',
    alias: 'widget.baselist',

    config: {
        
        store: 'BaseStore',

        onItemDisclosure: true,

        toolbar: {
            items: [
                {
                    xtype:'spacer'
                },
                {
                    xtype: 'button',
                    id: 'btnBackToHome',
                    align: 'right',
                    text: 'Начало',
                }
            ],
        },
    
        detailCard: {
            html: 'You are viewing the detail card!',
        },

        displayField: 'text',
    },
});