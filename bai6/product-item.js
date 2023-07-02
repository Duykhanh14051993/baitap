customElements.define("product-item", class extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
  
    static get observedAttributes() {
      return [ 'image', 'content1', 'content2' ];
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
        background-color: #d4d9dc;
        width: calc( 20% - 20px );
        height: 200px;
        margin-left: 10px;
        margin-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `;
    }
  
    renderStyle() {
      return `
        <style>
        .icon{
          width: 80px;
          height: 80px;
        }
        .icon img{
          width: 100px;
          height: 100px;
        }
        .name{
          width: 200px;
          height: 70px;
          margin-top: 5px;
          text-align: center;
        }
        </style>
      `;
    }
  
    renderHTML() {
      this.style.cssText = this.renderContainerCSS();
      const html = `
        ${this.renderStyle()}
        <div class="icon">
                <img src="${this.attr('image')}" alt="icon1">
            </div>
            <div class="name">
                <p>${this.attr('content1')}<br/>${this.attr('content2')}</p>
            </div>
      `;
      this.shadow.innerHTML = html;
    }
  });
    