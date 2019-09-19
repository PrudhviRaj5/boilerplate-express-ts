import * as bodyParser from "body-parser";
import * as compression from "compression";
import * as cookieParser from "cookie-parser";
import * as cors from "cors";
import * as express from "express";
import * as helmet from "helmet";
import * as methodOverride from "method-override";
import * as morgan from "morgan";

const app = express();
app.locals.siteName = "TS Express Boilerplate";

// 3rd party middleware
app
  .use(cors()) // to enable cross-origin
  .use(helmet()) // to enable security for headers
  .use(bodyParser.json()) // to support JSON-encoded bodies
  .use(bodyParser.urlencoded({ extended: true })) // to support URL-encoded bodies
  .use(methodOverride()) // lets you use HTTP verbs such as PUT or DELETE
  .use(cookieParser()) // to accept any cookies if needed
  .use(compression())
  .use(morgan("combined"));

app
  .use("/api/v3", (req, res) => {
    res.send("OK");
  });

export default app;
