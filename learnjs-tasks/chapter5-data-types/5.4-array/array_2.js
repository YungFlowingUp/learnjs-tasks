const styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.round((styles.length-1)/2)] = "Классика";
console.log(styles);
console.log(styles.shift());
styles.unshift("Рэп", "Регги");