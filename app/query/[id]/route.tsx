import { Customer } from "@/app/lib/definitions";
import { sql } from "@vercel/postgres";

export async function GET() {
  const data = await sql<Customer>`select * from customers`;
  return Response.json({
    code: 200,
    msg: "success",
    data: data.rows,
  });
}
