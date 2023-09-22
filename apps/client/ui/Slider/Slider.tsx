import { useState, useEffect, useRef } from 'react'
import type { FC } from 'react'
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

type CustomSliderProps = {
  min?: number
  max?: number
  step?: number
  defaultValue?: number[]
  className?: string
};

export const CustomSlider: FC<CustomSliderProps> = ({
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
    <div className='min-w-[180px] m-5 slider-container' ref={containerRef} {...props}>
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
      <div className='slider-tooltip left-tooltip'>
        <span className="rc-slider-tooltip-arrow"></span>
        {values[0]}
      </div>
      <div className='slider-tooltip right-tooltip'>
        <span className="rc-slider-tooltip-arrow"></span>
        {values[1]}
      </div>
    </div>
  );
};