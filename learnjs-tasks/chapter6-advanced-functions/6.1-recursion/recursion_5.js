let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function loopPrintListR(list) {
    let array = [];
    let temp = list;

    while (temp) {
        array.push(temp.value);
        temp = temp.next;
    }

    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

function recursionPrintListR(list) {
    if (list.next) {
        recursionPrintListR(list.next); 
    }

    console.log(list.value); 
}

loopPrintListR(list);
recursionPrintListR(list);