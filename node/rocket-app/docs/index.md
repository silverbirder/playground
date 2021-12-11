# Blog
## This is my-el

<my-el></my-el>

```js script
import { LitElement, html } from 'https://unpkg.com/lit-element?module';

class MyEl extends LitElement {
    render() {
        return html`
        <h1>Hello, World!</h1>
        `;
    }
}

customElements.define('my-el', MyEl);
```
