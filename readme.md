
# Components for CS ...

##### naming scheme
  * **tag** `miruku`-`package`-`name`
  * **dist** `https://miruku.li/package/name.js`
  * **github** as part of `https://github.com/miruku-li/null`

*Examples*
  * Plain HTML [[Demo](https://flems.io/#0=N4IgzgpgNhDGAuEAmIBcIB0ALeBbKIANCLAPYB2YpMaJ1UAhgA6QrEBmAljGGgNqhyDXBFrY8BYmXKIZtADxhYAJ05N4AAngBPJhAC8AclykkAVxiGNYZbCM54LVAHpnuTsrMBrMxiidncgsoZ3NcXG0MACswQwA+eWclVXU4gB1yeXdPHwBaIKgoXLCIhLcPbzN84OKzcO04onBoOHhOCl50AEZUAGYAThAAXwBdIaA)]
```html
<script type='module' src='https://miruku.li/null/dummy.js'></script>
<miruku-null-dummy></miruku-null-dummy>
```
  * use `createElement` [[Demo](https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEAMwEskZUBtUKTAW2TQDoALAF0fmPSk6IBqECAC+RekxYhWAK2olIAoZxHlG2CACdOAAmBi9pbREZ6A5F064UAejuNy2gK4BrF63jk7UF-Hg7fBdGRgBPeRgLAB0oWOUYfUR4fQBePXwIMBDVVjBtRExBAFEkZgEACgsnVw8AWj8AuuDQsIsASljM7PLOVgAjCHwInGwhfABhdkp8CuTOdr5ITUpEbRF+zH7kvjwkME5yaGo0AGYUU4AGOsuUS-FJEAZmETyYRX5BYTRxAF0xIA)]
```js
import {} from 'https://miruku.li/null/dummy.js'

const elt = document.createElement('miruku-null-dummy')
document.body.appendChild(elt)
```
  * Instantiate from Class [[demo](https://flems.io/#0=N4Igxg9gdgzhA2BTEAucD4EMAONEBMQAaEAMwEskZUBtUKTAW2TQDoALAF0fmPSk6IBqECAC+RekxYhWAK2olIAoZxHlG2CACdOAAgDCmvaW0RGegORdOuFAHp7jctoCuAa1et45e1Ffw8Pb4royMAJ7yMJYAOlBxyjD6iPD6ALx6UIgA7oaaABQAlHH4EGChqqwARhD4kTjYQvgG7JT4+SmcxVmprNDkUNiu6Xr5wJyY2gDmiJxihWkAfIkIiN4QU-kT07OsAG6Y8K6IhXyQmpSI2iJVmFUpfHhIYJzk0NRoAAwonwC0ACwoACsAEZxJIQAxmCJWGAYIp+IJhGhxABdMRAA)]

```js
import Cmp from 'https://miruku.li/null/dummy.js'

const elt = new Cmp()
document.body.appendChild(elt)
elt.oninput = ({target})=>console.log(target.value)
```
  * **observablehq.com**
  As each component should provide a `value`-getter/setter an notify observers with `input` events it is consumable in Observabel notebooks. See https://observablehq.com/@tsc/miruku-li-null-dummy-js for an example.

##### attributes
Only for string boolean, not standardised

##### setter/getter
  * `set value(value) { ... }`
  * `get value() {}`

##### methods
  * `render()`

##### events
  * `input`
   Note: Setting `value` from outside will trigger the `render`-method as expected, but it won't trigger a change event. This is the standard behavior of HTML input elements. *cf. ...*
```js
const foo = document.createElement('textarea')
document.body.appendChild(foo)
foo.oninput = ({target}) => console.log(target.value)
foo.value = 'bar, bier' // no console output!
```


FIXME
  * deconstruction

### Notes

  * https://base64.guru/developers/data-uri/gzip
  * https://itty.bitty.site/edit
  * https://unpkg.com/csz
