import React, { useState } from 'react'
import {
    FooterWrapperDiv,
    TabsContainerDiv,
    TabsDiv,
    Signature,
    FadingBackground,
    StyledStoreModal,
    StyledContactModal,
    AddressesDiv
} from './FooterLinks.styles';
import { 
    SlSocialInstagram,
    SlSocialFacebook,
    SlSocialTwitter,
} from "react-icons/sl";
import { SiWhatsapp } from "react-icons/si"
import { ModalProvider } from "styled-react-modal";

const Footer = () => {

    // problem with displaying modals - both at the same time

    const [contactOpen, setContactOpen] = useState(false);
    const [storesOpen, setStoresOpen] = useState(false);

    const toggleContactModal = () => {
        setContactOpen(!contactOpen);
    }

    const toggleStoresModal = () => {
        setStoresOpen(!storesOpen);
    }

    return (
        <> 
        <ModalProvider backgroundComponent={FadingBackground}>
            <FooterWrapperDiv>
                <TabsContainerDiv>
                    <TabsDiv>
                        <text onClick={toggleContactModal}>Find Us</text>
                        <StyledStoreModal
                        isOpen={storesOpen}
                        onBackgroundClick={toggleContactModal}
                        allowScroll = {false}
                        >
                        <h1>Stores</h1>
                        <p>Our bagforeveryone-Shopperbags also can be discovered, touched and experienced in Shops. We are happy to announce our first cooperation with the shop “Esperanto” in Rapperswill, where our sustainable, fairly produced bags are accesible. Our goal is to support shops with a product, who care for sustainable products and to raise awareness.</p>
                        <h3>Esperanto's address</h3>
                        <p>Esperanto Rapperswil</p>
                        <p>Tiefenaustrasse</p> 
                        <p>28640 Rapperswil</p>
                        <h3>Is a Shopperbag from the store a donation?</h3>
                        <p>After purchaising a bag, you wont receive a receipt of a donation. But with your bag, you automatically support the project in lesvos and the refugees who crafted the bags. There are no shipping costs, but you support the Shop Owner. As well as refugees in lesvos, we also want to support Shop Owners, who support sustainable and social products. With presenting our the bagforeveryone-Shopperbags they support us to spread the message about the situation in Lesvos.</p>
                </StyledStoreModal>
                    </TabsDiv>
                    <TabsDiv>
                        <text onClick={toggleContactModal}>Contact Us</text>
                        <StyledContactModal
                        isOpen={contactOpen}
                        onBackgroundClick={toggleContactModal}
                        allowScroll = {false}
                        >
                        <h1>Contact</h1>
                        <p>This project is a cooperation of the two Non-Profit Organizations #EducationEveryone (CH) und Starfish Foundation (GR).</p>
                        <AddressesDiv>
                            <div>
                                <h3>#EducationEveryone</h3>
                                <p>#EducationEveryone</p>
                                <p>c/o Markus Böniger</p>
                                <p>Böndlerstrasse 2</p>
                                <p>8803 Rüschlikon</p>
                                <p>Switzerland</p>
                                <p>info@educationeveryone.org</p>
                            </div>
                            <div>
                                <h3>Starfish Foundation</h3>
                                <p>Starfish Foundation</p>
                                <p>Vournazon 25</p>
                                <p>Mytilene</p>
                                <p>81132</p>
                                <p>Greece</p>
                                <p>starfish@asterias-starfish.org</p>
                            </div>
                            </AddressesDiv>
                </StyledContactModal>
                    </TabsDiv>
                    <TabsDiv>
                        <p>FOLLOW</p>
                        <div className='social'>
                        <a href="https://www.instagram.com/bag.foreveryone/">
                            <SlSocialInstagram />     
                        </a>  
                        <a href="https://m.facebook.com/bagforeveryonelesvos/">
                            <SlSocialFacebook />   
                        </a> 
                        </div>
                    </TabsDiv>
                    <TabsDiv>
                        <p>SHARE</p>
                        <div className='social'>
                        <a href="http://nowhere.com">  {  /* how do i share page on social media? */ }
                            <SlSocialInstagram />     
                        </a>
                        <a href="http://nowhere.com">
                            <SlSocialFacebook />    
                        </a>
                        <a href="http://nowhere.com">
                            <SlSocialTwitter />    
                        </a>
                        <a href="http://nowhere.com">
                            <SiWhatsapp />   
                        </a>
                         </div>
                    </TabsDiv>
                </TabsContainerDiv>
                <Signature>&copy;bagforeveryone 2022</Signature>
            </FooterWrapperDiv>
            </ModalProvider>
        </>
    )
}

export default Footer