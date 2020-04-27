class contractPage {
    constructor() {
        this.contractButton = element(by.xpath("//a[contains(text(),'My Contracts')]"));
        this.label = element(by.xpath("//p[@class='h1 wf-u-pt-24 wf-u-pb-12']"));
    
    }

    contractClick(){
        this.contractButton.click();
        browser.sleep(3000);
    }

}
module.exports = new contractPage();    