--Data Manipulation Queries
--Needed operations listed for each entity (users, tasks, categories)

---------------------------------Operations for users--------------------------------------

--Insert statement for new user 
INSERT INTO
    Users (FirstName, LastName, Phone, Email)
VALUES
    (
        ?firstName_from_UI,
        ?lastName_from_UI,
        ?phone_from_UI,
        ?email_from_UI
    );

--Insert statement to assign category selection for user
INSERT INTO
    Users_has_Categories (Users_idUsers,Categories_idCategories)
VALUES
    (
        ?user_id_from_UI,
        ?category_id_from_UI
    );

---------------------------------Operations for tasks--------------------------------------

--Insert statement for a new task with category
INSERT INTO
    Tasks (task, Categories_idCategories)
VALUES
    (
        ?task_from_UI,
        ?category_id_from_UI
    );

--Select statement to retrieve all tasks for given user

SELECT 
    Users_has_Tasks.Date, Tasks.task
FROM
    Users_has_Tasks
    INNER JOIN Tasks ON Tasks.idTasks = Users_has_Tasks.Tasks_idTasks
WHERE
    Users_has_Tasks.Users_idUsers = ?user_id_from_UI;


--Insert statement to add task to Users_has_tasks specific to user
INSERT INTO
    Users_has_Tasks (Date, Users_idUsers, Tasks_idTasks)
VALUES
    (
        ?date_from_UI,
        ?user_id_from_UI,
        ?task_id_from_UI
    );


---------------------------------Operations for categories--------------------------------------

INSERT INTO
    Categories (taskType)
VALUES
    (
        ?taskType_from_UI
    );

