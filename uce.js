import {define} from '//unpkg.com/uce?module';

// see https://github.com/WebReflection/uce for docu

const name = 'miruku-null-uce'

define(name, {

  observedAttributes: ['start'],

  init() {
    this.count = this.props.start || 0
    this.text = 'sdf'
    this.render()
  },

  inc() {
    this.count++
    this.render()
    this.dispatch('change')
  },

  reset() {
    this.count = this.props.start
    this.dispatch('change')
  },

  bound: ['inc', 'reset'],

  dispatch(type, detail) {
    this.dispatchEvent(new CustomEvent(type, {detail}))
  },

  render() {
    this.html`
    <button onclick=${this.inc}>${this.count} click</button>
    <button onclick=${this.reset}>reset to ${this.props.start}</button>`;
  },



}); // const {test, other} = privates.get(this);

export default customElements.get(name)
