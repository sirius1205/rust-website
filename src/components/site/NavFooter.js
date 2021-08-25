import { useTranslation } from 'gatsby-plugin-react-i18next';
import React from 'react';

import { useSiteMenus } from '../../hooks/use-site-menus';
import { buildSubMenu, Link } from '../default/Link';

const NavFooter = () => {
  const { t } = useTranslation();
  const { menus } = useSiteMenus();
  return (
    <nav className="m-0 p-o hidden sm:block lg:w-full lg:max-w-screen md:h-auto">
      <ul className="m-0 list-none">
        {menus.main.map(menuItem => {
          const subMenu = buildSubMenu(menus, menuItem);
          return (
            <li key={menuItem.id} className="m-0 pb-4 w-1/2 sm:w-full sm:flex sm:items-start text-base sm:text-lg">
              <span className="block mb-4 font-semibold text-substrateGreen sm:w-28 leading-relaxed">
                {t(menuItem.id)}
              </span>
              {subMenu && (
                <ul className="m-0 p-0 list-none ml-0 sm:ml-7 sm:flex sm:flex-wrap sm:w-full text-sm sm:text-base sm:mt-0.5">
                  {subMenu.map(subMenuItem => {
                    const child = subMenuItem.child;
                    const childMenu = menus[child];
                    const itemStyle = 'p-o m-0 underline-anchor pb-4 sm:mr-6 leading-relaxed';

                    return (
                      <>
                        {childMenu ? (
                          childMenu.map(childMenuItem => {
                            return (
                              <li className={itemStyle} key={childMenuItem.id}>
                                <Link to={menuItem.url + subMenuItem.url + childMenuItem.url}>
                                  {t(childMenuItem.id)}
                                </Link>
                              </li>
                            );
                          })
                        ) : (
                          <li key={subMenuItem.id} className={itemStyle}>
                            <Link to={menuItem.url + subMenuItem.url}>{t(subMenuItem.id)}</Link>
                          </li>
                        )}
                      </>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavFooter;
