import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
const BASE_URL = 'https://appointments-booking-api.onrender.com'

const SlotDetail = () => {
    const { id } = useParams()
    const [slot, setSlot] = useState({})

    useEffect(() => {
        const getSlot = async() => {
            const response = await fetch(`${BASE_URL}/slots/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY1NDUzYzgyZjQ0MzdlODc5YzE3MjUxIiwiZW1haWwiOiJwYXVsbmRhbWJvQGdtYWlsLmNvbSIsInVzZXJuYW1lIjoicGF1bG5kYW1ibyIsImZpcnN0X25hbWUiOiJQYXVsIiwibGFzdF9uYW1lIjoiTmRhbWJvIiwicGhvbmVfbnVtYmVyIjoiKzI1NDc0NTQ5MTA5MyJ9LCJpYXQiOjE3MTY4ODE0NzAsImV4cCI6MTcxNjg4NTA3MH0.GN_63rOWtQ7xbvA_YF47QR7r1s7RKT1OvWG--gmBLI4"
                }
            })
            const data = await response.json()
            setSlot(data.slot)
        }
        getSlot();
    }, [id])

    console.log(slot)

  return (
    <div>
        <h5>Day Name: {slot.day_name}</h5>
    </div>
  )
}

export default SlotDetail