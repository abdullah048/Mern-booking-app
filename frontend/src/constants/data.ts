import {
  BrowseCategory,
  DiscoverHomes,
  Explore,
  FooterMenuLink,
  FooterTopLink,
  HeaderNavLinks,
  HorizontalMenuList,
  ImageGallery,
  Inspiration,
  OfferBanner,
  PassengerInfo,
  RecentSearch,
  UniqueProperties,
} from './types';
import { v4 as uuid } from 'uuid';
import bookingsImg from '@assets/imgs/bookings.com.png';
import pricelineImg from '@assets/imgs/priceline.png';
import KayakImg from '@assets/imgs/kayak.png';
import rentalCarsImg from '@assets/imgs/rentalcars.png';
import agodaImg from '@assets/imgs/agoda.png';
import openTableImg from '@assets/imgs/opentable.png';
import blackBedIcon from '@assets/svgs/bed-black.svg';
import calenderIcon from '@assets/svgs/calender.svg';
import personIcon from '@assets/svgs/person.svg';

export const headerNavLinks: HeaderNavLinks[] = [
  {
    id: uuid(),
    type: 'ghost',
    label: 'PKR',
    tooltip: 'Select your currency',
  },
  {
    id: uuid(),
    type: 'icon',
    label: 'contact',
    tooltip: 'Contact customer care',
  },
  {
    id: uuid(),
    type: 'ghost',
    label: 'List your property',
  },
  {
    id: uuid(),
    type: 'button',
    label: 'Register',
    route: '/register',
  },
  {
    id: uuid(),
    type: 'button',
    label: 'Sign in',
    route: '/sign-in',
  },
  {
    id: uuid(),
    type: 'button',
    label: 'Sign out',
  },
];

export const smallDeviceHeaderNavLinks: HeaderNavLinks[] = [
  {
    id: uuid(),
    type: 'icon',
    label: 'sign in',
    tooltip: 'Sign in',
  },
  {
    id: uuid(),
    type: 'icon',
    label: 'menu',
  },
];

export const horizontalMenuList: HorizontalMenuList[] = [
  {
    id: uuid(),
    icon: 'bed',
    label: 'Stays',
  },
  {
    id: uuid(),
    icon: 'plane',
    label: 'Flights',
  },
  {
    id: uuid(),
    icon: 'car',
    label: 'Car rentals',
  },
  {
    id: uuid(),
    icon: 'attraction',
    label: 'Attractions',
  },
  {
    id: uuid(),
    icon: 'taxi',
    label: 'Airport taxis',
  },
];

export const footerTopLinks: FooterTopLink[] = [
  {
    id: uuid(),
    label: 'Mobile version',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Your account',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Make changes to your booking online',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Customer service help',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Become an affiliate',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Booking.com for business',
    link: '/',
  },
];

export const footerMenuLinks: FooterMenuLink[] = [
  {
    id: uuid(),
    label: 'Countries',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Regions',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Cities',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Districts',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Airports',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Hotels',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Place of interest',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Homes',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Apartments',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Resorts',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Villas',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Hostels',
    link: '/',
  },
  {
    id: uuid(),
    label: 'B&Bs',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Guest',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Unique places to stay',
    link: '/',
  },
  {
    id: uuid(),
    label: 'All destinations',
    link: '/',
  },
  {
    id: uuid(),
    label: 'All flight destinations',
    link: '/',
  },
  {
    id: uuid(),
    label: 'All car hire locations',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Discover',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Reviews',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Discover monthly stays',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Unpacked: Travel articles',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Seasonal and holiday deals',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Traveler Review Awards',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Care hire',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Flight finder',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Restaurant reservations',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Booking.com for travel agents',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Coronavirus (COVID-19) FAQs',
    link: '/',
  },
  {
    id: uuid(),
    label: 'About bookings.com',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Customer service help',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Partner help',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Careers',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Sustainability',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Press center',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Safety resource center',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Investor relations',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Terms & conditions',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Partner dispute',
    link: '/',
  },
  {
    id: uuid(),
    label: 'How we work',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Privacy & cookie statement',
    link: '/',
  },
  {
    id: uuid(),
    label: 'MSA statement',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Corporate contact',
    link: '/',
  },
  {
    id: uuid(),
    label: 'Content guidelines and reporting',
    link: '/',
  },
];

export const footerLogosList = [
  {
    id: uuid(),
    img: bookingsImg,
    alt: 'bookings.com',
  },
  {
    id: uuid(),
    img: pricelineImg,
    alt: 'priceline.com',
  },
  {
    id: uuid(),
    img: KayakImg,
    alt: 'kayak.com',
  },
  {
    id: uuid(),
    img: agodaImg,
    alt: 'agoda.com',
  },
  {
    id: uuid(),
    img: rentalCarsImg,
    alt: 'rental-cars.com',
  },
  {
    id: uuid(),
    img: openTableImg,
    alt: 'open-table.com',
  },
];

