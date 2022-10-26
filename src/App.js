import './scss/App.scss'
import { useEffect } from 'react'

import TopNav from './components/TopNav'
import MainNav from './components/MainNav'
import SideNav from './components/SideNav'
import Banner from './components/Banner'
import Games from './components/Games'
import Updates from './components/Updates'
import BannerBottom from './components/BannerBottom'
import FooterTop from './components/FooterTop'
import FooterBottom from './components/FooterBottom'

function App () {
  useEffect(() => {
    const hamburgerIcon = document.querySelector('.hamburger-icon')
    const sideNavBg = document.querySelector('.side-nav_background')
    const sideNav = document.querySelector('.side-nav')
    hamburgerIcon.onclick = () => {
      window.scrollTo(0, 0)
      document.body.style.height = '100vh'
      document.body.style.overflow = 'hidden'
      sideNavBg.style.display = 'block'
      sideNav.style.display = 'block'
      setTimeout(() => {
        sideNavBg.className = 'side-nav_background'
        sideNav.className = 'side-nav'
      }, 0)
    }
  })

  return (
    <>
      <TopNav />
      <SideNav />
      <MainNav />
      <Banner />
      <Games />
      <Updates />
      <BannerBottom />
      <FooterTop />
      <FooterBottom />
    </>
  )
}

export default App
