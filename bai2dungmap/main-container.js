class MainContainer extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: "open" });
  }

  static get observedAttributes() {
    return [];
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
    div {
      display: flex;
      flex-direction: column;
      position: relative;
      flex-shrink: 1;
      box-sizing: border-box;
    }
    div {
      width: 100%;
      height: 600px;
    }
      slot {
        background-color: white;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        max-width: 1024px;
        justify-content: center;
        align-items: center;
      }
    </style>
    <div>
      <slot></slot>
    </div>
    `
    this.shadow.innerHTML = html;
  }

}
customElements.define("main-container", MainContainer);
