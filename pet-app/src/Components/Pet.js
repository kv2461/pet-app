import React, {Component} from "react";
import "../Styles/pet.css";

export default class Pet extends Component {
    // state = {clicked:false}

    // handleClick = () => {
    //     this.setState({clicked:!this.state.clicked});
    // }

    render() {
    return (
        <div className="petContainer">
            <img className="petPhotoMain" src={this.props.petPhoto} alt=""></img>
            <h2 className="petName">{this.props.petName}</h2>
            <div className="petInfo">
                <span className="petAge">{this.props.petAge}</span>
                <i class="fa-solid fa-cat"></i>
                <span className="petBreed">{this.props.petBreed}</span>
            </div>
        </div>
    )}
}