import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));

  return NextResponse.json({
    ok: true,
    reference: "rh-pay-001",
    status: "pending",
    payload: body
  });
}
