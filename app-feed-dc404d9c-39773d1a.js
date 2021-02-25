import{L as e,c as t,h as o,_ as s,p as a,a as i,b as d}from"./app-index-995b2a63.js";class n{static calculateTotalComments(e){return!e.comments||e.comments.data.length<=0?0:e.comments.data.reduce((e,t)=>e+t.comment_count,e.comments.data.length)}}const r={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}};class c{constructor(){this.feedData=[]}static getInstance(){return c.instance||(c.instance=new c),c.instance}get feed(){return this.feedData}get hasMore(){return void 0!==this.feedPaging.next}async init(){try{const e="updated_time,created_time,story,message,link,source,full_picture,icon,name,picture,type,comments{comment_count},from&limit=2",t=await fetch(`https://graph.facebook.com/${d.facebook.apiVersion}/${d.facebook.groupId}/feed?fields=${e}&access_token=${d.facebook.accessToken}`,r),o=await t.json();return this.feedData=o.data,this.feedPaging=o.paging,this.feedData}catch(e){throw console.error(e),e}}async loadMore(){const e=await fetch(this.feedPaging.next+"&limit=2",r),t=await e.json();this.feedData=this.feedData.concat(t.data),this.feedPaging=t.paging}}const f=c.getInstance();let l=class extends e{constructor(){super(),this.feed=[]}static get styles(){return t`
      .feed {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .feed-post {
        flex-direction: row;
        width: 100%;
        max-width: 600px;
        min-height: 20vh;
        background-color: #333333;
        margin-bottom: 10px;
        border-radius: 10px;
      }

      .feed-post-header {
        background-color: #555555;
        border-radius: 10px 10px 0 0;
      }

      .feed-post-content {
        flex-grow: 1;
        border-bottom: 1px solid #AAAAAA;
      }

      .feed-post-message {
        padding: 5px;
        font-size: 0.95em;
      }

      .feed-post-from {
        line-height: 30px;
        text-align: center;
        font-weight: bold;
      }

      .feed-post-time {
        font-size: 0.8em;
        text-align: right;
        padding: 5px;
      }

      .feed-post-story {
        padding: 5px;
        font-size: 0.95em;
      }

      .feed-post-video-container {
        position: relative;
        padding-top: 56.25%;
      }

      .feed-post-video {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
      }

      .feed-post-image {
        width: 100%;
        object-fit: contain;
      }

      .feed-post-footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
      }

      .feed-post-comments {
        flex-direction: column;
        align-self: center;
        margin: 5px;
        font-size: 0.9em;
      }

      .feed-post-show-more {
        flex-direction: column;
        align-self: center;
        margin: 5px;
        background-color: green;
        border-color: darkgreen;
        color: white;
        padding: 5px;
      }

      .feed-load-more {
        padding: 10px;
        font-size: 1.1em;
      }
    `}connectedCallback(){super.connectedCallback(),this.getFeed()}async getFeed(){await f.init(),this.feed=f.feed}renderHeader(e){return o`
      <div class="feed-post-from">${e.from.name}</div>
      <div class="feed-post-time">${class{static dateTime(e){return new Date(e).toLocaleString()}}.dateTime(e.created_time)}</div>
    `}renderVideo(e){if(e)return e.includes("youtube")?o`
        <div class="feed-post-video-container">
          <iframe class="feed-post-video" src="${e}" frameborder="0" allowfullscreen></iframe>
        </div>
      `:o`
      <div class="feed-post-video-container">
        <video class="feed-post-video" controls="true">
          <source src="${e}">
        </video>
      </div>
    `}renderImage(e){return o`
      <img class="feed-post-image" src="${e}"/>
    `}renderContent(e){return o`
      ${e.source?this.renderVideo(e.source):this.renderImage(e.full_picture)}
    `}renderFooter(e){return o`
      <span class="feed-post-comments">
        Kommentarer: ${n.calculateTotalComments(e)}
      </span>
      <button class="feed-post-show-more">
        Vis mere
      </button>
    `}renderLoadMore(){if(f.hasMore)return o`
      <button class="feed-load-more" @click="${this.loadMore}">Hent flere</button>
    `}async loadMore(){await f.loadMore(),this.feed=f.feed}render(){return o`
      <div class="feed">
        ${this.feed.map(e=>o`
          <div class="feed-post">
            <div class="feed-post-header">
              ${this.renderHeader(e)}
            </div>
            <div class="feed-post-content">
              ${e.message?o`<div class="feed-post-message">${e.message}</div>`:o`<div class="feed-post-story">${e.story}</div>`}
              ${this.renderContent(e)}
            </div>
            <div class="feed-post-footer">
              ${this.renderFooter(e)}
            </div>
          </div>
      `)}
      ${this.renderLoadMore()}
      </div>
    `}};s([a({type:[n]})],l.prototype,"feed",void 0),l=s([i("app-feed")],l);export{l as AppFeed};
