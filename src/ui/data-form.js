import { weatherConfig } from "../config/weather-config.js";

const FORM_ID = "data-form-id";
const DATE_FROM_ID = "date-from-id";
const DATE_TO_ID = "date-to-id";
const HOURS_FROM_ID = "hours-from-id";
const HOURS_TO_ID = "hours-to-id";
const CITY = "city-id";
export class DataForm {
    #formElement;
    #dateFromElement;
    #dateToElement;
    #hoursFormElement;
    #hoursToElement;
    #citiesElement
    constructor(parentId, maxDays) {
        const parentElement = document.getElementById(parentId);
        this.#fillForm(parentElement);
        this.#formElement = document.getElementById(FORM_ID);
        this.#dateToElement = document.getElementById(DATE_TO_ID);
        this.#dateFromElement = document.getElementById(DATE_FROM_ID);
        this.#hoursFormElement = document.getElementById(HOURS_FROM_ID);
        this.#hoursToElement = document.getElementById(HOURS_TO_ID);
        this.#citiesElement = document.getElementById(CITY);
        this.#setMinMaxDates(maxDays);
        this.#setHours();
        this.#setCities();
    }
    #fillForm(parentElement) {
        parentElement.innerHTML = `<form id="${FORM_ID}">
        <label for="cars">Choose city:</label>
        <select name="city" id="${CITY}">
            <option value="vvvvv"></option>
            
       </select>
            
            <input type="date" id="${DATE_FROM_ID}" required>
            <input type="date" id="${DATE_TO_ID}" required>
            
            <label for="cars">Choose hours from:</label>
            <select name="hours" id="${HOURS_FROM_ID}">
                <option value="vvvvv"></option>
                
           </select>
           <label for="cars">Choose hours to:</label>
           <select name="hours" id="${HOURS_TO_ID}">
               <option value="vvvvv"></option>
               
          </select>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
        </form>`
    }
    #setCities(){
        this.#citiesElement.innerHTML = Object.keys(weatherConfig.cities).map(city =>  `<option value="${city}">${city}</option>`);

    }
    #setHours(){
        let hoursArr = [];

        for (let i = 0; i < 24; i++) {
            hoursArr.push(i);
          }
        
        this.#hoursFormElement.innerHTML = hoursArr.map(hoursArr => `<option value="${hoursArr}">${hoursArr}</option>`); // dont work using map index?
        this.#hoursToElement.innerHTML = hoursArr.map(hoursArr => `<option value="${hoursArr}">${hoursArr}</option>`);
    }
    #setMinMaxDates(maxDays) {
        const current = new Date();
        const maxDayOfMonth = current.getDate() + maxDays;
        const maxDate = new Date();
        maxDate.setDate(maxDayOfMonth);
        const minDateStr = current.toISOString().split("T")[0];
        const maxDateStr = maxDate.toISOString().split("T")[0];
        this.#dateFromElement.min = minDateStr;
        this.#dateToElement.min = minDateStr;
        this.#dateFromElement.max = maxDateStr;
        this.#dateToElement.max = maxDateStr;

    }
    addFormHandler(handlerFun) {
        this.#formElement.addEventListener('submit', (event) => {
    event.preventDefault(); //canceling default handler of "submit"
    const weatherData = handlerFun();
   const message = handlerFun(employeeData);
   if (message) {
    alert(message);
   } else {
    this.#formElement.reset();
    this.setCities();
   }
})
    }

}

