import React,{useState} from 'react'

 const HooksCounter = () => {
     const[items,setItems]=useState()
     const addItem=(e)=>{
         
         e.preventDefault();
         items ?alert (items):alert("items should not be empty");
    
           
        

     }

     const array=[{
         name:"Rahul",
         age:22, gender:
         "male"
     },
     {name:"Pankaj",
      age:21, 
      gender:"female"
    },
    
    {name:"Praneet", 
    age:24,
     gender:"male"},
     {name:"Ashwini", 
    age:24,
     gender:"male"},
     {name:"Gaurav", 
    age:24,
     gender:"male"} ]




     const submit=(e)=>
     {
        
setItems(e.target.value)


     }


    
     return (
        <div>
            <form>

            
            
        
            <ul>
                {
                    array.map(item => (
                    <li key={item.name}>{item.name}<input type="radio" name="name" value={item.name} onChange={submit} /></li>
                                   ))}
            </ul>

            <button onClick={addItem}>Submit</button>
   <button type="reset">Reset</button>
            </form>
        
        </div>
        
    )
}
export default HooksCounter