export const searchItems = [
  {
    id: uuid(),
    type: 'search',
    icon: blackBedIcon,
    placeholder: 'Where are you going?',
  },
  {
    id: uuid(),
    type: 'date',
    icon: calenderIcon,
    placeholder: 'Check-in date - Check-out date',
  },
  {
    id: uuid(),
    type: 'select',
    icon: personIcon,
    placeholder: 'No of passengers',
  },
  {
    id: uuid(),
    type: 'button',
    icon: '',
    placeholder: 'Search',
  },
];

export const passengerInfo: PassengerInfo[] = [
  {
    id: uuid(),
    label: 'Adults',
    defaultValue: 2,
    min: 1,
    max: 30,
  },
  {
    id: uuid(),
    label: 'Children',
    defaultValue: 0,
    min: 0,
    max: 10,
  },
  {
    id: uuid(),
    label: 'Rooms',
    defaultValue: 1,
    min: 1,
    max: 30,
  },
];

export const ageSelectData = [
  { value: -1, label: 'Age needed' },
  { value: 0, label: '0 year old' },
  { value: 1, label: '1 year old' },
  { value: 2, label: '2 years old' },
  { value: 3, label: '3 years old' },
  { value: 4, label: '4 years old' },
  { value: 5, label: '5 years old' },
  { value: 6, label: '6 years old' },
  { value: 7, label: '7 years old' },
  { value: 8, label: '8 years old' },
  { value: 9, label: '9 years old' },
  { value: 10, label: '10 years old' },
  { value: 11, label: '11 years old' },
  { value: 12, label: '12 years old' },
  { value: 13, label: '13 years old' },
  { value: 14, label: '14 years old' },
  { value: 15, label: '15 years old' },
  { value: 16, label: '16 years old' },
  { value: 17, label: '17 years old' },
];

export const recentSearchData: RecentSearch[] = [
  {
    id: uuid(),
    name: 'Eiffel Tower',
    date: '6 Feb - 5 Mar, 2 person',
    img: 'https://cf.bstatic.com/xdata/images/landmark/square100/275261.webp?k=5091de862f8ca9c57b49672b88164691ddb0912b77de75f795caf98b29b7ae95&o=',
  },
  {
    id: uuid(),
    name: 'Islamabad',
    date: '6 Feb - 9 Feb, 1 person',
    img: 'https://cf.bstatic.com/xdata/images/city/square100/724981.webp?k=d2a74ca55c128d783c4a6836713abe2ef7874ba2cc276b9f671df017ff24da19&o=',
  },
  {
    id: uuid(),
    name: 'Islamabad',
    date: '6 Feb - 9 Feb, 2 person',
    img: 'https://cf.bstatic.com/xdata/images/city/square100/724981.webp?k=d2a74ca55c128d783c4a6836713abe2ef7874ba2cc276b9f671df017ff24da19&o=',
  },
  {
    id: uuid(),
    name: 'Islamabad',
    date: '6 Feb - 9 Feb, 1 person',
    img: 'https://cf.bstatic.com/static/img/default_city_new/f6332c2300fb1a707f474aac290203ad5eb5590d.gif',
  },
  {
    id: uuid(),
    name: 'Prague',
    date: '6 Feb - 9 Feb, 2 person',
    img: 'https://cf.bstatic.com/xdata/images/city/square100/653172.webp?k=7f27dcc9202d8b94c667e446798404cc05350041c6b9332829723bcce5bf759b&o=',
  },
];

export const offersData: OfferBanner[] = [
  {
    id: uuid(),
    title: 'New year, new adventures',
    description: 'Save 15% or more when you book and stay before 1 April 2024',
    btnText: 'Find Early 2024 Deals',
    img: 'https://q-xx.bstatic.com/xdata/images/xphoto/714x300/293799350.jpeg?k=8a6f4e24c37096fbdcd3c3d30c9f3dcea15ce35751448466decf791918012a64&o=',
  },
  {
    id: uuid(),
    title: 'Take your longest holiday yet',
    description:
      'Browse properties offering long-term stays, many at reduced monthly rates.',
    btnText: 'Find a stay',
    img: 'https://r-xx.bstatic.com/xdata/images/xphoto/500x500/220031205.jpeg?k=bf9841e8ba89dfdf92e02d45e45dc89fcca2d981b7c74ad57d3ecf6ba64ba1c2&o=',
  },
  {
    id: uuid(),
    title: 'New year, new adventures',
    description: 'Save 15% or more when you book and stay before 1 April 2024',
    btnText: 'Find Early 2024 Deals',
    img: 'https://q-xx.bstatic.com/xdata/images/xphoto/714x300/293799350.jpeg?k=8a6f4e24c37096fbdcd3c3d30c9f3dcea15ce35751448466decf791918012a64&o=',
  },
  {
    id: uuid(),
    title: 'Take your longest holiday yet',
    description:
      'Browse properties offering long-term stays, many at reduced monthly rates.',
    btnText: 'Find a stay',
    img: 'https://r-xx.bstatic.com/xdata/images/xphoto/500x500/220031205.jpeg?k=bf9841e8ba89dfdf92e02d45e45dc89fcca2d981b7c74ad57d3ecf6ba64ba1c2&o=',
  },
];

