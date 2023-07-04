customElements.define("product-item", class extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
  
    static get observedAttributes() {
      return [ 'logo', 'hatag', 'name', 'ad', 'content'];
    }
    attr (name){
      return this.getAttribute(name);
    }
  
    attributeChangedCallback(attrName, oldVal, newVal) {
      this.renderHTML();
    }
  
    connectedCallback() {
      this.renderHTML();
    }
  
    renderContainerCSS() {
      return `
      background-color: white;
        width: calc( 33% - 20px ) ;
        height: 85px;
        margin: 10px;
      `;
    }
  
    renderStyle() {
      return `
        <style>
        .item{
          display: flex;
        flex-direction: row;  
        }
        .left{
          background-color: white;
          width: 85px;
          height: 85px;
        }
        .left img{
          width: 85px;
          height: 85px;
          object-fit: cover;
        }
        .right{
          background-color: white;
          width: calc( 100% - 85px);
          height: 85px;
          margin-left: 5px;
        }
        .hatag{
          color: #ce9995;
          font-size: 15px;
        }
        .name{
          color: black;
          font-size: 12px;
          margin-left: 2px;
        }
        .ad{
          color: #848891;
          font-size: 12px;
          margin-left: 15px;
        }
        .content{
          color: #848891;
          font-size: 12px;
        }
        </style>
      `;
    }
  
    renderHTML() {
      this.style.cssText = this.renderContainerCSS();
      const html = `
        ${this.renderStyle()}
        <div class="item">
          <div class="left">
          <img src="${this.attr('logo')}" alt="logo"/>
          </div>
          <div class="right">
            <div class="content1">
            <p><span class="hatag">${this.attr('hatag')}</span><b class="name">${this.attr('name')}</b><span class="ad">${this.attr('ad')}</span></P>
            </div>
            <div class="content2">
            <p class="content">${this.attr('content')}</p>
            </div>
          </div>

      `;
      this.shadow.innerHTML = html;
    }
  });
    