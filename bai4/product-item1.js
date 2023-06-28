class ProductOne extends HTMLElement {
    constructor() {
      super();
      this.shadow = this.attachShadow({ mode: "open" });
    }

    static get observedAttributes() {
      return ['text', 'image', 'name', 'price1', 'price2'];
    }
    attr (name) {
        return this.attributes(name);
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
      this.renderHTML();
    }

    connectedCallback() {
      this.renderHTML();
    }

    renderHTML() {
        this.style.width = '500px';
        this.style.backgroundColor = 'red'; 
        this.style.height = '500px';
        this.style.display = 'flex';

        
        
      const html = `
      <style>
        .layout {
          display: flex;
          flex-direction: column;
          position: relative;
          flex-shrink: 0;
          box-sizing: border-box;
          height: 400px;
          width: 500px;
          margin-top: 10px;
          margin-left: 50px;

        }
        .image img {
            width: 200px;
            height: 200px;

        }
       .name p{
        font-size: 12px;
       }
       .no-sale {
        font-size: 12px;
       }
       .sale{
        font-size: 20px;
       }
      </style>
        <div class="layout">
        <div class="image">
        <img src="https://cdn.shopify.com/s/files/1/0681/5999/6200/products/mlouye-small-convertible-flex-bag-cappuccino-n1_1500x.jpg?v=1668812175"
            alt="anh-san-pham" />
        </div>
        <div class="name">
        <p class="name-san-pham">Small Convertible Flex Bag</p>
        </div>
        <div class="price">
        <p class="no-sale">$395.00 CAD <span class="sale">From $320.00 CAD</span></p>
        </div>
        </div>
      `
      this.shadow.innerHTML = html;
      console.log(html);
    }
  
  }
  customElements.define("product-item1", ProductOne);
  