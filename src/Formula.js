import React from "react";

const Formula = ({ spalanie, cena, odleglosc, wynik }) => {
    return (
        <div className="Formula">
            <div className="Formula--Division">
                <p>{ odleglosc ? odleglosc : "?" }</p>
                <div style={{ width: "100%", height: "1px", background: "var(--gray)" }}></div>
                <p>100</p>
            </div>
            <p style={{ color: "var(--gray)", fontWeight: "normal" }}>{"×"}</p>
            <p>{ spalanie ? spalanie : "?" }</p>
            <p style={{ color: "var(--gray)", fontWeight: "normal" }}>{"×"}</p>
            <p>{ cena ? cena+"pln" : "?pln" }</p>
            <p style={{ color: "var(--gray)", fontWeight: "normal" }}>{"="}</p>
            <p>{ wynik ? wynik+"pln" : "?pln" }</p>
        </div>
    );
}

export default Formula;