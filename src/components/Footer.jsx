import React from "react";

function Footer(){
    const year = new Date().getFullYear();
    return(
        <footer>
            <p>Copyright @ {year} Abhijay Sekhar Choudhury</p>
        </footer>
    )
}

export default Footer;