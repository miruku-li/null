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
  * `onchange[ed]`
  * `onload[ed]`
  *

fixme
  * deconstruction

# Notes

  * https://base64.guru/developers/data-uri/gzip
  * https://itty.bitty.site/edit
  * https://unpkg.com/csz
