Cypress.Commands.add('loginSuccessful', () => {
    cy.fixture('registerSuccessfulFixture').then(userFixture => {
        return cy.request('POST','https://reqres.in/api/login', userFixture)
            .as('loginSuccessfulResponse')
    })
})

Cypress.Commands.add('loginUnsuccessful', () => {
    cy.fixture('registerUnsuccessfulFixture').then(userFixture => {
        return cy.request('POST','https://reqres.in/api/login', userFixture)
            .as('loginUnsuccessfulResponse')
    })
})