import React from "react";
import LiderbordCard from "../components/LiderbordCardComponent";
import { useNavigate, Navigate } from "react-router-dom";


export default function SearchLiderbord(props: any) {

    const navigate = useNavigate();

    let cardData = {
        "topic" : "ADVANCED C++",
        "nbVotes" : 2,
        "nbResources" : 3, 
        "tags" : ["programming", "advanced", "C++"],
        "description" : "High level C++ courses, these courses should focus only on the more advanced concepts of teh c++ langauge. Basic c++ introductions are not welcome"
    }

    return(
    <div>
        <LiderbordCard {...cardData}/>
    </div>
    );
}