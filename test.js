function isbalanced(str) {

    //const N = str.length;
    const stack = [];

    for(const letter of str) {

        if (letter == "[") {
            stack.push(letter);
            continue;
        }

        if (letter == "(") {
            stack.push(letter);
            continue;
        }

        if (letter == "{") {
            stack.push(letter);
            continue;
        }

        if (letter == "]") {
            const aux = stack.pop();
            if (aux != "[") {
                return false;
            }
            continue;
        }

        if (letter == ")") {
            const aux = stack.pop();
            if (aux != "(") {
                return false;
            }
            continue;
        }

        if (letter == "}") {
            const aux = stack.pop();
            if (aux != "{") {
                return false;
            }
            continue;
        }
    }

    if (stack.length > 0) {
        return false;
    }

    return true;    
}



// (a[0]+b[2c[6]]) {24 + 53} -> true
console.log(isbalanced("(a[0]+b[2c[6]]) {24 + 53}"), "(a[0]+b[2c[6]]) {24 + 53}");
// f(e(d)) -> true
console.log(isbalanced("f(e(d))"), "f(e(d))");
// [()]{}([]) -> true
console.log(isbalanced("[()]{}([])"), "[()]{}([])");
// ((b) -> false
console.log(isbalanced("((b)"), "((b)");
// (c] -> false
console.log(isbalanced("(c]"), "(c]");
// {(a[]) -> false
console.log(isbalanced("{(a[])"), "{(a[])");
// ([)] -> false
console.log(isbalanced("([)]"), "([)]");
// )( -> false
console.log(isbalanced(")("), ")(");
// -> true
console.log(isbalanced(""));
