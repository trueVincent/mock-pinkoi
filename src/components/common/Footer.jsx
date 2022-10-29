import styled from "styled-components";
import { ReactComponent as LogoSvg } from "../../images/pinkoi_logo.svg";
import { ReactComponent as GlobeSvg } from "../../images/globe.svg";
import { ReactComponent as LogoFilled } from "../../images/pinkoi_logo_filled.svg";
import { ReactComponent as QrCode } from "../../images/qrcode.svg";
import SocialMediaIcons from "../SocialMediaIcons.js";

const Footer = ({ className }) => {
    return (
        <div className={className}>
            <div className="container my-5">
                <div className="row border-bottom pb-2">
                    <div className="col-12 col-md-2">
                        <span>探索好設計</span>
                        <ul>
                            <li>
                                <a href="#">所有商品分類</a>
                            </li>
                            <li>
                                <a href="#">設計誌</a>
                            </li>
                            <li>
                                <a href="#">跨館合併結帳專區</a>
                            </li>
                            <li>
                                <a href="#">Pinkoi 禮物卡</a>
                            </li>
                            <li>
                                <a href="#">Pinkoi 群眾募資</a>
                            </li>
                            <li>
                                <a href="#">找靈感</a>
                            </li>
                            <li>
                                <a href="#">逛櫥窗</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-2">
                        <span>販售</span>
                        <ul>
                            <li>
                                <a href="#">我想在 Pinkoi 上販售</a>
                            </li>
                            <li>
                                <a href="#">我想提案群眾募資專案</a>
                            </li>
                            <li>
                                <a href="#">設計館問與答</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-2">
                        <span>幫助 / 政策</span>
                        <ul>
                            <li>
                                <a href="#">問與答</a>
                            </li>
                            <li>
                                <a href="#">大宗採購</a>
                            </li>
                            <li>
                                <a href="#">訊息公告</a>
                            </li>
                            <li>
                                <a href="#">服務條款</a>
                            </li>
                            <li>
                                <a href="#">退貨政策</a>
                            </li>
                            <li>
                                <a href="#">會員制度 & P Coins 回饋計畫</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-2">
                        <span>認識 Pinkoi</span>
                        <ul>
                            <li>
                                <a href="#">關於我們</a>
                            </li>
                            <li>
                                <a href="#">媒體報導</a>
                            </li>
                            <li>
                                <a href="#">全新 Pinkoi</a>
                            </li>
                            <li>
                                <a href="#">人才招募</a>
                            </li>
                            <li>
                                <a href="#">Pinkoi for Business</a>
                            </li>
                            <li>
                                <a href="#">iichi.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4">
                        <div>追蹤 Pinkoi</div>
                        <ul className="d-flex">
                            <li>
                                <span className="my-circle">
                                    <a href="#">
                                        <SocialMediaIcons.InstagramSvg />
                                    </a>
                                </span>
                            </li>
                            <li>
                                <span className="my-circle">
                                    <a href="#">
                                        <SocialMediaIcons.LineSvg />
                                    </a>
                                </span>
                            </li>
                            <li>
                                <span className="my-circle">
                                    <a href="#">
                                        <SocialMediaIcons.FacebookSvg />
                                    </a>
                                </span>
                            </li>
                            <li>
                                <span className="my-circle">
                                    <a href="#">
                                        <SocialMediaIcons.YoutubeSvg />
                                    </a>
                                </span>
                            </li>
                            <li>
                                <span className="my-circle">
                                    <a href="#">
                                        <SocialMediaIcons.TwitterSvg />
                                    </a>
                                </span>
                            </li>
                            <li>
                                <span className="my-circle">
                                    <a href="#">
                                        <SocialMediaIcons.TiktokSvg />
                                    </a>
                                </span>
                            </li>
                        </ul>
                        <div className="">隨時掌握好最新設計</div>
                        <div className="div">
                            <a href="#">
                                <LogoFilled />
                                下載 Pinkoi APP
                            </a>
                            <QrCode />
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-between">
                    <div className="my-logo">
                        <LogoSvg />
                        <span>Design the way you are.</span>
                    </div>
                    <div className="my-footer-right">
                        <p className="d-inline-block">
                            食品業者登錄字號：A-153674659-00000-3
                            <br />
                            © 2022 Pinkoi. All Rights Reserved.
                        </p>
                        <GlobeSvg />
                        <span>繁體中文（台灣）</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const StyledFooter = styled(Footer)`
    background-color: #f7f7f8;
`;

export default StyledFooter;