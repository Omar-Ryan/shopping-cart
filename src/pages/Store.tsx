import { Col, Row } from "react-bootstrap";
import storeData from "../data/items.json";
import StoreItems from "../components/StoreItems";

function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row xs={1} md={2} lg={3} className="g-3">
        {storeData.map((item) => (
          <Col key={item.id}>
            <StoreItems {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Store;
