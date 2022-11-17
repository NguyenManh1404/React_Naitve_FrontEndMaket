import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import i18ns from '../../i18n';
const Market = () => {
  type ITasks = {id: any; name: string; checked?: boolean};
  const listTasks: ITasks[] = [
    {
      id: 1,
      name: 'Play game',
      checked: false,
    },
    {
      id: 2,
      name: 'Clean house',
      checked: false,
    },
    {
      id: 3,
      name: 'Cooking',
      checked: false,
    },
    {
      id: 4,
      name: 'Coding',
      checked: false,
    },
  ];
  const [tasks, setTasks] = React.useState<ITasks[]>(listTasks);
  const [value, onChangeText] = React.useState('');
  console.log('🚀 ~ file: Home.tsx ~ line 99 ~ Home ~ value', value);

  const handleAddTodo = () => {
    const newTask: ITasks = {name: value, id: Date.now(), checked: false};
    if (value.length > 0) {
      setTasks([newTask, ...tasks]);
      onChangeText('');
    }
    console.log('task', tasks);
  };

  const handleDelete = (id: any) => {
    setTasks(
      tasks.filter(task => {
        if (task?.id !== id) return true;
      }),
    );
  };

  const handleChecked = (id: any) => {
    setTasks(
      tasks.map(task => {
        if (task.id === id) task.checked = !task.checked;
        return task;
      }),
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{i18ns.t('toDoList')}</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="Add your task"
          onChangeText={onChangeText}
          value={value}
        />
        <TouchableOpacity style={styles.buttonAddTask} onPress={handleAddTodo}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.listView}>
        {tasks.map(task => {
          return (
            <TouchableOpacity
              key={task?.id}
              style={[styles.item, task.checked && {backgroundColor: 'pink'}]}
              onPress={() => handleChecked(task.id)}>
              <Text
                style={[
                  styles.textTask,
                  task.checked && {textDecorationLine: 'line-through'},
                ]}>
                {task?.name}
              </Text>
              <TouchableOpacity
                style={styles.buttonDeleteTask}
                onPress={() => handleDelete(task.id)}>
                <Text>Delete</Text>
              </TouchableOpacity>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Market;

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '900',
    fontSize: 20,
  },
  input: {
    backgroundColor: '#e3dbc8',
    width: '70%',
    padding: 10,
    borderRadius: 12,
  },
  inputView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonAddTask: {
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  buttonDeleteTask: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  listView: {
    width: '100%',
    height: '90%',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    backgroundColor: '#e3dbc8',
    margin: 5,
    padding: 5,
  },
  textTask: {
    fontSize: 20,
    fontWeight: '700',
    flex: 1,
  },
});
