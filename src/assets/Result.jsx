import React from "react";
function Result({secretNum,term}){
    let result;
    console.log('result is ',result)
        if(term){

            if(secretNum < term){
                result ='lover'
            }else if (secretNum > term){
                result = 'higer'
            }else if  (secretNum == term){
                result = 'yeipee.... Its Number is Currect '
            }
        }

    return(
        <>
        <h3>Your Guess Number : {result}</h3>
        </>
    )
}
export default Result;