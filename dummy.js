import Component from '/core/component.js';

// see also https://github.com/WebReflection/hyperHTML-Element for details

export default class NullDummy extends Component {

  get defaultState() {
    return {clicks: 0, text: 'bla'};
  }

  created() { this.render() }

  render() {
    return this.html`
    Hello <button onclick=${this}>click</button> ( ${this.state.clicks} )
    <input oninput=${this} value="${this.state.text}">`;
  }

  onclick() {
    this.patch({clicks: v=>v+1});
  }
  oninput({target}) {
    this.patch({text: target.value}, {detail: 'textfiled input'});
  }


}

NullDummy.define('m-null-dummy')
