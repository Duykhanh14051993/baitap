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
      return [ 'image', 'name', ];
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
     
      `;
    }
  
    renderStyle = () => {
      return `
        <style>
        .item{
          margin-top: 20px;
          margin-left: 10px;
          position: relative;
          display: flex;
          flex-direction: row;
        }
       
       .buy{
        width: calc(100% - 15px);
        height: 30px;
        border-radius: 5px;
     }
       .item .trash{
          height: 30px;
          width: 30px;
          position: absolute;
          top: 0;
          left: 310px;
          display: none;
          border-radius: 5px;
       }
       .item:hover .trash{
          display: block;
       }
       .item .image {
          background-color: #f9372d;
          width: 30px;
          height: 30px;
          position: absolute;
          top: 0;
          left: 310px;
          border-radius: 5px;
          display: none;
       }
       .item:hover .image{
          display: block;
       }
       
        </style>
      `;
    }
  
    renderHTML = () => {
      this.style.cssText = this.renderContainerCSS();
      const html = `
        ${this.renderStyle()}
        <div class="item">
            <button class="buy">${this.attr('name')}</button>
            <button 
            class="trash" 
            id="remove"
            onclick="deleteItem(${this.attr('index')})"
            ></button>
            <img src="./image/trash.svg" alt="trash" class="image">
        </div>
      `;
      this.shadow.innerHTML = html;
    }
  });
    
    
    