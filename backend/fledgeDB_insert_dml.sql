--Data Manipulation Queries
--Needed operations listed for each entity (users, tasks, categories)

--------------------------------Populate the task table first-----------------------------
INSERT INTO Tasks (task, Categories_idCategories) VALUES
    ('Have you sorted out a family doctor?', 3),
    ('Stay active. Think about ways to incorporate activity into your week.', 3),
    ('When did you last get your eyes checked? Hopefully you can read this ;)', 3),
    ('It''s recommended to complete dental cleanings every 6 months.', 3),
    ('Are you flossing? Tell the truth.', 3),
    ('How is your car''s oil? Oil changes are important every 5000 kilometres.', 4),
    ('How are your tires looking?', 4),
    ('Are your tires appropriate? Winter, summer, all-season?', 4),
    ('A clean car is a clean mind.', 4),
    ('Do you have an emergency car kit? It''s no fun getting stuck.', 4),
    ('How are your student loans looking? Are your payment amounts reasonable?', 1),
    ('TFSA accounts are great!', 1),
    ('Retirement may be a while away, but it doesn''t hurt to get a head start. Opening an RRSP is a great first step.', 1),
    ('How''s your credit balance? Pay it off every month to keep your credit score healthy.', 1),
    ('Do you really use all your subscription services? If not, save more of your hard-earned money.', 1),
    ('When''s the last time you changed your furnace filter? Change it every 6 months for better efficiency.', 2),
    ('How''s your lint filter? Clear it out regularly to avoid catastrophic fire risk.', 2),
    ('Eavestroughs, gutters... Whatever you call them, it''s important to have them reasonably clear.', 2),
    ('Are your fire alarms all working?', 2),
    ('Carbon monoxide is called the silent killer. Do you have any detectors in place?', 2);


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

