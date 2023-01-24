import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  let button0;
  let button1;
  let button2;
  let button3;
  let button4;
  let button5;
  let button6;
  let button7;
  let button8;
  let button9;
  let add;
  let multiply;
  let divide;
  let subtract;
  let equals;
  let runningTotal;
  let clear
  beforeEach(() => {
    container = render(<Calculator/>)
    button0 = container.getByTestId('number0'); 
    button1 = container.getByTestId('number1'); 
    button2 = container.getByTestId('number2'); 
    button3 = container.getByTestId('number3'); 
    button4 = container.getByTestId('number4'); 
    button5 = container.getByTestId('number5'); 
    button6 = container.getByTestId('number6'); 
    button7 = container.getByTestId('number7'); 
    button8 = container.getByTestId('number8'); 
    button9 = container.getByTestId('number9'); 
    clear = container.getByTestId('clear')
    add = container.getByTestId('operator-add'); 
    multiply = container.getByTestId('operator-multiply'); 
    divide = container.getByTestId('operator-divide'); 
    subtract = container.getByTestId('operator-subtract')
    equals = container.getByTestId('operator-equals'); 
    runningTotal = container.getByTestId('running-total');
  })

  it('should change running total on number enter', () => {
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('Should be able to add', ()=>{
    fireEvent.click(button4)
    fireEvent.click(add)
    fireEvent.click(button1)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('5')
  })

  it('Should be able to subtract', ()=>{
    fireEvent.click(button7)
    fireEvent.click(subtract)
    fireEvent.click(button4)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('3')
  })
  
  it('Should be able to multiply', ()=>{
    fireEvent.click(button3)
    fireEvent.click(multiply)
    fireEvent.click(button5)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('15')
  })

  it('Should be able to divide', ()=>{
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(divide)
    fireEvent.click(button7)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('3')
  })

  it('Should be able to concatenate', ()=>{
    fireEvent.click(button2)
    fireEvent.click(button1)
    fireEvent.click(button7)
    expect(runningTotal.textContent).toEqual('217')
  })

  it('Should be able to chain operators', ()=>{
    fireEvent.click(button9)
    fireEvent.click(subtract)
    fireEvent.click(button2)
    fireEvent.click(add)
    fireEvent.click(button2)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('9')
  })

  it('clear the running total without affecting the calculation',()=>{
    fireEvent.click(button1)
    fireEvent.click(add)
    fireEvent.click(button7)
    fireEvent.click(clear)
    fireEvent.click(equals)
    expect(runningTotal.textContent).toEqual('1')
  })
})

