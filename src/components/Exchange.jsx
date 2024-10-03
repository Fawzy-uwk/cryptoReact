import { Avatar, Col, Collapse, Row, Typography } from "antd";
import { useGetExchangesQuery } from "../Services/CryptoExchanges";
import millify from "millify";
import Loader from "./Loader";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchange = () => {
  const { data: exchanges, isFetching } = useGetExchangesQuery();

  if (isFetching || !exchanges) return <Loader />;

  return (
    <>
      <Row className="mb-2">
        <Col className="text-sm md:text-lg" span={4}>
          Exchanges
        </Col>
        <Col className="text-sm md:text-lg" span={4}>
          Price
        </Col>
        <Col className="text-sm md:text-lg" span={4}>
          24h Trade Volume
        </Col>
        <Col className="text-sm md:text-lg" span={4}>
          Market Cap
        </Col>
        <Col className="text-sm md:text-lg" span={4}>
          24H Change
        </Col>
        <Col className="text-sm md:text-lg" span={4}>
          Total Supply
        </Col>
      </Row>

      <Row>
        {Object.entries(exchanges?.data)?.map(([key, exchange], i) => (
          <Col span={24} key={i}>
            <Collapse>
              <Panel
                key={exchange.id}
                showArrow={false}
                header={
                  <Row key={exchange.id}>
                    <Col span={4} className="flex items-center ">
                      <Text>
                        <strong>{exchange.rank}.</strong>
                      </Text>
                      <Avatar
                        className="exchange-image hidden md:block"
                        src={exchange.iconUrl}
                      />
                      <Text>
                        <strong>{exchange.name}</strong>
                      </Text>
                    </Col>
                    <Col span={4}>
                      ${millify(exchange.quotes?.USD?.price ?? 0)}
                    </Col>
                    <Col span={4}>
                      ${millify(exchange.quotes?.USD?.volume_24h ?? 0)}
                    </Col>

                    <Col span={4}>
                      ${millify(exchange.quotes?.USD?.market_cap ?? 0)}
                    </Col>
                    <Col span={4}>
                      {millify(exchange.quotes?.USD?.percent_change_24h ?? 0)}%
                    </Col>
                    <Col span={4}>
                      {exchange.total_supply
                        ? `${millify(exchange.total_supply)} ${exchange.symbol}`
                        : "N/A"}
                    </Col>
                  </Row>
                }
              >
                <Row>
                  <Col xs={24} lg={12} className="flex items-center gap-2">
                    <h4 className="text-sm md:text-lg  font-semibold">
                      -To know more about {exchange.name} :{" "}
                    </h4>
                    <a
                      href={`https://www.wikipedia.org/wiki/${exchange.name}`}
                      target="_blank"
                      className="text-[#012b3b] font-bold mt-1"
                    >{`https://www.wikipedia.org/wiki/${exchange.name}`}</a>
                  </Col>
                </Row>
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchange;
