import './checkout-item.style.scss'

const CheckOutItem =({cartItem})=>{
    const {name,imageUrl,price,quantity} = cartItem
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow'>&#10094;</div>
                    <span className='value'>{quantity}</span>
                <div className='arrow'>&#10094;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button'>&#10005;</div>
        </div>
    )
}

export default CheckOutItem