import { TopPanelProps } from './TopPanel.props';
import styles from './TopPanel.module.css';
import cn from 'classnames';

const TopPanel = ({ children }: TopPanelProps) => {
  return <div className={cn(styles['top-panel'])}>{children}</div>;
};

export default TopPanel;
