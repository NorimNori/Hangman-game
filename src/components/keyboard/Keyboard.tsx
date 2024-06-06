import { keyboardProps } from '../../types';
import { KEYS } from '../../constants'
import './keyboard_styles.css'

export function Keyboard ({
    activeLetters,
    disabled = false,
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
                            disabled={isInActive || isActive || disabled}
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
