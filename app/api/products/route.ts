import { NextResponse } from 'next/server';
import { products } from '../products/data'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const query = searchParams.get('q');

  let currentPosts = products;

  if (query) {
    currentPosts = products.filter(post => post.title.toLowerCase().includes(query.toLowerCase()))
  }

  return NextResponse.json(currentPosts)
}

export async function POST(req: Request) {
  const body = await req.json()

  console.log(body)

  return NextResponse.json({ body })
}