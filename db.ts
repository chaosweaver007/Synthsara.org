// Legacy in-memory helpers retained for prototype compatibility.
// This module has no durable database connection and must not be presented as a
// production WORTH ledger, user vault, or persistence service.

type LegacyIntention = {
  id: string;
  user_id: string;
  text: string;
  created_at: string;
};

const intentions = new Map<string, LegacyIntention>();
let WORTHCounter = 0;

export async function saveIntention(
  text: string,
  userId = 'anonymous',
): Promise<{ intention: LegacyIntention; WORTHCounter: number }> {
  const id = crypto.randomUUID();
  const timestamp = new Date().toISOString();
  const intention: LegacyIntention = {
    id,
    user_id: userId,
    text,
    created_at: timestamp,
  };

  intentions.set(id, intention);

  // Historical prototype behavior only. This counter is not transferable value,
  // verified WORTH, compensation, or an operating economy.
  WORTHCounter += 1;

  return { intention, WORTHCounter };
}

export async function listIntentions(
  userId = 'anonymous',
): Promise<LegacyIntention[]> {
  return Array.from(intentions.values())
    .filter((intention) => intention.user_id === userId)
    .sort(
      (left, right) =>
        Date.parse(right.created_at) - Date.parse(left.created_at),
    );
}

/**
 * @deprecated Historical prototype alias. It increments only an in-memory
 * demonstration counter and does not mint currency or verified WORTH.
 */
export async function mintPower(
  _userId = 'anonymous',
  amount = 1,
): Promise<{ WORTHCounter: number }> {
  WORTHCounter += amount;
  return { WORTHCounter };
}

/**
 * @deprecated Returns an in-memory demonstration counter, not a balance.
 */
export async function getWORTHBalance(
  _userId = 'anonymous',
): Promise<{ WORTHCounter: number }> {
  return { WORTHCounter };
}

/**
 * Historical placeholder retained to avoid implying that an undeclared
 * Supabase dependency or production database connection exists.
 */
export const createSupabaseClient = (): null => null;
