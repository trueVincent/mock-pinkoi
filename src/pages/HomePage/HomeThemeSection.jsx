const HomeThemeCard = ({ r }) => {
    return (
        <div className="card">
            <img src={"https://picsum.photos/300/200?random=" + r} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Card content</p>
            </div>
        </div>
    );
};

const HomeThemeCardGroup = ({ r }) => {
    return (
        <div className="d-flex">
            <HomeThemeCard r={r} />
            <HomeThemeCard r={r} />
            <HomeThemeCard r={r} />
            <HomeThemeCard r={r} />
        </div>
    )
}

const HomeThemeSection = () => {
    return (
        <div id="homeThemeCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <HomeThemeCardGroup r="13" />
                </div>
                <div className="carousel-item">
                    <HomeThemeCardGroup r="14" />
                </div>
                <div className="carousel-item">
                    <HomeThemeCardGroup r="15" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#homeThemeCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#homeThemeCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default HomeThemeSection;