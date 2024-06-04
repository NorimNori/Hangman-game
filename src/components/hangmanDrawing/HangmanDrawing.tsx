import './drawingStyles.css'
import { HEAD, BODY, RIGHT_LEG, RIGHT_ARM, LEFT_ARM, LEFT_LEG, LEFT_FOOT, RIGHT_FOOT } from '../../constants'

export function HangmanDrawing () {
    return (  
        <section className="drawing_container">
            <div className='gallow_container'>
                {HEAD}
                {BODY}
                {RIGHT_ARM}
                {RIGHT_LEG}
                {LEFT_ARM}
                {LEFT_LEG}
                {RIGHT_FOOT}
                {LEFT_FOOT}
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
