import {} from '//unpkg.com/mithril'
import merge from '//unpkg.com/mergerino?module';;

const name = "miruku-null-dummy";

customElements.define(name, class extends HTMLElement {

  constructor() {
    super();
    this.render();
    Object.defineProperty(this, 'patch', {
      value: (payload, detail) => {
        const old = this.value
        this.value = merge(this.value, payload)
        this.dispatchEvent(new CustomEvent('input', {detail, old, new: this.value }))}})
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
      onclick: (e) => (e.stopPropagation(), this.patch({ count: x => (x||0)+1 }))
    }, '+'),
    m('input', {
      placeholder: 'notes...',
      value: this.value.note,
      oninput: (e) => (e.stopPropagation(), this.patch({note: e.target.value}))
    }),
    `(${this.value?.note?.length ?? 0})`,
    m('button', {
      onclick: (e) => (e.stopPropagation(), this.patch(()=>{}))
    }, 'reset')
  ]))}

})

export default customElements.get(name)
