import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us </FooterLinkTitle>
                            <FooterLink to="/signin">link</FooterLink>
                            <FooterLink to="/signin">link2</FooterLink>
                            <FooterLink to="/signin">career</FooterLink>
                            <FooterLink to="/signin">link3</FooterLink>
                            <FooterLink to="/signin">link4</FooterLink>
                            <FooterLink to="/signin">terms of services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us </FooterLinkTitle>
                            <FooterLink to="/signin">link</FooterLink>
                            <FooterLink to="/signin">link2</FooterLink>
                            <FooterLink to="/signin">career</FooterLink>
                            <FooterLink to="/signin">link3</FooterLink>
                            <FooterLink to="/signin">link4</FooterLink>
                            <FooterLink to="/signin">terms of services</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us </FooterLinkTitle>
                            <FooterLink to="/signin">link</FooterLink>
                            <FooterLink to="/signin">link2</FooterLink>
                            <FooterLink to="/signin">career</FooterLink>
                            <FooterLink to="/signin">link3</FooterLink>
                            <FooterLink to="/signin">link4</FooterLink>
                            <FooterLink to="/signin">terms of services</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About us </FooterLinkTitle>
                            <FooterLink to="/signin">link</FooterLink>
                            <FooterLink to="/signin">link2</FooterLink>
                            <FooterLink to="/signin">career</FooterLink>
                            <FooterLink to="/signin">link3</FooterLink>
                            <FooterLink to="/signin">link4</FooterLink>
                            <FooterLink to="/signin">terms of services</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            Bharat Uday
                        </SocialLogo>
                        <WebsiteRights>Bharat Uday © {new Date().getFullYear()}
                            All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria_label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria_label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria_label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank" aria_label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
