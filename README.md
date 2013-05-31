# connect-fonts-merriweathersans

Merriweather Sans fontpack for [connect-fonts](https://github.com/shane-tomlinson/connect-fonts).

## Usage

1. Include [connect-fonts](https://github.com/shane-tomlinson/connect-fonts) in a node module.
```js
const font_middleware = require("connect-fonts");
```

2. Include the font packs that you want to serve.
```js
const font_pack  = require("connect-fonts-merriweathersans");
```

3. Add a middleware by calling the `setup` function.
```js
    app.use(font_middleware.setup({
      fonts: [ font_pack ],
      allow_origin: "https://exampledomain.com"
    }));
```

4. Add a link tag to include the font CSS.
```html
<link href="/merriweathersans-bold/fonts.css" type="text/css" rel="stylesheet"/ >
```

Multiple fonts from the family can be included by using a comma separated list of fonts:
```html
<link href="/merriweathersans-bold,merriweathersans-extrabold,merriweathersans-light,merriweathersans-regular/fonts.css" type="text/css" rel="stylesheet"/ >
```

Available fonts:
* merriweathersans-bold
* merriweathersans-extrabold
* merriweathersans-light
* merriweathersans-regular

Locale-optimised font sets can be served by specifying the locale in the fonts.css URL.
```html
<link href="/latin/merriweathersans-bold/fonts.css" type="text/css" rel="stylesheet"/ >
```

Available subsets:
* en
* latin

5. Set your CSS up to use the new font by using the "Merriweather Sans" font-family.
```
    body {
      font-family: 'Merriweather Sans', 'sans-serif', 'serif';
    }
```

## Font Info
Merriweather Sans

* Description: Merriweather Sans is a low contrast semi condesed sans serif typeface designed to be readable at very small sizes. MerriweatherSans is traditional in feeling despite a the modern shapes it has adopted for screens.
* Copyright: Copyright (c) 2013, Sorkin Type Co (www.sorkintype.com) with Reserved Font Name 'Merriweather'
* Trademark: Merriweather is a trademark of Sorkin Type Co.
* Designer: Eben Sorkin ( eben@eyebytes.com )
* Designer URL: sorkintype.com 
* Vendor: Eben Sorkin
* Vendor URL: sorkintype.com

## Development Info
* Homepage: https://github.com/shane-tomlinson/connect-fonts-merriweathersans
* Repo: https://github.com/shane-tomlinson/connect-fonts-merriweathersans

## Author
* Shane Tomlinson
* shane@shanetomlinson.com
* stomlinson@mozilla.com
* set117@yahoo.com
* https://shanetomlinson.com
* https://github.com/shane-tomlinson
* https://github.com/stomlinson
* @shane_tomlinson


## License

Software: Licenced under version 2.0 of the MPL

  https://www.mozilla.org/MPL/

Fonts: Licensed under version 1.1 of the SIL Open Font License

  http://scripts.sil.org/OFL

