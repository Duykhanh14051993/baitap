customElements.define("product-item", class extends CoreElement {
  constructor() {
    super();
  }

  state = {
    width: window.innerWidth
  }

  onWindowResize = () => {
    this.setState({ width: window.innerWidth });
  }
  static get observedAttributes() {
    return [ 'image', 'name', 'content1', 'content2' ];
  }

  attr(name){
      return this.getAttribute(name);
  }

  renderContainerCSS = () => {
    let cssWidth = '20%';
      if (this.state.width <= 480){
        cssWidth = '60%';
      } else if(this.state.width <= 768){
        cssWidth = '30%';
      } else {
        cssWidth = '18%';
      }
    return `
        background-color: black;
        width: ${cssWidth} ;
        height: 200px;
        margin: 10px;
        display: flex;
        flex-direction: column;
    `;
  }

  renderStyle = () => {
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
    `;
  }

  renderHTML = () => {
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
  
  