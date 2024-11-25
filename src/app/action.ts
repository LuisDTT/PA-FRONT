"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function navigate(path: string) {
  redirect(path);
}

export async function revalidate(path: string) {
  revalidatePath(path);
}
