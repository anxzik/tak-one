(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{108:function(e,t,n){e.exports=n(152)},118:function(e,t,n){},124:function(e,t,n){},129:function(e,t,n){},133:function(e,t,n){},136:function(e,t,n){},145:function(e,t,n){},147:function(e,t,n){},152:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(46),i=n(43);n(118),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c,l=n(35),o=n(91),s=n(22),u=n(20),p=n(23),d=n(29),E=n(37),m=n(26),f={compareLayers:[void 0,void 0],editingTile:void 0,fetchingTiles:!1,isAddingTile:!1,mapState:{center:[42.359053,-71.058648],zoom:5},selectedTile:void 0,showNewPanel:!1,tiles:Object(E.a)()},h=function(e){function t(e){var n;return Object(s.a)(this,t),n=e?Object(u.a)(this,Object(p.a)(t).call(this,e)):Object(u.a)(this,Object(p.a)(t).call(this)),Object(u.a)(n)}return Object(d.a)(t,e),Object(m.a)(t,[{key:"getTile",value:function(e){return this.tiles.find(function(t){return t.uid===e})}},{key:"setTile",value:function(e,t,n){var a=this.getTileIndex(e),r=this.getTile(e);return!r||a<0?this:(r=r.set(t,n),this.setIn(["tiles",a],r))}},{key:"updateTile",value:function(e){var t=this;return this.update("tiles",function(n){var a=e.defaultLayer,r=t.getTileIndex(e.uid);return a&&(n=n.map(function(e){return e.set("defaultLayer",!1)})),n.set(r,e)})}},{key:"addTile",value:function(e){return this.update("tiles",function(t){return e.defaultLayer&&(t=t.map(function(e){return e.set("defaultLayer",!1)})),t.push(e)})}},{key:"getSelectedTile",value:function(){return this.selectedTile?this.getTile(this.selectedTile):void 0}},{key:"getTileIndex",value:function(e){return this.tiles.findIndex(function(t){return t.uid===e})}}]),t}(Object(E.b)(f));!function(e){e.ROLE_ADMIN="ROLE_ADMIN"}(c||(c={}));var L,T={fetchingRoles:!1,roles:Object(E.a)()},b=function(e){function t(e){var n;return Object(s.a)(this,t),n=e?Object(u.a)(this,Object(p.a)(t).call(this,e)):Object(u.a)(this,Object(p.a)(t).call(this)),Object(u.a)(n)}return Object(d.a)(t,e),Object(m.a)(t,[{key:"isAdmin",value:function(){return this.roles.includes(c.ROLE_ADMIN)}}]),t}(Object(E.b)(T)),y={maptile:new h,user:new b},_=(Object(E.b)(y),n(76)),O=n(25),v=n.n(O),D=n(39),g={XYZ:"XYZ"},I={createTime:"",creatorUid:"",defaultLayer:!1,description:"",enabled:!0,isEditing:!1,modifiedTime:"",name:"",type:"XYZ",uid:"",url:""},j=function(e){function t(e){var n;return Object(s.a)(this,t),n=e?Object(u.a)(this,Object(p.a)(t).call(this,e)):Object(u.a)(this,Object(p.a)(t).call(this)),Object(u.a)(n)}return Object(d.a)(t,e),Object(m.a)(t,null,[{key:"createTile",value:function(e){return new t(Object(_.a)({},I,e))}}]),t}(Object(E.b)(I)),C=function(){function e(){Object(s.a)(this,e)}return Object(m.a)(e,null,[{key:"getTiles",value:function(){var t=Object(D.a)(v.a.mark(function t(){var n,a,r;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(e.BASE_URL,"/all"));case 2:return n=t.sent,t.next=5,n.json();case 5:return a=t.sent,r=a.data,t.abrupt("return",r.map(function(e){return new j(e)}));case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},{key:"addTile",value:function(){var t=Object(D.a)(v.a.mark(function t(n){var a,r,i,c;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a=n.toJS(),t.next=3,fetch("".concat(e.BASE_URL,"/"),{body:JSON.stringify(a),headers:{"Content-Type":"application/json"},method:"POST",mode:"cors"});case 3:return r=t.sent,t.next=6,r.json();case 6:return i=t.sent,c=i.data,t.abrupt("return",new j(c));case 9:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"editTile",value:function(){var t=Object(D.a)(v.a.mark(function t(n){var a,r,i,c,l;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat(e.BASE_URL),r=n.toJS(),t.next=4,fetch(a,{body:JSON.stringify(r),headers:{"Content-Type":"application/json"},method:"PUT",mode:"cors"});case 4:return i=t.sent,t.next=7,i.json();case 7:return c=t.sent,l=c.data,t.abrupt("return",new j(l));case 10:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},{key:"deleteTile",value:function(){var t=Object(D.a)(v.a.mark(function t(n){var a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return a="".concat(e.BASE_URL,"/").concat(n),t.abrupt("return",fetch(a,{method:"DELETE"}));case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}]),e}();C.BASE_URL="".concat("","/Marti/api/maplayers"),function(e){e.ADD_TILE_PENDING="maptile/ADD_TILE_PENDING",e.ADD_TILE_FULFILLED="maptile/ADD_TILE_FULFILLED",e.ADD_TILE_REJECTED="maptile/ADD_TILE_REJECTED",e.REMOVE_TILE_PENDING="maptile/REMOVE_TILE_PENDING",e.REMOVE_TILE_FULFILLED="maptile/REMOVE_TILE_FULFILLED",e.REMOVE_TILE_REJECTED="maptile/REMOVE_TILE_REJECTED",e.LOAD_TILES_PENDING="maptile/LOAD_TILES_PENDING",e.LOAD_TILES_FULFILLED="maptile/LOAD_TILES_FULFILLED",e.LOAD_TILES_REJECTED="maptile/LOAD_TILES_REJECTED",e.EDIT_TILES_PENDING="maptile/EDIT_TILES_PENDING",e.EDIT_TILES_FULFILLED="maptile/EDIT_TILES_FULFILLED",e.EDIT_TILES_REJECTED="maptile/EDIT_TILES_REJECTED",e.SET_COMPARE_LAYER="maptile/SET_COMPARE_LAYER",e.SET_VALUE="maptile/SET_VALUE"}(L||(L={}));var A,N=function(e){return function(){var t=Object(D.a)(v.a.mark(function t(n){var a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:L.ADD_TILE_PENDING}),t.prev=1,t.next=4,C.addTile(e);case 4:a=t.sent,n({type:L.ADD_TILE_FULFILLED,payload:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n({type:L.ADD_TILE_REJECTED,payload:t.t0});case 11:case"end":return t.stop()}},t,this,[[1,8]])}));return function(e){return t.apply(this,arguments)}}()},S=function(e){return function(){var t=Object(D.a)(v.a.mark(function t(n){return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:L.REMOVE_TILE_PENDING,payload:e}),t.prev=1,t.next=4,C.deleteTile(e);case 4:n({type:L.REMOVE_TILE_FULFILLED,payload:e}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),n({type:L.REMOVE_TILE_REJECTED,payload:{uid:e,error:t.t0}});case 10:case"end":return t.stop()}},t,this,[[1,7]])}));return function(e){return t.apply(this,arguments)}}()},R=function(){return function(){var e=Object(D.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:L.LOAD_TILES_PENDING}),e.prev=1,e.next=4,C.getTiles();case 4:n=e.sent,t({type:L.LOAD_TILES_FULFILLED,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:L.LOAD_TILES_REJECTED,payload:e.t0});case 11:case"end":return e.stop()}},e,this,[[1,8]])}));return function(t){return e.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(D.a)(v.a.mark(function t(n){var a;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:L.EDIT_TILES_PENDING,payload:{uid:e.uid}}),t.prev=1,t.next=4,C.editTile(e);case 4:a=t.sent,n({type:L.EDIT_TILES_FULFILLED,payload:a}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),n({type:L.EDIT_TILES_REJECTED,payload:{uid:e.uid,error:t.t0}});case 11:case"end":return t.stop()}},t,this,[[1,8]])}));return function(e){return t.apply(this,arguments)}}()},k=function(e,t){return{type:L.SET_COMPARE_LAYER,payload:{index:t,tileUid:e}}},F=function(e,t){return{payload:{key:e,value:t},type:L.SET_VALUE}},U=function(){function e(){Object(s.a)(this,e)}return Object(m.a)(e,null,[{key:"getRoles",value:function(){var t=Object(D.a)(v.a.mark(function t(){var n;return v.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e.URL);case 2:return n=t.sent,t.abrupt("return",n.json());case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}]),e}();U.URL="".concat("","/Marti/api/util/user/roles"),function(e){e.LOAD_ROLES_PENDING="user/LOAD_ROLES_PENDING",e.LOAD_ROLES_FULFILLED="user/LOAD_ROLES_FULFILLED",e.LOAD_ROLES_REJECTED="user/LOAD_ROLES_REJECTED"}(A||(A={}));var P=function(){return function(){var e=Object(D.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:A.LOAD_ROLES_PENDING}),e.prev=1,e.next=4,U.getRoles();case 4:n=e.sent,t({type:A.LOAD_ROLES_FULFILLED,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:A.LOAD_ROLES_REJECTED,payload:e.t0});case 11:case"end":return e.stop()}},e,this,[[1,8]])}));return function(t){return e.apply(this,arguments)}}()},x=Object(_.a)({},L,A),M=function(e){return Object.keys(e).map(function(t){return e[t]})};function J(e){return e&&M(x).indexOf(e.type)>=0}var G=Object(l.c)({maptile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new h,t=arguments.length>1?arguments[1]:void 0;if(!J(t))return e;switch(t.type){case L.ADD_TILE_PENDING:return e.set("isAddingTile",!0);case L.ADD_TILE_FULFILLED:return e.set("isAddingTile",!1).set("showNewPanel",!1).addTile(t.payload);case L.ADD_TILE_REJECTED:return e.set("isAddingTile",!1);case L.LOAD_TILES_PENDING:case L.LOAD_TILES_REJECTED:return e.update("fetchingTiles",function(e){return!e});case L.LOAD_TILES_FULFILLED:return e.set("tiles",Object(E.a)(t.payload)).set("fetchingTiles",!1);case L.EDIT_TILES_PENDING:return e.setTile(t.payload.uid,"isEditing",!0);case L.EDIT_TILES_REJECTED:return e.setTile(t.payload.uid,"isEditing",!1);case L.EDIT_TILES_FULFILLED:return e.updateTile(t.payload).set("showNewPanel",!1).set("editingTile",void 0);case L.REMOVE_TILE_PENDING:return e.setTile(t.payload,"isEditing",!0);case L.REMOVE_TILE_REJECTED:return e.setTile(t.payload.uid,"isEditing",!1);case L.REMOVE_TILE_FULFILLED:return e.update("tiles",function(e){return e.filter(function(e){return e.uid!==t.payload})});case L.SET_VALUE:var n=t.payload,a=n.key,r=n.value;return e.set(a,r);case L.SET_COMPARE_LAYER:var i=t.payload,c=i.tileUid,l=i.index;return e.setIn(["compareLayers",l],c)}return e},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new b,t=arguments.length>1?arguments[1]:void 0;if(!J(t))return e;switch(t.type){case A.LOAD_ROLES_PENDING:return e.set("fetchingRoles",!0);case A.LOAD_ROLES_FULFILLED:return e.set("roles",Object(E.c)(t.payload)).set("fetchingRoles",!1);case A.LOAD_ROLES_REJECTED:return e.set("fetchingRoles",!1)}return e}}),V=[o.a],z=(0,l.d)(l.a.apply(void 0,V)),Y=Object(l.e)(G,y,z),B=n(155),Z=n(51),X=n(128),W=n(156),K=n(153),q=n(157),$=(n(124),function(e){function t(){var e,n;Object(s.a)(this,t);for(var r=arguments.length,i=new Array(r),c=0;c<r;c++)i[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(i)))).renderRows=function(){var e=n.props,t=e.tiles,r=e.selectedTile,i=e.selectTile,c=e.compareLayers,l=e.setCompareLayers;return t.map(function(e){var t=e.defaultLayer,o=e.uid===r,s=c[0]===e.uid,u=c[1]===e.uid;return a.createElement("tr",{onClick:function(){i(o?void 0:e.uid)},className:["tiles-table__table-row"].join(" "),key:e.uid},a.createElement("td",null,a.createElement(B.a,{checked:e.enabled,onChange:n.onEnableTile(e)})),a.createElement("td",null,"".concat(e.name," ")," ",t&&a.createElement(Z.a,{className:"tiles-table__star-icon",iconSize:10,icon:"star"})),a.createElement("td",null,e.type),a.createElement("td",null,e.createTime),a.createElement("td",null,e.modifiedTime),a.createElement("td",null,e.isEditing?a.createElement(X.a,{size:20}):a.createElement(W.a,{minimal:!0,key:"action-button-group"},a.createElement(K.a,{minimal:!0,onClick:n.onEdit(e),key:"edit",icon:"edit"}),a.createElement(K.a,{minimal:!0,key:"delete",icon:"trash",onClick:n.onRemoveTile(e.uid)}))),a.createElement("td",null,a.createElement(W.a,{fill:!0,key:"compare-button-group"},a.createElement(K.a,{small:!0,active:s,onClick:function(){return l(e.uid,0)}},a.createElement(Z.a,{icon:"caret-left"}),a.createElement(Z.a,{icon:"map"})),a.createElement(K.a,{small:!0,active:u,onClick:function(){return l(e.uid,1)}},a.createElement(Z.a,{icon:"map"}),a.createElement(Z.a,{icon:"caret-right"})))))}).toArray()},n.renderTable=function(){return a.createElement("div",{className:"tiles-table__table"},a.createElement("table",{className:"bp3-html-table bp3-interactive"},a.createElement("thead",null,a.createElement("tr",null,a.createElement("th",null,"Enabled"),a.createElement("th",null,"Map Alias"),a.createElement("th",null,"Type"),a.createElement("th",null,"Created on"),a.createElement("th",null,"Modified on"),a.createElement("th",null,"Actions"),a.createElement("th",null,"Compare Layers"))),a.createElement("tbody",null,n.renderRows())))},n.renderEmpty=function(){return a.createElement(q.a,{title:"Nothing to show",description:"No layers found, add a new layer",action:a.createElement(K.a,{icon:"plus",onClick:n.props.onAdd,loading:!1},"Add New")})},n.onRemoveTile=function(e){return function(t){t.stopPropagation(),n.props.removeTile(e)}},n.onEdit=function(e){return function(t){t.stopPropagation(),n.props.setEditingTile(e.uid),n.props.onAdd()}},n.onEnableTile=function(e){return function(t){t.stopPropagation(),t.preventDefault(),n.props.editTile(e.set("enabled",t.target.checked))}},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.tiles;e.isFetching||0!==t.count()||this.props.loadTiles()}},{key:"renderControls",value:function(){return a.createElement("div",{className:"tiles-table__controlls"},a.createElement(K.a,{icon:"plus",onClick:this.props.onAdd,loading:!1},"Add New"))}},{key:"render",value:function(){var e=this.props,t=e.isFetching;return e.tiles.count()||t?a.createElement("div",{className:"tiles-table bp3-card"},a.createElement("div",{className:"tiles-table__header"},a.createElement("h3",null,"Map Tiles"),this.renderControls()),t?a.createElement(X.a,{className:"tiles-table__loader",size:40}):this.renderTable()):a.createElement("div",{className:"bp3-card"},this.renderEmpty())}}]),t}(a.Component));$.defaultProps={isFetching:!1,selectedTile:void 0};var H=Object(i.b)(function(e){var t=e.maptile;return{compareLayers:t.compareLayers,isFetching:t.fetchingTiles,selectedTile:t.selectedTile,tiles:t.tiles}},function(e){return Object(l.b)({editTile:w,loadTiles:R,onAdd:function(){return F("showNewPanel",!0)},removeTile:S,selectTile:function(e){return F("selectedTile",e)},setCompareLayers:k,setEditingTile:function(e){return F("editingTile",e)}},e)})($),Q=(n(129),n(65)),ee=n(79),te=n(92),ne=(n(131),n(83)),ae=n(74),re=n(75),ie=(n(133),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).tileChange=function(e){n.map.getLayers().getArray().forEach(function(e){n.map.removeLayer(e)}),e?n.map.addLayer(new ee.a({source:new ae.a({url:e.url})})):n.map.addLayer(new ee.a({source:new ne.a}))},n.onMapChange=n.onMapChange.bind(Object(Q.a)(Object(Q.a)(n))),n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.tile;this.olContainer&&(this.map=new te.a({layers:[new ee.a({source:new ne.a})],target:this.olContainer,view:new re.a({center:[-71.058648,42.359053],projection:"EPSG:4326",zoom:this.props.zoom})}),this.map.getView().on("change",this.onMapChange))}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.center,a=t.zoom;a&&n&&(e.center!==n||e.zoom!==a)&&this.map&&(this.map.getView().setCenter(n),this.map.getView().setZoom(a)),this.props.tile!==e.tile&&this.tileChange(this.props.tile)}},{key:"componentWillUnmount",value:function(){this.map&&this.map.setTarget(void 0)}},{key:"render",value:function(){var e=this;return a.createElement("div",{className:"ol-map bp3-card",ref:function(t){e.olContainer=t}})}},{key:"onMapChange",value:function(e){var t=e.target.getCenter(),n=e.target.getZoom();this.props.setMapState(t,n)}}]),t}(a.Component)),ce=Object(i.b)(function(e,t){var n=e.maptile,a=t.tileUid,r=n.getTile(a);return{center:n.mapState.center,tile:r,tiles:n.tiles.toList(),zoom:n.mapState.zoom}},function(e){return Object(l.b)({setMapState:function(e,t){return F("mapState",{center:e,zoom:t})}},e)})(ie),le=n(162),oe=n(158),se=n(159),ue=n(160),pe=n(127),de=(n(136),function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(u.a)(this,Object(p.a)(t).call(this,e))).onNameChange=function(e){n.setState({name:e.target.value})},n.onUrlChange=function(e){return n.setState({url:e.target.value})},n.onDescriptionChange=function(e){return n.setState({description:e.target.value})},n.onTypeChange=function(e){n.setState({type:e.target.value})},n.onDefaultChange=function(e){n.setState({defaultLayer:e.target.checked})},n.onSubmit=function(){var e=n.state,t=e.name,a=e.description,r=e.type,i=e.url,c=e.defaultLayer;"adding"===e.mode?n.props.addTile(j.createTile({name:t,description:a,type:r,url:i,defaultLayer:c})):n.props.tile&&n.props.editTile(n.props.tile.set("name",t).set("description",a).set("type",r).set("url",i).set("defaultLayer",c))},n.onClose=function(){n.resetState(),n.props.onClose(),n.props.clearEditingTile()},n.resetState=function(){n.setState({defaultLayer:!1,description:"",mode:"adding",name:"",type:"XYZ",url:""})},n.setTileState=function(e){var t=e.toJS(),a=t.defaultLayer,r=t.name,i=t.type,c=t.url,l=t.description;n.setState({defaultLayer:a,description:l,mode:"editing",name:r,type:i,url:c})},n.state={defaultLayer:!1,description:"",mode:"adding",name:"",type:"XYZ",url:""},n}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.tile?this.setTileState(this.props.tile):this.resetState()}},{key:"componentDidUpdate",value:function(e){e.isOpen&&!this.props.isOpen&&this.onClose(),this.props.tile&&!this.props.tile.equals(e.tile)&&this.setTileState(this.props.tile)}},{key:"render",value:function(){var e=this.props,t=e.isOpen,n=e.isAdding,r=this.state,i=r.name,c=r.description,l=r.type,o=r.url,s=r.defaultLayer,u=""===i||""===o,p="editing"===r.mode,d=p?"Edit ".concat(i):"New Tile Alias";return a.createElement(le.a,{canEscapeKeyClose:!1,canOutsideClickClose:!1,title:d,isOpen:t,onClose:this.onClose},a.createElement("div",{className:"tile-form"},a.createElement(oe.a,{label:"Name",labelFor:"layer-name"},a.createElement(se.a,{id:"layer-name",value:i,onChange:this.onNameChange})),a.createElement(oe.a,{label:"URL",labelFor:"layer-url"},a.createElement(se.a,{id:"layer-name",value:o,onChange:this.onUrlChange})),a.createElement(oe.a,{label:"Description",labelFor:"layer-description"},a.createElement(ue.a,{fill:!0,rows:2,id:"layer-description",value:c,onChange:this.onDescriptionChange})),a.createElement(oe.a,{label:"Type",labelFor:"layer-type"},a.createElement("div",{className:"bp3-select bp3-fill"},a.createElement("select",{value:l,onChange:this.onTypeChange},Object.keys(g).map(function(e){return a.createElement("option",{key:e,value:e},e)})))),a.createElement(oe.a,{label:"Default",labelFor:"layer-description",inline:!0},a.createElement(B.a,{onChange:this.onDefaultChange,checked:s,type:"checkbox",name:""})),a.createElement("div",{className:pe.a.DIALOG_FOOTER},a.createElement("div",{className:pe.a.DIALOG_FOOTER_ACTIONS},a.createElement(K.a,{disabled:n,onClick:this.onClose,intent:"danger"},"Cancel"),a.createElement(K.a,{disabled:u,intent:"primary",loading:n,onClick:this.onSubmit},p?"Save":"Submit")))))}}]),t}(a.PureComponent)),Ee=Object(i.b)(function(e){var t=e.maptile,n=t.editingTile?t.getTile(t.editingTile):void 0;return{isAdding:t.isAddingTile,isOpen:t.showNewPanel,tile:n}},function(e){return Object(l.b)({addTile:N,clearEditingTile:function(){return F("editingTile",void 0)},editTile:w,onClose:function(){return F("showNewPanel",!1)}},e)})(de),me=Object(i.b)(function(e){var t=e.maptile;return{compareLayers:t.get("compareLayers"),tile:t.getSelectedTile()}},void 0)(function(e){var t=e.compareLayers;return a.createElement("div",{className:"map-tile"},a.createElement("div",{className:"map-tile__top"},a.createElement("div",{className:"map-tile__table"},a.createElement(H,null))),a.createElement("div",{className:"map-tile__bottom"},a.createElement(ce,{tileUid:t[0]}),a.createElement(ce,{tileUid:t[1]})),a.createElement(Ee,null))}),fe=(n(145),function(e){var t=e.children;return a.createElement("div",{className:"section"},t)}),he=n(161),Le=n(150),Te=n(151),be=n(149),ye=(n(147),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return a.createElement(he.a,{fixedToTop:!0},a.createElement(Le.a,null,a.createElement(Te.a,{className:"toolbar__logo"},a.createElement("span",{className:"toolbar__logo--tak"},"TAK"),a.createElement("span",null,"MLA")),a.createElement(be.a,null)))}}]),t}(a.Component)),_e=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchingRoles||this.props.loadRoles()}},{key:"render",value:function(){var e=null;return e=this.props.fetchingRoles?a.createElement(q.a,{icon:a.createElement(X.a,{size:40})}):this.props.isAdmin?a.createElement(me,null):a.createElement(q.a,{title:"Permission denied",icon:"blocked-person",action:a.createElement("a",{target:"__blank",href:"".concat("","/Marti/webtak/"),className:pe.a.BUTTON},"Go to WebTAK")}),a.createElement("div",{className:"app-container"},a.createElement(ye,null),a.createElement(fe,null,e))}}]),t}(a.Component),Oe=Object(i.b)(function(e){var t=e.user;return{fetchingRoles:t.fetchingRoles,isAdmin:t.isAdmin()}},function(e){return Object(l.b)({loadRoles:P},e)})(_e),ve=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return a.createElement(Oe,null)}}]),t}(a.Component);r.render(a.createElement(i.a,{store:Y},a.createElement(ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[108,2,1]]]);
//# sourceMappingURL=main.1f884327.chunk.js.map