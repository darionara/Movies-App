import type { FC, ReactNode, ComponentPropsWithoutRef } from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import clsx from 'clsx';
import './Slider.css';

type CustomSliderProps = Omit<
  ComponentPropsWithoutRef<'input'>,
  'value' | 'onChange'
> & {
  min: number;
  max: number;
  step: number;
  handleRender: ReactNode;
} & (
    | {
        range: true;
        defaultValue?: number[];
        value?: number[];
        onChange?: (value: number[]) => void;
      }
    | {
        range?: false;
        defaultValue?: number;
        value?: number;
        onChange?: (value: number) => void;
      }
  );

const CustomSlider: FC<CustomSliderProps> = ({
  range = false,
  min = 0,
  max = range ? 10 : 500,
  step = range ? 1 : 50,
  defaultValue = range ? [0, 10] : 250,
  className,
  value,
  onChange,
  ...props
}) => {
  const handleRender = (origin, propsRender) => {
    return (
      <div className="relative">
        <div
          className={clsx(
            'mt-[-40px] w-[45px] px-2 py-1.5',
            'pointer-events-none absolute z-[1] -translate-x-1/2',
            'bg-dark-grey text-center text-xs text-text-color ',
            'rounded border-0 shadow shadow-shadow-grey',
          )}
          style={{
            left: `${Math.round((propsRender.value / max) * 100)}%`,
          }}
        >
          <span
            className={clsx(
              'absolute bottom-[-4px] left-[50%] ml-[-4px] h-0 w-0',
              'border-x-4 border-b-0 border-t-4 border-solid border-transparent border-t-dark-grey',
            )}
          />
          {propsRender.value}
        </div>
        {origin}
      </div>
    );
  };

  return (
    <div
      className={clsx('mx-6 mb-0 mt-12 h-9 min-w-[180px] ', className)}
      {...props}
    >
      <Slider
        range={range}
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        handleRender={handleRender}
        value={value}
        onChange={onChange}
        className="w-full p-10"
      />
      <div className="mt-1 flex justify-between">
        <div className="ml-[-5px] flex-1 text-left text-sm text-gray-500">
          {min}
        </div>
        <div className="mr-[-7px] flex-1 text-right text-sm text-gray-500">
          {max}
        </div>
      </div>
    </div>
  );
};

export default CustomSlider;
