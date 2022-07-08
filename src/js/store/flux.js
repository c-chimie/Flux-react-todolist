const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      list: [{ id: 0, text: "wash dishes" },
      { id: 1, text: "dry dishes" }],
    },

    actions: {
        addNewTask: (todo) => {
           const store = getStore();

           store.list.push(todo)

           return (store.list)
           
          },
      deleteTask: (id) => {
        const store = getStore();
        // console.log("id###", id)
        function compare(tasks) {
            console.log("tasks.id", tasks.id)
            if(tasks.id != id){
          return tasks};
        }

        let filteredTasks = store.list.filter(compare);
        // console.log("filteredTasks###", filteredTasks)
        // console.log("store.list###", store.list)

        store.list = filteredTasks;

        return filteredTasks;
      },
    },
  };
};

export default getState;
