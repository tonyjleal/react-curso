import { useForm } from "../../hooks/useForm/useForm";
import { getHeroesByName } from '../../selectors/getHeroesByName'
import { HeroCard } from "../hero/HeroCard";

export const SearchScreen = () => {

  const [formValues, handleInputChange, reset] = useForm({
    searchText: ''
  });  

  const {searchText} = formValues;
  const heroesFiltered = getHeroesByName('ALGO POR AQUÍ')


  const handleSearch = (e) => {
      e.preventDefault();

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
        <div className="col-7">
            <h4>Resultados</h4>
            <hr />
            {
                heroesFiltered.map((hero) => {
                  return <HeroCard
                    key={hero.id}
                    {...hero}
                  />
                })

            }
        </div>
      </div>
    </>
  )
}
