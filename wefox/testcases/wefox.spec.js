var loginPage = require("../pages/loginPage");
var logout = require("../pages/logoutPage");
var profile = require("../pages/profilePage");
var contract = require("../pages/contractPage");

describe('Login to webpage', () => {
    beforeEach(function(){
        browser.get('https://my.wefox.de/login');
        browser.waitForAngularEnabled(false);
        browser.driver.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(5000);
        loginPage.login();    
    });

    it('open webpage', () => {
         expect(browser.getTitle()).toEqual('Anmeldung - wefox');
    });

    it('User should be able to login', () => {
        browser.sleep(3000);
        browser.getCurrentUrl().then(function(url){
        expect(browser.getTitle()).toEqual( 'Dashboard - wefox');
        expect(browser.getCurrentUrl()).toEqual( 'https://my.wefox.de/');
        });

    });

    it('The agent image is loaded',function(){
    expect(loginPage.image.isDisplayed()).toBe(true);   
    });
    
});
    
describe('Click Contract and verify', () => {
    it('Verify No Contract Added', () => {
    contract.contractClick();    
    expect(contract.label.getText()).toBe('No contracts added');
    });

});   


describe('Verify Profile Section', ()=>{
    it('Click Profile', () => {
        profile.goToProfile();
        browser.sleep(2000);
        expect(browser.getTitle()).toEqual( 'Personal details - wefox');

        profile.verifyAllDataIsDisplayed();
        profile.printData();
        profile.writeJsonFile();
        
    });    
}); 

describe('Log out', () => {
    it('User should be able to log out', () => { 
        logout.logout();
        browser.sleep(1000);
        expect(browser.getCurrentUrl(), "https://my.wefox.de/login");
    });


});

