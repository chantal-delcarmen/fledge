import { useState } from "react";
import './TaskFlipper.scss'
import { set } from "express/lib/application";

function TaskFlipper({ task }) {
    const [flipping, setFlipping] = useState(false);
    const triggerFlip = () => {
        setFlipping(true);

        // Animation play time
        setTimeout(() => setFlipping(false), 1000);
    }

    return (
        <div className={`task-flipper ${flipping ? ' flip' : ''}`} onClick={triggerFlip}>
            <div className="task-flipper__content">
                {task}
            </div>
        </div>
    );
}

export default TaskFlipper;