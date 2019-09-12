define(function (require) {
    "use strict";
    var $ = require('jquery'),
        _ = require('underscore'),
        Gonrin = require('gonrin');
    var itemTemplate = require('text!app/hosonguoilaodong/mobilehososuckhoevabenhtat/tpl/bangqlsuckhoelaodongthongquakhamsuckhoedinhky.html'),
        itemSchema = require('json!schema/BangQLSucKhoeLaoDongThongQuaKhamSucKhoeDinhKySchema.json');

    return Gonrin.ItemView.extend({
        bindings: "quanlysuckhoedinhky-bind",
        template: itemTemplate,
        tagName: 'tr',
        modelSchema: itemSchema,
        urlPrefix: "/api/v1/",
        collectionName: "bangqlsuckhoelaodongthongquakhamsuckhoedinhky",
        foreignRemoteField: "id",
        foreignField: "hsqlsuckhoevabenhtatnguoilaodong_id",

        uiControl: {
            fields: [
                {
					field: "phanloaisuckhoe",
					uicontrol: "radio",
					textField: "name",
					valueField: "id",
					cssClassField: "cssClass",
					dataSource: [
						{ name: "", id: 1 },
						{ name: "", id: 2},
						{ name: "", id: 3 },
						{ name: "", id: 4 },
						{ name: "", id: 5 },
					],
                },
            
            ]
        },
        render: function () {
            var self = this;            
            self.applyBindings();
            self.registerEvent();
        
        },
        registerEvent: function () {
            const self = this;
            self.$el.find("#itemRemove").unbind("click").bind("click", function () {
                self.remove(true);
            });
        }
    });
});