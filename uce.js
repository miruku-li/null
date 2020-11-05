import {define} from '//unpkg.com/uce?module';

// see https://github.com/WebReflection/uce for docu

const name = 'miruku-null-uce'

define(name, {

  // observedAttributes: ['start'],

  init() { this.count = 0 },

  connected() { this.render() },
  inc() {
    this.count++
    this.render()
    this.changed()
  },

  reset() {
    this.count = 0
    this.render()
    this.changed()
  },

  bound: ['inc', 'reset'],

  changed(detail) {
    this.dispatchEvent(new CustomEvent('change', {detail}))
  },

  render() {
    this.html`${this.count}
    <button onclick=${this.inc}>+</button>
    <button onclick=${this.reset}>reset</button>`;
  },

});

export default customElements.get(name)
