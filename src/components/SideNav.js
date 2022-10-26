import './../scss/SideNav.scss'
import { useEffect } from 'react'
import { ReactComponent as EALogo } from './../images/ea-logo-side.svg'
import { ReactComponent as CloseIcon } from './../images/icons/close-icon.svg'
import { ReactComponent as PlusIcon } from './../images/icons/plus-icon.svg'

let labelCount = 0
const toggle = []
const transitioned = []

function ToggleMenu (menu, index, expandSuperParent) {
  let height = 0
  let offsetHeight = 0
  let superParent
  let superParentHeight = 0

  toggle[index] = !toggle[index]

  if (toggle[index]) {
    menu.style.height = 'auto'
    height = menu.clientHeight
    menu.style.height = 0
  }
  if (expandSuperParent) {
    superParent = menu.parentElement.parentElement
    superParentHeight = parseFloat(superParent.style.height.replace('px', ''))
    offsetHeight = toggle[index] ? height : -menu.clientHeight
  }
  setTimeout(() => {
    if (expandSuperParent) {
      superParent.style.height = `${superParentHeight + offsetHeight}px`
    }
    menu.style.height = toggle[index] ? `${height}px` : 0
    menu.style.opacity = toggle[index] ? 1 : 0
  }, 0)
}

function SideNav () {
  useEffect(() => {
    const closeIcon = document.querySelector('.close-icon')
    const sideNavBg = document.querySelector('.side-nav_background')
    const sideNav = document.querySelector('.side-nav')
    const collapseMenu = () => {
      document.body.style.height = ''
      document.body.style.overflow = ''
      sideNavBg.className = 'side-nav_background side-nav_background_hidden'
      sideNav.className = 'side-nav side-nav_hidden'
      setTimeout(() => {
        sideNavBg.style.display = 'none'
        sideNav.style.display = 'none'
      }, 300)
    }
    sideNavBg.onclick = closeIcon.onclick = collapseMenu
    document.onkeydown = (e) => {
      if (e.which === 27) {
        collapseMenu()
      }
    }

    const labels = document.querySelectorAll('.side-nav_content_item')
    Array.from(labels).forEach((l, i) => {
      labelCount++
      toggle.push(false)
      transitioned.push(false)
      const label = l.querySelector('.side-nav_content_item_label')
      l.onclick = () => {
        if (!transitioned[i]) {
          transitioned[i] = true
          ToggleMenu(l.nextSibling, i)
          l.style.borderBottom = toggle[i] ? '1px solid #FF4747' : '1px solid #252525'
          label.className = `side-nav_content_item_label${toggle[i] ? ' side-nav_content_item_label_highlighted' : ''}`
          setTimeout(() => {
            transitioned[i] = false
          }, 300)
        }
      }
    })

    const subLabels = document.querySelectorAll('.side-nav_content_menu_label')
    Array.from(subLabels).forEach((s, i) => {
      toggle.push(false)
      transitioned.push(false)
      if (s.hasAttribute('data-sub-menu')) {
        const index = labelCount + i
        const btn = s.querySelector('button')
        btn.onclick = () => {
          if (!transitioned[index]) {
            transitioned[index] = true
            ToggleMenu(btn.nextSibling.nextSibling, index, true)
            btn.className = toggle[index] ? 'side-nav_content_menu_label_highlighted' : ''
            if (i === 0) {
              s.style.borderBottom = toggle[index] ? '1px solid #252525' : '1px solid #A3A3A3'
            }
            setTimeout(() => {
              transitioned[index] = false
            }, 300)
          }
        }
      }
    })
  })

  return (
    <>
      <div className='side-nav_background side-nav_background_hidden' />
      <div className='side-nav side-nav_hidden'>
        <div className='side-nav_top'>
          <EALogo />
          <div className='close-icon'>
            <CloseIcon />
          </div>
        </div>
        <div className='side-nav_content'>
          <div className='side-nav_content_item'>
            <div className='side-nav_content_item_label'>
              Games
              <div className='side-nav_content_item_label_chevron' />
            </div>
          </div>
          <div className='side-nav_content_menu'>
            <div className='side-nav_content_menu_label' data-sub-menu>
              <button>BROWSE GAMES</button>
              <div className='side-nav_content_menu_label_plus'>
                <PlusIcon />
              </div>
              <div className='side-nav_content_sub-menu'>
                <a href='#'>Latest Games</a>
                <a href='#'>Coming Soon</a>
                <a href='#'>Free-To-Play</a>
                <a href='#'>EA SPORTS</a>
                <a href='#'>EA Originals</a>
                <a href='#'>Games Library</a>
              </div>
            </div>
            <div className='side-nav_content_menu_label' data-sub-menu>
              <button>PLATFORMS</button>
              <div className='side-nav_content_menu_label_plus'>
                <PlusIcon />
              </div>
              <div className='side-nav_content_sub-menu'>
                <a href='#'>PC</a>
                <a href='#'>PlayStation 5</a>
                <a href='#'>Xbox Series X</a>
                <a href='#'>Nintendo Switch</a>
                <a href='#'>Mobile</a>
              </div>
            </div>
          </div>
          <div className='side-nav_content_item'>
            <div className='side-nav_content_item_label'>
              More Experiences
              <div className='side-nav_content_item_label_chevron' />
            </div>
          </div>
          <div className='side-nav_content_menu'>
            <div className='side-nav_content_menu_label'>
              <a href='#'>EA Play</a>
            </div>
            <div className='side-nav_content_menu_label'>
              <a href='#'>The EA App</a>
            </div>
            <div className='side-nav_content_menu_label'>
              <a href='#'>Competitive Gaming</a>
            </div>
            <div className='side-nav_content_menu_label'>
              <a href='#'>EA Play Live</a>
            </div>
          </div>
          <div className='side-nav_content_item'>
            <div className='side-nav_content_item_label'>
              About
              <div className='side-nav_content_item_label_chevron' />
            </div>
          </div>
          <div className='side-nav_content_menu'>
            <div className='side-nav_content_menu_label'>
              <a href='#'>Company</a>
            </div>
            <div className='side-nav_content_menu_label'>
              <a href='#'>EA Studios</a>
            </div>
            <div className='side-nav_content_menu_label'>
              <a href='#'>Careers</a>
            </div>
            <div className='side-nav_content_menu_label'>
              <a href='#'>Our Technology</a>
            </div>
            <div className='side-nav_content_menu_label'>
              <a href='#'>EA Partners</a>
            </div>
            <div className='side-nav_content_menu_label'>
              <a href='#'>News</a>
            </div>
            <div className='side-nav_content_menu_label'>
              <a href='#'>Inside EA</a>
            </div>
          </div>
          <div className='side-nav_content_item'>
            <div className='side-nav_content_item_label'>
              Commitments
              <div className='side-nav_content_item_label_chevron' />
            </div>
          </div>
          <div className='side-nav_content_menu'>
            <div className='side-nav_content_menu_label'>
              <a href='#'>Our Commitments</a>
            </div>
            <div className='side-nav_content_menu_label'>
              <a href='#'>Positive Play</a>
            </div>
            <div className='side-nav_content_menu_label'>
              <a href='#'>Inclusion & Diversity</a>
            </div>
            <div className='side-nav_content_menu_label'>
              <a href='#'>Social Impact</a>
            </div>
            <div className='side-nav_content_menu_label'>
              <a href='#'>People & Culture</a>
            </div>
            <div className='side-nav_content_menu_label'>
              <a href='#'>Environment</a>
            </div>
          </div>
          <div className='side-nav_content_item'>
            <div className='side-nav_content_item_label'>
              Resources
              <div className='side-nav_content_item_label_chevron' />
            </div>
          </div>
          <div className='side-nav_content_menu'>
            <div className='side-nav_content_menu_label'>
              <a href='#'>Help</a>
            </div>
            <div className='side-nav_content_menu_label'>
              <a href='#'>Forums</a>
            </div>
            <div className='side-nav_content_menu_label'>
              <a href='#'>Parental Controls</a>
            </div>
            <div className='side-nav_content_menu_label'>
              <a href='#'>Accessibility</a>
            </div>
            <div className='side-nav_content_menu_label'>
              <a href='#'>Press</a>
            </div>
            <div className='side-nav_content_menu_label'>
              <a href='#'>Investors</a>
            </div>
            <div className='side-nav_content_menu_label'>
              <a href='#'>Playtesting</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SideNav
