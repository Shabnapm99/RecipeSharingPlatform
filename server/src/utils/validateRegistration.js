
export const validateRegistration = ({ name, email, password, occupation }) => {
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passWordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9])[A-Za-z].{7,}$/;

    if (!name || !email || !password || !occupation) {
        return "Please provide the required details"
    };

    if (!emailRegex.test(email)) {
        return "Invalid email"
    };

    if (!passWordRegex.test(password)) {
        return "Weak password"
    };

    return null;
};