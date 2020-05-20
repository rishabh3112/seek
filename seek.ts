import {
  cyan,
  yellow,
  bold,
  red,
} from "https://raw.githubusercontent.com/denoland/deno/master/std/fmt/colors.ts";

const decoder = new TextDecoder("utf-8");

for (const file of Deno.args) {
  // file header
  console.log(bold(cyan(`\n ${file}`)));
  let line = "──";
  for (let i = 0; i < file.length; i++) {
    line += "─";
  }
  console.log(yellow(`${line}`));

  // file content
  try {
    console.log(decoder.decode(await Deno.readFile(file)));
  } catch (err) {
    console.log(
      `${red("error")}: file was either not found or could not be seeked :(`,
    );
  }
}
