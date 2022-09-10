import { ReactNode } from 'react';

import Link from 'next/link';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap items-center justify-between">
    <div>
      <Link href="/">
        <a>{props.logo}</a>
      </Link>
    </div>

    <nav className="w-3/5">
      <ul className="flex justify-between w-11/12 text-gray-800 fo1nt-medium items-b-center space navbar">
        {props.children}
      </ul>
    </nav>

  </div>
);

export { NavbarTwoColumns };
