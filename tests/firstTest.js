const {Builder, By, Key} = require ("selenium-webdriver")
const assert = require ("assert")
const should = require ("chai").should()

async function example(){

    //Abrir o navegador
    let driver = await new Builder().forBrowser("firefox").build()
    
    //Navegar ate o site
    await driver.get("https://herziopinto.github.io/lista-de-tarefas/")

    //Dar uma pausa na execucao da funcao
    await driver.sleep(1000)
    
    //Digitar a nova tarefa e enter

    let itens = ("Aprender automacao com selenium")

    //Item 1
    await driver.findElement(By.id("inputTask")).sendKeys(itens[0], Key.RETURN)

    //Assertion
    let seleniumText = await driver.findElement(By.xpath("/html/body/div/section/ul/li/label")).getText().then(function(value){
        return value
    })  

    //Assertion usando o node puro
    assert.strictEqual(seleniumText, ("Aprender automacao com selenium"))

    //Assertion usando Chai
    seleniumText.should.equal("Aprender automacao com selenium")

    //Fechar o navegador
     await driver.quit()
}

example() 