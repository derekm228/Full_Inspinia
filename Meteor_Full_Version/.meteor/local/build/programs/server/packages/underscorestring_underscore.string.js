(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;

(function () {

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// packages/underscorestring:underscore.string/dist/underscore.string.js                                    //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.s=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var trim = _dereq_('./trim');                                                                               // 2
var decap = _dereq_('./decapitalize');                                                                      // 3
                                                                                                            // 4
module.exports = function camelize(str, decapitalize) {                                                     // 5
  str = trim(str).replace(/[-_\s]+(.)?/g, function(match, c) {                                              // 6
    return c ? c.toUpperCase() : "";                                                                        // 7
  });                                                                                                       // 8
                                                                                                            // 9
  if (decapitalize === true) {                                                                              // 10
    return decap(str);                                                                                      // 11
  } else {                                                                                                  // 12
    return str;                                                                                             // 13
  }                                                                                                         // 14
};                                                                                                          // 15
                                                                                                            // 16
},{"./decapitalize":9,"./trim":60}],2:[function(_dereq_,module,exports){                                    // 17
var makeString = _dereq_('./helper/makeString');                                                            // 18
                                                                                                            // 19
module.exports = function capitalize(str) {                                                                 // 20
  str = makeString(str);                                                                                    // 21
  return str.charAt(0).toUpperCase() + str.slice(1);                                                        // 22
};                                                                                                          // 23
                                                                                                            // 24
},{"./helper/makeString":19}],3:[function(_dereq_,module,exports){                                          // 25
var makeString = _dereq_('./helper/makeString');                                                            // 26
                                                                                                            // 27
module.exports = function chars(str) {                                                                      // 28
  return makeString(str).split('');                                                                         // 29
};                                                                                                          // 30
                                                                                                            // 31
},{"./helper/makeString":19}],4:[function(_dereq_,module,exports){                                          // 32
module.exports = function chop(str, step) {                                                                 // 33
  if (str == null) return [];                                                                               // 34
  str = String(str);                                                                                        // 35
  step = ~~step;                                                                                            // 36
  return step > 0 ? str.match(new RegExp('.{1,' + step + '}', 'g')) : [str];                                // 37
};                                                                                                          // 38
                                                                                                            // 39
},{}],5:[function(_dereq_,module,exports){                                                                  // 40
var capitalize = _dereq_('./capitalize');                                                                   // 41
var camelize = _dereq_('./camelize');                                                                       // 42
var makeString = _dereq_('./helper/makeString');                                                            // 43
                                                                                                            // 44
module.exports = function classify(str) {                                                                   // 45
  str = makeString(str);                                                                                    // 46
  return capitalize(camelize(str.replace(/[\W_]/g, ' ')).replace(/\s/g, ''));                               // 47
};                                                                                                          // 48
                                                                                                            // 49
},{"./camelize":1,"./capitalize":2,"./helper/makeString":19}],6:[function(_dereq_,module,exports){          // 50
var trim = _dereq_('./trim');                                                                               // 51
                                                                                                            // 52
module.exports = function clean(str) {                                                                      // 53
  return trim(str).replace(/\s+/g, ' ');                                                                    // 54
};                                                                                                          // 55
                                                                                                            // 56
},{"./trim":60}],7:[function(_dereq_,module,exports){                                                       // 57
var makeString = _dereq_('./helper/makeString');                                                            // 58
                                                                                                            // 59
module.exports = function(str, substr) {                                                                    // 60
  str = makeString(str);                                                                                    // 61
  substr = makeString(substr);                                                                              // 62
                                                                                                            // 63
  if (str.length === 0 || substr.length === 0) return 0;                                                    // 64
                                                                                                            // 65
  var count = 0,                                                                                            // 66
    pos = 0,                                                                                                // 67
    length = substr.length;                                                                                 // 68
                                                                                                            // 69
  while (true) {                                                                                            // 70
    pos = str.indexOf(substr, pos);                                                                         // 71
    if (pos === -1) break;                                                                                  // 72
    count++;                                                                                                // 73
    pos += length;                                                                                          // 74
  }                                                                                                         // 75
                                                                                                            // 76
  return count;                                                                                             // 77
};                                                                                                          // 78
                                                                                                            // 79
},{"./helper/makeString":19}],8:[function(_dereq_,module,exports){                                          // 80
var trim = _dereq_('./trim');                                                                               // 81
                                                                                                            // 82
module.exports = function dasherize(str) {                                                                  // 83
  return trim(str).replace(/([A-Z])/g, '-$1').replace(/[-_\s]+/g, '-').toLowerCase();                       // 84
};                                                                                                          // 85
                                                                                                            // 86
},{"./trim":60}],9:[function(_dereq_,module,exports){                                                       // 87
var makeString = _dereq_('./helper/makeString');                                                            // 88
                                                                                                            // 89
module.exports = function decapitalize(str) {                                                               // 90
  str = makeString(str);                                                                                    // 91
  return str.charAt(0).toLowerCase() + str.slice(1);                                                        // 92
};                                                                                                          // 93
                                                                                                            // 94
},{"./helper/makeString":19}],10:[function(_dereq_,module,exports){                                         // 95
var makeString = _dereq_('./helper/makeString');                                                            // 96
                                                                                                            // 97
function getIndent(str) {                                                                                   // 98
  var matches = str.match(/^[\s\\t]*/gm);                                                                   // 99
  var indent = matches[0].length;                                                                           // 100
                                                                                                            // 101
  for (var i = 1; i < matches.length; i++) {                                                                // 102
    indent = Math.min(matches[i].length, indent);                                                           // 103
  }                                                                                                         // 104
                                                                                                            // 105
  return indent;                                                                                            // 106
}                                                                                                           // 107
                                                                                                            // 108
module.exports = function dedent(str, pattern) {                                                            // 109
  str = makeString(str);                                                                                    // 110
  var indent = getIndent(str);                                                                              // 111
  var reg;                                                                                                  // 112
                                                                                                            // 113
  if (indent === 0) return str;                                                                             // 114
                                                                                                            // 115
  if (typeof pattern === 'string') {                                                                        // 116
    reg = new RegExp('^' + pattern, 'gm');                                                                  // 117
  } else {                                                                                                  // 118
    reg = new RegExp('^[ \\t]{' + indent + '}', 'gm');                                                      // 119
  }                                                                                                         // 120
                                                                                                            // 121
  return str.replace(reg, '');                                                                              // 122
};                                                                                                          // 123
                                                                                                            // 124
},{"./helper/makeString":19}],11:[function(_dereq_,module,exports){                                         // 125
var makeString = _dereq_('./helper/makeString');                                                            // 126
var toPositive = _dereq_('./helper/toPositive');                                                            // 127
                                                                                                            // 128
module.exports = function endsWith(str, ends, position) {                                                   // 129
  str = makeString(str);                                                                                    // 130
  ends = '' + ends;                                                                                         // 131
  if (typeof position == 'undefined') {                                                                     // 132
    position = str.length - ends.length;                                                                    // 133
  } else {                                                                                                  // 134
    position = Math.min(toPositive(position), str.length) - ends.length;                                    // 135
  }                                                                                                         // 136
  return position >= 0 && str.indexOf(ends, position) === position;                                         // 137
};                                                                                                          // 138
                                                                                                            // 139
},{"./helper/makeString":19,"./helper/toPositive":21}],12:[function(_dereq_,module,exports){                // 140
var makeString = _dereq_('./helper/makeString');                                                            // 141
var escapeChars = _dereq_('./helper/escapeChars');                                                          // 142
var reversedEscapeChars = {};                                                                               // 143
                                                                                                            // 144
for(var key in escapeChars) reversedEscapeChars[escapeChars[key]] = key;                                    // 145
reversedEscapeChars["'"] = '#39';                                                                           // 146
                                                                                                            // 147
module.exports = function escapeHTML(str) {                                                                 // 148
  return makeString(str).replace(/[&<>"']/g, function(m) {                                                  // 149
    return '&' + reversedEscapeChars[m] + ';';                                                              // 150
  });                                                                                                       // 151
};                                                                                                          // 152
                                                                                                            // 153
},{"./helper/escapeChars":17,"./helper/makeString":19}],13:[function(_dereq_,module,exports){               // 154
module.exports = function() {                                                                               // 155
  var result = {};                                                                                          // 156
                                                                                                            // 157
  for (var prop in this) {                                                                                  // 158
    if (!this.hasOwnProperty(prop) || prop.match(/^(?:include|contains|reverse|join)$/)) continue;          // 159
    result[prop] = this[prop];                                                                              // 160
  }                                                                                                         // 161
                                                                                                            // 162
  return result;                                                                                            // 163
};                                                                                                          // 164
                                                                                                            // 165
},{}],14:[function(_dereq_,module,exports){                                                                 // 166
//  Underscore.string                                                                                       // 167
//  (c) 2010 Esa-Matti Suuronen <esa-matti aet suuronen dot org>                                            // 168
//  Underscore.string is freely distributable under the terms of the MIT license.                           // 169
//  Documentation: https://github.com/epeli/underscore.string                                               // 170
//  Some code is borrowed from MooTools and Alexandru Marasteanu.                                           // 171
//  Version '3.0.3'                                                                                         // 172
                                                                                                            // 173
'use strict';                                                                                               // 174
                                                                                                            // 175
function s(value) {                                                                                         // 176
  /* jshint validthis: true */                                                                              // 177
  if (!(this instanceof s)) return new s(value);                                                            // 178
  this._wrapped = value;                                                                                    // 179
}                                                                                                           // 180
                                                                                                            // 181
s.VERSION = '3.0.3';                                                                                        // 182
                                                                                                            // 183
s.isBlank          = _dereq_('./isBlank');                                                                  // 184
s.stripTags        = _dereq_('./stripTags');                                                                // 185
s.capitalize       = _dereq_('./capitalize');                                                               // 186
s.decapitalize     = _dereq_('./decapitalize');                                                             // 187
s.chop             = _dereq_('./chop');                                                                     // 188
s.trim             = _dereq_('./trim');                                                                     // 189
s.clean            = _dereq_('./clean');                                                                    // 190
s.count            = _dereq_('./count');                                                                    // 191
s.chars            = _dereq_('./chars');                                                                    // 192
s.swapCase         = _dereq_('./swapCase');                                                                 // 193
s.escapeHTML       = _dereq_('./escapeHTML');                                                               // 194
s.unescapeHTML     = _dereq_('./unescapeHTML');                                                             // 195
s.splice           = _dereq_('./splice');                                                                   // 196
s.insert           = _dereq_('./insert');                                                                   // 197
s.replaceAll       = _dereq_('./replaceAll');                                                               // 198
s.include          = _dereq_('./include');                                                                  // 199
s.join             = _dereq_('./join');                                                                     // 200
s.lines            = _dereq_('./lines');                                                                    // 201
s.dedent           = _dereq_('./dedent');                                                                   // 202
s.reverse          = _dereq_('./reverse');                                                                  // 203
s.startsWith       = _dereq_('./startsWith');                                                               // 204
s.endsWith         = _dereq_('./endsWith');                                                                 // 205
s.pred             = _dereq_('./pred');                                                                     // 206
s.succ             = _dereq_('./succ');                                                                     // 207
s.titleize         = _dereq_('./titleize');                                                                 // 208
s.camelize         = _dereq_('./camelize');                                                                 // 209
s.underscored      = _dereq_('./underscored');                                                              // 210
s.dasherize        = _dereq_('./dasherize');                                                                // 211
s.classify         = _dereq_('./classify');                                                                 // 212
s.humanize         = _dereq_('./humanize');                                                                 // 213
s.ltrim            = _dereq_('./ltrim');                                                                    // 214
s.rtrim            = _dereq_('./rtrim');                                                                    // 215
s.truncate         = _dereq_('./truncate');                                                                 // 216
s.prune            = _dereq_('./prune');                                                                    // 217
s.words            = _dereq_('./words');                                                                    // 218
s.pad              = _dereq_('./pad');                                                                      // 219
s.lpad             = _dereq_('./lpad');                                                                     // 220
s.rpad             = _dereq_('./rpad');                                                                     // 221
s.lrpad            = _dereq_('./lrpad');                                                                    // 222
s.sprintf          = _dereq_('./sprintf');                                                                  // 223
s.vsprintf         = _dereq_('./vsprintf');                                                                 // 224
s.toNumber         = _dereq_('./toNumber');                                                                 // 225
s.numberFormat     = _dereq_('./numberFormat');                                                             // 226
s.strRight         = _dereq_('./strRight');                                                                 // 227
s.strRightBack     = _dereq_('./strRightBack');                                                             // 228
s.strLeft          = _dereq_('./strLeft');                                                                  // 229
s.strLeftBack      = _dereq_('./strLeftBack');                                                              // 230
s.toSentence       = _dereq_('./toSentence');                                                               // 231
s.toSentenceSerial = _dereq_('./toSentenceSerial');                                                         // 232
s.slugify          = _dereq_('./slugify');                                                                  // 233
s.surround         = _dereq_('./surround');                                                                 // 234
s.quote            = _dereq_('./quote');                                                                    // 235
s.unquote          = _dereq_('./unquote');                                                                  // 236
s.repeat           = _dereq_('./repeat');                                                                   // 237
s.naturalCmp       = _dereq_('./naturalCmp');                                                               // 238
s.levenshtein      = _dereq_('./levenshtein');                                                              // 239
s.toBoolean        = _dereq_('./toBoolean');                                                                // 240
s.exports          = _dereq_('./exports');                                                                  // 241
s.escapeRegExp     = _dereq_('./helper/escapeRegExp');                                                      // 242
                                                                                                            // 243
// Aliases                                                                                                  // 244
s.strip     = s.trim;                                                                                       // 245
s.lstrip    = s.ltrim;                                                                                      // 246
s.rstrip    = s.rtrim;                                                                                      // 247
s.center    = s.lrpad;                                                                                      // 248
s.rjust     = s.lpad;                                                                                       // 249
s.ljust     = s.rpad;                                                                                       // 250
s.contains  = s.include;                                                                                    // 251
s.q         = s.quote;                                                                                      // 252
s.toBool    = s.toBoolean;                                                                                  // 253
s.camelcase = s.camelize;                                                                                   // 254
                                                                                                            // 255
                                                                                                            // 256
// Implement chaining                                                                                       // 257
s.prototype = {                                                                                             // 258
  value: function value() {                                                                                 // 259
    return this._wrapped;                                                                                   // 260
  }                                                                                                         // 261
};                                                                                                          // 262
                                                                                                            // 263
function fn2method(key, fn) {                                                                               // 264
    if (typeof fn !== "function") return;                                                                   // 265
    s.prototype[key] = function() {                                                                         // 266
      var args = [this._wrapped].concat(Array.prototype.slice.call(arguments));                             // 267
      var res = fn.apply(null, args);                                                                       // 268
      // if the result is non-string stop the chain and return the value                                    // 269
      return typeof res === 'string' ? new s(res) : res;                                                    // 270
    };                                                                                                      // 271
}                                                                                                           // 272
                                                                                                            // 273
// Copy functions to instance methods for chaining                                                          // 274
for (var key in s) fn2method(key, s[key]);                                                                  // 275
                                                                                                            // 276
fn2method("tap", function tap(string, fn) {                                                                 // 277
  return fn(string);                                                                                        // 278
});                                                                                                         // 279
                                                                                                            // 280
function prototype2method(methodName) {                                                                     // 281
  fn2method(methodName, function(context) {                                                                 // 282
    var args = Array.prototype.slice.call(arguments, 1);                                                    // 283
    return String.prototype[methodName].apply(context, args);                                               // 284
  });                                                                                                       // 285
}                                                                                                           // 286
                                                                                                            // 287
var prototypeMethods = [                                                                                    // 288
  "toUpperCase",                                                                                            // 289
  "toLowerCase",                                                                                            // 290
  "split",                                                                                                  // 291
  "replace",                                                                                                // 292
  "slice",                                                                                                  // 293
  "substring",                                                                                              // 294
  "substr",                                                                                                 // 295
  "concat"                                                                                                  // 296
];                                                                                                          // 297
                                                                                                            // 298
for (var key in prototypeMethods) prototype2method(prototypeMethods[key]);                                  // 299
                                                                                                            // 300
                                                                                                            // 301
module.exports = s;                                                                                         // 302
                                                                                                            // 303
},{"./camelize":1,"./capitalize":2,"./chars":3,"./chop":4,"./classify":5,"./clean":6,"./count":7,"./dasherize":8,"./decapitalize":9,"./dedent":10,"./endsWith":11,"./escapeHTML":12,"./exports":13,"./helper/escapeRegExp":18,"./humanize":22,"./include":23,"./insert":24,"./isBlank":25,"./join":26,"./levenshtein":27,"./lines":28,"./lpad":29,"./lrpad":30,"./ltrim":31,"./naturalCmp":32,"./numberFormat":33,"./pad":34,"./pred":35,"./prune":36,"./quote":37,"./repeat":38,"./replaceAll":39,"./reverse":40,"./rpad":41,"./rtrim":42,"./slugify":43,"./splice":44,"./sprintf":45,"./startsWith":46,"./strLeft":47,"./strLeftBack":48,"./strRight":49,"./strRightBack":50,"./stripTags":51,"./succ":52,"./surround":53,"./swapCase":54,"./titleize":55,"./toBoolean":56,"./toNumber":57,"./toSentence":58,"./toSentenceSerial":59,"./trim":60,"./truncate":61,"./underscored":62,"./unescapeHTML":63,"./unquote":64,"./vsprintf":65,"./words":66}],15:[function(_dereq_,module,exports){
var makeString = _dereq_('./makeString');                                                                   // 305
                                                                                                            // 306
module.exports = function adjacent(str, direction) {                                                        // 307
  str = makeString(str);                                                                                    // 308
  if (str.length === 0) {                                                                                   // 309
    return '';                                                                                              // 310
  }                                                                                                         // 311
  return str.slice(0, -1) + String.fromCharCode(str.charCodeAt(str.length - 1) + direction);                // 312
};                                                                                                          // 313
                                                                                                            // 314
},{"./makeString":19}],16:[function(_dereq_,module,exports){                                                // 315
var escapeRegExp = _dereq_('./escapeRegExp');                                                               // 316
                                                                                                            // 317
module.exports = function defaultToWhiteSpace(characters) {                                                 // 318
  if (characters == null)                                                                                   // 319
    return '\\s';                                                                                           // 320
  else if (characters.source)                                                                               // 321
    return characters.source;                                                                               // 322
  else                                                                                                      // 323
    return '[' + escapeRegExp(characters) + ']';                                                            // 324
};                                                                                                          // 325
                                                                                                            // 326
},{"./escapeRegExp":18}],17:[function(_dereq_,module,exports){                                              // 327
var escapeChars = {                                                                                         // 328
  lt: '<',                                                                                                  // 329
  gt: '>',                                                                                                  // 330
  quot: '"',                                                                                                // 331
  amp: '&',                                                                                                 // 332
  apos: "'"                                                                                                 // 333
};                                                                                                          // 334
                                                                                                            // 335
module.exports = escapeChars;                                                                               // 336
                                                                                                            // 337
},{}],18:[function(_dereq_,module,exports){                                                                 // 338
var makeString = _dereq_('./makeString');                                                                   // 339
                                                                                                            // 340
module.exports = function escapeRegExp(str) {                                                               // 341
  return makeString(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');                                     // 342
};                                                                                                          // 343
                                                                                                            // 344
},{"./makeString":19}],19:[function(_dereq_,module,exports){                                                // 345
/**                                                                                                         // 346
 * Ensure some object is a coerced to a string                                                              // 347
 **/                                                                                                        // 348
module.exports = function makeString(object) {                                                              // 349
  if (object == null) return '';                                                                            // 350
  return '' + object;                                                                                       // 351
};                                                                                                          // 352
                                                                                                            // 353
},{}],20:[function(_dereq_,module,exports){                                                                 // 354
module.exports = function strRepeat(str, qty){                                                              // 355
  if (qty < 1) return '';                                                                                   // 356
  var result = '';                                                                                          // 357
  while (qty > 0) {                                                                                         // 358
    if (qty & 1) result += str;                                                                             // 359
    qty >>= 1, str += str;                                                                                  // 360
  }                                                                                                         // 361
  return result;                                                                                            // 362
};                                                                                                          // 363
                                                                                                            // 364
},{}],21:[function(_dereq_,module,exports){                                                                 // 365
module.exports = function toPositive(number) {                                                              // 366
  return number < 0 ? 0 : (+number || 0);                                                                   // 367
};                                                                                                          // 368
                                                                                                            // 369
},{}],22:[function(_dereq_,module,exports){                                                                 // 370
var capitalize = _dereq_('./capitalize');                                                                   // 371
var underscored = _dereq_('./underscored');                                                                 // 372
var trim = _dereq_('./trim');                                                                               // 373
                                                                                                            // 374
module.exports = function humanize(str) {                                                                   // 375
  return capitalize(trim(underscored(str).replace(/_id$/, '').replace(/_/g, ' ')));                         // 376
};                                                                                                          // 377
                                                                                                            // 378
},{"./capitalize":2,"./trim":60,"./underscored":62}],23:[function(_dereq_,module,exports){                  // 379
var makeString = _dereq_('./helper/makeString');                                                            // 380
                                                                                                            // 381
module.exports = function include(str, needle) {                                                            // 382
  if (needle === '') return true;                                                                           // 383
  return makeString(str).indexOf(needle) !== -1;                                                            // 384
};                                                                                                          // 385
                                                                                                            // 386
},{"./helper/makeString":19}],24:[function(_dereq_,module,exports){                                         // 387
var splice = _dereq_('./splice');                                                                           // 388
                                                                                                            // 389
module.exports = function insert(str, i, substr) {                                                          // 390
  return splice(str, i, 0, substr);                                                                         // 391
};                                                                                                          // 392
                                                                                                            // 393
},{"./splice":44}],25:[function(_dereq_,module,exports){                                                    // 394
var makeString = _dereq_('./helper/makeString');                                                            // 395
                                                                                                            // 396
module.exports = function isBlank(str) {                                                                    // 397
  return (/^\s*$/).test(makeString(str));                                                                   // 398
};                                                                                                          // 399
                                                                                                            // 400
},{"./helper/makeString":19}],26:[function(_dereq_,module,exports){                                         // 401
var makeString = _dereq_('./helper/makeString');                                                            // 402
var slice = [].slice;                                                                                       // 403
                                                                                                            // 404
module.exports = function join() {                                                                          // 405
  var args = slice.call(arguments),                                                                         // 406
    separator = args.shift();                                                                               // 407
                                                                                                            // 408
  return args.join(makeString(separator));                                                                  // 409
};                                                                                                          // 410
                                                                                                            // 411
},{"./helper/makeString":19}],27:[function(_dereq_,module,exports){                                         // 412
var makeString = _dereq_('./helper/makeString');                                                            // 413
                                                                                                            // 414
module.exports = function levenshtein(str1, str2) {                                                         // 415
  str1 = makeString(str1);                                                                                  // 416
  str2 = makeString(str2);                                                                                  // 417
                                                                                                            // 418
  var current = [],                                                                                         // 419
    prev, value;                                                                                            // 420
                                                                                                            // 421
  for (var i = 0; i <= str2.length; i++)                                                                    // 422
    for (var j = 0; j <= str1.length; j++) {                                                                // 423
      if (i && j)                                                                                           // 424
        if (str1.charAt(j - 1) === str2.charAt(i - 1))                                                      // 425
          value = prev;                                                                                     // 426
        else                                                                                                // 427
          value = Math.min(current[j], current[j - 1], prev) + 1;                                           // 428
        else                                                                                                // 429
          value = i + j;                                                                                    // 430
                                                                                                            // 431
      prev = current[j];                                                                                    // 432
      current[j] = value;                                                                                   // 433
    }                                                                                                       // 434
                                                                                                            // 435
  return current.pop();                                                                                     // 436
};                                                                                                          // 437
                                                                                                            // 438
},{"./helper/makeString":19}],28:[function(_dereq_,module,exports){                                         // 439
module.exports = function lines(str) {                                                                      // 440
  if (str == null) return [];                                                                               // 441
  return String(str).split(/\r?\n/);                                                                        // 442
};                                                                                                          // 443
                                                                                                            // 444
},{}],29:[function(_dereq_,module,exports){                                                                 // 445
var pad = _dereq_('./pad');                                                                                 // 446
                                                                                                            // 447
module.exports = function lpad(str, length, padStr) {                                                       // 448
  return pad(str, length, padStr);                                                                          // 449
};                                                                                                          // 450
                                                                                                            // 451
},{"./pad":34}],30:[function(_dereq_,module,exports){                                                       // 452
var pad = _dereq_('./pad');                                                                                 // 453
                                                                                                            // 454
module.exports = function lrpad(str, length, padStr) {                                                      // 455
  return pad(str, length, padStr, 'both');                                                                  // 456
};                                                                                                          // 457
                                                                                                            // 458
},{"./pad":34}],31:[function(_dereq_,module,exports){                                                       // 459
var makeString = _dereq_('./helper/makeString');                                                            // 460
var defaultToWhiteSpace = _dereq_('./helper/defaultToWhiteSpace');                                          // 461
var nativeTrimLeft = String.prototype.trimLeft;                                                             // 462
                                                                                                            // 463
module.exports = function ltrim(str, characters) {                                                          // 464
  str = makeString(str);                                                                                    // 465
  if (!characters && nativeTrimLeft) return nativeTrimLeft.call(str);                                       // 466
  characters = defaultToWhiteSpace(characters);                                                             // 467
  return str.replace(new RegExp('^' + characters + '+'), '');                                               // 468
};                                                                                                          // 469
                                                                                                            // 470
},{"./helper/defaultToWhiteSpace":16,"./helper/makeString":19}],32:[function(_dereq_,module,exports){       // 471
module.exports = function naturalCmp(str1, str2) {                                                          // 472
  if (str1 == str2) return 0;                                                                               // 473
  if (!str1) return -1;                                                                                     // 474
  if (!str2) return 1;                                                                                      // 475
                                                                                                            // 476
  var cmpRegex = /(\.\d+)|(\d+)|(\D+)/g,                                                                    // 477
    tokens1 = String(str1).match(cmpRegex),                                                                 // 478
    tokens2 = String(str2).match(cmpRegex),                                                                 // 479
    count = Math.min(tokens1.length, tokens2.length);                                                       // 480
                                                                                                            // 481
  for (var i = 0; i < count; i++) {                                                                         // 482
    var a = tokens1[i],                                                                                     // 483
      b = tokens2[i];                                                                                       // 484
                                                                                                            // 485
    if (a !== b) {                                                                                          // 486
      var num1 = +a;                                                                                        // 487
      var num2 = +b;                                                                                        // 488
      if (num1 === num1 && num2 === num2) {                                                                 // 489
        return num1 > num2 ? 1 : -1;                                                                        // 490
      }                                                                                                     // 491
      return a < b ? -1 : 1;                                                                                // 492
    }                                                                                                       // 493
  }                                                                                                         // 494
                                                                                                            // 495
  if (tokens1.length != tokens2.length)                                                                     // 496
    return tokens1.length - tokens2.length;                                                                 // 497
                                                                                                            // 498
  return str1 < str2 ? -1 : 1;                                                                              // 499
};                                                                                                          // 500
                                                                                                            // 501
},{}],33:[function(_dereq_,module,exports){                                                                 // 502
module.exports = function numberFormat(number, dec, dsep, tsep) {                                           // 503
  if (isNaN(number) || number == null) return '';                                                           // 504
                                                                                                            // 505
  number = number.toFixed(~~dec);                                                                           // 506
  tsep = typeof tsep == 'string' ? tsep : ',';                                                              // 507
                                                                                                            // 508
  var parts = number.split('.'),                                                                            // 509
    fnums = parts[0],                                                                                       // 510
    decimals = parts[1] ? (dsep || '.') + parts[1] : '';                                                    // 511
                                                                                                            // 512
  return fnums.replace(/(\d)(?=(?:\d{3})+$)/g, '$1' + tsep) + decimals;                                     // 513
};                                                                                                          // 514
                                                                                                            // 515
},{}],34:[function(_dereq_,module,exports){                                                                 // 516
var makeString = _dereq_('./helper/makeString');                                                            // 517
var strRepeat = _dereq_('./helper/strRepeat');                                                              // 518
                                                                                                            // 519
module.exports = function pad(str, length, padStr, type) {                                                  // 520
  str = makeString(str);                                                                                    // 521
  length = ~~length;                                                                                        // 522
                                                                                                            // 523
  var padlen = 0;                                                                                           // 524
                                                                                                            // 525
  if (!padStr)                                                                                              // 526
    padStr = ' ';                                                                                           // 527
  else if (padStr.length > 1)                                                                               // 528
    padStr = padStr.charAt(0);                                                                              // 529
                                                                                                            // 530
  switch (type) {                                                                                           // 531
    case 'right':                                                                                           // 532
      padlen = length - str.length;                                                                         // 533
      return str + strRepeat(padStr, padlen);                                                               // 534
    case 'both':                                                                                            // 535
      padlen = length - str.length;                                                                         // 536
      return strRepeat(padStr, Math.ceil(padlen / 2)) + str + strRepeat(padStr, Math.floor(padlen / 2));    // 537
    default: // 'left'                                                                                      // 538
      padlen = length - str.length;                                                                         // 539
      return strRepeat(padStr, padlen) + str;                                                               // 540
  }                                                                                                         // 541
};                                                                                                          // 542
                                                                                                            // 543
},{"./helper/makeString":19,"./helper/strRepeat":20}],35:[function(_dereq_,module,exports){                 // 544
var adjacent = _dereq_('./helper/adjacent');                                                                // 545
                                                                                                            // 546
module.exports = function succ(str) {                                                                       // 547
  return adjacent(str, -1);                                                                                 // 548
};                                                                                                          // 549
                                                                                                            // 550
},{"./helper/adjacent":15}],36:[function(_dereq_,module,exports){                                           // 551
/**                                                                                                         // 552
 * _s.prune: a more elegant version of truncate                                                             // 553
 * prune extra chars, never leaving a half-chopped word.                                                    // 554
 * @author github.com/rwz                                                                                   // 555
 */                                                                                                         // 556
var makeString = _dereq_('./helper/makeString');                                                            // 557
var rtrim = _dereq_('./rtrim');                                                                             // 558
                                                                                                            // 559
module.exports = function prune(str, length, pruneStr) {                                                    // 560
  str = makeString(str);                                                                                    // 561
  length = ~~length;                                                                                        // 562
  pruneStr = pruneStr != null ? String(pruneStr) : '...';                                                   // 563
                                                                                                            // 564
  if (str.length <= length) return str;                                                                     // 565
                                                                                                            // 566
  var tmpl = function(c) {                                                                                  // 567
    return c.toUpperCase() !== c.toLowerCase() ? 'A' : ' ';                                                 // 568
  },                                                                                                        // 569
    template = str.slice(0, length + 1).replace(/.(?=\W*\w*$)/g, tmpl); // 'Hello, world' -> 'HellAA AAAAA' // 570
                                                                                                            // 571
  if (template.slice(template.length - 2).match(/\w\w/))                                                    // 572
    template = template.replace(/\s*\S+$/, '');                                                             // 573
  else                                                                                                      // 574
    template = rtrim(template.slice(0, template.length - 1));                                               // 575
                                                                                                            // 576
  return (template + pruneStr).length > str.length ? str : str.slice(0, template.length) + pruneStr;        // 577
};                                                                                                          // 578
                                                                                                            // 579
},{"./helper/makeString":19,"./rtrim":42}],37:[function(_dereq_,module,exports){                            // 580
var surround = _dereq_('./surround');                                                                       // 581
                                                                                                            // 582
module.exports = function quote(str, quoteChar) {                                                           // 583
  return surround(str, quoteChar || '"');                                                                   // 584
};                                                                                                          // 585
                                                                                                            // 586
},{"./surround":53}],38:[function(_dereq_,module,exports){                                                  // 587
var makeString = _dereq_('./helper/makeString');                                                            // 588
var strRepeat = _dereq_('./helper/strRepeat');                                                              // 589
                                                                                                            // 590
module.exports = function repeat(str, qty, separator) {                                                     // 591
  str = makeString(str);                                                                                    // 592
                                                                                                            // 593
  qty = ~~qty;                                                                                              // 594
                                                                                                            // 595
  // using faster implementation if separator is not needed;                                                // 596
  if (separator == null) return strRepeat(str, qty);                                                        // 597
                                                                                                            // 598
  // this one is about 300x slower in Google Chrome                                                         // 599
  for (var repeat = []; qty > 0; repeat[--qty] = str) {}                                                    // 600
  return repeat.join(separator);                                                                            // 601
};                                                                                                          // 602
                                                                                                            // 603
},{"./helper/makeString":19,"./helper/strRepeat":20}],39:[function(_dereq_,module,exports){                 // 604
var makeString = _dereq_('./helper/makeString');                                                            // 605
                                                                                                            // 606
module.exports = function replaceAll(str, find, replace, ignorecase) {                                      // 607
  var flags = (ignorecase === true)?'gi':'g';                                                               // 608
  var reg = new RegExp(find, flags);                                                                        // 609
                                                                                                            // 610
  return makeString(str).replace(reg, replace);                                                             // 611
};                                                                                                          // 612
                                                                                                            // 613
},{"./helper/makeString":19}],40:[function(_dereq_,module,exports){                                         // 614
var chars = _dereq_('./chars');                                                                             // 615
                                                                                                            // 616
module.exports = function reverse(str) {                                                                    // 617
  return chars(str).reverse().join('');                                                                     // 618
};                                                                                                          // 619
                                                                                                            // 620
},{"./chars":3}],41:[function(_dereq_,module,exports){                                                      // 621
var pad = _dereq_('./pad');                                                                                 // 622
                                                                                                            // 623
module.exports = function rpad(str, length, padStr) {                                                       // 624
  return pad(str, length, padStr, 'right');                                                                 // 625
};                                                                                                          // 626
                                                                                                            // 627
},{"./pad":34}],42:[function(_dereq_,module,exports){                                                       // 628
var makeString = _dereq_('./helper/makeString');                                                            // 629
var defaultToWhiteSpace = _dereq_('./helper/defaultToWhiteSpace');                                          // 630
var nativeTrimRight = String.prototype.trimRight;                                                           // 631
                                                                                                            // 632
module.exports = function rtrim(str, characters) {                                                          // 633
  str = makeString(str);                                                                                    // 634
  if (!characters && nativeTrimRight) return nativeTrimRight.call(str);                                     // 635
  characters = defaultToWhiteSpace(characters);                                                             // 636
  return str.replace(new RegExp(characters + '+$'), '');                                                    // 637
};                                                                                                          // 638
                                                                                                            // 639
},{"./helper/defaultToWhiteSpace":16,"./helper/makeString":19}],43:[function(_dereq_,module,exports){       // 640
var makeString = _dereq_('./helper/makeString');                                                            // 641
var defaultToWhiteSpace = _dereq_('./helper/defaultToWhiteSpace');                                          // 642
var trim = _dereq_('./trim');                                                                               // 643
var dasherize = _dereq_('./dasherize');                                                                     // 644
                                                                                                            // 645
module.exports = function slugify(str) {                                                                    // 646
  var from  = "ąàáäâãåæăćčĉęèéëêĝĥìíïîĵłľńňòóöőôõðøśșšŝťțŭùúüűûñÿýçżźž",                                    // 647
      to    = "aaaaaaaaaccceeeeeghiiiijllnnoooooooossssttuuuuuunyyczzz",                                    // 648
      regex = new RegExp(defaultToWhiteSpace(from), 'g');                                                   // 649
                                                                                                            // 650
  str = makeString(str).toLowerCase().replace(regex, function(c){                                           // 651
    var index = from.indexOf(c);                                                                            // 652
    return to.charAt(index) || '-';                                                                         // 653
  });                                                                                                       // 654
                                                                                                            // 655
  return trim(dasherize(str.replace(/[^\w\s-]/g, '-')), '-');                                               // 656
};                                                                                                          // 657
                                                                                                            // 658
},{"./dasherize":8,"./helper/defaultToWhiteSpace":16,"./helper/makeString":19,"./trim":60}],44:[function(_dereq_,module,exports){
var chars = _dereq_('./chars');                                                                             // 660
                                                                                                            // 661
module.exports = function splice(str, i, howmany, substr) {                                                 // 662
  var arr = chars(str);                                                                                     // 663
  arr.splice(~~i, ~~howmany, substr);                                                                       // 664
  return arr.join('');                                                                                      // 665
};                                                                                                          // 666
                                                                                                            // 667
},{"./chars":3}],45:[function(_dereq_,module,exports){                                                      // 668
// sprintf() for JavaScript 0.7-beta1                                                                       // 669
// http://www.diveintojavascript.com/projects/javascript-sprintf                                            // 670
//                                                                                                          // 671
// Copyright (c) Alexandru Marasteanu <alexaholic [at) gmail (dot] com>                                     // 672
// All rights reserved.                                                                                     // 673
var strRepeat = _dereq_('./helper/strRepeat');                                                              // 674
var toString = Object.prototype.toString;                                                                   // 675
var sprintf = (function() {                                                                                 // 676
  function get_type(variable) {                                                                             // 677
    return toString.call(variable).slice(8, -1).toLowerCase();                                              // 678
  }                                                                                                         // 679
                                                                                                            // 680
  var str_repeat = strRepeat;                                                                               // 681
                                                                                                            // 682
  var str_format = function() {                                                                             // 683
    if (!str_format.cache.hasOwnProperty(arguments[0])) {                                                   // 684
      str_format.cache[arguments[0]] = str_format.parse(arguments[0]);                                      // 685
    }                                                                                                       // 686
    return str_format.format.call(null, str_format.cache[arguments[0]], arguments);                         // 687
  };                                                                                                        // 688
                                                                                                            // 689
  str_format.format = function(parse_tree, argv) {                                                          // 690
    var cursor = 1, tree_length = parse_tree.length, node_type = '', arg, output = [], i, k, match, pad, pad_character, pad_length;
    for (i = 0; i < tree_length; i++) {                                                                     // 692
      node_type = get_type(parse_tree[i]);                                                                  // 693
      if (node_type === 'string') {                                                                         // 694
        output.push(parse_tree[i]);                                                                         // 695
      }                                                                                                     // 696
      else if (node_type === 'array') {                                                                     // 697
        match = parse_tree[i]; // convenience purposes only                                                 // 698
        if (match[2]) { // keyword argument                                                                 // 699
          arg = argv[cursor];                                                                               // 700
          for (k = 0; k < match[2].length; k++) {                                                           // 701
            if (!arg.hasOwnProperty(match[2][k])) {                                                         // 702
              throw new Error(sprintf('[_.sprintf] property "%s" does not exist', match[2][k]));            // 703
            }                                                                                               // 704
            arg = arg[match[2][k]];                                                                         // 705
          }                                                                                                 // 706
        } else if (match[1]) { // positional argument (explicit)                                            // 707
          arg = argv[match[1]];                                                                             // 708
        }                                                                                                   // 709
        else { // positional argument (implicit)                                                            // 710
          arg = argv[cursor++];                                                                             // 711
        }                                                                                                   // 712
                                                                                                            // 713
        if (/[^s]/.test(match[8]) && (get_type(arg) != 'number')) {                                         // 714
          throw new Error(sprintf('[_.sprintf] expecting number but found %s', get_type(arg)));             // 715
        }                                                                                                   // 716
        switch (match[8]) {                                                                                 // 717
          case 'b': arg = arg.toString(2); break;                                                           // 718
          case 'c': arg = String.fromCharCode(arg); break;                                                  // 719
          case 'd': arg = parseInt(arg, 10); break;                                                         // 720
          case 'e': arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential(); break;              // 721
          case 'f': arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg); break;            // 722
          case 'o': arg = arg.toString(8); break;                                                           // 723
          case 's': arg = ((arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg); break;      // 724
          case 'u': arg = Math.abs(arg); break;                                                             // 725
          case 'x': arg = arg.toString(16); break;                                                          // 726
          case 'X': arg = arg.toString(16).toUpperCase(); break;                                            // 727
        }                                                                                                   // 728
        arg = (/[def]/.test(match[8]) && match[3] && arg >= 0 ? '+'+ arg : arg);                            // 729
        pad_character = match[4] ? match[4] == '0' ? '0' : match[4].charAt(1) : ' ';                        // 730
        pad_length = match[6] - String(arg).length;                                                         // 731
        pad = match[6] ? str_repeat(pad_character, pad_length) : '';                                        // 732
        output.push(match[5] ? arg + pad : pad + arg);                                                      // 733
      }                                                                                                     // 734
    }                                                                                                       // 735
    return output.join('');                                                                                 // 736
  };                                                                                                        // 737
                                                                                                            // 738
  str_format.cache = {};                                                                                    // 739
                                                                                                            // 740
  str_format.parse = function(fmt) {                                                                        // 741
    var _fmt = fmt, match = [], parse_tree = [], arg_names = 0;                                             // 742
    while (_fmt) {                                                                                          // 743
      if ((match = /^[^\x25]+/.exec(_fmt)) !== null) {                                                      // 744
        parse_tree.push(match[0]);                                                                          // 745
      }                                                                                                     // 746
      else if ((match = /^\x25{2}/.exec(_fmt)) !== null) {                                                  // 747
        parse_tree.push('%');                                                                               // 748
      }                                                                                                     // 749
      else if ((match = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(_fmt)) !== null) {
        if (match[2]) {                                                                                     // 751
          arg_names |= 1;                                                                                   // 752
          var field_list = [], replacement_field = match[2], field_match = [];                              // 753
          if ((field_match = /^([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {                     // 754
            field_list.push(field_match[1]);                                                                // 755
            while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {       // 756
              if ((field_match = /^\.([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {               // 757
                field_list.push(field_match[1]);                                                            // 758
              }                                                                                             // 759
              else if ((field_match = /^\[(\d+)\]/.exec(replacement_field)) !== null) {                     // 760
                field_list.push(field_match[1]);                                                            // 761
              }                                                                                             // 762
              else {                                                                                        // 763
                throw new Error('[_.sprintf] huh?');                                                        // 764
              }                                                                                             // 765
            }                                                                                               // 766
          }                                                                                                 // 767
          else {                                                                                            // 768
            throw new Error('[_.sprintf] huh?');                                                            // 769
          }                                                                                                 // 770
          match[2] = field_list;                                                                            // 771
        }                                                                                                   // 772
        else {                                                                                              // 773
          arg_names |= 2;                                                                                   // 774
        }                                                                                                   // 775
        if (arg_names === 3) {                                                                              // 776
          throw new Error('[_.sprintf] mixing positional and named placeholders is not (yet) supported');   // 777
        }                                                                                                   // 778
        parse_tree.push(match);                                                                             // 779
      }                                                                                                     // 780
      else {                                                                                                // 781
        throw new Error('[_.sprintf] huh?');                                                                // 782
      }                                                                                                     // 783
      _fmt = _fmt.substring(match[0].length);                                                               // 784
    }                                                                                                       // 785
    return parse_tree;                                                                                      // 786
  };                                                                                                        // 787
                                                                                                            // 788
  return str_format;                                                                                        // 789
})();                                                                                                       // 790
                                                                                                            // 791
module.exports = sprintf;                                                                                   // 792
                                                                                                            // 793
},{"./helper/strRepeat":20}],46:[function(_dereq_,module,exports){                                          // 794
var makeString = _dereq_('./helper/makeString');                                                            // 795
var toPositive = _dereq_('./helper/toPositive');                                                            // 796
                                                                                                            // 797
module.exports = function startsWith(str, starts, position) {                                               // 798
  str = makeString(str);                                                                                    // 799
  starts = '' + starts;                                                                                     // 800
  position = position == null ? 0 : Math.min(toPositive(position), str.length);                             // 801
  return str.lastIndexOf(starts, position) === position;                                                    // 802
};                                                                                                          // 803
                                                                                                            // 804
},{"./helper/makeString":19,"./helper/toPositive":21}],47:[function(_dereq_,module,exports){                // 805
var makeString = _dereq_('./helper/makeString');                                                            // 806
                                                                                                            // 807
module.exports = function strLeft(str, sep) {                                                               // 808
  str = makeString(str);                                                                                    // 809
  sep = makeString(sep);                                                                                    // 810
  var pos = !sep ? -1 : str.indexOf(sep);                                                                   // 811
  return~ pos ? str.slice(0, pos) : str;                                                                    // 812
};                                                                                                          // 813
                                                                                                            // 814
},{"./helper/makeString":19}],48:[function(_dereq_,module,exports){                                         // 815
var makeString = _dereq_('./helper/makeString');                                                            // 816
                                                                                                            // 817
module.exports = function strLeftBack(str, sep) {                                                           // 818
  str = makeString(str);                                                                                    // 819
  sep = makeString(sep);                                                                                    // 820
  var pos = str.lastIndexOf(sep);                                                                           // 821
  return~ pos ? str.slice(0, pos) : str;                                                                    // 822
};                                                                                                          // 823
                                                                                                            // 824
},{"./helper/makeString":19}],49:[function(_dereq_,module,exports){                                         // 825
var makeString = _dereq_('./helper/makeString');                                                            // 826
                                                                                                            // 827
module.exports = function strRight(str, sep) {                                                              // 828
  str = makeString(str);                                                                                    // 829
  sep = makeString(sep);                                                                                    // 830
  var pos = !sep ? -1 : str.indexOf(sep);                                                                   // 831
  return~ pos ? str.slice(pos + sep.length, str.length) : str;                                              // 832
};                                                                                                          // 833
                                                                                                            // 834
},{"./helper/makeString":19}],50:[function(_dereq_,module,exports){                                         // 835
var makeString = _dereq_('./helper/makeString');                                                            // 836
                                                                                                            // 837
module.exports = function strRightBack(str, sep) {                                                          // 838
  str = makeString(str);                                                                                    // 839
  sep = makeString(sep);                                                                                    // 840
  var pos = !sep ? -1 : str.lastIndexOf(sep);                                                               // 841
  return~ pos ? str.slice(pos + sep.length, str.length) : str;                                              // 842
};                                                                                                          // 843
                                                                                                            // 844
},{"./helper/makeString":19}],51:[function(_dereq_,module,exports){                                         // 845
var makeString = _dereq_('./helper/makeString');                                                            // 846
                                                                                                            // 847
module.exports = function stripTags(str) {                                                                  // 848
  return makeString(str).replace(/<\/?[^>]+>/g, '');                                                        // 849
};                                                                                                          // 850
                                                                                                            // 851
},{"./helper/makeString":19}],52:[function(_dereq_,module,exports){                                         // 852
var adjacent = _dereq_('./helper/adjacent');                                                                // 853
                                                                                                            // 854
module.exports = function succ(str) {                                                                       // 855
  return adjacent(str, 1);                                                                                  // 856
};                                                                                                          // 857
                                                                                                            // 858
},{"./helper/adjacent":15}],53:[function(_dereq_,module,exports){                                           // 859
module.exports = function surround(str, wrapper) {                                                          // 860
  return [wrapper, str, wrapper].join('');                                                                  // 861
};                                                                                                          // 862
                                                                                                            // 863
},{}],54:[function(_dereq_,module,exports){                                                                 // 864
var makeString = _dereq_('./helper/makeString');                                                            // 865
                                                                                                            // 866
module.exports = function swapCase(str) {                                                                   // 867
  return makeString(str).replace(/\S/g, function(c) {                                                       // 868
    return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();                                       // 869
  });                                                                                                       // 870
};                                                                                                          // 871
                                                                                                            // 872
},{"./helper/makeString":19}],55:[function(_dereq_,module,exports){                                         // 873
var makeString = _dereq_('./helper/makeString');                                                            // 874
                                                                                                            // 875
module.exports = function titleize(str) {                                                                   // 876
  return makeString(str).toLowerCase().replace(/(?:^|\s|-)\S/g, function(c) {                               // 877
    return c.toUpperCase();                                                                                 // 878
  });                                                                                                       // 879
};                                                                                                          // 880
                                                                                                            // 881
},{"./helper/makeString":19}],56:[function(_dereq_,module,exports){                                         // 882
var trim = _dereq_('./trim');                                                                               // 883
                                                                                                            // 884
function boolMatch(s, matchers) {                                                                           // 885
  var i, matcher, down = s.toLowerCase();                                                                   // 886
  matchers = [].concat(matchers);                                                                           // 887
  for (i = 0; i < matchers.length; i += 1) {                                                                // 888
    matcher = matchers[i];                                                                                  // 889
    if (!matcher) continue;                                                                                 // 890
    if (matcher.test && matcher.test(s)) return true;                                                       // 891
    if (matcher.toLowerCase() === down) return true;                                                        // 892
  }                                                                                                         // 893
}                                                                                                           // 894
                                                                                                            // 895
module.exports = function toBoolean(str, trueValues, falseValues) {                                         // 896
  if (typeof str === "number") str = "" + str;                                                              // 897
  if (typeof str !== "string") return !!str;                                                                // 898
  str = trim(str);                                                                                          // 899
  if (boolMatch(str, trueValues || ["true", "1"])) return true;                                             // 900
  if (boolMatch(str, falseValues || ["false", "0"])) return false;                                          // 901
};                                                                                                          // 902
                                                                                                            // 903
},{"./trim":60}],57:[function(_dereq_,module,exports){                                                      // 904
var trim = _dereq_('./trim');                                                                               // 905
var parseNumber = function(source) {                                                                        // 906
  return source * 1 || 0;                                                                                   // 907
};                                                                                                          // 908
                                                                                                            // 909
module.exports = function toNumber(num, precision) {                                                        // 910
  if (num == null) return 0;                                                                                // 911
  var factor = Math.pow(10, isFinite(precision) ? precision : 0);                                           // 912
  return Math.round(num * factor) / factor;                                                                 // 913
};                                                                                                          // 914
                                                                                                            // 915
},{"./trim":60}],58:[function(_dereq_,module,exports){                                                      // 916
var rtrim = _dereq_('./rtrim');                                                                             // 917
                                                                                                            // 918
module.exports = function toSentence(array, separator, lastSeparator, serial) {                             // 919
  separator = separator || ', ';                                                                            // 920
  lastSeparator = lastSeparator || ' and ';                                                                 // 921
  var a = array.slice(),                                                                                    // 922
    lastMember = a.pop();                                                                                   // 923
                                                                                                            // 924
  if (array.length > 2 && serial) lastSeparator = rtrim(separator) + lastSeparator;                         // 925
                                                                                                            // 926
  return a.length ? a.join(separator) + lastSeparator + lastMember : lastMember;                            // 927
};                                                                                                          // 928
                                                                                                            // 929
},{"./rtrim":42}],59:[function(_dereq_,module,exports){                                                     // 930
var toSentence = _dereq_('./toSentence');                                                                   // 931
                                                                                                            // 932
module.exports = function toSentenceSerial(array, sep, lastSep) {                                           // 933
  return toSentence(array, sep, lastSep, true);                                                             // 934
};                                                                                                          // 935
                                                                                                            // 936
},{"./toSentence":58}],60:[function(_dereq_,module,exports){                                                // 937
var makeString = _dereq_('./helper/makeString');                                                            // 938
var defaultToWhiteSpace = _dereq_('./helper/defaultToWhiteSpace');                                          // 939
var nativeTrim = String.prototype.trim;                                                                     // 940
                                                                                                            // 941
module.exports = function trim(str, characters) {                                                           // 942
  str = makeString(str);                                                                                    // 943
  if (!characters && nativeTrim) return nativeTrim.call(str);                                               // 944
  characters = defaultToWhiteSpace(characters);                                                             // 945
  return str.replace(new RegExp('^' + characters + '+|' + characters + '+$', 'g'), '');                     // 946
};                                                                                                          // 947
                                                                                                            // 948
},{"./helper/defaultToWhiteSpace":16,"./helper/makeString":19}],61:[function(_dereq_,module,exports){       // 949
var makeString = _dereq_('./helper/makeString');                                                            // 950
                                                                                                            // 951
module.exports = function truncate(str, length, truncateStr) {                                              // 952
  str = makeString(str);                                                                                    // 953
  truncateStr = truncateStr || '...';                                                                       // 954
  length = ~~length;                                                                                        // 955
  return str.length > length ? str.slice(0, length) + truncateStr : str;                                    // 956
};                                                                                                          // 957
                                                                                                            // 958
},{"./helper/makeString":19}],62:[function(_dereq_,module,exports){                                         // 959
var trim = _dereq_('./trim');                                                                               // 960
                                                                                                            // 961
module.exports = function underscored(str) {                                                                // 962
  return trim(str).replace(/([a-z\d])([A-Z]+)/g, '$1_$2').replace(/[-\s]+/g, '_').toLowerCase();            // 963
};                                                                                                          // 964
                                                                                                            // 965
},{"./trim":60}],63:[function(_dereq_,module,exports){                                                      // 966
var makeString = _dereq_('./helper/makeString');                                                            // 967
var escapeChars = _dereq_('./helper/escapeChars');                                                          // 968
                                                                                                            // 969
module.exports = function unescapeHTML(str) {                                                               // 970
  return makeString(str).replace(/\&([^;]+);/g, function(entity, entityCode) {                              // 971
    var match;                                                                                              // 972
                                                                                                            // 973
    if (entityCode in escapeChars) {                                                                        // 974
      return escapeChars[entityCode];                                                                       // 975
    } else if (match = entityCode.match(/^#x([\da-fA-F]+)$/)) {                                             // 976
      return String.fromCharCode(parseInt(match[1], 16));                                                   // 977
    } else if (match = entityCode.match(/^#(\d+)$/)) {                                                      // 978
      return String.fromCharCode(~~match[1]);                                                               // 979
    } else {                                                                                                // 980
      return entity;                                                                                        // 981
    }                                                                                                       // 982
  });                                                                                                       // 983
};                                                                                                          // 984
                                                                                                            // 985
},{"./helper/escapeChars":17,"./helper/makeString":19}],64:[function(_dereq_,module,exports){               // 986
module.exports = function unquote(str, quoteChar) {                                                         // 987
  quoteChar = quoteChar || '"';                                                                             // 988
  if (str[0] === quoteChar && str[str.length - 1] === quoteChar)                                            // 989
    return str.slice(1, str.length - 1);                                                                    // 990
  else return str;                                                                                          // 991
};                                                                                                          // 992
                                                                                                            // 993
},{}],65:[function(_dereq_,module,exports){                                                                 // 994
var sprintf = _dereq_('./sprintf');                                                                         // 995
                                                                                                            // 996
module.exports = function vsprintf(fmt, argv) {                                                             // 997
  argv.unshift(fmt);                                                                                        // 998
  return sprintf.apply(null, argv);                                                                         // 999
};                                                                                                          // 1000
                                                                                                            // 1001
},{"./sprintf":45}],66:[function(_dereq_,module,exports){                                                   // 1002
var isBlank = _dereq_('./isBlank');                                                                         // 1003
var trim = _dereq_('./trim');                                                                               // 1004
                                                                                                            // 1005
module.exports = function words(str, delimiter) {                                                           // 1006
  if (isBlank(str)) return [];                                                                              // 1007
  return trim(str, delimiter).split(delimiter || /\s+/);                                                    // 1008
};                                                                                                          // 1009
                                                                                                            // 1010
},{"./isBlank":25,"./trim":60}]},{},[14])                                                                   // 1011
(14)                                                                                                        // 1012
});                                                                                                         // 1013
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['underscorestring:underscore.string'] = {};

})();

//# sourceMappingURL=underscorestring_underscore.string.js.map
