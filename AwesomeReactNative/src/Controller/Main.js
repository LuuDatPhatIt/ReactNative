import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

//connet redux
import {connect} from 'react-redux';
class Main extends Component {
  AddNumber = () => {
    console.log('cộng 1');

    this.props.onAdd();
  };
  render() {
    return (
      <View>
        <Text> Cộng +1 ({this.props.number})</Text>

        <TouchableOpacity onPress={this.AddNumber}>
          <Text>Thêm +</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    number: state.number,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAdd: () => dispatch({type: 'ADD'}),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
