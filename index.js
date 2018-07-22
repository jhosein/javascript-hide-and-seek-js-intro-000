function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('.target');
}

function increaseRankBy(n) {
  var nums = document.querySelectorAll('.ranked-list li');

  for (let i = 0; i < nums.length; i++) {

    nums[i].innerHTML = parseInt(nums[i].innerHTML, 10) + n;
  }
}

function deepestChild() {
  debugger; var node = document.getElementById('grand-node');

  while (node.children.length > 0) {
    node = node.querySelectorAll('div');
  }

  return node.innerHTML;

}
