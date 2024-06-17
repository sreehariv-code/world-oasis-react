import supabase from "./supabase";
import { PAGE_SIZE } from "../utils/constants";

export async function getAllGuests({ page }) {
  let query = supabase.from("guests").select("*", { count: "exact" });

  //Pagiantion in the Guest List
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data, error, count } = await query;

  if (error) {
    throw new Error("Guests could not be loaded");
  }
  return { data, count };
}

export async function createEditGuest(newGuest, id) {
  let query = supabase.from("guests");

  if (id) {
    query = query.update([{ ...newGuest }]).eq("id", id);
  } else {
    query = query.insert([{ ...newGuest }]);
  }

  const { data, error } = await query.select().single();

  if (error) {
    throw new Error("Guest could not be created");
  }

  return data;
}
