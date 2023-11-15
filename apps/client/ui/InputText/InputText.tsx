import type { FC, ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';

type InputTextProps = ComponentPropsWithoutRef<'input'>;

const InputText: FC<InputTextProps> = ({
  placeholder = 'Filter by keywords...',
  className,
  ...props
}) => {
  return (
    <input
      type="text"
      className={clsx(
        'text-white/35 rounded-md bg-input-color px-4 py-3 focus:outline-none',
        className,
      )}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default InputText;
