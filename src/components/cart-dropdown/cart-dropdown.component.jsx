import React from 'react'
import CustomButton from '../button-component/button.component'
 
import './cart-dropdown.style.scss'

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-item' />
        <CustomButton>Go to Checkout</CustomButton>
    </div>
)
export default CartDropdown;