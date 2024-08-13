// @ts-expect-error - no types available
import { appendFileSync, writeFileSync } from "node:fs";
// @ts-expect-error - no types available
import { deserialize } from "deserialize-json-api";

import data from "./data.json";
import { Item } from "./model/Item";
const logs: string[] = [];

function write_log_row(row: string) {
  logs.push(row);
}

function deserialize_and_get_item_title() {
  const start = Date.now();
  const response = deserialize(data);
  const title = response["data"][0]["title"];
  const end = Date.now();

  return { time: end - start, title, item: response["data"][0] };
}

function deserialize_and_get_item_included(item: any) {
  const start = Date.now();
  const photos_ids = item["photos"].map((photo: any) => photo["id"]);
  const end = Date.now();

  return { time: end - start, photos_ids };
}

function model_get_item_title() {
  const start = Date.now();
  const item = new Item(data);
  const title = item.at(0)?.title;
  const end = Date.now();

  return { time: end - start, title, item };
}

function run() {
  write_log_row("Start benchmark with Deserialize");
  const start = Date.now();
  const { time, title, item } = deserialize_and_get_item_title();
  const end = Date.now();

  const start_photo = Date.now();
  const { photos_ids } = deserialize_and_get_item_included(item);
  const end_photo = Date.now();

  write_log_row(`Deserialization time: ${time}ms`);
  write_log_row(`Item title: ${title}`);
  write_log_row(`Total time: ${end - start}ms`);

  write_log_row(`get photos in included: ${end_photo - start_photo}ms`);
  write_log_row(`Photos ids: ${photos_ids}`);

  write_log_row("Deserialization Benchmark finished");
}

function run_model() {
  console.log("Start benchmark with Model");
  const start = Date.now();
  const { time, title, item } = model_get_item_title();
  const end = Date.now();

  write_log_row(`Model: ${item.all.length} items`);
  write_log_row(`Model time: ${time}ms`);
  write_log_row(`Item title: ${title}`);
  write_log_row(`Total time: ${end - start}ms`);

  const start_photo = Date.now();
  const photos_ids = item.all[0].photos.map((photo) => photo.id);
  const end_photo = Date.now();

  write_log_row(`get photos in included: ${end_photo - start_photo}ms`);
  write_log_row(`Photos ids: ${photos_ids}`);

  write_log_row("Model Benchmark finished");
}

write_log_row(`====================\n\n\n`);
run();
write_log_row(`====================\n\n\n`);
run_model();

console.log(logs.join("\n"));

writeFileSync("benchmark.txt", logs.join("\n"));
