import React from 'react'
import '../css/SideBar.css'
import { Link } from 'react-router-dom'
import UI from './ui'

const SideBar = () => {
  return (
    <div>
      <div>
  <aside className="sidebar-2">
    <div className='sidebar-header-2'>
    <img src='bytebuddy.svg' alt='logo'/>
      <UI/>
      </div>
    <ul className="sidebar-links-2">
      <h4>
        <span>Main Menu</span>
        <div className="menu-separator-2"></div>
      </h4>
      <li>
        <Link to="/">
          <span className="material-symbols-outlined"> home </span>Home</Link>

      </li>
      <li>
        <Link to='/ai_quiz'>
          <span className="material-symbols-outlined">assignment_turned_in </span>AI Quiz</Link>
      </li>
      <li>
        <Link to='/chatbot'><span className="material-symbols-outlined"> robot_2 </span>Let's Chat</Link>
      </li>
      <li>
        <Link to='/codereviewer'><span className="material-symbols-outlined"> summarize</span>Code Reviewer</Link>
      </li>
      <li>
        <Link to='/virtual_classroom'><span className="material-symbols-outlined"> groups </span>Virtual classroom</Link>
      </li>
      <li>
        <Link to='/code_editor'><span className="material-symbols-outlined"> code </span>Code</Link>
      </li>
      <li>
        <Link to='/course'><span className="material-symbols-outlined"> school </span>Courses</Link>
      </li>
    </ul>
  </aside>
</div>

    </div>
  )
}

export default SideBar
