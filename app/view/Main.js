Ext.define('VT.view.Main', {
    extend: 'Ext.Panel',
    alias: 'widget.main',

    requires: [
        'Ext.Panel'
    ],

    config: {
        id: 'main',
        defaultBackButtonText: 'Начало',
        layout: {
            type: 'card',
            animation: 'fade'
        },
        
        items: [
            {
                xtype: 'home',
                title: 'Изпълнителна агенция по горите',
            },
            {
                xtype: 'baselist',
                title: 'ИАГ',
                flex : 1
                
            },
        ]
    }
});