import { BodyProps } from './Body.props';
import styles from './Body.module.css';
import cn from 'classnames';
import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';

const Body = ({ children }: BodyProps) => {
  const { theme } = useContext(ThemeContext);
  return <div className={cn(styles.body, styles[`${theme}`])}>{children}</div>;
};

export default Body;
