import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [result, setResult] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const handleClick = (buttonName) => {
    setResult(calculate(result, buttonName));
  };
  return (
    <section className="calculator-conteiner">
      <div className="calculation-result">{result.next || result.total || '0'}</div>
      <div
        className="operationAC"
        type="button"
        onClick={() => {
          handleClick('AC');
        }}
      >
        AC
      </div>
      <div
        className="operation-change"
        type="button"
        onClick={() => {
          handleClick('+/-');
        }}
      >
        +/-
      </div>
      <div
        className="operation-percent"
        type="button"
        onClick={() => {
          handleClick('%');
        }}
      >
        %
      </div>
      <div
        className="operation-divition"
        type="button"
        onClick={() => {
          handleClick('÷');
        }}
      >
        ÷
      </div>
      <div
        className="operation-multiplication"
        type="button"
        onClick={() => {
          handleClick('x');
        }}
      >
        x
      </div>
      <div
        className="operation-minus"
        type="button"
        onClick={() => {
          handleClick('-');
        }}
      >
        -
      </div>
      <div
        className="operation-add"
        type="button"
        onClick={() => {
          handleClick('+');
        }}
      >
        +
      </div>
      <div
        className="operation-iqual"
        type="button"
        onClick={() => {
          handleClick('=');
        }}
      >
        =
      </div>
      <div
        className="number9"
        type="button"
        onClick={() => {
          handleClick('9');
        }}
      >
        9
      </div>
      <div
        className="number8"
        type="button"
        onClick={() => {
          handleClick('8');
        }}
      >
        8
      </div>
      <div
        className="number7"
        type="button"
        onClick={() => {
          handleClick('7');
        }}
      >
        7
      </div>
      <div
        className="number6"
        type="button"
        onClick={() => {
          handleClick('6');
        }}
      >
        6
      </div>
      <div
        className="number5"
        type="button"
        onClick={() => {
          handleClick('5');
        }}
      >
        5
      </div>
      <div
        className="number4"
        type="button"
        onClick={() => {
          handleClick('4');
        }}
      >
        4
      </div>
      <div
        className="number3"
        type="button"
        onClick={() => {
          handleClick('3');
        }}
      >
        3
      </div>
      <div
        className="number2"
        type="button"
        onClick={() => {
          handleClick('2');
        }}
      >
        2
      </div>
      <div
        className="number1"
        type="button"
        onClick={() => {
          handleClick('1');
        }}
      >
        1
      </div>
      <div
        className="number0"
        type="button"
        onClick={() => {
          handleClick('0');
        }}
      >
        0
      </div>
      <div
        className="number-dot"
        type="button"
        onClick={() => {
          handleClick('.');
        }}
      >
        .
      </div>
    </section>
  );
}

export default Calculator;
