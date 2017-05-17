"use strict";

(function(window){

    //import

    function CCategoryStore(){
        this.store = null;
        this.map = null;
    }


    CCategoryStore.prototype.getCategories = function(service, callback, bIsRefresh) {
        if(null === this.store || bIsRefresh){
            service.getCategories().then(callback);
        }
        else{
            callback();
        }
    };


    CCategoryStore.prototype.convertCategories = function(serverCategy) {
        var cats = [];
        var idMap = [];
        var categoryMap = {};
        var resourseNameMap = {};
        var resourseIdMap = {};
        var idNameMap = {};
        var nameIdMap = {};
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
                idMap[rs[parent][row].id] = rs[parent][row];
                out.push(rs[parent][row]);
            }
            return out;
        };

        for (var i = 0; i < serverCategy.length; i++) {
            var cat = serverCategy[i];
            //add to maps
            categoryMap[cat['name']] = cat['resource_uri'];
            resourseNameMap[cat['resource_uri']] = cat['name'];
            idNameMap[cat['id']] = cat['name'];
            nameIdMap[cat['name']] = cat['id'];
            resourseIdMap[cat['resource_uri']] = cat['id'];

            if (!cats[cat['parent']]) {
                cats[cat['parent']] = [];
            }
            cats[cat['parent']][cat['resource_uri']] = cat;
        }

        this.store = getTree(cats, null);
        this.map = categoryMap;
        this.idMap = idMap;

        this.resourseNameMap = resourseNameMap;
        this.idNameMap = idNameMap;
        this.nameIdMap = nameIdMap;
        this.resourseIdMap = resourseIdMap;
    };

    CCategoryStore.prototype.getChildren = function(id) {
        var res = null;

        if(this.idMap && this.idMap[id]){
            res = this.idMap[id].children;
        }

        return res;
    };
    //----------------------------------------------------------export----------------------------------------------------
    window["CCategoryStore"] = new CCategoryStore();
})(window);
