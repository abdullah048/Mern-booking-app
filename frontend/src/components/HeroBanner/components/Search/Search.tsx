import { searchItems } from '@constants/data';
import './Search.scss';
import SearchItem from '../SearchItem/SearchItem';

const Search = () => {
  const handleSubmit = () => {
    console.log('hello');
  };
  return (
    <div className='banner__searchBox'>
      <form onSubmit={handleSubmit}>
        <div className='banner__searchBox--content'>
          {searchItems.map((item, index) => (
            <SearchItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </form>
    </div>
  );
};

export default Search;
