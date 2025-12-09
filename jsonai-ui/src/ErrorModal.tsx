interface ErrorModalProps  {
    errIcon: string,
    errMessage: string,
    errHint: string,
    errHelpLinks: string

}


const ErrorModal = ({errIcon, errMessage, errHint, errHelpLinks}: ErrorModalProps) => {

    return(
        <div className="">

            <div>
                {errIcon}
                <p>Oops something went wrong</p>
            </div>
            <>
                <p>{errMessage}</p>
                <p>{errHint}{errHelpLinks}</p>
                <button>OK</button>
            </>

        </div>
      
    )



}

export default ErrorModal