export const imageGalleryData: ImageGallery[] = [
  {
    id: uuid(),
    first: [
      {
        id: uuid(),
        title: 'Lahore',
        flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAtFBMVEX///8AAAAAAAAAAAAAAAD////3+Pfw9PHv7+/m7Obi6uPU39bK2MvI18vD08W8zb6yx7WwxLKtw6+kvKidt6GYs5uZs5uJp4yEpIiBooaAoIR4nH5ylXRrknBnjWpli2hchmFbhF5VgFtbf1tQfVRNe1NHdUpCckhBcEU/bUI6az46a0AyZjgwYjErYDEhWCgeWCUbVyMXUx4VUhwSUBkQTBcJSRAPSBALRBAPRA8GQQgGPQaUDIdTAAAABXRSTlMAESIzRJTdRHwAAADUSURBVBgZrcHNTsJgEIbR552ZGn9SuhGjceX935FegLJQQgKp8BXG+tUNyMbEc+DfCHFOSsHoiRMvIb6tONYpqBqO7CGojJGKnCqFUZmbNf2mcS/rYmYiUAINqF/dXSSbz6FNnKBypdZ2o1SXnWcmQRVK7Qigaz3BCKpLpTTsZ3tQQkkMMRKKK17NJVwjjInBXJvnbYQtexO4PIEHlNe53r4vPxZ5S2oRiB/DY/vWF+b3A4JgEgMMs67QUEBGUB1KAjvElkmAA8EpycRveRDinOTPvgBVx0dTBQSpBgAAAABJRU5ErkJggg==',
        img: 'https://cf.bstatic.com/xdata/images/city/540x270/688249.jpg?k=42442ea62b97c8d6b57b4b6171b406e6778a9b160b4ce0c69f53726b397c7d3e&o=',
      },
      {
        id: uuid(),
        title: 'Islamabad',
        flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAtFBMVEX///8AAAAAAAAAAAAAAAD////3+Pfw9PHv7+/m7Obi6uPU39bK2MvI18vD08W8zb6yx7WwxLKtw6+kvKidt6GYs5uZs5uJp4yEpIiBooaAoIR4nH5ylXRrknBnjWpli2hchmFbhF5VgFtbf1tQfVRNe1NHdUpCckhBcEU/bUI6az46a0AyZjgwYjErYDEhWCgeWCUbVyMXUx4VUhwSUBkQTBcJSRAPSBALRBAPRA8GQQgGPQaUDIdTAAAABXRSTlMAESIzRJTdRHwAAADUSURBVBgZrcHNTsJgEIbR552ZGn9SuhGjceX935FegLJQQgKp8BXG+tUNyMbEc+DfCHFOSsHoiRMvIb6tONYpqBqO7CGojJGKnCqFUZmbNf2mcS/rYmYiUAINqF/dXSSbz6FNnKBypdZ2o1SXnWcmQRVK7Qigaz3BCKpLpTTsZ3tQQkkMMRKKK17NJVwjjInBXJvnbYQtexO4PIEHlNe53r4vPxZ5S2oRiB/DY/vWF+b3A4JgEgMMs67QUEBGUB1KAjvElkmAA8EpycRveRDinOTPvgBVx0dTBQSpBgAAAABJRU5ErkJggg==',
        img: 'https://cf.bstatic.com/xdata/images/city/540x270/724981.jpg?k=d2a74ca55c128d783c4a6836713abe2ef7874ba2cc276b9f671df017ff24da19&o=',
      },
    ],
    second: [
      {
        id: uuid(),
        title: 'Dubai',
        flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAjVBMVEX///8AAAAAAAAAAAAAAAD////29vaRzq+Jy6qAxqN6xJ90wJtxv5jwkZVlupDvio5VsoTugIRKrHzte4Dten/rdHnscXbqaG3pZWroWl/oWF7nUljnUFXmS1DjR03hQ0neQkLlPUPeOUDcNjziMTfZMTfgJy7WKC7gISjUJCrfGCDPGCAXFxcREREICAjEBKG3AAAABXRSTlMAESIzRJTdRHwAAAB7SURBVBgZrcHRCcJAFETRO5MBsQYrsP9e7ENBhED2uZ+bZH8Ez4G/EWKmpFvRvdl7RvWiW9m5KshRaWPUIMgLYEZlgmLAjAqCbODDzkqQF05EcMJE0CVMGDMVsJkILro7o8bDmKmAOREEbw0oDgILnTiQLM6qCTFT/OwLnkMXZQ19cIQAAAAASUVORK5CYII=',
        img: 'https://cf.bstatic.com/xdata/images/city/354x266/977220.jpg?k=ee4b7b42c35b8cbf09c8ddb7630092b40cd706fec153c41904ed6e252a883938&o=',
      },
      {
        id: uuid(),
        title: 'Karachi',
        flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAtFBMVEX///8AAAAAAAAAAAAAAAD////3+Pfw9PHv7+/m7Obi6uPU39bK2MvI18vD08W8zb6yx7WwxLKtw6+kvKidt6GYs5uZs5uJp4yEpIiBooaAoIR4nH5ylXRrknBnjWpli2hchmFbhF5VgFtbf1tQfVRNe1NHdUpCckhBcEU/bUI6az46a0AyZjgwYjErYDEhWCgeWCUbVyMXUx4VUhwSUBkQTBcJSRAPSBALRBAPRA8GQQgGPQaUDIdTAAAABXRSTlMAESIzRJTdRHwAAADUSURBVBgZrcHNTsJgEIbR552ZGn9SuhGjceX935FegLJQQgKp8BXG+tUNyMbEc+DfCHFOSsHoiRMvIb6tONYpqBqO7CGojJGKnCqFUZmbNf2mcS/rYmYiUAINqF/dXSSbz6FNnKBypdZ2o1SXnWcmQRVK7Qigaz3BCKpLpTTsZ3tQQkkMMRKKK17NJVwjjInBXJvnbYQtexO4PIEHlNe53r4vPxZ5S2oRiB/DY/vWF+b3A4JgEgMMs67QUEBGUB1KAjvElkmAA8EpycRveRDinOTPvgBVx0dTBQSpBgAAAABJRU5ErkJggg==',
        img: 'https://cf.bstatic.com/xdata/images/city/354x266/640442.jpg?k=90687d20998ee01829027c5e6396a0b8c6d9198bb76bd5ffc7c49c5b779e18ae&o=',
      },
      {
        id: uuid(),
        title: 'Makkah',
        flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAdVBMVEX///8AAAAAAAAAAAAAAADJ2Mm4yrivxa+tva2lvaWhuaCbtpuUsJSNrI2JqImDpIN7nXt0mnRyl3Jqk2pjjGNeil5YhFhTgVNQf1BKekpCdUI5bDkyaTIzZjMpYiklXyUoXighWSEZVxkZUhkRURESSxIJSgkrFIpeAAAABXRSTlMAESIzRJTdRHwAAADASURBVBgZrcHNTsIAEIXR796ZApUY4473fzq3Jib8tJ0RYUEi3Zh4DvwbIda0dGDNR4ovnu2VoOC3RSSyuWvEXYsEm/lcW9VSJmoedjQY2bFMZVdHR1WHbUiIYPT5tMmasjwcHSASh9REapqGzaQaSgQkytSJ3Bz3l11suyt3PTcJoseRfhWFodQIEiEaRCNVh1tgEiPgs8VVLXo3GBLx442buhRXahI1D36BAkzipXgobkxCsEayeNYlxJrmz74Bp2NHxzVJza0AAAAASUVORK5CYII=',
        img: 'https://cf.bstatic.com/xdata/images/city/354x266/688591.jpg?k=9a550fedccb750cfa3f2e8eaf507287d4007f21def68e6566cc00b200946e876&o=',
      },
    ],
  },
];

