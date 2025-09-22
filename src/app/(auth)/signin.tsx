import ShareButton from "@/components/button/share.button"
import SocialButton from "@/components/button/social.button"
import ShareInput from "@/components/input/share.input"
import { APP_COLOR } from "@/utils/constant"
import { LoginSchema } from "@/utils/validate.schema"
import { Link } from "expo-router"
import { Formik } from 'formik'
import { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
// import { useCurrentApp } from "@/context/app.context"

const styles = StyleSheet.create({
    container: { flex: 1, marginHorizontal: 20, gap: 10 },
});

const SignInPage = () => {
    // const [email, setEmail] = useState<string>("");
    // const [password, setPassword] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    // const { setAppState } = useCurrentApp()

    // const handleLogin = async (email: string, password: string) => {
    //     try {
    //         setLoading(true)
    //         const res = await loginAPI(email, password)
    //         if (res.data) {
    //             await AsyncStorage.setItem("access_token", res.data.access_token)
    //             setAppState(res.data)
    //             router.replace({ pathname: "/(tabs)" });
    //         }
    //         else {
    //             const m = Array.isArray(res.message) ? res.message[0] : res.message
    //             Toast.show(m, {
    //                 duration: Toast.durations.LONG,
    //                 textColor: "white",
    //                 backgroundColor: APP_COLOR.ORANGE,
    //                 opacity: 1
    //             });

    //             if (res.statusCode === 400) {
    //                 router.replace({
    //                     pathname: "/(auth)/verify",
    //                     params: { email: email, isLogin: 1 }
    //                 })
    //             }
    //         }
    //     }
    //     catch (error) {
    //         console.log(">>>>check error:", error)
    //     }
    //     finally {
    //         setLoading(false)
    //     }
    // }

    return (

        <Formik
            validationSchema={LoginSchema}
            initialValues={{ email: '', password: '' }}
            // onSubmit={(values) => handleLogin(values.email, values.password)}
            onSubmit={() => alert("me")}
        >
            {({ handleChange, handleBlur, handleSubmit, values, errors }) => (

                <View style={styles.container}>
                    <View>
                        <Text>IMG</Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize: 25,
                                fontWeight: "bold",
                                marginVertical: 30,
                            }}
                        >
                            Login
                        </Text>
                    </View>

                    <ShareInput
                        title="Email"
                        keyboardType="email-address"
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        error={errors.email}
                    />
                    <ShareInput
                        title="Password"
                        secureTextEntry={true}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        error={errors.password}
                    />

                    <ShareButton
                        title="Login"
                        onPress={handleSubmit}
                        textStyle={{ color: "#fff", fontSize: 19 }}
                        buttonStyle={{
                            justifyContent: "center",
                            borderRadius: 30,
                            backgroundColor: APP_COLOR.BLUE,
                            paddingVertical: 15,
                        }}
                        pressStyle={{ alignSelf: "stretch" }}
                        loading={loading}
                    />

                    <View style={{
                        marginVertical: 15,
                        flexDirection: "row",
                        gap: 10,
                        justifyContent: "center"
                    }}>
                        <Text style={{
                            textAlign: "center",
                            color: "black"
                        }}>
                            Chưa có tài khoản
                        </Text>
                        <Link href={"/(auth)/signup"}>
                            <Text style={{
                                textAlign: "center",
                                color: "black",
                                textDecorationLine: "underline"
                            }}>
                                Đăng ký.
                            </Text>
                        </Link>
                    </View>
                    <SocialButton title="Sign up with" textColor="black" />
                </View>
            )}
        </Formik>
    );
}

export default SignInPage
