import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Card() {
    const [random, setRandom] = useState({})
    useEffect(() => {
        const fetchRandomActivity = async () => {
            const randomActivity = await axios.get("http://localhost:3001/")
            setRandom(randomActivity.data);
        }
        fetchRandomActivity()
    }, [])
    return (
        <section className='cards'>
            <article className='card-item'>
                <h2 className='card-activity'>{random.activity ? random.activity : 'Loading .....'}</h2>
                <div className='card-info'>
                    <span className='card-type'>
                        {random.type ? random.type : 'Loading ....'}
                    </span>
                    <span className='card-participants'>
                        participants: {random.participants ? random.participants : 'Loading...'}
                    </span>
                </div>
            </article>
        </section>
    )
}

export default Card