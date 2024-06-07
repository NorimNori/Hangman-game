import HangmanDrawing from './components/hangmanDrawing/HangmanDrawing'
import HangmanWord from './components/hangmanWord/HangmanWord'
import { useCallback, useEffect, useState } from "react"
import Keyboard from './components/keyboard/Keyboard'
import words from './wordList.json'
import './App.css'

function getWord() {
    return words[Math.floor(Math.random() * words.length)]
}

function App() {
    const [wordToGuess, setWordToGuess] = useState(getWord)
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])
    const incorrectLetters = guessedLetters.filter(
        letter => !wordToGuess.includes(letter)
    )

    const isLoser = incorrectLetters.length >= 8
    const isWinner = wordToGuess.split('').every(letter => guessedLetters.includes(letter))

    const addGuessedLetter = useCallback (
        (letter: string) => {
            if (guessedLetters.includes(letter) || isLoser || isWinner) return

            setGuessedLetters(currentLetters => [...currentLetters, letter])
        },
        [guessedLetters, isLoser, isWinner]
    )

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key
            if (!key.match(/^[a-z]$/)) return

            e.preventDefault()
            addGuessedLetter(key)
        }

        document.addEventListener("keypress", handler)

        return () => {
            document.removeEventListener("keypress", handler)
        }
    }, [guessedLetters])

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            const key = e.key
            if (key !== "Enter") return
    
            e.preventDefault()
            setGuessedLetters([])
            setWordToGuess(getWord())
        }
    
        document.addEventListener("keypress", handler)
    
        return () => {
            document.removeEventListener("keypress", handler)
        }
    }, [])

    return (
        <>
            <section id='hangdw_cont'>
                <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
                <aside>
                    <div className='modal'>
                        {isWinner && 'Winner! - Refresh to start again'}
                        {isLoser && 'Nice Try! - Refresh to try again'}
                    </div>
                    <HangmanWord reveal={isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
                </aside>
            </section>
            < section id='hangk_cont'>
                <Keyboard 
                    disabled = {isWinner || isLoser}
                    activeLetters={guessedLetters.filter(letter =>
                        wordToGuess.includes(letter)
                    )}
                    inactiveLetters={incorrectLetters}
                    addGuessedLetter={addGuessedLetter}
                />
            </section>
        </>
    )
}

export default App
