import { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './assets/style.css'
function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://designerportal.net/testreact/listProducts.php')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data)
      })
  }, [])

  return (
    <div className="App">
      <div className="container mt-4">
        <h1>Products</h1>
       {
       
       products.map((product) => (
        <div className="product">
          <Row>
            <Col lg="2">
              <Card style={{ width: '18rem' }} className="mb-3">
                <Card.Img variant="top" src={product.img_product} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>
                    {product.price} | {product.quantity}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          </div>
        ))
        

       }
         
      </div>
    </div>
  )
}

export default App
