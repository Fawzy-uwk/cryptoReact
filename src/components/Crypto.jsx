import { useEffect, useState } from "react";
import { useGetCryptoQuery } from "../Services/cryptoApi";
import Loader from "./Loader";
import { Card, Col, Input, Row } from "antd";
import { Link } from "react-router-dom";
import millify from "millify";

/*eslint-disable react/prop-types*/
const Crypto = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoLists, isFetching } = useGetCryptoQuery(count);
  const [crypto, setCrypto] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  
  useEffect(() => {
    // Filter coins based on search term
    if (searchTerm) {
      setCrypto(
        cryptoLists?.data?.coins.filter((currency) =>
          currency.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setCrypto(cryptoLists?.data?.coins);
    }

    // Clear search term when component unmounts

    // Only re-run effect if searchTerm changes
  }, [searchTerm, cryptoLists]);

  if (isFetching) return <Loader />;
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrencies"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {crypto?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                hoverable
                extra={<img src={currency.iconUrl} className="crypto-image" />}
              >
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>DailyChange: {millify(currency.change)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Crypto;
