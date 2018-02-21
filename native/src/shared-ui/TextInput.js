import React from "react";
import { TextInput as PaperTextInput } from "react-native-paper";

class TextInput extends React.Component {
  state = {
    text: ""
  };

  render() {
    return (
      <PaperTextInput
        style={{ margin: "10%", width: "80%" }}
        label={this.props.placeholder}
        value={this.state.text}
        onChangeText={text => this.setState({ text })}
      />
    );
  }
}

export default TextInput;
