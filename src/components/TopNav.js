import './../scss/TopNav.scss'
import { ReactComponent as UserIcon } from './../images/icons/user-icon.svg'
import { ReactComponent as QuestionMarkIcon } from './../images/icons/question-mark-icon.svg'
import { ReactComponent as EAIcon } from './../images/icons/ea-icon.svg'

function TopNav () {
  return (
    <div className='top-nav'>
      <a className='top-nav_item' href='#'>
        <UserIcon />
      </a>
      <a className='top-nav_item' href='#'>
        <QuestionMarkIcon />
      </a>
      <a className='top-nav_item' href='#'>
        <EAIcon />
      </a>
    </div>
  )
}

export default TopNav
