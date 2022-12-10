import React,{useState} from 'react'

const Form = () => {
    const [data,setData] = useState({
        voornaam : '',
        achternaam : '',
        emailadres : '',
    })
    const {voornaam,achternaam,emailadres} =data;
    const changeHandler = e =>{
        setData({...data,[e.target.name]:[e.target.value]})
    }
    const submitHandler = e =>{
        e.preventDefault();
        console.log(data);
    }
    return ( 
    <div className='Form'>
        <center>
            <form onSubmit={submitHandler}>
             <input type="text" name="voornaam" value={voornaam} onChange={changeHandler}/>
             <input type="text" name="achternaam" value={achternaam} onChange={changeHandler}/>
             <input type="email" name="emailadres" value={emailadres} onChange={changeHandler}/>
             <input type="submit" name="submit"/> <br />
            </form>
        </center>
    </div>
     );
}
 
export default Form;