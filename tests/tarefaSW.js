const {Builder, By, Key} = require ("selenium-webdriver")
const assert = require ("assert")
const should = require ("chai").should()

async function tarefas(){

    //Abrir o navegador
    let driver = await new Builder().forBrowser("firefox").build();

    //navegar ate o site
    await driver.get("https://herziopinto.github.io/lista-de-tarefas/")

    //Pausar a aplicacao em 5 segundos
    await driver.sleep(1000)

    //criar uma lista 10 itens (rotina)
    let item = ["Arrumar a cama", "escovar os dentes", "Tomar banho", "Tomar o cafe da manha", "Ir para a faculdade", "Estudar as materias", "Voltar pra casa", "Almocar", "Estudar Ingles", "Estudar Selenium"]

    //Item 1
    await driver.findElement(By.id("inputTask")).sendKeys(item[0], Key.RETURN)
    //Item 2
    await driver.findElement(By.id("inputTask")).sendKeys(item[1], Key.RETURN)
    //Item 3
    await driver.findElement(By.id("inputTask")).sendKeys(item[2], Key.RETURN)
    //Item 4
    await driver.findElement(By.id("inputTask")).sendKeys(item[3], Key.RETURN)
     //Item 5
    await driver.findElement(By.id("inputTask")).sendKeys(item[4], Key.RETURN)
     //Item 6
    await driver.findElement(By.id("inputTask")).sendKeys(item[5], Key.RETURN)
     //Item 7
    await driver.findElement(By.id("inputTask")).sendKeys(item[6], Key.RETURN)
    //Item 8
    await driver.findElement(By.id("inputTask")).sendKeys(item[7], Key.RETURN)
    //Item 9
    await driver.findElement(By.id("inputTask")).sendKeys(item[8], Key.RETURN)
    //Item 10
    await driver.findElement(By.id("inputTask")).sendKeys(item[9], Key.RETURN)

    seleniumText = item
    for(i = 0; i < 10; i++);
    seleniumText[i] = await driver.findElement(By.id("/html/body/div/section/li/label")).getText().then(function(value){ 
        return value
    })

        
        // 3) Assertion usando chai para as tarefas
        seleniumText[i].should.equal(item[i])
    
    }
        
    //Fechar o navegador
    await driver.quit()
    
tarefas()