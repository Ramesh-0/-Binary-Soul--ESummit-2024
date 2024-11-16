// src/components/LandingPage.js
import React, { Suspense } from 'react';

const Header = React.lazy(() => import('./Header'));
const Banner = React.lazy(() => import('./Banner'));
const Footer = React.lazy(() => import('./Footer'));

function LandingPage() {
  return (
    <div className="landing-page">
      <Suspense fallback={<div>Loading Header...</div>}>
        <Header />
      </Suspense>
      <Suspense fallback={<div>Loading Banner...</div>}>
        <Banner />
      </Suspense>
      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default LandingPage;
