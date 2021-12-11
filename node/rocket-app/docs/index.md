# Blog
## This is my-el

<custom-square l="100" c="red"></custom-square>

```js script
// import emojiPickerElement from 'https://cdn.skypack.dev/emoji-picker-element';

class Square extends HTMLElement {
  static get observedAttributes() {
    return ['c', 'l'];
  }
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const div = document.createElement('div');
    const style = document.createElement('style');
    shadow.appendChild(style);
    shadow.appendChild(div);
  }

  connectedCallback() {
    updateStyle(this);
  }
  attributeChangedCallback(name, oldValue, newValue) {
    updateStyle(this);
  }
}

customElements.define('custom-square', Square);

function updateStyle(elem) {
  const shadow = elem.shadowRoot;
  shadow.querySelector('style').textContent = `
    div {
      width: ${elem.getAttribute('l')}px;
      height: ${elem.getAttribute('l')}px;
      background-color: ${elem.getAttribute('c')};
    }
  `;
}
```
