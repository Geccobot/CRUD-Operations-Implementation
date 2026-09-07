import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const items = await prisma.item.findMany();

    return NextResponse.json(items);
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch items" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, description } = body;

    if (!name) {
      return NextResponse.json(
        { error: "Name is required" },
        { status: 400 }
      );
    }

    const item = await prisma.item.create({
      data: {
        name,
        description,
      },
    });

    return NextResponse.json(item, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: "Failed to create item" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();

    const { id, name, description } = body;

    if (!id) {
      return NextResponse.json(
        { error: "ID is required" },
        { status: 400 }
      );
    }

    const updatedItem = await prisma.item.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        description,
      },
    });

    return NextResponse.json(updatedItem);
  } catch {
    return NextResponse.json(
      { error: "Failed to update item" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json();

    const { id } = body;

    if (!id) {
      return NextResponse.json(
        { error: "ID is required" },
        { status: 400 }
      );
    }

    await prisma.item.delete({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json({
      message: "Item deleted successfully",
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to delete item" },
      { status: 500 }
    );
  }
}