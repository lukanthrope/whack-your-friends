(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/click.36936432.mp3"},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAB9AgMAAADy7oS2AAAAAXNSR0IB2cksfwAAAAxQTFRFAAAAuXpXAAAAupJw0Xf5UwAAAAR0Uk5TAP///7MtQIgAAAJgSURBVHic7Zc7bsMwDIadwUfwfXyEDJULePHuS/QUmTsFhZmhR8gpconsXgq0rqwXSYkqM3QpUC4JxM/kT9qWqab5e2aMefrB3RpnveKvEgeTTAY6BI4/JqgloX6pFBZACtFxoFBxMJkpAcoQuT+XWWTIcxQZ8hyln+cQMvAcrQTQXgkSuAjJT0WIEqgIUQIVIUqgIlRA9qPKikZUWdGIKlWgohFV1vxJpQZUi4hlqEC1iFiGCnR14PhLQN0fGvEwAOgYlvCH9mmEcwJmOJXADEsCIMIPAW1aTCIGiHD/q8CMgKkAgkgKiH3o6b3inRwcfgzAgBdHGzmwFMDMASgAryICJopCFf6SBMy5iHHhwJiLCFckoBARciYgFxEvQCCEnLZtpSkR8Csvm7VPIhoBF3PanK2YEQG3tAVDzUe8mzboFIE1VU1ut13bkqW+EWCAZwTupxIw8EoAIwDzFYFPCRgdcAdfBwHSHrY7vgDeKUBfPafxA+Cy/95qwN2+PjkQ9wfXJuuH6xbuGALDvn6hwMf+55x2GAXo6gDbBicqcsWbmQBWJgNaAsRG3bCR2OuNtPpMgQMFvH0tpA0RGOjdDM8k+2aN7wisswvBP2rwhsBtBAq4Ou0SAhY/G/xuujKAPtXhReoJ4GJiANv9EwJ7GU7VlAL4l69pksrB1/WCT6x9uXDK6XwAT8RnBU50RCn2KKuKAK2wyxk6BR1MuZEaNsxJbjYOdhJAZzl1GlTnSXUi1WdaQUTPAHWu1idzdbbPc5QHDPV8oZ5Q9DMOLUQ+rannLPWkpp/1GvW0+G91+wYZO0SK0bIUcwAAAABJRU5ErkJggg=="},,,function(e,t,a){e.exports=a.p+"static/media/punch.c71000d7.mp3"},function(e,t,a){e.exports=a(31)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(7),l=a.n(c),s=a(2),i=a(3),r=a(5),u=a(4),h=a(6),m=(a(18),a(20),a(22),a(24),a(1)),p=a(9),d=a.n(p),g=a(11),f=a.n(g);a(29);var v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).handleOnChange=function(e){a.setState({crop:e})},a.handleOnComplete=function(e,t){console.log(e,t);var n=a.imagePreviewCanvasRef.current,o=a.state.imagePreviewUrl;console.log(o),function(e,t,a){var n=e;n.width=a.width||200,n.height=a.height||200;var o=n.getContext("2d"),c=new Image;c.src=t,c.onload=function(){o.drawImage(c,a.x,a.y,a.width,a.height,0,0,a.width,a.height)}}(n,o,t)},a.saveImage=function(e){e.preventDefault();var t=a.state.imagePreviewUrl,n=a.imagePreviewCanvasRef.current;if(null===n)return a.props.click(),0;var o,c=(o=t).substring("data:image/".length,o.indexOf(";base64")),l=n.toDataURL("image/"+c);console.log(l),localStorage.setItem("face",l),a.props.click()},a.saveImageWithoutCrop=function(e){e.preventDefault();var t=a.state.imagePreviewUrl;localStorage.setItem("face",t),a.props.click()},a.buttonShower=function(){return a.showButton?o.a.createElement("div",{className:"buttons"},o.a.createElement("button",{onClick:a.saveImageWithoutCrop,className:"justSave little"},"save uncropped"),o.a.createElement("button",{onClick:a.saveImage,className:"cropNsave justSave little"},"crop&save")):o.a.createElement("h1",{className:"previewH1"},"Choose and upload an image")},a.imagePreviewCanvasRef=o.a.createRef(),a.state={file:"",imagePreviewUrl:"",value:"1",crop:{aspect:1}},a.showButton=!1,a.useDefaultImage=a.useDefaultImage.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"_handleImageChange",value:function(e){var t=this;e.preventDefault();var a=new FileReader,n=e.target.files[0];a.onloadend=function(){t.setState({file:n,imagePreviewUrl:a.result})},a.readAsDataURL(n)}},{key:"useDefaultImage",value:function(){localStorage.setItem("face","none"),this.props.click()}},{key:"render",value:function(){var e=this,t=this.state.imagePreviewUrl,a=null;return t&&(a=t,this.showButton=!0),o.a.createElement("div",{className:"imageCropper",style:this.props.style},o.a.createElement("div",{className:"containerTop"},o.a.createElement("h2",{className:"close",onClick:this.props.click,close:this.props.close},"X"),o.a.createElement("label",{htmlFor:"file-upload",className:"fileInputLabel"},"upload image"),o.a.createElement("input",{className:"fileInput",id:"file-upload",type:"file",size:"1",onChange:function(t){return e._handleImageChange(t)},accept:"image/*"}),o.a.createElement("input",{className:"justSave fileInputDefault",type:"button",onClick:this.useDefaultImage,value:"useDefaultImage"})),null!==a&&o.a.createElement("div",{className:"imgPreview"},o.a.createElement("div",{className:"cropParent"},o.a.createElement(f.a,{src:a,className:"imageCrop",crop:this.state.crop,onChange:this.handleOnChange,onComplete:this.handleOnComplete})),o.a.createElement("h4",null,"Preview:"),o.a.createElement("canvas",{ref:this.imagePreviewCanvasRef})),o.a.createElement("br",null),this.buttonShower())}}]),t}(n.Component),b=a(8),k=a.n(b),y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={sound:"OFF",showCropper:!1,style:{display:"none"}},a.s=new Audio(k.a),a.playClickSound=a.playClickSound.bind(Object(m.a)(Object(m.a)(a))),a.handleClick=a.handleClick.bind(Object(m.a)(Object(m.a)(a))),a.open=a.open.bind(Object(m.a)(Object(m.a)(a))),a.play=a.play.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.Scoring();var e=localStorage.getItem("Sound");null==e&&(e="ON"),this.setState({sound:e})}},{key:"open",value:function(){this.setState({style:{display:"block"===this.state.style.display?"none":"block"}}),this.playClickSound()}},{key:"handleClick",value:function(){"ON"===localStorage.getItem("Sound")?(this.setState({sound:"OFF"}),localStorage.setItem("Sound","OFF")):(this.setState({sound:"ON"}),localStorage.setItem("Sound","ON"))}},{key:"Scoring",value:function(){var e=localStorage.getItem("HightScore");null==e&&(e=0),e<=this.props.score?(this.setState({hightScore:e}),console.log(!0),localStorage.setItem("HightScore",this.props.score)):this.setState({hightScore:e})}},{key:"play",value:function(){l.a.render(o.a.createElement(C,null),document.getElementById("root"))}},{key:"playClickSound",value:function(){"ON"===this.state.sound&&this.s.play().then(function(){}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement(v,{style:this.state.style,click:this.open}),o.a.createElement("button",{className:"btn menu",onClick:function(){e.open(),e.playClickSound()}},"change enemies"),o.a.createElement("h2",{className:"stat sound",onClick:function(){e.handleClick(),e.playClickSound()}},"Sound: ",this.state.sound),o.a.createElement("h1",{className:"timesup"},this.props.phrase),o.a.createElement("h2",null,o.a.createElement("span",{className:"firstOne"},"score: ",this.props.score),o.a.createElement("span",{className:"secondOne"},"HightScore: ",this.state.hightScore)),o.a.createElement("h2",{className:"play replay",onClick:function(){e.play(),e.playClickSound()}},"replay"))}}]),t}(n.Component),S=a(12),O=a.n(S),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={time:60,score:0,face:null,holes:{first:"none",second:"none",third:"none",fourth:"none",fifth:"none",sixth:"none"}},a.s=new Audio(k.a),a.p=new Audio(O.a),a.playClickSound=a.playClickSound.bind(Object(m.a)(Object(m.a)(a))),a.playPunchSound=a.playPunchSound.bind(Object(m.a)(Object(m.a)(a))),a.showHide=a.showHide.bind(Object(m.a)(Object(m.a)(a))),a.interval=1100,a.punch=a.punch.bind(Object(m.a)(Object(m.a)(a))),a.toMenu=a.toMenu.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timer=setInterval(function(){return e.countTime()},1e3),this.sh=setInterval(this.showHide,500);var t=localStorage.getItem("face"),a=localStorage.getItem("Sound");null==t||"none"==t?this.setState({face:d.a}):this.setState({face:t}),this.setState({sound:a})}},{key:"componentWillUnmount",value:function(){clearInterval(this.timer),clearInterval(this.sh)}},{key:"countTime",value:function(){var e=this.state.time-1;0===e?this.toMenu("Time's up!"):this.setState({time:e})}},{key:"toMenu",value:function(e){l.a.render(o.a.createElement(y,{score:this.state.score,phrase:e}),document.getElementById("root"))}},{key:"showHide",value:function(){var e=this,t=this.state.holes,a=Math.floor(6*Math.random()+0);Object.keys(t).map(function(e,n){n===a&&(t[e]="block")}),20===this.state.time?this.interval-=50:30===this.state.time?this.interval-=50:37===this.state.time?this.interval-=100:45===this.state.time?this.interval-=50:52===this.state.time&&(this.interval-=100),this.setState({holes:t}),setTimeout(function(){Object.keys(t).map(function(e,n){n===a&&(t[e]="none")}),e.setState({holes:t})},this.interval)}},{key:"punch",value:function(e){var t=this.state.score;e.preventDefault();var a=e.currentTarget.dataset.key,n=this.state.holes;"none"!==n[a]?t++:t--,n[a]="none",this.setState({score:t<0?0:t,holes:n})}},{key:"renderHoles",value:function(){var e=this,t=this.state.holes;return Object.keys(t).map(function(a){return o.a.createElement("div",{key:a,className:"hole ".concat(a),onClick:e.punch,"data-key":a},o.a.createElement("img",{src:e.state.face,className:"eboss ".concat("none"===t[a]?"hidden":"block"),onClick:e.playPunchSound}))})}},{key:"playClickSound",value:function(){"ON"===this.state.sound&&this.s.play().then(function(){}).catch(function(e){console.log(e)})}},{key:"playPunchSound",value:function(){"ON"===this.state.sound&&this.p.play().then(function(){}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"outer-container"},o.a.createElement("button",{className:"btn menu",onClick:function(){e.toMenu("Alright"),e.playClickSound()}},"menu"),o.a.createElement("h2",{className:"counter stat sound"},this.state.time),o.a.createElement("h2",{className:"counter stat score"},"Score: ",this.state.score),o.a.createElement("div",{className:"container"},this.renderHoles()))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(r.a)(this,Object(u.a)(t).call(this,e))).state={sound:"ON",hightScore:0,showCropper:!1,style:{display:"none"}},a.s=new Audio(k.a),a.playClickSound=a.playClickSound.bind(Object(m.a)(Object(m.a)(a))),a.handleClick=a.handleClick.bind(Object(m.a)(Object(m.a)(a))),a.open=a.open.bind(Object(m.a)(Object(m.a)(a))),a.play=a.play.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("HightScore"),t=localStorage.getItem("Sound");console.log(t),null==e&&(e=0,localStorage.setItem("HightScore",e)),null==t&&(t="ON"),localStorage.setItem("Sound",t),this.setState({hightScore:e,sound:t})}},{key:"handleClick",value:function(){"ON"===localStorage.getItem("Sound")?(this.setState({sound:"OFF"}),localStorage.setItem("Sound","OFF")):(this.setState({sound:"ON"}),localStorage.setItem("Sound","ON"))}},{key:"open",value:function(){this.setState({style:{display:"block"===this.state.style.display?"none":"block"}}),this.playClickSound()}},{key:"play",value:function(){l.a.render(o.a.createElement(C,null),document.getElementById("root"))}},{key:"playClickSound",value:function(){"ON"===this.state.sound&&this.s.play().then(function(){}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement(v,{style:this.state.style,click:this.open}),o.a.createElement("button",{className:"btn menu",onClick:function(){e.open(),e.playClickSound()}},"change enemies"),o.a.createElement("h2",{className:"stat sound",onClick:function(){e.handleClick(),e.playClickSound()}},"Sound: ",this.state.sound),o.a.createElement("h2",{className:"stat score"},"HightScore: ",this.state.hightScore),o.a.createElement("h1",null,"Whack a friend!"),o.a.createElement("h2",{className:"play",onClick:function(){e.play(),e.playClickSound()}},"play"))}}]),t}(n.Component),w=function(e){function t(){return Object(s.a)(this,t),Object(r.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(A,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[13,2,1]]]);
//# sourceMappingURL=main.1d5f8e40.chunk.js.map