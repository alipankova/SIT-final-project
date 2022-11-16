import styled from "styled-components";

import { BaseModalBackground } from "styled-react-modal";


export const CheckoutContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 60%;
    padding: 8rem 0;
    margin: 0 auto;

    /* padding-top: 12rem; */

    p {
      margin: 0;
      text-align: center;
    }
`

export const CheckoutHeader = styled.div`
    display: flex;
    text-transform: uppercase;
    color: #DABC39;
    padding: 0.5rem;
    font-size: 36px;

`

export const CheckoutForm = styled.form`
  display: flex;
  gap: 0.5rem;
  margin: 0 auto;
`
export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;

  p {
    font-size: 18px;
    text-align: left;
    padding-bottom: 2rem;
  }
 
  @media screen and (max-width: 360px)  {
    max-width: 100%;
    }
`

export const FormTitle = styled.div`
    font-weight: bold;
    font-size: 18px;
    padding: 1rem 0 0.5rem;
`

export const ShippingForm = styled.div`
  display: flex;
  flex-direction: column;

input {
      font-family: 'Montserrat', sans-serif;
      font-size: 18px;
      padding: 1rem;
      margin: 0.5rem auto;
      border-radius: 1rem;
      border: 1px solid #DABC39;
      min-width: 100%;
    }
`

export const AdressFormContainer = styled.div`
      display: grid;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      grid-template-columns: repeat(2, 1fr);

      input {
        margin: 0.5rem 0.1rem;
        max-width: 50%;
      }

`

export const DeliveryInfoForm = styled.div`
      
      textarea {
      font-family: 'Montserrat', sans-serif;
      padding: 1rem;
      height: 7rem;
      margin: 0.5rem auto;
      border-radius: 1rem;
      border: 1px solid #DABC39;
      min-width: 100%;}

`
export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 60%;
    padding: 3rem 0 0 10rem;
    gap: 1rem;

    @media screen and (max-width: 360px)  {
      position: fixed;
    }


`

export const ShoppingCart = styled.div`

  display: flex;
  flex-direction: column;  
  border-radius: 1rem;
  background: #FAF5E1;
  gap: 1rem;
  padding: 1rem;
  border: 1px solid #DABC39;

  button {
      font-family: 'Montserrat', sans-serif;
      font-size: 18px;
      display: flex !important;
      align-self: center !important;
      background:#DABC39;
      border: none;
      border-radius: 1rem;
      padding: 1rem 2rem;
      max-width: 50%;
      align-self: flex-start;
      cursor: pointer;

      :hover {
        opacity: 0.6;
      }
    }

`

export const ProductGrid = styled.div`
 display: grid;
 grid-template-columns: repeat(2, 1fr);
 gap: 1rem;
 
 `

export const Price = styled.div`

@media screen and (max-width: 1200px)  {
      visibility: hidden;
    }
`

export const CartItemControl = styled.div`
  display: flex;
  flex-direction: row !important;
  align-items: center;
  justify-content: center;
  min-width: 5.5rem;
  padding: 0.5rem;
  gap: 0.5rem;

 .cartItemsControlAdd{
    cursor: pointer;
    :hover {
      color: #DABC39;
    }
 }

 .cartItemsControlRemove{
    cursor: pointer;    
    :hover {
      color: #DABC39;
    }
 }

`

export const ProductDetails = styled.div`
  display: flex !important;
  flex-direction: column !important;

`

export const TotalsContainer = styled.div`
  padding: 0 1rem;

`

export const Separator = styled.div`
  min-width: 100%;
  height: 0.1rem;
  background: #DABC39;;

`

export const Subtotal = styled.div`
  display: flex;
  margin-top: 1rem;
  justify-content: space-between;
  font-weight: bold;
  font-size: 24px;
`

export const OrderButton = styled.button`

font-family: 'Montserrat', sans-serif;
  font-size: 24px !important;
  background:#DABC39;
  border: none;
  border-radius: 1rem;
  min-width: 100%;
  padding: 0.5rem;
  align-self: center;
  cursor: pointer;

  :hover {
    opacity: 0.6;
  }

`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  `

export const ProductContainer = styled.div`

    display: flex;
    gap: 1rem;
    padding: 2rem;

  img {
    display: block;
    width: 30%;
  }

  div {
      font-size: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;

    }
`

export const AddRemoveContainer = styled.div`
        flex-direction: row !important;
        gap: 1.5rem !important;
        border: 1px solid #DABC39;

        div {
          padding: 0.5rem;
          cursor: pointer;
          
          :hover {
            color: #DABC39;
            
          }

        }`

export const FadingBackground = styled(BaseModalBackground)`
opacity: ${(props) => props.opacity};
transition: all 0.3s ease-in-out;
`;

