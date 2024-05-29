import { createContext } from "react";
const slots = [
    {
        id: 1,
        day_name: "Monday",
        start_time: "3:00 PM",
        end_time: "5:00 pm"
    },
    {
        id: 2,
        day_name: "Saturday",
        start_time: "8:00 PM",
        end_time: "10:00 PM"
    }
]
const SlotsContext = createContext(slots)

export default SlotsContext