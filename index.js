const path = require("path");

module.exports = {
  "root": path.join(__dirname, "fonts"),

  // where to find a locale's fonts in the fonts directory
  "locale-to-subdirs": { 
  },

  // what font types are enabled and what are the extensions of
  // the font files.
  //
  // valid types are embedded-opentype, woff, truetype, svg
  "enabled-types": [ "eot", "woff", "ttf", "svg" ],

  // The fonts. The name of the font must be the same as the font
  // in the fonts directory.
  "fonts": {
      "merriweathersans-bold": {
        "fontFamily": "Merriweather Sans",
        "fontStyle": "normal",
        "fontWeight": "700",
        "local": [ "Merriweather Sans Bold", "MerriweatherSans-Bold" ]
      },
      "merriweathersans-extrabold": {
        "fontFamily": "Merriweather Sans",
        "fontStyle": "normal",
        "fontWeight": "800",
        "local": [ "Merriweather Sans ExtraBold", "MerriweatherSans-ExtraBold" ]
      },
      "merriweathersans-light": {
        "fontFamily": "Merriweather Sans",
        "fontStyle": "normal",
        "fontWeight": "300",
        "local": [ "Merriweather Sans Light", "MerriweatherSans-Light" ]
      },
      "merriweathersans-regular": {
        "fontFamily": "Merriweather Sans",
        "fontStyle": "normal",
        "fontWeight": "400",
        "local": [ "Merriweather Sans Regular", "MerriweatherSans-Regular" ]
      }
  }
};
