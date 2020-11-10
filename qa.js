import {LitElement, html, css} from '/vndr/lit-element/lit-element.js'
import {dispatch, queryParam} from '/core/utils.js';

const {log} = console
const {stringify} = JSON

const name = queryParam(import.meta.url, 'as', "miruku-null-qa")

class Element extends LitElement {

  static get styles() { return css`
    .fc { display: flex; flex-direction: column; }
  `}

  static get properties() { return {
    query: {type: Object},
    value: {type: Object}
  }}

  render() { return html`
    <table><tr>
      <th>Q</th>
      <td>${this.query.question}</td>
    </tr><tr>
      <th>A</th>
      <td class=fc>
        <textarea
          placeholder="Deine Antwort ..."
          @input=${({target}) => {
            this.value = {answer: target.value}
            dispatch(this, 'change', 'input@answer')
          }}
        >${this.value?.answer}</textarea></div>
      </td>
    </tr></table>
  `}


}

customElements.define(name, Element)
export default Element;
export {name}
