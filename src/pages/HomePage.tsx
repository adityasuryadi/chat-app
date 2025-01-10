import { Navbar } from "@/components/organisms/Navbar"
import { useEffect } from "react"

const Home = () => {
    useEffect(() => {
        console.log('home')
        // alert('home')    
    })

    // const showAlert = () => {
    //     alert('hello')
    // }

    return (
        <>
            <Navbar></Navbar>
            <h1>Home</h1>
            {/* <button onClick={showAlert}>Click</button> */}
        </>
        )
}

export default Home