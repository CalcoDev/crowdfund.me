const CfmInput = ({ className, value, onChange, type, label }) => {
    return (
        <div className={`${className} relative w-full`}>
            <label
                className={`
                    cfm-label absolute 
                    text-cfm-lighter-grey font-cfm-cormorant text-sm
                    transition-all duration-300 transition-ease-in-out
                    italic
                    
                    left-2
                    ${value.length > 0 ? '-top-2 text-xxs' : 'top-1'}
                `}
            >
                {label}
            </label>

            {type === 'textarea' ? (
                <textarea
                    className="
                        w-full h-full bg-cfm-transparent 
                        text-cfm-white
                        font-cfm-cormorant text-sm 
                        py-1 px-2 
                        border-b-[1px] border-cfm-lighter-grey 
                        transition-all duration-300 transition-ease-in-out
                        focus:outline-none focus:border-cfm-white
                    "
                    value={value}
                    onChange={onChange}
                />
            ) : (
                <input
                    type={type}
                    className="
                        w-full h-full bg-cfm-transparent 
                        text-cfm-white
                        font-cfm-cormorant text-sm 
                        py-1 px-2 
                        border-b-[1px] border-cfm-lighter-grey 
                        transition-all duration-300 transition-ease-in-out
                        focus:outline-none focus:border-cfm-white
                    "
                    value={value}
                    onChange={onChange}
                />
            )}
        </div>
    )
}

export default CfmInput
