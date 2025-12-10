
interface TabProps{
    name: string
}

const Tab = ({name}: TabProps) => {
        return(

                    <div className="bg-gray-900 flex justify-between p-0.5 items-center px-3">
                    <p>{name}</p>
                    
                    <svg width="20" height="20" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_56_371)">
                        <path d="M2.08095 2.0812V6.17426C2.08095 6.56279 2.08095 6.75692 2.15656 6.90532C2.22307 7.03586 2.32912 7.14219 2.45966 7.2087C2.60791 7.28424 2.80209 7.28424 3.18986 7.28424H5.13447C5.52224 7.28424 5.71614 7.28424 5.86439 7.2087C5.99493 7.14219 6.10133 7.03586 6.16784 6.90532C6.24338 6.75707 6.24338 6.5631 6.24338 6.17533V2.0812M2.08095 2.0812H2.77469M2.08095 2.0812H1.38721M2.77469 2.0812H5.54964M2.77469 2.0812C2.77469 1.75796 2.77469 1.59641 2.82749 1.46893C2.8979 1.29894 3.03287 1.16381 3.20285 1.0934C3.33034 1.04059 3.49205 1.04059 3.81529 1.04059H4.50903C4.83228 1.04059 4.9939 1.04059 5.12139 1.0934C5.29137 1.16381 5.42639 1.29894 5.4968 1.46893C5.54961 1.59641 5.54964 1.75796 5.54964 2.0812M5.54964 2.0812H6.24338M6.24338 2.0812H6.93712" stroke="#E42E2E" stroke-width="0.693739" stroke-linecap="round" stroke-linejoin="round"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_56_371">
                        <rect width="8.32487" height="8.32487" fill="white"/>
                        </clipPath>
                        </defs>
                    </svg>

            </div>


        )

}


const GuiModal = () => {

    return(
        <div className="bg-purple-500 p-2 rounded-2xl px-8">
            <h2 className="my-5 text-2xl">Create JSON</h2>
            <div>
                <form action="" className="flex gap-8 mb-5 ">

                    <input type="text" placeholder="Add the object name" name="" id="" className="pl-5 py-2 rounded-lg  text-sm" />
                    <input type="text" placeholder="Add key value pairs separated by commas" name="" id="" className="pl-5 py-2  border-2 rounded-lg text-sm" size={40} />

                    <button type="submit" className="bg-white p-2 rounded-full">
                        
                    <svg width="24" height="24" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.99805 3.99596H3.99602M3.99602 3.99596H5.99399M3.99602 3.99596V5.99392M3.99602 3.99596V1.99799" stroke="black" stroke-width="0.66599" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                    </button>
                </form>

            </div>
            <div className="flex flex-col gap-0 mb-4">
                <h5>Your objects</h5>
                <p className="">Your objects to be parsed</p>
            </div>

            <div className="container border-2  h-40 rounded-xl mb-4 overflow-y-scroll">
            <Tab name="Character"/>

            </div>
        
            <div className="flex gap-5 justify-end">
                <button className="rounded-lg bg-white p-1 text-black w-20">Cancel</button>
                <button className="rounded-lg bg-white p-1 text-black w-20">Create</button>
            </div>
        </div>
    )

}


export default GuiModal