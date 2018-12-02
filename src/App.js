/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Image, StyleSheet, Text, View, Button,Alert ,TouchableHighlight} from "react-native";
import list from './list';

var REQUEST_URL =
  "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";
type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      text:"",
      list:list,
      currentCom:0
    };
    // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向不对
    // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
    // this.fetchData = this.fetchData.bind(this);
  }
  componentDidMount() {
    // this.fetchData();
    this.setState({
      text:"我爱你，杨祝迪"
    })
  }
  fetchData() {
    fetch(REQUEST_URL)
      .then(response => response.json())
      .then(responseData => {
        // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
        this.setState({
          data: this.state.data.concat(responseData.movies),
          loaded: true
        });
      });
  }

  handel() {
    this.setState({
      text:"你好"
    })
  }
  _jumpToDay(index){
    this.render(index);
  }
  render(index) {
    let that = this;
    let box = this.state.list.map((item,index) => {
      return (
        <TouchableHighlight key={item.name} underlayColor="#eee" onPress={()=> this._jumpToDay(index)}>
          <View style={styles.box} >
            <Text >{item.name}</Text>
          </View>
        </TouchableHighlight>
      )
    });
   var tag = index || 0;
   var Comp = this.state.list[tag].component;
   console.log(tag);
    return (
      <View>
        <Text style={styles.center} >
          {this.state.text}
        </Text>
        <Button title="Learn More" onPress={this.handel.bind(this)}>
        </Button>
        {box}
        <Text>123</Text>
        <Comp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  center:{
    textAlign:"center",
    marginTop:200,
  },
  box:{
    width:100,
    height:100,
    backgroundColor:'red',
    marginLeft:25
  }
});
