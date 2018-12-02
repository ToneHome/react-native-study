/*
 * File: com2.js
 * Project: AwesomeProject
 * File Created: Sunday, 28th October 2018 3:39:20 pm
 * Author: litong (you@you.you)
 * -----
 * Desc: 第二个 react-natvie 组件
 * Last Modified: Sunday, 28th October 2018 8:12:57 pm
 * Modified By: litong (you@you.you>)
 * -----
 * Copyright 2018 - 2018 Your Company, Your Company
 */


import React, { Component } from "react";
import { Image, StyleSheet, Text, View, Button,} from "react-native";
type Props = {};

export default class Com2 extends Component<Prop> {
    constructor(props) {
        super(props)
        this.state = {
            title:"Comp2"
        }
    }
    render(){
        return (
            <View>
                <Text>{this.state.title}</Text>
            </View>
        )
    }
}