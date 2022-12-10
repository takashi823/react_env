import { useParams, useLocation} from "react-router-dom";

export const Urlparameter = () => {
    const { id } = useParams();
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    console.log(query);
    return(
        <div>
            <h1>Urlparameteページです！</h1>
            <p>パラメータは{id}</p>
            <p>クエリは{query.get("name")}</p>
        </div>
    );
};
