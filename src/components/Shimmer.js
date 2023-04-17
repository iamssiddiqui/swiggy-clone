//import HeaderComponent from "./Header";

const Shimmer = () => {
    return (
        <div className="restraurant-list">
            {Array(15)
            .fill("")
            .map((e, index) => (
                <div key={index} className="shimmer-card"></div>
            ))}
    </div>
    );
};

export default Shimmer