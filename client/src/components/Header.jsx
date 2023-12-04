import { useEffect, useState } from "react"
import options from "../assets/options"
import axios from "axios"

function Header() {
    const [data, setData] = useState({})
    const [selectedType, setSelectedType] = useState('')
    const [selectedParticipant, setSelectedParticipant] = useState('')

    useEffect(() => {
        const fetchOptions = async () => {
            try {
                setData(options);
            } catch (err) {
                console.log(err);
            }
        }

        fetchOptions();

    }, [])


    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
    }

    const handleParticipantChange = (e) => {
        setSelectedParticipant(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post('http://localhost:3001/', { type: selectedType, participants: selectedParticipant })
        console.log(response.data);
    }

    return (
        <div>
            <h1>Let's find something for you to do ✌️</h1>
            <form onSubmit={handleSubmit} className='form-handler'>
                <select onChange={handleTypeChange} className='form-select' name="" id="">
                    {data && data.type ? data.type.map(option => {
                        return <option key={option.id} value={option.value}>{option.label}</option>
                    }) : <option>Loading...</option>}

                </select>
                <select onChange={handleParticipantChange} className='form-select' name="participants" >
                    {data && data.participants ? data.participants.map(participant => {
                        return <option key={participant.id} value={participant.value}>{participant.label}</option>
                    }) : <option>Loading...</option>}
                </select>
                <button className='form-submit'>Go</button>
            </form>
        </div>
    )
}

export default Header