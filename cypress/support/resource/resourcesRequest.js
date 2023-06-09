Cypress.Commands.add('getSingleResource', () => {
    return cy.request('https://reqres.in/api/unknown/2')
        .as('getSingleResourceResponse')
})

Cypress.Commands.add('getSingleResourceNotFound', () => {
    return cy.request('https://reqres.in/api/unknown/23')
        .as('getSingleResourceNotFoundResponse')
})

Cypress.Commands.add('getListResources', () => {
    return cy.request('https://reqres.in/api/unknown')
        .as('getListResourcesResponse')
})