

export default function Button ({buttonstyle,buttonName,onClick}){

return(
    <button
    onClick={onClick}
   // type="submit"
    className={`${buttonstyle}`}
    >
   {buttonName}
    </button>
)  

}
