import axios from "axios";

export const getTaskData = async () => {
  let data = [];
  await axios
    .get("https://jsonplaceholder.typicode.com/comments")
    .then((res) => {
      data = res.data;
    });
  return data;
};