export const exploreLocationData: Explore[] = [
  {
    id: uuid(),
    title: 'Lahore',
    description: '307 properties',
    img: 'https://q-xx.bstatic.com/xdata/images/city/170x136/688249.jpg?k=42442ea62b97c8d6b57b4b6171b406e6778a9b160b4ce0c69f53726b397c7d3e&o=',
  },
  {
    id: uuid(),
    title: 'Islamabad',
    description: '293 properties',
    img: 'https://q-xx.bstatic.com/xdata/images/city/170x136/724981.jpg?k=d2a74ca55c128d783c4a6836713abe2ef7874ba2cc276b9f671df017ff24da19&o=',
  },
  {
    id: uuid(),
    title: 'Karachi',
    description: '161 properties',
    img: 'https://q-xx.bstatic.com/xdata/images/city/170x136/640442.jpg?k=90687d20998ee01829027c5e6396a0b8c6d9198bb76bd5ffc7c49c5b779e18ae&o=',
  },
  {
    id: uuid(),
    title: 'Murree',
    description: '57 properties',
    img: 'https://q-xx.bstatic.com/xdata/images/city/170x136/724981.jpg?k=d2a74ca55c128d783c4a6836713abe2ef7874ba2cc276b9f671df017ff24da19&o=',
  },
  {
    id: uuid(),
    title: 'Nathia Gali',
    description: '3 properties',
    img: 'https://q-xx.bstatic.com/xdata/images/city/170x136/724981.jpg?k=d2a74ca55c128d783c4a6836713abe2ef7874ba2cc276b9f671df017ff24da19&o=',
  },
  {
    id: uuid(),
    title: 'Rawalpindi',
    description: '141 properties',
    img: 'https://q-xx.bstatic.com/xdata/images/city/170x136/633457.jpg?k=3ad8da46014cdb4e1c32103af31901b257218fc4c19395e1bafca75e000f0897&o=',
  },
  {
    id: uuid(),
    title: 'Multan',
    description: '39 properties',
    img: 'https://q-xx.bstatic.com/xdata/images/city/170x136/724981.jpg?k=d2a74ca55c128d783c4a6836713abe2ef7874ba2cc276b9f671df017ff24da19&o=',
  },
  {
    id: uuid(),
    title: 'Faisalabad',
    description: '15 properties',
    img: 'https://faisalabad.punjab.gov.pk/system/files/clock-tower-fsd.jpg',
  },
  {
    id: uuid(),
    title: 'Malam Jabba',
    description: '1 properties',
    img: 'https://q-xx.bstatic.com/xdata/images/city/170x136/724981.jpg?k=d2a74ca55c128d783c4a6836713abe2ef7874ba2cc276b9f671df017ff24da19&o=',
  },
  {
    id: uuid(),
    title: 'Peshawar',
    description: '13 properties',
    img: 'https://q-xx.bstatic.com/xdata/images/city/170x136/886699.jpg?k=889c52ffd8ccf862f6ae020cec9679c9b67924dc08dda1fabb8834fb299bf203&o=',
  },
];

