// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.2.3.2
description: >
  Requires this value to have a [[ViewedArrayBuffer]] internal slot
info: >
  22.2.3.2 get %TypedArray%.prototype.byteLength

  1. Let O be the this value.
  2. If Type(O) is not Object, throw a TypeError exception.
  3. If O does not have a [[ViewedArrayBuffer]] internal slot, throw a TypeError
  exception.
  ...
includes: [testTypedArray.js]
---*/

var TypedArrayPrototype = TypedArray.prototype;

assert.throws(TypeError, function() {
  TypedArrayPrototype.byteLength;
});

reportCompare(0, 0);