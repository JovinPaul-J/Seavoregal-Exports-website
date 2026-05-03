import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb/client';

function verifyAdminToken(request: NextRequest): boolean {
  const token = request.cookies.get('admin_token')?.value;
  return !!token && token.length === 64;
}

export async function GET(request: NextRequest) {
  try {
    const client = await clientPromise;
    const db = client.db();
    const products = await db.collection('products').find({}).toArray();
    
    // Transform _id to id
    const formattedProducts = products.map(p => ({
      ...p,
      id: p._id.toString(),
      _id: undefined
    }));
    
    return NextResponse.json(formattedProducts);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  if (!verifyAdminToken(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const { name, category, image, description, specifications, applications, certifications } = body;

    if (!name || !category || !image || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();
    
    const newProduct = {
      name,
      category,
      image,
      description,
      specifications: specifications || {},
      applications: applications || [],
      certifications: certifications || [],
      createdAt: new Date(),
    };
    
    const result = await db.collection('products').insertOne(newProduct);
    
    return NextResponse.json({ ...newProduct, id: result.insertedId.toString() }, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json(
      { error: 'Failed to create product' },
      { status: 500 }
    );
  }
}
