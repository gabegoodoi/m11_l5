import { Button, Container, Card, Image } from 'react-bootstrap';


function Homepage() {
    return (
        <Container className="bg-info-subtle text-center p-5 border border-info">
            <h1 className="primary pb-5">Welcome to the homepage!</h1>
            <Image src="src/assets/welcome-image.jpg" style={{ maxHeight: '50vh', paddingBottom: '20px', paddingLeft: '20px'}} fluid/>
            <Card className="card m-3"><div className="card-body"><h5 className="card-title">Card 1:</h5>Scary Products!</div></Card>
            <Card className="card m-3"><div className="card-body"><h5 className="card-title">Card 2:</h5>Spooky Features!</div></Card>
            <Card className="card m-3"><div className="card-body"><h5 className="card-title">Card 3:</h5>Scary Deals!</div></Card>
            <Button variant='primary' className="btn shadow-lg p-3 m-5 rounded">Shop Now</Button>
        </Container>
    );
}

export default Homepage