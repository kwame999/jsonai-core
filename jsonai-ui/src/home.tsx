
import TopNavigation from "./top-nav"

const HomeComponent = () => {

    return(
        <div className=" flex flex-col w-full">
        <TopNavigation></TopNavigation>

        <div className="flex flex-col w-full px-14  items-center ">
            <div className=" flex justify-center items-center flex-col mt-10">

                <div className=" flex flex-col justify-center item-center text-center  mt-32 gap-3">
                    <h1 className="  text-5xl">AI CONTEXT CONVERT JSON</h1>
                    <p>Get reliable context from, GPT5, Gemini, Sora,  by prompting using JSON</p>
                </div>

                <form action="" className="text-center mt-8 flex  justify-between  border-2 border-solid
                                            w-full items-center bg-white rounded-full p-1.5 mx-4 
                                            text-black">

                    <input placeholder="Enter a command"  className="w-full p-1 rounded-full  "/>

                    <div className="flex justify-center items-center">

                        <button className="   mx-2 ">


                            <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0 2.75C0 1.7835 0.783502 1 1.75 1H14.25C15.2165 1 16 1.7835 16 2.75V13.25C16 14.2165 15.2165 15 14.25 15H1.75C0.783501 15 0 14.2165 0 13.25V2.75ZM1.75 2.5C1.61193 2.5 1.5 2.61193 1.5 2.75V4.5H3.5V2.5H1.75ZM5 2.5V4.5H7V2.5H5ZM8.5 2.5V4.5H14.5V2.75C14.5 2.61193 14.3881 2.5 14.25 2.5H8.5ZM14.5 6H1.5V13.25C1.5 13.3881 1.61193 13.5 1.75 13.5H14.25C14.3881 13.5 14.5 13.3881 14.5 13.25V6Z" fill="#4D545C"/>
                            </svg>


                        </button>

                        <button aria-label="Enter" className="bg-black p-1 rounded-full tex">
                            
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 12L16 7M21 12L16 17M21 12H3" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>


                        </button>
                        
                    </div>

                </form>
            

                
            </div>


            <div className="flex text-left bg-red-500   mt-20 rounded-t-3xl flex-col px-1.5 w-2/3  h-full">
                    <div className="flex items-center justify-between p-8">
                        <div className=" flex flex-col ">
                            <h4>Your Objects</h4>
                            <p>Your added objects to be parsed</p>
                        </div>
                    
                        <button>
                            <svg width="18" height="18" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5.90625C0 5.06056 0.685564 4.375 1.53125 4.375H2.84375C3.20619 4.375 3.5 4.66881 3.5 5.03125C3.5 5.39369 3.20619 5.6875 2.84375 5.6875H1.53125C1.41044 5.6875 1.3125 5.78544 1.3125 5.90625V12.4688C1.3125 12.5896 1.41044 12.6875 1.53125 12.6875H8.09375C8.21456 12.6875 8.3125 12.5896 8.3125 12.4688V11.1562C8.3125 10.7938 8.60631 10.5 8.96875 10.5C9.33119 10.5 9.625 10.7938 9.625 11.1562V12.4688C9.625 13.3144 8.93944 14 8.09375 14H1.53125C0.685564 14 0 13.3144 0 12.4688V5.90625Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.375 1.53125C4.375 0.685564 5.06056 0 5.90625 0H12.4688C13.3144 0 14 0.685564 14 1.53125V8.09375C14 8.93944 13.3144 9.625 12.4688 9.625H5.90625C5.06056 9.625 4.375 8.93944 4.375 8.09375V1.53125ZM5.90625 1.3125C5.78544 1.3125 5.6875 1.41044 5.6875 1.53125V8.09375C5.6875 8.21456 5.78544 8.3125 5.90625 8.3125H12.4688C12.5896 8.3125 12.6875 8.21456 12.6875 8.09375V1.53125C12.6875 1.41044 12.5896 1.3125 12.4688 1.3125H5.90625Z" fill="white"/>
                            </svg>
                        </button>
                    </div>
                    <div className=" bg-blue-500 mx-7 rounded-t-3xl p-6 h-screen overflow-y-scroll">
                        <p>test</p>
                    </div>

            </div>

        </div>
        </div>
    )



}

export default HomeComponent