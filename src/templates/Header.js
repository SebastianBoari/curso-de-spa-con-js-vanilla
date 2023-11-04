import GithubIcon from '../icons/GithubIcon'
import HomeIcon from '../icons/HomeIcon'
import InfoIcon from '../icons/InfoIcon'
import WickrickIcon from '../icons/WickrickIcon'
// <img src="https://i.imgur.com/usvTZv0.png" alt="wikirick logo">
const Header = () => {
    const view = `
        <div class="header">
            <div class="header_brand">
                <a href="/" class="header_brand-link">
                    ${WickrickIcon()}
                </a>
            </div>

            <ul class="header_nav">
                <li class="header_nav-item">
                    <a class="item_link" href="/">
                        ${HomeIcon()}
                    </a>
                </li>
                
                <li class="header_nav-item">
                    <a class="item_link" href="/">
                        ${GithubIcon()}
                    </a>
                </li>

                <li class="header_nav-item">
                    <a class="item_link" href="#/about/">
                        ${InfoIcon()}
                    </a>
                </li>
            </ul>
        </div>
    `
    return view
}

export default Header