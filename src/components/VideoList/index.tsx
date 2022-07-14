import { VideoCard } from '../VideoCard';

interface VideoProps {
  name: string;
  coverUrl: string;
  releaseDate: Date;
}

const videos: VideoProps[] = [
  {
    name: 'Arraiá do Perciclando - Festa na Roça / Pula a Fogueira / Isso Aqui Tá Bom Demais',
    coverUrl:
      'https://soup.onerpm.com/web/user/images/1/11/11ZE8db4cQQSIOmyfhOI.200.jpg',
    releaseDate: new Date('2022-07-23'),
  },
  {
    name: 'Anunciação | Perciclando',
    coverUrl:
      'https://i.ytimg.com/vi/ki5hZRfkLC0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBTqvI8TGbQU_FJ5_eCL4TjNiJvYA',
    releaseDate: new Date('2021-07-10'),
  },
  {
    name: 'Carol of the Bells | Perciclando',
    coverUrl:
      'https://i.ytimg.com/vi/o9pmLocfGMM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDK7vXXD6GTXpF8YslpqPIqDy47WA',
    releaseDate: new Date('2020-12-25'),
  },
  {
    name: 'Merry Christmas | Perciclando',
    coverUrl:
      'https://i.ytimg.com/vi/huhch5HcGHQ/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCGSz6nuv5HXigAuxd9l9GXC5Mpkg',
    releaseDate: new Date('2020-12-20'),
  },
  {
    name: 'Garota de Ipanema (Tom Jobim) | Perciclando - Uma Batucada Sustentável 2019',
    coverUrl:
      'https://i.ytimg.com/vi/sh1KeZdSjiU/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA7QD-O-mtxr_x5fZV6liWyOAq1wg',
    releaseDate: new Date('2020-06-04'),
  },
];

export function VideoList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 gap-y-6 px-2 md:px-8">
      {videos.slice(0, 4).map((video) => (
        <VideoCard
          key={video.name!}
          name={video.name!}
          coverUrl={video.coverUrl!}
          releaseDate={video.releaseDate!}
        />
      ))}
    </div>
  );
}
