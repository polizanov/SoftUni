import './GoldenHotel.css'

function GoldenHotel(props) {
    return (
        <article className="golden-hotel">
            <article className="hotel-image-wrap">
                <img src={props.hotel.imageUrl}
                    alt="hotel"/>
            </article>
            <article className="hotel-content">
                <p id="center">{props.hotel.name}</p>
                <p id="center">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </p>
                <article className="see-more-btn">
                    <a href="#">See more</a>
                </article>
            </article>
        </article>
    );
}

export default GoldenHotel;