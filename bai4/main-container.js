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
        const list = [1,2,3,4,5,6,7,8];
      const html = `
      <style>
        div {
          display: flex;
          flex-direction: column;
          position: relative;
          flex-shrink: 0;
          box-sizing: border-box;
        }
        div {
          width: 100vw;
          align-items: center;
        }
        slot {
          width: 100%;
          background-color: pink;
          display: flex;
          flex-wrap: wrap;
          max-width: 1024px;
          justify-content: center;
          align-items: center;
        }
      </style>
      <div>
        <slot>
        </slot>
      </div>
      `
      this.shadow.innerHTML = html;
    }
  
  }
  customElements.define("main-container", MainContainer);
  