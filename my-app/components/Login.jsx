import { View, Button, TextInput, StyleSheet, Alert, Platform, Text, TouchableOpacity } from "react-native";
import { useState, useEffect } from "react";
import { LinearGradient } from 'expo-linear-gradient';

const Login = () => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");

    const [emailError, setEmailError] = useState("");
    const [pwdError, setPwdError] = useState("");





    const isEmail = (text) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(text);
    };

    const isValidPassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

        return passwordRegex.test(password);
    };

    const handleLogin = () => {

        if (!email || !pwd) {
            // setEmailError(!email ? "Email required." : "");
            setEmailError(!email ? "Email Required." : !isEmail(email) ? "Email not valid format." : "");

            // console.log(!email ? "Email Required." : !isEmail(email) ? "Email not valid format." : "");



            // setPwdError(!pwd ? "Password required." : "");
            setPwdError(!pwd ? "Password Required." : "");

            return;

        }
        if (!isEmail(email)) {
            setEmailError("Please enter a valid email address.");
            console.log("Invalid email");
            return;
        }


        if (!isValidPassword(pwd)) {
            setPwdError("Password must be 6+ chars, include uppercase, lowercase, number, and symbol.");
            console.log("Invalid password");
            return;
        }


        if (Platform.OS == "android") {
            if (isEmail(email)) {
                Alert.alert(`Welcome ${email}.`);
                setPwd("");
                setEmail("");
            }

        } else if (Platform.OS == "web") {
            if (isEmail(email)) {
                alert(`Welcome ${email}.`);
                console.log("Login successfull.");
                setPwd("");
                setEmail("");
            }
        }
    };

    useEffect(() => {
        if (emailError || pwdError) {
            const timer = setTimeout(() => {
                setEmailError("");
                setPwdError("");
            }, 3000);

            return () => clearTimeout(timer);
        }

    }, [emailError, pwdError]);

    return (
        <>
            <LinearGradient colors={["#6974D1", "#9A8DFF"]} style={styles.container}>
                <View >
                    <Text style={styles.heading}>Login</Text>
                    {

                        emailError ?
                            <View style={styles.showError}>
                                <Text style={styles.errorText}>{emailError}</Text>

                                <TouchableOpacity onFocus={() => setEmailError("")}>
                                    <Text style={styles.delete}>❌</Text>
                                </TouchableOpacity>
                            </View> : null
                    }
                    <TextInput
                        style={styles.textInput}
                        value={email}
                        onChangeText={setEmail}
                        placeholder="Enter your email:: "
                        keyboardType="email-address"
                    />


                    <TextInput
                        style={styles.pwd}
                        value={pwd}
                        onChangeText={setPwd}
                        placeholder="Enter your Password:: "
                        secureTextEntry={true}

                    />

                    {
                        pwdError ?
                            <View style={[styles.showError, styles.pwdError]}>
                                <Text style={styles.errorText}>{pwdError}</Text>

                                <TouchableOpacity onPress={() => setPwdError("")}>
                                    <Text style={styles.delete}>❌</Text>
                                </TouchableOpacity>
                            </View>
                            : null
                    }


                    <Button
                        title="Submit"
                        color={"#6974D1"}
                        accessibilityLabel="Submit"
                        onPress={handleLogin}
                    />
                </View>
            </LinearGradient>
        </>
    );
};


export default Login;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        borderRadius: 10,
        padding: 10,
    },
    btnContainer: {},
    btn: {},
    heading: {
        fontSize: 50,
        fontWeight: 700,
        textAlign: "center",
        color: "#407114",
        fontFamily: "OpenSans-Bold",
        color: "#000"
    },
    textInput: {
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 18,
        padding: 10,
        marginBlock: 15,

    },
    pwd: {
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 18,
        padding: 10,
        marginBlock: 15
    },
    showError: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#CE182C",
        paddingHorizontal: Platform.OS == "web" ? 20 : 12,
        paddingBlock: Platform.OS == "web" ? 15 : 12,
        borderRadius: 10,
        alignItems: "center"

    },
    errorText: {
        color: "#f5f5f5",
        fontWeight: "bold",
        fontSize: Platform.OS == "web" ? 18 : 12,
    },
    delete: {
        backgroundColor: "#fff",
        paddingHorizontal: Platform.OS == "web" ? 15 : 7,
        paddingBlock: Platform.OS == "web" ? 12 : 5,
        fontSize: Platform.OS == "web" ? 15 : 10,
        borderRadius: 10
    },
    pwdError: {
        marginBottom: 10
    }
});