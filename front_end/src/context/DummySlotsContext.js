import { createContext, useEffect, useState } from "react";
import { token } from "../utils/configs";
import { BASE_URL } from "../utils/configs";

const SlotsContext = createContext([]);

const SlotsProvider = ({ children }) => {
    const [slots, setSlots] = useState([]);

    useEffect(() => {
        const fetchSlots = async () => {
            try {
                const response = await fetch(`${BASE_URL}/slots`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": token
                    }
                });
                const data = await response.json();
                setSlots(data.records);
            } catch (error) {
                console.error("Failed to fetch slots:", error);
            }
        };

        fetchSlots();
    }, []);

    return (
        <SlotsContext.Provider value={slots}>
            {children}
        </SlotsContext.Provider>
    );
};

export { SlotsProvider, SlotsContext };
