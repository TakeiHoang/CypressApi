Cypress.Commands.add('registerSuccessful', () => {
    cy.fixture('registerSuccessfulFixture').then(userFixture => {
        return cy.request('POST','https://reqres.in/api/register', userFixture)
            .as('registerSuccessfulResponse')
    })
})

Cypress.Commands.add('registerUnsuccessful', () => {
    cy.fixture('registerUnsuccessfulFixture').then(userFixture => {
        return cy.request('POST','https://reqres.in/api/register', userFixture)
            .as('registerUnsuccessfulResponse')
    })
})