import { useNavigate } from "react-router-dom";

import {
  CheckoutContainer, CheckoutHeader, CheckoutForm,
  FormTitle, ShippingForm, DeliveryInfoForm, RightSide, LeftSide,
  ShoppingCart, AdressFormContainer, Content, ProductContainer, CartItemControl, ProductDetails,
  TotalsContainer, Separator, Subtotal, OrderButton, Price
} from "./Checkout.styled.js";
import { useEffect, useState } from "react";
import { GoDiffAdded, GoDiffRemoved } from "react-icons/go";
import { IconContext } from "react-icons";


export default function Checkout() {
  const navigate = useNavigate();
// // form states
//   const [checkOutData, setCheckoutData] = useState(
//     {
//       email: "",
//       first_name: "",
//       last_name: "",
//       street: "",
//       street_number: "",
//       zip: "",
//       region: "",
//       city: "",
//       country: "",
//       phone: "",
//       shippingnotes: "",
//       orderItems: [
//         {
//           img: "../assets/images/product/product_olive_backbag.jpg",
//           title: "Shopper Olive",
//           price: 100,
//           amount_in_cart: 2,
//         },
//       ],
//     }
//   )

// Manu's Logic -----------------------------------------

    // creating local states to control the input fields
    const [userData, setUserData] = useState("")

    const [buyer, setBuyer] = useState("")
    const [products, setProducts] = useState("")
    const [email, setEmail] = useState("")
    const [first_name, setFirst] = useState("")
    const [last_name, setLast] = useState("")
    const [city, setCity] = useState("")
    const [zip, setZip] = useState("")
    const [street, setStreet] = useState("")
    const [street_number, setNumber] = useState("")
    const [country, setCountry] = useState("")
    const [phone, setPhone] = useState("")
    const [note, setNote] = useState("")

    // handle inputs
    const handleBuyerChange = (e) => {
        setBuyer(e.target.value)
    }
    const handleProductsChange = (e) => {
        setProducts(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleFirstChange = (e) => {
        setFirst(e.target.value)
    }
    const handleLastChange = (e) => {
        setLast(e.target.value)
    }
    const handleCityChange = (e) => {
        setCity(e.target.value)
    }
    const handleZipChange = (e) => {
        setZip(e.target.value)
    }
    const handleStreetChange = (e) => {
        setStreet(e.target.value)
    }
    const handleNumberChange = (e) => {
        setNumber(e.target.value)
    }
    const handleCountryChange = (e) => {
        setCountry(e.target.value)
    }
    const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }
    const handleNoteChange = (e) => {
        setNote(e.target.value)
    }

  const product1 = {
    img: "../assets/images/product/product_olive_backbag.jpg",
    title: "Shopper Olive",
    price: 100,
    amount_in_cart: 1,
  };

  const product2 = {
    img: "../assets/images/product/product_red_backbag.jpg",
    title: "Shopper red",
    price: 100,
    amount_in_cart: 2,
  };

  const product3 = {
    img: "../assets/images/product/product_red_backbag.jpg",
    title: "Shopper red",
    price: 100,
    amount_in_cart: 1,
  };

//   let products = [product1, product2];


const handleOrderSubmit = (e) => {
    e.preventDefault()
    console.log("submited")
    const url = "https://bag-for-everyone.propulsion-learn.ch/backend/api/order/"
    const formData= new FormData()
    formData.append("buyer", buyer)
    formData.append("products", products)
    formData.append("email", email)
    formData.append("first_name", first_name)
    formData.append("last_name", last_name)
    formData.append("street", street)
    formData.append("street_number", street_number)
    formData.append("zip", zip)
    formData.append("city", city)
    formData.append("country", country)
    formData.append("phone", phone)
    formData.append("shopping_note", note)

    const config = {
        method: "POST",
        headers: new Headers({
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5NDc5MDExLCJpYXQiOjE2Njc5MjM4MTEsImp0aSI6ImVlYWVkOGIwYWI3YjQyOWNhMDQ0YWFmODdiZGQ4ZGNhIiwidXNlcl9pZCI6MX0.Y7KK4Ajr-eJo-ewpiRjzZyGmhpADWtky8pmdlhXJg_U`

        }),
        body: formData
    }

    fetch(url, config)
    .then((response) => {
        if (response.status === 200) {
            console.log(response)
        }
        else {
            console.log(response.json())
        }
    })
}

useEffect(() => {

    const url = "https://bag-for-everyone.propulsion-learn.ch/backend/api/user/me/"

    const config = {
        method: "GET",
        headers: new Headers({
            "Authorization": `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY5NDc5MDExLCJpYXQiOjE2Njc5MjM4MTEsImp0aSI6ImVlYWVkOGIwYWI3YjQyOWNhMDQ0YWFmODdiZGQ4ZGNhIiwidXNlcl9pZCI6MX0.Y7KK4Ajr-eJo-ewpiRjzZyGmhpADWtky8pmdlhXJg_U`
        })
    }

    fetch(url, config)
        .then(response=>response.json())
        .then(data=>setUserData(data), console.log(userData))
  }, []);

    // Put the following content into the useEffect
    const handleAutoFill = (e) => {

        // if true should be "if userdata"
        if (true) {
            setFirst(userData[0].first_name)
            setLast(userData[0].last_name)
            setBuyer(userData[0].id)
            setEmail(userData[0].email)
            setStreet(userData[0].street)
            setNumber(userData[0].street_number)
            setZip(userData[0].zip)
            setCity(userData[0].city)
            setCountry(userData[0].country)
        }
    }

//   const handleAddItem = (e) => {
//     e.preventDefault();
//     console.log("add item");
//     console.log(e.target.name)
//     checkOutData.orderItems.forEach(item => {
//       console.log(item)
//       if (item.title === e.target.name) {
//         console.log("Add + 1")
//       }
//     })
//   }

//   const handleRemoveItem = (e) => {
//     e.preventDefault();
//     console.log("remove item")
//     console.log(e.target.name)
//     checkOutData.orderItems.forEach(item => {
//       console.log(item)
//       if (item.title === e.target.name && item.amount_in_cart < 2) {
//         console.log("need to remove from cart")

//       }
//       else if (item.title === e.target.name && item.amount_in_cart > 1) {
//         console.log("need to remove 1")
//       }
//     }
//     )
//   }

//   const handleClearCart = (e) => {
//     e.preventDefault();
//     console.log("clear Cart")
//     setCheckoutData(prev => {
//       return {
//         ...prev, [e.target.name]: []
//       }
//     })
//     console.log(checkOutData)
//   }


  return (
    <>
      <CheckoutContainer >
      <OrderButton onClick={handleAutoFill}>Auto Fill</OrderButton>
        <CheckoutHeader>Checkout</CheckoutHeader>
        <CheckoutForm onSubmit={(e) => handleOrderSubmit(e)}>
          <LeftSide>
            <FormTitle>1. Shipping</FormTitle>
            <ShippingForm>
              <input type="email" name="email" value={email} placeholder="Email adress" onChange={handleEmailChange}></input>
              <input type="text" name="first_name" value={first_name} placeholder="First Name" onChange={handleFirstChange}></input>
              <input type="text" name="last_name" value={last_name} placeholder="Last Name" onChange={handleLastChange}></input>
              <AdressFormContainer>

                <input type="text" name="street" value={street} placeholder="Street" onChange={handleStreetChange}></input>

                <input type="number" name="street_number" value={street_number} placeholder="Street Number" onChange={handleNumberChange}></input>

                <input type="number" name="zip" value={zip} placeholder="ZIP" onChange={handleZipChange}></input>

                <input type="text" name="city" value={city} placeholder="City" onChange={handleCityChange}></input>

                <input type="text" name="country" value={country} placeholder="Country" onChange={handleCountryChange}></input>

                {/* These two will be feed from the cart or user fetch */}
                <input type="number" name="buyer" value={buyer} placeholder="Buyer" onChange={handleBuyerChange}></input>
                <input type="number" name="product" value={products} placeholder="Product ID" onChange={handleProductsChange}></input>


              </AdressFormContainer>
              <input type="phone" name="phone" value={phone} placeholder="Phone" onChange={handlePhoneChange}></input>
            </ShippingForm>
            <FormTitle>2. Delivery Information</FormTitle>
            <p>The products are shipped regularly by mail from Lesvos, Greece to the destination address. Normally a delivery takes 12-14 weekdays, but there may be some delays. If you are unsure about your delivery, please do not hesitate to contact us.</p>

            <FormTitle>3. Shipping Notes</FormTitle>
            <p>At this point you have the opportunity to provide us with any additional order information. For example, specific color requests for the "Essential Bag" product, special packaging requests or additional address information. Please note that we cannot take all special requests into account, but we will do our best to fulfill your wishes.</p>
            <DeliveryInfoForm>
              <textarea name="shippingnotes" value={note} placeholder="Share your additional requests and comments... " onChange={handleNoteChange}>

              </textarea>
            </DeliveryInfoForm>

            <FormTitle>4. Payment</FormTitle>
            <p>After clicking the "Place Order" buttone you will be redirected to the payment section. Once you proceed the payment, your order is fulfilled</p>

            <FormTitle>5. Order Confirmation</FormTitle>
            <p>As soon as your payment process is completed, you will receive an order confirmation by email.</p>
          </LeftSide>
          <RightSide>
            <ShoppingCart>
              <span style={{ fontWeight: "bold", fontSize: "24px" }}>Order Summary</span>
              

              <button type="button" name="orderItems">Clear Cart</button>

              <TotalsContainer>
                <Separator></Separator>
                <Subtotal>
                  <div>Subtotal</div>
                  <div>CHF 100</div>
                </Subtotal>

              </TotalsContainer>
            </ShoppingCart>

            <OrderButton type="submit" onClick={handleOrderSubmit}>Place Order</OrderButton>

          </RightSide>
        </CheckoutForm>
      </CheckoutContainer>
    </>
  );
}
