class OEmbed extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({mode: 'open'});
    }
  
    connectedCallback() {
      this.render();
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
    }
  
    async render() {
      const html = `
      <blockquote class="twitter-tweet" data-dnt="true" align="center"><p lang="ja" dir="ltr">insta360で撮影した動画、Google Driveにあげていて、それをGoogle Photosで直接アップロードできた。(Google Drive から アップロード という選択肢)<br><br>ストレージは、共通しているため、増加なし。</p>— silverbirder (@silver_birder) <a href="https://twitter.com/silver_birder/status/1475622738236944385?ref_src=twsrc%5Etfw">December 28, 2021</a></blockquote><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      `;
      this.shadowRoot.innerHTML = `<iframe srcdoc='${html}'></iframe>`;
    }
}

customElements.define('o-embed', OEmbed);