package com.icbt.LabAppointment;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class LabAppointmentApplication {

	public static void main(String[] args) {

		SpringApplication.run(LabAppointmentApplication.class, args);
		// Set the path to the ChromeDriver executable
		System.setProperty("webdriver.chrome.driver", "lib/chromedriver.exe");
		// Create a new instance of the ChromeDriver
		WebDriver driver = new ChromeDriver();
		// Navigate to a website
		driver.get("http://localhost:3000/patient");
		// Perform some actions
		System.out.println("page navigation: "+ driver.navigate());
		System.out.println("page title:" + driver.getTitle());
		System.out.println("page url:" + driver.getCurrentUrl());


		// Fill in the fields
		WebElement nicField = driver.findElement(By.id("nic"));
		nicField.sendKeys("987456321V");

		WebElement patientnameField = driver.findElement(By.id("patientname"));
		patientnameField.sendKeys("John Doe");

		WebElement patientaddressField = driver.findElement(By.id("patientaddress"));
		patientaddressField.sendKeys("kuruduwatta, ambalngoda");

		WebElement emailField = driver.findElement(By.id("email"));
		emailField.sendKeys("john@gmail.com");

		WebElement mobileField = driver.findElement(By.id("mobile"));
		mobileField.sendKeys("0770041945");

		WebElement doctorDropdown = driver.findElement(By.id("doctorname"));
		Select doctorSelect = new Select(doctorDropdown);
		doctorSelect.selectByVisibleText("Roy Perera");


		// Submit the form
		WebElement element = driver.findElement(By.id("registration"));
		Actions actions = new Actions(driver);
		actions.moveToElement(element).click().perform();


		// Wait for some time to allow the data to be saved in the database (you might need to implement a more robust waiting strategy)
		try {
			Thread.sleep(5000); // Wait for 5 seconds
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

		// Close the browser
		driver.quit();

	}
}
