import { redis } from "@/lib/redis";
import { NextRequest, NextResponse } from "next/server";

const actions = ["sun_tracker_analytics"];

export async function POST(request: NextRequest) {
  const { pathname } = await request.json();
  await redis.hincrby(actions[0], pathname, 1);
  return NextResponse.json({ success: true });
}
