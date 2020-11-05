import {define} from '//unpkg.com/uce?module';
import merge from '//unpkg.com/mergerino?module'

const name = 'miruku-null-uce'

define(name, {

  get state () {
    return this._state$ || { }
  },

  set state (value) {
    Object.defineProperty(this, '_state$', {
        configurable: true,
        value: merge(this.state, value)
    })
    this.render()
    this.changed({ timestamp: Date.now()})
  },

  changed(detail) {
    this.dispatchEvent(new CustomEvent('change', { detail }))
  },

  render() {
    this.html`${this.state?.count||0}
    <button
      onclick=${ () => this.state = {count: x=> (x||0)+1} }
    >+</button>
    <input
      placeholder='notes...'
      value='${this.state.note||''}'
      oninput=${ ({target}) => this.state = {note: target.value} }
    /> (${this.state?.note?.length ?? 0})
    <button name='reset'
      onclick=${ () => {
        this.state = () => {}

      }}
    >reset</button>`;
    const ipt = this.querySelector('input')
    if (ipt.value!=this.state?.note) { ipt.value = this.state.note||''}
  },

});

export default customElements.get(name)
