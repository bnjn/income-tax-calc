import './Form.css';
import React, { useState, useEffect} from "react";
function Form() {
    const [salary, setSalary] = useState('');

    function handleInput(event) {
      event.preventDefault();
      setSalary(event.target.value)
  }

  function calcTax(income) {

  }

    useEffect( () => {
        if (salary === '') {
            document.querySelector('.tax-display').innerText = 'Please enter your annual salary';
        } else {
            document.querySelector('.tax-display').innerText = 'Income after tax: ' + salary;
        }
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
