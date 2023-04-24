import { useStorage, useMutation } from "./liveblocks.config";

export function Room() {
  const person = useStorage((root) => root.person);

  if (!person) {
    return <div>Loading...</div>;
  }

  return <div>Person: {JSON.stringify(person)}</div>;
}
