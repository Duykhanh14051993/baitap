customElements.define("product-item", class extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }
  
    static get observedAttributes() {
      return [ 'image', 'name', 'content', 'price'];
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
        background-color:white;
        width: calc( 30% - 80px );
        height: 280px;
        margin-left: 20px;
      `;
    }
  
    renderStyle() {
      return `
        <style>
        .row1{
          background-color: red;
          width: 100%;
          height: 110px;
        }
        .row1 img{
          width: 100%;
          height: 110px;
        }
        .row2{
          background-color: white;
          width: 100%;
          height: 20px;
        }
        .row3{
          background-color: white;
          width: 100%;
          height: 100px;
        }
        .row4{
          background-color: white;
          width: 100%;
          height: 20px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
          align-items: center;
          flex: 0;
          margin-top: 5px;
        }
        p{
          font-size: 15px;
        }
        .button{
          padding: 8px 15px;
          background-color: red;
          flex: 1;
        }
        .price{
          flex: 8;
        }
        </style>
      `;
    }
  
    renderHTML() {
      this.style.cssText = this.renderContainerCSS();
      const html = `
        ${this.renderStyle()}
        <div class="row1">
        <img src="${this.attr('image')}" alt="google-cloud">
      </div>
      <div class="row2">
        <p>${this.attr('name')}</p>
      </div>
      <div class="row3">
        <p>${this.attr('content')}</p>
      </div>
      <div class="row4">
        <p class="price">${this.attr('price')}</p>
        <p class="button">Join</p>
      </div>
      `;
      this.shadow.innerHTML = html;
    }
  });
    