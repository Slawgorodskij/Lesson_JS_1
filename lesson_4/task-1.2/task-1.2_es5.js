'use strict';

function Post(author, text, date) {
  this.author = author;
  this.text = text;
  this.date = date;
}

Post.prototype.edit = function (text) {
  this.text = text;
};

const postOne = new Post('Владимир', 'Надеюсь получилось?', '25.02.2021');
console.log(postOne);

postOne.edit('Иначе быть не может!');
console.log(postOne);

function AttachedPost(author, text, date) {
  Post.call(this, author, text, date);
  this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
  this.highlighted = true;
};

const postTwo = new AttachedPost(
  'Владимир',
  'Надеюсь и здесь получилось...',
  '25.02.2021'
);
console.log(postTwo);

postTwo.edit('Так выбора то нет!');
postTwo.makeTextHighlighted();
console.log(postTwo);
