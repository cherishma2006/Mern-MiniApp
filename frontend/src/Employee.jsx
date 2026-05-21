import {useLocation} from "react-router";

function Employee() {
  //read state received in navigation 
    const { state } = useLocation();

  return (
    <div className="p-16 text-center text-3xl">
    <p className="">{state.Name}</p>
    <p className="">{state.email}</p>
    <p className="">{state.mobile}</p>
    <p className="">{state.designation}</p>
    <p className="">{state.companyName}</p>
      
    </div>
  )
}

export default Employee