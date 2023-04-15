const div = document.getElementById('div');

const generateList = function generateList(arr) {
    const ul = document.createElement('ul');
  
    arr.forEach(function(elem) {
        const li = document.createElement('li');
        let childElement;
        if (Array.isArray(elem)) {
            childElement = generateList(elem);
        } else {
            childElement = document.createTextNode(elem)
        }
        li.appendChild(childElement);
        ul.appendChild(li);
    })
  
    return ul;
  }
  
 div.appendChild(generateList([1, 2, 3]));
 div.appendChild(generateList([1, 2, [1.1, 1.2, 1.3], 3]));