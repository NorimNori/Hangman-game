import HangmanDrawing from './components/hangmanDrawing/HangmanDrawing'
import HangmanWord from './components/hangmanWord/HangmanWord'
import Keyboard from './components/keyboard/Keyboard'
import './App.css'

function App() {

    return (
        <>
            <HangmanDrawing />
            <HangmanWord />
            <Keyboard />
        </>
    )
}

export default App
