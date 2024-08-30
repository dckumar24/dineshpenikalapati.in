import { useRouteError } from "react-router-dom";
import notFoundLogo from '../../../assets/404.svg'

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="bg-black text-white h-screen flex flex-col items-center justify-center">
          <img src={notFoundLogo} className="w-3/5 h-3/5"></img>
        </div>
    );
}
