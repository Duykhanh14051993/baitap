class ProductOne extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ['img', 'time', 'title', 'image', 'name', 'price1', 'price2'];
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
        background-color: white;
        width: 100%;
        height: 300px;
        padding: 0;
        margin; 0;
        display; flex;
        flex-direction: column;
      }
      .item{
        background-color: white;
        width: 100%;
        height: 300px;
        margin-top: 10px;
      }
      .image img{
        background-color: red;
        width: 250px;
        height: 200px;
      }
      .name{
        width: 100%;
        height: 20px;
        margin-top: 10px;
        font-size: 18px;
        margin-left: 5px;
      }
      .price{
        width: 100%;
        height: 20px;
        margin-top: 10px;
        display: flex; 
        flex-direction: row;
        margin-left: 5px;
      }
      .price1{
        font-size: 12px;
        text-decoration: line-through;
      }
      .price2{
        font-size: 18px;
        margin-top: 8px;
        margin-left: 2px;
      }


    </style>
  <div class="container-wrapper">
      <div class="item">
      <div class="image">
      <img src=${this.attr('image')}
      </div>
      <div class="name">
      <p>${this.attr('name')}</p>
      </div>
      <div class="price">
      <p class="price1">${this.attr('price1')}</p><span class="price2">${this.attr('price2')}</span>
      </div>
      </div>
      </div>
  </div>
   

    `
    this.shadow.innerHTML = html;
  }

}
customElements.define("product-item", ProductOne);
