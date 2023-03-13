import "./Sidebar.scss";
import Sprite from "../Sprite/Sprite";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  let navigate = useNavigate();
  const routeHandler = (URL: any) => {
    navigate(URL);
  };

  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-content">
        <div className="logo">
          <Sprite id="logo" />
          <h1 className="logo-title">Teach2U</h1>
        </div>
        <div className="menu">
          <h1 className="menu-title">Главное Меню</h1>
          <div className="navigation">
            <div
              onClick={() => routeHandler("/")}
              className={
                window.location.pathname === "/"
                  ? `navigation-item active`
                  : `navigation-item`
              }
            >
              <Sprite id="mainpage" />
              <h1>Главная</h1>
            </div>
            <div
              onClick={() => routeHandler("/learn")}
              className={
                window.location.pathname === "/learn"
                  ? `navigation-item active`
                  : `navigation-item`
              }
            >
              <Sprite id="learn" />
              <h1>Начать обучение</h1>
            </div>
            <div
              onClick={() => routeHandler("/teach")}
              className={
                window.location.pathname === "/teach"
                  ? `navigation-item active`
                  : `navigation-item`
              }
            >
              <Sprite id="teach" />
              <h1>Начать преподовать</h1>
            </div>
            <div
              onClick={() => routeHandler("/register")}
              className={
                window.location.pathname === "/register"
                  ? `navigation-item active`
                  : `navigation-item`
              }
            >
              <Sprite id="register" />
              <h1>Регистрация</h1>
            </div>
            <div
              onClick={() => routeHandler("/profile")}
              className={
                window.location.pathname === "/profile"
                  ? `navigation-item active`
                  : `navigation-item`
              }
            >
              <Sprite id="profile" />
              <h1>Профиль</h1>
            </div>
          </div>
        </div>
        <div className="settings">
          <h1 className="settings-title">Настройки</h1>
          <div className="navigation">
            <div className="navigation-item">
              <Sprite id="wallet" />
              <h1>Кошелек</h1>
            </div>
            <div className="navigation-item">
              <Sprite id="tech-support" />
              <h1>Тех. поддержка</h1>
            </div>
            <div className="navigation-item">
              <Sprite id="faq" />
              <h1>FAQ</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
