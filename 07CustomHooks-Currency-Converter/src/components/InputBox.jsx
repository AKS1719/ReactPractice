import React, { useId } from "react";



function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  amoundDisable = false,
  currencyDisable = false,
  className = "",
}) {


  const amountInputID = useId() //  for changing using tab 

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
      <div className="w-1/2">
        <label htmlFor={amountInputID} className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          id={amountInputID}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amoundDisable}
          value={amount}
          onChange={(event) =>
            onAmountChange && onAmountChange(Number(event.target.value))
          } /** since this is a component and we want to use a method in the app file so if this file is used there then it can run that function from there */
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(event) =>
            onCurrencyChange && onCurrencyChange(event.target.value)
          }
          disabled={currencyDisable}
        >
          {
            currencyOption.map((currency)=>(
              <option key={currency} value={currency}>{currency}</option> /** since we are repeating the same element so react confuses that it is reapeating the same element but we know all of them have different value and to make react good at performance and avaoid all the confusion we must use key */ /**Remember the key in loops  */
            ))
          }
        </select>
      </div>
    </div>
  );
}

export default InputBox;
