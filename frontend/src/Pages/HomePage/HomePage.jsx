import { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import "./HomePage.scss";
import axios from "axios";

const HomePage = () => {
  const [tasks, setTasks] = useState([]); // State to store tasks

  const getUserTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/user-tasks/1');
      console.log(response.data)
      setTasks(response.data);  // Update tasks state with fetched data
    } catch (error) {
      console.log('Error retrieving user tasks', error);
    }
  };

  useEffect(() => {
    getUserTasks(); // Call the function to fetch tasks on component mount
  }, []); // Empty dependency array to run once when the component mounts

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
        {tasks.map((task, index) => (
          <li className="homepage__item" key={index}>
            <p className="homepage__text">{task.task}</p>  {/* Render task */}
            <div className="homepage__check"></div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomePage;
