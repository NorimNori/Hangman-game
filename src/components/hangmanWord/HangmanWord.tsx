import './hangWord_styles.css'

export function HangmanWord () {
    const word = 'GUITAR'
    const guessedLetters = ['U', 'R', 'T']
    return (  
        <>
            <div id="hang_word">{word.split("").map((letter, index) => (
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
