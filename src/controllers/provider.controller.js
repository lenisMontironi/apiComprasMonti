const Provider = require('../models/Provider');

// GET /api/providers
exports.getAllProviders = async (req, res) => {
  try {
    const providers = await Provider.findAll();
    res.status(200).json(providers);
  } catch (error) {
    console.error('Error fetching providers:', error);
    res.status(500).json({ message: 'Failed to fetch providers', error: error.message });
  }
};

// GET /api/providers/:id
exports.getProviderById = async (req, res) => {
  try {
    const provider = await Provider.findByPk(req.params.id);
    if (!provider) return res.status(404).json({ message: 'Provider not found' });
    res.json(provider);
  } catch (error) {
    console.error('Error fetching provider:', error);
    res.status(500).json({ message: 'Failed to fetch provider', error: error.message });
  }
};

// POST /api/providers
exports.createProvider = async (req, res) => {
  try {
    const newProvider = await Provider.create(req.body);
    res.status(201).json(newProvider);
  } catch (error) {
    console.error('Error creating provider:', error);
    res.status(500).json({ message: 'Failed to create provider', error: error.message });
  }
};

// PUT /api/providers/:id
exports.updateProvider = async (req, res) => {
  try {
    const provider = await Provider.findByPk(req.params.id);
    if (!provider) return res.status(404).json({ message: 'Provider not found' });

    await provider.update(req.body);
    res.json(provider);
  } catch (error) {
    console.error('Error updating provider:', error);
    res.status(500).json({ message: 'Failed to update provider', error: error.message });
  }
};

// DELETE /api/providers/:id
exports.deleteProvider = async (req, res) => {
  try {
    const provider = await Provider.findByPk(req.params.id);
    if (!provider) return res.status(404).json({ message: 'Provider not found' });

    await provider.destroy();
    res.json({ message: 'Provider deleted successfully' });
  } catch (error) {
    console.error('Error deleting provider:', error);
    res.status(500).json({ message: 'Failed to delete provider', error: error.message });
  }
};

