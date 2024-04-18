import { ParagraphProps } from './Text.props';
import styles from './Text.module.css';
import cn from 'classnames';

const Text = ({ children, className, ...props }: ParagraphProps) => {
  return (
    <p {...props} className={cn(styles.text, styles[`${className}`])}>
      {children}
    </p>
  );
};

export default Text;
