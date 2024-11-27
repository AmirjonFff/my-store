import type { NextApiRequest, NextApiResponse } from 'next';

const products = [
  { id: 1, name: 'Product 1', description: 'Description 1', price: 100, image: '/product1.jpg' },
  { id: 2, name: 'Product 2', description: 'Description 2', price: 200, image: '/product2.jpg' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(products);
}
