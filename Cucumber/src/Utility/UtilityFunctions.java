package Utility;

import java.io.File;
import java.io.IOException;
import java.util.Properties;

import org.apache.commons.io.FileUtils;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class UtilityFunctions {
	public static WebDriver driver;
	public static Properties OR;
	public static Logger logs = Logger.getLogger("message");
	
	public static void getScreenshot() throws IOException
	{
	TakesScreenshot ts =((TakesScreenshot)driver);
	File SrcFile=ts.getScreenshotAs(OutputType.FILE);
	FileUtils.copyFile(SrcFile, new File("C:\\Users\\rakesh150790\\screenshot.jpg"));
	}
		
	public static WebElement getXpath(String key)
	{
	return driver.findElement(By.xpath(OR.getProperty(key)));
		
	}
	
	public static WebElement getID(String key)
	{
	return driver.findElement(By.id(OR.getProperty(key)));
		
	}
	
	public static WebElement getName(String key)
	{
	return driver.findElement(By.name(OR.getProperty(key)));
		
	}
	
	public static WebElement getClassName(String key)
	{
	return driver.findElement(By.className(OR.getProperty(key)));
		
	}
	
	
	
	
	
	
}
