function Card({ random }) {
    if (!random || Object.keys(random).length === 0) {
        return (
            <div className='cards'>
                <div className='card-item'>
                    <h2 className='card-activity'>No activities found</h2>
                    <div className='card-info'>
                        <span className='card-type'>Type: N/A</span>
                        <span className='card-participants'>Participants: N/A</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <section className='cards'>
            <article className='card-item'>
                {random && random.activity ?
                    <>
                        <h2 className='card-activity'>
                            {random.activity || 'Loading .....'}
                        </h2>
                        <div className='card-info'>
                            <span className='card-type'>
                                {random.type || 'Loading ....'}
                            </span>
                            <span className='card-participants'>
                                participants: {random.participants || 'Loading...'}
                            </span>
                        </div>
                    </> : <div id="tag-error" className="tag-error">
                        <h1>{random.error}</h1>
                    </div>}
            </article>
        </section>
    );
}

export default Card;
