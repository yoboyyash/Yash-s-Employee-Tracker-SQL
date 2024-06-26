INSERT INTO departments (department_name)
VALUES 
('Owner'),
('Management'),
('Player'),
('Coaching'),
('Security'),
('Research and Development'),
('Advertisement'),
('Sales'),
('Merchandise'),
('Maintenance');

INSERT INTO roles (title, salary, department_id)
VALUES 
('Chief Executive Officer', 1000000.00, 1),
('General Manager', 160000.00, 2),
('Batter', 600000.00, 3),
('Head Coach', 80000.00, 4),
('Head Security', 60000.00, 5),
('Nerd', 5000.00, 6),
('Person', 75000.00, 7),
('Ticket Vendor', 66000.00, 8),
('Store Front', 52000.00, 9),
('Grounds Keeper', 95000.00, 10);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Yash', 'Baviskar', 1, 1),
('Dusty', 'Baker', 2, 2),
('Jose', 'Altuve', 3, 3),
('Justin', 'Verlander', 4, 4),
('Craig', 'Biggio', 5, 5),
('Clayton', 'Kershaw', 6, 6),
('Mike', 'Tyson', 7, 7),
('Jonah', 'Hill', 8, 8),
('Brad', 'Pitt', 9, 9),
('Gandalf', 'Mithrandir', 10, 10);