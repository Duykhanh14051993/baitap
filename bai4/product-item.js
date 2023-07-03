customElements.define("product-item", class extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ['image', 'name', 'logo', 'content', 'view' ];
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
    background-color: black;
    width: calc( 15% - 10px );
    height: 180px;
    margin-left: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
     `;
  }

  renderStyle() {
    return `
      <style>
      .link-youtube{
        background-color: chocolate;
        width: 100%;
        height: 90px;
        border-radius: 10px;
      }
      .link-youtube img {
        width: 100%;
        height: 90px;
        border-radius: 5px;
      }
      .content {
        margin-top: 5px;
        display: flex;
        flex-direction: row;
      }
      .logo{
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background-color: chocolate;
        margin-left: 2px;
      }
      .logo img{
        width: 25px;
        height: 25px;
        border-radius: 50%;
      }
      .info{
        background-color: black;
        width: 80%;
        height: 70px;
        margin-left: 5px;
      }
      .info p {
        font-size: 8px;
        color: darkgray;
        margin-top: 0;
      }
      .info b {
        font-size: 10px;
        color: white;
        display: -webkit-box;
        max-height: 40px;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        -webkit-line-clamp: 2;
        line-height: 1rem;
      }
      </style>
      
    `
    ;
  }

  renderHTML() {
    this.style.cssText = this.renderContainerCSS();
    const html = `
      ${this.renderStyle()}
        <div class="link-youtube">
          <img src="${this.attr('image')}" alt="image">
        </div>
        <div class="content">
        <div class="logo">
          <img src="${this.attr('logo')}" alt="logo">
        </div>
        <div class="info">
          <p><b>${this.attr('content')}</b><br/>
          ${this.attr('name')}<br/>${this.attr('view')}</p>
        </div>
    `;
    this.shadow.innerHTML = html;
  }
});
  