(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},25:function(e,t,a){},31:function(e,t,a){e.exports=a(84)},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(17),l=a.n(i),c=a(5),o=a(6),s=a(9),m=a(7),u=a(10),d=a(11),v=a.n(d),p=a(12),h=(a(15),a(87)),E=a(26),g=a.n(E),f={apiKey:"967ff21532a63288ecbd1985d2fa04be"},b=a(13),y=a.n(b),_=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={value:"",videos:[],videoTitle:""},a.getResult=function(){var e=Object(p.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://api.themoviedb.org/3/search/movie/",{params:{api_key:f.apiKey,language:"en-US",query:t}});case 2:n=e.sent,a.setState({videos:n.data.results});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onSubmit=function(e){e.preventDefault(),a.props.history.push("/movie/".concat(a.state.videoId))},a.onChange=function(e){a.setState({value:e.target.value}),a.getResult(e.target.value)},a.onSelect=function(e,t){a.setState({value:e,videoId:t.id})},a.renderItem=function(e,t){return r.a.createElement("div",{className:"autocomplete",style:{background:t?"lightgray":"white"},key:e.id},r.a.createElement("div",null,e.title),r.a.createElement("div",null,r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path)})))},a.getItemValue=function(e){return"".concat(e.original_title)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-container__searchBar"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement(g.a,{inputProps:{style:{border:"none",background:"transparent",width:"200px",borderBottom:"2px solid rgba(255, 255, 255, 0.3)",transition:"width 0.5s",fontSize:"25px",color:"rgba(255, 255, 255, 0.651)",outline:"none"}},getItemValue:this.getItemValue,items:this.state.videos,renderItem:this.renderItem,value:this.state.value,onChange:this.onChange,onSelect:this.onSelect,placeholder:"Search Movie..."})))}}]),t}(r.a.Component),O=Object(h.a)(_),j=function(){return r.a.createElement("div",{className:"navbar navbar-expand-lg sticky-top"},r.a.createElement("div",{className:"navbar__logo"},"MovieApp"))},w=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"main-container"},r.a.createElement(j,null),r.a.createElement("div",{className:"main-container__header"},r.a.createElement("div",null,r.a.createElement("h1",null,"Find your movie!")),r.a.createElement("div",null,r.a.createElement(O,null))))}}]),t}(r.a.Component),N=(a(25),function(e){var t=e.details,a=t.original_title,n=t.release_date,i=t.runtime,l=t.vote_average,c=t.overview,o=t.poster_path;return r.a.createElement("div",{className:"movie-container",style:{backgroundImage:"url(https://image.tmdb.org/t/p/original/".concat(o,")")}},r.a.createElement("div",{className:"movie-element"},r.a.createElement("div",{className:"movie__poster"},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w500/".concat(o)})),r.a.createElement("div",{className:"movie-element__content"},r.a.createElement("div",{className:"movie__title"},r.a.createElement("h2",null,a)),r.a.createElement("div",{className:"movie__description"},r.a.createElement("h4",null,"DESCRIPTION"),r.a.createElement("p",null,c)),r.a.createElement("div",{className:"movie__info"},r.a.createElement("div",null,r.a.createElement("h4",null,"INFO")),r.a.createElement("div",{className:"movie__info-properties"},r.a.createElement("div",null,r.a.createElement("p",null,"Release Time:"),r.a.createElement("p",null,n)),r.a.createElement("div",null,r.a.createElement("p",null,"Running Time:"),r.a.createElement("p",null,"".concat(i," min"))))),r.a.createElement("div",{className:"movie__Avg"},r.a.createElement("div",null,r.a.createElement("h4",null,"VOTE AVERAGE"),r.a.createElement("p",null,"".concat(l,"/10")))))))}),k=a(29),S=a.n(k),I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={movieId:a.props.match.params.id,details:{},isLoaded:!1},a.getDetails=function(){var e=Object(p.a)(v.a.mark(function e(t){var n;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("https://api.themoviedb.org/3/movie/".concat(t),{params:{api_key:f.apiKey,language:"en-US"}});case 2:n=e.sent,a.setState({details:n.data,isLoaded:!0});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.getDetails(this.state.movieId)}},{key:"renderMovie",value:function(){return this.state.isLoaded?r.a.createElement(N,{details:this.state.details}):r.a.createElement("div",{className:"movie__loader"},r.a.createElement("div",null,r.a.createElement(S.a,{type:"Puff",color:"rgb(38, 90, 235)",height:80,width:80})),r.a.createElement("p",null,"Loading"))}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderMovie())}}]),t}(r.a.Component),x=a(86),C=a(85),A=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(x.a,null,r.a.createElement("div",null,r.a.createElement(C.a,{path:"/",exact:!0,component:w}),r.a.createElement(C.a,{path:"/movie/:id",exact:!0,component:I}))))}}]),t}(r.a.Component);l.a.render(r.a.createElement(A,null),document.querySelector("#root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.538e38d8.chunk.js.map