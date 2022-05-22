

import html from "./iinl/html"
  

export async function onRequest({
  params: { slug },
  env: { N }
}) {
//   // Contents of context object
//   const {

//     env, // same as existing Worker API
//     params
//   } = context;
//   var { URLS } = env
// var { slug } = params
  const url = await N.get(slug)

  if (!url) {
    return new Response(null, { status: 404 });
  }

  return new Response(html(url), {
    headers: {
      'Content-type': 'text/html;charset=utf-8'
    }
  })

  // return new Response(null, {
  //   status: 302,
  //   headers: {
  //     location: url,
  //   },
  // })
};
