export type HangmanDrawingProps = {
    numberOfGuesses: number
}
export type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean 
}
export type keyboardProps = {
    disabled?: boolean
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
}

