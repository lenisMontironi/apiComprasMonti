import { Request, Response } from 'express';
import Area from '../models/Area';

// GET /api/areas
export const getAllAreas = async (req: Request, res: Response) => {
  try {
    const areas = await Area.findAll();
    res.status(200).json(areas);
  } catch (error: any) {
    console.error('Error fetching areas:', error);
    res.status(500).json({ message: 'Failed to fetch areas', error: error.message });
  }
};

// GET /api/areas/:id
export const getAreaById = async (req: Request, res: Response) => {
  try {
    const area = await Area.findByPk(req.params.id);
    if (!area) return res.status(404).json({ message: 'Area not found' });
    res.json(area);
  } catch (error: any) {
    console.error('Error fetching area:', error);
    res.status(500).json({ message: 'Failed to fetch area', error: error.message });
  }
};

// POST /api/areas
export const createArea = async (req: Request, res: Response) => {
  try {
    const newArea = await Area.create(req.body);
    res.status(201).json(newArea);
  } catch (error: any) {
    console.error('Error creating area:', error);
    res.status(500).json({ message: 'Failed to create area', error: error.message });
  }
};

// PUT /api/areas/:id
export const updateArea = async (req: Request, res: Response) => {
  try {
    const area = await Area.findByPk(req.params.id);
    if (!area) return res.status(404).json({ message: 'Area not found' });

    await area.update(req.body);
    res.json(area);
  } catch (error: any) {
    console.error('Error updating area:', error);
    res.status(500).json({ message: 'Failed to update area', error: error.message });
  }
};

// DELETE /api/areas/:id
export const deleteArea = async (req: Request, res: Response) => {
  try {
    const area = await Area.findByPk(req.params.id);
    if (!area) return res.status(404).json({ message: 'Area not found' });

    await area.destroy();
    res.json({ message: 'Area deleted successfully' });
  } catch (error: any) {
    console.error('Error deleting area:', error);
    res.status(500).json({ message: 'Failed to delete area', error: error.message });
  }
};
