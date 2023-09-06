const asyncHandler = require("express-async-handler");
const db = require("../config/database");

const Client = require("../models/clientModel"); // Adjust the path as needed

exports.getAllClients = asyncHandler(async (req, res, next) => {
  try {
    const clients = await Client.findAll();

    res.json(clients);
  } catch (err) {
    console.error("Error fetching clients:", err.message);
    res.status(500).json({ error: "An error occurred" });
  }
});

exports.addClient = asyncHandler(async (req, res, next) => {
  try {
    const {
      first_name,
      last_name,
      card_id,
      address,
      phone_no_1,
      phone_no_2,
      review,
    } = req.body;

    const newClient = await Client.create({
      first_name,
      last_name,
      card_id,
      address,
      phone_no_1,
      phone_no_2,
      review,
    });

    res.status(201).json({
      message: "Client added successfully",
      client_id: newClient.id,
    });
  } catch (err) {
    console.error("Error adding client:", err.message);
    res.status(500).json({ error: "An error occurred" });
  }
});

exports.updateClient = asyncHandler(async (req, res, next) => {
  try {
    const clientId = req.params.clientId; // Retrieve client ID from URL parameter
    const updatedClient = req.body; // Get updated client details from request body

    // Find the client by ID and update its attributes
    const client = await Client.findByPk(clientId);
    if (!client) {
      return res.status(404).json({ error: "Client not found" });
    }

    await client.update(updatedClient);

    res.json({ message: "Client updated successfully" });
  } catch (err) {
    console.error("Error updating client:", err.message);
    res.status(500).json({ error: "An error occurred" });
  }
});

exports.deleteClient = asyncHandler(async (req, res, next) => {
  try {
    const clientId = req.params.clientId; // Retrieve client ID from URL parameter

    // Find the client by ID
    const client = await Client.findByPk(clientId);
    if (!client) {
      return res.status(404).json({ error: "Client not found" });
    }

    // Delete the client
    await client.destroy();

    res.json({ message: "Client deleted successfully" });
  } catch (err) {
    console.error("Error deleting client:", err.message);
    res.status(500).json({ error: "An error occurred" });
  }
});
