
import { clickAction, newWindoHandle, radioBtnSelected, suggestionListDropDown, verifyText } from "../../../utilities/genericUtilities";
import{radio1Btn, countriesList} from "../../../pageObjects/homePage/homePage.json"
import {radio1} from "../../../testData/homepageData/homePageData.json"

describe('Cyprss Parctice for using Rahul Shetty Page ', ()=>{

it('Test_Case_01 to check the Radio buttons',()=>{

cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
clickAction({locator: radio1Btn});
radioBtnSelected({locator: radio1Btn});
suggestionListDropDown({locator: countriesList, value: "Ind", exactText: "India"})
newWindoHandle({locator: "#opentab"});

})

})