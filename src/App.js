import React from "react";
import Header from "./Components/Header";
import Pet from "./Components/Pet";
import "./Styles/app.css";
import data from "./Components/petData";

function getCatData(num) {
    let cat = data.data.cats[num];
    if(cat.petBreed.length>1){
        cat.petBreed = cat.petBreed.join(', ');
    }
    return cat;
}

function getDogData(num) {
    let dog = data.data.dogs[num];
    if(dog.petBreed.length>1){
        dog.petBreed = dog.petBreed.join(', ');
    }
    return dog;
}


let ivy = getCatData(0);
let demo = getCatData(1);
let suki = getDogData(0);

export default function App() {
    return (<div>
                <div>
                    <Header />
                 </div>
                <div>
                    <Pet 
                    pet = {ivy}
                    />
                    <Pet 
                    pet = {demo}
                    />
                    <Pet
                    pet = {suki}
                    />
                 </div>
            </div>
    )
};