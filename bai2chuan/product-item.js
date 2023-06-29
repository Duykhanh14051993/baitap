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
      <style>
        .container-wrapper{
          background-color: #pink;
          width: 100%;
          height: 500px;
          padding: 0;
          margin; 0;
          display; flex;
          flex-direction: column;
        }
        .item{
          background-color: #f5f5f5;
          width: 100%;
          height: 300px;
          margin-top: 10px;
        }
        .image{
          background-color: red;
          width: 100%;
          height: 200px;
        }
        .name{
          background-color: blue;
          width: 70%;
          height: 20px;
          margin-top: 10px;
        }
        .price{
          background-color: blue;
          width: 90%;
          height: 20px;
          margin-top: 10px;
        }
  

      </style>
    <div class="container-wrapper">
        <div class="item">
        <div class="image"></div>
        <div class="name"></div>
        <div class="price"></div>
        </div>
        </div>
    </div>
     
  
      `
      this.shadow.innerHTML = html;
    }
  
  }
  customElements.define("product-item", ProductOne);
  