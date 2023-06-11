import SelectablePage from "./PageObjects/selectablePage";


describe("Selectable Grid", () => {
  const selectablePage = new SelectablePage();

  it("Validates selected and unselected grid items", () => {
    cy.visit("");

    selectablePage.clickGridTab();


    // Click - “Two”, “Four”, “Six”, “Eight”////////////////////////////////////////////////

    // cy.contains("Grid").click();
    // cy.contains("Two").click();
    // cy.contains("Four").click();
    // cy.contains("Six").click();
    // cy.contains("Eight").click();
    selectablePage.selectGridItem("Two");
    selectablePage.selectGridItem("Four");
    selectablePage.selectGridItem("Six");
    selectablePage.selectGridItem("Eight");

    // VValidate that “Two”, “Four”, “Six”, “Eight” are highlighted///////////////////////////////////////////////

    // cy.contains("Two").should("have.class", "active");
    // cy.contains("Four").should("have.class", "active");
    // cy.contains("Six").should("have.class", "active");
    // cy.contains("Eight").should("have.class", "active");


    selectablePage.validateSelectedItem("Two");
    selectablePage.validateSelectedItem("Four");
    selectablePage.validateSelectedItem("Six");
    selectablePage.validateSelectedItem("Eight");

    // Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted///////////////////////////////////////

    // cy.contains("One").should("not.have.class", "active");
    // cy.contains("Three").should("not.have.class", "active");
    // cy.contains("Five").should("not.have.class", "active");
    // cy.contains("Seven").should("not.have.class", "active");
    // cy.contains("Nine").should("not.have.class", "active");

    selectablePage.validateUnselectedItem("One");
    selectablePage.validateUnselectedItem("Three");
    selectablePage.validateUnselectedItem("Five");
    selectablePage.validateUnselectedItem("Seven");
    selectablePage.validateUnselectedItem("Nine");
  });
});
