Ext.define('VT.store.BaseStore', {
    extend: 'Ext.data.TreeStore',

    requires: [
        'Ext.data.proxy.JsonP',
        'Ext.data.reader.Json',
        'Ext.util.Filter',
    ],

    config: {
        autoLoad: false,
        model: 'VT.model.BaseModel',
        remoteFilter: false,
        storeId: 'BaseStore',
        // pageSize: 15,
        // clearOnLoad: false,
        // clearOnPageLoad: false,
        pageSize: 15,
        clearOnPageLoad: false,
        // syncRemovedRecords: false,
        defaultRootProperty: 'text',
        proxy: {
            type: 'jsonp',
            // url: null,
            url: 'https://vasil.iag.bg/tel/v3/iag',
            reader: {
                type: 'json',
                rootProperty: 'items',
                totalProperty: 'total'
            }
        }
    }
});