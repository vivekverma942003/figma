import React from "react";
import "./join.css";
function Join() {
    const cards = [
        {
            title: "Commencement of business",
            text: "Invest shareholder must confirm payment and office address",
            date: "Within 180 days",
            penaltyfees: "50000 for the company 1000/days for directors"
        },
        {
            title: "Auditor Appointment",
            text: "Company informs new auditor and submits ADT.1 form to ROC",
            date: "Within 30 days",
            penaltyfees: "300 per month",
        },
        {
            title: "DIN eKYC",
            text: "Directors share personal information for identification & verification",
            date: "Every Year",
            penaltyfees: "5000 one time",
        },
        {
            title: "DPT-3",
            text: "Companies report money taken from people to ROC; auditors confirm details.",
            date: "Within 30 days",
            penaltyfees: "300 per month",
        },
        {
            title: "MCA Form AOC-4",
            text: "It's like an official report card for a company's documents",
            date: "On or before 30th November",
            penaltyfees: "200 per day (No upper limit)*",
        },
        {
            title: "MCA Form MGT-7",
            text: "Companies must annually report activities and finances to the registrar",
            date: "On or before 31st December",
            penaltyfees: "200 per day (No upper limit)*",
        },

    ]
    return (
        <div className="join">
            <h3 >Wants to Join  Us?<br/>
            <h2 className="title-text">To remain with us, it is essential that you diligently follow the steps provided</h2>

            </h3>
            
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="1536" className="back" height="757" viewBox="0 0 1536 757" >
                <path d="M0.107497 567.266C-13.6344 640.276 0.107497 757 0.107497 757H1536V0C1536 0 1478 47.0138 1451 68C1341.67 152.976 1246.29 92.2517 1105.5 116C957.033 141.043 919.752 257.324 770.187 276.037C632.645 293.245 557.716 199.916 420.345 218.238C255.102 240.279 134.274 284.651 52.3705 418.468C19.8 471.682 11.4329 507.095 0.107497 567.266Z" fill="#DDF3FF" />
            </svg> */}
            <div className="cards">
                
                    {
                        cards.map((e) => {
                            return (
                                <div className="card">
                                    <div className="title-section">
                                        <h4>{e.title}</h4>
                                        <p>{e.text}</p>
                                    </div>
                                    <div className="sub-heading">
                                        <h5>Due Date <br/><span>{e.date}</span></h5>
                                        <h4>Penalty Fees <br/><span>{e.penaltyfees}</span></h4>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <p className="bottom-paragraph">
                    * For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 every day until you file the form .
                    There is no maximum penalty amount.
                    So, if you don't file the form for a year,
                    you will owe ₹73,000 per form</p>
                
            </div>

        </div>
    )
}
export default Join;