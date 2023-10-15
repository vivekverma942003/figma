import React from "react";
import "./content.css";
import icon1 from "../assets/icon1.jpg";
import icon2 from "../assets/icon2.jpg";
import icon3 from "../assets/icon3.jpg";
import icon4 from "../assets/icon4.jpg";
import picture1 from "../assets/picture1.jpg";
import picture2 from "../assets/picture2.png";
function Content() {

    const contentCards = [
        {
            "imgUrl": icon1,
            "text": "SEARCH for vital company information "
        },
        {
            imgUrl: icon2,
            "text": "CONNECT with the resources to meet your business needs"
        },
        {
            imgUrl: icon3,
            "text": "RESEARCH and generate reports  that drive growth",

        },
        {
            imgUrl: icon4,
            "text": "ACADEMY to give you the skills for success in your career",
        }
    ]

    return (
        <div className="content">

            <div className="content-heading">
                <h1>All-in-One platform that Makes Easier</h1>
                <p>We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals</p>
                <div className="content-cards">
                    {
                        contentCards.map((e) => {
                            return (
                                <div className="card-container">
                                    <img src={e.imgUrl} />
                                    {e.text}
                                </div>
                            )
                        })
                    }
                </div>

            </div>
            <div className="content-image">
                
                <div className="content1">
                    
                    <div className="text">
                        <span>
                            Hey, check out loreumipsum services.
                        </span>
                        <span>
                            I learned from their videos, got my first job.

                        </span>
                        <span>
                            You won't be disappointed with their services.

                        </span>
                        <span>
                            I got a perfect analysis report from them too
                            Oh, that's great.
                        </span>
                        <span>Oh, that's great</span>
                    </div>
                    <img src={picture1} alt="picture1"/>

                </div>
                <div className="content2">
                    <img src={picture2} />
                </div>
            </div>



        </div>
    )
}
export default Content;