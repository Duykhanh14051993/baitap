customElements.define("main-container", class extends CoreElement {
  constructor() {
    super();
  }

  renderContainerCSS = () => {
    return `
    box-sizing: border-box;
    width:100%;
    height:100vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    `;
  }

  renderStyle = () => {
    return `
    <style>
    slot {
      background-color: #464d55;
      width: 100px;
      height: 100px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
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