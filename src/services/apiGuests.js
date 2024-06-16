import supabase from "./supabase";

export async function getAllGuests() {
  const { data, error } = await supabase.from("guests").select("*");

  if (error) {
    throw new Error("Guests could not be loaded");
  }
  return data;
}

export async function createEditGuest(newGuest, id) {
  let query = supabase.from("guests");

  if (!id) query = query.insert([{ ...newGuest }]);

  const { data, error } = await query.select().single();

  if (error) {
    throw new Error("Guest could not be created");
  }

  return data;
}
