import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import { articles } from "../types";
const DetailsComponent = () => {
  const [articles, setArticles] = useState<articles>();
  const params = useParams();
  console.log(params.id);

  const fetchData = async (articleID: string) => {
    try {
      let response = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/${articleID}`
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setArticles(data);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (params.id) {
      fetchData(params.id);
    }
  }, [params.id]);
  return (
    <Container>
      <Card>
        <Card.Img variant="top" src={articles?.imageUrl} />
        <Card.Body>
          <Card.Title>{articles?.title}</Card.Title>
          <Card.Text>{articles?.sumary}</Card.Text>

          <a href={articles?.url}>Read the Article</a>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default DetailsComponent;
