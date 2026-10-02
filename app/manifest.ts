import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Elevation Studio | Diaspora Architecture & Home Design Nigeria',
    short_name: 'Elevation Studio',
    description:
      'Design your home or property in Nigeria remotely from abroad with Elevation Studio. Professional 3D visualisation, architectural planning & diaspora project consultation.',
    start_url: '/',
    display: 'standalone',
    background_color: '#faf9f7',
    theme_color: '#b5784e',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
