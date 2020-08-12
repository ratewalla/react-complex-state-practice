import React, {useState} from "react";

function App() {

  //create state with object
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });


  function updateFullName(event){
    
    const {value, name} = event.target;

    setFullName(prevValue => {
      if(name === "fName"){
        return {
          fName: value,
          lName: prevValue.lName
        }
      } else if(name === "lName"){
        return {
          fName: prevValue.fName,
          lName: value
        }
      }
    });

  };


  return (
    <div className="container">
      <h1>Hello {fullName.fName+" "+fullName.lName}!</h1>
      <form>
        <input onChange={updateFullName} value={fullName.fName} name="fName" placeholder="First Name" />
        <input onChange={updateFullName} value={fullName.lName} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
