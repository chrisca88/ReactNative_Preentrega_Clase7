import { StyleSheet, View } from "react-native"
import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigation } from '@react-navigation/native'
import { useSignInMutation } from "../Services/authServices"
import { isAtLeastSixCharacters, isValidEmail } from "../Validations/auth"
import { setUser } from "../Features/User/userSlice"
import { insertSession } from "../SQLite"
import LoginForm from "../Components/LoginForm"



const LoginScreen = () => {
    const navigation = useNavigation();
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
  
    const [triggerSignIn, resultSignIn] = useSignInMutation()
    const dispatch = useDispatch()

    const onSubmit = (email, password) => {

        const isValidVariableEmail = isValidEmail(email)
        const isCorrectPassword = isAtLeastSixCharacters(password)

        if (isValidVariableEmail && isCorrectPassword) {
            triggerSignIn({
                email,
                password,
                returnSecureToken: true,
            });
        }

        if (!isValidVariableEmail) setErrorEmail ("email or password is incorrect")
        else setErrorEmail('')
        if (!isCorrectPassword) setErrorPassword ("email or password is incorrect")
        else setErrorPassword('')
    };

    useEffect(()=> {
        (async ()=> {
            try {
                if(resultSignIn.isSuccess) {
                        await insertSession({
                        idToken: resultSignIn.data.idToken,
                        localId: resultSignIn.data.localId,
                        email: resultSignIn.data.email,
                    })

                    dispatch(setUser({
                        email: resultSignIn.data.email,
                        idToken: resultSignIn.data.idToken,
                        localId: resultSignIn.data.localId,
                        profileImage: "",
                        location: {
                            latitude: "",
                            longitude: "",
                        }
                    }))
                }
            } catch (error) {
                navigation.navigate('Error')
            }
        })()
    }, [resultSignIn])

    return (
        <View style={styles.main}>
        <LoginForm
          onSubmit={onSubmit}
          errorEmail={errorEmail}
          errorPassword={errorPassword}
          navigation={navigation}
        />
      </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
});