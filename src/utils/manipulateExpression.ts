function checkParenthesesMatching(expression: string) {
  const stack = [];
  for (let char of expression) {
    if (char === "(" || char === "¬(") stack.push("(");
    else if (char === ")") {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
}

function removeExternalParentheses(expression: string) {
  let expressionNoParentheses = expression.replace(/^¬?\(|\)$/g, "");

  const isMatched = checkParenthesesMatching(expressionNoParentheses);
  let wasRemoved = false;

  if (isMatched) {
    expressionNoParentheses = expressionNoParentheses;
    wasRemoved = true;
  } else {
    expressionNoParentheses = expression;
    wasRemoved = false;
  }

  return { expressionNoParentheses, wasRemoved };
}

export { removeExternalParentheses };