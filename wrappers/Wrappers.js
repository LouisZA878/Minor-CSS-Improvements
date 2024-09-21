import ReactQuery from "./provider/ReactQuery";

const Wrapper = ({ children }) => {
    return (
        <ReactQuery>
            {children}
        </ReactQuery>
    );
}

export default Wrapper