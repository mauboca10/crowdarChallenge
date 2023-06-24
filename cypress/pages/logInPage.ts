class logIn {
    elements = {
        userName: () => cy.get('#user-name'),
        password: () => cy.get('#password'),
        loginBtn: () => cy.get('#login-button')
    }

    logIn (user, pass) {
        this.elements.userName().type(user)
        this.elements.password().type(pass)
        this.elements.loginBtn().click()
    }
}

export const loginPage = new logIn();