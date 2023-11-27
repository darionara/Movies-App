import type { FC, ComponentPropsWithoutRef } from 'react';
import clsx from 'clsx';
import Image from 'next/image';

type MovieTileProps = ComponentPropsWithoutRef<'div'> & {
  title: string;
  year: number;
  rating: number;
  place: number;
  imageSrc: string;
};

const MovieTile: FC<MovieTileProps> = ({
  title,
  year,
  rating,
  place,
  imageSrc,
  className,
  ...props
}) => {
  return (
    <div className={clsx('relative', className)} {...props}>
      <Image
        src={imageSrc}
        alt={title}
        className="relative rounded-xl"
        width={211}
        height={301}
      />
      <div
        className={clsx(
          'absolute bottom-0 flex h-full w-full cursor-pointer items-end rounded-xl',
          'bg-gradient-to-b from-transparent from-30% via-black via-80% to-black p-3.5',
          'hover:from-10% hover:via-70%',
        )}
      >
        <div className="flex w-full items-end justify-between">
          <div>
            <h2 className="text-base font-semibold">
              {place}. {title}
            </h2>
            <p className="text-xs text-text-color/[0.5]">{year}</p>
          </div>
        </div>
        <div className="relative flex items-center">
          <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border-2 border-primary bg-black">
            <p className="text-xs">{rating}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieTile;
