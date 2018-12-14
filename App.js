import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default class App extends React.Component {
  state = {
    text: "",
    todoList: []
  };
  addTodo = () => {
    const { todoList, text } = this.state;
    if (!text) return null;
    const newTodoList = todoList.concat(text.trim());
    this.setState({
      todoList: newTodoList,
      text: ""
    });
  };
  removeTodo = todo => {
    const { todoList } = this.state;
    const newtodoList = todoList.filter(t => t !== todo);
    this.setState({
      todoList: newtodoList
    });
  };
  renderTodos = () => {
    const { todoList } = this.state;
    return todoList.map((todo, i) => {
      return (
        <Text
          onPress={() => {
            this.removeTodo(todo);
          }}
          key={`${todo}_${i}`}
          style={styles.list}
        >
          {todo}
        </Text>
      );
    });
  };
  render() {
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <Text>Welcome to React Native</Text>
        <TextInput
          style={styles.inputField}
          value={text}
          onChangeText={text => this.setState({ text })}
        />
        <Button
          onPress={this.addTodo}
          style={styles.myButton}
          title="Add Todo"
        />
        {this.renderTodos()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  inputField: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: "skyblue"
  },
  list: {
    marginTop: 5,
    marginBottom: 5
  }
});
