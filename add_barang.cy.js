  describe('tambah barang', () => {
    it('tambah barang', () => {
      cy.visit('www.saucedemo.com')
      cy.get('username').type("standard_user")
      cy.get('password').type("secret_sauce")
      cy.get('login-button').click()
      cy.get('add-to-cart-sauce-labs-backpack').click()

    })
  })