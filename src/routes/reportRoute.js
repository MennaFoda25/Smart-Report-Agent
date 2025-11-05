const express = ("express");
const { generateReport } = ("../services/aiService.js");

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { topic, data } = req.body;
    const report = await generateReport(topic, data);
    res.status(200).json({ report });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
