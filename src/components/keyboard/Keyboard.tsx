import { KEYS } from '../../constants'
import './keyboard_styles.css'

type keyboardProps = {
    activeLetters: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
}

export function Keyboard ({
    activeLetters,
    inactiveLetters,
    addGuessedLetter
}: keyboardProps) {
    return (  
        <>
            <div id='key_cont'>
                {KEYS.map(key => {
                    const isActive = activeLetters.includes(key)
                    const isInActive = inactiveLetters.includes(key)
                    return (
                        <button 
                            onClick={() => addGuessedLetter(key)} 
                            className={`${'btn'} ${isActive ? 'active' : '' } ${isInActive ? 'inactive' : ''}`}
                            disabled={isInActive || isActive}
                            key={key}
                        >
                            {key}
                        </button>
                    )
                })}
            </div>
        </>
    );
}

export default Keyboard;
