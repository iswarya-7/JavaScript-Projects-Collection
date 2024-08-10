const dropList = document.querySelectorAll(".drop-list  select");
fromCurrency = document.querySelector(".From select");
toCurrency = document.querySelector(".To select");
const getButton = document.querySelector(".currency #exchange-btn");
let apiKey = "f77a0a9ff662977019f9b917";


for (let i = 0; i < dropList.length; i++) {
    for (currency_code in country_list) {
        let selected;
        if (i == 0) {
            selected = currency_code == "INR" ? "selected" : "";
        } else if (i == 1) {
            selected = currency_code == "USD" ? "selected" : "";
        }
        // creating option tag with passing currency code as a text and value
        let optionTag = `<option value=${currency_code}>${currency_code}</option>`;
        // inserting options tag inside select tag
        dropList[i].insertAdjacentHTML("beforeend", optionTag);
    }

    dropList[i].addEventListener("change", e => {
        loadFlag(e.target);//calling loadFlag with passing target element as an argument  
    });
}

function loadFlag(element) {
    for (code in country_list) {
        if (code == element.value) { //if currency code of country list is equal to option value
            let imgTag = element.parentElement.querySelector("img");
            //passing country code of a selected currency code in a img url
            imgTag.src = `https://flagsapi.com/${country_list[code]}/flat/64.png`
        }
    }
}

//prevent the getting exchange rate text in starting
window.addEventListener("load", () => {
    getExchangeRate();
});

getButton.addEventListener("click", e => {
    e.preventDefault();//preventing form from submitting
    getExchangeRate();
});

const exchangeIcon = document.querySelector(".drop-list .icon")
exchangeIcon.addEventListener("click", () => {
    let tempCode = fromCurrency.value; //temporary currecy code of From drop list
    fromCurrency.value = toCurrency.value; //passing To currency  code to From currecy code
    toCurrency.value = tempCode; //passinf temporary cuurency code to To currecy code
    loadFlag(fromCurrency);// calling loadFlag with passing select element (fromCurrency) of From
    loadFlag(toCurrency); // calling loadFlag with passing select element (toCurrency) of To


    getExchangeRate();
});


function getExchangeRate() {
    //get  input value
    const amount = document.querySelector(".amount");
    let exchangeText = document.querySelector(".exchange-rate");
    let amountVal = amount.value;
    // if user don't enter any value or enter 0 then we will put 1 value by default in this input box
    if (amountVal == "" || amountVal == "0") {
        amount.value = "1";
        amountVal = 1;
    }

    exchangeText.innerText = "Getting exchange rate...."
    let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency.value}`;
    //fetching api response and returning it with parsing into js obj and in another then method
    fetch(url).then(response => response.json()).then(result => {
        let exchangeRate = result.conversion_rates[toCurrency.value];
        console.log(exchangeRate);
        let totalExchangeRate = (amountVal * exchangeRate).toFixed(2);
        console.log(totalExchangeRate);
        //selecting the exchange text
        exchangeText.innerText = `${amountVal} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value} `;
        console.log(exchangeText.textContent);
    }).catch(() => { //if user is offline or any ocuured while fetching data then catch
        exchangeText.innerText = "Something went wrong";
    });
}







