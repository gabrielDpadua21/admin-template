
const Logo = () => {
    return (
        <div className={`h-10 w-10 bg-white rounded-full flex flex-col items-center justify-center`}>
            <div className={`h-3 w-3 rounded-full bg-red-600 mb-0.5`}></div>
            <div className={`flex mt-0.5`}>
                <div className={`h-3 w-3 rounded-full bg-blue-500 mr-0.5`}></div>
                <div className={`h3 w-3 rounded-full bg-green-600 ml-0.5`}></div>
            </div>
        </div>
    )
}

export default Logo;