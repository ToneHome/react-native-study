/*
 * File: com1.js
 * Project: AwesomeProject
 * File Created: Sunday, 28th October 2018 3:29:09 pm
 * Author: litong (you@you.you)
 * -----
 * Desc: 第一个react-native 组件
 * Last Modified: Sunday, 28th October 2018 8:04:18 pm
 * Modified By: litong (you@you.you>)
 * -----
 * Copyright 2018 - 2018 Your Company, Your Company
 */


import React, { Component } from "react";
import { Image, StyleSheet, Text, View, Button,} from "react-native";
type Props = {};

export default class Com1 extends Component<Prop> {
    constructor(props) {
        super(props)
        this.state = {
            title:"Comp1"
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