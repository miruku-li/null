# Component API

##### naming scheme
  * **name** `miruku`-`pacakge`-`name`
  * **src** `https://miruku.li/package/name.js`

*Example*
```js
import {} from 'https://miruku.li/package/name.js'

const elt = document.createElement('miruku-pacakge-name')
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
