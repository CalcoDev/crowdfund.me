const BnWImage = ({ className, src, alt }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={`${className} transition duration-300 ease-in-out filter saturate-0 hover:saturate-100`}
        />
    )
}

export default BnWImage
