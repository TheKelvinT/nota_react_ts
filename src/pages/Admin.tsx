import { useEffect} from "react";

import useLoadingStore from "@/store/loadingStore";
import Loading from "@/components/Loading";


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
        <div>
            Redirecting to CMS Dashboard ...
    </div>
      )}
  </div>;
};

export default Admin