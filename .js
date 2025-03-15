import {useState} from "react";

export default function calci()
{
    const[num1,setnum1]=useState("");
    const[num2,setnum2]=useState("");
    const[result,setresult]=useState("");

    const calculate=()=>{
        const n1= parseFloat(num1);
        const n2= parseFloat(num2);

        if(isNaN(n1) || isNaN(n2))
        {
            alert("please enter valid numbers");
        }

        switch(opeara)



    };



}