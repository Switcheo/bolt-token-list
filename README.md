# Bolt Default Token List

## Install

```bash
yarn install
```

This repo contains the default token list for bolt and tools to build the token list.

## How to add tokens to token list

The default token list is found in ```lists/bolt-default-list```. This list is not to be modified directly. 

### Modify Token List using Github Actions

Token information is found in ```src/tokens/bolt-default-list.json```. To modify the default token list, submit a PR modifying ```src/tokens/bolt-default-list.json```.

Merge this PR to master. If it passes validation checks, a new PR will be auto generated containing the patch to the list.

### Modify Token List manually

Add token information to ```src/tokens/bolt-default-list.json```.

Run the following command: 

```bash
yarn generate
```

