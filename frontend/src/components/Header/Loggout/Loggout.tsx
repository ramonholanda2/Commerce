import { useHistory } from "react-router-dom";
import { auth } from "../../../services/firebase";
import { LoggoutContainer, LoggoutLink } from "./styles";

const Loggout = () => {
    const { push } = useHistory();
    function signout() {
        auth.signOut().then(resp => {
            push("/login");
        })
    }
    return (
        <LoggoutContainer>
            <LoggoutLink onClick={signout}>
                sair
            </LoggoutLink>
        </LoggoutContainer>
    )
}

export default Loggout
