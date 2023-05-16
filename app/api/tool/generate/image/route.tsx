import { ImageResponse } from "next/server";
import { GiCat } from "react-icons/gi";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export const runtime = "edge";

export async function GET() {
  return new ImageResponse(<GiCat size={32} />, size);
}
