import { BottomPanelProps } from './BottomPanel.props';
import styles from './BottomPanel.module.css';
import cn from 'classnames';

const BottomPanel = ({ children }: BottomPanelProps) => {
  return <div className={cn(styles['bottom-panel'])}>{children}</div>;
};

export default BottomPanel;
