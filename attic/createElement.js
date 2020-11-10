const {
  log,
  warn
} = console

const {
  getPrototypeOf: gPO,
  getOwnPropertyDescriptor: gOPD,
} = Object


// https://github.com/marijnh/crelt/blob/master/index.es.js
const createElement = async (elem, ...rest) => {
  try {
    elem = document.createElement(elem)
    const opts =  rest[0]
    if (opts && typeof opts == 'object' && !opts.nodeType && !Array.isArray(opts) ) {
      for (const [key, value] of Object.entries(opts)) {
        const propDesc = gOPD(gPO(elem), key)
        if (propDesc?.set || typeof value == 'function' || value == undefined ) {
          elem[key] = value
        } else if (key.match(/^[a-zA-Z0-9_-]+$/)) {
          elem.setAttribute(key, value)
        } rest = rest.slice(1)
      }
    } return elem
  } catch (ex) {
    warn(ex.message)
    throw "Fail to createElement"
  }
}



//createElement('http://localhost/null/dummy.js', {
createElement('textarea', {
  value: 'hello',
  oninput: ({target})=>log(target.value),
}).then(
  e => (document.body.innerHTML='', document.body.appendChild(e))
)

async function  route () {
  let hash = window.location.hash
  let [name, state] = hash.slice(1).split('/',2)
  let url, module, element
  try {
    url = '/'+name.slice(2).replace('-', '/')+'.js'
    module = await import (url)
    element = document.createElement(name)
    document.body.innerHTML=''
    document.body.appendChild(element)
  } catch (ex) {
    warn(ex.message)

  }
}
// https://github.com/marijnh/crelt/blob/master/index.es.js
