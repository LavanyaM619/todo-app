import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Get latest 5 incomplete tasks
app.get('/tasks', async (req: Request, res: Response) => {
  try {
    const tasks = await prisma.task.findMany({
      where: { isCompleted: false }, // use isCompleted
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Create new task
app.post('/tasks', async (req: Request, res: Response) => {
  try {
    const { title, description } = req.body;
    if (!title) return res.status(400).json({ error: 'Title is required' });

    const task = await prisma.task.create({
      data: { title, description, isCompleted: false }, // use isCompleted
    });
    res.status(201).json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Mark task as done
app.patch('/tasks/:id/done', async (req: Request, res: Response) => {
  try {
    const id = req.params.id;  // keep as string (UUID)
    const task = await prisma.task.update({
      where: { id },  // string id
      data: { isCompleted: true }, // use isCompleted
    });
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
