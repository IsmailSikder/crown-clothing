import CheckOutItem from '../../components/checkout-item/checkout-item.component'
import './checkout.style.scss'
import {connect} from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItem, selectCartTotal } from '../../redux/cart/cart.selectors'

import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component'


const CheckOutPage =({cartItems,totalPrice})=>(
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className ='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
            {
                cartItems.map(
                    cartItem=>  <CheckOutItem 
                    key={cartItem.id}
                    cartItem={cartItem}
                    />
                )
            }
           
           
           
            <div className='total'>
                <span>Total: {totalPrice}</span>
            </div>
            <div className='test-warning'>
                *Please use following test credit card for the payment*
                <br/>
                4242 4242 4242 4242 - Exp: 11/20 -cvv:123
            </div>
            <StripeCheckoutButton price={totalPrice}/>
    </div>
)

const mapStateToProps= createStructuredSelector(
    {
        cartItems: selectCartItem,
        totalPrice: selectCartTotal
    }
)

export default connect(mapStateToProps,null)(CheckOutPage)