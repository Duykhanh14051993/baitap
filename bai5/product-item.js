customElements.define("product-item", class extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
  
    static get observedAttributes() {
      return [ 'content1', 'content2'];
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
      width: calc( 20% - 20px );
      height: 50vh;
      margin-left: 5px;
      margin-top: 10px;
      margin-bottom: 10px;
      `;
    }
  
    renderStyle() {
      return `
        <style>
        .row1{
          display: flex;
          flex-direction: row;
        }
        .icon{
          width: 25px;
          height: 25px;
          margin: 5px;
        }
        .icon img{
          width: 50px;
          height: 50px;
          object-fit: cover;
        }
        .content{
          width: 95%;
          height:250px;
          margin-top: 25px;
          margin-left: 5px;
          font-size: 15px;
        }
        .content2{
          border-top: 0.2px solid black;
          width: fit-content;
          margin-top: 30px;
        }
        </style>
      `;
    }
  
    renderHTML() {
      this.style.cssText = this.renderContainerCSS();
      const html = `
        ${this.renderStyle()}
        <div class="row1">
            <div class="icon">
              <img src="./image/icon.png" alt="icon">
            </div>
        </div>
        <div class="content">
            <P class="content1">${this.attr('content1')}</P>
            <p class="content2">${this.attr('content2')}<br/>${this.attr('content3')}</p>
        </div>
              `;
      this.shadow.innerHTML = html;
    }
  });
    