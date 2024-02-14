/// <reference types="Cypress" />

import { injectAxe } from "cypress-axe";

describe('Aprendendo cypress básico',() =>{
  it('Imagens possuem atributo alt', () => {
    cy.visit('https://www.w3schools.com/w3css/tryw3css_templates_gourmet_catering.htm');
    cy.get('img').then(image => {
      expect(image).have.attr('alt')
    })
  })
  
  it('Contem H1', ()=>{
    cy.visit('https://www.w3schools.com/w3css/tryw3css_templates_gourmet_catering.htm');
    cy.get('h1').should('be.visible');
  })
  
  it('Contem Main', ()=>{
    cy.visit('https://www.w3schools.com/w3css/tryw3css_templates_gourmet_catering.htm');
    cy.get('main').should('be.visible');
  })

  it('Validação total de acessibilidade', ()=>{
    cy.visit('https://www.w3schools.com/w3css/tryw3css_templates_gourmet_catering.htm');
    injectAxe();
    cy.checkA11y();
  })

  it('Validação total de acessibilidade', ()=>{
    cy.visit('https://www.w3schools.com/w3css/tryw3css_templates_gourmet_catering.htm');
    //cy.pageAccessibility();
    cy.componentAccessibility('h1');
  })
})