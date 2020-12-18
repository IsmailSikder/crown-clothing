import './form-input.style.scss'

export const FormInput =({label,handleChange, ...otherProps})=>(
    <div className='group'>
        <input
            className='form-input'
            onChange={handleChange}
            {...otherProps}
            require/>
            <label className={`${otherProps.value.length ? 'shrink':''} form-input-label`}>
                {label}
            </label>
    </div>
)