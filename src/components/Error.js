import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError();
    return (
        <div className="text-4xl text-green-400">
            <h1>Oops!!</h1>
            <h2>Something Went Wrong</h2>
            <h2>{err.status + " :  " + err.statusText}</h2>
        </div>
    );
};

export default Error