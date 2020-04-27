class logoutPage {
    constructor() {
    this.logoutButton = element(by.xpath("//a[contains(text(),'Log out')]"));

    }
	
	  /**
     * User hit the logout button.
	  * @return {promise}
     */
    logout() {
      this.logoutButton.click();
    }


}
module.exports = new logoutPage();








