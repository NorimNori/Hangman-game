import { HangmanDrawingProps } from '../../types';
import { BODY_PARTS } from '../../constants'
import './drawingStyles.css'

export function HangmanDrawing ({ numberOfGuesses }:HangmanDrawingProps) {
    return (  
        <section className="drawing_container">
            <div className='gallow_container' >
                {BODY_PARTS.slice(0, numberOfGuesses)}
                <div className='black' id='part_one'/>
                <div className='black' id='part_two'/>
                <div className='black' id='part_three'/>
                <div className='black' id='part_four'/>
                <div className='black' id='part_five'/>

            </div>
        </section>
    );
}

export default HangmanDrawing;
