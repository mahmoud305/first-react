(this.webpackJsonpstartreact=this.webpackJsonpstartreact||[]).push([[0],{11:function(e,t,s){e.exports={copyRight:"Footer_copyRight__3hack",socialIcons:"Footer_socialIcons__1GqeR"}},20:function(e,t,s){},21:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),n=s(15),i=s.n(n),r=(s(20),s(21),s(2)),o=s(3),l=s(5),d=s(4),j=s(0),m=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(j.jsx)("div",{children:Object(j.jsx)("nav",{className:"navbar navbar-expand-lg navbar-dark fixed-top background-ko7ly ",children:Object(j.jsxs)("div",{className:"container px-5",children:[Object(j.jsx)("a",{className:"navbar-brand",href:"#",children:"Start React"}),Object(j.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(j.jsx)("span",{className:"navbar-toggler-icon"})}),Object(j.jsx)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:Object(j.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link myLink active","aria-current":"page",href:"#",children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link myLink",href:"../AboutComponent/About.jsx/About  ",children:"About"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link myLink",href:"#",children:"Portofolia"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)("a",{className:"nav-link myLink",href:"#",children:"Contact"})})]})})]})})})}}]),s}(a.Component),b=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(j.jsx)("section",{className:"bg-green mb-5 vh-100 d-flex justify-content-center align-items-center text-center ",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:"/assets/avataaars.svg",className:"homeImg w-75",alt:"Broken Avatar"}),Object(j.jsx)("h1",{className:"pageHeader my-3",children:"Start React "}),Object(j.jsxs)("div",{children:[" ",Object(j.jsx)("span",{className:" starIcon   ",children:Object(j.jsx)("i",{class:"fas fa-star "})})]}),Object(j.jsx)("p",{className:"fs-4",children:" Graphic Artist - Web Designer - Illustrator"})]})})}}]),s}(a.Component),h=s(6),x=s.n(h),u=s(7),O=s.n(u),p=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).closeLightBox=function(){a.itemRef.current.style.display="none",document.body.style="overflow:auto"},a.showImage=function(){a.itemRef.current.style.display="block",document.body.style="overflow:hidden"},a.itemRef=c.a.createRef(),a}return Object(o.a)(s,[{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{id:O.a.lightBox,ref:this.itemRef,class:" ".concat(O.a.lightBox," position-fixed top-0 start-0 bottom-0 end-0 "),children:Object(j.jsxs)("div",{className:"".concat(O.a.container," position-relative bg-white text-center ko7lyColor p-4"),children:[Object(j.jsx)("div",{className:"row justify-content-center ",children:Object(j.jsxs)("div",{className:"col-md-8 ",children:[Object(j.jsx)("h2",{className:"".concat(O.a.lightBoxHeader," text-uppercase fw-bolder   "),children:this.props.title}),Object(j.jsx)("div",{className:" stardiv justify-content-center align-items-center w-100 text-center",children:Object(j.jsxs)("span",{className:"starIcon bg-ko7ly",children:[" ",Object(j.jsx)("i",{className:"ko7lyColor fas fa-star "})]})}),Object(j.jsx)("img",{src:"/assets/".concat(this.props.imgId,".png"),className:"w-100 rounded-3 my-5",alt:""}),Object(j.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam. "}),Object(j.jsxs)("button",{onClick:function(){return e.closeLightBox()},id:O.a.closeBtn,className:"btn bg-green px-3 py-2 text-white rounded-3 fw-bold border border-1 ".concat(O.a.btn),children:[" ",Object(j.jsxs)("span",{children:[" ",Object(j.jsx)("i",{className:"fas fa-times pe-2"})," "]})," Close Window"]})]})}),Object(j.jsx)("div",{id:O.a.closeIcon,onClick:function(){return e.closeLightBox()},children:Object(j.jsx)("i",{className:"fas fa-times greenColor"})})]})})}}]),s}(a.Component),f=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var a;return Object(r.a)(this,s),(a=t.call(this,e)).b=6,a.showImage=function(e,t){a.LightBoxComponentRef.current.showImage(),a.setState({imgId:e,imgTitle:t})},a.state={imgId:1,imgTitle:"Cabin"},a.itemRef=c.a.createRef(),a.LightBoxComponentRef=c.a.createRef(),a}return Object(o.a)(s,[{key:"render",value:function(){var e=this;console.log([]);var t=document.querySelectorAll(".imgLayer");return console.log(t),Object(j.jsxs)("div",{className:"my-5 text-center",children:[Object(j.jsx)("h2",{className:"pageHeader ko7lyColor",children:"Portofolio"}),Object(j.jsx)("span",{className:" starIcon bg-ko7ly translate-middle-y ",children:Object(j.jsx)("i",{class:"fas fa-star ko7lyColor "})}),Object(j.jsx)("div",{className:"container my-5",children:Object(j.jsxs)("div",{className:"row px-4",children:[Object(j.jsx)("div",{className:"col-md-4 rounded-pill p-4 my-1",children:Object(j.jsxs)("div",{className:"".concat(x.a.portofolioItem," rounded-3 position-relative"),children:[Object(j.jsx)("div",{onClick:function(){return e.showImage(1,"LOG CABIN")},className:" ".concat(x.a.imgLayer,"  position-absolute top-0 bottom-0 start-0 end-0 bg-green d-flex justify-content-center align-items-center "),children:Object(j.jsx)("i",{className:"fas fa-plus fs-1 "})})," ",Object(j.jsx)("img",{src:"/assets/1.png",className:"w-100 ",alt:"cabin"})]})}),Object(j.jsx)("div",{className:"col-md-4 rounded-pill p-4 my-1",children:Object(j.jsxs)("div",{className:"".concat(x.a.portofolioItem," rounded-3 position-relative"),children:[Object(j.jsx)("div",{onClick:function(){return e.showImage(2,"TASTY CAKE")},className:" ".concat(x.a.imgLayer,"  position-absolute top-0 bottom-0 start-0 end-0 bg-green d-flex justify-content-center align-items-center "),children:Object(j.jsx)("i",{className:"fas fa-plus fs-1 "})}),Object(j.jsx)("img",{src:"/assets/2.png",className:"w-100 ",alt:"cabin"})]})}),Object(j.jsx)("div",{className:"col-md-4 rounded-pill p-4 my-1",children:Object(j.jsxs)("div",{className:"".concat(x.a.portofolioItem," rounded-3 position-relative"),children:[Object(j.jsx)("div",{onClick:function(){return e.showImage(3,"CIRCUS TENT")},className:" ".concat(x.a.imgLayer,"  position-absolute top-0 bottom-0 start-0 end-0 bg-green d-flex justify-content-center align-items-center "),children:Object(j.jsx)("i",{className:"fas fa-plus fs-1 "})}),Object(j.jsx)("img",{src:"/assets/3.png",className:"w-100 ",alt:"cabin"})]})}),Object(j.jsx)("div",{className:"col-md-4  rounded-pill p-4 my-1",children:Object(j.jsxs)("div",{className:"".concat(x.a.portofolioItem," rounded-3 position-relative"),children:[Object(j.jsx)("div",{onClick:function(){return e.showImage(4,"CONTROLLER")},className:" ".concat(x.a.imgLayer,"  position-absolute top-0 bottom-0 start-0 end-0 bg-green d-flex justify-content-center align-items-center "),children:Object(j.jsx)("i",{className:"fas fa-plus fs-1 "})}),Object(j.jsx)("img",{src:"/assets/4.png",className:"w-100 ",alt:"cabin"})]})}),Object(j.jsx)("div",{className:"col-md-4 rounded-pill p-4 my-1",children:Object(j.jsxs)("div",{className:"".concat(x.a.portofolioItem," rounded-3 position-relative"),children:[Object(j.jsx)("div",{onClick:function(){return e.showImage(5,"LOCKED SAFE")},className:" ".concat(x.a.imgLayer,"  position-absolute top-0 bottom-0 start-0 end-0 bg-green d-flex justify-content-center align-items-center "),children:Object(j.jsx)("i",{className:"fas fa-plus "})}),Object(j.jsx)("img",{src:"/assets/5.png",className:"w-100 ",alt:"cabin"})]})}),Object(j.jsx)("div",{className:"col-md-4 rounded-pill p-4 my-1",children:Object(j.jsxs)("div",{className:"".concat(x.a.portofolioItem," rounded-3 position-relative"),children:[Object(j.jsx)("div",{onClick:function(){return e.showImage(6,"SUBMARINE")},className:" ".concat(x.a.imgLayer,"  position-absolute top-0 bottom-0 start-0 end-0 bg-green d-flex justify-content-center align-items-center "),children:Object(j.jsx)("i",{className:"fas fa-plus fs-1 "})}),Object(j.jsx)("img",{src:"/assets/6.png",className:"w-100 ",alt:"cabin"})]})})]})}),Object(j.jsx)(p,{ref:this.LightBoxComponentRef,imgId:this.state.imgId,title:this.state.imgTitle})]})}}]),s}(a.Component),g=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(j.jsxs)("div",{id:"About",className:" bg-green my-5 p-5",children:[Object(j.jsxs)("div",{className:"text-center my-3",children:[Object(j.jsx)("h2",{className:"pageHeader ",children:"About"}),Object(j.jsx)("span",{className:" starIcon ",children:Object(j.jsx)("i",{class:"fas fa-star  "})})]}),Object(j.jsx)("div",{className:"container my-5",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-4 ms-auto",children:Object(j.jsx)("div",{className:"aboutItem",children:Object(j.jsx)("p",{children:"Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization."})})}),Object(j.jsx)("div",{className:"col-md-4 me-auto",children:Object(j.jsx)("div",{className:"aboutItem",children:Object(j.jsx)("p",{children:"You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!"})})})]})})]})}}]),s}(a.Component),v=s(8),N=s.n(v),y=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"my-5",children:[Object(j.jsxs)("div",{className:"text-center my-3",children:[Object(j.jsx)("h2",{className:"pageHeader ko7lyColor",children:"Contact"}),Object(j.jsx)("span",{className:" starIcon bg-ko7ly translate-middle-y ",children:Object(j.jsx)("i",{class:"fas fa-star ko7lyColor "})})]}),Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row",children:[Object(j.jsxs)("div",{className:"col-md-7 m-auto mb-3",children:[Object(j.jsxs)("div",{className:"form-group mb-4",children:[Object(j.jsx)("label",{htmlFor:"name",className:"greenColor  ",children:"Name"}),Object(j.jsx)("input",{type:"text",id:"name",placeholder:"Name",className:" w-100  border-0 bg-transparent"})]}),Object(j.jsx)("div",{className:N.a.line})]}),Object(j.jsxs)("div",{className:"col-md-7 m-auto mb-3",children:[Object(j.jsxs)("div",{className:"form-group mb-4",children:[Object(j.jsx)("label",{htmlFor:"email",className:"greenColor  ",children:"Email"}),Object(j.jsx)("input",{type:"email",id:"email",placeholder:"Email",className:" w-100  border-0 bg-transparent"})]}),Object(j.jsx)("div",{className:N.a.line})]}),Object(j.jsxs)("div",{className:"col-md-7 m-auto mb-3",children:[Object(j.jsxs)("div",{className:"form-group mb-4",children:[Object(j.jsx)("label",{htmlFor:"Phone Number",className:"greenColor  ",children:"Phone Number"}),Object(j.jsx)("input",{type:"text",id:"Phone Number",placeholder:"Phone Number",className:" w-100  border-0 bg-transparent"})]}),Object(j.jsx)("div",{className:N.a.line})]}),Object(j.jsxs)("div",{className:"col-md-7 m-auto mb-3",children:[Object(j.jsxs)("div",{className:"form-group mb-4",children:[Object(j.jsx)("label",{htmlFor:"message",className:"greenColor  ",children:"Message"}),Object(j.jsx)("textarea",{name:"message",placeholder:"Message",id:"message",className:" w-100 border-0",rows:"5"})]}),Object(j.jsx)("button",{className:"".concat(N.a.sendBtn," btn py-3 px-5 bg-green text-white"),children:"Send"})]})]})})]})}}]),s}(a.Component),C=s(11),k=s.n(C),I=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){return Object(r.a)(this,s),t.apply(this,arguments)}return Object(o.a)(s,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:"p-0 m-0 bg-info",children:[Object(j.jsx)("div",{className:"  background-ko7ly",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"row py-5",children:[Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsxs)("div",{className:"footerItem text-center",children:[Object(j.jsx)("h3",{className:"my-5",children:"Location"}),Object(j.jsx)("p",{children:"2215 John Daniel Drive Clark, MO 65243"})]})}),Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsxs)("div",{className:"footerItem text-center",children:[Object(j.jsx)("h3",{className:"my-5",children:"AROUND THE WEB"}),Object(j.jsx)("div",{children:Object(j.jsxs)("p",{class:"".concat(k.a.socialIcons," d-flex justify-content-center align-items-center text-center "),children:[Object(j.jsx)("i",{class:" fab fa-facebook-f d-flex justify-content-center align-items-center p-3 mx-2 border  border-4 rounded-circle"}),Object(j.jsx)("i",{class:"fab fa-twitter p-3 mx-2 border border-4 rounded-circle"}),Object(j.jsx)("i",{class:"fab fa-linkedin-in p-3 mx-2 border border-4 rounded-circle"}),Object(j.jsx)("i",{class:"fas fa-basketball-ball p-3 mx-2 border border-4 rounded-circle"})]})})]})}),Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsxs)("div",{className:"footerItem text-center",children:[Object(j.jsx)("h3",{className:"my-5",children:"ABOUT FREELANCER"}),Object(j.jsx)("p",{children:"Freelance is a free to use, MIT licensed Bootstrap theme created by ."})]})})]})})}),Object(j.jsx)("div",{className:" ".concat(k.a.copyRight," p-4 text-center"),children:Object(j.jsx)("small",{children:" Copyright \xa9 Your Website 2021 "})})]})}}]),s}(a.Component);var w=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(m,{}),Object(j.jsx)(b,{}),Object(j.jsx)(f,{}),Object(j.jsx)(g,{}),Object(j.jsx)(y,{}),Object(j.jsx)(p,{}),Object(j.jsx)(I,{})]})},L=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,47)).then((function(t){var s=t.getCLS,a=t.getFID,c=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),c(e),n(e),i(e)}))};s(23),s(24),s(25);i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root")),L()},6:function(e,t,s){e.exports={imgLayer:"Portofolio_imgLayer__1Xyx7",portofolioItem:"Portofolio_portofolioItem__3HqKy"}},7:function(e,t,s){e.exports={lightBox:"LightBox_lightBox__11stf",container:"LightBox_container__ipOov",btn:"LightBox_btn__FVXtE",closeIcon:"LightBox_closeIcon__y7ykI",lightBoxHeader:"LightBox_lightBoxHeader__1dk4L"}},8:function(e,t,s){e.exports={sendBtn:"Contact_sendBtn__3jfP2",line:"Contact_line__R5NvT"}}},[[46,1,2]]]);
//# sourceMappingURL=main.1d2ee1d2.chunk.js.map