Ext.define('VT.controller.BaseController', {
    extend: 'Ext.app.Controller',
    alias: 'controller.basecontroller',

    config: {
        refs: {
            iagBtn: 'button#iagBtn',
            rdgBtn: 'button#rdgBtn',
            dgsBtn: 'button#dgsBtn',
            allBtn: 'button#allBtn',
            btnBackToHome: '#btnBackToHome',
            // baselist: 'list#baselist',
            main: 'navigationview#main',
            baselist: 'baselist',
            searchBtn: 'button#searchBtn',
            searchByNameBtn: 'button#btnSearchByName'

        },
        control: {
            'iagBtn' : {
                tap: 'onIagBtnTap'
            },
            'btnBackToHome': {
                tap: 'onBtnBackToHome'
            },
            'rdgBtn': {
                tap: 'onRdgBtnTap'
            },
            'dgsBtn': {
                tap: 'onDgsBtnTap'
            },
            'allBtn': {
                tap: 'onAllBtnTap'
            },
            'baselist': {
                leafitemtap : 'onLeafItemTap'
            },
            searchBtn: {
                tap: 'onSearchBtnTap'
            },
            searchByNameBtn: {
                tap: 'onBtnSearchByName'
            }

        }
    },

    onBtnBackToHome: function(){
        var main = Ext.getCmp('main');
        main.setActiveItem(0);
    },

    onIagBtnTap: function(){
        this.onBtnTap('v3/iag');
    },

    onRdgBtnTap: function(){
        this.onBtnTap('v3/rdg');
    },

    onDgsBtnTap: function(){
        this.onBtnTap('v3/dgs');
    },

    onAllBtnTap: function(){
        this.onBtnTap('v2');
    },

    onBtnTap: function(urlparam){
        // Ext.Viewport.setMasked(true);
        var main = Ext.getCmp('main');
        var baseStore = Ext.getStore('BaseStore');
        baseStore.setAutoLoad(false);
        baseStore.getProxy().setUrl('https://vasil.iag.bg/tel/'+ urlparam);
        baseStore.load();
        main.setActiveItem(1);
        // Ext.Viewport.setMasked(false);
    },

    onSearchBtnTap: function(){
        var main = Ext.getCmp('main');
        main.setActiveItem(2);
    },

    onBtnSearchByName: function(){
        console.log('search by name');
    },
    
    onLeafItemTap: function(nestedList, list, index, target, record) {
        var detailCard = nestedList.getDetailCard();
        detailCard.setHtml([

            '<table style="text-align:center">',
            '    <tr>',
            '        <td style="padding:5px"><img src="https://vasil.iag.bg/upload/'+record.get('glav_pod')+'/'+record.get('picture')+'" width="180" heigh="180">',
            '    </td>',
            '    <tr>',
            '        <td><h1>'+record.get('text')+'</h1></td>',
            '    </tr>',
            '    <tr>',
            '        <td><small>Поделение: </small><b>'+record.get('dgs')+'</td>',
            '    </tr>',
            '    <tr>',
            '        <td><small>Моб. тел: </small><b>'+record.get('gsm')+'</b></td>',
            '    </tr>',
            '    <tr>',
            '        <td><small>Email: </small><b>'+record.get('email')+'</b></td>',
            '    </tr>',
            '    <tr>',
            '        <td><small>Длъжност: </small><b>'+record.get('dlagnost')+'</b></td>',
            '    </tr>',
            '    <tr>',
            '        <td><small>Дирекция: </small><b>'+record.get('directorate')+'</b></td>',
            '    </tr>  ',
            // '   ',
            '</table>'
        ].join(""));
    }
});
