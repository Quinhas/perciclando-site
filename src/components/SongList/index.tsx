import { SongCard } from '../SongCard';

interface SongProps {
  name: string;
  coverUrl: string;
  releaseDate: Date;
  releaseYear: number;
  releaseType: 'album' | 'single'
}

const songs: SongProps[] = [
  {
    name: 'Arraiá do Perciclando - Festa na Roça / Pula a Fogueira / Isso Aqui Tá Bom Demais',
    coverUrl: 'https://soup.onerpm.com/web/user/images/1/11/11ZE8db4cQQSIOmyfhOI.200.jpg',
    releaseYear: 2022,
    releaseType: 'single',
    releaseDate: new Date('2022-07-23'),
  },
  {
    name: 'Anunciação (Cover)',
    coverUrl: 'https://i.scdn.co/image/ab67616d0000b2732d96ea15d709fbd4140e3ee6',
    releaseYear: 2021,
    releaseType: 'single',
    releaseDate: new Date('2021-07-10'),
  },
  {
    name: 'Carol Of The Bells',
    coverUrl: 'https://i.scdn.co/image/ab67616d00001e024df04fe4149a7e49787246ca',
    releaseYear: 2020,
    releaseType: 'single',
    releaseDate: new Date('2020-12-25'),
  },
  {
    name: 'Cheia de Manias (Cover)',
    coverUrl: 'https://i.scdn.co/image/ab67616d00001e026ad69fde2e0ec601b9ad7021',
    releaseYear: 2020,
    releaseType: 'single',
    releaseDate: new Date('2020-12-20'),
  },
  {
    name: 'Dance Monkey (Cover)',
    coverUrl: 'https://i.scdn.co/image/ab67616d00001e02b3071b1ac1aa7b72fc487ddc',
    releaseYear: 2020,
    releaseType: 'single',
    releaseDate: new Date('2020-06-04'),
  },
];

export function SongList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 gap-y-6 px-2 md:px-8">
      {songs.slice(0, 5).map((song) => (
        <SongCard
          key={song.name}
          name={song.name}
          coverUrl={song.coverUrl}
          releaseType={song.releaseType}
          releaseYear={song.releaseYear}
          releaseDate={song.releaseDate}
        />
      ))}
    </div>
  );
}
