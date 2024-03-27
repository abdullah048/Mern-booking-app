import { useMediaQuery } from 'react-responsive';
import '../../HomeBody.scss';
import BrowserProperty from './components/BrowseProperty/BrowserProperty';
import DiscountBanner from './components/DiscountBanner/DiscountBanner';
import DiscoverBanner from './components/DiscoverBanner/DiscoverBanner';
import DiscoverHomes from './components/DiscoverHomes/DiscoverHomes';
import Explore from './components/Explore/Explore';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Inspiration from './components/Inspiration/Inspiration';
import Offers from './components/Offers/Offers';
import RecentSearch from './components/RecentSearch/RecentSearch';
import UniqueProperties from './components/UniqueProperties/UnqiueProperties';

const StayBody = () => {
  const isLargeScreen = useMediaQuery({
    query: '(min-width:1024px)',
  });
  return (
    <div className='body__inner--wrapper'>
      <RecentSearch />
      <Offers />
      <ImageGallery />
      <Explore />
      <BrowserProperty />
      <DiscountBanner />
      <UniqueProperties />
      <DiscoverHomes />
      {isLargeScreen && <DiscoverBanner />}
      <Inspiration />
    </div>
  );
};

export default StayBody;
