import React, { Component } from "react";
import { TouchableOpacity, View, TouchableWithoutFeedback } from "react-native";

export default class DoubleClick extends Component {
  constructor(props) {
    super(props);

    this.delayTime = props.delay ? props.delay : 200;
    this.firstPress = true;
    this.lastTime = new Date();
    this.timer = false;
  }

  _onPress = () => {
    let now = new Date().getTime();

    if (this.firstPress) {
      this.firstPress = false;

      this.timer = setTimeout(() => {
        this.props.singleTap ? this.props.singleTap() : null;

        this.firstPress = true;
      }, this.delayTime);

      this.lastTime = now;
    } else {
      if (now - this.lastTime < this.delayTime) {
        this.timer && clearTimeout(this.timer);

        this.props.doubleTap ? this.props.doubleTap() : null;
        setTimeout(() => {
          this.firstPress = true;
        }, 2000)
        
      }
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback
      style={{position:'relative'}} 
      onPress={this._onPress}>
        <View>
        {this.props.children}
        </View>
      </TouchableWithoutFeedback>
    );
  }

  componentWillUnmount() {
    // make sure to clear the timer when unmounting
    this.timer && clearTimeout(this.timer);
  }
}
