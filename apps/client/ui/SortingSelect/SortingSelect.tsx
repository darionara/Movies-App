import type { ComponentPropsWithoutRef } from 'react';
import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';

import { selectSortOption } from '@/store/MainSlice';
import { RootState } from '@/store/store';
import ArrowDownIcon from '@/ui/Icons/ArrowDown/ArrowDown';

type SortingSelectProps = ComponentPropsWithoutRef<'select'> & {
  options: string[];
};

const SortingSelect: React.FC<SortingSelectProps> = ({
  options,
  className,
}) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(2);
  const selected = useSelector((state: RootState) => state.main.selected);

  const selectRef = useRef<HTMLDivElement>(null);
  const ulRef = useRef<HTMLUListElement>(null);
  const liRefs = useRef<(HTMLLIElement | null)[]>([]);

  function selectOption(option: string) {
    dispatch(selectSortOption(option));
    setIsOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const liHeight = liRefs.current[focusedIndex]?.offsetHeight || 0;
    const scrollTop = ulRef.current?.scrollTop || 0;
    const viewport = scrollTop + (ulRef.current?.offsetHeight || 0);
    const liOffset = liHeight * focusedIndex;

    if (
      ulRef.current &&
      (liOffset < scrollTop || liOffset + liHeight > viewport)
    ) {
      ulRef.current.scrollTop = liOffset;
    }
  }, [focusedIndex]);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (!isOpen) return;
    event.preventDefault();
    switch (event.key) {
      case 'ArrowUp':
        setFocusedIndex((prevIndex) => (prevIndex <= 0 ? 0 : prevIndex - 1));
        break;
      case 'ArrowDown':
        setFocusedIndex((prevIndex) =>
          prevIndex >= options.length - 1 ? options.length - 1 : prevIndex + 1,
        );
        break;
      case 'Enter':
      case ' ':
        if (focusedIndex >= 0 && focusedIndex < options.length) {
          selectOption(options[focusedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
      default:
        break;
    }
  };

  return (
    <div
      className={clsx('relative border-r border-dark-grey', className)}
      ref={selectRef}
    >
      <button
        className={clsx(
          'flex items-center justify-between bg-background-color',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300',
        )}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        type="button"
      >
        <span className="pr-1.5 text-sm font-bold">{selected}</span>
        <ArrowDownIcon
          className={clsx(
            'transform transition-transform duration-100 ease-in-out',
            { 'rotate-180': isOpen },
          )}
        />
      </button>
      {isOpen && (
        <ul
          className="absolute left-0 right-0 top-full z-10 mt-1 w-48 rounded-md border bg-white"
          ref={ulRef}
        >
          {options.map((option, index) => (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
            <li
              key={option}
              className={clsx(
                'cursor-pointer px-4 py-2 text-xs text-black',
                'transition-ease-in-out p-3 transition-colors duration-200 hover:bg-gray-300',
                {
                  'font-bold': selected === option,
                  'bg-gray-300': focusedIndex === index,
                },
              )}
              onClick={() => selectOption(option)}
              // eslint-disable-next-line no-return-assign
              ref={(li) => (liRefs.current[index] = li)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortingSelect;
