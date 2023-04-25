import React, { useImperativeHandle } from 'react'

const InputField = React.forwardRef((props, ref) => {
    console.log("propss",props,"ref",ref)
    useImperativeHandle(ref,() => {
        return {
            focus() {
                console.log("focus trigger")
            }
        }
    }, [])
    return (
        <div>
            <input placeholder='Enter text input' />
        </div>
    )
})
export default InputField