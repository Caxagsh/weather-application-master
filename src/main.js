import { weatherConfig } from "./config/weather-config.js";
import { DataProcessor } from "./service/DataProcessor.js";
import { DataForm } from "./ui/data-form.js";
import { TableForm } from "./ui/table-form.js";

const schema = [
    {columnName: 'City', fieldName: 'City'},
    {columnName: 'Date', fieldName: 'Date'},
    {columnName: "Hours", fieldName: 'Hours'},
    {columnName: "Temperatures", fieldName: 'Temperatures'},
    
]

const dataProcessor = new DataProcessor(weatherConfig.url, weatherConfig.cities);
const dataTabke = new TableForm("form-table", "Temperatures", schema);
async function displayTemperatures() {
    const data = await dataProcessor.getTemperatureData("Eilat",
     "2023-02-19", "2023-02-20", 14, 16);
    
}
displayTemperatures();
const dataForm = new DataForm("form-section", weatherConfig.maxDays);
