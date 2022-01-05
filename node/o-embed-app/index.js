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
      <div style="transform: scale(2.0);">
        <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@scout2015/video/6718335390845095173" data-video-id="6718335390845095173" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@scout2015" href="https://www.tiktok.com/@scout2015">@scout2015</a> <p>Scramble up ur name & I’ll try to guess it😍❤️ <a title="foryoupage" target="_blank" href="https://www.tiktok.com/tag/foryoupage">#foryoupage</a> <a title="PetsOfTikTok" target="_blank" href="https://www.tiktok.com/tag/PetsOfTikTok">#petsoftiktok</a> <a title="aesthetic" target="_blank" href="https://www.tiktok.com/tag/aesthetic">#aesthetic</a></p> <a target="_blank" title="♬ original sound - tiff" href="https://www.tiktok.com/music/original-sound-6689804660171082501">♬ original sound - tiff</a> </section> </blockquote>
        <script async src="https://www.tiktok.com/embed.js"></script>
      </div>
      `;
      this.shadowRoot.innerHTML = `<iframe srcdoc='${html}' frameborder="0" scrolling="no" width="100%" height="100%"></iframe>`;
    }
}

customElements.define('o-embed', OEmbed);