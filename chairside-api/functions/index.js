/* eslint-disable max-len */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
//  import * as bodyParser from "body-parser";

admin.initializeApp();
const app = express();
app.use(cors({origin: true}));

// Michael Angelos menu request
app.get("/michaelangelos/menu", async (req, res) => {
  const data = await admin.firestore().collection("Tenants").doc("CHA6uCkI2xlwPeUE33oV").collection("Menus").doc("Spring Menu").get();
  res.json(data.data().items);
});

// test function
const test = admin.firestore().collection("Tenants").doc("CHA6uCkI2xlwPeUE33oV").collection("Menus").doc("Spring Menu").collection("ItemsByID").doc("countrybread82039");
app.get("/test", async (req, res) => {
  const doc = await test.get();
  res.json(doc.data().sizes.find((size) => size.name === "Half"));
});

// temporary data addition
const data = {
  name: "Crab Cakes",
  description: "Chesapeake style lump crab, arugula salad, lemon aioli.",
  secondaryDescription: "",
  price: "$16.00",
  sizes: [],
  img: "/images/crabcakes.png",
  modificationsDescription: null,
  addons: [],
};

// test method to update items array with existing data
app.get("/test2", async (req, res) => {
  const response = admin.firestore().collection("Tenants").doc("CHA6uCkI2xlwPeUE33oV").collection("Menus").doc("Spring Menu").update({categoryItems: admin.firestore.FieldValue.arrayUnion(data)});
  console.log(response);
});

exports.api = functions.https.onRequest(app);
