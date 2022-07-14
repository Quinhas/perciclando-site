import Slider from 'react-slick';
import { MusicianCard } from '../MusicianCard';

interface MusicianProps {
  name: string;
  photoUrl: string;
}

const musicians: MusicianProps[] = [
  {
    name: 'Bruno J.',
    photoUrl: 'https://via.placeholder.com/160.png',
  },
  {
    name: 'Bruno T.',
    photoUrl: 'https://via.placeholder.com/160.png',
  },
  {
    name: 'Camilly',
    photoUrl: 'https://via.placeholder.com/160.png',
  },
  {
    name: 'Eduardo',
    photoUrl: 'https://via.placeholder.com/160.png',
  },
  {
    name: 'Jorge',
    photoUrl: 'https://via.placeholder.com/160.png',
  },
  {
    name: 'Leoni',
    photoUrl: 'https://via.placeholder.com/160.png',
  },
  {
    name: 'Lucas',
    photoUrl: 'https://via.placeholder.com/160.png',
  },
  {
    name: 'Mariana',
    photoUrl: 'https://via.placeholder.com/160.png',
  },
];

export function MusicianCarousel() {
  return (
    <Slider
      className="px-4"
      slidesToShow={7}
      centerPadding="72.4px"
      speed={1000}
      infinite
      centerMode
      pauseOnHover={false}
      swipeToSlide
      focusOnSelect
      initialSlide={0}
      responsive={[
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 5,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 1,
            centerPadding: '48px',
          },
        },
      ]}
    >
      {musicians.map((musician) => (
        <MusicianCard
          key={musician.name}
          name={musician.name}
          photoUrl={musician.photoUrl}
        />
      ))}
    </Slider>
  );
}
