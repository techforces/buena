import express from "express";
import prisma from "./prisma";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(
    `Server is running on  \x1b[34m${`http://localhost:${PORT}`}\x1b[0m`
  );
});

app.get("/", async (req, res) => {
  try {
    res.json({
      message: "API connection successful!",
    });
  } catch (err) {
    console.error("Error connecting to API:", err);
    res.status(500).json({ error: "Failed to connect." });
  }
});

app.get("/create-property", async (req, res) => {
  try {
    const {
      name,
      type, //WEG or MV
      manager,
      accountant,
      fileName,
      fileData,
    } = req.query;

    if (!name || !type || !manager || !accountant || !fileName || !fileData) {
      return res.status(400).json({
        error: "Missing required query parameters",
      });
    }

    const property = await prisma.property.create({
      data: {
        name,
        type,
        manager,
        accountant,
        file: {
          create: {
            name: fileName,
            data: fileData,
          },
        },
      },
      include: {
        file: true,
      },
    });

    res.status(201).json(property);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to create property",
    });
  }
});
