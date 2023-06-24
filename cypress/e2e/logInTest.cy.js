import { loginPage } from '../pages/logInPage'

let dataTest;

describe("Pruebas de login", () => {
    before("Obtener los datos para las pruebas", () => {
        //Obtener los datos para las pruebas
        cy.fixture('loginData.json').then((data) => {
            dataTest = data;
          });
    })

    beforeEach("Acceder al sitiio 'https://www.saucedemo.com/", () => {
        //Ingresar al sitio web
        cy.visit("https://www.saucedemo.com/")
    })

    it("Validar Login exitoso", () => {
        //Realizar login exitoso
        loginPage.logIn(dataTest.logInData.standard_user, dataTest.logInData.password)
        //Validar que al hacer loguin se muestre en pantalla la home page de la aplicación
        cy.url().should('include', '/inventory.html')
    })

    it("Validar error al ingresar un password incorrecto en el login", () => {
        //Realizar login ingresando un password incorrecto
        loginPage.logIn(dataTest.logInData.problem_user, dataTest.logInData.incorrect_password)
        //Validar mensaje de error que se muestra en pantalla
        cy.contains('Epic sadface: Username and password do not match any user in this service').should('not.be.visible')
    })
})