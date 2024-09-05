import { Col, Row, Stack } from "react-bootstrap";
import storeData from "../data/items.json";
import StoreItems from "../components/StoreItems";

function Store() {
  return (
    <Stack>
      <h1 className="mt-4 mb-5" style={{ background: "#e5e5e568" }}>
        .Store
      </h1>
      <Row xs={1} md={2} lg={3} className="g-3">
        {storeData.map((item) => (
          <Col key={item.id}>
            <StoreItems {...item} />
          </Col>
        ))}
      </Row>
    </Stack>
  );
}

export default Store;
