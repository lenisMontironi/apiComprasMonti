import { Request, Response } from 'express';
import Provider from '../models/Provider';

// GET /api/providers
export const getAllProviders = async (req: Request, res: Response) => {
  try {
    const providers = await Provider.findAll();
    res.status(200).json(providers);
  } catch (error: any) {
    console.error('Error fetching providers:', error);
    res.status(500).json({ message: 'Failed to fetch providers', error: error.message });
  }
};

// GET /api/providers/:id
export const getProviderById = async (req: Request, res: Response) => {
  try {
    const provider = await Provider.findByPk(req.params.id);
    if (!provider) return res.status(404).json({ message: 'Provider not found' });
    res.json(provider);
  } catch (error: any) {
    console.error('Error fetching provider:', error);
    res.status(500).json({ message: 'Failed to fetch provider', error: error.message });
  }
};

// POST /api/providers
export const createProvider = async (req: Request, res: Response) => {
  try {
    const newProvider = await Provider.create(req.body);
    res.status(201).json(newProvider);
  } catch (error: any) {
    console.error('Error creating provider:', error);
    res.status(500).json({ message: 'Failed to create provider', error: error.message });
  }
};

// PUT /api/providers/:id
export const updateProvider = async (req: Request, res: Response) => {
  try {
    const provider = await Provider.findByPk(req.params.id);
    if (!provider) return res.status(404).json({ message: 'Provider not found' });

    await provider.update(req.body);
    res.json(provider);
  } catch (error: any) {
    console.error('Error updating provider:', error);
    res.status(500).json({ message: 'Failed to update provider', error: error.message });
  }
};

// DELETE /api/providers/:id
export const deleteProvider = async (req: Request, res: Response) => {
  try {
    const provider = await Provider.findByPk(req.params.id);
    if (!provider) return res.status(404).json({ message: 'Provider not found' });

    await provider.destroy();
    res.json({ message: 'Provider deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting provider:', error);
    res.status(500).json({ message: 'Failed to delete provider', error: error.message });
  }
};
