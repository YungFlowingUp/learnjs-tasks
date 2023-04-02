let handlers = Symbol('handlers');

function makeObservable(target) {
    target[handlers] = [];
    target.observe = function(handler) {
        this[handlers].push(handler);
    };
    return new Proxy(target, {
        set(target, p, value, receiver) {
            const temp = Reflect.set(...arguments);

            if (temp) { 
                target[handlers].forEach(handler => handler(p, value));
            }

            return temp
        }
    });
}

let user = {};

user = makeObservable(user);

user.observe((key, value) => {
    console.log(`SET ${key}=${value}`);
});

user.name = "John";