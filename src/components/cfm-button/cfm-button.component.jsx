const CfmButton = ({ className, onClick, children }) => {
    return (
        <button
            className={`
                ${className || ''}
                transition duration-300 ease-in-out
                bg-cfm-transparent 
                border border-cfm-white
                px-4 py-2 rounded
                
                font-cfm-spartan font-extralight 
                text-cfm-white text-center text-sm
                tracking-cfm-3 indent-cfm-3
                
                hover:bg-cfm-white hover:text-cfm-light-grey
                hover:scale-110
                
                active:scale-90
            `}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default CfmButton
