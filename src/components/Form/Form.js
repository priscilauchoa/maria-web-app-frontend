import './Form.css';
export default function Form() {
  return (
    <form className='register-form'>
      <label>
        Name:
        <input type='text' />
      </label>
      <label>
        Quantity:
        <input type='text' />
      </label>
      <label>
        Time:
        <input type='text' />
      </label>

      <div className='visit-check'>
        <label>Visits:</label>
        <br></br>

        <input type='checkbox'></input>
        <label>Everyday</label>
        <input type='checkbox'></input>
        <label>Twice a day</label>
        <input type='checkbox'></input>
        <label>Intercalated</label>
      </div>

      <div className='visit-check'>
        <label>Protection:</label>
        <br></br>
        <label>Everyday</label>
        <input type='checkbox'></input>
        <label>Everyday</label>
        <input type='checkbox'></input>
        <label>Twice a day</label>
        <input type='checkbox'></input>
        <label>Intercalated</label>
      </div>

      <input type='submit' value='Submit' />
    </form>
  );
}
