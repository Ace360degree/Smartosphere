import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Approach from './components/Approach';
import Portfolio from './components/Portfolio';
import Reliability from './components/Reliability';
import CaseStudies from './components/CaseStudies';
import Blog from './components/blogs/Blog';
import BlogDetailLayout from './components/blogs/BlogDetailLayout';
import WhySmartosphere from './components/WhySmartosphere';
import AboutUs from './components/AboutUs';
import CaseStudiesPage from './components/case-studies/CaseStudiesPage';
import SolutionsPage from './components/solutions/SolutionsPage';
import CaseStudyDetail from './components/case-studies/CaseStudyDetail';
import BillboardNetworkManagement from './components/case-studies/BillboardNetworkManagement';
import BiomedicalMonitoring from './components/case-studies/BiomedicalMonitoring';
import GoKartTrackControl from './components/case-studies/GoKartTrackControl';
import RadiationSafetyMonitoring from './components/case-studies/RadiationSafetyMonitoring';
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
import Industries from './components/Industries';
import Blogs from './components/blogs/Blogs';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import Disclaimer from './components/Disclaimer';
import Footer from './components/Footer';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [dynamicCaseStudy, setDynamicCaseStudy] = useState(null);
  const [loadingCaseStudy, setLoadingCaseStudy] = useState(false);
  const [dynamicBlog, setDynamicBlog] = useState(null);
  const [loadingBlog, setLoadingBlog] = useState(false);

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
          // Let WordPress admin URLs pass through to the server
          if (href.startsWith('/blogs/wp-')) {
            return; // Allow normal browser navigation
          }
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
  const isIndustriesPage = currentPath === '/industries';
  const isBlogsPage = currentPath === '/blogs';
  const blogSlugMatch = currentPath.match(/^\/blogs\/([^/]+)$/);
  const activeBlogSlug = blogSlugMatch ? blogSlugMatch[1] : null;
  const isContactPage = currentPath === '/contact';
  const isPrivacyPolicyPage = currentPath === '/privacy-policy';
  const isTermsPage = currentPath === '/terms-and-conditions';
  const isDisclaimerPage = currentPath === '/disclaimer';
  const isBillboardNetworkManagementPage = currentPath === '/case-studies/billboard-network-management';
  const isBiomedicalMonitoringPage = currentPath === '/case-studies/biomedical-monitoring-system';
  const isGoKartTrackControlPage = currentPath === '/case-studies/gokart-track-control-system' || currentPath === '/case-studies/gokart-track-control';
  const isRadiationSafetyMonitoringPage = currentPath === '/case-studies/radiation-safety-monitoring-system' || currentPath === '/case-studies/radiation-safety-monitoring';
  const isStaticCaseStudyPage = isBillboardNetworkManagementPage || isBiomedicalMonitoringPage || isGoKartTrackControlPage || isRadiationSafetyMonitoringPage;

  const caseStudySlugMatch = currentPath.match(/^\/case-studies\/([^/]+)$/);
  const activeCaseStudySlug = caseStudySlugMatch ? caseStudySlugMatch[1] : null;

  useEffect(() => {
    if (activeCaseStudySlug && !isStaticCaseStudyPage) {
      const fetchDynamicCase = async () => {
        setLoadingCaseStudy(true);
        try {
          const url = window.location.hostname === 'localhost' 
            ? `http://localhost/Smartosphere/admin/api.php?slug=${activeCaseStudySlug}` 
            : `/admin/api.php?slug=${activeCaseStudySlug}`;
          const res = await fetch(url);
          if (res.ok) {
            const data = await res.json();
            setDynamicCaseStudy(data);
          } else {
            setDynamicCaseStudy(null);
          }
        } catch (err) {
          console.error('Error fetching dynamic case study:', err);
          setDynamicCaseStudy(null);
        } finally {
          setLoadingCaseStudy(false);
        }
      };
      fetchDynamicCase();
    } else {
      setDynamicCaseStudy(null);
    }
  }, [activeCaseStudySlug, isStaticCaseStudyPage]);

  // Fetch dynamic blog post by slug
  useEffect(() => {
    if (activeBlogSlug) {
      // Skip wp-admin and other WordPress paths
      if (activeBlogSlug.startsWith('wp-')) {
        return;
      }
      const fetchBlog = async () => {
        setLoadingBlog(true);
        try {
          const url = window.location.hostname === 'localhost'
            ? `http://localhost/Smartosphere/admin/blogs_api.php?slug=${activeBlogSlug}`
            : `/admin/blogs_api.php?slug=${activeBlogSlug}`;
          const res = await fetch(url);
          if (res.ok) {
            const data = await res.json();
            setDynamicBlog(data);
          } else {
            setDynamicBlog(null);
          }
        } catch (err) {
          console.error('Error fetching blog post:', err);
          setDynamicBlog(null);
        } finally {
          setLoadingBlog(false);
        }
      };
      fetchBlog();
    } else {
      setDynamicBlog(null);
    }
  }, [activeBlogSlug]);

  useEffect(() => {
    if (isAboutPage || isCaseStudiesPage || isSolutionsPage || isGokartServomotorPage || isGeoTrackerPage || isMHITSPage || isMFlashPage || isLaplokPage || isBillboardControlsPage || isBillboardPortalPage || isBioMedPage || isRadiationElectronicsPage || isEngineeringPage || isIndustriesPage || isBlogsPage || isContactPage || isPrivacyPolicyPage || isTermsPage || isDisclaimerPage || isBillboardNetworkManagementPage || isBiomedicalMonitoringPage || isGoKartTrackControlPage || isRadiationSafetyMonitoringPage || dynamicCaseStudy || dynamicBlog) {
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
  }, [currentPath, isAboutPage, isSolutionsPage, isGokartServomotorPage, isGeoTrackerPage, isMHITSPage, isMFlashPage, isLaplokPage, isBillboardControlsPage, isBillboardPortalPage, isBioMedPage, isRadiationElectronicsPage, isEngineeringPage, isIndustriesPage, isBlogsPage, isContactPage, isPrivacyPolicyPage, isTermsPage, isDisclaimerPage, isBillboardNetworkManagementPage, isBiomedicalMonitoringPage, isGoKartTrackControlPage, isRadiationSafetyMonitoringPage, dynamicCaseStudy, dynamicBlog]);

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
      ) : isIndustriesPage ? (
        <Industries />
      ) : isBlogsPage ? (
        <Blogs />
      ) : isContactPage ? (
        <Contact />
      ) : isPrivacyPolicyPage ? (
        <PrivacyPolicy />
      ) : isTermsPage ? (
        <TermsConditions />
      ) : isDisclaimerPage ? (
        <Disclaimer />
      ) : isBillboardNetworkManagementPage ? (
        <BillboardNetworkManagement />
      ) : isBiomedicalMonitoringPage ? (
        <BiomedicalMonitoring />
      ) : isGoKartTrackControlPage ? (
        <GoKartTrackControl />
      ) : isRadiationSafetyMonitoringPage ? (
        <RadiationSafetyMonitoring />
      ) : dynamicCaseStudy ? (
        <CaseStudyDetail data={dynamicCaseStudy} />
      ) : loadingCaseStudy ? (
        <div style={{ padding: '120px 0', textAlign: 'center', color: '#fff', fontSize: '18px', fontWeight: 600 }}>
          Loading Case Study...
        </div>
      ) : dynamicBlog ? (
        <BlogDetailLayout data={dynamicBlog} />
      ) : loadingBlog ? (
        <div style={{ padding: '120px 0', textAlign: 'center', color: '#fff', fontSize: '18px', fontWeight: 600 }}>
          Loading Blog Post...
        </div>
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
