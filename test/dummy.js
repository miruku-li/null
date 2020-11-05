import Component from '/core/component.js';

// see also https://github.com/WebReflection/hyperHTML-Element for details

export default class NullDummy extends Component {

  get defaultState() {
    return {clicks: 0, text: '123'};
  }

  created() { this.render() }

  render() {
    return this.html`
    Hello <button onclick=${this}>click</button> ( ${this.state.clicks} )
    <input oninput=${this} value="${this.state.text}">`;
  }

  onclick() {
    this.change({clicks: v=>v+1}, {subject:'user', verb:'click'});
  }
  oninput({target}) {
    this.change({text: target.value}, {subject:'user', verb:'input'});
  }


}

NullDummy.define('m-null-dummy')
