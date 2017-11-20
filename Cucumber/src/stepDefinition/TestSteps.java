package stepDefinition;
import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.firefox.FirefoxDriver;

import ExcelPackage.ExcelReader;
import Utility.UtilityFunctions;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
public class TestSteps extends UtilityFunctions {

@Given("^user opens the URL$")
public void user_opens_the_URL() throws Throwable {
	
	System.setProperty("webdriver.gecko.driver", "C:\\Users\\rakesh150790\\Desktop\\Selenium Jar\\geckodriver.exe");
	OR = new Properties();
	File file = new File("C:\\Users\\rakesh150790\\workspace\\Cucumber\\src\\Properties\\ObjectRepository.properties");
	FileInputStream fis = new FileInputStream(file);
	OR.load(fis);
	driver = new FirefoxDriver();
	driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	logs.debug("Initializing the Test");
	driver.get(OR.getProperty("TestURL"));
	
}

@When("^user provides login and password$")
public void user_provides_Login_and_password() throws Throwable {
	logs.debug("Login into Actitime Application");
getID("Login_id").sendKeys(ExcelReader.getExcelData("Sheet1", 0, 1));
getName("Password_name").sendKeys(ExcelReader.getExcelData("Sheet1", 1, 1));
 }

@Then("^user clicks submit button$")
public void user_clicks_submit_button() throws Throwable {
getXpath("submit_xpath").click();
logs.debug("Login Successfull");
  
}

@Then("^user is able to see the homescreen$")
public void user_is_able_to_see_the_homescreen() throws Throwable {
String Expected = "Enter Time-Track";
String Actual = getXpath("actual_xpath").getText();
System.out.println(Actual);
UtilityFunctions.getScreenshot();
Thread.sleep(5000);
if(Actual.equals(Expected))
{
	System.out.println("Welcome to the Home Page");
}

else {
	System.out.println("Not able to see Home page");
}
  
}

@Given("^admin will login into portal$")
public void admin_will_login_into_portal() throws Throwable {
   
}
@When("^admin click on users$")
public void admin_click_on_users() throws Throwable {
getXpath("clickonuser_xpath").click();
	
}


@Then("^user click on create new user$")
public void user_click_on_create_new_user() throws Throwable {
getClassName("clickoncreatenew_classname").click();
getXpath("createnewuser_xpath").click();
driver.manage().window().maximize();
Thread.sleep(5000);
 
   }

@Then("^user enters required data$")
public void user_enters_required_data() throws Throwable {
getID("dataname_id").sendKeys("vin");
getID("datalastname_id").sendKeys("Reddy");
getID("usersemail_id").sendKeys("vemro@gmail.com");
}

@Then("^select the Enter time$")
public void select_the_Enter_time() throws Throwable {
getClassName("userstimepermission_className").click();
	
   
}

@Then("^admin Clicks on save$")
public void admin_Clicks_on_save() throws Throwable {
getXpath("clickonsave_xpath").click();
Thread.sleep(5000);
}

@Then("^admin Clicks on close$")
public void admin_Clicks_on_close() throws Throwable {
getXpath("clickonclose_xpath").click();

	
}

@Then("^new user created should be in the list$")
public void new_user_created_should_be_in_the_list() throws Throwable {
String st = getClassName("newusercreated_className").getText();
	System.out.println(st);
	System.out.println("New User has been created");
    Thread.sleep(5000);
   
}


@Then("^Click on Task$")
public void Click_on_Task() throws Throwable {
	getXpath("clickonTask_xpath").click();
    
    }


@Then("^Select Create New Customer$")
public void Select_Create_New_Customer() throws Throwable {
getXpath("selectnewcust_xpath").click();
getXpath("createnewcust_xpath").click();
}

@Then("^Enter Valid Data and click Create Customer$")
public void Enter_Valid_Data_and_click_Create_Customer() throws Throwable {
getID("validdataname_id").sendKeys("rakh");
getID("validdatadesc_id").sendKeys("ibmer");
getXpath("click_xpath").click();
	
	
   
}

@Then("^Created Customer should be listed in the project & customer page.$")
public void Created_Customer_should_be_listed_in_the_project_customer_page() throws Throwable {
String name = getXpath("customerlist_xpath").getText();
System.out.println(name);
    
			

}


@Given("^Click on Add new task$")
public void Click_on_Add_new_task() throws Throwable {
getXpath("AddNewTask_xpath").click();
Thread.sleep(5000);
    
    
}

@Then("^Create New tasks$")
public void Create_New_tasks() throws Throwable {
getXpath("createnewTask_xpath").click();
    
   }

@Then("^Enter Valid Data and click Create task.$")
public void Enter_Valid_Data_and_click_Create_task() throws Throwable {

getID("validdata_id").click();
Thread.sleep(5000);
getID("validdatatask_id").click();
getID("validdatatasknewproj_id").sendKeys("bvoip");
getXpath("validdatatasktable_xpath").sendKeys("billing");
getClassName("validdatataskTitle_className").click();

}
	
@Then("^Click on Open task$")
public void Click_on_Open_task() throws Throwable {
getXpath("opentask_xpath").click();
  
}

@Then("^Created task should be listed in open task page.$")
public void Created_task_should_be_listed_in_open_task_page() throws Throwable {
String x = getXpath("createdtask_xpath").getText();
System.out.println(x);
  
    
}
}









