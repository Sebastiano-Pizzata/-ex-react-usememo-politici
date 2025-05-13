export default function Card({ politico }) {
    return (
        <div className="col-3">
            <div className="card mt-3">
                <div className="card-body">
                    <h5 className="card-title">{politico.name}</h5>
                    <figure>
                        <img className="img-fluid" src={politico.image} alt={politico.name} />
                    </figure>
                    <p className="card-text">{politico.position}</p>
                    <p className="card-text">{politico.biography}</p>
                </div>
            </div>
        </div>
    )
}
