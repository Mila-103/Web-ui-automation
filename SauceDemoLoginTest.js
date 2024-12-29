const { Builder, By, key, until } = require('selenium-webdriver');
const assert = require('assert');

async function SauceDemoLoginTest(){
    // Membuat koneksi dengan Browser Driver
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        await driver.get("https://www.saucedemo.com");

        //Masukan Username dan password
        await driver.findElement(By.id('user name')).sendKeys('standard_user');
        await driver.findElement(By.xpath("//input[@id='password']")).sendKeys('secret_sauce');

        //Click Button Login
        await driver.findElement(By.xpath("//input[@id='login-button']")).click();

        //Memastikan kita di dashboard dengan mencari "Swag Labs"
        let titleText = await driver.findElement(By.xpath("//div[@class='app_logo']")).getText();
        assert.strictEqual(titleText.includes('Swag Labs'), true, "Title does include 'Swag Labs'");

        //Memastikan kita di dashboard dengan mencari "Burger Button"
        let menuButton = await driver.findElement(By.xpath("//button[@id='react-burger-menu-btn']"));
        assert.strictEqual(await menuButton.isDisplayed(), true,"Menu Button is not visible");

        //Add item to chart
        let addToCartButton = await driver.findElement(By.xpath("//cart-confirmation"));

        //Validate item sukses ditambahkan ke chart
        const validationMessage = await validateItem(chart);
        console.log(validationMessage)
        // validasi sukses, ditambahkan ke item chart
        chart.push(item);
        console.log("item berhasil ditambahkan ke chart:", item); 
     catch (error) {
        //tampilkan pesan error jika validasi gagal
        console.error("gagal menambahkan item je chart:", error);
     }

    } finally {
        await driver.quit();

    }
}

SauceDemoLoginTest();