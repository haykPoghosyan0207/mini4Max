import {registerUser, getUserData, updateUserDate, loginUser} from "../HttpServices/UserHttpServices.js";

export const handleRegister = async (userData, setUserData, setErrorMessages, navigate) => {
    try {
        const response = await registerUser(userData);
        if (response.data && response.data.access_token) {
            localStorage.setItem("access_token", response.data.access_token);
            localStorage.setItem("refresh_token", response.data.refresh_token);

            window.location.reload()

            const token = response.data.access_token;
            const data = await getUserData(token);
            if (data) {
                setUserData((prevData) => ({
                    ...prevData,
                    firstname: data.data.first_name || "",
                    lastname: data.data.last_name || "",
                    email: data.data.email || "",
                    phone: data.data.phone || "",
                    password: "",
                }));
                setErrorMessages([]);

                if (navigate) {
                    navigate("/profile");
                }
            }
        } else {
            setErrorMessages(["Սերվերն ուղարկել է անհասկանալի պատասխան։"]);
        }
    } catch (error) {
        if (error.response && error.response.data) {
            const backendError = error.response.data;
            if (backendError.errors) {
                const allErrors = Object.values(backendError.errors).flat();
                setErrorMessages(allErrors);
            } else if (backendError.message) {
                setErrorMessages([backendError.message]);
            } else {
                setErrorMessages(["Something went wrong during registration"]);
            }
        } else {
            setErrorMessages([error.message || "Request failed unexpectedly"]);
        }
        console.log("Registration Error:", error.response?.data || error.message);
    }
};


export const handleUpdate = async (userData, setUserData) => {
    try {
        const token = localStorage.getItem("access_token");
        const updatedData = {
            first_name: userData.firstname,
            last_name: userData.lastname,
            email: userData.email,
            phone: userData.phone,
        };

        const response = await updateUserDate(token, updatedData);

        setUserData((prevData) => ({
            ...prevData,
            firstname: response.first_name || prevData.firstname,
            lastname: response.last_name || prevData.lastname,
            email: response.email || prevData.email,
            phone: response.phone || prevData.phone,
        }));
    } catch (error) {
        console.error(error.message);
    }
};
export const fetchUserData = async (setUserData) => {
    let token = localStorage.getItem("access_token");
    if (token?.startsWith('"') && token?.endsWith('"')) {
        token = token.slice(1, -1);
    }
    // console.log("TOKEN  " + token );

    if (token) {
        try {
            const data = await getUserData(token);
            console.log("Fetched user data:", data);
            if (data) {
                setUserData({
                    firstname: data.data.first_name || "",
                    lastname: data.data.last_name || "",
                    email: data.data.email || "",
                    phone: data.data.phone || "",
                });
            }
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    }
};
export const handleLogin = async (userData, navigate, setEmailError) => {
    try {
        const response = await loginUser(userData);

        const accessToken = response.data?.access_token;
        const refreshToken = response.data?.refresh_token;

        if (accessToken) {
            localStorage.setItem("access_token", JSON.stringify(accessToken));
            localStorage.setItem("refresh_token", JSON.stringify(refreshToken));
            navigate("/profile");
        } else {
            console.log("Login Failed", response);
        }
    } catch (error) {
        if (error.response && error.response.status === 401) {
            setEmailError("Սխալ մեյլ կամ գաղտնաբառ");
        } else {
            setEmailError("Ինչ-որ սխալ տեղի ունեցավ");
        }
        console.log("Login Error:", error.response?.data || error.message);
    }
};