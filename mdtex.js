import md from '/vendor/markdownit.js'
import mk, {styleRef} from '/vendor/katex-markdownit.js'

md.use(mk)


const template = document.createElement('template');
template.innerHTML = `<style>@import "${styleRef}";</style>
<div></div>`;

export default class MMDTex extends HTMLElement {

  constructor() {
    super()
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.observer = new MutationObserver(()=>this.render());
    this.observer.observe(this, { childList: true, subtree: true });
    this.render()
  }

  set value(value) {
    this.innerText = value
  }

  get value() {
    return this.innerHTML
  }

  render() {
    this.shadowRoot.querySelector('div').innerHTML = md.render(this.innerHTML)
  }

}

customElements.define('m-mdtex', MMDTex)
