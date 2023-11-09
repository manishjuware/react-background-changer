import PropTypes from "prop-types";

function Button({ color, textColor, setBgColor }) {
    // component code
    return (
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl mx-1">
            <button
                className={`outline-none px-4 py-1 rounded-full text-${textColor} shadow-lg`}
                onClick={() => setBgColor(color)}
                style={{ backgroundColor: color }}>
                {color}
            </button>
        </div>
    );
}
export default Button;

Button.propTypes = {
    color: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired,
    setBgColor: PropTypes.func.isRequired,
};
