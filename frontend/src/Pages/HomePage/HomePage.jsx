import Header from "../../Components/Header/Header";
import "./HomePage.scss";
import axios from "axios";

const HomePage = () => {

  const getUserTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/user-tasks/1');
      return response.data
    } catch (error) {
      console.log('error retrieving user tasks', error)
    }
  }

  getUserTasks();

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
      {response.data.map((task, index) => {
        <li className="homepage__item" key={index}>
          <p className="homepage__text">`${task}`</p>
        <div className="homepage__check"></div>
    </li>
      })}
      </ul>
    </section>
  );
};

export default HomePage;
