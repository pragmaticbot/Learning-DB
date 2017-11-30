import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class Payment extends Component {
   render() {
      return (
         <StripeCheckout>
         Add Credits 
         </StripeCheckout>
      );
   }
}

export default Payment;
