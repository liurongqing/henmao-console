import { ImageResponse } from "next/server";
import { GiCat } from "react-icons/gi";

const size = {
  width: 32,
  height: 32,
};

const contentType = "image/png";

const runtime = "edge";

export async function GET() {
  return new ImageResponse(<GiCat size={32} />, size);
}
