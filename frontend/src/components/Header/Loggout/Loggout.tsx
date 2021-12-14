import { useAuthContext } from "../../../contexts/AuthContext";
import { LoggoutContainer, LoggoutLink } from "./styles";

const Loggout = () => {
    const { logout } = useAuthContext();
    return (
        <LoggoutContainer>
            <LoggoutLink onClick={logout}>
                sair
            </LoggoutLink>
        </LoggoutContainer>
    )
}

export default Loggout
