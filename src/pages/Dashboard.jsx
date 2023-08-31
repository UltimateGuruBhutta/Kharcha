import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helper";
import Intro from "../components/Intro";
import { toast } from "react-toastify";

export function dashboardLoader() {
  const userName = fetchData("userName");
  return { userName };
}

export async function dashboardAction({request}){
  const data= await request.formData();
try{
  throw new Error(" heilo")
  const formData=Object.fromEntries(data);
  localStorage.setItem("userName",JSON.stringify(formData.userName))
return toast.success(`Welcome , ${formData.userName}`)
}
catch(e){
  throw new Error("There was a problem creating your account.")

}
}

const Dashboard = () => {
  const { userName } = useLoaderData();
   

  return <div>
   {userName ? (<p>{userName}</p>):(<Intro/>)}
    </div>;
};

export default Dashboard;
