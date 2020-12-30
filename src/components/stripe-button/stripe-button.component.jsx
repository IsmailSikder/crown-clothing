import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton =({price})=>{

    const priceForStripe = price*100;
    const publishableKey ='pk_test_51I3xuLIkyXU8O00R5b3tRYMkYFA9jX4nfzd1zwAzvxa1N78hR2Mo51Ctia4BtSm8exAQE2prObdhuW8v5LkvZ4dN00OOtgZZPQ'
 
    const onToken = token =>(
        alert('Payment Sucessful')
    )

    return(
        <StripeCheckout
            label='Pay Now'
            name= 'E-commerce Pvt Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description='Your total price is'
            amount={priceForStripe}
            panelLabel='Pay Now'
            token ={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton