import Link from 'next/link';
import React from 'react';

const Home = () => {
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
