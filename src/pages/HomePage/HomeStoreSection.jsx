const HomeStoreCard = ({ r }) => {
    return (
        <div className="card">
            <div className="row">
                <div className="col-8">
                    <img src={"https://picsum.photos/300/200?random=" + r} width="200px" height="200px" alt="" />
                </div>
                <div className="col-4">
                    <img src={"https://picsum.photos/300/200?random=" + r} width="100px" height="100px" alt="" />
                    <img src={"https://picsum.photos/300/200?random=" + r} width="100px" height="100px" alt="" />
                </div>
            </div>
            <div className="d-flex">
                <div className="my-store-logo">
                <img src={"https://picsum.photos/50/50?random=" + r} alt="" />
                </div>
                <div className="my-store-info">
                    <div>SIO Crystal 希奧水晶</div>
                    <div>評價 5.0</div>
                    <div>關注人數 2,553</div>
                </div>
                <div className="my-store-action">
                    <a href="#" className="btn btn-outline-secondary">即刻專注</a>
                    <a href="#" className="btn btn-outline-secondary">愛心</a>
                </div>
            </div>
        </div>
    );
};

const HomeStoreCardGroup = ({ r }) => {
    return (
        <div className="d-flex">
            <HomeStoreCard r={r} />
            <HomeStoreCard r={r} />
            <HomeStoreCard r={r} />
        </div>
    )
}

const HomeStoreSection = () => {
    return (
        <div id="homeStoreCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <HomeStoreCardGroup r="10" />
                </div>
                <div className="carousel-item">
                    <HomeStoreCardGroup r="11" />
                </div>
                <div className="carousel-item">
                    <HomeStoreCardGroup r="12" />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#homeStoreCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#homeStoreCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default HomeStoreSection;