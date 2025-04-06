module.exports = function ({ to, children }) {
    return (
        <a href={to} className="text-sm   hover:underline transition duration-150 ease-in-out">
            {children}
        </a>
    );
};