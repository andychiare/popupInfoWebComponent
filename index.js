// Create a class for the element
class PopUpInfo extends HTMLElement {
  constructor() {
    // Always call super first in constructor
    super();
  }

  connectedCallback(){
    // Create a shadow root
    const shadow = this.attachShadow({mode: 'open'});

    // Create spans
    const wrapper = document.createElement('span');
    wrapper.setAttribute('class', 'wrapper');

    const icon = document.createElement('span');
    icon.setAttribute('class', 'icon');
    icon.setAttribute('tabindex', 0);

    const info = document.createElement('span');
    info.setAttribute('class', 'info');

    // Take attribute content and put it inside the info span
    const text = this.getAttribute('data-text');
    info.textContent = text;

    // Insert icon
    let imgUrl;
    if(this.hasAttribute('img')) {
      imgUrl = this.getAttribute('img');
    } else {
      imgUrl = 'data:image/png;base64,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';
    }

    const img = document.createElement('img');
    img.src = imgUrl;
    icon.appendChild(img);

    // Create some CSS to apply to the shadow dom
    const style = document.createElement('style');
    console.log(style.isConnected);

    style.textContent = `
      .wrapper {
        position: relative;
      }

      .info {
        font-size: 0.8rem;
        width: 200px;
        display: inline-block;
        border: 1px solid black;
        padding: 10px;
        background: white;
        border-radius: 10px;
        opacity: 0;
        transition: 0.6s all;
        position: absolute;
        bottom: 20px;
        left: 10px;
        z-index: 3;
      }

      img {
        width: 1.2rem;
      }

      .icon:hover + .info, .icon:focus + .info {
        opacity: 1;
      }
    `;

    // Attach the created elements to the shadow dom
    shadow.appendChild(style);
    console.log(style.isConnected);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}

// Define the new element
customElements.define('popup-info', PopUpInfo);
