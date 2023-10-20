import './Checkbox.css'

const Checkbox = () => {
    return (
        <>
        <div className="barraCheck">
        <form className="checkbox">
          
          <label htmlFor="category1"> 
            <input type="checkbox" value="Food" id="category1" className="category-filter" /> Food 
          </label>

          <label htmlFor="category1"> 
            <input type="checkbox" value="Books" id="category1" className="category-filter" /> Books
          </label>

          <label htmlFor="category1"> 
            <input type="checkbox" value="Museum" id="category1" className="category-filter" /> Museum
          </label>

          <label htmlFor="category1"> 
            <input type="checkbox" value="Concert" id="category1" className="category-filter" /> Concert
          </label>

          <label htmlFor="category1"> 
            <input type="checkbox" value="Food" id="category1" className="category-filter" /> Race
          </label>

          <label htmlFor="category1"> 
            <input type="checkbox" value="Food" id="category1" className="category-filter" /> Cinema
          </label>

          <label htmlFor="category1"> 
            <input type="checkbox" value="Food" id="category1" className="category-filter" /> Party
          </label>

        </form>
        </div>
        </>
    )
}

export default Checkbox