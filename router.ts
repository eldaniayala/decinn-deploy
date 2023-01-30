const home = async () => {
  const file = await Deno.readFile(`./dist/index.html`);
  return new Response(file);
}

export {
  home,
}
