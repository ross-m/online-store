import axios from "axios"
import { mensTopsURL } from "../config_url"
import { useState, useEffect } from "react"

export function MensTops() {

    const [mensTops, setMensTops] = useState(null)

    async function GetMensTops() {
        try {
            const res = await axios.get(mensTopsURL)
            setMensTops(res)
        }   catch (err) {
            alert(err)
        }
    }

    useEffect(() => {
        GetMensTops()
    }, [])

    return (
        <div class="flex-container">
            {mensTops.map((object, index) => (
                <div class="flex-item">object</div>
            ))}
        </div>
    )
}