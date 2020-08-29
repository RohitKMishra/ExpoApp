import React from "react";
import { View, Button } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function BottomSheet({ child, refRBSheetIn, containerStyle }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
      }}
    >
      <RBSheet
        ref={refRBSheetIn}
        closeOnDragDown={true}
        closeOnPressMask={true}
        customStyles={{
          wrapper: {
            backgroundColor: "transparent",
          },
          container: {
            height: hp(50),
            ...containerStyle,
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
        animationType={"slide"}
      >
        {child}
      </RBSheet>
    </View>
  );
}
