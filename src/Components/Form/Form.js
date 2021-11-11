import './Form.css';
import React, { useState, useEffect} from "react";
function Form() {
    const [salary, setSalary] = useState('');

    function handleInput(event) {
      event.preventDefault();
      setSalary(event.target.value)
  }

    useEffect( () => {
        function calcTax(salary) {
            const taxfree = 12570;
            const income = Math.round(salary);
            if (income > 150000) {
                return  'Income after tax: £' + (income - (((income - taxfree)/100)*45)).toFixed(2);
            }
            else if (income >= 50271) {
                return  'Income after tax: £' + (income - (((income - taxfree)/100)*40)).toFixed(2);
            }
            else if (income >= 12571) {
                return  'Income after tax: £' + (income - (((income - taxfree)/100)*20)).toFixed(2);
            }
            else if (income <= taxfree && income !== 0) {
                return 'No tax due!';
            }
            return 'Please enter your annual salary';
        }
            document.querySelector('.tax-display').innerText = calcTax(salary);
    }, [salary]);

  return (
      <div className='d-flex m-2'>
        <form onChange={handleInput}>
          <input id='salary' type='number' min='0' />
        </form>
      </div>
  );
}

export default Form;
