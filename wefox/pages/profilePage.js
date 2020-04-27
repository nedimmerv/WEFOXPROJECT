class profilePage {
    constructor() {
        this.profileButton = element(by.xpath("//a[@title='Profile']"));
        this.personDetails = element(by.xpath("//h4[contains(text(),'Personal details')]"));
        this.container='';
    }


        printData(){
            var first_name = browser.executeScript('return document.getElementById("first_name").value');
            first_name.then(function (text) {
                console.log(text);
            
            var last_name = browser.executeScript('return document.getElementById("last_name").value');
            last_name.then(function (text){
                console.log(text);
            });
    
            var street = browser.executeScript('return document.getElementById("street").value');
            street.then(function (text){
                console.log(text);
            });
            
            var zip = browser.executeScript('return document.getElementById("zip_code").value');
            zip.then(function (text){
                console.log(text);
            });
    
            var city = browser.executeScript('return document.getElementById("city").value');
            city.then(function (text){
                console.log(text);
            });
    
            var birthdate = browser.executeScript('return document.getElementById("birthdate").value');
            birthdate.then(function (text){
                console.log(text);
            });        


        });


    }


    verifyAllDataIsDisplayed(){
        //As user data there are 8 fields
        this.container = browser.executeScript('return document.getElementsByClassName("wf-c-field__input")');

          //all 8 elements are tested through loop
          for (var i = 0; i < this.container.length; ++i) {
            expect(this.container.get(i).isDisplayed()).toBe(true);
    
        }
    }

    goToProfile(){
        this.profileButton.click();
        browser.sleep(3000);
        this.personDetails.click();
    }


    writeJsonFile(){
        const fs = require('fs');
        let profileData = { 
            first_name: 'test',
            last_name: 'testtest1testtest1test', 
            street: 'Alexanderplatz 70',
            zip: '10178',
            city: 'Berlin',
            birthdata:'21.02.1999',
            email:'aqawefox+testtecnico@wefoxgroup.com',
            phonenumber: '+34 615835882' 
        };     
        let data = JSON.stringify(profileData);
        fs.writeFileSync('output.json', data);   
    }


}
module.exports = new profilePage();    