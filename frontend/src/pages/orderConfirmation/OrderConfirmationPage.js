import Footer from '../../components/footer/Footer.js';
import Navbar from '../../components/navbar/Navbar.js';
import OrderConfirmation from '../../components/ShopSection/OrderConfirmation/OrderConfirmation.js';
import { PageWrapper}  from "./OrderConfirmation.styled.js"

export default function OrderConfirmationPage() {
  return (
    <>
      <PageWrapper>
        <Navbar/>
        <OrderConfirmation />
        <Footer/>
      </PageWrapper>
    </>
  );
}
