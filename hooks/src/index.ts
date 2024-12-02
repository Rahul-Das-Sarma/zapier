import express from "express";

const app = express();

app.post("http://localhost:8080/hooks/:appId/:zapId", (req, res) => {
  const { appId, zapId } = req.params;
});
