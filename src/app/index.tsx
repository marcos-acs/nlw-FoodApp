import { View, Text } from "react-native";
import { router } from 'expo-router'

import { Welcome } from "@/components/welcome";
import { StepsContainer } from "@/components/stepsContainer";
import { Button } from "@/components/button";
//import { IconBackground } from "@tabler/icons-react-native";

export default function Index(){
    return (
        <View 
            style={{
                flex: 1,
                padding: 40,
                gap: 40
            }}>
            <Welcome />
            <StepsContainer />

            <Button onPress={ () => router.navigate("/home")}>
                <Button.Title>Começar</Button.Title>
            </Button>
        </View>
    )
}

