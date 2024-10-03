import { Avatar, Card, Col, Row, Select, Typography } from "antd";
import { useGetNewsQuery } from "../Services/CryptoNewsApi";
import Loader from "./Loader";
import moment from "moment";
import { useState } from "react";
import { useGetCryptoQuery } from "../Services/cryptoApi";

const { Title, Text } = Typography;
const { Option } = Select;

/*eslint-disable react/prop-types*/
const News = ({ simplified }) => {
  const [category, setCategory] = useState("Cryptocurrency");
  const count = simplified ? 6 : 30;
  const { data: cryptoNews, isFetching } = useGetNewsQuery({
    q: category,
    count,
  });
  const { data } = useGetCryptoQuery(100);

  
  if (!cryptoNews?.data || isFetching) return <Loader />;
  return (
    <>
      <Row>
        {!simplified && (
          <Select
            showSearch
            className="select-news mb-5 mx-auto w-full"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setCategory(value)}
            filterOption={(inputValue, option) =>
              option.children
                .toLowerCase()
                .indexOf(inputValue.toLowerCase() >= 0)
            }
          >
            <Option value="Cryptocurrency">Cryptocurrency</Option>
            {data?.data?.coins.map((crypto) => (
              <Option key={crypto.uuid} value={crypto.name}>
                {crypto.name}
              </Option>
            ))}
          </Select>
        )}
      </Row>
      <Row gutter={[24, 24]}>
        {cryptoNews?.data?.map((news, index) => (
          <Col key={index} xs={24} sm={12} lg={8}>
            <a href={news.link} target="_blank" rel="noopener noreferrer">
              <Card hoverable className="news-card">
                <div className="news-image-container">
                  {" "}
                  <Title className="news-title" level={4}>
                    {news.title}
                  </Title>
                  <img
                    crossOrigin="anonymous"
                    src={
                      news?.thumbnail_url ||
                      "https://cryptoadventure.com/wp-content/uploads/2024/06/unnamed-2024-04-11T214506.687.jpg"
                    }
                    className="w-28 h-28"
                  />
                </div>

                <Text>
                  {news.snippet > 100
                    ? `${news.snippet.substring(0, 100)}....`
                    : news.snippet}
                </Text>
                <div className="flex items-center justify-between mt-5">
                  <div className="flex items-center gap-3">
                    <Avatar
                      src={
                        news.source_favicon_url ||
                        "https://cryptoadventure.com/wp-content/uploads/2024/06/unnamed-2024-04-11T214506.687.jpg"
                      }
                    />
                    <Text className="font-semibold">{news.source_name}</Text>
                  </div>
                  <Text className="capitalize">
                    {moment(news.published_datetime_utc)
                      .startOf("ss")
                      .fromNow()}
                  </Text>
                </div>
              </Card>
            </a>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default News;
