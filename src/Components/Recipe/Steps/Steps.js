import React from 'react'
import './Steps.css'

const Steps = ({ instructions, instruction, displayInstructionHeaders }) => {
    return (
        <ul>
            {instruction.steps.map((step, i) => (
                <li
                    key={i}
                    className='flex instructions-step_listItem'
                    style={instruction.areStepsShown ? { display: 'block' } : { display: 'none' }}
                >
                    <div className='flex instructions-step_container'>
                        <div className='instructions-step_number'>{step.number}</div>
                        <div className='instructions-step_instruction'>{step.step}</div>
                    </div>
                </li>
            ))}
            {instructions.length > 1 && instruction.areStepsShown && <button onClick={() => displayInstructionHeaders()} className='btnHover steps-BackBtn cursor'>Back</button>}
        </ul>
    );
}

export default Steps;