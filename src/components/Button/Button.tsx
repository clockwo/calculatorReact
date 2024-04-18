import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

const Button = ({ children, isActive, className, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(styles.button, styles[`${className}`], {
        [styles.active]: isActive,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
