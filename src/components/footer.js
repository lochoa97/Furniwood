import React from "react";
import  '../Styles/footer.css';

function Footer(){

    const facebooksocialicon = {
        backgroundImage: 'url("facebook.png")',
    /* Other CSS properties for styling */
    width: '50px',
    height: '50px',
    }

    const instagramsocialicon = {
        backgroundImage: 'url("instagram.png")',
    /* Other CSS properties for styling */
    width: '50px',
    height: '50px',
    }

    const tiktoksocialicon = {
        backgroundImage: 'url("tiktok.png")',
    /* Other CSS properties for styling */
    width: '50px',
    height: '50px',
    }

    return(
        <footer>
            <div className="social-icons-container">
                <a href="" style={facebooksocialicon} className="social-icon"></a>
                <a href="" style={instagramsocialicon} className="social-icon"></a>
                <a href="" style={tiktoksocialicon} className="social-icon"></a>
            </div>
            <span className="copyright">&copy;2023, Furniwood. All rights reserved.</span>
        </footer>
    );
}

export default Footer;