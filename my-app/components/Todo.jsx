import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [tasks, setTasks] = useState([]);




  const capitalizeWords = (word) => {
    if (word.length === 0) return;
    return word.trim().split(" ").map((text) => text[0].toUpperCase() + text.slice(1)).join(" ");
  };

  // add task
  const addTask = () => {
    if (todo.length > 0) {

      setTasks((prev) => {
        const updated = [{ id: Date.now().toString(), task: capitalizeWords(todo), completed: false }, ...prev];
        return updated;
      });

      setTodo("");

    }

  };

  // delete task
  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      const updated = prevTasks.filter((todo) => todo.id !== taskId);
      return updated;
    });
    

  };




  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todo App</Text>

      {
        tasks.length > 0 && <Text style={{fontSize:25,color:"red",textAlign:"center",marginBlock:10,fontWeight:"700"}}> Total Task:: {tasks.length}</Text>
      }


      <TextInput
        placeholder="Enter text that you want to add"
        style={styles.input}
        value={todo}
        onChangeText={setTodo}
      />
      <View style={styles.btnContainer}>
        <Button
          title="Add Task"
          accessibilityLabel="Add Task"
          onPress={addTask}
        />
        <Button
          title="Clear Task"
          accessibilityLabel="Clear Task"
          onPress={()=>setTasks([])}
          color={"#ff0000"}
        />
      </View>

      <FlatList
        keyExtractor={(item) => item.id}
        data={tasks}

        renderItem={({ item }) => (
          <View style={styles.todoElement}>
            <Text style={styles.todoText}>{item.task}</Text>
            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <Text style={styles.delete}>❌</Text>
            </TouchableOpacity>
          </View>
        )}

      />
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  heading: {
    fontSize: 40,
    fontWeight: "700",
  },
  input: {
    borderWidth: 1,
    padding: 15,
    height: 80,
    width: "100%",
    marginBlock: 20,
    fontSize: 20,
    borderRadius: 10,
  },
  todoElement: {
    flexDirection: "row",
    justifyContent: "space-between",

    paddingBlock: 10,
    paddingHorizontal: 25,
    backgroundColor: "#007140",

    marginBlock: 8,
    borderRadius: 15
  },
  todoText: {
    fontSize: 25,
    fontWeight: "700",
    color: "#f5f5f5",
  },
  delete: {
    color: "red",
    fontSize: 18,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10
  },
  btnContainer: {
    flexDirection: "row",
    gap: 20,
    paddingHorizontal: 25,
    marginBlock: 10
  }
});
