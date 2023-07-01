customElements.define("product-item", class extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return ['image', 'name'];
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
        width: calc( 20% - 20px ) ;
        height: 200px;
          margin: 10px;
     `;
  }

  renderStyle() {
    return `
      <style>
    .image{
        width: 100%;
        height: 150px;
    }
    .image img{
        width:100%;
        height:150px;
        object-fit:cover;
    }
    .name{
        width: 100%;
        height:50px;
        text-align: center;
        color: gray;
        font-size: 20px;
        font-weight: 800px;
    }
      </style>
      
    `
    ;
  }

  renderHTML() {
    this.style.cssText = this.renderContainerCSS();
    const html = `
      ${this.renderStyle()}
      <div class="item">
                <div class="image">
                <img src="${this.attr('image')}"/>
                </div>
                <div class="name">
                <p>${this.attr('name')}</p>
                </div>
            </div>
    `;
    this.shadow.innerHTML = html;
  }
});
  