export const browseByCategoryData: BrowseCategory[] = [
  {
    id: uuid(),
    title: 'Hotels',
    img: 'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=',
  },
  {
    id: uuid(),
    title: 'Apartments',
    img: 'https://q-xx.bstatic.com/xdata/images/hotel/263x210/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=',
  },
  {
    id: uuid(),
    title: 'Resorts',
    img: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: uuid(),
    title: 'Villas',
    img: 'https://r-xx.bstatic.com/xdata/images/hotel/263x210/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=',
  },
  {
    id: uuid(),
    title: 'Cabins',
    img: 'https://q-xx.bstatic.com/xdata/images/hotel/263x210/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=',
  },
  {
    id: uuid(),
    title: 'Cottages',
    img: 'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=',
  },
  {
    id: uuid(),
    title: 'Glamping',
    img: 'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450090.jpeg?k=52f6b8190edb5a9c91528f8e0f875752ce55a6beb35dc62873601e57944990e4&o=',
  },
  {
    id: uuid(),
    title: 'Serviced apartments',
    img: 'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450058.jpeg?k=2449eb55e8269a66952858c80fd7bdec987f9514cd79d58685651b7d6e9cdfcf&o=',
  },
  {
    id: uuid(),
    title: 'Holiday homes',
    img: 'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450113.jpeg?k=76b3780a0e4aacb9d02ac3569b05b3c5e85e0fd875287e9ac334e3b569f320c7&o=',
  },
  {
    id: uuid(),
    title: 'Guest houses',
    img: 'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450073.jpeg?k=795a94c30433de1858ea52375e8190a962b302376be2e68aa08be345d936557d&o=',
  },
  {
    id: uuid(),
    title: 'Hostels',
    img: 'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450082.jpeg?k=beb101b827a729065964523184f4db6cac42900c2415d71d516999af40beb7aa&o=',
  },
  {
    id: uuid(),
    title: 'Motels',
    img: 'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450093.jpeg?k=aa5cc7703f3866af8ffd6de346c21161804a26c3d0a508d3999c11c337506ae1&o=',
  },
  {
    id: uuid(),
    title: 'B&Bs',
    img: 'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450056.jpeg?k=251e2507d43a24a4c58bb961b8d157147d56efbf91b49f9606bc768c58f581e4&o=',
  },
  {
    id: uuid(),
    title: 'Ryokans',
    img: 'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450279.jpeg?k=cb9ab85ffe439f3030e00281f2d52583a398bf076e54f00f746e1d1baf62bf6e&o=',
  },
  {
    id: uuid(),
    title: 'Riads',
    img: 'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450064.jpeg?k=4d4ea22dc4828fd55a3889e90531c9841ddb2d9abf460c420cdd24f2a9b658d2&o=',
  },
  {
    id: uuid(),
    title: 'Holiday parks',
    img: 'https://r-xx.bstatic.com/xdata/images/xphoto/263x210/45450068.jpeg?k=41cc7c5449011323aaaaed4e845cb16200b5d540c77a50c1bea90399a1e92d70&o=',
  },
  {
    id: uuid(),
    title: 'Home stays',
    img: 'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450066.jpeg?k=4adfab312f5d26da9f81da48d8c95ca8f108215b2c84085590891a9e0e17b144&o=',
  },
  {
    id: uuid(),
    title: 'Campsites',
    img: 'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450283.jpeg?k=44ef0e355cff36883935e4c99b5c01b035eabebad278d22363210b2fe40b2791&o=',
  },
  {
    id: uuid(),
    title: 'Country houses',
    img: 'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450103.jpeg?k=a1fa72362160b1df6e288050afa7ce1aade80871acd368ddd4a4ebf6ad87764e&o=',
  },
  {
    id: uuid(),
    title: 'Farm stays',
    img: 'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450080.jpeg?k=15d9709efa513f2b23b5fa8d5234d87bdee2bf97b3e7552244592da11413db9a&o=',
  },
  {
    id: uuid(),
    title: 'Boats',
    img: 'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450095.jpeg?k=cd5e46e632dab722d22217813485efde31fbe82f5f26a624166edccdbe8187bc&o=',
  },
  {
    id: uuid(),
    title: 'Luxury tents',
    img: 'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450097.jpeg?k=eac0f917a53dc395bd379fef8c191e7d5e37012b68e60232e4f6bba2a2901b7a&o=',
  },
  {
    id: uuid(),
    title: 'Self catering accommodations',
    img: 'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/45450075.jpeg?k=d23cf8443780ac09f46f59e40393d75dbe64b06029b4959c60b81b7fdefc9be0&o=',
  },
  {
    id: uuid(),
    title: 'Tiny houses',
    img: 'https://q-xx.bstatic.com/xdata/images/xphoto/263x210/57175023.jpeg?k=dc0319d4d64ded9ee4b0ddb162a2e80db7899300b7bf21b34506888895d74c79&o=',
  },
];

