package ExcelPackage;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

public class ExcelReader {
	
	public static String getExcelData(String sheetName,int rowNum, int colNum) throws IOException 
	{
	
		FileInputStream fis = new FileInputStream(new File("C:\\Users\\rakesh150790\\Desktop\\TestData.xlsx"));
		Workbook wb = new XSSFWorkbook(fis);
		Sheet sh = wb.getSheet(sheetName);
		Row rw = sh.getRow(rowNum);
		Cell cl = rw.getCell(colNum);
		String st =cl.getStringCellValue();
		return st;
	
		
	}
	

}
