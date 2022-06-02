import React from "react";
import NavBar from "./navbar";
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class Drops extends React.Component {
    render() {
        return (
            <div>
                <h2>Drops</h2>
                <div className="dropbutton">
                <Card style={{ width: '18rem' }}>
  <Card.Img className="topdrop" src="https://1000logos.net/wp-content/uploads/2021/11/Nike-Logo.png" />
  <Card.Body>
    <Card.Title>NIKE</Card.Title>
    <Card.Text>
      Check out the latest Air Maxes, Dunks, Blazers, and your fav Nike Athletes signature shoes.
    </Card.Text>
    <Button variant="primary">View Now</Button>
  </Card.Body>
</Card>
                </div>
                <div className="dropbutton">
                <Card style={{ width: '18rem' }}>
  <Card.Img className="topdrop" src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png" />
  <Card.Body>
    <Card.Title>JORDAN BRAND</Card.Title>
    <Card.Text>
      Check out all the current and retro Jordans here!
    </Card.Text>
    <Button variant="primary">View Now</Button>
  </Card.Body>
</Card>
                </div>
                <div className="dropbutton">
                <Card style={{ width: '18rem' }}>
  <Card.Img className="topdrop" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png" />
  <Card.Body>
    <Card.Title>ADIDAS</Card.Title>
    <Card.Text>
      All Adidas and Yeezys found here!
    </Card.Text>
    <Button variant="primary">View Now</Button>
  </Card.Body>
</Card>
                </div>
                <div className="dropbutton">
                <Card style={{ width: '18rem' }}>
  <Card.Img className="topdrop" src="https://preview.thenewsmarket.com/Previews/RBOK/StillAssets/1920x1080/551064.png" />
  <Card.Body>
    <Card.Title>REEBOK</Card.Title>
    <Card.Text>
      Reeboks and Allen Iverson live here!
    </Card.Text>
    <Button variant="primary">View Now</Button>
  </Card.Body>
</Card>
                </div>
                <div className="dropbutton">
                <Card style={{ width: '18rem' }}>
  <Card.Img className="topdrop" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/49/Puma_AG.svg/1200px-Puma_AG.svg.png" />
  <Card.Body>
    <Card.Title>PUMA</Card.Title>
    <Card.Text>
      The house that Usain Bolt and LaMelo Ball built!
    </Card.Text>
    <Button variant="primary">View Now</Button>
  </Card.Body>
</Card>
                </div>
                <div className="dropbutton">
                <Card style={{ width: '18rem' }}>
  <Card.Img className="topdrop" src="https://logos-world.net/wp-content/uploads/2020/09/New-Balance-Logo-1972-2006.png" />
  <Card.Body>
    <Card.Title>NEW BALANCE</Card.Title>
    <Card.Text>
      Definitely not your daddy's New Balances!
    </Card.Text>
    <Button variant="primary">View Now</Button>
  </Card.Body>
</Card>
                </div>
            </div>
        )
    }
}