import auth from '../controllers/authController';
import todos from '../controllers/todosController';
import authorize from '../middlewares/authorize';

const routes = (app) => {
  app.get('/', (req, res) => res.send({ message: 'Welcome to Todo API' }));

  app.post('/api/auth/sign_up', auth.signUp);
  app.post('/api/auth/sign_in', auth.signIn);

  app.post('/api/todos', authorize, todos.create);
  app.get('/api/todos', authorize, todos.fetchAll);
  app.get('/api/todos/:todoId', authorize, todos.fetchOne);
  app.put('/api/todos/:todoId', authorize, todos.update);
  app.delete('/api/todos/:todoId', authorize, todos.delete);
};

export default routes;
