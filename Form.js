import React ,{useState} from 'react'
import './form.css';
export default function Form()
{
    const[firstName,setFirstName]=useState("");
    const[error,setError]=useState(false);
    const handleSubmit=(event)=>{
        event.preventDefault();
        if(firstName.length===0)
        {
            setError(true);
        }
        else{
            console.log(firstName);
        }
    }
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <input type='text' onChange={e=>{setFirstName(e.target.value)}}></input>
                    <div>
                        {error && firstName.length===0 ? <p className='new'>enter the first name</p>:<p></p>}
                    </div>
                    <button type='submit'>submit</button>
                </form>
            </div>
        )
        }