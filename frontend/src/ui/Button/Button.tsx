// src/ui/Button/Button.tsx
import React from 'react';
import './Button.css';

type Variant = 'primary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

export type ButtonProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  loading?: boolean;
  as?: 'button' | 'a';
  href?: string;   // pour as="a"
  target?: string;
  rel?: string;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const cx = (...cls: Array<string | false | undefined>) =>
  cls.filter(Boolean).join(' ');

export default function Button({
  variant = 'primary',
  size = 'md',
  fullWidth,
  leftIcon,
  rightIcon,
  loading,
  as = 'button',
  href,
  target,
  rel,
  className,
  children,
  disabled,
  ...rest
}: ButtonProps) {
  const cls = cx(
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    fullWidth && 'btn--full',
    className
  );

  const content = (
    <>
      {leftIcon && <span className="btn__icon" aria-hidden>{leftIcon}</span>}
      <span>{children}</span>
      {loading ? (
        <span className="btn__spinner" aria-hidden />
      ) : (
        rightIcon && <span className="btn__icon" aria-hidden>{rightIcon}</span>
      )}
    </>
  );

  if (as === 'a') {
    return (
      <a
        className={cx('link-reset', cls)}
        href={href}
        target={target}
        rel={rel}
        aria-busy={loading ? 'true' : undefined}
        aria-disabled={disabled ? 'true' : undefined}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={(rest as any).type || 'button'}
      className={cls}
      disabled={disabled || loading}
      aria-busy={loading ? 'true' : undefined}
      {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {content}
    </button>
  );
}
