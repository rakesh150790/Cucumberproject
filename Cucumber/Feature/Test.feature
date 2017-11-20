Feature: My First Feature

Scenario: My Login
Given user opens the URL
When user provides login and password
Then user clicks submit button
Then user is able to see the homescreen


Scenario: Create user
Given admin will login into portal
When admin click on users
Then user click on create new user
Then user enters required data
Then select the Enter time
Then admin Clicks on save
Then admin Clicks on close
Then new user created should be in the list


Scenario: Create Customer
Given Click on Task
Then Select Create New Customer
Then Enter Valid Data and click Create Customer
Then Created Customer should be listed in the project & customer page.


Scenario: Create Task
Given Click on Task
Then Click on Add new task
Then Create New tasks
Then Enter Valid Data and click Create task.
Then Click on Open task
Then Created task should be listed in open task page.









