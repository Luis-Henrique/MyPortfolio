import "./SocialMidiaStyles.css"
import React from "react"

const SocialMidia = () => {
    return (
        <div className="icon-bar">
			<a href='#' className='icon github'>
				<i className="icon-link"></i>
			</a>
			<a href='#' className='icon linkedin'>
				<i className="icon-link"></i>
			</a>
			<a href='https://www.instagram.com/vinodthapa55/' className='icon email'>
                <div className="fakeImage"></div>
				<i className="icon-link"></i>
			</a>
		</div>
    );
};

export default SocialMidia;