import { createContext } from "react";

const SessionsContext = createContext([
    {
        id: 1,
        title: "Learning React Context",
        day: "Sunday",
        session_link: "https://meet.google.com/1234"
    },
    {
        id: 2,
        title: "Learning Redux",
        day: "Saturday",
        session_link: "https://meet.google.com/1234"
    }
])

export default SessionsContext