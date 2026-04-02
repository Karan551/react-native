import { View, Button, TextInput, StyleSheet, Alert, Platform, Text, TouchableOpacity } from "react-native";
import { useState } from "react";
import React from "react";

const Login = () => {
    const [email, setEmail] = useState("");
    const [pwd, setPwd] = useState("");
    const [errorText, setErrorText] = useState("");




    const isEmail = (text) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(text);
    };

    const handleLogin = () => {
        if (email == "" || pwd == "") {
            setErrorText("Please enter a email and password.");

            return;

        }
        if (!isEmail(email) || pwd.length < 6) {
            // alert("Please enter a valid email address and password length should be greater than 6.");

            setErrorText("Please enter a valid email address and password length should be greater than 6.");
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

    // if (errorText) {
    //     setTimeout(() => {
    //         setErrorText("");
    //     }, 3000);
    // }

    return (
        <View style={styles.container}>

            {
                errorText && <View style={styles.showError}>
                    <Text style={styles.errorText}>{errorText}</Text>

                    <TouchableOpacity onPress={() => setErrorText("")}>
                        <Text style={styles.delete}>❌</Text>
                    </TouchableOpacity>
                </View>
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

            <Button
                title="Submit"
                color={"#6974D1"}
                accessibilityLabel="Submit"
                onPress={handleLogin}
            />
        </View>
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
    text: {},
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
        paddingBlock:  Platform.OS == "web" ? 15 : 12,
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
        paddingHorizontal:  Platform.OS == "web" ? 15 : 7,
        paddingBlock:  Platform.OS == "web" ? 12 : 5,
        fontSize:  Platform.OS == "web" ? 15 : 10,
        borderRadius: 10
    }
});