import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Approach from './components/Approach';
import Portfolio from './components/Portfolio';
import Reliability from './components/Reliability';
import CaseStudies from './components/CaseStudies';
import Blog from './components/Blog';
import WhySmartosphere from './components/WhySmartosphere';
import AboutUs from './components/AboutUs';
import CaseStudiesPage from './components/CaseStudiesPage';
import SolutionsPage from './components/SolutionsPage';
import GokartServomotor from './components/GokartServomotor';
import GeoTracker from './components/GeoTracker';
import MHITS from './components/MHITS';
import MFlash from './components/MFlash';
import Laplok from './components/Laplok';
import BillboardControls from './components/BillboardControls';
import BillboardPortal from './components/BillboardPortal';
import BioMed from './components/BioMed';
import RadiationElectronics from './components/RadiationElectronics';
import Engineering from './components/Engineering';
import Footer from './components/Footer';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Listen to browser navigation popstate
    window.addEventListener('popstate', handleLocationChange);

    // Intercept all local relative link clicks to turn them into SPA transitions
    const handleGlobalLinkClick = (e) => {
      const target = e.target.closest('a');
      if (target) {
        const href = target.getAttribute('href');
        if (href && href.startsWith('/') && !href.startsWith('//') && !target.target) {
          e.preventDefault();
          window.history.pushState(null, '', href);
          window.dispatchEvent(new PopStateEvent('popstate'));
        }
      }
    };

    document.addEventListener('click', handleGlobalLinkClick);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('click', handleGlobalLinkClick);
    };
  }, []);

  const isAboutPage = currentPath === '/about-us';
  const isCaseStudiesPage = currentPath === '/case-studies';
  const isSolutionsPage = currentPath === '/solutions';
  const isGokartServomotorPage = currentPath === '/gokart-servomotor';
  const isGeoTrackerPage = currentPath === '/geotracker';
  const isMHITSPage = currentPath === '/mhits';
  const isMFlashPage = currentPath === '/mflash';
  const isLaplokPage = currentPath === '/laplok';
  const isBillboardControlsPage = currentPath === '/billboard-controls';
  const isBillboardPortalPage = currentPath === '/billboard-portal';
  const isBioMedPage = currentPath === '/biomed';
  const isRadiationElectronicsPage = currentPath === '/radiation-electronics';
  const isEngineeringPage = currentPath === '/engineering';

  useEffect(() => {
    if (isAboutPage || isCaseStudiesPage || isSolutionsPage || isGokartServomotorPage || isGeoTrackerPage || isMHITSPage || isMFlashPage || isLaplokPage || isBillboardControlsPage || isBillboardPortalPage || isBioMedPage || isRadiationElectronicsPage || isEngineeringPage) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else if (currentPath === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Scroll to Home page sections dynamically (e.g. /case-studies -> #case-studies)
      const sectionId = currentPath.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        // Allow DOM to settle before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [currentPath, isAboutPage, isSolutionsPage, isGokartServomotorPage, isGeoTrackerPage, isMHITSPage, isMFlashPage, isLaplokPage, isBillboardControlsPage, isBillboardPortalPage, isBioMedPage, isRadiationElectronicsPage, isEngineeringPage]);

  return (
    <div className="app">
      <Header />
      {isAboutPage ? (
        <AboutUs />
      ) : isCaseStudiesPage ? (
        <CaseStudiesPage />
      ) : isSolutionsPage ? (
        <SolutionsPage />
      ) : isGokartServomotorPage ? (
        <GokartServomotor />
      ) : isGeoTrackerPage ? (
        <GeoTracker />
      ) : isMHITSPage ? (
        <MHITS />
      ) : isMFlashPage ? (
        <MFlash />
      ) : isLaplokPage ? (
        <Laplok />
      ) : isBillboardControlsPage ? (
        <BillboardControls />
      ) : isBillboardPortalPage ? (
        <BillboardPortal />
      ) : isBioMedPage ? (
        <BioMed />
      ) : isRadiationElectronicsPage ? (
        <RadiationElectronics />
      ) : isEngineeringPage ? (
        <Engineering />
      ) : (
        <>
          <Hero />
          <Intro />
          <Approach />
          <Portfolio />
          <Reliability />
          <CaseStudies />
          <Blog />
          <WhySmartosphere />
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
