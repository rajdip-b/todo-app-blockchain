import abi from '../util/Todo.json';

export const GreetingsText1 = "Todo. On the blockchain.";
export const GreetingsText2 = "Create and manage your Todos directly from your browser on the blockchain!";

export const CreateTaskText1 = "Create a new task";

export const dummyTodos = [
    {
        id: 1,
        title: "Todo 1",
        content: "Todo 1 description",
        completed: true,
    },
    {
        id: 2,
        title: "Todo 2",
        content: "Todo 2 description",
        completed: true,
    },
    {
        id: 3,
        title: "Todo 3",
        content: "Todo 3 description",
        completed: false,
    },
    {
        id: 4,
        title: "Todo 4",
        content: "Todo 4 description",
        completed: false,
    },
    {
        id: 5,
        title: "Todo 5",
        content: "Todo 5 description",
        completed: true,
    },
]

export const contractAddress = "0xa2B81f34515780b803ba837FF6bBea16C70ff640";
export const contractABI = abi.abi;