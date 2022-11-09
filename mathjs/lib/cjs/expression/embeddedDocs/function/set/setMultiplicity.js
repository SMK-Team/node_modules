"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setMultiplicityDocs = void 0;
var setMultiplicityDocs = {
  name: 'setMultiplicity',
  category: 'Set',
  syntax: ['setMultiplicity(element, set)'],
  description: 'Count the multiplicity of an element in a multiset. A multi-dimension array will be converted to a single-dimension array before the operation.',
  examples: ['setMultiplicity(1, [1, 2, 2, 4])', 'setMultiplicity(2, [1, 2, 2, 4])'],
  seealso: ['setDistinct', 'setSize']
};
exports.setMultiplicityDocs = setMultiplicityDocs;