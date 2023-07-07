
customElements.define("main-container", class extends CoreElement {
  constructor() {
    super();
  }

  renderContainerCSS = () => {
    return `
    box-sizing: border-box;
    width:100%;
    height:100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    `;
  }

  renderStyle = () => {
    return `
    <style>
    slot{
      background-color: black;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
  
    }
    h1{
      background-color: black;  
      width: 100%;
      height: 50px;
      color: white;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0;
  }
    </style>
    `;
  }

  renderHTML = () => {
    this.style.cssText = this.renderContainerCSS();
    const html = `
      ${this.renderStyle()}
      <h1>Who's watching?</h1>
      <slot></slot>
    `;
    this.shadow.innerHTML = html;
  }
});