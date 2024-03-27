export type HeaderNavLinks = {
  id: string;
  type: 'ghost' | 'button' | 'icon';
  label: string;
  tooltip?: string;
  route?: string;
};

export type HorizontalMenuList = {
  id: string;
  icon: string;
  label: string;
};

export type FooterTopLink = {
  id: string;
  label: string;
  link: string;
};

export type FooterMenuLink = FooterTopLink;

export type SearchItem = {
  id: string;
  type: string;
  icon: string;
  placeholder: string;
};

export type PassengerInfo = {
  id: string;
  label: string;
  defaultValue: number;
  min: number;
  max: number;
};

export type RecentSearch = {
  id: string;
  name: string;
  date: string;
  img: string;
};

export type OfferBanner = {
  id: string;
  title: string;
  description: string;
  btnText: string;
  img: string;
};

export type ImageGallery = {
  id: string;
  first: {
    id: string;
    title: string;
    img: string;
    flag: string;
  }[];
  second: {
    id: string;
    title: string;
    img: string;
    flag: string;
  }[];
};

export type Explore = {
  id: string;
  img: string;
  title: string;
  description: string;
};

export type BrowseCategory = Omit<Explore, 'description'>;

export type UniqueProperties = Explore & {
  rating: number;
  comments: string;
  numberOfReviews: number;
};

export type DiscoverHomes = UniqueProperties & {
  price: number;
};

export type Inspiration = Explore;

export type CreateUserDto = {
  firstName: string;
  lastName: string;
  email: string;
  confirm: string;
  password: string;
};

export type LoginDto = Omit<
  CreateUserDto,
  'firstName' | 'lastName' | 'confirm'
>;

export type User = CreateUserDto & {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
};
