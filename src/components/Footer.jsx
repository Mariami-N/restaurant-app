import styled from "styled-components"

export default function Footer () { 
    return (
        <>
        <footer>
       <h1
        style={{
            color : "rgb(205, 175, 5)",
            textAlign: "center",
            marginTop: "100px",
            fontFamily: "Roboto Slab"
        }}>  R e s t a u r a n t  <br></br>  
        <br></br>
         L  E  M  A  V  A  R  I  N  I  </h1>
        <br></br>
        <Email> E-mail: restaurant@lemavarini.com </Email>
        <Phone> Phone: +995 598 55 00 26 </Phone>
        </footer>
        </>
    )
    }

   const Phone = styled.p`
    color: white;
    font-size: 20px;
    text-align: center;
    font-family: Roboto Slab;
    margin-bottom: 50px;
   `

    const Email = styled.p`
    color: white;
    font-size: 20px;
    text-align: center;
    font-family: Roboto Slab;
    margin-top: 30px
    `