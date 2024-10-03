import { Avatar,  Menu, Typography } from "antd";
import { Link, NavLink } from "react-router-dom";
import {
  BulbOutlined,
  FundOutlined,
  HomeOutlined,
  MenuOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  const menuItems = [
    {
      key: "home",

      label: (
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/"
        >
          <HomeOutlined style={{ fontSize: "22px", paddingRight: "15px" }} />
          Home
        </NavLink>
      ),
    },
    {
      key: "crypto",

      label: (
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/crypto"
        >
          <FundOutlined style={{ fontSize: "22px", paddingRight: "15px" }} />{" "}
          Cryptocurrencies
        </NavLink>
      ),
    },
    {
      key: "exchanges",

      label: (
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/exchanges"
        >
          <MoneyCollectOutlined
            style={{ fontSize: "22px", paddingRight: "15px" }}
          />{" "}
          Exchanges
        </NavLink>
      ),
    },
    {
      key: "news",

      label: (
        <NavLink
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          to="/news"
        >
          <BulbOutlined style={{ fontSize: "22px", paddingRight: "15px" }} />{" "}
          News
        </NavLink>
      ),
    },
  ];
  return (
    <div className="nav-container ">
      <div className="logo-container">
        <Avatar
          size="large"
          src="https://cdn-icons-png.flaticon.com/512/2272/2272825.png"
        />

        <div className="flex items-center justify-between w-full relative">
          <Typography.Title level={2} className="logo">
            <Link to="/">CryptoReact</Link>
          </Typography.Title>
          <button
            className="menu-control-container md:hidden bg-transparent border-none  hover:bg-transparent"
            onClick={() => setActiveMenu(!activeMenu)}
          >
            <MenuOutlined  className="text-3xl font-bold m-auto" />
          </button>
        </div>

      </div>
      {activeMenu && <Menu className="min-h-56 p-4 rounded-md bg-inherit" theme="#499ebc" items={menuItems} />}
    </div>
  );
};

export default Navbar;
