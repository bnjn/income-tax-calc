import './Form.css';
import React, { useState, useEffect} from "react";

function Form() {
    const [salary, setSalary] = useState('');

    function handleInput(event) {
      event.preventDefault();
      setSalary(event.target.value)
  }

    useEffect( () => {
        function calcBands(salary) {
            let arr = [Math.round(salary)];
            if (arr[0] >= 12571 && arr[0] <= 50270) {
                //Some of 20% band taxed
                arr[1] = (((arr[0] - 12570) / 100) * 20);
                console.log(arr);
                return arr;
            }
            else if (arr[0] >= 50271 && arr[0] <= 125140) {
                //100% of 20% band taxed 7540. Some of 40% taxed
                arr[1] = 7540;
                arr[2] = (((arr[0] - 50270) / 100) * 40);
                console.log(arr);
                return arr;
            }
            else if (arr[0] >= 125141 && arr[0] <= 150000) {
                //100% of 20% band taxed 10054. Some of 40% taxed. No tax free.
                arr[1] = 10054;
                arr[2] = (((arr[0] - 50270) / 100) * 40);
                console.log(arr);
                return arr;
            }
            else {
                //100% of 20 taxed. 100% of 40% taxed. Rest taxed at 45% No tax free.
                arr[1] = 10054;
                arr[2] = 39892;
                arr[3] = (((arr[0] - 150000) / 100) * 45);
                console.log(arr);
                return arr;
            }
        }

        function calcTax(salary) {
            if (salary === '') {
                document.querySelector('.tax-display').innerText = '';
                document.querySelector('.per-20').innerText = '';
                document.querySelector('.per-40').innerText = '';
                document.querySelector('.per-45').innerText = '';
                document.querySelector('.tax-month').innerText = '';
                return 'Please enter your annual salary';
            }
            else if (salary < 12571 && salary !== 0) {
                document.querySelector('.tax-display').innerText = '';
                document.querySelector('.per-20').innerText = '';
                document.querySelector('.per-40').innerText = '';
                document.querySelector('.per-45').innerText = '';
                document.querySelector('.tax-month').innerText = '';
                return 'No tax to pay! £' + (12570 - salary).toFixed(2) + ' tax free allowance remaining';
            }
            else if (salary !== 0) {
                if (calcBands(salary).length === 2) {
                    document.querySelector('.per-20').innerText = 'Tax paid in 20% band: £' + calcBands(salary)[1].toFixed(2);
                    document.querySelector('.per-40').innerText = '';
                    document.querySelector('.per-45').innerText = '';
                    document.querySelector('.tax-month').innerText = 'Tax per month: £' + ((calcBands(salary)[1]) / 12).toFixed(2);
                    document.querySelector('.tax-display').innerText = 'Total tax: £' + (calcBands(salary)[1]).toFixed(2);
                    return 'Income after tax: £' + (salary - calcBands(salary)[1]).toFixed(2);
                }
                else if (calcBands(salary).length === 3 && calcBands(salary)[1] === 7540) {
                    document.querySelector('.per-20').innerText = 'Tax paid in 20% band: £' + calcBands(salary)[1].toFixed(2);
                    document.querySelector('.per-40').innerText = 'Tax paid in 40% band: £' + calcBands(salary)[2].toFixed(2);
                    document.querySelector('.per-45').innerText = '';
                    document.querySelector('.tax-month').innerText = 'Tax per month: £' + ((calcBands(salary)[1] + calcBands(salary)[2]) / 12).toFixed(2);
                    document.querySelector('.tax-display').innerText = 'Total tax: £' + (calcBands(salary)[1] + calcBands(salary)[2]).toFixed(2);
                    return 'Income after tax: £' + (salary - calcBands(salary)[1] - calcBands(salary)[2]).toFixed(2);
                }
                else if (calcBands(salary).length === 3 && calcBands(salary)[2] === 39892) {
                    document.querySelector('.per-20').innerText = 'Tax paid in 20% band: £' + calcBands(salary)[1].toFixed(2);
                    document.querySelector('.per-40').innerText = 'Tax paid in 40% band: £' + calcBands(salary)[2].toFixed(2);
                    document.querySelector('.per-45').innerText = '';
                    document.querySelector('.tax-month').innerText = 'Tax per month: £' + ((calcBands(salary)[1] + calcBands(salary)[2]) / 12).toFixed(2);
                    document.querySelector('.tax-display').innerText = 'Total tax: £' + (calcBands(salary)[1] + calcBands(salary)[2]).toFixed(2);
                    return 'Income after tax: £' + (salary - calcBands(salary)[1] - calcBands(salary)[2]).toFixed(2);
                } else {
                    document.querySelector('.per-20').innerText = 'Tax paid in 20% band: £' + calcBands(salary)[1].toFixed(2);
                    document.querySelector('.per-40').innerText = 'Tax paid in 40% band: £' + calcBands(salary)[2].toFixed(2);
                    document.querySelector('.per-45').innerText = 'Tax paid in 45% band: £' + calcBands(salary)[3].toFixed(2);
                    document.querySelector('.tax-month').innerText = 'Tax per month: £' + ((calcBands(salary)[1] + calcBands(salary)[2] + calcBands(salary)[3]) / 12).toFixed(2);
                    document.querySelector('.tax-display').innerText = 'Total tax: £' + (calcBands(salary)[1] + calcBands(salary)[2] + calcBands(salary)[3]).toFixed(2);
                    return 'Income after tax: £' + (salary - calcBands(salary)[1] - calcBands(salary)[2] - calcBands(salary)[3]).toFixed(2);
                }
            }
        }

        document.querySelector('.total-display').innerText = calcTax(salary);

    }, [salary]);

  return (
      <div className='d-flex m-2'>
        <form onChange={handleInput}>
          <span className='fs-4 me-2'>£</span><input id='salary' type='number' min='0' max='1000000000000'/>
        </form>
      </div>
  );
}

export default Form;
