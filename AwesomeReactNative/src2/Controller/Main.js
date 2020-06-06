import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

//connet redux
import {connect} from 'react-redux';
class Main extends Component {
  AddNumber = () => {
    console.log('cộng 1');

    this.props.onAdd();
  };
  AddNumberTwo = () => {
    console.log('cộng 2');

    this.props.onAddtwo();
  };
  render() {
    return (
      <View>
        <Text> Text thay đổi 1 ({this.props.numberon})</Text>
        <Text> Text thay đổi 2 ({this.props.numbertw})</Text>

        <TouchableOpacity onPress={this.AddNumber}>
          <Text>Text thay đổi 1 </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.AddNumberTwo}>
          <Text>Text thay đổi 2 </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    numberon: state.numberon,
    numbertw: state.numbertw,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: () => dispatch({type: 'ADD_ONE'}),
    onAddtwo: () => dispatch({type: 'ADD_TWO'}),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
