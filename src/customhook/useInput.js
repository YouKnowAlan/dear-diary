import { useState } from 'react'

const useInput = (initialValue = '') => {
    const [value, setValue] = useState(initialValue);
    const resetValue = () => {
        setValue(initialValue);
    }
    const bind = {
        value,
        onChange: (e) => {
            setValue(e.target.value);
        }
    }
    return [value, bind, resetValue];
}

export default useInput;

