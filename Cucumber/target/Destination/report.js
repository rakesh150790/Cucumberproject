$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test.feature");
formatter.feature({
  "line": 1,
  "name": "My First Feature",
  "description": "",
  "id": "my-first-feature",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "My Login",
  "description": "",
  "id": "my-first-feature;my-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user opens the URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user provides login and password",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "user is able to see the homescreen",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.user_opens_the_URL()"
});
formatter.result({
  "duration": 7632007721,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_provides_Login_and_password()"
});
formatter.result({
  "duration": 778757727,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_clicks_submit_button()"
});
formatter.result({
  "duration": 1572815428,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_is_able_to_see_the_homescreen()"
});
formatter.result({
  "duration": 5194648464,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Create user",
  "description": "",
  "id": "my-first-feature;create-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "admin will login into portal",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "admin click on users",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user click on create new user",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "user enters required data",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "select the Enter time",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "admin Clicks on save",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "admin Clicks on close",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "new user created should be in the list",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.admin_will_login_into_portal()"
});
formatter.result({
  "duration": 85711,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.admin_click_on_users()"
});
formatter.result({
  "duration": 2327171583,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_click_on_create_new_user()"
});
formatter.result({
  "duration": 5672383248,
  "status": "passed"
});
formatter.match({
  "location": "TestSteps.user_enters_required_data()"
});
formatter.result({
  "duration": 79608116,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: Element is not visible\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DESKTOP-EO0C5G5\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\RAKESH~1\\AppData\\Local\\Temp\\rust_mozprofile.FndaBLpn1yZZ, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, platform\u003dANY, specificationLevel\u003d0.0, moz:accessibilityChecks\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d55.0.1, platformVersion\u003d10.0, moz:processID\u003d2040.0, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dwindows_nt}]\nSession ID: 60e2821c-2c2f-47cb-9fd5-f64d19cd620e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:96)\r\n\tat stepDefinition.TestSteps.user_enters_required_data(TestSteps.java:84)\r\n\tat ✽.Then user enters required data(Test.feature:14)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TestSteps.select_the_Enter_time()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestSteps.admin_Clicks_on_save()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestSteps.admin_Clicks_on_close()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestSteps.new_user_created_should_be_in_the_list()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "Create Customer",
  "description": "",
  "id": "my-first-feature;create-customer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "Click on Task",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "Select Create New Customer",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "Enter Valid Data and click Create Customer",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "Created Customer should be listed in the project \u0026 customer page.",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.Click_on_Task()"
});
formatter.result({
  "duration": 414050405,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DESKTOP-EO0C5G5\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\RAKESH~1\\AppData\\Local\\Temp\\rust_mozprofile.FndaBLpn1yZZ, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, platform\u003dANY, specificationLevel\u003d0.0, moz:accessibilityChecks\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d55.0.1, platformVersion\u003d10.0, moz:processID\u003d2040.0, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dwindows_nt}]\nSession ID: 60e2821c-2c2f-47cb-9fd5-f64d19cd620e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:272)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:82)\r\n\tat stepDefinition.TestSteps.Click_on_Task(TestSteps.java:121)\r\n\tat ✽.Given Click on Task(Test.feature:22)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TestSteps.Select_Create_New_Customer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestSteps.Enter_Valid_Data_and_click_Create_Customer()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestSteps.Created_Customer_should_be_listed_in_the_project_customer_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "Create Task",
  "description": "",
  "id": "my-first-feature;create-task",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "Click on Task",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "Click on Add new task",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "Create New tasks",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "Enter Valid Data and click Create task.",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Click on Open task",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "Created task should be listed in open task page.",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSteps.Click_on_Task()"
});
formatter.result({
  "duration": 6580865,
  "error_message": "org.openqa.selenium.SessionNotCreatedException: Tried to run command without establishing a connection\nBuild info: version: \u0027unknown\u0027, revision: \u0027unknown\u0027, time: \u0027unknown\u0027\nSystem info: host: \u0027DESKTOP-EO0C5G5\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_131\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{moz:profile\u003dC:\\Users\\RAKESH~1\\AppData\\Local\\Temp\\rust_mozprofile.FndaBLpn1yZZ, rotatable\u003dfalse, timeouts\u003d{implicit\u003d0.0, pageLoad\u003d300000.0, script\u003d30000.0}, pageLoadStrategy\u003dnormal, platform\u003dANY, specificationLevel\u003d0.0, moz:accessibilityChecks\u003dfalse, acceptInsecureCerts\u003dfalse, browserVersion\u003d55.0.1, platformVersion\u003d10.0, moz:processID\u003d2040.0, browserName\u003dfirefox, javascriptEnabled\u003dtrue, platformName\u003dwindows_nt}]\nSession ID: 60e2821c-2c2f-47cb-9fd5-f64d19cd620e\n*** Element info: {Using\u003dxpath, value\u003d//*[@id\u003d\u0027topnav\u0027]/tbody/tr/td[3]/a/div[2]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:150)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:115)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:45)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:82)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:637)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:410)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:509)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:402)\r\n\tat Utility.UtilityFunctions.getXpath(UtilityFunctions.java:29)\r\n\tat stepDefinition.TestSteps.Click_on_Task(TestSteps.java:121)\r\n\tat ✽.Given Click on Task(Test.feature:29)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TestSteps.Click_on_Add_new_task()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestSteps.Create_New_tasks()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestSteps.Enter_Valid_Data_and_click_Create_task()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestSteps.Click_on_Open_task()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TestSteps.Created_task_should_be_listed_in_open_task_page()"
});
formatter.result({
  "status": "skipped"
});
});