import type { FC } from 'react'
import 'rc-slider/assets/index.css';
import { Range, createSliderWithTooltip } from 'rc-slider';

//const { createSliderWithTooltip } = Slider;
const SliderRange = createSliderWithTooltip(Range);
//const { Handle } = Slider;

/* const handle = props => {
  const {
    value,
    dragging,
    index,
    ...restProps
  } = props

  return (
    <SliderTooltip
    prefixCls="rc-slider-tooltip"
    overlay={`${value}`}
    visible={true}
    defaultVisible={true}
    placement="top"
    key={index}
    align={{
      offset: [0, -5],
    }}
    >
      <>
        <Handle value={ value } { ...restProps } >
        </Handle>
      </>
    </SliderTooltip>
  )
} */

type CustomSliderProps = {
  min?: number,
  max?: number,
  step?: number,
  defaultValue?: number[]
}

export const CustomSlider: FC<CustomSliderProps> = ({
  min = 0,
  max = 10,
  step = 1,
  defaultValue = [0, 10],
  ...props
}) => (
  <div className='min-w-[180px] m-5'>
    <SliderRange
      //handle={(props) => {return ( <span className={props.className} style={{ left: props.value+'%' }}> {props.value} </span> ) }}
      min={min}
      max={max}
      step={step}
      defaultValue={[min, max]}
      tipProps={{ visible: true }}
      trackStyle={[{ backgroundColor: 'var(--primary-color)', height: '4px' }]}
      railStyle={{ backgroundColor: 'var(--dark-grey', height: '4px'}}
      handleStyle={[{ backgroundColor: 'var(--primary-color)', height: '14px', width: '14px', border: 'none' }]}
      className='w-full p-10'
      {...props}
    />
  </div>
);
