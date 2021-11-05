'use strict';

class Post {
  constructor(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
  }
  edit(text) {
    this.text = text;
  }
}

const postOne = new Post('Владимир', 'Надеюсь получилось?', '25.02.2021');
console.log(postOne);

postOne.edit('Иначе быть не может!');
console.log(postOne);

class AttachedPost extends Post {
  constructor(author, text, date) {
    super(author, text, date);
    this.highlighted = false;
  }
  makeTextHighlighted() {
    this.highlighted = true;
  }
}

const postTwo = new AttachedPost(
  'Владимир',
  'Надеюсь и здесь получилось...',
  '25.02.2021'
);
console.log(postTwo);

postTwo.edit('Так выбора то нет!');
postTwo.makeTextHighlighted();
console.log(postTwo);
