import cx from 'classnames';
import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';

import useScrollListener from '../../hooks/use-scroll-listener';
import Icon from '../default/Icon';
import Logo from '../site/Logo';
import DocsButton from './DocsButton';
import NavMain from './NavMain';
import NavMobile from './NavMobile';
import ThemeToggle from './ThemeToggle';

const Header = ({ mode, header }) => {
  const scroll = useScrollListener();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  useEffect(() => {
    /* TODO: add into context */
    if (scroll.y > 15) {
      setIsScrolled(true);
    } else if (scroll.y < 1) {
      setIsScrolled(false);
    }
  }, [scroll.y]);

  return (
    <header
      className={cx('sticky top-0 z-20 border-b border-gray-200 dark:border-substrateDarkThemeGrey transition-colors', {
        'border-b-0': mode === 'full' && !isScrolled,
        'bg-transparent': header === 'home' && !isScrolled,
        'bg-white dark:bg-substrateDarkest': header === 'default' || (header === 'home' && isScrolled),
      })}
    >
      <div className="px-4 xl:px-12">
        <div
          className={cx('flex items-center justify-between transition-height ease-in-out', {
            'h-24': !isScrolled,
            'h-16': isScrolled,
          })}
        >
          <div className="w-40 relative transform transition-all duration-300 ease-in-out hover:opacity-50">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <div className="lg:hidden cursor-pointer" onClick={toggleMenu}>
            <Icon name="hamburger-toggle" />
          </div>
          {isMobileNavOpen && <NavMobile toggleMenu={toggleMenu} />}
          <div className="hidden lg:flex lg:justify-between lg:items-center w-full">
            <div className="w-2/3 max-w-3xl">
              <NavMain header={header} isScrolled={isScrolled} />
            </div>
            <div className=" w-1/2 flex items-center justify-end">
              <div className="pl-8 pr-6">
                <DocsButton />
              </div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
