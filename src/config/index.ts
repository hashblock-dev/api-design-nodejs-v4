import merge from "lodash.merge";

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const env = process.env.NODE_ENV as string;

let envConfig: any = {};

if (env === "development") {
  envConfig = require("./dev").default;
} else if (env === "production") {
  envConfig = require("./prod").default;
}

export default merge(
  {
    env,
    port: 3001,
    logging: false,
  },
  envConfig
);
