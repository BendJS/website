import Link from 'next/link';
import React from 'react';

const Home = (): React.ReactElement => {
  return (
    <div>
      Hello BendJS 👋{' '}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
};

export default Home;
