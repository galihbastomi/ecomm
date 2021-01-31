import React from 'react'

const Header = props => {
    return (
        <div className="col s12">
            <nav>
                <div className="nav-wrapper #00796b teal darken-2">
                <a href="#" className="brand-logo center teal-text text-lighten-4">MINE</a>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><a href="sass.html" className="teal-text text-lighten-4">Sass</a></li>
                    <li><a href="badges.html" className="teal-text text-lighten-4">Components</a></li>
                    <li><a href="collapsible.html" className="teal-text text-lighten-4">JavaScript</a></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header