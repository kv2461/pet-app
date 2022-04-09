import React from "react";
import Header from "./Components/Header";
import Pet from "./Components/Pet";
import "./Styles/app.css";
import ivy from "./Images/ivyPhoto.png"; 
import demo from "./Images/demoPhoto.png"

export default function App() {
    return (<div>
                <div>
                    <Header />
                 </div>
                <div>
                    <Pet petName="Ivy" petPhoto={ivy} petAge="Adult" petBreed="Tortoiseshell" />
                    <Pet petName="Demo" petPhoto={demo} petAge="Fat" petBreed="Bigboiii"/>
                 </div>
            </div>
    )
};