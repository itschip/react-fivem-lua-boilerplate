import { useSetRecoilState } from 'recoil';
import { useVisibility } from './useVisibility';
import { coreState } from './state';
import { useNuiEvent } from '../../nui-events/hooks/useNuiEvent';


export const useCoreService = () => {
  const setShowHide = useSetRecoilState(coreState.visibility);
  // You can change these strings to whatever you wish :)
  useNuiEvent("REACTNUI", "setVisibility", setShowHide);
  return useVisibility()
}