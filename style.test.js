function _0x31ff(){const _0x3158a7=['rgb(52,\x20152,\x20219)','800px','rgb(255,\x20255,\x20255)','Header\x20should\x20have\x20the\x20correct\x20styles','.update-section','88ubsnia','innerHTML','9658803EqcrOo','20px','header','rgb(26,\x2026,\x2026)','2230924SXnZup','add','450652JFzwuG','body','classList','rgb(240,\x20240,\x20240)','14950eOUQRA','1rem\x200px','utf8','2rem','head','margin','Update\x20section\x20should\x20have\x20the\x20correct\x20styles','dark-mode','color','createElement','path','CSS\x20Class\x20Tests','3vuPInU','Body\x20should\x20have\x20dark\x20mode\x20styles\x20applied','toBe','right','10485xmiUkB','readFileSync','style.css','0px\x20auto\x202rem','position','5350eyRkrj','164011XLAJIw','querySelector','Computed\x20backgroundColor:','backgroundColor','log','<div\x20class=\x22update-section\x22></div>','padding','357791BsJPYJ','612jViJPV'];_0x31ff=function(){return _0x3158a7;};return _0x31ff();}const _0x4f9ff6=_0x1a21;(function(_0x56f760,_0x46e258){const _0x108326=_0x1a21,_0x270e87=_0x56f760();while(!![]){try{const _0x4a38f8=parseInt(_0x108326(0xb8))/0x1+parseInt(_0x108326(0x9c))/0x2+-parseInt(_0x108326(0xae))/0x3*(parseInt(_0x108326(0x9e))/0x4)+-parseInt(_0x108326(0xa2))/0x5*(-parseInt(_0x108326(0xc0))/0x6)+parseInt(_0x108326(0xbf))/0x7*(-parseInt(_0x108326(0xc6))/0x8)+parseInt(_0x108326(0xb2))/0x9*(parseInt(_0x108326(0xb7))/0xa)+-parseInt(_0x108326(0x98))/0xb;if(_0x4a38f8===_0x46e258)break;else _0x270e87['push'](_0x270e87['shift']());}catch(_0x5406b6){_0x270e87['push'](_0x270e87['shift']());}}}(_0x31ff,0x9fd9d));const fs=require('fs'),path=require(_0x4f9ff6(0xac)),loadCSS=()=>{const _0x2d09fc=_0x4f9ff6,_0x6eee49=path['join'](__dirname,_0x2d09fc(0xb4));return fs[_0x2d09fc(0xb3)](_0x6eee49,_0x2d09fc(0xa4));},applyCSS=_0x247cba=>{const _0x21b030=_0x4f9ff6,_0x584f01=document[_0x21b030(0xab)]('style');_0x584f01[_0x21b030(0xc7)]=_0x247cba,document[_0x21b030(0xa6)]['appendChild'](_0x584f01);};function _0x1a21(_0x319eec,_0x34e7f4){const _0x31ff47=_0x31ff();return _0x1a21=function(_0x1a21ab,_0xd3c84e){_0x1a21ab=_0x1a21ab-0x98;let _0xfb3b6f=_0x31ff47[_0x1a21ab];return _0xfb3b6f;},_0x1a21(_0x319eec,_0x34e7f4);}describe(_0x4f9ff6(0xad),()=>{const _0x13249b=_0x4f9ff6;let _0xb08003;beforeAll(()=>{_0xb08003=loadCSS(),applyCSS(_0xb08003);}),beforeEach(()=>{const _0x298490=_0x1a21;document[_0x298490(0x9f)]['innerHTML']='';}),test(_0x13249b(0xc4),()=>{const _0x3115d5=_0x13249b;document[_0x3115d5(0x9f)][_0x3115d5(0xc7)]='<header></header>';const _0x5505b5=document[_0x3115d5(0xb9)](_0x3115d5(0x9a)),_0x579a01=getComputedStyle(_0x5505b5);expect(_0x579a01['backgroundColor'])[_0x3115d5(0xb0)](_0x3115d5(0xc1)),expect(_0x579a01[_0x3115d5(0xaa)])['toBe']('rgb(255,\x20255,\x20255)'),expect(_0x579a01['padding'])[_0x3115d5(0xb0)](_0x3115d5(0xa3));}),test('Dark\x20mode\x20toggle\x20should\x20have\x20the\x20correct\x20styles',()=>{const _0x32f20c=_0x13249b;document[_0x32f20c(0x9f)][_0x32f20c(0xc7)]='<button\x20class=\x22dark-mode-toggle\x22></button>';const _0x4ac64a=document[_0x32f20c(0xb9)]('.dark-mode-toggle'),_0xe62df0=getComputedStyle(_0x4ac64a);console[_0x32f20c(0xbc)](_0x32f20c(0xba),_0xe62df0[_0x32f20c(0xbb)]),expect(_0xe62df0[_0x32f20c(0xb6)])[_0x32f20c(0xb0)]('fixed'),expect(_0xe62df0['top'])[_0x32f20c(0xb0)](_0x32f20c(0x99)),expect(_0xe62df0[_0x32f20c(0xb1)])[_0x32f20c(0xb0)](_0x32f20c(0x99)),expect(_0xe62df0[_0x32f20c(0xbb)])[_0x32f20c(0xb0)]('rgb(51,\x2051,\x2051)'),expect(_0xe62df0['color'])['toBe'](_0x32f20c(0xc3));}),test(_0x13249b(0xa8),()=>{const _0x39a67e=_0x13249b;document['body']['innerHTML']=_0x39a67e(0xbd);const _0x2d9471=document[_0x39a67e(0xb9)](_0x39a67e(0xc5)),_0x5e9488=getComputedStyle(_0x2d9471);expect(_0x5e9488['maxWidth'])['toBe'](_0x39a67e(0xc2)),expect(_0x5e9488[_0x39a67e(0xa7)])['toBe'](_0x39a67e(0xb5)),expect(_0x5e9488[_0x39a67e(0xbb)])[_0x39a67e(0xb0)]('rgb(255,\x20255,\x20255)'),expect(_0x5e9488[_0x39a67e(0xbe)])[_0x39a67e(0xb0)](_0x39a67e(0xa5));}),test(_0x13249b(0xaf),()=>{const _0x3f4d69=_0x13249b;document[_0x3f4d69(0x9f)][_0x3f4d69(0xa0)][_0x3f4d69(0x9d)](_0x3f4d69(0xa9));const _0x3e721b=getComputedStyle(document[_0x3f4d69(0x9f)]);expect(_0x3e721b[_0x3f4d69(0xbb)])[_0x3f4d69(0xb0)](_0x3f4d69(0x9b)),expect(_0x3e721b[_0x3f4d69(0xaa)])[_0x3f4d69(0xb0)](_0x3f4d69(0xa1));});});
