import { TestScheduler } from 'jest';
import coinCounter from '../src/coin-counter.js';

describe('coinCounter', () => {

  test('should return if input is NaN', () => {
    let output = coinCounter(NaN);
    expect(output).toEqual(undefined);
  });     

  test('should return if input is a string', () => {
    let output = coinCounter("test string");
    expect(output).toEqual(undefined);
  });

  test('should return if input is a boolean', () => {
    let output = coinCounter(false);
    expect(output).toEqual(undefined);
  });
  
  test('should return if input is less than zero', () => {
    let output = coinCounter(-1.5);
    expect(output).toEqual(undefined);
  }); 

  test('should return an object if input equals zero', () => {
    let output = coinCounter(0);
    expect(typeof output).toEqual('object');
  }); 
});