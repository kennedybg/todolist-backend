# Todo List Node API

## Simple Todo list CRUD

### How to use it

- Rename .env.example to .env
- Replace environment variables
- Run the script using the code below

```
npm run dev
```

## Endpoints

### Create task (POST)

```
/tasks
```

**Body:** title (string), status (string)

**Params:** empty

### Get all tasks (GET)

```
/tasks
```

**Body:** empty

**Params:** empty

### Get task (GET)

```
/tasks/:id
```

**Body:** empty

**Params:** id (int)

### Update task (PUT)

```
/tasks/:id
```

**Body:** title (string), status (string)

**Params:** id (int)

### Delete task (DELETE)

```
/tasks/:id
```

**Body:** empty

**Params:** id (int)
