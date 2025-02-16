import { useState } from "react";
import TaskFlipper from "../../Components/TaskFlipper/TaskFlipper";
import GenerateButton from "../../Components/Button/GenerateButton";
// import './DoMore.scss'

function DoMorePage() {
    const task = [
        'Have you set up a TFSA (tax free savings account)?',
        'Schedule a doctor’s appointment.',
        'Review your monthly expenses.',
        'Organize your workspace.',
        'Meal prep for the week.'
    ];

    const [currentTask, setCurrentTask] = useState(task[0]);

    const getRandomTask = () => {
        const randomTask = task[Math.floor(Math.random() * task.length)];
        setCurrentTask(randomTask);
    }

    return(
        <div className="do-more-page">
            <h2>Do More</h2>
            <p>Generate more fledges to do today:</p>
            <TaskFlipper task={currentTask} />
            <GenerateButton onClick={getRandomTask} />
        </div>
    );
}

export default DoMorePage;
