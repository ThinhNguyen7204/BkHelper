import { Redirect } from "expo-router"

const RootPage = () => {
    if (true) {
        return (
            <Redirect href={"/(auth)/signin"} />
        )
    }

    // return (
    //     <WelcomePage />
    // )
}

export default RootPage