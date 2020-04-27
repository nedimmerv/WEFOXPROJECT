class loginPage {
    constructor() {
    this.email = element(by.id('user_name'));
    this.username = 'aqawefox+testtecnico@wefoxgroup.com';
    this.password = element(by.xpath("//input[@id='password']"));
    this.pass = 'qwertyasdf' ;
    this.submit = element(by.xpath("//button[@class='wf-c-btn --primary --block-xs']"));
    this.username = 'aqawefox+testtecnico@wefoxgroup.com';
    this.pass = 'qwertyasdf' ;
    this.image= element(by.xpath("//img[@class='wf-c-agent-card__image ng-star-inserted']"));
    }
	
	  /**
     * User enters email and password 
     * and hit the login button.
	  * @return {promise}
     */
    login() {
      browser.actions().mouseMove(this.email).click().perform();
      this.email.sendKeys(this.username);
      browser.actions().mouseMove(this.password).click().perform();
      this.password.sendKeys(this.pass);
		  this.submit.click();
    }


}
module.exports = new loginPage();








