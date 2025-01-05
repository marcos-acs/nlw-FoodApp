import { Image, 
    TouchableOpacity, 
    View, 
    Text, 
    TouchableOpacityProps
 } from "react-native";

import { s } from "./style"
import { IconTicket } from "@tabler/icons-react-native";
import { colors } from "@/styles/colors";

export type PlacesProps = {
    id: string
    name: string
    description: string
    cupons: number
    cover: string
    address: string
}

type Props = TouchableOpacityProps & { 
    data: PlacesProps
}


export function Place({data, ...rest }: Props){
    return (
        <TouchableOpacity style={s.container} {...rest}>
            <Image style={s.image} source={{ uri: data.cover }}/>
            <View style={s.content}>
                <Text style={s.name}>{data.name}</Text>
                <Text style={s.description} numberOfLines={2}>{data.description}</Text>

                <View style={s.footer}>
                    <IconTicket size={16} color={colors.red.base}></IconTicket>
                    <Text style={s.tickets}>{data.cupons} cupons disponíveis</Text>
                </View>
            </View>

        </TouchableOpacity> 
    )
}