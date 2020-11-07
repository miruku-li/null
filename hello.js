import {LitElement, html} from '//unpkg.com/lit-element?module'

class MyElement extends LitElement {

  static get properties() { return {
    input: {type: String}
  }}


  render() { return html`
    <h1>Hello, ${this.input}!</h1>
    <input @input=${this._input} value=${this.input||''} />
  `}

  _input (e) {
      this.input = e.target.value
      this.dispatchEvent(new CustomEvent('change'))
  }

  get value () {
    return {input: this.input}
  }
  set value(value) {
    Object.assign(this, Object(value))
  }
}

export default MyElement
customElements.define('m-e', MyElement)