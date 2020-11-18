///  <reference types="cypress" />

describe('Landing', () => {
    it('Visit Home Page', () => {
        cy.visit('https://stockbit-challenge.vercel.app/home')
    })
})

describe('Input', () => {
    it('Typing on Input', () => {
        cy.get('input').type('Batman Be')
        cy.get('ul').children('.react-search-box-dropdown-list-item').click()
    })
})

describe('Handle Search', () => {
    it('Return Result', () => {
        cy.contains('Search').click()
        cy.get('div').find("img")
        cy.get("img")
            .get('img[id="imageCover"]')
            .first()
            .click()
        cy.contains('Tap Everywhere For Close').click({ force: true })
        cy.get("img")
            .get('button')
            .contains('Detail')
            .click()
    })
})