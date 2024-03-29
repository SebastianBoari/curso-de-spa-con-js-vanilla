import GithubIcon from '../icons/GithubIcon'
import HomeIcon from '../icons/HomeIcon'
import InfoIcon from '../icons/InfoIcon'
import WickrickIcon from '../icons/WickrickIcon'

const Header = () => {
    const view = `
        <div class="header">
            <div class="header_brand">
                <a href="https://sebastianboari.github.io/curso-de-spa-con-js-vanilla/" class="header_brand-link">
                    ${WickrickIcon()}
                </a>
            </div>

            <ul class="header_nav">
                <li class="header_nav-item">
                    <a class="item_link" href="https://sebastianboari.github.io/curso-de-spa-con-js-vanilla/">
                        ${HomeIcon()}
                    </a>
                </li>
                
                <li class="header_nav-item">
                    <a class="item_link" href="https://github.com/SebastianBoari">
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