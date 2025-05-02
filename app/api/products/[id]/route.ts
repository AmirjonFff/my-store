import { products } from "../data";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: any) {
    const { params } = context;

    console.log(params, 10)

    const product = products.find(product => params.id === product.id.toString());

    if (!product) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json({
        product,
    });
}