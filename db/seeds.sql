INSERT INTO departments (name)
VALUES ('DEFENSE'), ('SCOOBY GANG'), ('VILLAINS');

INSERT INTO
    roles (title, salary, department_id)
VALUES ('Vampier Slayer', 60000, 1), ('Comic Relief', 80000, 2), ('Witch', 55000, 3);

INSERT INTO
    employees (
        first_name,
        last_name,
        role_id,
        manager_id
    )
VALUES ('Buffy', 'Summers', 2, NULL), ('Xander', 'Harris', 3, 1), ('Willow', 'Rosenberg', 1, NULL);