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

function loopPrintList(list) {
    let temp = list;

    while (temp) {
        console.log(temp.value);
        temp = temp.next;
    } 
}

function recursionPrintList(list) {
    console.log(list.value); 

    if (list.next) {
        recursionPrintList(list.next); 
    }
}

loopPrintList(list);
recursionPrintList(list);