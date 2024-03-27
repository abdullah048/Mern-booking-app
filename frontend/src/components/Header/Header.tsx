import Logo from '@assets/svgs/logo.svg';
import { headerNavLinks, smallDeviceHeaderNavLinks } from '@constants/data';
import { useMediaQuery } from 'react-responsive';
import './Header.scss';
import NavLink from './components/NavLink';

const Header = () => {
  const isLaptopView = useMediaQuery({
    query: '(min-width:1024px)',
  });
  return (
    <header className='header__main--container'>
      <nav className='header__main--first--nav'>
        <div className='header__main--first--top'>
          <div>
            <span>
              <a
                href='/'
                style={{
                  cursor: 'pointer',
                }}>
                <img src={Logo} alt='header-logo' />
              </a>
            </span>
          </div>
        </div>
        <div className='header__main--first--bottom'>
          {isLaptopView ? (
            <>
              {headerNavLinks.map(navLink => (
                <NavLink key={navLink.id} data={navLink} />
              ))}
            </>
          ) : (
            <>
              {smallDeviceHeaderNavLinks.map(navLink => (
                <NavLink key={navLink.id} data={navLink} />
              ))}
            </>
          )}
        </div>
      </nav>
      {/* <nav className='header__main--second--nav'>
        <div className='header__main--second--container'>
          <ul className='header__main--second-list'>
            {horizontalMenuList.map(menu => (
              <MenuList key={menu.id} data={menu} />
            ))}
          </ul>
        </div>
      </nav> */}
    </header>
  );
};

export default Header;
