import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb/client';
import { ObjectId } from 'mongodb';

function verifyAdminToken(request: NextRequest): boolean {
  const token = request.cookies.get('admin_token')?.value;
  return !!token && token.length === 64;
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    if (!ObjectId.isValid(params.id)) {
      return NextResponse.json({ error: 'Invalid product ID' }, { status: 400 });
    }
    const client = await clientPromise;
    const db = client.db();
    const product = await db.collection('products').findOne({ _id: new ObjectId(params.id) });
    
    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ ...product, id: product._id.toString(), _id: undefined });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!verifyAdminToken(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    if (!ObjectId.isValid(params.id)) {
      return NextResponse.json({ error: 'Invalid product ID' }, { status: 400 });
    }
    const body = await request.json();
    
    // Remove _id or id from body before updating if they exist
    delete body._id;
    delete body.id;
    
    const client = await clientPromise;
    const db = client.db();
    
    const result = await db.collection('products').findOneAndUpdate(
      { _id: new ObjectId(params.id) },
      { $set: { ...body, updatedAt: new Date() } },
      { returnDocument: 'after' }
    );
    
    if (!result) {
       return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    
    return NextResponse.json({ ...result, id: result._id?.toString() || params.id, _id: undefined });
  } catch (error) {
    console.error('Error updating product:', error);
    return NextResponse.json(
      { error: 'Failed to update product' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  if (!verifyAdminToken(request)) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    if (!ObjectId.isValid(params.id)) {
      return NextResponse.json({ error: 'Invalid product ID' }, { status: 400 });
    }
    const client = await clientPromise;
    const db = client.db();
    
    const result = await db.collection('products').deleteOne({ _id: new ObjectId(params.id) });
    
    if (result.deletedCount === 0) {
      return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }
    
    return NextResponse.json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json(
      { error: 'Failed to delete product' },
      { status: 500 }
    );
  }
}
