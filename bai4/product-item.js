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
    
    
    </style>
    
    `
    this.shadow.innerHTML = html;
  }

}
customElements.define("product-item", ProductOne);
