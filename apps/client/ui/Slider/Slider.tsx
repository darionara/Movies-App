import React, { FC, ComponentPropsWithoutRef, ReactNode } from 'react';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import clsx from 'clsx'

type CustomSliderProps = ComponentPropsWithoutRef<'input'> & {
  range?: boolean;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number | number[];
  className?: string;
  handleRender?: ReactNode;
};

const commonTrackStyle = [{ backgroundColor: 'var(--primary-color)', height: '4px' }];

const commonHandleStyle = [
  {
    backgroundColor: 'var(--primary-color)',
    height: '14px',
    width: '14px',
    border: 'none',
    opacity: 1,
    boxShadow: '0px 4px 4px var(--shadow-grey)',
  },
  {
    backgroundColor: 'var(--primary-color)',
    height: '14px',
    width: '14px',
    border: 'none',
    opacity: 1,
    boxShadow: '0px 4px 4px var(--shadow-grey)',
  },
];

export const CustomSlider: FC<CustomSliderProps> = ({
  range = false,
  min = 0,
  max = range ? 10 : 500,
  step = range ? 1 : 50,
  defaultValue = range ? [0, 10] : 250,
  className,
  ...props
}) => {
  const commonSliderProps = {
    range,
    min,
    max,
    step,
    defaultValue,
    className: 'w-full p-10',
    handleRender: (origin, propsRender) => {
      return (
        <div className='relative'>
          <div
            className={clsx('w-[45px] py-1.5 px-2 mt-[-40px]', 'absolute -translate-x-1/2 z-[1] pointer-events-none', 'bg-dark-grey text-xs text-text-color text-center', 'border-0 rounded shadow shadow-shadow-grey')}
            style={{
              left: `${Math.round((propsRender.value / max) * 100)}%`,
            }}
          >
            <span className={clsx('w-0 h-0 absolute bottom-[-4px] left-[50%] ml-[-4px]', 'border-transparent border-solid border-t-dark-grey border-t-4 border-x-4 border-b-0')}></span>
            {propsRender.value}
          </div>
          {origin}
        </div>
      );
    },
  };

  return (
    <div className='min-w-[180px] mt-12 mx-6 mb-0 h-9' {...props}>
      <Slider
        {...commonSliderProps}
        range={range}
        trackStyle={range ? commonTrackStyle : commonTrackStyle[0]}
        railStyle={{ backgroundColor: 'var(--dark-grey)', height: '4px' }}
        handleStyle={range ? commonHandleStyle : commonHandleStyle[0]}
      />
      <div className="flex mt-1 justify-between">
        <div className="flex-1 text-left ml-[-5px] text-sm text-gray-500">{min}</div>
        <div className="flex-1 text-right mr-[-7px] text-sm text-gray-500">{max}</div>
      </div>
    </div>
  );
};
