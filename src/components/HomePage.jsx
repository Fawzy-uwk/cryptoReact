import { Col, Row, Statistic, Typography } from "antd";
import { useGetCryptoQuery } from "../Services/cryptoApi";

import millify from "millify";
import { Link } from "react-router-dom";
import { Crypto, News } from "../components";
import Loader from "./Loader";

const HomePage = () => {
  const { Title } = Typography;

  const { data, isFetching } = useGetCryptoQuery(10);
  const globalData = data?.data?.stats;

  if (isFetching) return <Loader />;
  return (
    <div>
      <Title level={2} className="heading capitalize">
        Global crypto stats
      </Title>
      {/* Charts and other components here */}
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalData.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalData.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={millify(globalData.totalMarketCap)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={millify(globalData?.total24hVolume)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalData?.totalMarkets)}
          />
        </Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies 🔝{" "}
        </Title>

        <Title level={3} className="show-more">
          <Link to="/crypto">Show More </Link>
        </Title>
      </div>
      <Crypto simplified />

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Latest Crypto News 📰{" "}
        </Title>

        <Title level={3} className="show-more">
          <Link to="/news">Show More </Link>
        </Title>
      </div>
      <News simplified />
    </div>
  );
};

export default HomePage;
