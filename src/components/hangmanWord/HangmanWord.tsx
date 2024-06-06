import './hangWord_styles.css'

type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
}

export function HangmanWord ({ guessedLetters, wordToGuess }: HangmanWordProps) {
    return (  
        <>
            <div id="hang_word">{wordToGuess.split("").map((letter, index) => (
                <span 
                    id='word_cont'
                    key={index}
                >
                    {
                        guessedLetters.includes(letter)
                            ? (<span id='visible'>{letter}</span>)
                            : (<span id='hidden'>{letter}</span>)
                    }
                </span>
            ))}</div>
        </>
    );
}

export default HangmanWord;
