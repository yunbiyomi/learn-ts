interface Todo {
  id: string;
  title: string;
}

type OptionalTodo = Partial<Todo>;

type MappedTodo = {
  [Property in keyof Todo]?: Todo[Property];
}

type MyPartial<Type> = {
  [Property in keyof Type]?: Type[Property];
}

type GMappedTodo = MyPartial<Todo>;