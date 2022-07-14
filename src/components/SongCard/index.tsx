import { isBefore } from 'date-fns';
import Image from 'next/image';

interface SongCardProps {
  name: string;
  releaseYear: number;
  releaseDate: Date;
  releaseType: 'single' | 'album';
  coverUrl: string;
}

const types = {
  single: 'Single',
  album: 'Álbum',
};

export function SongCard({
  name,
  releaseYear,
  releaseType,
  coverUrl,
  releaseDate,
}: SongCardProps) {
  const isReleased = isBefore(releaseDate, new Date());

  return (
    <div
      className={`flex gap-2 flex-col w-full ${
        isReleased ? 'group cursor-pointer' : ''
      }`}
    >
      <div className="relative aspect-square rounded-xl shadow-md outline-0 group-hover:outline-2 group-hover:outline-green-400 outline-transparent outline outline-offset-4 overflow-hidden transition-all">
        {!isReleased && (
          <div className="absolute z-10 w-full h-full flex justify-center items-center backdrop-grayscale">
            <h1 className="font-semibold text-xl mx-auto text-center bg-warning-500 p-3 px-7 rounded-lg shadow-sm">
              EM BREVE
            </h1>
          </div>
        )}
        <Image
          src={coverUrl}
          layout="fill"
          objectFit="cover"
          alt={`Capa do ${types[releaseType]} ${name}`}
          className={isReleased ? '' : 'brightness-[35%]'}
        />
      </div>
      <div
        className={`flex gap-1 flex-col ${
          isReleased ? '' : 'brightness-[35%]'
        }`}
      >
        <p className="font-semibold truncate">{name}</p>
        <p className="font-light text-xs dark:text-zinc-300">
          {releaseYear} · {types[releaseType]}
        </p>
      </div>
    </div>
  );
}
