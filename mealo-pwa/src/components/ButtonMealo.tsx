import React from "react";
import { Colors, Effects } from "../variables";

type ButtonMealoProps = {
    onClick?: () => void,
    label: string,
    buttonStyle: "primary" | "disabled" | "darkGreen" | "lightGreen",
    style?: React.CSSProperties,
}

export default function ButtonMealo({onClick, label, buttonStyle, style}: ButtonMealoProps) {
    let selectedStyle: string;
    let textColor: string = "";

    switch (buttonStyle) {
        case "primary":
            selectedStyle = Colors.primaryColor;
            textColor = "#fff";
            break;
        case "disabled":
            selectedStyle = Colors.disabled;
            break;
        case "darkGreen":
            selectedStyle = Colors.secondaryColorDark;
            textColor = "#fff";
            break;
        case "lightGreen":
            selectedStyle = Colors.secondaryColor;
            textColor = "#fff"
            break;
        default:
            selectedStyle = Colors.primaryColor;
    };

    const styles = ({
        button: {
            backgroundColor: selectedStyle,
            shadowColor: "#000000",
            shadowOffset: {
                width: 2,
                height: 4,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4.59,
            borderRadius: 17,
            width: "80%",
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            border: "none",
            boxShadow: Effects.boxShadow
        },
    });

    return (
        <button onClick={onClick} style={{...styles.button, ...style}}>
            <p style={{color: textColor, fontSize: 18, fontFamily: "Roca", margin: 0, display: "flex", justifyContent: "center"}}>{label}</p>
        </button>
    );
};