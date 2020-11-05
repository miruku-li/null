# Component API

##### naming scheme
  * **tag** `miruku`-`pacakge`-`name`
  * **src** `https://miruku.li/package/name.js`

*Example* [Demo](https://flems.io/#0=N4IgZglgNgpgziAXAbVAOwIYFsZJAOgAsAXLKEAGhAGMB7NYmBvEAXwvW10QICsEqdBk2J4IWAA60ATsQAEwVnLDTaWOQHISxCXEQB6fVgjSArgGtT+KBH1pTUKPtPUY+fhoA6ab0LjyYKHkAXjkAE1pqUxwGfGppGAxGAFFYGOIACg1jM0sAWntHPJcYDQBKbwio9PwAI1owgE98DAkJJjCAYUJoMIzA4gq0OBhiAElhaQA3DCgMjLK5YIA+OQH8CDRqBYo5AEYABiOyyhAR2GpiCHoEHgAWRABmO7YOEEwcPDi4ARp6RmYPDYAF1WEA) @ flems.io
```js
import {} from 'https://miruku.li/null/uce.js'

const elt = document.createElement('miruku-null-uce')
document.body.appendChild(elt)
setInterval(() => elt.inc(), 1000)
```
*Alternative* [Demo](N4IgZglgNgpgziAXAbVAOwIYFsZJAOgAsAXLKEAGhAGMB7NYmBvEAXwvW10QICsEqdBk2J4IWAA60ATsQAEAVQDCAUTlhptLHIDkJYhLiIA9MawRpAVwDWl) @ flems.io

```js
import UCE from 'https://miruku.li/null/uce.js'
const elt = new UCE()
// ...
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
