import { loginPage } from "../pages/logInPage";
import { inventoryPage } from "../pages/inventoryPage"

let dataTest;

describe("Prueba de carrito de compras", () => {
    before("Obtener los datos para las pruebas", () => {
        //Obtener los datos para las pruebas 
        cy.fixture('loginData.json').then((data) => {
            dataTest = data;
          });
    })

    it("Validar correcta sumatoria al agregar un producto al carrito", () => {
        //Ingresar al sitio web
        cy.visit("https://www.saucedemo.com/")
        //Realizar login exitoso
        loginPage.logIn(dataTest.logInData.standard_user, dataTest.logInData.password)
        //Agregar un producto al carrito
        inventoryPage.addBackpackToCart()
        //Validar que el ícono del carrito muestre un "1" indicando la cantidad de productos agregados
        inventoryPage.elements.cartIconBtn().invoke('text').then((text) => {
            const number = parseInt(text)
            expect(number).to.equal(1);
        })
    })
})