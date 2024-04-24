import { ButtonHTMLAttributes } from 'react';
import './index.css';

export type Props = {
  rel?: string;
  href?: string;
  label?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  rel,
  href,
  label,
  type,
  disabled,
  ...rest
}: Props) {
  return (
    <button className='scifi-btn' disabled={disabled} {...rest}>
      <p className='text-primary-black'>{label}</p>
    </button>
  );
}
