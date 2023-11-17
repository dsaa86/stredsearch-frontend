export default function SearchOptionsHeader({title, headerType=3}){

    return(
            <div className="row">
                <div className="col-sm">
                    { headerType === 1 ? <h1>{title}</h1> : null }
                    { headerType === 2 ? <h2>{title}</h2> : null }
                    { headerType === 3 ? <h3>{title}</h3> : null }
                    { headerType === 4 ? <h4>{title}</h4> : null }
                    { headerType === 5 ? <h5>{title}</h5> : null }
                    { headerType === 6 ? <h6>{title}</h6> : null }
                </div>
            </div>
    );
}