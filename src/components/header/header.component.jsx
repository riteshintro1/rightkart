import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assests/crown.svg'
import { auth } from '../../firebase/firebase.utl'
import './header.style.scss'

const Header = ({currentUser}) => (
    <div className='header'>
        <Link  className='logo-container' to='/'>
        <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shops'>Shops</Link>
            <Link className='option' to='/shops'>contact</Link>
            {currentUser?
            <div className='option' onClick={()=>auth.signOut()}>sign out</div>:
            <Link className ='option' to ='/signin'>sign in</Link>}
        </div>
    </div>
)
export default Header