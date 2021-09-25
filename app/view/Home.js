Ext.define('VT.view.Home', {
    extend: 'Ext.Panel',
    alias: 'widget.home',

    requires: [
        'Ext.Panel',
        'Ext.Img',
        'Ext.Button',
        'Ext.Spacer',
        // 'VT.controller.Iag'
    ],

    config: {
        layout: 'vbox',
        // titlebar: 'sdsd',
        padding: 20,
        margin: '0 0 40 0',
        // font-size: 50,
        items: [
            {
                xtype: 'panel',
                flex: 1,
                layout: 'fit',
                items: [
                    {
                        xtype: 'image',
                        src: 'resources/images/main.png'
                    }
                ]
            },
            // {
            //     xtype: 'panel',
            //     flex: 2,
            //     items: [
            //         {
            //             xtype: 'button',
            //             text:'Изпълнителна агенция',
            //             ui: 'action',
            //             id: 'iagBtn',
            //             margin: 10
            //         // flex:1
            //         },
            //         {
            //             xtype: 'button',
            //             text:'Регионални дирекции',
            //             id: 'rdgBtn',
            //             margin: 10
            //         // flex:1
            //         },
            //         {
            //             xtype: 'button',
            //             text:'Държавни, ловни и др. стопанства',
            //             id: 'dgsBtn',
            //             margin: 10
            //         // flex:1
            //         },
            //         {
            //             xtype: 'button',
            //             text:'Търсене',
            //             id: 'searchBtn',
            //             margin: 10
            //         // flex:1
            //         },
            //         {
            //             xtype: 'button',
            //             text:'За приложението',
            //             id: 'aboutBtn',
            //             margin: 10
            //         // flex:1
            //         }
            //     ]
            // },
            // {
            //     xtype: 'panel',
            //     flex: 1,
            //     html: '<small style="center">2021</small>'
            // }
            {
                xtype: 'panel',
                flex: 1,
                margin: 10,
                layout: 'vbox',
                items: [
                    {
                        xtype: 'panel',
                        flex: 1,
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'button',
                                flex: 1,
                                id: 'iagBtn',
                                margin: '',
                                icon: 'true',
                                ui:'action',
                                iconAlign: 'top',
                                iconCls: 'team',
                                text: 'ИАГ',
                                handler: function(){
                                    Ext.getCmp('#iaglist');
                                }
                            },
                            {
                                xtype: 'spacer',
                                width: 10
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                disabled: false,
                                ui:'action',
                                id: 'rdgBtn',
                                iconAlign: 'top',
                                iconCls: 'team',
                                text: 'РДГ'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        flex: 1,
                        margin: '10 0',
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'button',
                                flex: 1,
                                id: 'dgsBtn',
                                ui:'action',
                                iconAlign: 'top',
                                iconCls: 'team',
                                text: 'ДГС/ДЛС',
                                // handler: function(){
                                //     console.log('tap');
                                // }
                            },
                            {
                                xtype: 'spacer',
                                width: 10
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                id: 'searchBtn',
                                ui: 'action',
                                iconAlign: 'top',
                                iconCls: 'search',
                                text: 'Търсене'
                            }
                        ]
                    },
                    {
                        xtype: 'panel',
                        flex: 1,
                        layout: 'hbox',
                        items: [
                            {
                                xtype: 'button',
                                flex: 1,
                                ui: 'action',
                                disabled: false,
                                id: 'allBtn',
                                iconAlign: 'top',
                                iconCls: 'team',
                                text: 'Всички'
                            },
                            {
                                xtype: 'spacer',
                                width: 10
                            },
                            {
                                xtype: 'button',
                                flex: 1,
                                id: 'aboutBtn',
                                icon: 'true',
                                iconAlign: 'top',
                                iconCls: 'compose',
                                text: 'За приложението'
                            }
                        ]
                    },
                    {
                        xtype: 'spacer',
                        width: 10,
                        flex: 1
                    },
                    {
                        // xtype: 'panel',
                        // flex: 1,
                        // margin: '10 0',
                        // layout: 'hbox',
                        // items: [
                        //     // {
                        //     //     xtype: 'button',
                        //     //     flex: 1,
                        //     //     id: 'iagpodBtn',
                        //     //     iconAlign: 'top',
                        //     //     iconCls: 'team',
                        //     //     text: 'ИАГ поделения'
                        //     // },
                        //     // {
                        //     //     xtype: 'spacer',
                        //     //     width: 10
                        //     // },
                        //     // {
                        //     //     xtype: 'button',
                        //     //     flex: 1,
                        //     //     disabled: true
                        //     // }
                        // ]
                    }
                ]
            }
        ]
    }

});