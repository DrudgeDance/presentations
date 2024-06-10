const express = require("express");

const responseGeneric = (req, res) => {
  if (res.locals.response) {
    res.json(res.locals.response);
  } else {
    res.status(404).send("No response found in res.locals.response");
  }
};

module.exports = responseGeneric;