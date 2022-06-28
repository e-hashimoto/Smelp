import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";

function Home() {

    const dispatch = useDispatch();

    const demo = (e) => {
        e.preventDefault();
        const demoAuth = "Demo-lition";
        const demoPassword = "password";
        return dispatch(
          sessionActions.login({
            credential: demoAuth,
            password: demoPassword,
          })
        );
      };
    return (
        <div>
            <h1>Smelp</h1>
            <button onClick={demo} className="demo-login" type="submit">Take a look!</button>
        </div>
    )
};

export default Home;
