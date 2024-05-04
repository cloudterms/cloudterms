import CloudTerms from "@cloudterms/js";
import { Hono } from "hono";

const app = new Hono();

const cloudterms = CloudTerms();

app.get("/terms", async (c) => {
  const terms = await cloudterms.terms.get();
  return c.json({ terms });
});

app.get("/user/:userId/has-agreed", async (c) => {
  const hasAgreed = await cloudterms.user.hasAgreed(c.req.param("userId"));
  return c.json({ hasAgreed });
});

app.post("/user/:userId/agree", async (c) => {
  const setAgreed = await cloudterms.user.setAgreed(c.req.param("userId"));
  return c.json({ setAgreed });
});

export default app;
