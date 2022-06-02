import React from "react";
import NavBar from "./navbar";
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

export default class News extends React.Component {
    render() {
        return ( 
            <div>
                <h2>News</h2>
            <div>
            <CardGroup>
  <Card>
    <Card.Img className="top" src="https://www.nicekicks.com/files/2022/05/FUAuvtOWYAApvN8-602x750.jpg" />
    <Card.Body>
      <Card.Title className="hov">Nike SB and Jordan Brand Are Collaborating on Air Jordan 4</Card.Title>
      <Card.Text className="cardtext">
      Nike’s skateboarding division, Nike SB, is set to crossover into the world of basketball with a special Air Jordan 4 collaboration, sources tell Nice Kicks.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img className="top" src="https://www.nicekicks.com/files/2020/06/best-jordan-3-all-time-1200x640.jpg" />
    <Card.Body>
      <Card.Title className="hov">The 10 Best Air Jordan 3s of All-Time</Card.Title>
      <Card.Text className="cardtext">
      Released in 1987 during Michael Jordan’s first MVP season, the Air Jordan III has been labeled as one of the most significant sneakers of all time.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 9 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img className="top" src="https://www.nicekicks.com/files/2022/05/1.jpg" />
    <Card.Body>
      <Card.Title className="hov">The Classics Inspire Jordan Brand’s Spring 2023 Line Up</Card.Title>
      <Card.Text className="cardtext">
      Jordan Brand has noticeably been bringing back retro-inspired pairs in recent months and it seems they have no plans to slow down planning for Spring 2023.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 14 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
            </div> 
                <div>
                <CardGroup>
  <Card>
    <Card.Img className="top" src="https://www.nicekicks.com/files/2022/06/Off-White-Nike-Air-Force-1-Mid-Green-Release-Date-lead.jpg" />
    <Card.Body>
      <Card.Title className="hov">The Off-White x Nike Air Force 1 Mid “Pine Green” Surfaces Online</Card.Title>
      <Card.Text className="cardtext">
      Already seen in “White” and “Black” colorways, the Off-White x Nike Air Force 1 Mid “Pine Green” makes the upcoming sneaker pack a trio.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 30 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img className="top" src="https://www.nicekicks.com/files/2022/05/Tinker-Hatfield-Michelob-Ultra-Feature-Lead.jpg" />
    <Card.Body>
      <Card.Title className="hov">The One And Only Tinker Hatfield Talks About His Michelob Ultra Collab, Sneaker Rotation, And More</Card.Title>
      <Card.Text className="cardtext">
      Tinker Hatfield. A living legend within the sneaker and design industry, Tinker’s design and influence are more apparent than ever, with his sneakers still being extremely 
      sought after, 30 plus years since sketching them out on his drafting table in Beaverton, OR.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 45 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img className="top" src="https://www.nicekicks.com/files/2022/05/Zadeh-Dissolved-Lead.jpg" />
    <Card.Body>
      <Card.Title className="hov">Zadeh Kicks Files Petition to Dissolve Entity – Millions of Dollars Owed</Card.Title>
      <Card.Text className="cardtext">
      Pre-ordering sneakers has been a move lately that has been more and more popular with how limited and scarce certain sneakers are and Zadeh Kicks was one of the more 
      popular sites to grab a large amount of stock.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 56 mins ago</small>
    </Card.Footer>
  </Card>
</CardGroup>
                </div>
            </div>
        )
    }
}