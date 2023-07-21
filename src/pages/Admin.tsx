import { useEffect} from "react";

import useLoadingStore from "@/store/loadingStore";
import Loading from "@/components/Loading";
import LocalButton from "@/components/Button";


const Admin = () => {

  const loading = useLoadingStore((state: any) => state.loading);
  const setLoading = useLoadingStore((state: any) => state.setLoading);


  useEffect(() => {
    setLoading(true)
    const timeout = setTimeout(() => {
   
      window.location.replace('https://nota-frontend-git-dev-thekelvint.vercel.app/admin');
    }, 3000);
  
    return () => clearTimeout(timeout);
    setLoading(false)
  }, []);

  return <div>
      {loading ? (
          
          <Loading/>

      ) : (
        <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0 bg-primary">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center ">
        <p className="text-lg md:text-xl lg:text-2xl text-gray-500 my-12">Redirecting you to...</p>
            <p className="mb-12 text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-gray-300 mt-2">NOTA DASHBOARD</p>
            
            
            <LocalButton title="Return to Homepage" path='/home'/>
        </div>
       
    </div>
      )}
  </div>;
};

export default Admin