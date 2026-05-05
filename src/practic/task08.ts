// Task 8: The "Draft" Mode

interface MyDocument {
title: string;
content: string;
author: string;
}

type Draft<T> = {
  readonly [P in keyof T]?: T[P];
};

const myDraft: Draft<MyDocument> = {
  title: "Work in progress"
};
