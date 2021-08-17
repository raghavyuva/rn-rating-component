import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import IconforStar from "react-native-vector-icons/MaterialIcons";
import IconforHeart from "react-native-vector-icons/MaterialCommunityIcons";

const defaultprops = {
  color: "#900",
  starfilled: "star",
  staroutline: "star-outline",
  heartfilled: "heart",
  heartoutline: "heart-outline",
  size: 30,
  starmode: "star",
  heartmode: "heart",
  ratingview: {
    flexDirection: "row",
  },
  urlimagestyle: {
    width: 40,
    height: 40,
  },
};

const Ratingcomp = ({
  maxrating,
  mode,
  style,
  customiconfilled,
  customiconoutline,
  size,
  color,
  parentstyle,
  onChangeRate,
  defaultrate,
  isurlpresent,
  filledurl,
  outlineurl,
}) => {
  const StarRating = ({ item }) => {
    if (isurlpresent==true) {
      return (
        <Image
          source={item <= defaultrate ? { uri: filledurl } : {uri:outlineurl}}
          style={style ? style : defaultprops.urlimagestyle}
        />
      );
    }
    return (
      <IconforStar
        name={
          item <= defaultrate
            ? customiconfilled == null
              ? defaultprops.starfilled
              : customiconfilled
            : customiconoutline == null
            ? defaultprops.staroutline
            : customiconoutline
        }
        size={size ? size : defaultprops.size}
        style={style}
        color={color ? color : defaultprops.color}
      />
    );
  };

  const HeartRating = ({ item }) => {
    return (
      <IconforHeart
        name={
          item <= defaultrate
            ? customiconfilled == null
              ? defaultprops.heartfilled
              : customiconfilled
            : customiconoutline == null
            ? defaultprops.heartoutline
            : customiconoutline
        }
        size={size ? size : defaultprops.size}
        style={style}
        color={color ? color : defaultprops.color}
      />
    );
  };

  const Rating = () => {
    let count = [];
    for (let index = 1; index < maxrating + 1; index++) {
      count.push(index);
    }
    return (
      <View style={defaultprops.ratingview}>
        {count.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={(ele) =>
                onChangeRate
                  ? onChangeRate(item)
                  : alert("error:define onChangeRate function")
              }
            >
              <ActiveRenderer item={item} />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
  const ActiveRenderer = ({ item }) => {
    switch (mode) {
      case defaultprops.starmode:
        return <StarRating item={item} />;
      case defaultprops.heartmode:
        return <HeartRating item={item} />;
      default:
        return <StarRating item={item} />;
    }
  };

  return (
    <View style={parentstyle}>
      <Rating />
    </View>
  );
};

export default Ratingcomp;
