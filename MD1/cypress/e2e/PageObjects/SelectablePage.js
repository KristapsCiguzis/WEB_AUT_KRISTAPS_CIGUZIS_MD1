class SelectablePage {
  

  clickGridTab() {
    cy.contains("Grid").click();
  }

  selectGridItem(item) {
    cy.contains(item).click();
  }

  validateSelectedItem(item) {
    cy.contains(item).should("have.class", "active");
  }

  validateUnselectedItem(item) {
    cy.contains(item).should("not.have.class", "active");
  }
}

export default SelectablePage;
