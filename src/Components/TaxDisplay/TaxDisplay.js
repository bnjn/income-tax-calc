import './TaxDisplay.css';

function TaxDisplay() {
  return (
    <div className='d-flex flex-column align-items-center m-2 display-container'>
        <ul className='per-display list-unstyled'>
            <li className='per-20'> </li>
            <li className='per-40'> </li>
            <li className='per-45'> </li>
        </ul>
        <h3 className='tax-month'> </h3>
        <h3 className='tax-display'> </h3>
        <h3 className='total-display'>Please enter your annual salary</h3>
    </div>
  );
}

export default TaxDisplay;
