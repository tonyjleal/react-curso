import { useForm } from "../../hooks/useForm/useForm";

export const SearchScreen = () => {

  const [formValues, handleInputChange, reset] = useForm({
    searchText: ''
  });  

  const {searchText} = formValues;

  const handleSearch = (e) => {
      e.preventDefault();
      reset()
      console.log(searchText);
  }

  return (
    <>
      <h1>Búsquedas</h1>
      <hr/>

      <div className="row">
        <div className="col-5">
          <h4>Buscar</h4>
          <hr/>
          <form onSubmit={handleSearch}>
            <input 
              type="text"
              placeholder="Buscar un héroe"
              className="form-control"
              name="searchText"
              autoComplete="off"
              onChange={ handleInputChange }
              value={searchText}
            />

            <button 
              type="submit"
              className="btn btn-primary mt-1"
              >
              Buscar...
            </button>
          </form>
        </div>
      </div>
    </>
  )
}
