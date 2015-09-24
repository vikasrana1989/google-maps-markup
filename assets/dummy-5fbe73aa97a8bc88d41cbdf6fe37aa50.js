define("dummy/app",["exports","ember","ember/resolver","ember/load-initializers","dummy/config/environment"],function(e,t,a,n,r){"use strict";var u;t["default"].MODEL_FACTORY_INJECTIONS=!0,u=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:a["default"]}),n["default"](u,r["default"].modulePrefix),e["default"]=u}),define("dummy/components/ember-wormhole",["exports","ember-wormhole/components/ember-wormhole"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/google-map/component",["exports","ember"],function(e,t){"use strict";var a=t["default"].on;e["default"]=t["default"].Component.extend({map:null,center:new google.maps.LatLng(42.43540000000001,-71.11295997924805),initMap:a("didInsertElement",function(){var e=this.get("center"),t=this.get("zoom"),a=this.$("#map").get(0);this.setup(a,e,t)}),setup:function(e,t,a){var n;google.maps.visualRefresh=!0;var r={zoom:a||10,maxZoom:19,center:t};return n=new google.maps.Map(e,r),window.gmap=n,this.setProperties({map:n}),n}})}),define("dummy/components/google-map/template",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.5",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"dummy/components/google-map/template.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"id","map"),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("dummy/components/google-maps-markup/component",["exports","google-maps-markup/components/google-maps-markup/component"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/components/markup-result-item/component",["exports","google-maps-markup/components/markup-result-item/component"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("dummy/helpers/get",["exports","google-maps-markup/helpers/get"],function(e,t){"use strict";e["default"]=t["default"],e.get=t.get}),define("dummy/helpers/is-equal",["exports","google-maps-markup/helpers/is-equal"],function(e,t){"use strict";e["default"]=t["default"],e.isEqual=t.isEqual}),define("dummy/initializers/export-application-global",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";function n(e,n){if(a["default"].exportApplicationGlobal!==!1){var r,u=a["default"].exportApplicationGlobal;r="string"==typeof u?u:t["default"].String.classify(a["default"].modulePrefix),window[r]||(window[r]=n,n.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[r]}}))}}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("dummy/instance-initializers/app-version",["exports","dummy/config/environment","ember"],function(e,t,a){"use strict";var n=a["default"].String.classify,r=!1;e["default"]={name:"App Version",initialize:function(e){if(!r){var u=n(e.toString());a["default"].libraries.register(u,t["default"].APP.version),r=!0}}}}),define("dummy/router",["exports","ember","dummy/config/environment"],function(e,t,a){"use strict";var n=t["default"].Router.extend({location:a["default"].locationType});n.map(function(){}),e["default"]=n}),define("dummy/services/markup-data",["exports","google-maps-markup/services/markup-data"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.5",loc:{source:null,start:{line:1,column:0},end:{line:16,column:0}},moduleName:"dummy/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("h2");e.setAttribute(a,"id","title");var n=e.createTextNode("google-maps-markup");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createElement("div");e.setAttribute(a,"class","container-fluid");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","row");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","col-md-6 col-sm-12");var u=e.createTextNode("\n      ");e.appendChild(r,u);var u=e.createComment("");e.appendChild(r,u);var u=e.createTextNode("\n    ");e.appendChild(r,u),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","col-md-6 col-sm-12");var u=e.createTextNode("\n      ");e.appendChild(r,u);var u=e.createComment("");e.appendChild(r,u);var u=e.createTextNode("\n    ");e.appendChild(r,u),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[2,1]),r=new Array(3);return r[0]=e.createMorphAt(e.childAt(n,[1]),1,1),r[1]=e.createMorphAt(e.childAt(n,[3]),1,1),r[2]=e.createMorphAt(t,4,4,a),r},statements:[["inline","google-maps-markup",[],["map",["subexpr","@mut",[["get","map",["loc",[null,[6,31],[6,34]]]]],[],[]],"editable",!0,"panForOffscreen",!1,"autoResetToPan",!0],["loc",[null,[6,6],[6,92]]]],["inline","google-map",[],["map",["subexpr","@mut",[["get","map",["loc",[null,[9,23],[9,26]]]]],[],[]]],["loc",[null,[9,6],[9,28]]]],["content","outlet",["loc",[null,[14,0],[14,10]]]]],locals:[],templates:[]}}())}),define("dummy/utils/create-circle",["exports","google-maps-markup/utils/create-circle"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/utils/create-feature",["exports","google-maps-markup/utils/create-feature"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/utils/drawing-modes",["exports","google-maps-markup/utils/drawing-modes"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/utils/feature-center",["exports","google-maps-markup/utils/feature-center"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/utils/get-measurement",["exports","google-maps-markup/utils/get-measurement"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/utils/guid",["exports","google-maps-markup/utils/guid"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/utils/init-measure-label",["exports","google-maps-markup/utils/init-measure-label"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/utils/map-label",["exports","google-maps-markup/utils/map-label"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/utils/miles",["exports","google-maps-markup/utils/miles"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/utils/modes",["exports","google-maps-markup/utils/modes"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/utils/number-commas",["exports","google-maps-markup/utils/number-commas"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/utils/overlay-to-feature",["exports","google-maps-markup/utils/overlay-to-feature"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/utils/shape-area",["exports","google-maps-markup/utils/shape-area"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/utils/square-miles",["exports","google-maps-markup/utils/square-miles"],function(e,t){"use strict";e["default"]=t["default"]}),define("dummy/config/environment",["ember"],function(e){var t="dummy";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(u){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("dummy/tests/test-helper"):require("dummy/app")["default"].create({name:"google-maps-markup",version:"1.13.1+5bde1948"});