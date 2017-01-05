"use strict";

(function(window){

//import

function CCategoryStore(){
    this.store = null;
    this.map = null;
}

CCategoryStore.prototype.convertCategories = function(serverCategy) {
    var cats = [];
    var categoryMap = {};
    var getTree = function (rs, parent) {
        var out = [];
        if (!rs[parent]) {
            return out;
        }

        for (var row in rs[parent]) {
            var chidls = getTree(rs, rs[parent][row]['resource_uri']);

            if (chidls) {
                rs[parent][row]['children'] = chidls;
                rs[parent][row].label = rs[parent][row].label;
                rs[parent][row].id = rs[parent][row].id;
            }

            out.push(rs[parent][row]);
        }
        return out;
    };

    for (var i = 0; i < serverCategy.length; i++) {
        var cat = serverCategy[i];
        categoryMap[cat['name']] = cat['resource_uri'];
        if (!cats[cat['parent']]) {
            cats[cat['parent']] = [];
        }
        cats[cat['parent']][cat['resource_uri']] = cat;
    }

    this.store = getTree(cats, null);
    this.map = categoryMap;
};
    //----------------------------------------------------------export----------------------------------------------------
    window["CCategoryStore"] = new CCategoryStore();
})(window);
