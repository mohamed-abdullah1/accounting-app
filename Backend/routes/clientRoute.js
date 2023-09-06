const express = require("express");

const {
  getAllClients,
  addClient,
  updateClient,
  deleteClient,
} = require("../controllers/clientController");

const router = express.Router();

router.route("/").get(getAllClients).post(addClient);
router.route("/:clientId").patch(updateClient).delete(deleteClient);

module.exports = router;
