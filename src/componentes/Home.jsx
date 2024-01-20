import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/react.svg'
import '../App.css'
import { Link } from 'react-router-dom'

function Home() {
    const [count, setCount] = useState(0)




    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank" rel='noreferrer'>
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank" rel='noreferrer'>
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem sequi ex repellat voluptate distinctio facere 
                porro! Voluptatum minima pariatur dignissimos, cum beatae 
                deserunt, inventore asperiores dolor consectetur repellat fuga corrupti!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Officiis optio iure ipsa <Link to= '/formulario'>Formulario</Link> quis mollitia deserunt assumenda 
                laudantium totam. Praesentium, laborum? Deleniti enim alias 
                vero, officia deserunt iste perspiciatis dicta ipsa!
            </p>
        </>
    )
}

export default Home
