import React, { ReactNode } from 'react';

import Link from 'next/link';

import { Config } from '../utils/Config';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700">
    {props.meta}

    <div className="max-w-screen-md mx-auto">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          <div className="font-bold text-3xl text-gray-900">Practice Tailwind CSS Styling!</div>
          <div className="text-l">
            Exercises to help you learn Tailwind CSS classes, so you don't need to check the docs
            {' '}
            <i>as</i>
            {' '}
            often 😜
          </div>
        </div>
      </div>

      <div className="py-5 text-xl content">{props.children}</div>

      <div className="border-t border-gray-300 text-center py-8 text-sm">
        Made with
        {' '}
        <span role="img" aria-label="Love">
          ♥
        </span>
        {' '}
        by
        {' '}
        <a href="https://twitter.com/ajones55555">Andrew Jones</a>
        <br />
        Site starter by
        {' '}
        <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
      </div>
    </div>
  </div>
);

export { Main };
