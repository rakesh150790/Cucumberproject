package stepDefinition;

import java.io.File;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class TestSteps2 {
	
	public static void main(String [] args) throws IOException, InterruptedException
	{
		System.setProperty("webdriver.gecko.driver", "C:\\Users\\rakesh150790\\Desktop\\Selenium Jar\\geckodriver.exe");
		WebDriver driver = new FirefoxDriver();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.get("https://online.actitime.com/ibm12/login.do;jsessionid=4D0B1779E4C971880D9EF76881C67BAE");
		 driver.findElement(By.id("username")).sendKeys("rakeshreddyiit");
		    driver.findElement(By.name("pwd")).sendKeys("vYmYsEru");
		    driver.findElement(By.xpath("//*[@id='loginButton']/div")).click();
		    String Expected = "Enter Time-Track";
		    String Actual = driver.findElement(By.xpath("//*[@id='enterTTMainContent']/table[1]/tbody/tr[1]/td[1]/div/table/tbody/tr/td[1]")).getText();
		    TakesScreenshot ts =((TakesScreenshot)driver);
		    File SrcFile=ts.getScreenshotAs(OutputType.FILE);
		    FileUtils.copyFile(SrcFile, new File("C:\\Users\\rakesh150790\\screenshot.jpg"));
		    System.out.println(Actual);
		    if(Actual.equals(Expected))
		    {
		    	System.out.println("Welcome to the Home Page");
		    }
		    Thread.sleep(4000);
		    driver.findElement(By.xpath("//*[@id='topnav']/tbody/tr[1]/td[5]/a/div[1]")).click();
		    System.out.println("New User");
		    driver.findElement(By.className("buttonText")).click();
		    driver.findElement(By.xpath("//*[@id='usersManagementBodyTagId']/div[11]/div[2]/div[1]/div")).click();
		    driver.findElement(By.name("firstName")).sendKeys("vYmYsEru");
		    driver.findElement(By.name("lastName")).sendKeys("vYmYgsEru");
		    driver.findElement(By.id("userDataLightBox_emailField")).sendKeys("vYmYgsEru@gmail.com");
		    driver.findElement(By.xpath("//*[@id='userDataLightBox_commitBtn']/div/span")).click();
		    Thread.sleep(5000);
		    driver.findElement(By.xpath("//div[@class='closeLink']/span")).click();
		 
		    
		    
		
	}

}