export const uniquePropertiesData: UniqueProperties[] = [
  {
    id: uuid(),
    title: 'Gyttja Västergårds',
    description: 'Finland, Lillandet',
    numberOfReviews: 207,
    comments: 'Superb',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/255854447.webp?k=f9c9d47f18b3156fdcc5596749d137f35e3cf4962a8d3d37d69be0066ec9bfc3&o=',
    rating: 9.3,
  },
  {
    id: uuid(),
    title: 'Waldschenke Stendenitz Übernachten im Wald am See',
    description: 'Germany, Neuruppin',
    numberOfReviews: 309,
    comments: 'Fabulous',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/237686104.webp?k=3813d2af0058b6676f19e8d707977dd086b6fd873d46dd9c19a8aaba24f813ff&o=',
    rating: 8.7,
  },
  {
    id: uuid(),
    title: 'Casa rural La Marquesa - Cuenca',
    description: 'Spain, Valera de Abajo',
    numberOfReviews: 39,
    comments: 'Superb',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/255854447.webp?k=f9c9d47f18b3156fdcc5596749d137f35e3cf4962a8d3d37d69be0066ec9bfc3&o=',
    rating: 9.4,
  },
  {
    id: uuid(),
    title: 'Domki ROSSE niedaleko plaży',
    description: 'Poland, Jastrzębia Góra',
    numberOfReviews: 139,
    comments: 'Exceptional',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/210943150.webp?k=1d3cb2f9c178756981110c1d6f895a65793f0ab4e62a613ee9f7d4ae140a3bad&o=',
    rating: 9.8,
  },
  {
    id: uuid(),
    title: 'Casaprisco',
    description: 'Netherlands, Putten',
    numberOfReviews: 79,
    comments: 'Superb',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/179387540.webp?k=cbf33b04282d8beb50db374f587fedfc39a8787f761dc9ad3b823191cea4b5e1&o=',
    rating: 9.3,
  },
  {
    id: uuid(),
    title: 'Das rote Haus hinterm Deich',
    description: 'Germany, Simonsberg',
    numberOfReviews: 48,
    comments: 'Superb',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/178421496.webp?k=94836d8c61053e484c5ef0110211d6eacf89d8e58f8dfa3e58d14833287cc3a1&o=',
    rating: 9.4,
  },
  {
    id: uuid(),
    title: 'Tiny House Dreischwesternherz',
    description: 'Germany, Trier',
    numberOfReviews: 157,
    comments: 'Exceptional',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/187853972.webp?k=dd753431cf4b638642614dc060512d832d24f3249eef30b9a5f18601d2ac5635&o=',
    rating: 9.5,
  },
  {
    id: uuid(),
    title: 'Casa na praia em São Sebastião',
    description: 'Brazil, São Sebastião',
    numberOfReviews: 45,
    comments: 'Exceptional',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/164383742.webp?k=61074259c477f7211cbd42a6542dcc3b1b1a049e332ba349d836b663df33d511&o=',
    rating: 9.6,
  },
  {
    id: uuid(),
    title: 'Carinya Park',
    description: 'Australia, Gembrook',
    numberOfReviews: 37,
    comments: 'Superb',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/154543781.webp?k=847c6d1ffe92003d2d7c9cf7043c6acda1c550e6f0c7c981370a6303f12a10cf&o=',
    rating: 9.3,
  },
  {
    id: uuid(),
    title: 'Ronczo w Dolinie',
    description: 'Poland, kiszkowo',
    numberOfReviews: 227,
    comments: 'Exceptional',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/131500906.webp?k=b6f638eadb7c9632498a9e9a15440987a22489684b8825b0cb235bd3c79f07de&o=',
    rating: 9.5,
  },
  {
    id: uuid(),
    title: 'La Maison Pamaljolie',
    description: 'Canada, Stanstead-Est',
    numberOfReviews: 48,
    comments: 'Superb',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/131056675.webp?k=b270059e6cb5f68d7d5e114a7db1dba9c0664f79ce1b6962912950ed002a5dc8&o=',
    rating: 9.1,
  },
  {
    id: uuid(),
    title: 'Agriturismo Cabrele',
    description: 'Italy, Santorso',
    numberOfReviews: 269,
    comments: 'Superb',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/126764303.webp?k=46a8a949ef420510834df06d0d88e293fbaae80cd1e17883cb78c1bba3eb0366&o=',
    rating: 9.3,
  },
  {
    id: uuid(),
    title: 'Loft Over the Vines',
    description: 'Australia, Richmond',
    numberOfReviews: 41,
    comments: 'Exceptional',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/119988219.webp?k=afbd4548022812f6bb932130b99252b8c80939f18a92972a8d94b627b943a6d2&o=',
    rating: 9.5,
  },
  {
    id: uuid(),
    title: `May's Apartments by May's`,
    description: 'Norway, Reine',
    numberOfReviews: 861,
    comments: 'Superb',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/398620320.webp?k=10e476830ecfd5a062072a6318612393bc414bd75c10bb44dd29a1d6de5b225b&o=',
    rating: 9.4,
  },
  {
    id: uuid(),
    title: `Auberge La Seigneurie Valcartier`,
    description: 'Canada, Saint-Gabriel-de-Valcartier',
    numberOfReviews: 249,
    comments: 'Very good',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/106548982.webp?k=6464bb1807bbc9f4f9c408328c8df98bdfb5a885f7fc51712fcefc417b8472f7&o=',
    rating: 8.1,
  },
];

