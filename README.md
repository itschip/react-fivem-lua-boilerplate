# A React boilerplate for FiveM, with Lua.

# Note
This repo is rather deprecated than anyhting. I recommend you use https://github.com/itschip/fivem-react-webpack5 instead.

## Usage and installation
To use the boilerplate, clone or download the repo, and add it to your resource folder. 

### Installation
Run `yarn` or `npm install` in the ``web`` folder to install ``node_modules``. This will make it possible to build and watch the files. So you can either develop in the browser and build a production build to use in the server. 

If you have not installed `yarn`, or `node` for that sake, the links are below.

Yarn: (https://yarnpkg.com/getting-started/install) <br>
Node: (https://nodejs.org/en/)

## Note
If you change resource name, change the `resource` to match your resource name.
```js
<NuiProvider resource="react-fivem-lua-boilerplate">
  <App />
</NuiProvider>
```

### Develop
To open in the browser run ``yarn/npm run start``. 

### Build
To build the NUI, after you have installed `node_modules`, you run ``yarn run build:resources``, or ``npm run build:resources`` if you installed `node_modules` with `npm` 


## Example 

### Register a nui event 
#### Nui part

``core/hooks/useVisibilty``
```js
import { useRecoilValue } from 'recoil';
import { coreState } from './state';

export const useVisibility = () => {
  const visibility = useRecoilValue(coreState.visibility);
  return { visibility }
}
```

This creates the custom hook and uses the state from `coreState` states
```js
import { atom } from 'recoil';

export const coreState = {
  visibility: atom({
    key: 'coreStateHidden',
    default: true
  }),
}
```

Then if you want to write to the state from client side, you need to create, what I like to call, a `service` for the hooks. Here is how it's done.

```js
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
```

``REACTNUI`` is the ``app``, ``setVisibility`` is the `method` and `setShowHide` is the state you want to write to.

This is done so you can keep your ``SendNuiMessages`` more organizied. 

#### Lua part

```lua
-- Example of how it works. Look at the `useCoreService`, and the nui function in `nui-events`

RegisterCommand('show:nui', function(source, args, rawCommand)
  SendNuiMessage({
    app = "REACTNUI",
    method = "setVisibility",
    data = true
  })
end, false)
```

There you go, if something is wrong, leave a issue for me to look at. Have fun!
