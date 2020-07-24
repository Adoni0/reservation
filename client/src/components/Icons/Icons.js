import React from 'react';
import './style.css';

export default function Icons() {

    return (
        <div className="social-icons">
            <ul>
                <a href="https://twitter.com/home"><li className="twitter"><i class="fa fa-twitter fa-3x" aria-hidden="true"></i></li></a>
                <a href="https://www.facebook.com/"><li className="facebook"><i class="fa fa-facebook fa-3x" aria-hidden="true"></i></li></a>
                <a href="https://www.linkedin.com/"><li className="linkedin"><i class="fa fa-linkedin fa-3x" aria-hidden="true"></i></li></a>
                <a href="https://www.youtube.com/"><li className="youtube"><i class="fa fa-youtube fa-3x" aria-hidden="true"></i></li></a>
                <a href="https://www.instagram.com/"><li className="instagram"><i class="fa fa-instagram fa-3x" aria-hidden="true"></i></li></a>
            </ul>

        </div>
    )
}
