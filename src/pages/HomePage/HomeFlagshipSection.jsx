const HomeFlagshipCard = ({ r }) => {
    return (
        <div className="card">
            <img src={"https://picsum.photos/300/200?random=" + r} className="card-img-top" alt="..." />
            <div className="card-body">
                <p className="card-text">Flagship Brand Name</p>
            </div>
        </div>
    );
};

const HomeFlagshipCardGroup = ({ r }) => {
    return (
        <div className="d-flex">
            <HomeFlagshipCard r={r} />
            <HomeFlagshipCard r={r} />
            <HomeFlagshipCard r={r} />
            <HomeFlagshipCard r={r} />
        </div>
    )
}

const HomeFlagshipSection = () => {
    return (
        <div id="homeFlagshipCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <HomeFlagshipCardGroup r="13" />
                </div>
                <div className="carousel-item">
                    <HomeFlagshipCardGroup r="14" />
                </div>
                <div className="carousel-item">
                    <HomeFlagshipCardGroup r="15" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#homeFlagshipCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#homeFlagshipCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default HomeFlagshipSection;