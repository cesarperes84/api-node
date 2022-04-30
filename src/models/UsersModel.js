import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'test_db',
  port: '3306'
});

const readUser = ({ id }) => {
  connection.connect((err) => {
    if (err) throw err;
    connection.query(`SELECT * FROM Users WHERE id = ${id}`, function (err, result, fields) {
      if (err) throw err;
      return result;
    });
  });
};

const readUsers = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM Users', (err, result, fields) => {
      console.log('result', result);
        err ? reject(err) : resolve(result)
    })
  });
};

const insertUser = ({ data }) => {
  const { name, email, password } = data;
  return new Promise((resolve, reject) => {
    connection.query(`
    INSERT INTO Users
      (name, email, password)
    VALUES
      ('${name}', '${email}', '${password}')`, (err, result) => {
        err ? reject(err) : resolve(result)
    })
  });
};

const updateUser = ({ data }) => {
  const { id, name, email, password } = data;
  return new Promise((resolve, reject) => {
    connection.query(`
      UPDATE FROM Users
        (name, email, password)
      VALUES
        ('${name}', '${email}', '${password}')
      WHERE id = '${id}'`, (err, result) => {
        err ? reject(err) : resolve(result)
    })
  });
};

const deleteUser = ({ id }) => {
  return new Promise((resolve, reject) => {
    connection.query(`DELETE FROM Users WHERE id = '${id}'`,(err, result) => {
      err ? reject(err) : resolve("Removido com Sucesso")
    });
  });
};

export { deleteUser, insertUser, readUser, readUsers, updateUser };
