async function errorHandling(context: EventContext<any, any, any>) {
  try {
    return await context.next();
  } catch (err) {
    return new Response(`${err.message}\n${err.stack}`, { status: 500 });
  }
}

function authentication(context: EventContext<any, any, any>) {
  console.log("auth");
  return context.next();
}

export const onRequest = [errorHandling, authentication];
