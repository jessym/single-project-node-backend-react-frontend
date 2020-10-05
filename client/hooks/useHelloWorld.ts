import useSWR from 'swr';
import { host } from './host';

export function useHelloWorld() {
  const { data, error } = useSWR(`${host}/api/hello-world`);
  if (error) {
    console.error(error);
  }
  return data || undefined;
}
