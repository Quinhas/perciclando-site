import Image from 'next/image';

interface MusicianCardProps {
  name: string;
  photoUrl: string;
}

export function MusicianCard({ name, photoUrl }: MusicianCardProps) {
  return (
    <div className="group flex flex-col gap-2 items-center justify-center cursor-pointer p-6">
      <div className="relative w-full aspect-square rounded-full shadow-md outline-0 group-hover:outline-2 group-hover:outline-green-400 outline-transparent outline outline-offset-4 overflow-hidden transition-all">
        <Image
          src={photoUrl}
          layout="fill"
          objectFit="cover"
          alt={`Foto do músico ${photoUrl}`}
        />
      </div>
      <p className="font-semibold text-md leading-6">{name}</p>
    </div>
  );
}
