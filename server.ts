import {serve} from "./deps.ts";
import {headers} from "./header.ts";
import {home} from "./router.ts";
const handler = async (req: Request) => {
  const pathname = new URL(req.url).pathname;

  if (pathname === '/') return home();

  const file = await Deno.readFile(`${Deno.cwd()}/dist${pathname}`);
  if (pathname.split('.').at(-1) === 'css') return new Response(file, headers('css'));
  return new Response(file, headers('js'));
};

const env = Deno.env.get('PORT');
const port = env ? Number(env) : 8000;

serve(handler, {port});
