import HangmanDrawing from './components/hangmanDrawing/HangmanDrawing'
import HangmanWord from './components/hangmanWord/HangmanWord'
import { useCallback, useEffect, useState } from "react"
import Keyboard from './components/keyboard/Keyboard'
import words from './wordList.json'
import './App.css'

function App() {
    const [wordToGuess, setWordToGuess] = useState(() => {
        return words[Math.floor(Math.random() * words.length)]
    })
    const [guessedLetters, setGuessedLetters] = useState<string[]>([])
    const incorrectLetters = guessedLetters.filter(
        letter => !wordToGuess.includes(letter)
    )

    const addGuessedLetter = useCallback (
        (letter: string) => {
            if (guessedLetters.includes(letter)) return

            setGuessedLetters(currentLetters => [...currentLetters, letter])
        },
        [guessedLetters]
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

    return (
        <>
            <section id='hangdw_cont'>
                <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
                <HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
            </section>
            < section id='hangk_cont'>
                <Keyboard 
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
