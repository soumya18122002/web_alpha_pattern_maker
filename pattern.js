let alpha = prompt("Enter any alphabet from A to Z to see it's pattern");
alpha = alpha.toUpperCase();
let ch = alpha.charAt(0);
let n = 5;
let string = "";
switch (ch) {
    case "A":
        for (let i = 1; i <= n; i++) {
            for (let space = i; space <= n; space++) {
                string += " ";
            }
            for (let j = 1; j < i; j++) {
                if (j == 1 || i == 3) {
                    string += ch;
                }
                else {
                    string += " ";
                }
            }
            for (let k = 1; k <= i; k++) {
                if (k == i || i == 3) {
                    string += ch;
                }
                else {
                    string += " ";
                }
            }
            string += "\n";
        }
        console.log(string);
        break;
    case "B":
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (i == 1 || j == 1 || j == n || i == n || i == 3) {
                    if (i == 1 && j == 2) {
                        continue;
                    }
                    if (i == 3 && j == 2) {
                        continue;
                    }
                    if (i == 5 && j == 2) {
                        continue;
                    }
                    string += ch;

                }
                else {
                    string += " ";
                }
            }
            string += "\n";
        }
        console.log(string);
        break;
    case "C":
        for (let i = 1; i <= n; i++) {
            for (let space = i; space <= 3; space++) {
                string += " ";
            }
            for (let j = 1; j <= 3; j++) {
                if (j == 1 && i == 1) {
                    string += ch;
                    string += ch;
                    string += ch;
                }
                if (i == 2 && j == 3) {
                    string += " ";
                    string += " ";
                    string += " ";
                    string += ch;
                    string += ch;
                }
                if (j == 1 && i == 2) {
                    string += ch;
                }
                if (j == 1 && i == 3) {
                    string += ch;
                }
            }
            for (let k = 3; k <= i; k++) {
                string += " ";
            }
            for (let l = 3; l <= i; l++) {
                if (l == 4) {
                    string += ch;
                }
                if (l == 4 && i == 5) {
                    string += ch;
                    string += ch;
                }
            }
            string += "\n";
        }
        console.log(string);
        break;
    case "D":
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (i == 1 || j == 1 || j == n || i == n) {
                    if (i == 1 && j == 4) {
                        continue;
                    }
                    if (i == 5 && j == 4) {
                        continue;
                    }
                    string += ch;

                }
                else {
                    string += " ";
                }
            }
            string += "\n";
        }
        console.log(string);
        break;
    case "E":
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (j == 1 || i == 1 || i == 3 || i == 5) {
                    string += ch;
                }
                else {
                    string += " ";
                }
            }
            string += "\n";
        }
        console.log(string);
        break;
    case "F":
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (j == 1 || i == 1 || i == 3) {
                    string += ch;
                }
                else {
                    string += " ";
                }
            }
            string += "\n";
        }
        console.log(string);
        break;
    case "G":
        for (let i = 1; i <= n; i++) {
            for (let space = i; space <= 3; space++) {
                string += " ";
            }
            for (let j = 1; j <= 3; j++) {
                if (j == 1 && i == 1) {
                    string += ch;
                    string += ch;
                    string += ch;
                }
                if (j == 1 && i == 2) {
                    string += ch;
                }
                if (j == 1 && i == 3) {
                    string += ch;
                }
            }
            for (let k = 3; k <= i; k++) {
                string += " ";
            }
            for (let l = 3; l <= i; l++) {
                if (l == 4 && i == 4) {
                    string += ch;
                    string += " ";

                }
                if (l == 4) {
                    string += ch;
                    string += ch;
                }
                if (l == 4 && i == 4) {
                    string += ch;
                    string += " ";

                }
                if (l == 4 && i == 5) {
                    string += " ";
                    string += ch;
                }
            }
            string += "\n";
        }
        console.log(string);
        break;
    case "H":
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (j == 1 || i == 3 || j == 5) {
                    string += ch;
                }
                else {
                    string += " ";
                }
            }
            string += "\n";
        }
        console.log(string);
        break;
    case "I":
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (j == 3 || i == 1 || i == 5) {
                    string += ch;
                }
                else {
                    string += " ";
                }
            }
            string += "\n";
        }
        console.log(string);
        break;
    case "J":
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (j == 5 || i == 1 || j == 1 || i == 5) {
                    if (i == 2 && j == 1) {
                        string += " ";
                        continue;
                    }
                    if (i == 3 && j == 1) {
                        string += " ";
                        continue;
                    }
                    if (j == 1 && i == 5) {
                        string += " ";
                        continue;
                    }
                    if (j == 5 && i == 5) {
                        continue;
                    }
                    string += ch;
                }
                else {
                    string += " ";
                }
            }
            string += "\n";
        }
        console.log(string);
        break;
    case "K":
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (i == 3 && j == 3) {
                    string += ch;
                }
                if (i == 4 && j == 4) {
                    string += ch;
                }
                if (i == 5 && j == 5) {
                    string += ch;
                }
                if (i == 1 && j == 5) {
                    string += ch;
                }
                if (i == 2 && j == 4) {
                    string += ch;
                }
                if (j == 1) {
                    string += ch;
                }
                else {
                    string += " ";
                }
            }
            string += "\n";
        }
        console.log(string);
        break;
    case "L":
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (j == 1 || i == 5) {
                    string += ch;
                }
                else {
                    string += " ";
                }
            }
            string += "\n";
        }
        console.log(string);
        break;
    case "M":
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (i == 2 && j == 2) {
                    string += ch;
                }
                else if (i == 2 && j == 4) {
                    string += ch;
                }
                else if (i == 3 && j == 3) {
                    string += ch;
                }
                else if (j == 1 || j == 5) {
                    string += ch;
                }
                else {
                    string += " ";
                }
            }
            string += "\n";
        }
        console.log(string);
        break;
    case "N":
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (i == j) {
                    string += ch;
                }
                else if (j == 1 || j == 5) {
                    string += ch;
                }
                else {
                    string += " ";
                }
            }
            string += "\n";
        }
        console.log(string);
        break;
    case "O":
        for (let i = 1; i <= n; i++) {
            for (let space = i; space <= 3; space++) {
                string += " ";
            }
            for (let j = 1; j <= 3; j++) {
                if (j == 1 && i == 1) {
                    string += ch;
                    string += ch;
                    string += ch;
                }
                if (i == 2 && j == 3) {
                    string += " ";
                    string += " ";
                    string += " ";
                    string += ch;
                }
                if (i == 3 && j == 3) {
                    string += " ";
                    string += " ";
                    string += " ";
                    string += " ";
                    string += " ";
                    string += ch;
                }

                if (j == 1 && i == 2) {
                    string += ch;
                }
                if (j == 1 && i == 3) {
                    string += ch;
                }
            }
            for (let k = 3; k <= i; k++) {
                string += " ";
            }
            for (let l = 1; l <= i; l++) {
                if (l == 1 && i == 4) {
                    string += ch;
                }
                if (l == 2 && i == 4) {
                    string += " ";
                    string += " ";
                    string += " ";
                    string += ch;
                }
                if (l == 1 && i == 5) {
                    string += ch;
                    string += ch;
                    string += ch;
                }

            }
            string += "\n";
        }
        console.log(string);
        break;
    case "P":
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (i == 2 && j == 1) {
                    string += ch;
                    continue;
                }
                if (i == 2 && j == 2) {
                    string += " ";
                    string += " ";
                    string += " ";
                    string += ch;
                }
                if (i == 1 || j == 1 || i == 3) {
                    if (i == 1 && j == 4) {
                        continue;
                    }
                    if (i == 3 && j == 4) {
                        continue;
                    }
                    string += ch;
                }
                else {
                    string += " ";
                }
            }
            string += "\n";
        }
        console.log(string);
        break;
    case "Q":
        for (let i = 1; i <= n; i++) {
            for (let space = i; space <= 3; space++) {
                string += " ";
            }
            for (let j = 1; j <= 3; j++) {
                if (j == 1 && i == 1) {
                    string += ch;
                    string += ch;
                    string += ch;
                }
                if (i == 2 && j == 3) {
                    string += " ";
                    string += " ";
                    string += " ";
                    string += ch;
                }
                if (i == 3 && j == 3) {
                    string += " ";
                    string += " ";
                    string += " ";
                    string += " ";
                    string += " ";
                    string += ch;
                }

                if (j == 1 && i == 2) {
                    string += ch;
                }
                if (j == 1 && i == 3) {
                    string += ch;
                }
            }
            for (let k = 3; k <= i; k++) {
                string += " ";
            }
            for (let l = 1; l <= i; l++) {
                if (l == 1 && i == 4) {
                    string += ch;
                }
                if (l == 2 && i == 4) {
                    string += " ";
                    string += " ";
                    string += " ";
                    string += ch;
                    string += ch;
                }
                if (l == 1 && i == 5) {
                    string += ch;
                    string += ch;
                    string += ch;
                    string += " ";
                    string += " ";
                    string += ch;
                    string += ch;
                }

            }
            string += "\n";
        }
        console.log(string);
        break;
    case "R":
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (i == 2 && j == 1) {
                    string += ch;
                    continue;
                }
                if (i == 2 && j == 2) {
                    string += " ";
                    string += " ";
                    string += " ";
                    string += ch;
                }
                if (i == 4 && j == 4) {
                    string += ch;
                }
                if (i == 5 && j == 5) {
                    string += ch;
                }
                if (i == 1 || j == 1 || i == 3) {
                    if (i == 1 && j == 4) {
                        continue;
                    }
                    if (i == 3 && j == 4) {
                        continue;
                    }
                    string += ch;
                }
                else {
                    string += " ";
                }
            }
            string += "\n";
        }
        console.log(string);
        break;
    case "S":
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (i == 1 || j == 1 || i == 5 || i == 3 || j == 5) {
                    if (i == 1 && j == 1) {
                        string += " ";
                        continue;
                    }
                    if (i == 2 && j == 5) {
                        continue;
                    }
                    if (i == 3 && j == 1) {
                        string += " ";
                        continue;
                    }
                    if (i == 3 && j == 5) {
                        string += " ";
                        continue;
                    }
                    if (i == 4 && j == 1) {
                        string += " ";
                        continue;
                    }
                    if (i == 5 && j == 5) {
                        string += " ";
                        continue;
                    }
                    string += ch;
                }
                else {
                    string += " ";
                }
            }
            string += "\n";
        }
        console.log(string);
        break;
    case "T":
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (j == 3 || i == 1) {
                    string += ch;
                }
                else {
                    string += " ";
                }
            }
            string += "\n";
        }
        console.log(string);
        break;
    case "U":
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (j == 1 || i == 5 || j == 5) {
                    if (i == 5 && j == 1) {
                        string += " ";
                        continue;
                    }
                    if (i == 5 && j == 5) {
                        string += " ";
                        continue;
                    }
                    string += ch;
                }
                else {
                    string += " ";
                }
            }
            string += "\n";
        }
        console.log(string);
        break;
    case "V":
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= 2 * n; j++) {
                if (i == j) {
                    string += ch;
                }
                else if (i + j == 2 * n) {
                    string += ch;
                }
                else {
                    string += " ";
                }
            }
            string += "\n";
        }
        console.log(string);
        break;
    case "W":
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (i == 3 && j == 3) {
                    string += ch;
                }
                else if (i == 4 && j == 2) {
                    string += ch;
                }
                else if (i == 4 && j == 4) {
                    string += ch;
                }
                else if (j == 1 || j == 5) {
                    string += ch;
                }
                else {
                    string += " ";
                }
            }
            string += "\n";
        }
        console.log(string);
        break;
    case "X":
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (i == j) {
                    string += ch;
                }
                else if (i + j == n + 1) {
                    string += ch;
                } else {
                    string += " ";
                }
            }
            string += "\n";
        }
        console.log(string);
        break;
    case "Y":
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (i == 4 && j == 2) {
                    string += " ";
                    continue;
                }
                if (i == 4 && j == 4) {
                    string += " ";
                    continue;
                }
                if (i == 5 && j == 1) {
                    string += " ";
                    continue;
                }
                if (i == 5 && j == 5) {
                    string += " ";
                    continue;
                }
                if (i == 4 && j == 3) {
                    string += ch;
                }
                if (i == 5 && j == 3) {
                    string += ch;
                }
                if (i == j) {
                    string += ch;
                }
                else if (i + j == n + 1) {
                    string += ch;
                }
                else {
                    string += " ";
                }
            }
            string += "\n";
        }
        console.log(string);
        break;
    case "Z":
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (i + j == n + 1) {
                    string += ch;
                }
                else if (i == 1 || i == 5) {
                    string += ch;
                }
                else {
                    string += " ";
                }
            }
            string += "\n";
        }
        console.log(string);
        break;
    default:
        break;
}
