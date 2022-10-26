import './../scss/Updates.scss'
import { useEffect } from 'react'
import { ReactComponent as ChevronLeft } from './../images/icons/chevron-left.svg'
import { ReactComponent as ChevronRight } from './../images/icons/chevron-right.svg'

import LatestUpdates from './../data/LatestUpdates.json'

let menu
let chevrons

function ScrollUpdate () {
  chevrons[0].style.display = menu.scrollLeft === 0 ? 'none' : ''
  chevrons[1].style.display = menu.clientWidth + menu.scrollLeft >= menu.scrollWidth - 1 ? 'none' : ''
}

function ScrollToCurrent (current) {
  if (current.offsetLeft - menu.offsetLeft + current.clientWidth > menu.clientWidth + menu.scrollLeft - 45) {
    let left = menu.scrollLeft + current.clientWidth
    if (left > menu.scrollWidth - menu.clientWidth) {
      left = menu.scrollWidth - menu.clientWidth
    }
    menu.scroll({ left, behavior: 'smooth' })
  }
  if (current.offsetLeft - menu.offsetLeft < menu.scrollLeft + 45) {
    let left = menu.scrollLeft - current.clientWidth
    if (left < 0) {
      left = 0
    }
    menu.scroll({ left, behavior: 'smooth' })
  }
}

function Updates () {
  useEffect(() => {
    menu = document.querySelector('.updates_menu_main')
    chevrons = document.querySelector('.updates_menu_scroll').querySelectorAll('.chevron')

    const tabs = menu.querySelectorAll('button')
    const blocks = document.querySelectorAll('.updates_block')
    const tabsArray = Array.from(tabs)

    ScrollUpdate()

    window.onresize = () => {
      ScrollUpdate()
    }

    menu.onscroll = () => {
      ScrollUpdate()
    }

    chevrons[0].onclick = () => {
      let left = menu.scrollLeft - menu.clientWidth + 60
      if (left < 0) {
        left = 0
      }
      menu.scroll({ left, behavior: 'smooth' })
    }

    chevrons[1].onclick = () => {
      let left = menu.scrollLeft + menu.clientWidth - 60
      if (left > menu.scrollWidth - menu.clientWidth) {
        left = menu.scrollWidth - menu.clientWidth
      }
      menu.scroll({ left, behavior: 'smooth' })
    }

    tabsArray.forEach((t, i) => {
      t.onclick = () => {
        tabsArray.forEach((_, j) => {
          _.className = ''
          _.querySelector('.updates_menu_item_bottom-line').style.width = 0
          blocks[j].style.display = 'none'
          blocks[i].className = 'updates_block'
        })
        t.className = 'updates_menu_item_active'
        t.querySelector('.updates_menu_item_bottom-line').style.width = 'calc(100% - 18px)'
        blocks[i].style.display = ''
        ScrollToCurrent(t)
        setTimeout(() => {
          blocks[i].className = 'updates_block shoot'
        }, 0)
      }
    })
  })

  return (
    <>
      <h3 className='section-title'>Latest Updates</h3>
      <div className='updates'>
        <div className='updates_menu'>
          <div className='updates_menu_scroll'>
            <div className='chevron'>
              <ChevronLeft />
            </div>
            <div className='chevron'>
              <ChevronRight />
            </div>
          </div>
          <div className='updates_menu_main'>
            <button className='updates_menu_item_active'>
              EA News
              <div className='updates_menu_item_bottom-line' />
            </button>
            <button>
              EA Play
              <div className='updates_menu_item_bottom-line' style={{ width: 0 }} />
            </button>
            <button>
              FIFA
              <div className='updates_menu_item_bottom-line' style={{ width: 0 }} />
            </button>
            <button>
              F1
              <div className='updates_menu_item_bottom-line' style={{ width: 0 }} />
            </button>
            <button>
              Madden NFL
              <div className='updates_menu_item_bottom-line' style={{ width: 0 }} />
            </button>
            <button>
              Apex Legends
              <div className='updates_menu_item_bottom-line' style={{ width: 0 }} />
            </button>
            <button>
              The Sims 4
              <div className='updates_menu_item_bottom-line' style={{ width: 0 }} />
            </button>
            <button>
              Battlefield
              <div className='updates_menu_item_bottom-line' style={{ width: 0 }} />
            </button>
            <button>
              Inside EA
              <div className='updates_menu_item_bottom-line' style={{ width: 0 }} />
            </button>
          </div>
        </div>
        <hr />
        {
          LatestUpdates.map((l, i) => {
            return (
              <div className='updates_block' key={i} style={{ display: i !== 0 ? 'none' : '' }}>
                {l.map((_, j) => {
                  return (
                    <a href='#' className='updates_block_card' key={j}>
                      <img src={`data:image/webp;base64,${_.thumb}`} />
                      <div className='updates_block_card_content'>
                        <div className='updates_block_card_top'>
                          <span>{_.tag}</span>
                          <span>{_.date}</span>
                        </div>
                        <div className='updates_block_card_title'>{_.title}</div>
                        <div className='updates_block_card_desc'>{_.desc}</div>
                      </div>
                    </a>
                  )
                })}
              </div>
            )
          })
        }
      </div>
      <a href='#' className='btn-outline-black'>Read More</a>
    </>
  )
}

export default Updates
