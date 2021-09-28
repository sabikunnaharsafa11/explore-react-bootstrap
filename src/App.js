import logo from './logo.svg';
import './App.css';
import News from './Components/News/News';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonGroup,Button,Spinner, Row, Col, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';

function App() {
  const [news, setNews] = useState([])

  useEffect( () => {
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-08-28&sortBy=publishedAt&apiKey=29c87344b58d4f598f05e40b09776d06')
    .then(res => res.json())
    .then(data => setNews(data.articles))
  }, [])
  return (
    <div className="App">
      
         {
           news.length===0 ? 
           <Spinner animation="border" />
           :
           <Row xs={1} md={3} className="g-4">
             {
               news.map(nw => <News news={nw}></News>)
             }
              </Row>
         }
    </div>
  );
}

export default App;
