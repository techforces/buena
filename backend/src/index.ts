import express from "express";
import cors from "cors";
import prisma from "./prisma";
import { error } from "node:console";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
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

app.post("/create-property", async (req, res) => {
  try {
    const {
      name,
      type, //WEG or MV
      manager,
      accountant,
    } = req.body;

    console.log(name, type, manager, accountant);

    if (!name || !type || !manager || !accountant) {
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
        // file: {
        //   create: {
        //     name: fileName,
        //     data: fileData,
        //   },
        // },
      },
      //   include: {
      //     file: true,
      //   },
    });

    res.status(201).json(property);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to create property",
    });
  }
});

app.get("/properties", async (req, res) => {
  try {
    const properties = await prisma.property.findMany();

    res.status(200).json(properties);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to fetch properties",
    });
  }
});

app.post("/create-building", async (req, res) => {
  try {
    const { street, houseNumber, otherDetails, propertyId } = req.body;

    if (!street || !houseNumber || !propertyId) {
      return res.status(400).json({
        error: "Missing street, house number and specified property",
      });
    }

    const building = await prisma.building.create({
      data: {
        street,
        houseNumber,
        otherDetails,
        propertyId,
      },
    });

    res.status(201).json(building);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to create building",
    });
  }
});

app.get("/buildings", async (req, res) => {
  try {
    const buildings = await prisma.building.findMany();

    res.status(200).json(buildings);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to fetch buildings",
    });
  }
});

app.post("/create-unit", async (req, res) => {
  try {
    const {
      number,
      type,
      floor,
      entrance,
      size,
      share,
      constructionYear,
      rooms,
      buildingId,
    } = req.body;

    if (
      !number ||
      !type ||
      !floor ||
      !entrance ||
      !size ||
      !share ||
      !constructionYear ||
      !rooms ||
      !buildingId
    ) {
      return res.status(400).json({
        error:
          "Missing number, type, floor, entrance, size, share, construction year, rooms or specified building",
      });
    }

    const unit = await prisma.unit.create({
      data: {
        number,
        type,
        floor,
        entrance,
        size,
        share,
        constructionYear,
        rooms,
        buildingId,
      },
    });

    res.status(201).json(unit);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Failed to create unit",
    });
  }
});

app.get("/units", async (req, res) => {
  try {
    const units = await prisma.unit.findMany();
    res.status(200).json(units);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Failed to fetch buildings",
    });
  }
});
