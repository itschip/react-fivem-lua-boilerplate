import { useRecoilValue } from 'recoil';
import { coreState } from './state';

export const useVisibility = () => {
  const visibility = useRecoilValue(coreState.visibility);
  return { visibility }
}