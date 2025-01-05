import { StyleSheet } from "react-native";
import { colors, fontFamily } from "@/styles/theme";

export const s = StyleSheet.create({
    container: {
        gap: 24, 
        flex: 1
    },

    title: {
        fontSize: 18,
        fontFamily: fontFamily.regular,
        color: colors.gray[500],
    },

    subTitle: {
        fontSize: 16,
        fontFamily: fontFamily.bold,
        color: colors.gray[600],
        marginTop: 12
    },

    paragraph: {
        fontSize: 16,
        fontFamily: fontFamily.regular,
        color: colors.gray[500],
        marginTop: 12
    }






})