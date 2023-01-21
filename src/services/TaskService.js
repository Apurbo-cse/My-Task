import axios from "axios";

export const getTaskData = () => {
  axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
    const data = res.data;
    return data;
  });
};
