class ProductOne extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
      return ['img', 'time', 'title'];
    }
    // cách 1 gọi hàm đặt hàm là const abc = this.stribute.time;
    get img () { //cách 2 gọi từng cái 
      return this.getAttribute('img')
    }
    attr (name){ // cách 3 gọi 1 funtion chung rồi gọi từ function ra
      return this.getAttribute(name);
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
      this.renderHTML();
    }

    connectedCallback() {
      this.renderHTML();
    }

    renderHTML() {
      const html = `
      <link href="https://cdn.jsdelivr.net/npm/remixicon@3.4.0/fonts/remixicon.css" rel="stylesheet">
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
      .row4 {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin-bottom: 10px;
      }

      </style>
      <div class="layout">
        <div class="row1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu58v7E5jL_pkvA2lQmrFAqB03iZESlUZptg&usqp=CAU" alt="logo" class="logo" >
        <p class="content-row1">Alerts New</p>
        </div>
        <div class="row2">
        <img src="${this.img}" alt="thulnall" class="image">
        </div>
        <div class="row3">
        <p>${this.attr('time')}</p>
        <p>${this.attr('title')}</p>
        <p> Alertsnew.net</p>
        <div class="row4">
        <img src="./image/heart-line.png" alt="heart" class="icon">
        <img src="./image/message-2-line.png" alt="message" class="icon">
        <img src="./image/add-line.png" alt="add" class="icon">
        <img src="./image/upload-2-line.png"  alt="upload" class="icon">
        </div>
      </div>
      `
      this.shadow.innerHTML = html;
    }
  
  }
  customElements.define("product-item", ProductOne);
  