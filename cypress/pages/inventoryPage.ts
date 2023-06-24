class inventory {
    elements = {
        backPackAddToCartBtn: () => cy.get('#add-to-cart-sauce-labs-backpack'),
        cartIconBtn: () => cy.get('.shopping_cart_link')
    }

    addBackpackToCart () {
        this.elements.backPackAddToCartBtn().click()
    }

    goToCartPage () {
        this.elements.cartIconBtn().click()
    }
}

export const inventoryPage = new inventory();