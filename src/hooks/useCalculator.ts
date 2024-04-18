import { useState } from 'react';
import { Operation } from '../utils/operations';
import { calculate } from '../utils/calculatorLogic';

type CalcElement = number | Operation;

export const useCalculator = () => {
  const [currentValue, setCurrentValue] = useState<string>('0');
  const [values, setValues] = useState<CalcElement[]>([]);
  const [isNewNumber, setNewNumber] = useState<boolean>(true);
  const [activeOperation, setActiveOperation] = useState<Operation | null>(
    null
  );
  const [history, setHistory] = useState<CalcElement[]>([]);

  const handlePercentClick = () => {
    setCurrentValue((prevValue) =>
      (Number.parseFloat(prevValue) / 100).toString()
    );
  };

  const canAddDot = (prevValue: string, number: string) => {
    if (prevValue[prevValue.length - 1] === '.' && number === '.') return false;
    return true;
  };

  const handleNumberClick = (number: string) => {
    setCurrentValue((prevValue) => {
      if (canAddDot(prevValue, number)) {
        return isNewNumber && number !== '.' ? number : prevValue + number;
      }
      return prevValue;
    });
    setNewNumber(false);
    setActiveOperation(null);
  };

  const handleOperationClick = (selectedOperation: Operation) => {
    const actualValues = [...values, Number.parseFloat(currentValue)];

    if (actualValues.length === 5) {
      const result = calculate(actualValues);
      setValues([result, selectedOperation]);
      setCurrentValue(result.toString());
    } else {
      setValues([...actualValues, selectedOperation]);
    }

    setHistory([
      ...history,
      Number.parseFloat(currentValue),
      selectedOperation,
    ]);
    console.log(history);
    setNewNumber(true);
    setActiveOperation(selectedOperation);
  };

  const handleClearClick = () => {
    setNewNumber(true);
    setCurrentValue('0');
    setValues([]);
    setHistory([]);
    setActiveOperation(null);
  };

  const handleEqualsClick = () => {
    const actualValues = [...values, Number.parseFloat(currentValue)];
    const result = calculate(actualValues);
    setHistory((prevHistory) => [
      ...prevHistory,
      Number.parseFloat(currentValue),
    ]);
    setCurrentValue(result.toString());
    setValues([]);
    setNewNumber(true);
  };

  return {
    currentValue,
    history,
    handleNumberClick,
    handleOperationClick,
    handleClearClick,
    handleEqualsClick,
    handlePercentClick,
    activeOperation,
  };
};
