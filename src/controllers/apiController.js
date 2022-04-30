import {
  deleteUser,
  insertUser,
  readUser,
  readUsers,
  updateUser,
} from '../models/UsersModel.js';

const list = async (request, response) => {
  const res = await readUsers();
  response.send(res);
};

const details = (request, response) => {
  const { id } = request.params;
  console.log("id", id);
  response.send({type: "GET"});
};

const add = (request, response) => {
  response.send({type: "POST"});
};

const update = (request, response) => {
  const { id } = request.params;
  const { name } = req.body;
  response.send({type: "PUT"});
};

const remove = async (request, response) => {
  const { id } = request.params;
  const res = deleteUser ({ id });
  response.send(res);
};

export { list, details, add, update, remove };
