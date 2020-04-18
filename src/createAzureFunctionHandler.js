import ExpressAdapter from "./ExpressAdapter";

/**
 * Creates a function ready to be exposed to Azure Function for request handling.
 *
 * @param {Object} requestListener Request listener (typically an express/connect instance)
 * @returns {function(context: Object)} Azure Function handle
 */
export default async function createAzureFunctionHandler(requestListener) {
  let app = await requestListener
  const adapter = new ExpressAdapter(app);
  return adapter.createAzureFunctionHandler();
}
