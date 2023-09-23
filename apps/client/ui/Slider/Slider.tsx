import { useState, useEffect, useRef } from 'react'
import type { FC } from 'react'
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

type CustomSliderProps = {
  min?: number
  max?: number
  step?: number
  defaultValue?: number
  className?: string
};

export const CustomSlider: FC<CustomSliderProps> = ({
  min = 0,
  max = 500,
  step = 50,
  defaultValue = 250,
  className,
  ...props
}) => {
  const [value, setValue] = useState<number>(defaultValue);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOnChange = (newValue: number) => {
    setValue(newValue);
  };

  const handleTooltipPosition = () => {
    if (!containerRef.current) return;

    const handle = containerRef.current?.getElementsByClassName('rc-slider-handle')[0] as HTMLElement | null;
    const tooltip = containerRef.current?.getElementsByClassName('slider-tooltip')[0] as HTMLElement | null;
    
    if (handle && tooltip) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const handleRect = handle.getBoundingClientRect();

      const offset = handleRect.left - containerRect.left - handleRect.width;
      tooltip.style.left = `${offset}px`;
    }
  };

  useEffect(() => {
    handleTooltipPosition();
    window.addEventListener('resize', handleTooltipPosition);
    return () => {
      window.removeEventListener('resize', handleTooltipPosition);
    };
  }, [value]);

  return (
    <div className='min-w-[180px] mt-12 mx-6 mb-0 h-9' ref={containerRef} {...props}>
      <Slider
        min={min}
        max={max}
        step={step}
        defaultValue={value}
        onChange={handleOnChange}
        trackStyle={{ backgroundColor: 'var(--primary-color)', height: '4px' }}
        railStyle={{ backgroundColor: 'var(--dark-grey)', height: '4px' }}
        handleStyle={
          {
            backgroundColor: 'var(--primary-color)',
            height: '14px',
            width: '14px',
            border: 'none',
          }
        }
        className='w-full'
      />
      <div className="flex mt-[5px] justify-between">
        <div className="flex-1 text-left ml-[-5px] text-sm text-gray-500">{min}</div>
        <div className="flex-1 text-right mr-[-7px] text-sm text-gray-500">{max}</div>
      </div>
      <div className='relative bg-dark-grey py-1.5 px-2 border-0 rounded text-xs z-[1] pointer-events-none text-text-color w-[45px] text-center shadow shadow-[#141417] mt-[-75px] ml-[-1px] slider-tooltip'>
        <span className="absolute w-0 h-0 border-transparent border-solid border-t-dark-grey bottom-[-4px] left-[50%] ml-[-4px] border-t-4 border-x-4 border-b-0"></span>
        {value}
      </div>
    </div>
  );
};