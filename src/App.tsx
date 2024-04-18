import './App.css';
import Body from './layout/Body/Body';
import TopPanel from './layout/TopPanel/TopPanel';
import BottomPanel from './layout/BottomPanel/BottomPanel';
import Button from './components/Button/Button';
import Sun from './assets/sun.svg';
import Moon from './assets/moon.svg';
import AC from './assets/ac.svg';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Text from './components/Text/Text';
import { useCalculator } from './hooks/useCalculator';

function App() {
  const { theme, setTheme } = useContext(ThemeContext);
  const {
    currentValue,
    history,
    handleNumberClick,
    handleOperationClick,
    handleClearClick,
    handleEqualsClick,
    handlePercentClick,
    activeOperation,
  } = useCalculator();

  return (
    <>
      <Body>
        <TopPanel>
          <Text className="small">
            {history ? history.join(' ').replace('*', 'x') : ' '}
          </Text>
          <Text className="large">{currentValue}</Text>
        </TopPanel>
        <BottomPanel>
          <Button
            className="border"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            <img src={theme === 'dark' ? Sun : Moon} />
          </Button>
          <Button className="accent" onClick={handlePercentClick}>
            %
          </Button>
          <Button
            className="accent"
            isActive={activeOperation === '/'}
            onClick={() => handleOperationClick('/')}
          >
            /
          </Button>
          <Button
            className="accent"
            isActive={activeOperation === '*'}
            onClick={() => handleOperationClick('*')}
          >
            X
          </Button>
          <Button onClick={() => handleNumberClick('7')}>7</Button>
          <Button onClick={() => handleNumberClick('8')}>8</Button>
          <Button onClick={() => handleNumberClick('9')}>9</Button>
          <Button
            className="accent"
            isActive={activeOperation === '-'}
            onClick={() => handleOperationClick('-')}
          >
            -
          </Button>
          <Button onClick={() => handleNumberClick('4')}>4</Button>
          <Button onClick={() => handleNumberClick('5')}>5</Button>
          <Button onClick={() => handleNumberClick('6')}>6</Button>
          <Button
            className="accent"
            isActive={activeOperation === '+'}
            onClick={() => handleOperationClick('+')}
          >
            +
          </Button>
          <Button onClick={() => handleNumberClick('1')}>1</Button>
          <Button onClick={() => handleNumberClick('2')}>2</Button>
          <Button onClick={() => handleNumberClick('3')}>3</Button>
          <Button onClick={handleEqualsClick} className="special">
            =
          </Button>
          <Button onClick={handleClearClick}>
            <img src={AC} alt="AC" />
          </Button>
          <Button onClick={() => handleNumberClick('0')}>0</Button>
          <Button onClick={() => handleNumberClick('.')}>.</Button>
        </BottomPanel>
      </Body>
    </>
  );
}

export default App;