export const discoverHomesData: DiscoverHomes[] = [
  {
    id: uuid(),
    title: 'Leman Locke',
    description: 'Tower Hamlets, United Kingdom, London',
    numberOfReviews: 1304,
    comments: 'Fabulous',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/85257658.webp?k=e3f110e4ed0978310a028465a3bdd609149ecbded601555c881106255556b52e&o=',
    rating: 8.9,
    price: 47382,
  },
  {
    id: uuid(),
    title: 'Aparthotel Stare Miasto',
    description: 'Old Town, Poland, Kraków',
    numberOfReviews: 2688,
    comments: 'Fabulous',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=35b70a7e8a17a71896996cd55d84f742cd15724c3aebaed0d9b5ba19c53c430b&o=',
    rating: 8.7,
    price: 28962,
  },
  {
    id: uuid(),
    title: '3 Epoques Apartments by Adrez Living',
    description: 'Prague 1, Czech Republic, Praha 1',
    numberOfReviews: 545,
    comments: 'Superb',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/121402222.webp?k=f7f266ab09f90ddea4464309eca14d79429afe4218ced6887cb52f82c42c03dc&o=',
    rating: 8.7,
    price: 25660,
  },
  {
    id: uuid(),
    title: 'Domki ROSSE niedaleko plaży',
    description: 'Poland, Jastrzębia Góra',
    numberOfReviews: 139,
    comments: 'Exceptional',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/210943150.webp?k=1d3cb2f9c178756981110c1d6f895a65793f0ab4e62a613ee9f7d4ae140a3bad&o=',
    rating: 9.8,
    price: 20715,
  },
  {
    id: uuid(),
    title: '7Seasons Apartments Budapest',
    description: '06. Terézváros, Hungary, Budapest',
    numberOfReviews: 10079,
    comments: 'Fabulous',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=de5db8fe94cbfe08d3bf16d3c86def035fd73b43ee497cffe27b03363764e0e2&o=',
    rating: 8.8,
    price: 13585,
  },
  {
    id: uuid(),
    title: 'Villa Domina',
    description: 'Split City Centre, Croatia, Split',
    numberOfReviews: 1273,
    comments: 'Superb',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/44146554.webp?k=2b0fd82f2d6230cc7c3d20f4a19f141da3f14c25fc8402a8f9334e8bc0c98508&o=',
    rating: 9.3,
    price: 36770,
  },
  {
    id: uuid(),
    title: 'Cheval Three Quays at the Tower of London',
    description: 'City of london, United Kingdom, London',
    numberOfReviews: 660,
    comments: 'Superb',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/29466558.webp?k=7f9cf4736f69b30c20fa7a751bb8711fa195bc9ff6092d5412d52daf6cada17f&o=',
    rating: 9.4,
    price: 147272,
  },
  {
    id: uuid(),
    title: 'numa I Vita apartments',
    description: 'Fortezza da Basso, Italy, Florence',
    numberOfReviews: 1344,
    comments: 'Superb',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/352170812.webp?k=4ff5e29f3ad72c2c9f7170f60a043f01a158f26b38c55e9676439c18f3804179&o=',
    rating: 9.2,
    price: 57358,
  },
  {
    id: uuid(),
    title: '6 Continents apartment by Adrez Living',
    description: 'Prague 1, Czech Republic, Prague',
    numberOfReviews: 372,
    comments: 'Very good',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/123802411.webp?k=a7b31816f098dc6d7a4d707495c2d98738e78f16d7e172c2ae76b0c2f61c18f5&o=',
    rating: 7.3,
    price: 34642,
  },
  {
    id: uuid(),
    title: 'The apartment by The Sloane Club',
    description: 'Kensington and Chelsea, United Kingdom, London',
    numberOfReviews: 197,
    comments: 'Superb',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/420377357.webp?k=29a0e9879ac8361539c3dae41f047d383e6fa6917f8f47cb50dad001ada0eae6&o=',
    rating: 9.1,
    price: 142406,
  },
  {
    id: uuid(),
    title: 'Casa Portuguesa Prata',
    description: 'Santa Maria Maior, Portugal, Lisboa',
    numberOfReviews: 70,
    comments: 'Good',
    img: 'https://cf.bstatic.com/xdata/images/hotel/square600/438349362.webp?k=f67f0e7e54be1c0678f18cf9ae1271c4220a487901ae0bf906fed8ba0265e38d&o=',
    rating: 7.7,
    price: 56866,
  },
];

