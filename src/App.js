import React from "react";
import Header from "./Components/Header";
import Pet from "./Components/Pet";
import "./Styles/app.css";
import data from "./Components/petData";

function getCatData(num) {
    let cat = data.data.cats[num];
    return cat;
}

let ivy = getCatData(0);
let demo = getCatData(1);

export default function App() {
    return (<div>
                <div>
                    <Header />
                 </div>
                <div>
                    <Pet 
                    id={ivy.id} 
                    petName={ivy.petName}
                    petPhoto={ivy.petPhoto}
                    petAge={ivy.petAge} 
                    petBreed={ivy.petBreed} 
                    petType={ivy.petType}
                    />
                    <Pet 
                    id={demo.id} 
                    petName={demo.petName}
                    petPhoto={demo.petPhoto}
                    petAge={demo.petAge} 
                    petBreed={demo.petBreed} 
                    petType={demo.petType}
                    />
                 </div>
            </div>
    )
};