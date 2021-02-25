import{L as e,c as t,h as a,_ as s,p as o,a as c,b as p}from"./app-index-21f4be21.js";let d=class extends e{constructor(){super(),this.feed=[]}static get styles(){return t``}connectedCallback(){super.connectedCallback(),this.getFeed()}async getFeed(){this.feed=await class{static async getFeed(){try{const e="message,link,story,updated_time",t=await fetch(`https://graph.facebook.com/${p.facebook.apiVersion}/${p.facebook.groupId}/feed?fields=${e}&access_token=${p.facebook.accessToken}`,{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}});return(await t.json()).data}catch(e){throw e}}}.getFeed()}render(){return a`
      <div>
        <h2>Feed</h2>
      </div>
      <ul>
        ${this.feed.map(e=>a`
          <li>
            <p>${e.message}</p>
            <p>${e.link}</p>
            <p>${e.updated_time}</p>
            <p>${e.story}</p>
          </li>
        `)}
      </ul>
    `}};s([o({type:[class{}]})],d.prototype,"feed",void 0),d=s([c("app-feed")],d);export{d as AppFeed};
