
import styled from "styled-components"
import { Link } from "react-router-dom";
import { useState } from "react";
import menu from "../../images/menu.png"

const MainContainer = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
width: 100%;
height: 50px;
background: white;
position: relative;
@media (max-width: 768px) {
    height: auto;
    justify-content: flex-start;
}
`
const LeftComponent = styled.div`
width: 50vw
`
const P = styled.p`
    opacity: 0.7;
    `
const ItemsContainer = styled.div`
    display: flex;
    @media (max-width: 768px) {
        flex-direction: column;
        position: absolute;
        top: 40px;
        justify-content: center;
        background: white;
        width: 100vw;
    }
    
    justify-content: space-between;
    align-items: center;
 
 
    `
const linkStyle =
{
    textDecoration: "none",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "16px",
    lineHeight: "28px",
    /* or 175% */

    padding: '10px',
    color: "#BBBBCB",

}
const Image = styled.img`
padding: 10px 15px;
`

const Div = styled.div`
padding: 10px;
`
function Navbar() {
    const menuHandler = () => {
        if (show === false) {
            setShow(true)
        } else {
            setShow(false)
        }

    }
    const [show, setShow] = useState(false)
    const items = [{ title: "Home", ref: "home" }, { title: "About Us", ref: "about" }, { title: "Features", ref: "features" }, { title: "Pricing", ref: "pricing" }, { title: "Work", ref: "work" }]
    return (
        <MainContainer>
            <Image src={menu} onClick={menuHandler} />
            {show && <ItemsContainer>
                {items.map((item, index) => {
                    return (
                        <Div onClick={menuHandler}>
                            <Link style={linkStyle} to={`/${item.ref}`}>{item.title}</Link>
                        </Div>

                    )
                })}

            </ItemsContainer>}

        </MainContainer>
    )
}

export default Navbar;