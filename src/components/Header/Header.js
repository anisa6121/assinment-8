import React from 'react';
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 	faUniversalAccess } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
    return (
		<div className="header">
			<h2>
				
				<span>
					<FontAwesomeIcon
						icon={faUniversalAccess}
					></FontAwesomeIcon>
				</span>
				Our-Activity-Project
            </h2>
            
            <h3 className='text'>Select Your Favorite Exercise</h3>
		</div>
    );
};

export default Header;