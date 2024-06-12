import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { ButtonIcon, SpinnerMini } from "../../ui";
import { useLogout } from "./useLogout";

function Logout() {
  const { logout, isLoggingOut } = useLogout();
  return (
    <ButtonIcon disabled={isLoggingOut} onClick={logout}>
      {!isLoggingOut ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
