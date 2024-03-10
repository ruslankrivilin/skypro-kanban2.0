// import { createContext, useState } from "react";


// function getUserFromLocalStorage() {
//     try {
//         return JSON.parse(localStorage.getItem("user"))
//     } catch (error) {
//         console.log(error);
//         return null
//     }
// }

// export const UserContext = createContext(null);
// export const UserProvider = ({children}) => {
//     const [tasks, setTasks] = useState(getUserFromLocalStorage());
//     function login(newUser) {
//         setTasks(newUser)
//     }
//     function logout() {
//         setTasks(null);
//     }
//     return(
//         <UserContext.Provider value={{tasks, login, logout}}>
//             {children}
//         </UserContext.Provider>
//     )
// }