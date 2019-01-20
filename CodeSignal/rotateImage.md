```
function rotateImage(arr) {
    let len = arr.length; // Create variable for array length to make code clearer //
    /* Make an outer loop whose index starts at 0 and ends at length / 2 -
        since we are targeting items on mirrored areas of the matrix,
        this should ensure that we do not touch elements already changed */
    for (let i = 0; i < len / 2; i++) {
        /* Make inner loop whose index starts at i and ends at length - i - 1 -
            This ensures that we start the loop on elements not yet moved
            and terminate before reaching those already changed */
        for (let j = i; j < len - i - 1; j++) {
            let bucket = arr[i][j];
            arr[i][j] = arr[len - j - 1][i];
            arr[len - j - 1][i] = arr[len - i - 1][len - j - 1];
            arr[len - i - 1][len - j - 1] = arr[j][len - i - 1];
            arr[j][len - i - 1] = bucket;
        }
    }
    return arr;
}
```

| 10  | 9   | 6   | 3   | 7   |
| --- | --- | --- | --- | --- |
| 6   | 10  | 2   | 9   | 7   |
| 7   | 6   | 3   | 8   | 2   |
| 8   | 9   | 7   | 9   | 9   |
| 6   | 8   | 6   | 8   | 2   |

```
1st loop - i = 0; j = 0

bucket = arr[i][j]
    arr[0][0] = 10;

arr[i][j] = arr[len - j - 1][i]
    arr[0][0] = arr[4][0] = 6

arr[len - j - 1][i]  = arr[len - i - 1][len - j - 1]
    arr[4][0] = arr[4][4] = 2

arr[len - i - 1][len - j - 1]  = arr[j][len - i - 1]
    arr[4][4] = arr[0][4] = 7;

arr[j][len - i - 1] = bucket
    arr[0][4] = bucket = 10;
```

| i = 0                | j = 0 | len - i - 1 = 4 | len - j - 1 = 4 |                      |
| -------------------- | ----- | --------------- | --------------- | -------------------- |
| ~~10~~ **\*\*6\*\*** | 9     | 6               | 3               | ~~7~~ **\*\*10\*\*** |
| 6                    | 10    | 2               | 9               | 7                    |
| 7                    | 6     | 3               | 8               | 2                    |
| 8                    | 9     | 7               | 9               | 9                    |
| ~~6~~ **\*\*2\*\***  | 8     | 6               | 8               | ~~2~~ **\*\*7\*\***  |

```
2nd loop - i = 0; j = 1;

bucket = arr[i][j]
    arr[0][1] = 9;

arr[i][j] = arr[len - j - 1][i]
    arr[0][1] = arr[3][0] = 8;

arr[len - j - 1][i]  = arr[len - i - 1][len - j - 1]
    arr[3][0] = arr[4][3] = 8;

arr[len - i - 1][len - j - 1]  = arr[j][len - i - 1]
    arr[4][3] = arr[1][4] = 7;

arr[j][len - i - 1] = bucket
    arr[1][4] = bucket = 9;
```

| i = 0               | j = 1               | len - i - 1 = 4 | len - j - 1 = 3     |                     |
| ------------------- | ------------------- | --------------- | ------------------- | ------------------- |
| 6                   | ~~9~~ **\*\*8\*\*** | 6               | 3                   | 10                  |
| 6                   | 10                  | 2               | 9                   | ~~7~~ **\*\*9\*\*** |
| 7                   | 6                   | 3               | 8                   | 2                   |
| ~~8~~ **\*\*8\*\*** | 9                   | 7               | 9                   | 9                   |
| 2                   | 8                   | 6               | ~~8~~ **\*\*7\*\*** | 7                   |

```
3rd loop - i = 0; j = 2;

bucket = arr[i][j]
    bucket = arr[0][2] = 6;

arr[i][j] = arr[len - j - 1][i]
     arr[0][2] = arr[2][0] = 7;

arr[len - j - 1][i] = arr[len - i - 1][len - j - 1]
    arr[2][0] = arr[4][2] = 6;

arr[len - i - 1][len - j - 1] = arr[j][len - i - 1]
    arr[4][2] = arr[2][4] = 2;

arr[j][len - i - 1] = bucket;
    arr[2][4] = arr[0][2] = 6;
```

