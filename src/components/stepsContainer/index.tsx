import { Text, View } from "react-native";
import { IconMapPin, IconQrcode, IconPin } from "@tabler/icons-react-native";

import { s } from "./style";
import { Steps } from "../steps"

export function StepsContainer(){
    return (
        <View style={s.container}>
            <Text style={s.title}>Veja como funciona:</Text>
            <Steps
                icon={IconMapPin}
                title="Encontre estabelecimentos" 
                description="Veja locais perto de você que são parceiros Nearby"
            />
            <Steps
                icon={IconQrcode}
                title="Ative o cupom com QR Code" 
                description="Escaneie o código no estabelecimento para usar o benefício"
            />
            <Steps 
                icon={IconPin}
                title="Garanta vantagens perto de você"
                description="Ative cupons onde estiver, em diferentes tipos de estabelecimento"
            />

        </View>
    )
}