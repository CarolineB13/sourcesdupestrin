import React, { useId } from 'react';
import './Input.css';


type Size = 'sm' | 'md' | 'lg';


export type InputProps = {
id?: string;
label?: string;
required?: boolean;
hint?: string;
error?: string;
size?: Size;
fullWidth?: boolean;
className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;


const cx = (...cls: Array<string | false | undefined>) => cls.filter(Boolean).join(' ');


const Input = React.forwardRef<HTMLInputElement, InputProps>(function Input({
id,
label,
required,
hint,
error,
size = 'md',
fullWidth,
className,
...rest
}, ref){
const uid = useId();
const inputId = id || `in_${uid}`;
const hintId = hint ? `${inputId}__hint` : undefined;
const errId = error ? `${inputId}__err` : undefined;
const describedBy = [hintId, errId].filter(Boolean).join(' ') || undefined;


const inputCls = cx('input', `input--${size}`, fullWidth && 'input--full', error && 'input--error', className);


return (
<div className="field">
{label && (
<label htmlFor={inputId} className="field__label">
{label}
{required && <span className="field__required" aria-hidden>*</span>}
</label>
)}
<input
id={inputId}
ref={ref}
className={inputCls}
aria-invalid={error ? 'true' : undefined}
aria-describedby={describedBy}
required={required}
{...rest}
/>
{hint && <div id={hintId} className="field__hint">{hint}</div>}
{error && <div id={errId} className="field__error">{error}</div>}
</div>
);
});


export default Input;