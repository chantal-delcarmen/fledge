import Header from "../../Components/Header/Header";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <section className="homepage">
      <Header />
      <div className="homepage__information">
        <h1 className="homepage__title">Your Fledges</h1>
        <h2 className="homepage__subtitle">
          Christopher, here are this month's fledges:
        </h2>
      </div>
      <ul className="homepage__list">
        <li className="homepage__item">
            <p className="homepage__text">How's the furnace filter?</p>
            <div className="homepage__check"></div>
        </li>
        <li className="homepage__item">
            <p className="homepage__text">Regularly check your drying machine lint filter</p>
            <div className="homepage__check"></div>
        </li>
        <li className="homepage__item">
            <p className="homepage__text">Does your vehicle need an oil change?</p>
            <div className="homepage__check"></div>
        </li>
        <li className="homepage__item">
            <p className="homepage__text">Open a TFSA (tax free savings account)</p>
            <div className="homepage__check"></div>
        </li>
        <li className="homepage__item">
            <p className="homepage__text">How's the furnace filter?</p>
            <div className="homepage__check"></div>
        </li>
      </ul>
    </section>
  );
};

export default HomePage;
