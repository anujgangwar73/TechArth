const Spinner = ({ size = 32, stroke = "#000" }) => {
    return (
        <div className="spinner">
            <svg width={size} height={size} stroke={stroke} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g>
                    <circle cx="12" cy="12" r="9.5" fill="none" strokeWidth="3"></circle>
                </g>
            </svg>
        </div>
    );
};

export default Spinner;  