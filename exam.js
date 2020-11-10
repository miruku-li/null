import m from '/vndr/mithril.mod.js'
import b from '/vendor/bss.js'

const {log} = console, {stringify} = JSON

let data = {
  title: 'exam 42',
  tasks: [
    {
      title: 'Aufgabe 2',
      module: '/null/qa.js?as=ex-qa',
      query:  {
        question: "Was ist die Antwort auf die Frage „nach dem Leben, dem Universum und dem ganzen Rest“?"
      }
    },
    {
      title: 'Aufgabe 3',
      module: '/null/qa.js?as=ex-qa2',
      query:  {
        question: "Was ist die Antwort auf die Frage „nach dem Leben, dem Universum und dem ganzen Rest“?"
      }
    },
  ]
}, registery = {}, state = { loaded: false}

let buttons = [0,1].map(_=>document.createElement('button'));

const index = {
  oninit: init,
  view: () => m('div',
    data.title, ` [${state.msg}]`,
    state.loaded && [
      data.tasks.map( (task,i) => m('div'+b`border: 1px solid silver`,
        m('div'+b`font-weight: bold`, task.title),
        m(registery[task.module], {
          oncreate: ({dom}) => dom.query = task.query,
          onchange: ({target}) => data.tasks[i].value = target.value
        })
      )),
      m('pre', stringify(data.tasks.map(t=>t.value), null, '  ' ))
    ]
  )
}

m.mount(document.body, index);

async function init () {
  state.msg = 'loading ...s'
  await Promise.all(data.tasks.map( async function (task) {
    log(registery[task.module] = (await import(task.module)).name)
  }))
  state.msg = 'ready'; state.loaded = true
  m.redraw()
}
