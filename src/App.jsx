import { Layout, Space, Typography } from "antd";
import {
  Crypto,
  CryptoDetails,
  Exchanges,
  HomePage,
  Navbar,
  News,
} from "./components";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="main">
        <Layout className="min-h-[100dvh]">
          <div className="routes">
            <Routes>
              <Route index path="/" element={<HomePage />} />

              <Route path="/crypto" element={<Crypto />} />

              <Route path="/crypto/:cryptoId" element={<CryptoDetails />} />

              <Route path="/exchanges" element={<Exchanges />} />

              <Route path="/news" element={<News />} />

              <Route path="*" element={<div>Page not found 😢 </div>} />
            </Routes>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title
            level={4}
            style={{ color: "white", textAlign: "center" }}
          >
            CryptoReact © 2024
          </Typography.Title>

          <Space style={{ color: "white", textAlign: "center" }}>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchanges</Link>
            <Link to="/news">News</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
