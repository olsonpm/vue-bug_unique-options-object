### To reproduce the bug

```sh
❯ npm ci  # requires npm >= v5.7


❯ node run_manual.js
for client
optionsId: 0

for server
optionsId: 0


❯ node run_with-webpack-merge.js
for client
optionsId: 0

for server
optionsId: 1  # <------- should be 0
```
