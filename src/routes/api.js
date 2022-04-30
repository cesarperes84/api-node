// const express = require ("express");
import express from "express";
import { list, details, add, update, remove } from "../controllers/apiController.js";

const router = express.Router();
router.get("/list", list);
router.get("/details/:id", details);
router.post("/add-item", add);
router.put("/update-item/:id", update);
router.delete("/remove-item/:id", remove);

export { router };
