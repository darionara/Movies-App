import { useState, useEffect, useRef } from 'react'
import type { FC } from 'react'
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

type CustomRangeProps = {
  min?: number
  max?: number
  step?: number
  defaultValue?: number[]
  className?: string
};

const sliderStyles = ''

export const CustomRange: FC<CustomRangeProps> = ({
  min = 0,
  max = 10,
  step = 1,
  defaultValue = [0, 10],
  className,
  ...props
}) => {
  const [values, setValues] = useState<number[]>(defaultValue);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOnChange = (newValues: number[]) => {
    setValues(newValues);
  };

  const handleTooltipPosition = () => {
    if (!containerRef.current) return;

    const [leftHandle, rightHandle] = Array.from(containerRef.current.getElementsByClassName('rc-slider-handle')) as HTMLElement[];
    const [leftTooltip, rightTooltip] = Array.from(containerRef.current.getElementsByClassName('slider-tooltip')) as HTMLElement[];

    if (leftHandle && leftTooltip && rightHandle && rightTooltip) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const leftHandleRect = leftHandle.getBoundingClientRect();
      const rightHandleRect = rightHandle.getBoundingClientRect();
      const rightTooltipRect = rightTooltip.getBoundingClientRect();

      const leftOffset = leftHandleRect.left - containerRect.left - leftHandleRect.width;
      leftTooltip.style.left = `${leftOffset}px`;

      const rightOffset = rightHandleRect.left - containerRect.left + rightHandleRect.width - rightTooltipRect.width;
      rightTooltip.style.left = `${rightOffset}px`;
    }
  };

  useEffect(() => {
    handleTooltipPosition();
    window.addEventListener('resize', handleTooltipPosition);
    return () => {
      window.removeEventListener('resize', handleTooltipPosition);
    };
  }, [values]);

  return (
    <div className='min-w-[180px] mt-12 mx-6 mb-0 h-9' ref={containerRef} {...props}>
      <Slider
        range
        min={min}
        max={max}
        step={step}
        allowCross={false}
        defaultValue={values}
        onChange={handleOnChange}
        trackStyle={[{ backgroundColor: 'var(--primary-color)', height: '4px' }]}
        railStyle={{ backgroundColor: 'var(--dark-grey)', height: '4px' }}
        handleStyle={[
          {
            backgroundColor: 'var(--primary-color)',
            height: '14px',
            width: '14px',
            border: 'none',
          },
          {
            backgroundColor: 'var(--primary-color)',
            height: '14px',
            width: '14px',
            border: 'none',
          },
        ]}
        className='w-full p-10'
      />
      <div className="flex mt-[5px] justify-between">
        <div className="flex-1 text-left ml-[-5px] text-sm text-gray-500">{min}</div>
        <div className="flex-1 text-right mr-[-7px] text-sm text-gray-500">{max}</div>
      </div>
      <div className='relative bg-dark-grey py-1.5 px-2 border-0 rounded text-xs z-[1] pointer-events-none text-text-color w-[45px] text-center shadow shadow-[#141417] mt-[-75px] ml-[-1px] slider-tooltip left-tooltip'>
        <span className="absolute w-0 h-0 border-transparent border-solid border-t-dark-grey bottom-[-4px] left-[50%] ml-[-4px] border-t-4 border-x-4 border-b-0"></span>
        {values[0]}
      </div>
      <div className='relative bg-dark-grey py-1.5 px-2 border-0 rounded text-xs z-[1] pointer-events-none text-text-color w-[45px] text-center shadow shadow-[#141417] mt-[-30px] ml-4 slider-tooltip right-tooltip'>
        <span className="absolute w-0 h-0 border-transparent border-solid border-t-dark-grey bottom-[-4px] left-[50%] ml-[-4px] border-t-4 border-x-4 border-b-0"></span>
        {values[1]}
      </div>
    </div>
  );
};