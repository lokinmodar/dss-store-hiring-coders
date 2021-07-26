/* eslint-disable @typescript-eslint/no-explicit-any */
import UFs from '../../database/UFs.json';

export function getUFsLocalJson(): { value: any; label: any }[] {
  return UFs.map((uf) => ({ value: uf.id, label: uf.nome }));
}
