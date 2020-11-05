import {} from '//unpkg.com/mithril'
import merge from '//unpkg.com/mergerino?module';;

export default class Mithril extends HTMLElement {

  constructor() {
    super();
    this.render();
    Object.defineProperty(this, 'patch', {
      value: (payload, detail) => {
        const old = this.value
        this.value = merge(this.value, payload)
        this.dispatchEvent(new CustomEvent('change', {detail, old, new: this.value }))}})
  }

  get value () {
    return this._value$ || { }
  }

  set value (value) {
    Object.defineProperty(this, '_value$', { configurable: true, value })
    this.render()
  }

  render() { m.render(this, m('div', [
    this.value?.count || 0,
    m('button', {
      onclick: () => this.patch({ count: x => (x||0)+1 })
    }, '+'),
    m('input', {
      placeholder: 'notes...',
      value: this.value.note,
      oninput: ({target}) => this.patch({note: target.value})
    }),
    `(${this.value?.note?.length ?? 0})`,
    m('button', {
      onclick: () => this.value = {}
    }, 'reset')
  ]))}
}

customElements.define("miruku-null-mithril", Mithril);
