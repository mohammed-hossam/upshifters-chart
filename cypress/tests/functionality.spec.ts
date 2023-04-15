describe("functionality", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  context("desktop resolution", () => {
    before(() => {
      cy.viewport(1025, 900);
    });

    it("select category", () => {
      cy.contains("Brand Performance");
      cy.get('[data-testid="select-category"]').find('[role="button"]').click();
      cy.get('[role="option"]').contains("laptops").click();
      cy.get('[data-testid="select-category"]').find('[role="button"]').contains("laptops");
    });

    it("select language", () => {
      cy.get('[data-testid="select-language"]').find('[role="button"]').click();
      cy.get('[role="option"]').contains("العربية").click();
      cy.get('[data-testid="select-language"]').find('[role="button"]').contains("العربية");
    });
  });
});

export {};
