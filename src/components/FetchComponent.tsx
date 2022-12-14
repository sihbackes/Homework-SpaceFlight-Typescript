import { useEffect, useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { articles } from "../types";

const FetchComponent = () => {
  const [articles, setArticles] = useState<articles[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles`
      );
      if (response.ok) {
        let data = await response.json();

        setArticles(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      {articles.map((article) => (
        <Card key={article.id} className="mt-3">
          <Card.Img variant="top" src={article.imageUrl} className="card-pic" />
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Link to={"details/" + article.id}>
              <Button variant="primary">More Info</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default FetchComponent;
