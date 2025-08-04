// console.log(2 > 1);

// console.log("0" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null>=0);
/*
== treats null specially (only equals undefined)

| Expression  | JavaScript Converts To | Result |
| ----------- | ---------------------- | ------ |
| `null > 0`  | `0 > 0`                | false  |
| `null == 0` | *no conversion*        | false  |
| `null >= 0` | `0 >= 0`               | true   |


| Expression       | Evaluates To | Explanation                                                         |
| ---------------- | ------------ | ------------------------------------------------------------------- |
| `null > 0`       | `false`      | `null` becomes `0`, so `0 > 0` → `false`                            |
| `null == 0`      | `false`      | `null` only equals `undefined`, not `0`                             |
| `null >= 0`      | `true`       | `null` becomes `0`, so `0 >= 0` → `true`                            |
| `undefined > 0`  | `false`      | `undefined` becomes `NaN`, and any comparison with `NaN` is `false` |
| `undefined == 0` | `false`      | `undefined` only equals `null`, not `0`                             |
| `undefined >= 0` | `false`      | `undefined` becomes `NaN`, so `NaN >= 0` → `false`                  |
| `NaN > 0`        | `false`      | `NaN` is not comparable with any number                             |
| `NaN == NaN`     | `false`      | `NaN` is not equal to anything, not even itself                     |
| `0 == false`     | `true`       | `false` becomes `0` in loose equality                               |
| `'' == 0`        | `true`       | Empty string `''` becomes `0`                                       |
| `'' == false`    | `true`       | Both become `0`, so comparison is `0 == 0` → `true`                 |
| `[] == false`    | `true`       | `[]` becomes `''`, then `0`, and `false` becomes `0`                |
| `[0] == false`   | `true`       | `[0]` becomes `'0'` → `0`, `false` → `0`, so `0 == 0` → `true`      |
| `[1] == true`    | `true`       | `[1]` becomes `'1'` → `1`, `true` → `1`, so `1 == 1` → `true`       |
| `[] == ![]`      | `true`       | `![]` → `false`; then `[] == false` → `true`                        |


> and >= convert null to 0, but the final result 
depends on the operator logic.
*/

console.log("2" === 2);//false , stick check is been done, so no covertion , datatype is also compaired





