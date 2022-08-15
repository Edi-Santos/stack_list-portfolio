/// <reference types="cypress" />

const HEADER = 'header';
const HEADER_H1 = `${HEADER} h1`;

describe('Testando o Projeto Stack List', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  });

  it('1 - verifica se há um <header /> e se há um título <h1 />', () => {
    cy.get(HEADER).should('exist');
    cy.get(HEADER_H1).should('exist');
  });
});
