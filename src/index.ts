import { buildList, saveList, VersionBump } from "./buildList";
import ciCheck from "./ci-check";

const command = process.argv[2];
const listName = process.argv[3];
const versionBump = process.argv[4];

switch (command) {
  case "generate":
    saveList(buildList(listName, versionBump as VersionBump), listName);
    break;
  case "ci-check":
    ciCheck();
    break;
  default:
    console.info("Unknown command");
    break;
}