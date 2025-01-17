


import {reverseString} from './main.js';
import { test, expect } from 'vitest';

test('basic reversal', () => {
    const actual = reverseString('edoclatropehtdnif');
    const expected = 'findtheportalcode';
    expect(actual).toBe(expected);
    console.log("Test 1/3 passed");
  });
  
  test('ignores special characters', () => {
    const actual = reverseString('edo!cl@atr#ope^ht&dn*if');
    const expected = 'findtheportalcode';
    expect(actual).toBe(expected);
    console.log("test 2/3 passed")
  });
  
  test('ignores numbers', () => {
    const actual = reverseString('edoc123latropehtdnif');
    const expected = 'findtheportalcode';
    expect(actual).toBe(expected);
    console.log("test 3/3 passed")
  });
    
    const input = 'edoclatropehtdnif'

    
console.log(`Here is the secret message : ${(reverseString(input))}`);


  
