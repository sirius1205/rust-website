import cx from 'classnames';
import { Icon } from 'gatsby-plugin-substrate';
import React from 'react';

export default function PrimaryButton({ children, onClick, fullWidth = false, hero = false }) {
  return (
    <div
      onClick={onClick}
      className={cx(
        'primary-button group cursor-pointer bg-substrateGreen inline-flex relative rounded-md overflow-hidden',
        {
          'w-full justify-center': fullWidth,
        }
      )}
    >
      <p
        className={cx('font-bold text-white mb-0 transition-all', {
          'mx-8 group-hover:ml-5 group-hover:mr-11 py-4 text-xl': hero,
          'mx-6 group-hover:ml-4 group-hover:mr-8 py-3': !hero,
        })}
      >
        {children}
      </p>
      <div
        className={cx('bg-substrateGreen-dark absolute flex h-full transition-transform fill-current text-white', {
          'px-2 -right-7 group-hover:-translate-x-7': hero,
          'px-1 -right-5 group-hover:-translate-x-5': !hero,
        })}
      >
        <Icon name="arrow-more" className="self-center" />
      </div>
    </div>
  );
}
