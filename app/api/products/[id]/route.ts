import { products } from "../data";
import { NextResponse } from "next/server";

export async function GET(req: Request, context: any) {
    const { params } = context;
    const product = products.filter(product => params.id === product.id.toString())

    return NextResponse.json({
        product
    })
}