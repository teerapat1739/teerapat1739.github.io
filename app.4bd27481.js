(function(t){function e(e){for(var s,i,c=e[0],r=e[1],l=e[2],u=0,m=[];u<c.length;u++)i=c[u],n[i]&&m.push(n[i][0]),n[i]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],s=!0,c=1;c<a.length;c++){var r=a[c];0!==n[r]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=a[0]))}return t}var s={},n={0:0},o=[];function i(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=s,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(a,s,function(e){return t[e]}.bind(null,s));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=r;o.push([0,1]),a()})({0:function(t,e,a){t.exports=a("Vtdi")},"1gN5":function(t,e,a){"use strict";var s=a("IQRt"),n=a.n(s);n.a},IQRt:function(t,e,a){},Vtdi:function(t,e,a){"use strict";a.r(e);a("yt8O"),a("VRzm");var s=a("Kw5r"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view",{staticClass:"main"})},o=[],i=a("KHd+"),c={},r=Object(i["a"])(c,n,o,!1,null,null,null),l=r.exports,d=a("L2JU"),u=(a("ls82"),a("MECJ")),m=(a("f3/d"),{user:{},isStaffLoggedIn:!1,isPlayerLoggedIn:!1,isLoading:0,userAddress:"",userName:"",tokenBalance:0,playerInfo:"You haven't registered"}),f={setLoading:function(t,e){t.isLoading+=e},isStaffLogin:function(t,e){console.log(" payload >> ".concat(e)),t.isStaffLoggedIn=!0,t.isPlayerLoggedIn=!1},isPlayerLogin:function(t,e){console.log(" payload >> ".concat(e)),t.isStaffLoggedIn=!1,t.isPlayerLoggedIn=!0},getTokenBalance:function(t,e){var a=e.isPlayer,s=e.tokenBalance;console.log(" isPlayer >> ".concat(a)),a||t.isStaffLoggedIn?t.tokenBalance=s:t.tokenBalance=0},playerInfo:function(t,e){var a=e.role,s=e.name;console.log(a+"playerInfo"+s),t.playerInfo=a+" : "+s}},p={isStaffLogin:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(e,a){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:s=e.commit,console.log("actions isStaffLogin >> ".concat(a)),s("isStaffLogin",a);case 3:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}(),isPlayerLogin:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(e,a){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:s=e.commit,console.log("actions isPlayerLogin >> ".concat(a)),s("isPlayerLogin",a);case 3:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}(),setIsLoading:function(){var t=Object(u["a"])(regeneratorRuntime.mark(function t(e,a){var s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:s=e.commit,s("setLoading",a);case 2:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}(),getTokenBalance:function(t,e){var a=t.commit;console.log(" getTokenBalance >> ".concat(e)),a("getTokenBalance",e)},playerInfo:function(t,e){var a=t.commit;a("playerInfo",e)}},v={namespaced:!0,state:m,actions:p,mutations:f},g={teams:[],teamCount:0},C={getTeamsProfile:function(t,e){console.log("action --\x3e getTeamsProfile"),t.commit("getTeamsProfile",e)},creatTeam:function(t,e){t.commit("creatTeam",e)},addMember:function(t,e){t.commit("addMember",e)},removePlayer:function(t,e){console.log("removePlayer --\x3e ".concat(e.address)),t.commit("removePlayer",e)},voteTeam:function(t,e){console.log("voteTeam --\x3e "+e)},getTeamCount:function(t,e){t.commit("setTeamCount",e)}},b={getTeamsProfile:function(t,e){console.log("mutations --\x3e getTeamsProfile"+e),t.teams=e},voteTeam:function(t,e){},addScore:function(t,e){console.log(e.groupId),t.teams.map(function(a,s){a.groupId===e.groupId&&console.log(t.teams[s].score++)})},removePlayer:function(t,e){console.log(e.address)},creatTeam:function(t,e){console.log(e),console.log(t.teams.push({groupId:e,groupName:e,score:3,detail:[]}))},addMember:function(t,e){var a=e.memberName,s=e.teamMebers;console.log(s.groupName),t.teams.map(function(e,n){e.groupId===s.groupId&&console.log(t.teams[n].detail.push({name:a,address:a}))})},setTeamCount:function(t,e){t.teamCount=e}},h={namespaced:!0,state:g,actions:C,mutations:b},y={stateContract:""},_={getContractState:function(t,e){console.log("action --\x3e getContractState"),t.commit("getContractState",e)}},k={getContractState:function(t,e){console.log("mutations --\x3e getContractState"),t.stateContract=e}},w={namespaced:!0,state:y,actions:_,mutations:k},x={network:"kovan",etherscanPrefix:"https://kovan.etherscan.io",ethereumNode:"wss://kovan.infura.io/_ws",pizzaCoinAddr:"0x2ae53961e6cad27ed6ef71c4b1e6021786d7846b",pizzaCoinStaffAddr:"0x2F1f50dc6F3D9B77FFd5b6C7769c2C28423099f2",pizzaCoinPlayerAddr:"0x377474c7afD40Dd75f4a6952CCB3bA69EF165159",pizzaCoinTeamAddr:"0xb35F30854F7A4a4c5Dd61a7C410bAd2541ffaAE8"},A={namespaced:!0,state:x};s["a"].use(d["a"]);var I=new d["a"].Store({modules:{auth:v,team:h,staff:w,system:A},state:{teamname:""}}),M=a("jE9Z"),P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"myclass hero is-info is-fullheight"},[a("div",{staticClass:"hero-body"},[a("div",{staticClass:"container has-text-centered"},[a("div",[a("flip-countdown",{attrs:{deadline:"2018-11-1 00:00:00"}})],1),a("div",{staticClass:"column is-6 is-offset-3"},[a("div",{directives:[{name:"anime",rawName:"v-anime",value:{rotate:"1turn",backgroundColor:"#FFF",duration:2e4,loop:!1},expression:"{ rotate: '1turn', backgroundColor: '#FFF', duration: 20000, loop: false }"}]},[a("h1",{staticClass:"title"},[t._v("\n                          Happy Birthday\n                        ")])])]),a("div",{staticClass:"recap-container"},[a("div",{staticClass:"recap"},[a("a",{staticClass:"button is-primary is-rounded",on:{click:function(e){t.isComponentModalActive=!0}}},[t._v("\n                          สิ่งที่ผมรู้จักคุณ\n                      ")]),a("b-modal",{attrs:{active:t.isComponentModalActive,"has-modal-card":""},on:{"update:active":function(e){t.isComponentModalActive=e}}},[a("div",{staticClass:"modal-background"}),a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("Recapture I.N.G.F.A.H")]),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.onCancel}})]),a("section",{staticClass:"modal-card-body"},[a("p",{staticClass:"content"},[a("ul",{attrs:{className:"recap-des"}},[a("li",[t._v("กินผงชูรส ไม่ได้ เจ็บคอกินผงชูรส ไม่ได้ เจ็บคอ")]),a("li",[t._v("ชอบเหนื่อยย (ผมจะพยายามช่วยนะ)")]),a("li",[t._v("ร้อนง่ายเหลือเกิน >> เอาหมอนข้างระบายความร้อน")]),a("li",[t._v("โหมดดวงจันทร์ตอนนอน ดวงจันทร์กลางวัน บางวัน ก็มี")]),a("li",[t._v("ปล่อยวางไม่เป็น เลยยยยยยยย")]),a("li",[t._v('ชอบ "เรอะ" แบบ สุพรรณ  แต่ก็ติด คำว่า "นิ" คนที่ไหนว่ะ')]),a("li",[t._v("ไม่กินผักอิงไม่กินผัก")])])])]),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",on:{click:t.onCancel}},[t._v("Exit")])])])])],1),a("div",{staticClass:"recap"},[a("a",{staticClass:"button is-info is-rounded",on:{click:function(e){t.isComponentModalActive2=!0}}},[t._v("\n                          ✍️บันทึกของผม\n                      ")]),a("b-modal",{attrs:{active:t.isComponentModalActive2,"has-modal-card":""},on:{"update:active":function(e){t.isComponentModalActive2=e}}},[a("div",{staticClass:"modal-background"}),a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title2"},[t._v("Once upon a time, meeting someone who makes you happy")]),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.onCancel}})]),a("section",{staticClass:"modal-card-body"},[a("article",{staticClass:"message is-primary"},[a("div",{staticClass:"message-header"},[a("p",[t._v(" 📚 📖Dairy ทำไมจึงเริ่มเขียน ?")]),a("button",{staticClass:"delete",attrs:{"aria-label":"delete"}})]),a("div",{staticClass:"message-body2"},[t._v("\n                                    หลังจากจบค่าย pizza🍕 hackathon ไป ผมก็ได้มาคุยกับเทอต่อในวันนี้ (Monday) วันนี้เทอไม่ไปเรียนช่วงเช้านะ เพราะ เทอต้องไปทำ passport ที่ จะไป travel ในวันเกิดของเทอกับพี่สาวส่วนผมก็ตื่น ทำกิจจกรรมเสร็จ ลงไปกินข้าว แล้วก็คุยกับเทอ แต่มีเรื่องหนึ่งที่เทอเหมือนไม่เชื่อ ตัวเอง ก็คือ ส่วนสูงนะ เทอบอกว่าวัด มาตลอด คือ 165 แต่พอมาวัดที่นี้ เทอสูง 161 เทอก็โทรมาเมาส์มอย ว่าเฮ่ยเพิ่งรู้อ่ะ แกรร ฉันวัดมา 165 ตลอดนะ 555 ผมว่าเทอเข้าใจผิดมาตลอดแหละ แถมเทอยังบอกว่า พี่พนักงานเขาบอกส่วนสูงไม่มีวันลดดด้วย  แล้วเทอก็ไปกินข้าวหมกไก่กับพี่สาว แล้วก็บ่นว่าเจ็บคอแน่เลย แต่กิน ยณะกินก็บ่นว่าอยากกินโกโก้ตลอดแต่ก็ไม่ได้ซื้อเพราะเทอจะไปซื่อน้ำผลไม้ที่ม (น้ำผลไม้มันมีอะไรดี) จากนั้น ผมก็ไปห้องสมุด วันนี้ดูเหมือน alert เป็นพิเศษ ผมว่าน่าจะเป็นเพราะ น้ำ เพื่อสุขภาพ(ผสมกัญชาแน่ๆ) เทอดูสดใสที่สุดตั้งแต่ที่ผมคุยกับเทอมา เทอบอกให้ผมเตือน เรื่อง จ่ายค่าเทอมแล้ว ก็ เติมบัตรเกมส์ เฮ้ยย MRT  5555 (ถามว่าผมเตือนเทอเหรอ เปล่า 555 ผมลืมม)\n                                    พอเลิกเรีนยน เทอก็จะไปรอรถตู้ด้วยความที่วันนั้น ฝนตก☔️  เทอเลยรอรถนาน เทอบ่นว่าหิว วดฟ ผมก็เลยไปกินไอตืม แล้วก็ถ่ายให้เทอดูเป็นรางวัลความอดทนน 555 สัส เลวววว หลังจากนั้นเทอก็ถึงหอแล้วก็กินลูกชิ้น แล้วเทอก็เจ็บคอตามสูตรเดิมแล้วเทอก็ซักผ้า พอตากผ้าก็ทะเลาะกับพี่สาว 5555 บรรยากาสเรื่มมาคุ  แล้วจากที่เทอ alert ก็ เปลี่ยนไป ผมคุยกับเทอจนถึงก่อนนอน แล้วเทอก็บอกผมว่า อยาก กลับไปออนเฟส ผมก็ลืมไปว่าเทอพูดเรื่องนี้เมื่อตอนไหนอันนี้ผมผิดเอง ผมจำอะไรไม่ค่อยได้ จึงเป็นเหตุผลที่ทำให้ผมต้องเริ่มมาเขียน Diary ครับ คืนนี้จบไม่สวยเท่าไหร่                                    ")])]),a("article",{staticClass:"message is-link"},[a("div",{staticClass:"message-header"},[a("p",[t._v("วันธรรมดา ก็ประมาณ นี้แหละ😮 ")]),a("button",{staticClass:"delete",attrs:{"aria-label":"delete"}})]),a("div",{staticClass:"message-body2"},[t._v("\n                                  วันนี้ผมตื่นเช้าแล้วก็โทรไปหาอิงค์แต่อิงค์ไม่รับ ตอนแรกผมก็คิดว่าเทอโกรธเรื่องเมื่อคืน ผมละกลัว แต่สุดท้ายเทอก็โทรกลับมา ผมละโล่งใจ วันนี้เทอกินข้าวกับอาหารที่มีส่วนผสมของหน่อไม้, ถั่วฝักยาว ,ไก่ และพริกแกงเทอบอกอาหารแปลกๆ เทอบ่นว่าหวาน แต่ก็ต้องฝึนกินแถมมีผงชูรสด้วยย หลังจากนั้น\n                                  เทอก็ รีดผ้า แล้วก็ขึ้นรถไปม เทอนมกับกล้วย กินก่อนเข้า class หลังจากกนั้นเราก้ไม่ได้คุยกันอีกทีตอนเลิกเรียน เทอก็มาบอกว่าวันนี้สอบแบบงงๆ ด้วยเป็นการสอบพูด เรื่องจริยะธรรมธุรกิจ แล้วก็ผ่านมาด้วยดีมั้ง เทอบอก แล้วก็ลงมา ฟ้าฝนก็เป็นใจ เทอยืนรอแล้วรถเมย์ก็เมินเทอๆ เทอเลยเกรี้ยวกราด 555 รอจนรอไม่ไหว ต้อง MRT 555 แล้วเทอก็กลับบ้าน แล้วเราก็ได้เทอบอกว่าง่วงและมีเพื่อนทักมา ออมไง จะใครล่ะ  วันนนี้เทอกินลูกชิ้นอีกแล้ว แล้วก็ตามสูตร แล้วเทอก็เจ็บคอ แล้วเทอก็บอกว่าอยากมีลูก เพราะ เทอชอบที่ได้รักใครสักคน   👪 ")])]),a("article",{staticClass:"message is-info"},[a("div",{staticClass:"message-header"},[a("p",[t._v("🤷🏻‍♀️เรื่องราวของเวลา(ผมเคยทำแบบนี้กับแค่บางคน)")]),a("button",{staticClass:"delete",attrs:{"aria-label":"delete"}})]),a("div",{staticClass:"message-body2"},[t._v('\n                                      today is a good day , อิงค์  wake up  6.36  because  me calling to her hhaha , Ing eat breakfast is ข้าวเหนียวหมูปิ้ง , today เทอ ไม่ค่อยตั้งใจเรียน เทอเล่นโทรศัพย์ตลอด(เด็กดื้อ) พอเทอเลิกเทอก็ไปหาหอกับขมพู่ ระหว่างน้น เทออยู่ในสายตลอด ผมเลยได้รู้บางมุมของเทอ ผมยอมรับนะว่าบางมุมผมไม่ค่อยชอบสักเท่าไหร่ แต่ไม่เป็นไรทุกคนมีข้อเสียแตกต่างกันไป รวมถึงผมด้วย (หล่ออ่ะแกรรรร) ผมได้ยินเทอบ่นขมพู่เรื่องกระโปรงบ่อยย มากกก แล้ว ก็ มี คำว่า Hee หลุดมา 555 ว๊ายยย ธาตุแท้สินะ normally มาก ผมว่าผมหนักกว่านะ เวลาอยู่กับเพื่อน เทอ บอกว่าเมื่อกี้ วินมอไซมอง แล้ว บอกว่า อื้อหืออออออออ 555 โรคจิตด้วย แต่ปกติของผู้ชายแหละ สุดท้ายเทอก็ได้หอส่งรูปให้ในไลน์ด้วยดีใจอ่ะ  ก่อนหน้านี้เทอโทรมาบอกด้วยย แหม่ซึ่ง แล้วเทอก็เดินทางไปยัง ตลาด นีออนที่หล่อนบอกว่าผ่านทุกวันแต่พอไปแล้วไม่มีอ่ะไร เทอบอกว่า ไม่น่ามาเลย ใช่ แบตมือถือเไม่ถึง 10 เปอ ยังจะไปอีก เดี่ยวหมดคนอื่นติดต่อไม่ได้จะแย่นะ ครับ อันนี้ผมคิดในใจไม่ได้บอกหรอก ตกเยนวันนี้เทอปากหมามากในแชท ด่าควยด่าสัสส สาระพัด แต่ผมก็ไม่เป็นไรนะ แล้ว เหตุการไม่คาดดฝันก็เกิดขี้นเมื่อผมเทอหาเทอคุยกันสักพัก เทอก็ถามว่ารู้ไหมเทอทำอะไรพรุ่งนี้ WTF ฉิบหายคือผมจำไม่ได้แล้วก็เงียบไปพักนึงแล้วก็ทำเป็นกวนตีนเพื่อลดบรรยากาศตึงเครียดแต่คราวนี้ไม่ได้ผล เทอบอกว่าผมเด็ก (แอบเสียใจนิดๆนะ>\n                                      ผมอุส่ายอมเดินกลับจากสนามแบต เกือบสองโลได้มั้งเพื่อจะได้คุยกับเทอแต่มันไม่เป็นอย่างที่คิด\n                                      ผมรู้สึกผิดที่จำอะไรไม่ได้ คือ มันลืมจริงๆ แล้วผมก็รวบรวมความกล้าเพื่อถามเทอว่า ช่วยงานหน่อยแล้วเทอก็บอกว่าง่วง (ใจเสียไปหมด> แต่ก็มีบอกว่ารีบส่งมาจะนอน เราก็ดีใจ มันยังไม่จบแค่นั้น ผมก็เงียบไม่กล้าพูดอะไร สุดท้ายเทอก็ส่งข้อคความมาว่า เทอไม่อยากคุยกับคนรุ่นเดียวหรือ เด็กกว่าหรอนะ แต่ เราจะเปิดโอกาศให้เทออ แล้วก็ออะไร ต่อ ยาวมาก so on  คือตอนนนสุดท้ายที่เทอบอกว่าผมน้ำตาคลอ คือเราไม่เคยทำแบบนี้กับใคร ผมกดดันนะ แต่ผมก็รู้สึกว่าเวลามันยังไม่มากพอบางอย่างผมก็ปรับตัวไม่ทัน แต่ผมก็พยายามอยู่ ผมไม่ค่อยได้ใส่ใจใครนานมากแล้ว คนสุดท้ายที่เราทำอะไรให้จริงจัง แบบนอนกอดกัน เกือบทุกคืน คือตาของผม ผมนึกถึงตา แล้วน้ำตามันก็คลอ คือเราสนิทกันมากตาเป็นคนที่ดันประคูตอนเด็กไม่ให้แม่เข้ามาตีผม ผมรู้รายละเอียดขอ ตา ผมเยอะมากและนอกจากตาก็ไม่เคยใส่ใจใครมากกกเลยยยย ด้วยความที่เราสนิทด้วยเรื่องของเวลาด้วยที่ผูกพัน ผมมมองว่าผมกับอิงเวลามันยังน้อยเกินไปตอนนี้ แล้วเทอก็รีบตัดสินผม มันยากนะ ที่จะทำใจ แต่ด้วยที่เราอยากหยุดอะไรที่ใครสักคนอ่ะ เราไม่อยากที่จะมานั่งใช้ชีวิตคนเดียวตอนทำงาน เราอยากทุ่ทเทกับงานโดยมีใครสักคนคอยอยู่ข้างๆ ถึงตอนนั้นถถ้าผมไม่มีใครผมคิดว่าผมแย่แน่ๆ ผมพยายามมากกับความรักครั้งนี้ "ปล ผมกวนตีนเทอคล้ายๆ กวนตีนตาเลย"\n                                  ')])]),a("article",{staticClass:"message is-success"},[a("div",{staticClass:"message-header"},[a("p",[t._v("🥂First meet First Impression ... แล้วเราก็หากันจนเจอ")]),a("button",{staticClass:"delete",attrs:{"aria-label":"delete"}})]),a("div",{staticClass:"message-body2"},[t._v("\n                                    วันนนี้ผมรู้สึกเป็นวันที่ดีมากๆ อีกวันหนึ่งของชีวิต เพื่อนมาตั้งแต่เช้า แล้วเราก็ไปห้องสมุด กัน ตบมุกกันโบะบะ แต่เหตุการที่ไม่คาดฝันก็เกิดขึ้น อิงค์ ชวนผม ไป union mall  >> so glad มากๆๆๆ ผมเลยไปที่รถตู้ให้เร็วที่สุด ด้วยเสื้อยับๆ ที่อิงบอกว่า ให้ไปรีดมานะ ควยย กุไม่รีดหรอก เป็นยังไงก็จะเป็นอย่างนั้น 5555 I' m so lazy . ผมจะลง จตุจักร แต่ เทอบอกว่าให้ลง central lad เห้อ ไอเราก็ ขก เดิน อะเนาะ ล่วงไปในปาเก๋า อ้าวไม่เจอ บัตร mrt กุเดินก็ได้ว่ะ แล้วก็ไป ยัง destination ที่ยังเขา นัดเราไว้ ผมยอมรับว่าพอถึงแล้วไม่กล้าไปเจอ คือ กุมาสภาพ แบบ ไม่พร้อม มากกกกก กลัววววววววว แต่พอเจอ ผมดีใจนะ ที่เทอไม่แคร๋ ภายนอกเลย ผมชอบบบบ เพราะ ผมก็ไม่ชอบมองใครที่วัตถุอยู่แล้ว ยอมรับว่าประทับใจเรื่องนี้ มากกจริงๆ แล้วความประหม่าก็หายไป แล้วเทอ ก็เดินพาผมไปซื้อชุดที่เทอ list ไว้ เลือกนานสัสสสส แม่ง แต่ก็รอเพราะมีความสุข 5555 ตอนแรกผมไม่กล้ามองหน้าเทอเขินมากกกก แล้วก็มากล้าสบตา เทอตอนกิน ชาบู🍜 กัน ผมชอบมองตาเทอ ดูแล้วมีความสุขขขขขขขข แล้ว เราก็เดนต่อไปทำอะไรด้วยกัน ผมชอบตอนที่ผมถอนเสี้ยนที่มือเทอ ชอบบบ ไม่ได้จับมือกับใครนานมากแล้ว\n                                    อิอิ เท่านี้แหละ\n                                  ")])])]),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",on:{click:t.onCancel}},[t._v("Exit")])])])])],1),a("div",{staticClass:"recap"},[a("a",{staticClass:"button is-primary is-rounded",on:{click:function(e){t.isComponentModalActive3=!0}}},[t._v("\n                         👣  Behide the seen\n                      ")]),a("b-modal",{attrs:{active:t.isComponentModalActive3,"has-modal-card":""},on:{"update:active":function(e){t.isComponentModalActive3=e}}},[a("div",{staticClass:"modal-background"}),a("div",{staticClass:"modal-card"},[a("header",{staticClass:"modal-card-head"},[a("p",{staticClass:"modal-card-title"},[t._v("This coding is the hardest.")]),a("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:t.onCancel}})]),a("section",{staticClass:"modal-card-body"},[a("article",{staticClass:"message is-success"},[a("div",{staticClass:"message-body"},[a("p",[t._v("🤑🤑🤑🤑สวัสดี อันที่จริง webมันไม่เป็นแบบนี้หรอก มันติดปัญานิดหน่อย เราเลยต้อง remake และยังเหลือ Feature เยอะอีกมากก ตอนแรกก็กะจะจำต่อให้หมด แต่มันทำต่อไม่ได้ มัน....  แต่ถ้ามีโอกาศ หรือสภาพจิตใจพร้อมกว่านี้ก็จะทำทุกอย่างให้เสร็จก่อนวันเกิดเทอล่ะกัน")])])]),a("article",{staticClass:"message is-warning"},[a("div",{staticClass:"message-header"},[a("p",[t._v("ทำไมต้องทำล่ะ? ✍🏾 ✍🏾 ")]),a("button",{staticClass:"delete",attrs:{"aria-label":"delete"}})]),a("div",{staticClass:"message-body"},[t._v("\n                                          เราเริ่มทำมาสักพักล่ะ และไม่อยากเสียความตั้งใจ อ่ะ เราอยากจะทำสิ่งที่สามารถทำให้ให้มันเสร็จไม่อยากจะทิ้งงานกลางทาง ตั้งใจแล้วได้แค่ไหนก็ส่งแค่นั้น\n                                        ")])]),a("article",{staticClass:"message is-info"},[a("div",{staticClass:"message-header"},[a("p",[t._v("🤦‍♂️ได้อะไรบ้างไอสิ่งที่ทำ ?")]),a("button",{staticClass:"delete",attrs:{"aria-label":"delete"}})]),a("div",{staticClass:"message-body"},[t._v("\n                                          การทำงานภายใต้สภาวะ ความกดดัน ฝืน และเราคิดว่าถ้าเราได้ทำงานใต้สภาวะนี้อีกันคงจะผ่อนคลายลงบ้าง ถือซ่ะว่าประสบการณ์ 👩🏻‍💻coding ที่กดดันที่สุดล่ะ\n                                        ")])]),a("article",{staticClass:"message is-danger"},[a("div",{staticClass:"message-header"},[a("p",[t._v("🙏ขอบคุณสักกะนิด")]),a("button",{staticClass:"delete",attrs:{"aria-label":"delete"}})]),a("div",{staticClass:"message-body"},[t._v("\n                                          ขอบคุณที่เคยคุย บ่นให้ฟัง ปรึกษา ปกติ ไม่เคยทำอะไรแบบนี้ อาจจะแปลกกหน่อย ขอบคุณที่เล่าเรื่องหลายๆอย่างให้ฟัง ไร้สาระส่วนใหญ่ Amazing บ้างบางเรื่อง มองเผินๆดูไม่ออก\n                                        ")])]),a("article",{staticClass:"message is-link"},[a("div",{staticClass:"message-header"},[a("p",[t._v("โชคดีครับ🖐🏼")]),a("button",{staticClass:"delete",attrs:{"aria-label":"delete"}})])])]),a("footer",{staticClass:"modal-card-foot"},[a("button",{staticClass:"button",on:{click:t.onCancel}},[t._v("Exit")])])])])],1)])])])])},T=[],L=a("K2Rr"),S=a.n(L),F={name:"home",components:{FlipCountdown:S.a},data:function(){return{isComponentModalActive:!1,isComponentModalActive2:!1,isComponentModalActive3:!1}},mounted:function(){this.$anime()},methods:{onCancel:function(){this.isComponentModalActive=!1,this.isComponentModalActive2=!1,this.isComponentModalActive3=!1}}},z=F,j=(a("1gN5"),Object(i["a"])(z,P,T,!1,null,"54abd915",null)),O=j.exports;s["a"].use(M["a"]);var R=new M["a"]({routes:[{path:"/",name:"home",component:O},{path:"/livefeed",beforeEnter:function(){window.open("https://pizzahackathon.github.io/livefeed/","_blank")}},{path:"/github",beforeEnter:function(){window.open("https://github.com/pizzahackathon/","_blank")}}]}),B=(a("jgpq"),a("P6ep")),E=a.n(B),N=a("Aej4"),D=a.n(N),G=a("GIGG"),H=a.n(G);s["a"].use(H.a),s["a"].use(D.a),s["a"].use(E.a),s["a"].config.productionTip=!1,new s["a"]({store:I,router:R,render:function(t){return t(l)}}).$mount("#app")}});
//# sourceMappingURL=app.4bd27481.js.map