customElements.define("clone-me-short", class extends CoreElement {
    constructor() {
      super();
    }
  
    state = {
      width: 0
    }
  
    onWindowResize = () => {
      console.log('on window resize', window.innerWidth);
      this.setState({ width: window.innerWidth });
    }
    // cách 1
    renderContainerCSS = () => {
      let cssWidth = '50%';
      if (this.state.width <= 480){
        cssWidth = '100%';
      } else if(this.state.width <= 768){
        cssWidth = '75%';
      } else {
        cssWidth = '50%';
      }
      return `
        width: ${cssWidth};
        height: 100px;
        background-color: red;
      `;
    }
  
    renderStyle = () => {
      return `
        <style>
          slot {
            
          }
        </style>
      `;
    }
  // cách 2
    renderHTML = () => {
      this.style.cssText = this.renderContainerCSS();
      if (this.state.width <= 480){
        this.style.width = '100%';
      } else if(this.state.width <= 768){
        this.style.width = '75%';
      } else {
        this.style.width = '50%';
      }
      const html = `
        ${this.renderStyle()}
        <slot></slot>
        ${this.state.width}
      `;
      this.shadow.innerHTML = html;
    }
  });
    