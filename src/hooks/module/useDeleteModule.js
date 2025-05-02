import axios from "axios";
import { toast } from "react-toastify";
import { base_url } from "../../pages/utils/constants";

const useDeleteModule = () => {
  const [loading, setLoading] = useState(false);

  const deleteModule = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.delete(`${base_url}/module/deleteModule/${id}/`);
      const data = res.data;
      toast.success("Module  Successfully Deleted");
    } catch (err) {
      toast.err(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, deleteModule };
};

export default useDeleteModule;
