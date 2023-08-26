INSERT INTO departments (name)
VALUES ('HR'), ('Engineering'), ('Marketing');

INSERT INTO
    roles (title, salary, department_id)
VALUES ('HR Manager', 60000, 1), ('Software Engineer', 80000, 2), (
        'Marketing Specialist',
        55000,
        3
    );

INSERT INTO
    employees (
        first_name,
        last_name,
        role_id,
        manager_id
    )
VALUES ('Buffy', 'Summers', 2, NULL), ('Xander', 'Harris', 3, 1), ('Willow', 'Rosenburg', 1, NULL);