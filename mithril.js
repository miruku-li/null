import {} from '//unpkg.com/mithril'
import merge from '//unpkg.com/mergerino?module';;

export default class Mithril extends HTMLElement {

  constructor() {
    super();
    this.render();
    Object.defineProperty(this, 'patch', {
      value: (payload, detail) => {
        const oldState = this.state
        const newState = merge(this.state, payload)
        console.log('patch', oldState, newState, detail)
        this.state = newState
        this.dispatchEvent(new CustomEvent('change', {detail, oldState, newState }))}})
  }

  get state () {
    return this._state$ || { }
  }

  set state (value) {
    Object.defineProperty(this, '_state$', { configurable: true, value })
    this.render()
  }

  render() { m.render(this, m('div', [
    this.state?.count || 0,
    m('button', {
      onclick: () => this.patch({ count: x => (x||0)+1 })
    }, '+'),
    m('input', {
      placeholder: 'notes...',
      value: this.state.note,
      oninput: ({target}) => this.patch({note: target.value})
    }),
    `(${this.state?.note?.length ?? 0})`,
    m('button', {
      onclick: () => this.state = {}
    }, 'reset')
  ]))}
}

customElements.define("miruku-null-mithril", Mithril);
