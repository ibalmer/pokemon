<div className="bicho">
                {pokemon.name && <h2> {pokemon.name} </h2>}
                <img src={img} alt="" />
                {pokemon.types && (
                    <ul>
                        {pokemon.types.map((type, index) => (
                            <li key={index}>{type.type.name}</li>
                        ))}
                    </ul>
                )}
                <Link to={'/pokemon/'+ pokemon.name}>Ver</Link>
            </div>















