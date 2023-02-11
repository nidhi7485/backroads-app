import tour1 from './images/tour-1.jpeg'
import tour2 from './images/tour-2.jpeg'
import tour3 from './images/tour-3.jpeg'
import tour4 from './images/tour-4.jpeg'
export const pageLinks = [
  { id: 1, href: '#home', text: 'home' },
  { id: 1, href: '#about', text: 'about' },
  { id: 1, href: '#services', text: 'services' },
  { id: 1, href: '#tours', text: 'tours' },
]

export const socialLinks = [
  { id: 1, href: '#https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 2, href: '#https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 3, href: '#https://www.twitter.com', icon: 'fab fa-squarespace' },
]
export const services = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    title: 'saving money',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    title: 'endless bicking',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    title: 'amazing comfert',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
  },
]

export const tours = [
  {
    id: 1,
    image: tour1,
    date: 'august 26th, 2022',
    title: 'tibet adventure',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
    location: 'china',
    duration: 6,
    cost: 2100,
  },
  {
    id: 2,
    image: tour2,
    date: 'october 1st, 2022',
    title: 'best of java',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
    location: 'indonessia',
    duration: 11,
    cost: 1400,
  },
  {
    id: 3,
    image: tour3,
    date: 'september 15, 2022',
    title: 'explore hongkong',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
    location: 'hong kong',
    duration: 6,
    cost: 5000,
  },
  {
    id: 4,
    image: tour4,
    date: 'december 5th, 2022',
    title: 'kennia',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys',
    location: 'kenya',
    duration: 20,
    cost: 3300,
  },
]
