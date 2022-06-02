import React from "react";
import NavBar from "./navbar";
import Carousel from 'react-bootstrap/Carousel'

export default class Home extends React.Component {
    render() {
        return ( 
            <div>
                <h2>Home</h2> 
            <div>
            <Carousel>
                <Carousel.Item>
                    <img 
                        className = "d-block"
                        src = "https://www.nicekicks.com/files/2022/05/Nike-Air-Max-CB-94-Suns-DO5880-100-Lead.jpg"
                        alt = "First slide" 
                    />
                    <Carousel.Caption>
                        <h3>June 3rd, 2022</h3> 
                        <p>Nike Air Max CB 94 "Suns"</p>
                    </Carousel.Caption> 
                </Carousel.Item> 
                <Carousel.Item>
                    <img 
                        className = "d-block"
                        src = "https://www.nicekicks.com/files/2022/05/Naruto-Jordan-Air-200E-SP-Jonin-DQ6385-360-Release-Date-lead.jpg"
                        alt = "Second slide" 
                    />
                    <Carousel.Caption >
                        <h3>June 3rd, 2022</h3> 
                        <p>Naruto x Jordan Air 200E SP “Jonin”</p> 
                    </Carousel.Caption> 
                </Carousel.Item> 
                <Carousel.Item>
                    <img 
                        className = "d-block"
                        src = "https://www.nicekicks.com/files/2022/01/nike-dunk-low-rose-whisper-wmns-dd1503-118-release-date-0.png"
                        alt = "Third slide" 
                    />
                    <Carousel.Caption>
                        <h3 >June 2nd, 2022</h3> 
                        <p>WMNS Dunk Low “Rose Whisper”</p> 
                    </Carousel.Caption> 
                </Carousel.Item> 
            </Carousel> 
            </div> 
                <div>
                    <h3 class="h33">Welcome to SoLeFuLL. . . The only site for your sneaker needs!</h3>
                </div>
            </div>
            
        )
    }
}

