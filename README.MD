![License](https://img.shields.io/badge/License-MIT-blue.svg)

# Yash's Employee Tracker SQL

## Find em all! Locate all my employees!

Table of Contents
  
  * [Description](#description)
  * [Installation](#installation)
  * [How to use](#usage)
  * [Features](#features)
  * [License](#licenseSection)
  * [Github](#gitHub)
  * [Youtube Demo](#youtube)
  * [Contact](#Contact!)

### Description <a name="description"></a>  
  Yash's Employee Tracker  is a powerful app designed to streamline the process of locating and managing employee data within an organization. Whether you're a small business or a large corporation, keeping track of employee information can be a daunting task. With Employee Locator Plus, you can efficiently manage and access employee data anytime, anywhere.

### Installation

To set up your project, begin by installing Express.js within the main directory. Open your terminal and run the command "npm i express". Following this, install Inquirer by executing "npm i inquirer" in the terminal. Inquirer facilitates user interface interactions and inquiry session management. Next, install MySQL by running "npm i mysql" within the terminal. MySQL is a powerful database management system tailored for relational databases. Once done, install dependencies by executing "npm i" in the terminal. Ensure to source all database SQL files. Begin by logging into MySQL with the command "mysql -u root -p" in the terminal, using your MySQL root password when prompted. Finally, source the SQL files by running "source db/schema.sql;", "source db/seeds.sql;", and "source db/queries.sql;" within MySQL. Type "Quit;" to exit MySQL once completed.
  
### How to use <a name="usage"></a> 

To launch the Employee Locator application, initiate the terminal and execute the command "npm run start". Upon activation, a prompt will emerge presenting various options. Opting for "View All Departments" will showcase a well-organized table exhibiting department IDs and their respective names. Selecting "View All Roles" will unveil role IDs, titles, affiliated departments, and corresponding salaries. "View All Employees" will reveal employee IDs, first and last names, roles, departments, salaries, and their respective managers. Opting for "Add Department" triggers a prompt soliciting a department name, subsequently incorporating it into the database. Choosing "Add a Role" prompts for the name, salary, and department of the new role, which is then added to the database. "Add Employee" necessitates inputting the employee's first name, last name, role, and manager, thereafter adding the employee to the database. For "Update Employee Role," input the employee whose role requires updating along with the new role. The employee's role will be promptly updated in the database. Similarly, "Update Employee Manager" requires specifying the employee to update and assigning a new manager.


### Features <a name="features"></a>

* Centralized Employee Database: Employee Locator Plus serves as a centralized repository for all employee information including job roles, department, and more. This eliminates the need for scattered spreadsheets or paper files.
* Quick Search and Filters: Easily locate specific employees using the search functionality.
* Real-Time Updates: Keep employee records up-to-date with real-time updates.
* User-Friendly Interface: Designed with a clean and intuitive interface.




![Alt Text](./assets/Screenshot%202024-03-27%20171213.png)


  
#### Project License: MIT <a name="licenseSection"></a> 
https://opensource.org/licenses/MIT

### Github <a name="gitHub"></a>

https://github.com/yoboyyash/Yash-s-Employee-Tracker-SQL <br>
   
### Youtube <a name="youtube"></a>
Youtube demo for this project: 

https://youtube.com 

# Contact me! <a name="Contact!"></a> 

Yash Baviskar: yashrajbaviskar@gmail.com