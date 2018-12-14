import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

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
        <TouchableOpacity key={`${todo}_${i}`}>
          <Text
            onPress={() => {
              this.removeTodo(todo);
            }}
            style={styles.list}
          >
            {todo}
          </Text>
        </TouchableOpacity>
      );
    });
  };
  render() {
    const { text } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={styles.header}>Notes App</Text>
          <TextInput
            style={styles.inputField}
            value={text}
            onChangeText={text => this.setState({ text })}
          />
          <Button
            onPress={this.addTodo}
            style={styles.myButton}
            color="#5393ff"
            title="Add Todo"
          />
          {this.renderTodos()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    marginTop: 30
  },
  header: {
    fontSize: 40,
    color: "#2196f3"
  },
  inputField: {
    height: 50,
    width: "100%",
    borderWidth: 1,
    borderColor: "skyblue"
  },
  list: {
    fontSize: 24,
    marginTop: 5,
    marginBottom: 5,
    color: "#f50057"
  }
});
