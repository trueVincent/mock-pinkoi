import styled from "styled-components";
import HomeCarousel from "./HomeCarousel";
import HomeStoreSection from "./HomeStoreSection";
import HomeFlagshipSection from "./HomeFlagshipSection";
import HomeThemeSection from "./HomeThemeSection";

const HomePage = () => {
    return (
        <>
            <div className="container mb-5">
                <HomeCarousel />
            </div>
            <div className="container mb-5">
                <div>
                    品牌推廣
                </div>
                <HomeStoreSection />
            </div>
            <div className="container mb-5">
                <div>
                    品牌旗艦館
                    <a href="#">看全部</a>
                </div>
                <HomeFlagshipSection />
            </div>
            <div className="container mb-5">
                <div>
                    閱讀好設計
                    <a href="#">看更多</a>
                </div>
                <HomeThemeSection />
            </div>
            <div className="container mb-5">
                點擊下載 Pinkoi APP
            </div>
        </>
    );
};

export default HomePage;