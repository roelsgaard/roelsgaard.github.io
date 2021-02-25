import{L as e,c as t,h as o,_ as s,p as i,a as d}from"./app-index-b8a41673.js";import{F as a,a as r,b as n}from"./formats-0e0e380d-2ff868c2.js";const l=a.getInstance();let c=class extends e{constructor(){super(),this.showFeedDetailsDialog=!1,this.feed=[]}static get styles(){return t`
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

      .feed-post-images {
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
      }

      .feed-post-image-card {
        width: 31%;
        height: 200px;
        padding: 5px;
        object-fit: cover;
      }

      .feed-post-details-dialog {}
    `}connectedCallback(){super.connectedCallback(),this.getFeed()}async getFeed(){await l.init(),this.feed=l.feed,this.hasMoreData=l.hasMore}renderHeader(e){return o`
      <div class="feed-post-from">${e.from.name}</div>
      <div class="feed-post-time">${r.dateTime(e.created_time)}</div>
    `}renderVideo(e){if(e.source)return e.source.includes("youtube")?o`
        <div class="feed-post-video-container">
          <iframe class="feed-post-video" src="${e.source}" frameborder="0" allowfullscreen></iframe>
        </div>
      `:o`
      <div class="feed-post-video-container">
        <video class="feed-post-video" controls="true">
          <source src="${e.source}">
        </video>
      </div>
    `}renderImage(e){return"photo"===e.type&&e.attachments?o`
        <div class="feed-post-images">
          ${n.getImages(e).map(e=>o`
            <img class="feed-post-image-card" src="${e.src}" @click="${()=>{this.showFeedDetailsDialog=!0,this.detailsDialogRenderer=()=>o`
                  <img style="width: 100%;height: 100%;object-fit: contain;" src="${e.src}">
                `}}"/>
          `)}
        </div>
      `:o`
      <img class="feed-post-image" src="${e.full_picture}"/>
    `}renderContent(e){return o`
      ${e.source?this.renderVideo(e):this.renderImage(e)}
    `}renderFooter(e){return o`
      <span class="feed-post-comments">
        Kommentarer: ${n.calculateTotalComments(e)}
      </span>
    `}renderLoadMore(){if(this.hasMoreData)return o`
      <button class="feed-load-more" @click="${this.loadMore}">Hent flere</button>
    `}async loadMore(){await l.loadMore(),this.feed=l.feed,this.hasMoreData=l.hasMore}render(){return o`
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
      ${this.showFeedDetailsDialog?o`<fast-dialog class="feed-post-details-dialog" modal="true">
            ${this.detailsDialogRenderer()}
            <fast-button style="position: absolute; transform: translateX(-40px);" @click="${()=>this.showFeedDetailsDialog=!1}">X</fast-button>
          </fast-dialog>`:null}
      </div>
    `}};s([i({type:[n]})],c.prototype,"feed",void 0),s([i({type:Boolean})],c.prototype,"showFeedDetailsDialog",void 0),c=s([d("app-feed")],c);export{c as AppFeed};
