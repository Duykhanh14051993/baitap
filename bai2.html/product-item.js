class ProductOne extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
      return ['text'];
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
      this.renderHTML();
    }

    connectedCallback() {
      this.renderHTML();
    }

    renderHTML() {
      const html = `
      <style>
      .layout{
        background-color: #FF9933;
      }
      .row1{
        display: flex;
        flex-direction: row;
      } 
      .logo {
        width: 15px;
        height: 15px;
        margin-top: 10px;
        margin-left: 10px;
      }
      .content-row1{
        margin-top: 10px;
        margin-left: 8px;
      }
      .row2 img{
        width: 300px;
        height: 300px;
        margin: 5px 10px;
      }
      .row3{
        display: flex;
        flex-direction: column;
      }
      .row3 p{
        margin-top: 3px;
        margin-left: 10px;
      }

      </style>
      <div class="layout">
        <div class="row1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu58v7E5jL_pkvA2lQmrFAqB03iZESlUZptg&usqp=CAU" alt="logo" class="logo" >
        <p class="content-row1">Alerts New</p>
        </div>
        <div class="row2">
        <img src="${this.anh}" alt="thulnall" class="image">
        </div>
        <div class="row3">
        <p></p>
        <p>${this.title}</p>
        <p> Alertsnew.net</p>
        <div class="row4">
        </div>
      </div>
      `
      this.shadow.innerHTML = html;
    }
  
  }
  customElements.define("product-item", ProductOne);
  