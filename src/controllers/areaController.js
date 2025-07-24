const Area = require('../models/Area');

// GET /api/areas
exports.getAllAreas = async (req, res) => {
  try {
    const areas = await Area.findAll();
    res.status(200).json(areas);
  } catch (error) {
    console.error('Error fetching areas:', error);
    res.status(500).json({ message: 'Failed to fetch areas', error: error.message });
  }
};

// GET /api/areas/:id
exports.getAreaById = async (req, res) => {
  try {
    const area = await Area.findByPk(req.params.id);
    if (!area) return res.status(404).json({ message: 'Area not found' });
    res.json(area);
  } catch (error) {
    console.error('Error fetching area:', error);
    res.status(500).json({ message: 'Failed to fetch area', error: error.message });
  }
};

// POST /api/areas
exports.createArea = async (req, res) => {
  try {
    const newArea = await Area.create(req.body);
    res.status(201).json(newArea);
  } catch (error) {
    console.error('Error creating area:', error);
    res.status(500).json({ message: 'Failed to create area', error: error.message });
  }
};

// PUT /api/areas/:id
exports.updateArea = async (req, res) => {
  try {
    const area = await Area.findByPk(req.params.id);
    if (!area) return res.status(404).json({ message: 'Area not found' });

    await area.update(req.body);
    res.json(area);
  } catch (error) {
    console.error('Error updating area:', error);
    res.status(500).json({ message: 'Failed to update area', error: error.message });
  }
};

// DELETE /api/areas/:id
exports.deleteArea = async (req, res) => {
  try {
    const area = await Area.findByPk(req.params.id);
    if (!area) return res.status(404).json({ message: 'Area not found' });

    await area.destroy();
    res.json({ message: 'Area deleted successfully' });
  } catch (error) {
    console.error('Error deleting area:', error);
    res.status(500).json({ message: 'Failed to delete area', error: error.message });
  }
};
