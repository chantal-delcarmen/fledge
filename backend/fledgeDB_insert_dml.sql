--Data Manipulation Queries
--Needed operations listed for each entity (users, tasks, categories)
--Sample insert statements to populate database to observe functionality

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

--------------------------------Populate the users table ----------------------------------
INSERT INTO Users (FirstName, LastName, Phone, Email) VALUES
    ('Emily', 'Johnson', '5871234567', 'emily.johnson@example.com'),
    ('Michael', 'Smith', '4039876543', 'michael.smith@example.com'),
    ('Sophia', 'Martinez', '7805432109', 'sophia.martinez@example.com'),
    ('Liam', 'Anderson', '8256784321', 'liam.anderson@example.com'),
    ('Olivia', 'Brown', '2508765432', 'olivia.brown@example.com');

-------------------------------Populate categories table------------------------------------
INSERT INTO Categories (taskType) VALUES
    ('Finance'),
    ('Home'),
    ('Health'),
    ('Auto'),
    ('Careers'),
    ('Self-care');

--------------------------------Assign fledges to populate table----------------------------
INSERT INTO Users_has_Tasks (Date, Users_idUsers, Tasks_idTasks) VALUES
    -- Assign tasks to User 1 (Emily Johnson)
    ('2024-12-15', 1, 3),
    ('2024-12-22', 1, 7),
    ('2025-01-05', 1, 12),
    ('2025-01-18', 1, 18),

    -- Assign tasks to User 2 (Michael Smith)
    ('2024-12-10', 2, 2),
    ('2025-01-02', 2, 9),
    ('2025-01-25', 2, 15),
    ('2025-02-08', 2, 20),

    -- Assign tasks to User 3 (Sophia Martinez)
    ('2024-11-30', 3, 5),
    ('2024-12-18', 3, 10),
    ('2025-01-08', 3, 14),
    ('2025-02-05', 3, 19),

    -- Assign tasks to User 4 (Liam Anderson)
    ('2024-12-01', 4, 1),
    ('2024-12-20', 4, 8),
    ('2025-01-10', 4, 13),
    ('2025-02-02', 4, 17),

    -- Assign tasks to User 5 (Olivia Brown)
    ('2024-11-25', 5, 4),
    ('2024-12-12', 5, 6),
    ('2025-01-15', 5, 11),
    ('2025-02-07', 5, 16);
