// This function handles the request to delete a todo item

export function request(ctx) {
  console.log(`adding object with args ${JSON.stringify(ctx.arguments)}`);

  return {
    method: "POST",
    resourcePath: `${ctx.env.atlasdataapipath}/deleteOne`,
    params: {
      headers: JSON.parse(ctx.env.dataapiheader),
      body: {
        ...JSON.parse(ctx.env.clusterdetails),
        "filter": {
        "_id": { "$oid": ctx.arguments.id },
        "username": ctx.identity.username,
        }
      },
    },
  };
}

// This function handles the response after deleting a todo item

export function response(ctx) {
  // https://www.mongodb.com/docs/atlas/api/data-api-resources/#response-2
  if (ctx.result.statusCode == 200) {
    return "200";
  } else {
    return  `${JSON.stringify(ctx)}`;
  }
}