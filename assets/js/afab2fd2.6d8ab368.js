(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[843010],{944864:(e,t,o)=>{var s={"./20211117-1.yaml":373910,"./20211118-1.yaml":412821,"./20211215-1.yaml":952946,"./20211216-1.yaml":188399,"./20220216-1.yaml":830397,"./20220223-1.yaml":799270,"./20220316-1.yaml":14126,"./20220323-1.yaml":48535,"./20220420-1.yaml":111549,"./20220427-1.yaml":395688,"./20220518-1.yaml":685174,"./20220525-1.yaml":207659,"./20220615-1.yaml":449611,"./20220622-1.yaml":580945,"./20220720-1.yaml":597735,"./20220727-1.yaml":481014,"./20220817-1.yaml":850501,"./20220824-1.yaml":378910,"./20220921-1.yaml":269998,"./20220928-1.yaml":939074};function r(e){var t=n(e);return o(t)}function n(e){if(!o.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=n,e.exports=r,r.id=944864},540209:(e,t,o)=>{"use strict";o.d(t,{s:()=>r});var s=o(667294);const r=({header:e,body:t,footer:o})=>s.createElement("div",{className:"card"},s.createElement("div",{className:"card__header"},e),s.createElement("div",{className:"card__body"},t),s.createElement("div",{className:"card__footer"},o))},177286:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>b});var s=o(533737),r=o(386010),n=o(667294),a=o(931984),i=o(540209);const u=({title:e,category:t,description:o,date:s,youtubeUrl:r,youtubeImgUrl:u,rsvpUrl:c,eventUrl:l})=>n.createElement(i.s,{header:n.createElement(n.Fragment,null,n.createElement("h3",null,e),n.createElement("p",{className:"PluginCardAuthor"},"on ",s),n.createElement("span",{className:"badge badge--primary"},t),n.createElement("img",{src:u,alt:e})),body:n.createElement("p",null,o),footer:"upcoming"===t.toLowerCase()?n.createElement(n.Fragment,null,n.createElement(a.Z,{to:l,className:"button button--outline button--sm button--primary"},"Event page"),n.createElement(a.Z,{to:c,className:"button button--outline button--sm button--primary"},"Remind me")):n.createElement(a.Z,{to:r,className:"button button--outline button--primary button--block"},"Watch on YouTube")}),c="onDemandPage_a1uc";var l=o(700980);function m(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},s=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),s.forEach((function(t){m(e,t,o[t])}))}return e}const d=o(944864),g=d.keys().reduce(((e,t)=>{const o=d(t).default;return e["Upcoming"===o.category?"upcomingEvents":"onDemandEvents"].push((0,l.N)(o)),e}),{upcomingEvents:[],onDemandEvents:[]}),b=()=>n.createElement(s.Z,null,n.createElement("div",{className:(0,r.Z)("container","padding--lg",c)},n.createElement("div",{className:"marketplaceBanner"},n.createElement("div",{className:"marketplaceContent"},n.createElement("h2",null,"Community sessions"),n.createElement("p",null,"Upcoming events and recorded sessions about updates, demos and discussions.")),n.createElement(a.Z,{to:"/docs/overview/support",className:"button button--outline button--primary"},"Add an event or recording")),n.createElement("div",{className:"bulletLine margin-bottom--lg"}),n.createElement("h2",null,"Upcoming live events"),n.createElement("div",{className:"cardsContainer margin-bottom--lg"},g.upcomingEvents.map((e=>n.createElement(u,p({key:e.title},e))))),n.createElement("h2",null,"Community on demand"),n.createElement("div",{className:"cardsContainer margin-bottom--lg"},g.onDemandEvents.map((e=>n.createElement(u,p({key:e.title},e)))))))},700980:(e,t,o)=>{"use strict";function s(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,s)}return o}(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})),e}o.d(t,{N:()=>n});const n=e=>e.description.length>160?r(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),r.forEach((function(t){s(e,t,o[t])}))}return e}({},e),{description:e.description.slice(0,160)+"..."}):e},373910:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});const s={title:"Community Sessions",date:"November 17, 2021",category:"Meetup",description:"At this month\u2019s adopters session, get the scoop on Spotify\u2019s plan for paid plugins, a first look at Box\u2019s DevPortal, and answers to big questions, like \u201cHow will I know if Backstage will work at a large company like mine?\u201d",youtubeUrl:"https://youtu.be/apCDT3_DmFk",youtubeImgUrl:"https://i1.ytimg.com/vi/apCDT3_DmFk/mqdefault.jpg"}},412821:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});const s={title:"Community Sessions",date:"November 18, 2021",category:"Meetup",description:"In the contributors track for this month\u2019s community session, hear about upcoming deprecations, the fruits of Hacktoberfest, the future of both the Kubernetes plugin and the Tech Insights plugin, tips on contributing, and more.",youtubeUrl:"https://youtu.be/n1OWGwYAOiI",youtubeImgUrl:"https://i1.ytimg.com/vi/n1OWGwYAOiI/mqdefault.jpg"}},952946:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});const s={title:"Community Sessions",date:"December 15, 2021",category:"Meetup",description:"At our final adopters session of 2021, the community received a grab bag of end-of-year treats, including eye-catching infographics, a presentation from finance startup Brex about their path to adopting Backstage, and tips on branding your Backstage portal. Plus, get your official Backstage Zoom background. But first up, a quick look back at the year that was.",youtubeUrl:"https://youtu.be/0QMQYSTKAx0",youtubeImgUrl:"https://i1.ytimg.com/vi/0QMQYSTKAx0/mqdefault.jpg"}},188399:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});const s={title:"Community Sessions",date:"December 16, 2021",category:"Meetup",description:"At our final contributors session of 2021, see how the new Backstage Upgrade Helper works and enjoy smoother upgrades, hear updates from the maintainers, and meet our contributor of the month. As in the adopters session, first we celebrate the year\u2019s milestones and share a few resources you can use to spread the word about Backstage.",youtubeUrl:"https://youtu.be/nYjI2j-lWEM",youtubeImgUrl:"https://i1.ytimg.com/vi/nYjI2j-lWEM/mqdefault.jpg"}},830397:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});const s={title:"Community Sessions",date:"February 16, 2022",category:"Meetup",description:"This community session marks one year of Backstage community sessions! In this session, we celebrate one year of the Backstage community, hear from Patrik on stabilizing core APIs, learn more about Homepage Templates, find hidden info about your catalog entities, and Q&A.",youtubeUrl:"https://youtu.be/evf_LV0KzIk",youtubeImgUrl:"https://i1.ytimg.com/vi/evf_LV0KzIk/mqdefault.jpg"}},799270:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});const s={title:"Community Sessions",date:"February 23, 2022",category:"Meetup",description:"Community Sessions Anniversary , SWAG opportunity\u2757, TechDocs add-on framework, URL Reader demo \ud83d\udc68\u200d\ud83d\udcbb, Q&A",youtubeUrl:"https://youtu.be/Buu_KWdIFwU",youtubeImgUrl:"https://i1.ytimg.com/vi/Buu_KWdIFwU/mqdefault.jpg"}},14126:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});const s={title:"Adopter Community Sessions",date:"March 16, 2022",category:"Meetup",description:"In this community session, we celebrate Backstage\u2019s 2nd birthday and a few other milestones that Backstage reached in March! The amazing Suzanne Daniels also put together a panel from some of our community members to discuss all things developer experience!",youtubeUrl:"https://youtu.be/2s98-sxJT1c",youtubeImgUrl:"https://i1.ytimg.com/vi/2s98-sxJT1c/mqdefault.jpg",rsvpUrl:"https://calendar.google.com/calendar/embed?src=c_qup9gbhn9sqpuao6trttd8mk5s@group.calendar.google.com",eventUrl:"https://github.com/backstage/community/issues"}},48535:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});const s={title:"Contributor Community Sessions",date:"March 23, 2022",category:"Meetup",description:"In this Community Session, we review the recent milestones our Backstage community hit, chat with Djamaile Rahamat, our contributor spotlight, and watch three demos ranging from new plugins to test environments.",youtubeUrl:"https://youtu.be/BAzxljI765U",youtubeImgUrl:"https://i1.ytimg.com/vi/BAzxljI765U/mqdefault.jpg",rsvpUrl:"https://calendar.google.com/calendar/embed?src=c_qup9gbhn9sqpuao6trttd8mk5s@group.calendar.google.com",eventUrl:"https://github.com/backstage/community/issues"}},111549:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});const s={title:"Adopters Community Sessions",date:"April 20, 2022",category:"Meetup",description:"Adopters Community Session \u2728. It's the monthly meetup where we all come together to listen to the latest maintainer updates, learn from each other about adopting, share exciting new demos or discuss any relevant topic like developer effectiveness, developer experience, developer portals, etc.",youtubeUrl:"https://youtu.be/mFi_X58igzk",youtubeImgUrl:"https://backstage.io/img/b-sessions.png",rsvpUrl:"https://calendar.google.com/calendar/embed?src=c_qup9gbhn9sqpuao6trttd8mk5s@group.calendar.google.com",eventUrl:"https://github.com/backstage/community/issues/44"}},395688:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});const s={title:"Contributor Community Sessions",date:"April 27, 2022",category:"Meetup",description:"Join the maintainers and contributors for the Contributor Community Sessions",youtubeUrl:"https://youtu.be/evf_LV0KzIk",youtubeImgUrl:"https://backstage.io/img/b-sessions.png",rsvpUrl:"https://calendar.google.com/calendar/embed?src=c_qup9gbhn9sqpuao6trttd8mk5s@group.calendar.google.com",eventUrl:"https://github.com/backstage/community/issues/44"}},685174:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});const s={title:"Adopters Community Sessions",date:"May 18, 2022",category:"Meetup",description:"Adopters Community Session \u2728. It's the monthly meetup where we all come together to listen to the latest maintainer updates, learn from each other about adopting, share exciting new demos or discuss any relevant topic like developer effectiveness, developer experience, developer portals, etc.",youtubeUrl:"https://youtu.be/dEd1fl3wRvo",youtubeImgUrl:"https://backstage.io/img/b-sessions.png",rsvpUrl:"https://calendar.google.com/calendar/embed?src=c_qup9gbhn9sqpuao6trttd8mk5s@group.calendar.google.com",eventUrl:"https://github.com/backstage/community/issues/46"}},207659:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});const s={title:"Contributor Community Sessions",date:"May 25, 2022",category:"Meetup",description:"Join the maintainers and contributors for the Contributor Community Sessions",youtubeUrl:"https://youtu.be/neNipVE5ffY",youtubeImgUrl:"https://backstage.io/img/b-sessions.png",rsvpUrl:"https://calendar.google.com/calendar/embed?src=c_qup9gbhn9sqpuao6trttd8mk5s@group.calendar.google.com",eventUrl:"https://github.com/backstage/community/issues/46"}},449611:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});const s={title:"Adopters Community Sessions",date:"June 15, 2022",category:"Meetup",description:"Adopters Community Session \u2728. It's the monthly meetup where we all come together to listen to the latest maintainer updates, learn from each other about adopting, share exciting new demos or discuss any relevant topic like developer effectiveness, developer experience, developer portals, etc.",youtubeUrl:"https://youtu.be/aKZnjnE5Wy8",youtubeImgUrl:"https://backstage.io/img/b-sessions.png",rsvpUrl:"https://calendar.google.com/calendar/embed?src=c_qup9gbhn9sqpuao6trttd8mk5s@group.calendar.google.com",eventUrl:"https://github.com/backstage/community/issues/49"}},580945:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});const s={title:"Contributor Community Sessions",date:"June 22, 2022",category:"Meetup",description:"Join the maintainers and contributors for the Contributor Community Sessions",youtubeUrl:"https://youtu.be/E-jWqWXBxUY",youtubeImgUrl:"https://backstage.io/img/b-sessions.png",rsvpUrl:"https://calendar.google.com/calendar/embed?src=c_qup9gbhn9sqpuao6trttd8mk5s@group.calendar.google.com",eventUrl:"https://github.com/backstage/community/issues/49"}},597735:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});const s={title:"Adopters Community Sessions",date:"July 20, 2022",category:"Meetup",description:"Adopters Community Session \u2728. It's the monthly meetup where we all come together to listen to the latest maintainer updates, learn from each other about adopting, share exciting new demos or discuss any relevant topic like developer effectiveness, developer experience, developer portals, etc.",youtubeUrl:"https://youtu.be/4VFNlPxWcx8",youtubeImgUrl:"https://backstage.io/img/b-sessions.png",rsvpUrl:"https://calendar.google.com/calendar/embed?src=c_qup9gbhn9sqpuao6trttd8mk5s@group.calendar.google.com",eventUrl:"https://github.com/backstage/community/issues/52"}},481014:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});const s={title:"Contributor Community Sessions",date:"July 27, 2022",category:"Meetup",description:"Join the maintainers and contributors for the Contributor Community Sessions",youtubeUrl:"https://youtu.be/pNLLrNN_hkE",youtubeImgUrl:"https://backstage.io/img/b-sessions.png",rsvpUrl:"https://calendar.google.com/calendar/embed?src=c_qup9gbhn9sqpuao6trttd8mk5s@group.calendar.google.com",eventUrl:"https://github.com/backstage/community/issues/52"}},850501:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});const s={title:"Adopters Community Sessions",date:"August 17, 2022",category:"Meetup",description:"Adopters Community Session \u2728. It's the monthly meetup where we all come together to listen to the latest maintainer updates, learn from each other about adopting, share exciting new demos or discuss any relevant topic like developer effectiveness, developer experience, developer portals, etc.",youtubeUrl:"https://youtu.be/qYnvc8ge1kg",youtubeImgUrl:"https://backstage.io/img/b-sessions.png"}},378910:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});const s={title:"Contributor Community Sessions",date:"August 24, 2022",category:"Meetup",description:"Join the maintainers and contributors for the Contributor Community Sessions",youtubeUrl:"https://youtu.be/8ydEFFiuHAc",youtubeImgUrl:"https://backstage.io/img/b-sessions.png"}},269998:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});const s={title:"Adopters Community Sessions",date:"September 21, 2022",category:"Meetup",description:"Adopters Community Session \u2728. It's the monthly meetup where we all come together to listen to the latest maintainer updates, learn from each other about adopting, share exciting new demos or discuss any relevant topic like developer effectiveness, developer experience, developer portals, etc.",youtubeUrl:"https://youtu.be/K44RQAVWWnY",youtubeImgUrl:"https://backstage.io/img/b-sessions.png"}},939074:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>s});const s={title:"Contributor Community Sessions",date:"September 28, 2022",category:"Meetup",description:"Join the maintainers and contributors for the Contributor Community Sessions",youtubeUrl:"https://youtu.be/jmNT5x3mKaQ",youtubeImgUrl:"https://backstage.io/img/b-sessions.png"}}}]);