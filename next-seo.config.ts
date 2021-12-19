import { APP_URL, BANNER_IMAGE } from 'constants/seo'

/* eslint-disable import/no-anonymous-default-export */
export default {
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: APP_URL,
    site_name: 'Happy',
    title: 'Happy',
    images: [
      {
        url: BANNER_IMAGE,
        width: 2560,
        height: 1440,
        alt: 'Happy'
      }
    ]
  },
  twitter: {
    handle: '@r3nanp',
    site: '@site',
    cardType: 'summary_large_image'
  }
}
