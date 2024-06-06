import './hangWord_styles.css'

type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean 
}

export function HangmanWord ({ guessedLetters, wordToGuess, reveal = false }: HangmanWordProps) {
    return (  
        <>
            <div id="hang_word">{wordToGuess.split("").map((letter, index) => (
                <span 
                    id='word_cont'
                    key={index}
                >
                    {
                        guessedLetters.includes(letter) || reveal
                            ? (<span className={`${'visible'} ${!guessedLetters.includes(letter) && reveal ? 'loss' : '' }`}>{letter}</span>)
                            : (<span className='hidden'>{letter}</span>)
                    }
                </span>
            ))}</div>
        </>
    );
}

export default HangmanWord;
