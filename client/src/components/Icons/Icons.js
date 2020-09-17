import React from 'react';
import './style.css';

export default function Icons() {

    return (
        <div className="social-icons">
            <ul>
                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/PVRPD"><li className="twitter"><i className="fa fa-twitter fa-3x" aria-hidden="true"></i></li></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/PVRPD"><li className="facebook"><i className="fa fa-facebook fa-3x" aria-hidden="true"></i></li></a>
                {/* <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/"><li className="linkedin"><i className="fa fa-linkedin fa-3x" aria-hidden="true"></i></li></a> */}
                <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCZ3ABqZVsDCwn2m_OAeg71w"><li className="youtube"><i className="fa fa-youtube fa-3x" aria-hidden="true"></i></li></a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/pvrpd/"><li className="instagram"><i className="fa fa-instagram fa-3x" aria-hidden="true"></i></li></a>
            </ul>

        </div>
    )
}
