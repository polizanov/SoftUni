import { Component } from "react";
import goldHotelsService from "../service/HotelsService";
import GoldenHotel from "./GoldenHotel";
import './GoldenArea.css'

class GoldenArea extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    async componentDidMount() {
        let hotels = await goldHotelsService();
        this.setState({ hotels });
    }

    render() {
        return (
            <section className="wrap golden-area-component">
                <article className="golden-component-header">
                    <h1>Golden Area</h1>
                </article>

                <article className="medal-icon">
                    <i className="fas fa-medal"></i>
                </article>

                <article className="wrap hotels-wrapper">
                    {
                        this.state.hotels?.map((x) =>
                            <GoldenHotel key={x._id} hotel={x} />
                        )
                    }
                </article>

            </section>
        )
    }
}


export default GoldenArea;