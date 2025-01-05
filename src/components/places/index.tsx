import { useRef } from "react";
import { Text, useWindowDimensions} from "react-native";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { router } from "expo-router";

import { s } from "./style"

import { Place, PlacesProps } from "../place";

type Props = {
    data: PlacesProps[]
}

export function Places({data}: Props) {
    const dimensions = useWindowDimensions()
    const BottomSheetRef = useRef<BottomSheet>(null)

    const snapPoints = { 
        min: 278,
        max: dimensions.height - 120
        
    }

    return (
        <BottomSheet 
            ref={BottomSheetRef} 
            snapPoints={[snapPoints.min, snapPoints.max]} 
            handleIndicatorStyle={s.indicator}
            backgroundStyle={s.container}
            enableOverDrag={false}
            > 
            <BottomSheetFlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (<Place data={item} onPress={() => router.navigate(`/market/${item.id}`)}/> 
    )}
                contentContainerStyle={s.container}
                ListHeaderComponent={() => (
                    <Text style={s.title}>Explore locais perto de você</Text>)}
                showsVerticalScrollIndicator={false}
            />
        </BottomSheet>
    )
}