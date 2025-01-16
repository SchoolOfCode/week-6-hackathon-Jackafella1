//write a test that reverses a string
//the outcome should be the reversed string
//the answer should be Findtheportalcode


import {reverseString} from './main.js';
import { describe,test, expect } from 'vitest';

describe('reverseString function', () => {
    test('basic reversal', () => {
      
    const actual = reverseString('edoclatropehtdnif');
    const expected = 'findtheportalcode';
    expect(actual).toBe(expected);
    });
    
  
    test('ignores special characters', () => {
      expect(reverseString('edo!cl@art#ope^ht&dn*if')).toBe('findtheportalcode');
    });
  
    test('ignores numbers', () => {
      expect(reverseString('edoc123lartopehtdnif')).toBe('findtheportalcode');
    });
  
    test('normalizes uppercase input', () => {
      expect(reverseString('EDOCLARTOPEHTDNIF')).toBe('findtheportalcode');
    });
  
    test('normalizes mixed-case input', () => {
      expect(reverseString('EdOcLaRtOpEhTdNiF')).toBe('findtheportalcode');
    });
  
    test('trims spaces', () => {
      expect(reverseString('  edoclartopehtdnif  ')).toBe('findtheportalcode');
    });
  
    test('removes spaces within the string', () => {
      expect(reverseString('edo clartope htdn if')).toBe('findtheportalcode');
    });
  
    test('handles repeated characters', () => {
      expect(reverseString('eeeeeedooooooocclllllaaaarrtttoooopeeehhtttdddddnnniiiiifffff'))
        .toBe('findtheportalcode');
    });
  
    test('handles Unicode characters', () => {
      expect(reverseString('édoçlártópëhtdníf')).toBe('findtheportalcode');
    });
  });
