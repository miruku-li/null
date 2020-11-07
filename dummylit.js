import {LitElement, html} from '/vndr/lit-element/lit-element.js'

class DummyLit extends LitElement {

  static get properties() { return {
    count: {type: Number},
    note: {type: Number}
  }}

  render() { console.log('DL>r'); return html`>
    ${this.count}
    <button @click=${this._count}>+</button>
    <input @input=${this._note} .value=${this.note} />
    <button @click=${this._reset}>reset</button>
  `}

  _reset () {
    this.count = 0
    this.note = ''
    this.dispatchEvent(new CustomEvent('change'))
  }
  _count () {
      this.count = (this.count??0) + 1
      this.dispatchEvent(new CustomEvent('change'))
  }
  _note (e) {
      this.note = e.target.value
      this.dispatchEvent(new CustomEvent('change'))
  }

  get value () { return {
      count: this.count,
      note: this.note
  }}
  set value(value) {
    value = Object(value)
    this.count = value?.count
    this.note = value?.note
  }
}

export default DummyLit
customElements.define('miruku-null-dummylit', DummyLit)

/*
import {} from '//unpkg.com/mithril'
import merge from '//unpkg.com/mergerino?module';;

const name = "miruku-null-dummy";

customElements.define(name, class extends HTMLElement {

  constructor() {
    super();
    Object.defineProperty(this, 'patch', {
      value: (payload, detail) => {
        const old = this.value
        this.value = merge(this.value, payload)
        this.dispatchEvent(new CustomEvent('change', {detail, old, new: this.value }))}})
  }

  connectedCallback() {
    this.render();
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

export default customElements.get(name)*/
