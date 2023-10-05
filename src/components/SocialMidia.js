import "./SocialMidiaStyles.css"
import React from "react"

const SocialMidia = () => {
    return (
        <div className="icon-bar">
			<a href='https://github.com/Luis-Henrique' className='icon github'>
				<i className="icon-link"></i>
			</a>
			<a href='https://linkedin.com/in/luis-h3nrique' className='icon linkedin'>
				<i className="icon-link"></i>
			</a>
			<a href='mailto:henriqueluis3104@hotmail.com' className='icon email'>
                <div className="fakeImage"></div>
				<i className="icon-link"></i>
			</a>
		</div>
    );
};

export default SocialMidia;