| i = 0               | j = 2 | len - i - 1 = 4     | len - j - 1 = 2 |                     |
| ------------------- | ----- | ------------------- | --------------- | ------------------- |
| 6                   | 8     | ~~6~~ **\*\*7\*\*** | 3               | 10                  |
| 6                   | 10    | 2                   | 9               | 9                   |
| ~~7~~ **\*\*6\*\*** | 6     | 3                   | 8               | ~~2~~ **\*\*6\*\*** |
| 8                   | 9     | 7                   | 9               | 9                   |
| 2                   | 8     | ~~6~~ **\*\*2\*\*** | 7               | 7                   |

```
4th loop - i = 0; j = 3;

bucket = arr[i][j]
    bucket = arr[0][3] = 3;

arr[i][j] = arr[len - j - 1][i]
    arr[0][3] = arr[1][0] = 6;

arr[len - j - 1][i] = arr[len - i - 1][len - j - 1]
    arr[1][0] = arr[4][1] = 8;

arr[len - i - 1][len - j - 1] = arr[j][len - i - 1]
    arr[4][1] = arr[3][4] = 9;

arr[j][len - i - 1] = bucket;
    arr[3][4] = bucket = 3;

```

| i = 0               | j = 3               | len - i - 1 = 4 | len - j - 1 = 1     |                     |
| ------------------- | ------------------- | --------------- | ------------------- | ------------------- |
| 6                   | 8                   | 7               | ~~3~~ **\*\*6\*\*** | 10                  |
| ~~6~~ **\*\*8\*\*** | 10                  | 2               | 9                   | 9                   |
| 6                   | 6                   | 3               | 8                   | 6                   |
| 8                   | 9                   | 7               | 9                   | ~~9~~ **\*\*3\*\*** |
| 2                   | ~~8~~ **\*\*9\*\*** | 2               | 7                   | 7                   |

```
5th loop - i = 1; j = 1;

bucket = arr[i][j]
    bucket = arr[1][1] = 10

arr[i][j] = arr[len - j - 1][i]
    arr[1][1] = arr[3][1] = 9;

arr[len - j - 1][i] = arr[len - i - 1][len - j - 1]
    arr[3][1] = arr[3][3] = 9;

arr[len - i - 1][len - j - 1] = arr[j][len - i - 1]
    arr[3][3] = arr[1][3] = 9;

arr[j][len - i - 1] = bucket;
    arr[1][3] = bucket = 10;

```

| i = 1 | j = 1                | len - i - 1 = 3 | len - j - 1 = 3      |     |
| ----- | -------------------- | --------------- | -------------------- | --- |
| 6     | 8                    | 7               | 6                    | 10  |
| 8     | ~~10~~ **\*\*9\*\*** | 2               | ~~9~~ **\*\*10\*\*** | 9   |
| 6     | 6                    | 3               | 8                    | 6   |
| 8     | ~~9~~ **\*\*9\*\***  | 7               | ~~9~~ **\*\*9\*\***  | 3   |
| 2     | 9                    | 2               | 7                    | 7   |

```
6th loop - i = 1; j = 2;

bucket = arr[i][j]
    bucket = arr[1][2] = 2;

arr[i][j] = arr[len - j - 1][i]
    arr[1][2] = arr[2][1] = 6;

arr[len - j - 1][i] = arr[len - i - 1][len - j - 1]
    arr[2][1] = arr[3][2] = 7;

arr[len - i - 1][len - j - 1] = arr[j][len - i - 1]
    arr[3][2] = arr[2][3] = 8;

arr[j][len - i - 1] = bucket;
    arr[2][3] = bucket = 2;

```

| i = 1 | j = 2               | len - i - 1 = 3     | len - j - 1 = 2     |     |
| ----- | ------------------- | ------------------- | ------------------- | --- |
| 6     | 8                   | 7                   | 6                   | 10  |
| 8     | 9                   | ~~2~~ **\*\*6\*\*** | 10                  | 9   |
| 6     | ~~6~~ **\*\*7\*\*** | 3                   | ~~8~~ **\*\*2\*\*** | 6   |
| 8     | 9                   | ~~7~~ **\*\*8\*\*** | 9                   | 3   |
| 2     | 9                   | 2                   | 7                   | 7   |
