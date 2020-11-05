import Component from '/core/component.js';

// see also https://github.com/WebReflection/hyperHTML-Element for details
const {log} = console

export default class NullQA extends Component {

  created() { this.render() }

  render() {
    log('render2', this.state,'<')
    return this.html`
    <strong>Q:</strong> ${this.props?.question}
    <hr>
    <strong>A:</strong>${this.state.answer?.length}
    <textarea oninput=${this} style="height: 3em;width: 100%">${this.state.answer}</textarea>
    `;
  }

  oninput({target}) {
    this.change({answer: target.value}, { who:'user', what: 'input'}) }
}

NullQA.define('m-null-qa')
