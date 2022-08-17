/// <reference types="cypress" />

const HEADER = 'header';
const HEADER_H1 = `${HEADER} h1`;
const MAIN = 'main';
const CLASS_CARD_CONTAINER = '.card-container';

describe('Testando o Projeto Stack List', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
  });

  it('1 - verifica se há um <header /> e se há um título <h1 />', () => {
    cy.get(HEADER).should('exist');
    cy.get(HEADER_H1).should('exist');
  });

  it('2 - verifica se há um <main /> e se ele possui 9 elementos filhos', () => {
    cy.get(MAIN).should('exist');
    cy.get(MAIN).children().should('have.length', 9);
  });

  it('3 - verifica se há cards com a classe ".card-container" e se o elementos estão aprecendo corretamente', () => {
    cy.get(CLASS_CARD_CONTAINER).should('exist');
    cy.get('h3:contains(Redux)').should('exist');
    cy.get('h3:contains(Jest)').should('exist');
    cy.get('h3:contains(NodeJS)').should('exist');
    cy.get('h3:contains(ReactJS)').should('exist');
  });
});
