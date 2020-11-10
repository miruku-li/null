import {LitElement, html, css} from '/vndr/lit-element/lit-element.js'
import merge from '/vndr/mergerino.js'
import {dispatch, queryParam} from '/core/utils.js';

const {log} = console
const {stringify} = JSON

export const name = queryParam(import.meta.url, 'as', "miruku-null-qa")

const text = {
    de: { q: 'Frage', a: 'Antwort',  placeholder: "Deine Antwort ..."},
    en: { q: 'Question', a: 'Answer', placeholder: "Your answer ..." }
}[queryParam(import.meta.url, 'lang', "de")]

export default class Element extends LitElement {

  static get styles() { return css`
    .fc { display: flex; flex-direction: column; }
  `}

  static get properties() { return {
    query: {type: Object},  // will never be touched from the inside
    value: {type: Object}   // internal update will dispach 'change' event
  }}

  render() { return html`
    <table><tr>
      <th>${text.q}</th>
      <td>${this.query.question}</td>
    </tr><tr>
      <th>${text.a}</th>
      <td class=fc>
        <textarea
          placeholder=${text.placeholder}
          @input=${({target}) => {
            this.value = merge(this.value, {
              answer: target.value,adsf
            })
            dispatch(this, 'change', 'input@answer')
          }}
        >${this.value?.answer}</textarea></div>
      </td>
    </tr></table>
  `}

}

customElements.define(name, Element)