export const inspirationBannerData: Inspiration[] = [
  {
    id: uuid(),
    title: "New Year's Eve in New York city",
    description:
      'Ring in the new year with iconic moments and unforgettable memories in New York city.',
    img: 'https://cf.bstatic.com/xdata/images/xphoto/540x405/296361238.jpg?k=5781de6463951b415b04e42ff2a5d23ad6bb1c5500f15c192212667573db4331&o=',
  },
  {
    id: uuid(),
    title: '6 best ryokans in japan to rejuvenate yourself',
    description: 'Discover unmissable ryokans to relax and unwind in style.',
    img: 'https://cf.bstatic.com/xdata/images/xphoto/720x405/292260574.jpg?k=efc8e339ea66514c3b64c5bc891f1608d22a40eb23b853bc0c9ecb93c541ef10&o=',
  },
  {
    id: uuid(),
    title: '7 best places in Asia to celebrate Christmas',
    description:
      "Discover the shimmering lights and festive sights of Asia's holiday season.",
    img: 'https://cf.bstatic.com/xdata/images/xphoto/540x405/290483794.jpg?k=916f7bac0ccdb08efcb269ad29cc10816ab66cd1671359066d23d32fb17b5c39&o=',
  },
  {
    id: uuid(),
    title: '6 magical Christmas experiences in London',
    description: 'A London Christmas: cherished traditions and new discoveries',
    img: 'https://cf.bstatic.com/xdata/images/xphoto/540x405/289320924.jpg?k=99a00f2907495aaeb6396695c053e3d8b95fb05619b10e76c89fb1f7d1fec427&o=',
  },
  {
    id: uuid(),
    title: 'Top 5 places for winter sports in South Korea',
    description:
      'Ski Olympics slopes and jumps, before relaxing in a traditional Korean...',
    img: 'https://cf.bstatic.com/xdata/images/xphoto/540x405/288594543.jpg?k=7a96a2b4190146f63068bd0604a916c0c885c4899a527e24a9b39487d4ae50b8&o=',
  },
];
