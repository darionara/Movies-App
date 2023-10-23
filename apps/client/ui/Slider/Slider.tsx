import type { FC, ReactNode, ComponentPropsWithoutRef } from 'react'
import 'rc-slider/assets/index.css'
import Slider from 'rc-slider'
import clsx from 'clsx'
import './Slider.css'

type CustomSliderProps = Omit<
  ComponentPropsWithoutRef<'input'>,
  'value' | 'onChange'
> & {
  min?: number
  max?: number
  step?: number
  className?: string
  handleRender?: ReactNode
} & (
    | {
        range: true
        defaultValue?: number[]
        value?: number[]
        onChange?: (value: number[]) => void
      }
    | {
        range?: false
        defaultValue?: number
        value?: number
        onChange?: (value: number) => void
      }
  )

export const CustomSlider: FC<CustomSliderProps> = ({
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
            'w-[45px] py-1.5 px-2 mt-[-40px]',
            'absolute -translate-x-1/2 z-[1] pointer-events-none',
            'bg-dark-grey text-xs text-text-color text-center',
            'border-0 rounded shadow shadow-shadow-grey',
          )}
          style={{
            left: `${Math.round((propsRender.value / max) * 100)}%`,
          }}
        >
          <span
            className={clsx(
              'w-0 h-0 absolute bottom-[-4px] left-[50%] ml-[-4px]',
              'border-transparent border-solid border-t-dark-grey border-t-4 border-x-4 border-b-0',
            )}
          ></span>
          {propsRender.value}
        </div>
        {origin}
      </div>
    )
  }

  return (
    <div
      className={clsx('min-w-[180px] mt-12 mx-6 mb-0 h-9', className)}
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
      <div className="flex mt-1 justify-between">
        <div className="flex-1 text-left ml-[-5px] text-sm text-gray-500">
          {min}
        </div>
        <div className="flex-1 text-right mr-[-7px] text-sm text-gray-500">
          {max}
        </div>
      </div>
    </div>
  )
}
