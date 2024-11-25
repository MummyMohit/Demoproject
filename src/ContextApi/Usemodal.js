import { useContext } from "react";
import UserContext from "./UserContext";

const useModal = () => useContext(UserContext);
export default useModal
