# Component API

##### naming scheme
  * **tag** `miruku`-`pacakge`-`name`
  * **src** `https://miruku.li/package/name.js`

*Example* [Demo](https://flems.io/#0=N4IgZglgNgpgziAXAbVAOwIYFsZJAOgAsAXLKEAGhAGMB7NYmBvEAXwvW10QICsEqdBk2J4IWAA60ATsQAEwVnLDTaWOQHISxCXEQB6fVgjSArgGtT+KBH1pTUKPtPUY+fhoA6ab0LjyYKHkAXjkAE1pqUxwGfGppGAxGAFFYGOIACg1jM0sAWntHPJcYDQBKbwio9PwAI1owgE98DAkJJjCAYUJoMIzA4jLKEDhAmGpiCHoEHgBmRFmABjYOEEwcPDi4ARp6RmYeNgBdViA) @ flems.io
```js
import {} from 'https://miruku.li/null/uce.js'

const elt = document.createElement('miruku-null-uce')
document.body.appendChild(elt)
```
*Alternative* [Demo](https://flems.io/#0=N4IgZglgNgpgziAXAbVAOwIYFsZJAOgAsAXLKEAGhAGMB7NYmBvEAXwvW10QICsEqdBk2J4IWAA60ATsQAEAVQDCAUTlhptLHIDkJYhLiIA9MawRpAVwDWl-FAjG0lqFGOXqMfPx0AdNEJw8jBQ8gC8cmgwAO6KqgAUAJT+ACa01JY4DPgARrQpAJ74GBISTClKhNAp8SHEiZQgcCEw1MQQ9Ag8AEyIAMwADGwcIJg4ePjUcAI09IzMPGwAuqxAA) @ flems.io

```js
import UCE from 'https://miruku.li/null/uce.js'
const elt = new UCE()
document.body.appendChild(elt)
```


##### attributes
Only for string boolean, not standardised

##### setter/getter
  * `set state(value) { ... }`
  * `get state() {}`
  * `set config(value) { ... }`
  * `get config() {}`

##### methods
  * `focus()`
  * `reload()`
  * `render()`

##### events
  * `change` @HTMLElement
  Note: Setting the state from outside will trigger the `render`-method as expected, but it won't trigger a change event. This is the standard behavior of HTML input elements.
```js
const foo = document.createElement('textarea')
document.body.appendChild(foo)
foo.oninput = ({target}) => console.log(target.value)
foo.value = 'bar, bier' // no console output!
```


fixme
  * deconstruction

# Notes

  * https://base64.guru/developers/data-uri/gzip
  * https://itty.bitty.site/edit
  * https://unpkg.com/csz
