
customElements.define("main-container", class extends CoreElement {
  constructor() {
    super();
  }

  renderContainerCSS = () => {
    return `
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    `;
  }

  renderStyle = () => {
    return `
    <style>
    slot{
    display: flex;
    flex-direction: column;  
  }
    </style>
    `;
  }

  renderHTML = () => {
    this.style.cssText = this.renderContainerCSS();
    const html = `
      ${this.renderStyle()}
      <slot></slot>
    `;
    this.shadow.innerHTML = html;
  }
});