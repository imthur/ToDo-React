const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select
            value={filter}
            onChangeCapture={(e) => setFilter(e.target.value)}
          >
            <option value="all">Todos</option>
            <option value="completed">Concluídos</option>
            <option value="not-completed">Não Concluídos</option>
          </select>
        </div>
        <div>
          <p>Ordem Alfabética:</p>
          <button>Asc</button>
          <button>Desc</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
