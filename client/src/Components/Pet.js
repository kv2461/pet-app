import React, {Component} from "react";
import "../Styles/pet.css";

export default function Pet (props) {
    function petTypeIcon(petType) {
        if (petType === "cat") {
            return "fa-solid fa-cat";
        } else if (petType === "dog") {
            return "fa-solid fa-dog";
        }
    }
    return (
        <div className="petContainer">
            <img className="petPhotoMain" src={props.pet.petPhoto} alt=""></img>
            <h2 className="petName">{props.pet.petName}</h2>
            <div className="petInfo">
                <span className="petAge">{props.pet.petAge}</span>
                <i className={petTypeIcon(props.pet.petType)}></i>
                <span className="petBreed">{props.pet.petBreed}</span>
            </div>
        </div>
    )
}