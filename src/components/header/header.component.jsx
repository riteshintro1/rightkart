import React from 'react'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assests/crown.svg'
import { auth } from '../../firebase/firebase.utl'
import './header.style.scss'
import CartIcon from '../card-icon/card-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({currentUser,hidden}) => (
    <div className='header'>
        <Link  className='logo-container' to='/'>
        <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link className='option' to='/shops'>Shops</Link>
            <Link className='option' to='/shops'>contact</Link>
            {currentUser?
            <div className='option' onClick={()=>auth.signOut()}>sign out</div>:
                <Link className='option' to='/signin'>sign in</Link>}
            <CartIcon/>
        </div>
        {
            hidden? null:
            <CartDropdown />
        }
    </div>
)
const mapStatetoProps = ({user:{currentUser},cart:{hidden}}) => ({
    currentUser,
    hidden
});
export default connect(mapStatetoProps) (Header); 