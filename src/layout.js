// Layout.js
import { Outlet } from 'react-router-dom';
import BasicExample from './navabar';
import ProductShowcaseCarousel from './carsoul';
import Brand from './cards';
import Men from './men';
import Women from './women';
import Perfume from './task1';
import Lifecycle from './willmount';
import Image from './image';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <BasicExample />
      <ProductShowcaseCarousel />
      <Perfume />
      <Brand />
      <Men />
      <Women />
      <Lifecycle />
      <Image />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
