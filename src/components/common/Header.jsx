import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../images/pinkoi_logo.svg";
import { ReactComponent as HeartSvg } from "../../images/heart.svg";
import { ReactComponent as ChatSvg } from "../../images/chat.svg";
import { ReactComponent as BellSvg } from "../../images/bell.svg";
import { ReactComponent as CartSvg } from "../../images/cart.svg";
import { ReactComponent as PcoinSvg } from "../../images/pcoin.svg";

const Header = () => {
    let userInfoDiv;
    if (true) {
        userInfoDiv = <LoginedUserInfoDiv />
    } else {
        userInfoDiv = <UnLoginedUserInfoDiv />
    }

    return (
        <header className="border-bottom">
            <div className="header-top container d-flex">
                <div className="logo">
                    <LogoSvg />
                </div>
                <div className="search me-auto">
                    <SearchDiv />
                </div>
                <div className="user-info">
                    {userInfoDiv}
                </div>
            </div>
            <nav className="container">
                <StyledNav />
            </nav>
        </header>
    );
};

const SearchDiv = () => {
    return (
        <form className="">
            <div>
                <input type="text" placeholder="搜尋好設計、體驗活動" />
                <button>搜尋</button>
            </div>
            <ul className="d-flex p-0">
                <li>
                    <a href="#">link</a>
                </li>
                <li>
                    <a href="#">link</a>
                </li>
                <li>
                    <a href="#">link</a>
                </li>
                <li>
                    <a href="#">link</a>
                </li>
                <li>
                    <a href="#">link</a>
                </li>
            </ul>
        </form>
    );
};

const LoginedUserInfoDiv = () => {
    return (
        <ul className="d-flex">
            <li>
                <a href="#">我想在 Pinkoi 上販售</a>
            </li>
            <li>
                <img src="https://picsum.photos/40/40?random=10" alt="" />
            </li>
            <li>
                <a href="#">
                    <HeartSvg />
                </a>
            </li>
            <li>
                <a href="#">
                    <ChatSvg />
                </a>
            </li>
            <li>
                <a href="#">
                    <BellSvg />
                </a>
            </li>
            <li>
                <a href="#">
                    <CartSvg />
                </a>
            </li>
        </ul>
    );
};

const UnLoginedUserInfoDiv = () => {
    return (
        <ul className="d-flex">
            <li>
                <a href="#">我想在 Pinkoi 上販售</a>
            </li>
            <li>
                <a href="#" className="btn btn-outline-secondary">
                    登入/註冊
                </a>
            </li>
            <li>
                <a href="#">
                    <CartSvg />
                </a>
            </li>
            <li>
                <a href="#">
                    <PcoinSvg />
                </a>
            </li>
        </ul>
    );
};

const NavDropdown = ({ className }) => {
    return (
        <div className={className}>
            helooooooo
            <div className="d-flex">
                <ul></ul>
                <ul></ul>
                <ul></ul>
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
        </div>
    );
};

const StyledNavDropdown = styled(NavDropdown)`
    z-index: 100;
    position: absolute;
    width: 100%;
    display: none;
`;

const Nav = ({ className }) => {
    return (
        <div className={className}>
            <ul className="navbar d-flex justify-content-around">
                <li>
                    <a href="#">主題企劃</a>
                </li>
                <li>
                    <a href="#">配件飾品</a>
                </li>
                <li>
                    <a href="#">包包提袋</a>
                </li>
                <li>
                    <a href="#">居家生活</a>
                </li>
                <li>
                    <a href="#">品味美食</a>
                </li>
                <li>
                    <a href="#">廚房餐桌</a>
                </li>
                <li>
                    <a href="#">創意科技</a>
                </li>
                <li>
                    <a href="#">所有分類</a>
                </li>
                <li>
                    <a href="#">探索更多</a>
                </li>
            </ul>
            <StyledNavDropdown />
        </div>
    );
}

const StyledNav = styled(Nav)`
    position: relative;
    &:hover ${StyledNavDropdown}{
        display: block;
    }
`;

export default Header;