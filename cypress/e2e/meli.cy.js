describe("Prueba de API utilizando endpoint de Mercado Libre", () => {
    it("Verificar que el body response contenga un array con al menos un departamento", () => {
        //Hacer un GET request al endpoint de Mercado Libre
        cy.request('https://www.mercadolibre.com.ar/menu/departments')
            .then((response) => {
                //obtener el array de departamentos dentro del body response
                const departments = response.body.departments
                //Validar la existencia del array y que el mismo contenga al menos un depto.
                expect(departments).to.have.length.greaterThan(0);
            })
    })
})